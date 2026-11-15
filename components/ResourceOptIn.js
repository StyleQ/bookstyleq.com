"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight, Mail, Clock } from "lucide-react";
import Turnstile from "@/components/Turnstile";
import posthog from "posthog-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const inputCls =
  "h-12 w-full rounded-xl border border-[#E3D8CC] bg-white px-4 text-[14.5px] text-sq-ink placeholder:text-[#A79C9F] transition-colors focus:border-sq-rose focus:ring-2 focus:ring-sq-rose/15 focus:outline-none";

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-[7px]">
      <span className="text-[13px] font-semibold text-sq-ink">{label}</span>
      {children}
    </label>
  );
}

// The offer card on an opt-in page: resource copy on the left, the request
// form on the right. Posts to /api/resource-optin, which emails the PDF.
export default function ResourceOptIn({ resource }) {
  const [form, setForm] = useState({ firstName: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [sentName, setSentName] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReset, setTurnstileReset] = useState(0);

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;

    const firstName = form.firstName.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    if (!firstName) {
      setStatus("error");
      setMessage("Please tell us your first name.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid work email.");
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
      const headers = { "Content-Type": "application/json" };
      try {
        headers["X-POSTHOG-DISTINCT-ID"] = posthog.get_distinct_id();
        const sessionId = posthog.get_session_id();
        if (sessionId) headers["X-POSTHOG-SESSION-ID"] = sessionId;
      } catch {}
      const res = await fetch("/api/resource-optin", {
        method: "POST",
        headers,
        body: JSON.stringify({
          slug: resource.slug,
          firstName,
          email,
          phone,
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
      posthog.identify(email, { first_name: firstName });
      posthog.capture("resource_requested", {
        resource: resource.slug,
        has_phone: !!phone,
      });
      setSentTo(email);
      setSentName(firstName);
      setStatus("success");
    } catch (err) {
      // Turnstile tokens are single-use; get a fresh one for the retry.
      setTurnstileToken("");
      setTurnstileReset((n) => n + 1);
      setStatus("error");
      setMessage(
        err?.fromServer
          ? err.message
          : "Something went wrong. Please try again, or email hello@bookstyleq.com.",
      );
    }
  }

  return (
    <div className="flex flex-col gap-10 rounded-[28px] bg-sq-hero-cream px-6 py-10 sm:px-10 lg:flex-row lg:items-start lg:gap-14 lg:rounded-[40px] lg:px-14 lg:pt-14 lg:pb-15">
      {/* Resource copy */}
      <div className="flex flex-1 flex-col gap-[18px]">
        <Image
          src={resource.image}
          alt={resource.imageAlt}
          width={520}
          height={390}
          priority
          className="h-auto w-full max-w-[520px] rounded-[28px]"
        />
        <span className="text-[13px] font-semibold tracking-[3px] text-sq-rose">
          {resource.eyebrow}
        </span>
        <h1 className="font-heading text-[32px] leading-[40px] font-medium text-sq-ink sm:text-[40px] sm:leading-[48px] lg:text-[46px] lg:leading-[54px]">
          {resource.title}
        </h1>
        <p className="text-[16px] leading-[27px] text-sq-ink-soft lg:text-[17px] lg:leading-[28px]">
          {resource.description}
        </p>
        <ul className="flex flex-col gap-3.5 pt-2.5">
          {resource.bullets.map((b) => (
            <li key={b} className="flex items-center gap-3">
              <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-sq-green-soft">
                <Check className="h-3.5 w-3.5 text-sq-green" strokeWidth={2.5} />
              </span>
              <span className="text-[15.5px] text-sq-ink">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Form card */}
      <div className="w-full rounded-[24px] bg-white px-7 py-9 shadow-[0_24px_60px_rgba(59,50,64,0.13)] sm:px-10 lg:w-[470px] lg:shrink-0">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-2 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sq-peach-soft">
              <Mail className="h-6 w-6 text-sq-rose" />
            </span>
            <span className="text-[12px] font-semibold tracking-[2px] text-sq-rose">
              ON ITS WAY
            </span>
            <h2 className="font-heading text-[26px] leading-[32px] font-medium text-sq-ink">
              Check your inbox, {sentName}
            </h2>
            <p className="max-w-[340px] text-[14.5px] leading-[22px] text-sq-muted">
              Your {resource.noun} is heading to{" "}
              <span className="text-sq-ink">{sentTo}</span> right now. If it
              doesn&apos;t land in a few minutes, take a peek in your spam
              folder.
            </p>
            <span className="flex items-center gap-1.5 rounded-full bg-sq-cream px-4 py-1.5 text-[12px] font-medium text-sq-muted">
              <Clock className="h-3.5 w-3.5 text-sq-rose" />
              Delivered in under a minute
            </span>
            <a
              href={resource.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sq-rose px-8 py-4 text-[15.5px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25"
            >
              Open the {resource.noun} now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-heading text-[26px] leading-[32px] font-medium text-sq-ink">
                Get instant access
              </h2>
              <p className="text-[14.5px] leading-[22px] text-sq-muted">
                Add your details and the {resource.noun} lands in your inbox
                right away.
              </p>
            </div>

            {/* Honeypot: invisible to humans, tempting to form-filling bots.
                The server fakes success when it arrives filled. */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 overflow-hidden"
            >
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

            <div className="flex flex-col gap-[15px]">
              <Field label="First name">
                <input
                  type="text"
                  autoComplete="given-name"
                  placeholder="Chantel"
                  value={form.firstName}
                  onChange={update("firstName")}
                  className={inputCls}
                  required
                />
              </Field>
              <Field label="Work email">
                <input
                  type="email"
                  autoComplete="email"
                  placeholder="you@community.com"
                  value={form.email}
                  onChange={update("email")}
                  className={inputCls}
                  required
                />
              </Field>
              <Field label="Phone number">
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="(305) 555 0123"
                  value={form.phone}
                  onChange={update("phone")}
                  className={inputCls}
                />
              </Field>
            </div>

            {TURNSTILE_SITE_KEY && (
              <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onToken={setTurnstileToken}
                resetSignal={turnstileReset}
                className="min-h-[65px]"
              />
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sq-rose py-4 text-[15.5px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting"
                ? "Sending..."
                : `Send me the ${resource.noun}`}
              {status !== "submitting" && <ArrowRight className="h-4 w-4" />}
            </button>

            {status === "error" && (
              <p role="alert" className="text-[13px] text-sq-coral">
                {message}
              </p>
            )}

            <p className="text-center text-[12.5px] leading-[18px] text-sq-muted">
              We send the {resource.noun} and the occasional note worth
              reading. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
