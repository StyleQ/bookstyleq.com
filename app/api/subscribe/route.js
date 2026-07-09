import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Configurable via environment variables (see .env.example):
//   RESEND_API_KEY       required — your Resend API key
//   NEWSLETTER_FROM      optional — verified sender, e.g. "StyleQ <hello@bookstyleq.com>"
//   NEXT_PUBLIC_SITE_URL optional — base URL used to build the brochure link
const FROM = process.env.NEWSLETTER_FROM || "StyleQ <chantel@mail.bookstyleq.com>";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bookstyleq.com";
const BROCHURE_URL = `${SITE_URL}/brochure.pdf`;

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[subscribe] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "The newsletter isn’t configured yet." },
      { status: 503 },
    );
  }

  let email;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  email = typeof email === "string" ? email.trim() : "";
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  const resend = new Resend(apiKey);

  // 1. Send the brochure email (the "incentive"). This is what the visitor came for.
  const { error: sendError } = await resend.emails.send({
    from: FROM,
    to: email,
    subject: "Your StyleQ brochure is here",
    html: brochureHtml(),
    text: brochureText(),
  });

  if (sendError) {
    // Log the fields explicitly: the Resend error object flattens to "{}" under
    // some structured loggers, hiding the real cause (e.g. unverified domain).
    console.error(
      "[subscribe] Resend send failed:",
      sendError.statusCode,
      sendError.name,
      sendError.message,
    );
    return NextResponse.json(
      { ok: false, error: "We couldn’t send your brochure just now. Please try again." },
      { status: 502 },
    );
  }

  // 2. Add them to your Resend contacts for future updates. This is the
  //    account-level endpoint (POST /contacts) — no audience needed. Non-fatal:
  //    they already have their brochure, so a list error shouldn't fail the request.
  const { error: contactError } = await resend.contacts.create({
    email,
    unsubscribed: false,
  });
  if (contactError) {
    console.error(
      "[subscribe] Resend contact add failed:",
      contactError.statusCode,
      contactError.name,
      contactError.message,
    );
  }

  return NextResponse.json({ ok: true });
}

function brochureHtml() {
  return `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#fdf8f2;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#3b3240;">
    <div style="max-width:520px;margin:0 auto;padding:32px 24px;">
      <p style="font-size:13px;letter-spacing:2px;font-weight:600;color:#c65b89;margin:0 0 12px;">STYLEQ</p>
      <h1 style="font-size:26px;line-height:1.25;margin:0 0 16px;color:#3b3240;">Thanks for your interest in StyleQ</h1>
      <p style="font-size:16px;line-height:1.6;margin:0 0 24px;color:#7c7382;">
        Here is the brochure. It covers our services, licensing and insurance, how resident and family billing works, and how a risk-free pilot runs, at no cost to your community.
      </p>
      <p style="margin:0 0 28px;">
        <a href="${BROCHURE_URL}" style="display:inline-block;background:#c65b89;color:#ffffff;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:9999px;">
          Download the brochure (PDF)
        </a>
      </p>
      <p style="font-size:15px;line-height:1.6;margin:0 0 24px;color:#7c7382;">
        If a section of your community would be a good place to start, just reply to this email and we can talk through a pilot.
      </p>
      <hr style="border:none;border-top:1px solid #f0e7db;margin:24px 0;" />
      <p style="font-size:13px;line-height:1.6;color:#7c7382;margin:0;">
        StyleQ, on-site salon &amp; spa for senior living.<br />
        chantel@bookstyleq.com<br />
        You are receiving this because you requested the StyleQ brochure at ${SITE_URL}.
      </p>
    </div>
  </body>
</html>`;
}

function brochureText() {
  return [
    "Thanks for your interest in StyleQ.",
    "",
    "Here is the brochure. It covers our services, licensing and insurance, how resident and family billing works, and how a risk-free pilot runs, at no cost to your community:",
    BROCHURE_URL,
    "",
    "If a section of your community would be a good place to start, just reply to this email and we can talk through a pilot.",
    "",
    "StyleQ, on-site salon & spa for senior living.",
    "chantel@bookstyleq.com",
    `You are receiving this because you requested the StyleQ brochure at ${SITE_URL}.`,
  ].join("\n");
}
