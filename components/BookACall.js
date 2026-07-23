"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Mail, Phone } from "lucide-react";
import { PAD_X, Eyebrow } from "@/components/ui";
import posthog from "posthog-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TIMES = ["Morning", "Afternoon", "Evening"];

const STEPS = [
  "We reach out to find a time that works for you.",
  "We learn about your community, residents, and schedule.",
  "We map out a plan and a risk-free pilot, at no cost.",
];

const inputCls =
  "w-full rounded-xl border border-sq-line bg-white px-4 py-3 text-[15px] text-sq-ink placeholder:text-sq-muted/60 transition-colors focus:border-sq-rose focus:ring-2 focus:ring-sq-rose/15 focus:outline-none";
const labelCls = "text-[13px] font-semibold text-sq-ink";

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelCls}>{label}</span>
      {children}
    </label>
  );
}

export default function BookACall() {
  const [form, setForm] = useState({
    name: "",
    facility: "",
    email: "",
    phone: "",
    bestTime: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [message, setMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;

    const name = form.name.trim();
    const email = form.email.trim();
    if (!name) {
      setStatus("error");
      setMessage("Please tell us your name.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid work email.");
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
      const res = await fetch("/api/book-a-call", {
        method: "POST",
        headers,
        body: JSON.stringify({ ...form, name, email }),
      });
      if (!res.ok) throw new Error("Request failed");
      posthog.identify(email, { name, facility: form.facility || undefined });
      posthog.capture("book_a_call_submitted", {
        has_phone: !!form.phone.trim(),
        has_facility: !!form.facility.trim(),
        best_time: form.bestTime || null,
      });
      setSubmittedName(name.split(" ")[0]);
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again, or reach us directly at (414) 206-1690.",
      );
    }
  }

  return (
    <section
      className={`flex flex-col justify-center gap-12 ${PAD_X} py-16 lg:flex-row lg:gap-20 lg:py-24`}
    >
      {/* Left: intro + what happens next + direct contact */}
      <div className="flex max-w-[440px] flex-col gap-6">
        <div className="flex flex-col gap-4">
          <Eyebrow>BOOK A CALL</Eyebrow>
          <h1 className="font-heading text-[34px] leading-[42px] font-medium text-sq-ink sm:text-[40px] sm:leading-[48px]">
            Let&apos;s talk about your community
          </h1>
          <p className="text-[16px] leading-[26px] text-sq-muted">
            Tell us a little about your community and we&apos;ll reach out to set
            up a quick, no-pressure call. No scripts, just a real conversation
            about your residents.
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <span className="text-[13px] font-semibold tracking-[2px] text-sq-muted">
            WHAT HAPPENS NEXT
          </span>
          {STEPS.map((step, i) => (
            <div key={step} className="flex items-start gap-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sq-peach-soft text-[13px] font-semibold text-sq-rose">
                {i + 1}
              </span>
              <p className="text-[15px] leading-[24px] text-sq-ink">{step}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2.5 border-t border-sq-line pt-6">
          <span className="text-[14px] font-semibold text-sq-ink">
            Prefer to reach us directly?
          </span>
          <a
            href="tel:+14142061690"
            className="group flex items-center gap-2.5 text-[15px] text-sq-ink"
          >
            <Phone className="h-4 w-4 text-sq-rose" />
            <span className="transition-colors group-hover:text-sq-rose">
              (414) 206-1690
            </span>
          </a>
          <a
            href="mailto:hello@bookstyleq.com"
            className="group flex items-center gap-2.5 text-[15px] text-sq-ink"
          >
            <Mail className="h-4 w-4 text-sq-rose" />
            <span className="transition-colors group-hover:text-sq-rose">
              hello@bookstyleq.com
            </span>
          </a>
        </div>
      </div>

      {/* Right: form card / success card */}
      <div className="w-full max-w-[520px]">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-4 rounded-[28px] border border-sq-line bg-white px-8 py-12 text-center shadow-[0_24px_60px_-24px_rgba(116,80,143,0.25)]">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sq-peach-soft">
              <Check className="h-7 w-7 text-sq-teal" />
            </span>
            <Eyebrow className="text-sq-rose">REQUEST RECEIVED</Eyebrow>
            <h2 className="font-heading text-[26px] leading-[32px] font-medium text-sq-ink">
              You&apos;re on the calendar, almost
            </h2>
            <p className="max-w-[380px] text-[15px] leading-[24px] text-sq-muted">
              Thanks, {submittedName}. A StyleQ coordinator will reach out during
              your preferred window to lock in a quick, no-pressure call about
              your community.
            </p>
            <span className="rounded-full bg-sq-cream px-4 py-1.5 text-[13px] font-medium text-sq-muted">
              Typically within one business day
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-sq-rose px-7 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:bg-sq-rose/90"
              >
                Back to home
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center justify-center rounded-full border-[1.5px] border-sq-peach px-7 py-3 text-[15px] font-medium text-sq-ink transition-colors hover:border-sq-rose hover:text-sq-rose"
              >
                Explore services
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5 rounded-[28px] border border-sq-line bg-white px-7 py-8 shadow-[0_24px_60px_-24px_rgba(116,80,143,0.25)] sm:px-9 sm:py-9"
          >
            <div className="flex flex-col gap-1">
              <h2 className="font-heading text-[24px] font-medium text-sq-ink">
                Request your call
              </h2>
              <p className="text-[14px] text-sq-muted">
                We&apos;ll be in touch within one business day.
              </p>
            </div>

            <Field label="Full name">
              <input
                type="text"
                autoComplete="name"
                placeholder="Jane Doe"
                value={form.name}
                onChange={update("name")}
                className={inputCls}
                required
              />
            </Field>
            <Field label="Community / facility">
              <input
                type="text"
                autoComplete="organization"
                placeholder="Maplewood Senior Living"
                value={form.facility}
                onChange={update("facility")}
                className={inputCls}
              />
            </Field>
            <Field label="Work email">
              <input
                type="email"
                autoComplete="email"
                placeholder="you@yourcommunity.org"
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
                placeholder="(555) 000-0000"
                value={form.phone}
                onChange={update("phone")}
                className={inputCls}
              />
            </Field>

            <div className="flex flex-col gap-1.5">
              <span className={labelCls}>Best time to reach you</span>
              <div className="grid grid-cols-3 gap-2.5">
                {TIMES.map((t) => {
                  const active = form.bestTime === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() =>
                        setForm((f) => ({
                          ...f,
                          bestTime: active ? "" : t,
                        }))
                      }
                      aria-pressed={active}
                      className={`rounded-xl border px-3 py-2.5 text-[14px] font-medium transition-colors ${
                        active
                          ? "border-sq-rose bg-sq-rose text-white"
                          : "border-sq-line bg-white text-sq-ink hover:border-sq-rose"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {status === "error" && (
              <p role="alert" className="text-[14px] text-sq-coral">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 inline-flex items-center justify-center rounded-full bg-sq-rose px-8 py-3.5 text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : "Request my call"}
            </button>
            <p className="text-center text-[13px] text-sq-muted">
              No pressure, and we&apos;ll never share your details.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
