"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import AnchorLink from "./AnchorLink";

const menus = [
  {
    label: "Our Services",
    items: [
      { label: "Hair Styling", href: "/services/hair-styling" },
      { label: "Manicures & Nail Care", href: "/services/manicures-nail-care" },
      { label: "Gentle Facials", href: "/services/gentle-facials" },
      { label: "Grooming", href: "/services/grooming" },
    ],
  },
  {
    label: "Who We Serve",
    items: [
      { label: "Assisted Living Facilities", href: "/who-we-serve/assisted-living" },
      { label: "Skilled Nursing Facilities", href: "/who-we-serve/skilled-nursing" },
      { label: "Independent Living Facilities", href: "/who-we-serve/independent-living" },
    ],
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false); // mobile panel
  const [active, setActive] = useState(null); // desktop dropdown label
  const [scrolled, setScrolled] = useState(false); // past the top of the page

  // Hover-intent: keep the dropdown open briefly after the cursor leaves, so a
  // quick slip off the trigger (or a diagonal move to the menu) doesn't snap it
  // shut. Re-entering, or moving to the other menu, cancels the pending close.
  const closeTimer = useRef(null);
  const CLOSE_DELAY = 220;
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const openMenu = (label) => {
    cancelClose();
    setActive(label);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setActive(null), CLOSE_DELAY);
  };
  const close = () => {
    cancelClose();
    setOpen(false);
    setActive(null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => cancelClose, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between border-b px-6 py-3 transition-[background-color,border-color,box-shadow] duration-300 md:px-12 md:py-3.5 lg:px-20 ${
        scrolled
          ? "border-white/50 bg-sq-cream/70 shadow-[0_8px_30px_-12px_rgba(116,80,143,0.18)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <Link
        href="/"
        onClick={close}
        className="transition-opacity hover:opacity-80"
      >
        <Image
          src="/images/styleq-logo.png"
          alt="StyleQ"
          width={500}
          height={165}
          priority
          className="h-[26px] w-auto"
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-9 md:flex">
        {menus.map(({ label, items }) => (
          <div
            key={label}
            className="relative"
            onMouseEnter={() => openMenu(label)}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => {
                cancelClose();
                setActive(active === label ? null : label);
              }}
              aria-expanded={active === label}
              className="flex items-center gap-1.5 text-[15px] text-sq-ink transition-colors hover:text-sq-rose"
            >
              {label}
              <ChevronDown
                className={`h-[15px] w-[15px] transition-transform duration-200 ${
                  active === label ? "-rotate-180" : ""
                }`}
              />
            </button>
            {active === label && (
              <div className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-3">
                <div className="flex min-w-[240px] flex-col gap-1 rounded-2xl border border-sq-line bg-white p-2 shadow-xl shadow-sq-plum/5">
                  {items.map((item) => (
                    <AnchorLink
                      key={item.label}
                      href={item.href}
                      onClick={close}
                      className="rounded-xl px-4 py-2.5 text-[15px] text-sq-ink transition-colors hover:bg-sq-peach-soft hover:text-sq-rose"
                    >
                      {item.label}
                    </AnchorLink>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        <AnchorLink
          href="/meet-our-stylists"
          className="text-[15px] text-sq-ink transition-colors hover:text-sq-rose"
        >
          Meet our Stylists
        </AnchorLink>
        <AnchorLink
          href="/book-a-call"
          className="rounded-full bg-sq-rose px-[22px] py-[10px] text-[14px] font-medium text-white shadow-sm transition-all duration-300 hover:bg-sq-rose/90 hover:shadow-md hover:shadow-sq-rose/25"
        >
          Book a Call
        </AnchorLink>
      </nav>

      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-full text-sq-ink transition-colors hover:bg-sq-peach-soft md:hidden"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile panel */}
      {open && (
        <div className="absolute top-full right-0 left-0 z-50 flex flex-col gap-1 border-t border-sq-line bg-white px-6 py-4 shadow-lg md:hidden">
          {menus.map(({ label, items }) => (
            <div key={label} className="flex flex-col">
              <div className="px-3 pt-3 pb-1 text-[13px] font-semibold tracking-[1.5px] text-sq-muted">
                {label}
              </div>
              {items.map((item) => (
                <AnchorLink
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="rounded-xl px-3 py-2.5 text-[16px] text-sq-ink transition-colors hover:bg-sq-peach-soft"
                >
                  {item.label}
                </AnchorLink>
              ))}
            </div>
          ))}
          <AnchorLink
            href="/meet-our-stylists"
            onClick={close}
            className="rounded-xl px-3 py-3 text-[16px] text-sq-ink transition-colors hover:bg-sq-peach-soft"
          >
            Meet our Stylists
          </AnchorLink>
          <AnchorLink
            href="/book-a-call"
            onClick={close}
            className="mt-2 rounded-full bg-sq-rose px-6 py-3.5 text-center text-[15px] font-medium text-white shadow-sm"
          >
            Book a Call
          </AnchorLink>
        </div>
      )}
    </header>
  );
}
