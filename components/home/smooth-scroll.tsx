"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

function HashScroll() {
  const lenis = useLenis();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        'a[href^="#"]',
      );
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      event.preventDefault();
      lenis?.scrollTo(el as HTMLElement, { offset: 0 });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: reduced ? 1 : 0.075,
        duration: reduced ? 0 : 1.15,
        smoothWheel: !reduced,
        wheelMultiplier: 0.92,
        touchMultiplier: 1.4,
      }}
    >
      <HashScroll />
      {children}
    </ReactLenis>
  );
}
