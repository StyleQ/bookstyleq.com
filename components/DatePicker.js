"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, X } from "lucide-react";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MAX_DAYS_AHEAD = 90;

const pad = (n) => String(n).padStart(2, "0");
export const toISO = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

function fromISO(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function startOfDay(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function formatLong(iso) {
  return fromISO(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

/**
 * Optional, dependency-free date picker. Weekdays only (business calls),
 * starting tomorrow, up to ~3 months out. `value` is "YYYY-MM-DD" or "".
 */
export default function DatePicker({ value, onChange, className = "" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const { min, max } = useMemo(() => {
    const today = startOfDay(new Date());
    const min = new Date(today);
    min.setDate(min.getDate() + 1);
    const max = new Date(today);
    max.setDate(max.getDate() + MAX_DAYS_AHEAD);
    return { min, max };
  }, []);

  const [view, setView] = useState(() => {
    const base = value ? fromISO(value) : min;
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const year = view.getFullYear();
  const month = view.getMonth();
  const leading = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [
    ...Array(leading).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  const canPrev = new Date(year, month, 1) > new Date(min.getFullYear(), min.getMonth(), 1);
  const canNext = new Date(year, month + 1, 1) <= max;

  const isDisabled = (d) =>
    d < min || d > max || d.getDay() === 0 || d.getDay() === 6;

  const navCls =
    "flex h-8 w-8 items-center justify-center rounded-full text-sq-ink transition-colors hover:bg-sq-peach-soft disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <div className="flex items-stretch gap-2">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="dialog"
          aria-expanded={open}
          className={`flex w-full items-center gap-2.5 rounded-xl border bg-white px-4 py-3 text-left text-[15px] transition-colors focus:border-sq-rose focus:ring-2 focus:ring-sq-rose/15 focus:outline-none ${
            open ? "border-sq-rose" : "border-sq-line hover:border-sq-rose"
          } ${value ? "text-sq-ink" : "text-sq-muted/70"}`}
        >
          <CalendarDays className="h-4 w-4 shrink-0 text-sq-rose" />
          <span className="truncate">
            {value ? formatLong(value) : "Pick a date"}
          </span>
        </button>
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Clear selected date"
            className="flex w-11 shrink-0 items-center justify-center rounded-xl border border-sq-line bg-white text-sq-muted transition-colors hover:border-sq-rose hover:text-sq-rose"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {open && (
        <div
          role="dialog"
          aria-label="Choose a date"
          className="absolute left-0 z-20 mt-2 w-full min-w-[290px] rounded-2xl border border-sq-line bg-white p-4 shadow-[0_24px_60px_-20px_rgba(116,80,143,0.35)]"
        >
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setView(new Date(year, month - 1, 1))}
              disabled={!canPrev}
              aria-label="Previous month"
              className={navCls}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-heading text-[16px] font-medium text-sq-ink">
              {MONTHS[month]} {year}
            </span>
            <button
              type="button"
              onClick={() => setView(new Date(year, month + 1, 1))}
              disabled={!canNext}
              aria-label="Next month"
              className={navCls}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-1 text-center">
            {WEEKDAYS.map((w, i) => (
              <span
                key={i}
                className="pb-1 text-[12px] font-semibold text-sq-muted"
              >
                {w}
              </span>
            ))}
            {cells.map((d, i) => {
              if (!d) return <span key={`b${i}`} />;
              const iso = toISO(d);
              const disabled = isDisabled(d);
              const selected = iso === value;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={disabled}
                  onClick={() => {
                    onChange(iso);
                    setOpen(false);
                  }}
                  aria-label={formatLong(iso)}
                  aria-pressed={selected}
                  className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-[14px] transition-colors ${
                    selected
                      ? "bg-sq-rose font-semibold text-white"
                      : disabled
                        ? "cursor-not-allowed text-sq-muted/35"
                        : "text-sq-ink hover:bg-sq-peach-soft"
                  }`}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-center text-[12px] text-sq-muted">
            Weekdays only. We&apos;ll confirm the exact time with you.
          </p>
        </div>
      )}
    </div>
  );
}
