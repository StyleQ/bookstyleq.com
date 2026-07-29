"use client";

import { useState } from "react";
import Turnstile from "@/components/Turnstile";
import posthog from "posthog-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setMessage("Please complete the verification check above.");
      return;
    }

    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          website: honeypot,
          turnstileToken,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const err = new Error(data?.error || "Request failed");
        err.fromServer = !!data?.error;
        throw err;
      }
      posthog.identify(trimmed);
      posthog.capture("newsletter_subscribed", { source: "footer" });
      setStatus("success");
      setMessage("You’re on the list. Your brochure is on its way to your inbox.");
      setEmail("");
    } catch (err) {
      // Turnstile tokens are single-use; get a fresh one for the retry.
      setTurnstileToken("");
      setTurnstileReset((n) => n + 1);
      setStatus("error");
      setMessage(
        err?.fromServer
          ? err.message
          : "Something went wrong. Please try again, or email chantel@bookstyleq.com.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="relative flex w-full max-w-[520px] flex-col items-center gap-2 rounded-3xl bg-white/15 px-8 py-7 text-center backdrop-blur-sm">
        <span className="font-heading text-[22px] text-white">
          Thank you.
        </span>
        <p className="text-[15px] leading-[24px] text-white/90">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative flex w-full max-w-[520px] flex-col items-center gap-2.5"
    >
      {/* Honeypot: invisible to humans, tempting to form-filling bots.
          The server fakes success when it arrives filled. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>
      <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Work email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="you@yourcommunity.org"
          aria-invalid={status === "error"}
          className="flex-1 rounded-full bg-white px-6 py-[16px] text-[15px] text-sq-ink shadow-sm outline-none transition placeholder:text-sq-muted focus:ring-2 focus:ring-white/70"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-sq-peach px-8 py-[16px] text-[15px] font-semibold text-sq-plum shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/10 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Send me the brochure"}
        </button>
      </div>
      {TURNSTILE_SITE_KEY && (
        <Turnstile
          siteKey={TURNSTILE_SITE_KEY}
          onToken={setTurnstileToken}
          resetSignal={turnstileReset}
          className="min-h-[65px]"
        />
      )}
      <p
        aria-live="polite"
        className={`min-h-[18px] text-[13px] ${
          status === "error" ? "text-white" : "text-white/70"
        }`}
      >
        {status === "error"
          ? message
          : "The brochure PDF, plus the occasional update. No spam, unsubscribe anytime."}
      </p>
    </form>
  );
}
