"use client";

import { useEffect, useRef } from "react";

// Document-relative top via the offset chain. Uses layout offsets (not
// getBoundingClientRect) so it ignores our own translate and any ancestor
// transforms, avoiding a feedback loop.
function docTop(node) {
  let top = 0;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return top;
}

// Subtle scroll parallax: translates its wrapper opposite to the scroll,
// eased toward zero when the element is centered in the viewport. `speed` is
// the fraction of the element's distance-from-center to offset by. Disabled
// for reduced-motion users. Keep the leaf's own rotation on the child, not here.
export default function Parallax({
  speed = 0.12,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let base = docTop(el);
    let ticking = false;
    let raf = 0;

    const update = () => {
      ticking = false;
      const center = base + el.offsetHeight / 2;
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const y = -(center - viewportCenter) * speed;
      el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    };

    const onResize = () => {
      base = docTop(el);
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}
