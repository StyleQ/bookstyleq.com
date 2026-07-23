import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Configurable via environment variables (see .env.example):
//   RESEND_API_KEY   required — your Resend API key
//   BOOKING_FROM     optional — verified sender
//   BOOKING_TO       optional — where booking requests land
const FROM = process.env.BOOKING_FROM || "StyleQ <chantel@mail.bookstyleq.com>";
const TO = process.env.BOOKING_TO || "chantel@bookstyleq.com";

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

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
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

  return NextResponse.json({ ok: true });
}
