"use client";

// Lenis-powered smooth (inertial) scrolling for the homepage.
// - Fully disabled under prefers-reduced-motion (falls back to native scroll).
// - Exposes the instance as window.lenis so AnchorLink can scroll through Lenis.

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.1,
      easing: easeOutExpo, // used by lenis.scrollTo (anchor links)
    });
    window.lenis = lenis;

    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.lenis === lenis) delete window.lenis;
    };
  }, []);

  return null;
}
