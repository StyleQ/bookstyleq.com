"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import AnchorLink from "./AnchorLink";
import BrandLeaf from "./BrandLeaf";

const links = [
  { label: "Services", href: "/#services" },
  { label: "For Facilities", href: "/#facilities" },
  { label: "Contact", href: "/#contact" },
];

export default function NavBar({ solid = false }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      className={`relative z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-6 lg:px-20 ${
        solid ? "bg-white" : ""
      }`}
    >
      <Link
        href="/"
        onClick={close}
        className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
      >
        <BrandLeaf className="h-[26px] w-[26px] text-sq-teal transition-transform duration-300 group-hover:-rotate-6" />
        <span className="font-heading text-[27px] font-semibold text-sq-ink">
          StyleQ
        </span>
      </Link>

      {/* Desktop: nav links grouped on the right, beside the CTA */}
      <div className="hidden items-center gap-7 md:flex lg:gap-9">
        <nav className="flex items-center gap-6 lg:gap-8">
          {links.map(({ label, href }) => (
            <AnchorLink
              key={label}
              href={href}
              className="text-[15px] text-sq-ink transition-colors hover:text-sq-rose"
            >
              {label}
            </AnchorLink>
          ))}
        </nav>
        <AnchorLink
          href="/#contact"
          className="rounded-full bg-sq-rose px-[26px] py-[13px] text-[15px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-sq-rose/90 hover:shadow-md hover:shadow-sq-rose/25"
        >
          Get the Brochure
        </AnchorLink>
      </div>

      {/* Mobile: hamburger toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center rounded-full text-sq-ink transition-colors hover:bg-sq-peach-soft md:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute top-full right-0 left-0 z-50 flex flex-col gap-1 border-t border-sq-line bg-white px-6 py-4 shadow-lg md:hidden">
          {links.map(({ label, href }) => (
            <AnchorLink
              key={label}
              href={href}
              onClick={close}
              className="rounded-xl px-3 py-3 text-[16px] text-sq-ink transition-colors hover:bg-sq-peach-soft"
            >
              {label}
            </AnchorLink>
          ))}
          <AnchorLink
            href="/#contact"
            onClick={close}
            className="mt-2 rounded-full bg-sq-rose px-6 py-3.5 text-center text-[15px] font-medium text-white shadow-sm"
          >
            Get the Brochure
          </AnchorLink>
        </div>
      )}
    </header>
  );
}
