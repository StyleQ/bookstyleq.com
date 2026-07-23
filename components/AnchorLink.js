"use client";

import Link from "next/link";

// In-page anchor link that always scrolls to its target on click, even when the
// URL hash already points there (next/link treats a same-hash click as a no-op).
// Falls back to normal navigation when the target isn't on the current page.
export default function AnchorLink({ href, onClick, children, ...props }) {
  function handleClick(e) {
    if (onClick) onClick(e);

    // Respect new-tab / modified clicks and anything already handled.
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    const hashIndex = typeof href === "string" ? href.indexOf("#") : -1;
    if (hashIndex === -1) return;

    const id = href.slice(hashIndex + 1);
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return; // let default navigation handle cross-page links

    e.preventDefault();
    // When Lenis is driving the page (see SmoothScroll), scroll through it so
    // the anchor jump shares the same smooth easing, offset for the sticky
    // header. Otherwise fall back to native, which follows the CSS
    // `scroll-behavior` + `scroll-padding-top` (both gated on reduced-motion).
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -64 });
    } else {
      el.scrollIntoView({ block: "start" });
    }
    // Keep the URL in sync without a native jump or history spam.
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
