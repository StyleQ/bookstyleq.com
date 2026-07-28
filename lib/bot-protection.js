// Shared bot protections for the public form endpoints
// (/api/book-a-call, /api/subscribe).

import { getPostHogClient } from "@/lib/posthog-server";

// Records a blocked submission in PostHog (event: form_spam_blocked) so spam
// pressure is visible without digging through Vercel logs. Anonymous capture:
// $process_person_profile false keeps bot IPs from creating person profiles.
export async function reportBlocked(form, reason, ip) {
  const ph = getPostHogClient();
  if (!ph) return;
  try {
    ph.capture({
      distinctId: `bot:${ip}`,
      event: "form_spam_blocked",
      properties: {
        form,
        reason,
        ip,
        $process_person_profile: false,
      },
    });
    await ph.flush();
  } catch (err) {
    console.error(`[${form}] PostHog capture failed:`, err?.message);
  }
}

export function clientIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown"
  );
}

// Per-instance rate limiting: a blunt cap on burst abuse. Serverless
// instances each keep their own map, so this is a floor, not a guarantee;
// pair with a WAF rate-limit rule for a hard cap.
export function createRateLimiter({ windowMs, max }) {
  const hitsByIp = new Map();
  return function rateLimited(ip) {
    const now = Date.now();
    const hits = (hitsByIp.get(ip) || []).filter((t) => now - t < windowMs);
    hits.push(now);
    hitsByIp.set(ip, hits);
    if (hitsByIp.size > 1000) {
      for (const [key, times] of hitsByIp) {
        if (times.every((t) => now - t >= windowMs)) hitsByIp.delete(key);
      }
    }
    return hits.length > max;
  };
}

// Verifies a Cloudflare Turnstile token. Allows everything until
// TURNSTILE_SECRET_KEY is set, and fails open on a Cloudflare outage
// so real leads are never blocked. `tag` labels log lines per endpoint.
export async function verifyTurnstile(token, ip, tag) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  try {
    const params = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") params.set("remoteip", ip);
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: params },
    );
    const data = await res.json();
    if (!data.success) {
      console.warn(`[${tag}] Turnstile rejected:`, data["error-codes"]);
    }
    return !!data.success;
  } catch (err) {
    console.error(`[${tag}] Turnstile verify failed:`, err?.message);
    return true;
  }
}
