"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Mail, CircleCheck, Clock } from "lucide-react";
import BrandLeaf from "@/components/BrandLeaf";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BULLETS = [
  "The services and what a salon day looks like",
  "Licensing, insurance, and infection control",
  "How resident and family billing works",
  "How a risk-free pilot begins",
];

function BrochureCover({ className = "" }) {
  return (
    <div
      className={`flex flex-col justify-between rounded-[10px] bg-linear-[150deg,#74508F,#C65B89] p-3 shadow-[0_12px_28px_-8px_rgba(90,59,110,0.55)] ${className}`}
    >
      <BrandLeaf className="h-4 w-4 text-white/85" />
      <div className="flex flex-col gap-0.5">
        <span className="font-heading text-[12px] leading-[15px] text-white">
          StyleQ Facility Brochure
        </span>
        <span className="text-[9px] font-medium tracking-[1px] text-white/70">
          2026
        </span>
      </div>
    </div>
  );
}

export default function BrochureModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");
  const [sentTo, setSentTo] = useState("");
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSentTo(trimmed);
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Please try again, or email hello@bookstyleq.com.",
      );
    }
  }

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-title"
    >
      <div
        className="absolute inset-0 bg-[#2A2233]/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="animate-fade-up relative z-10 w-full max-w-[560px] rounded-[24px] bg-white p-6 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.45)] sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-sq-muted transition-colors hover:bg-sq-cream hover:text-sq-ink"
        >
          <X className="h-4 w-4" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-1 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sq-peach-soft">
              <Mail className="h-6 w-6 text-sq-rose" />
            </span>
            <span className="text-[12px] font-semibold tracking-[2px] text-sq-rose">
              ON ITS WAY
            </span>
            <h2
              id="brochure-title"
              className="font-heading text-[24px] font-medium text-sq-ink"
            >
              Check your inbox
            </h2>
            <p className="max-w-[380px] text-[14px] leading-[22px] text-sq-muted">
              The StyleQ brochure is heading to{" "}
              <span className="text-sq-ink">{sentTo}</span>{" "}right now. If it
              doesn&apos;t land in a few minutes, take a peek in your spam
              folder.
            </p>
            <BrochureCover className="my-1 h-[128px] w-[94px]" />
            <span className="flex items-center gap-1.5 rounded-full bg-sq-cream px-4 py-1.5 text-[12px] font-medium text-sq-muted">
              <Clock className="h-3.5 w-3.5 text-sq-rose" />
              Delivered in under a minute
            </span>
            <button
              type="button"
              onClick={onClose}
              className="mt-2 w-full rounded-full bg-sq-rose px-8 py-3.5 text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
            <BrochureCover className="hidden h-[168px] w-[118px] shrink-0 sm:flex" />
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex items-center gap-2">
                <BrandLeaf className="h-4 w-4 text-sq-rose" />
                <span className="text-[12px] font-semibold tracking-[2px] text-sq-rose">
                  THE BROCHURE
                </span>
              </div>
              <h2
                id="brochure-title"
                className="font-heading text-[23px] leading-[29px] font-medium text-sq-ink"
              >
                Everything you need to bring it to your team
              </h2>
              <p className="text-[14px] leading-[22px] text-sq-muted">
                We&apos;ll email you the brochure right away. No cost to your
                community, ever.
              </p>
              <div className="flex flex-col gap-2 pt-1">
                {BULLETS.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CircleCheck className="mt-[2px] h-4 w-4 shrink-0 text-sq-rose" />
                    <span className="text-[14px] leading-[20px] text-sq-ink">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 pt-2">
                <span className="text-[13px] font-semibold text-sq-ink">
                  Work email
                </span>
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <input
                    ref={inputRef}
                    type="email"
                    autoComplete="email"
                    placeholder="you@yourcommunity.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full flex-1 rounded-xl border border-sq-line bg-white px-4 py-3 text-[15px] text-sq-ink placeholder:text-sq-muted/60 transition-colors focus:border-sq-rose focus:ring-2 focus:ring-sq-rose/15 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="shrink-0 rounded-xl bg-sq-rose px-6 py-3 text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-lg hover:shadow-sq-rose/25 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending..." : "Send it to me"}
                  </button>
                </div>
                {status === "error" && (
                  <p role="alert" className="text-[13px] text-sq-coral">
                    {message}
                  </p>
                )}
                <p className="text-[12px] leading-[18px] text-sq-muted">
                  The brochure PDF, plus the occasional update. No spam,
                  unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
