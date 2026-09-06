"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/research", label: "Research", index: "01" },
  { href: "#hackathons", label: "Hackathons", index: "02" },
  { href: "#dino", label: "Play", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

function MagneticLink({
  href,
  children,
  className,
  onClick,
  external,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onClick={onClick}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * 0.28;
        const y = (e.clientY - (r.top + r.height / 2)) * 0.28;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "translate3d(0, 0, 0)";
      }}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function SiteNav({ ready }: { ready: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goHash = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    setOpen(false);
    window.setTimeout(() => {
      const el = document.querySelector(href);
      if (!el) return;
      lenis?.scrollTo(el as HTMLElement) ??
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, open ? 420 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={ready ? { y: 0, opacity: 1 } : { y: -16, opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-[90] transition-[color,background-color] duration-500",
          open ? "text-[#f4f1ea]" : "text-[#111111]",
          !open && scrolled ? "bg-[#f4f1ea]/70 backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 py-5 md:px-8">
          <MagneticLink
            href="#top"
            onClick={(e) => goHash(e, "#top")}
            className="justify-self-start text-sm font-semibold tracking-[-0.03em] transition-transform duration-300 ease-out"
          >
            nr
          </MagneticLink>

          <nav className="hidden items-center gap-8 text-[13px] text-current/55 md:flex">
            {LINKS.map((link) => (
              <MagneticLink
                key={link.href}
                href={link.href}
                external={link.external}
                onClick={(e) => goHash(e, link.href)}
                className="nav-link transition-transform duration-300 ease-out hover:text-current"
              >
                {link.label}
              </MagneticLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="justify-self-end text-[13px] tracking-[-0.02em]"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-[#111111] text-[#f4f1ea]"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
              <p className="mb-8 text-[11px] uppercase tracking-[0.24em] text-white/35">
                Index
              </p>
              <ul>
                {LINKS.map((link, i) => (
                  <li
                    key={link.href}
                    className="overflow-hidden border-t border-white/10 last:border-b"
                  >
                    <motion.div
                      initial={{ y: "110%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "110%" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.12 + i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <MagneticLink
                        href={link.href}
                        external={link.external}
                        onClick={(e) => {
                          if (link.href.startsWith("#")) goHash(e, link.href);
                          else setOpen(false);
                        }}
                        className="group flex items-baseline justify-between py-4 transition-transform duration-300 ease-out md:py-5"
                      >
                        <span className="text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.05em] transition group-hover:text-[#d79a70]">
                          {link.label}
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-white/30">
                          {link.index}
                        </span>
                      </MagneticLink>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
