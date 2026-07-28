import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getPostHogClient } from "@/lib/posthog-server";
import {
  clientIp,
  createRateLimiter,
  reportBlocked,
  verifyTurnstile,
} from "@/lib/bot-protection";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Configurable via environment variables (see .env.example):
//   RESEND_API_KEY        required — your Resend API key
//   BOOKING_FROM          optional — verified sender
//   BOOKING_TO            optional — where booking requests land
//   TURNSTILE_SECRET_KEY  optional — enables Cloudflare Turnstile verification
const FROM = process.env.BOOKING_FROM || "StyleQ <chantel@mail.bookstyleq.com>";
const TO = process.env.BOOKING_TO || "chantel@bookstyleq.com";

const rateLimited = createRateLimiter({ windowMs: 10 * 60 * 1000, max: 5 });

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
    console.error("[book-a-call] RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Booking isn’t configured yet." },
      { status: 503 },
    );
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    console.warn("[book-a-call] rate limited:", ip);
    await reportBlocked("book-a-call", "rate_limit", ip);
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

  // Honeypot: a hidden "website" field humans never see. If it's filled,
  // return a fake success so bots don't learn they were caught.
  if (clean(body.website)) {
    console.warn("[book-a-call] honeypot tripped:", ip);
    await reportBlocked("book-a-call", "honeypot", ip);
    return NextResponse.json({ ok: true });
  }

  if (!(await verifyTurnstile(clean(body.turnstileToken, 3000), ip, "book-a-call"))) {
    await reportBlocked("book-a-call", "turnstile", ip);
    return NextResponse.json(
      {
        ok: false,
        error: "Human verification failed. Please refresh and try again.",
      },
      { status: 403 },
    );
  }

  const name = clean(body.name);
  const email = clean(body.email);
  const facility = clean(body.facility);
  const phone = clean(body.phone, 40);
  const bestTime = clean(body.bestTime, 20);

  if (!name) {
    return NextResponse.json(
      { ok: false, error: "Name is required." },
      { status: 422 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email is required." },
      { status: 422 },
    );
  }

  const rows = [
    ["Name", name],
    ["Community / facility", facility || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Best time to reach", bestTime || "—"],
  ];

  const html = `<h2 style="font-family:sans-serif">New Book a Call request</h2>
<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:4px 12px 4px 0;color:#7c7382">${esc(
        k,
      )}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`,
  )
  .join("")}
</table>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `Book a Call: ${name}${facility ? ` (${facility})` : ""}`,
    html,
    text,
  });

  if (error) {
    console.error("[book-a-call] Resend send failed:", {
      name: error?.name,
      message: error?.message,
    });
    return NextResponse.json(
      { ok: false, error: "Could not send your request. Please try again." },
      { status: 502 },
    );
  }

  const distinctId =
    request.headers.get("X-POSTHOG-DISTINCT-ID") || email;
  const ph = getPostHogClient();
  if (ph) {
    ph.identify({
      distinctId: email,
      properties: { name, facility: facility || undefined },
    });
    ph.capture({
      distinctId,
      event: "book_a_call_received",
      properties: {
        has_phone: !!phone,
        has_facility: !!facility,
        best_time: bestTime || null,
        $session_id: request.headers.get("X-POSTHOG-SESSION-ID") || undefined,
      },
    });
    await ph.flush();
  }

  return NextResponse.json({ ok: true });
}
