"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What if it doesn't work out with our residents or staff?",
    a: "We start with a small, risk-free pilot. If it isn't the right fit, you can stop anytime. No long-term contract, no penalty, no awkward exit.",
  },
  {
    q: "Are your stylists licensed and insured?",
    a: "Yes. Every stylist is state-licensed, background-checked, and covered by our liability insurance, with infection-control practices that keep you survey-ready.",
  },
  {
    q: "What happens if we already have a vendor contract?",
    a: "No problem. Many communities bring us in alongside an existing vendor as a supplemental option, or start a pilot ahead of a renewal. We work around your current arrangement.",
  },
  {
    q: "Who's responsible if a resident is unhappy with a service?",
    a: "We are. We own the resident relationship, gather feedback, and handle any make-good directly, so it never lands on your staff's desk.",
  },
  {
    q: "Does someone from our staff need to supervise the visits?",
    a: "No. We arrive with everything, run the salon day ourselves, and clean up when we leave. Your team doesn't schedule, staff, or supervise a thing.",
  },
  {
    q: "How does billing actually work if some residents pay themselves and others are billed through the facility?",
    a: "However fits you. We support resident self-pay, per-resident billing, and bulk facility billing, and you're only billed for the services residents actually receive.",
  },
  {
    q: "What if a resident can't leave their room or refuses to come to the salon?",
    a: "We come to them. Room visits are part of the service, so residents with limited mobility, or who simply prefer to stay in their room, still get cared for.",
  },
];

function FaqItem({ q, a, open, onToggle, id }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-sq-line bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        id={`${id}-button`}
        className="flex w-full items-center justify-between gap-6 px-[26px] py-5 text-left"
      >
        <span className="flex-1 text-[16px] leading-[22px] font-semibold text-sq-ink">
          {q}
        </span>
        <ChevronDown
          className={`h-[18px] w-[18px] shrink-0 text-sq-muted transition-transform duration-300 ${
            open ? "-rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!open}
        className="px-[26px] pb-5 text-[15px] leading-[24px] text-sq-muted"
      >
        {a}
      </div>
    </div>
  );
}

export default function FaqAccordion({ items = faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex w-full max-w-[920px] flex-col gap-3.5">
      {items.map((faq, i) => (
        <FaqItem
          key={faq.q}
          id={`faq-${i}`}
          q={faq.q}
          a={faq.a}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
