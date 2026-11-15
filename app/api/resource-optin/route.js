import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getPostHogClient } from "@/lib/posthog-server";
import { getResource } from "@/lib/resourcesData";
import {
  clientIp,
  createRateLimiter,
  reportBlocked,
  verifyTurnstile,
} from "@/lib/bot-protection";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Same stance as /api/subscribe: this endpoint emails an arbitrary address,
// so abuse burns our sending reputation. Keep the cap tight.
const rateLimited = createRateLimiter({ windowMs: 10 * 60 * 1000, max: 3 });

//   RESEND_API_KEY        required
//   NEWSLETTER_FROM       optional, verified sender for the guide email
//   NEWSLETTER_REPLY_TO   optional, where replies land
//   BOOKING_TO            optional, where new-lead notifications go
//   NEXT_PUBLIC_SITE_URL  optional, base URL used to build the PDF link
const FROM = process.env.NEWSLETTER_FROM || "StyleQ <chantel@mail.bookstyleq.com>";
const REPLY_TO = process.env.NEWSLETTER_REPLY_TO || "chantel@bookstyleq.com";
const LEAD_TO = process.env.BOOKING_TO || "chantel@bookstyleq.com";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.bookstyleq.com";

function clean(v, max = 200) {
  return (typeof v === "string" ? v.trim() : "").slice(0, max);
}

function esc(s) {
  return String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );
}

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[resource-optin] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Downloads aren’t configured yet." },
      { status: 503 },
    );
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    console.warn("[resource-optin] rate limited:", ip);
    await reportBlocked("resource-optin", "rate_limit", ip);
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot: fake success so bots don't learn they were caught.
  if (clean(body.website)) {
    console.warn("[resource-optin] honeypot tripped:", ip);
    await reportBlocked("resource-optin", "honeypot", ip);
    return NextResponse.json({ ok: true });
  }

  if (!(await verifyTurnstile(clean(body.turnstileToken, 3000), ip, "resource-optin"))) {
    await reportBlocked("resource-optin", "turnstile", ip);
    return NextResponse.json(
      {
        ok: false,
        error: "Human verification failed. Please refresh and try again.",
      },
      { status: 403 },
    );
  }

  const resource = getResource(clean(body.slug, 80));
  if (!resource) {
    return NextResponse.json(
      { ok: false, error: "We couldn’t find that resource." },
      { status: 404 },
    );
  }

  const firstName = clean(body.firstName, 80);
  const email = clean(body.email);
  const phone = clean(body.phone, 40);

  if (!firstName) {
    return NextResponse.json(
      { ok: false, error: "Please tell us your first name." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid work email." },
      { status: 422 },
    );
  }

  const resend = new Resend(apiKey);
  const fileUrl = `${SITE_URL}${resource.file}`;

  // 1. Deliver the resource. This is what the visitor came for.
  const { error: sendError } = await resend.emails.send({
    from: FROM,
    to: email,
    replyTo: REPLY_TO,
    subject: `Your copy of ${resource.title}`,
    html: deliveryHtml(resource, firstName, fileUrl),
    text: deliveryText(resource, firstName, fileUrl),
  });

  if (sendError) {
    console.error(
      "[resource-optin] Resend send failed:",
      sendError.statusCode,
      sendError.name,
      sendError.message,
    );
    return NextResponse.json(
      {
        ok: false,
        error: `We couldn’t send your ${resource.noun} just now. Please try again.`,
      },
      { status: 502 },
    );
  }

  // 2. Add to contacts. Non-fatal: they already have their download.
  const { error: contactError } = await resend.contacts.create({
    email,
    firstName,
    unsubscribed: false,
  });
  if (contactError) {
    console.error(
      "[resource-optin] Resend contact add failed:",
      contactError.statusCode,
      contactError.name,
      contactError.message,
    );
  }

  // 3. Tell the team about the new lead. Non-fatal for the same reason.
  const rows = [
    ["Resource", resource.title],
    ["First name", firstName],
    ["Email", email],
    ["Phone", phone || "—"],
  ];
  const { error: notifyError } = await resend.emails.send({
    from: FROM,
    to: LEAD_TO,
    replyTo: email,
    subject: `New download: ${resource.title} (${firstName})`,
    html: `<h2 style="font-family:sans-serif">New resource download</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:4px 12px 4px 0;color:#7c7382">${esc(
        k,
      )}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`,
  )
  .join("")}
</table>`,
    text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
  });
  if (notifyError) {
    console.error(
      "[resource-optin] lead notification failed:",
      notifyError.statusCode,
      notifyError.name,
      notifyError.message,
    );
  }

  const distinctId = request.headers.get("X-POSTHOG-DISTINCT-ID") || email;
  const ph = getPostHogClient();
  if (ph) {
    ph.identify({
      distinctId: email,
      properties: { email, first_name: firstName },
    });
    ph.capture({
      distinctId,
      event: "resource_email_sent",
      properties: {
        resource: resource.slug,
        has_phone: !!phone,
        $session_id: request.headers.get("X-POSTHOG-SESSION-ID") || undefined,
      },
    });
    await ph.flush();
  }

  return NextResponse.json({ ok: true });
}

function deliveryHtml(resource, firstName, fileUrl) {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#fdf8f2;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#3b3240;">
    <div style="max-width:520px;margin:0 auto;padding:32px 24px;">
      <p style="font-size:13px;letter-spacing:2px;font-weight:600;color:#c65b89;margin:0 0 12px;">STYLEQ</p>
      <h1 style="font-size:26px;line-height:1.25;margin:0 0 16px;color:#3b3240;">Hi ${esc(firstName)}, here is your ${esc(resource.noun)}</h1>
      <p style="font-size:16px;line-height:1.6;margin:0 0 24px;color:#7c7382;">
        ${esc(resource.title)} is ready to download. It is built so it adds nothing to your team's week.
      </p>
      <p style="margin:0 0 28px;">
        <a href="${fileUrl}" style="display:inline-block;background:#c65b89;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:9999px;">
          Download the ${esc(resource.noun)} (PDF)
        </a>
      </p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 24px;color:#7c7382;">
        If you would like a second pair of eyes on your results, just reply to this email and we can talk it through.
      </p>
      <hr style="border:none;border-top:1px solid #f0e7db;margin:24px 0;" />
      <p style="font-size:13px;line-height:1.6;color:#7c7382;margin:0;">
        StyleQ, on-site salon &amp; spa for senior living.<br />
        chantel@bookstyleq.com<br />
        You are receiving this because you requested ${esc(resource.title)} at ${SITE_URL}.
      </p>
    </div>
  </body>
</html>`;
}

function deliveryText(resource, firstName, fileUrl) {
  return [
    `Hi ${firstName}, here is your ${resource.noun}.`,
    "",
    `${resource.title} is ready to download. It is built so it adds nothing to your team's week:`,
    fileUrl,
    "",
    "If you would like a second pair of eyes on your results, just reply to this email and we can talk it through.",
    "",
    "StyleQ, on-site salon & spa for senior living.",
    "chantel@bookstyleq.com",
    `You are receiving this because you requested ${resource.title} at ${SITE_URL}.`,
  ].join("\n");
}
