"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowDown } from "lucide-react";
import AskNiravPill from "@/components/AskNiravPill";
import { SmoothScroll } from "@/components/home/smooth-scroll";
import { LoadIntro } from "@/components/home/load-intro";
import { SiteNav } from "@/components/home/site-nav";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const selectedWork = [
  { title: "Stealth" },
  { title: "Honrly", detail: "Interview integrity." },
  { title: "CCD-Bench", detail: "LLM eval preprint.", href: "/research" },
  { title: "Zebra", detail: "SIEM, vuln ops." },
  { title: "UT Dallas", detail: "Labs, council, research." },
  { title: "Royal Technosoft", detail: "Taught C++ and HoloLens." },
  { title: "Sites", detail: "ftth24x7, tranquilflow, aiaautd." },
  { title: "Security", detail: "NSA Codebreaker, deepfake audio." },
];

const tools = [
  "Python",
  "PyTorch",
  "Next.js",
  "Kali",
  "Docker",
  "AWS",
  "GCP",
  "Azure",
  "CrowdStrike",
  "TensorFlow",
  "SQL",
  "Hugging Face",
  "Power BI",
];

const featuredHackathon = {
  name: "YC Call My Agent",
  href: "https://www.linkedin.com/feed/update/urn:li:activity:7462011224017240064/",
};

const hackathons = [
  {
    name: "Hack Harvard",
    href: "https://www.thecrimson.com/article/2025/10/6/facemash-website-hackathon/",
  },
  { name: "Penn Apps XXVI", href: "https://utdmercury.com/32536/news/from-utd-to-harvard-how-a-dallas-student-sparked-viral-debate-over-ethics-in-tech/" },
];

const certifications = [
  "Java SE 8",
  "Network+",
  "AWS Cloud Practitioner",
  "Azure AI Engineer",
  "Yoga instructor",
];

function HomePage() {
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = React.useState(!!reducedMotion);
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, reducedMotion ? 0 : -70]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.75, 0.25]);

  return (
    <main className="min-h-screen scroll-smooth bg-[#f4f1ea] text-[#111111] selection:bg-[#111111] selection:text-[#f4f1ea]">
      <motion.div
        style={{ opacity: gridOpacity }}
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="pointer-events-none fixed left-1/2 top-[-20rem] z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#b4693d]/10 blur-3xl" />

      <LoadIntro onDone={() => setReady(true)} />
      <SiteNav ready={ready} />

      <section
        id="top"
        className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28"
      >
        <motion.div
          style={{ y: heroY }}
          variants={stagger}
          initial="hidden"
          animate={ready ? "visible" : "hidden"}
          className="max-w-5xl"
        >
          <h1 className="mt-4 max-w-4xl overflow-hidden text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.05em]">
            <motion.span
              className="block"
              initial={{ y: "110%", rotate: 3 }}
              animate={ready ? { y: "0%", rotate: 0 } : { y: "110%", rotate: 3 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            >
              Stealth
            </motion.span>
          </h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 max-w-2xl border-t border-[#111111]/15 pt-6"
          >
            <p className="text-[14px] leading-6 text-[#111111]/55">
              Making the world&apos;s most advanced AI system.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              className="rounded-full bg-[#111111] px-6 py-6 text-[#f4f1ea] hover:bg-[#2a2a2a]"
              asChild
            >
              <a href="mailto:hello@honrly.com?subject=AI%20or%20cybersecurity%20work">
                <Mail className="mr-2 h-4 w-4" />
                Say hi
              </a>
            </Button>

            <button
              type="button"
              onClick={() =>
                document.querySelector("#dino")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#111111]/15 px-6 py-3 text-sm text-[#111111]/65 transition hover:border-[#111111] hover:text-[#111111]"
            >
              Play game
              <ArrowDown className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      <section id="work" className="relative z-10 bg-[#111111] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-[0.38fr_0.62fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-[12px] uppercase tracking-[0.24em] text-white/35">
              Work
            </p>
            <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
                  Hackathons
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  <a
                    href={featuredHackathon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-white/55 transition hover:text-[#f4f1ea]"
                  >
                    {featuredHackathon.name}
                  </a>
                  {hackathons.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] text-white/55 transition hover:text-[#f4f1ea]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="border-t border-white/15"
          >
            {selectedWork.map((item) => {
              const row = (
                <>
                  <h3 className="text-[15px] font-medium tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  {"detail" in item && item.detail ? (
                    <p className="text-[13px] text-white/40">{item.detail}</p>
                  ) : null}
                </>
              );
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
                >
                  {"href" in item && item.href ? (
                    <a href={item.href} className="flex w-full items-baseline justify-between gap-6 transition hover:opacity-80">
                      {row}
                    </a>
                  ) : (
                    row
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="systems" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
        <div className="grid gap-12 border-t border-[#111111]/15 pt-14 lg:grid-cols-[1fr_0.38fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#111111]/35">
              Tools
            </p>
            <p className="mt-5 max-w-2xl text-[15px] leading-8 tracking-[-0.02em] text-[#111111]/55">
              {tools.join(" · ")}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#111111]/35">
              Certs
            </p>
            <ul className="mt-5 space-y-1.5">
              {certifications.map((cert) => (
                <li key={cert} className="text-[14px] text-[#111111]/50">
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="dino" className="relative z-10 mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <div className="border-y border-[#111111]/15 py-12">
          <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-[#111111]/38">
            Small interruption
          </p>

          <div className="grid gap-6 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
            <h2 className="text-4xl font-medium leading-[0.98] tracking-[-0.055em] md:text-6xl">
              If you’re bored already, there’s still a T-Rex.
            </h2>

            <div className="overflow-hidden border border-[#111111]/15 bg-[#111111]">
              <iframe
                src="/dino/index.html"
                width={640}
                height={220}
                style={{ border: "none", width: "100%" }}
                title="T-Rex Runner"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <div className="bg-[#111111] px-6 py-16 text-[#f4f1ea] md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div>
              <p className="text-[12px] uppercase tracking-[0.24em] text-white/35">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-[1] tracking-[-0.05em] md:text-5xl">
                Working on something?
              </h2>
            </div>

            <div>
              <p className="mb-5 text-[13px] leading-5 text-white/45">
                Happy to chat about messy workflows, security stuff, or products
                where trust matters.
              </p>

              <Button
                className="w-full rounded-full bg-[#f4f1ea] px-6 py-6 text-[#111111] hover:bg-white"
                asChild
              >
                <a href="mailto:hello@honrly.com?subject=AI%20or%20cybersecurity%20work">
                  <Mail className="mr-2 h-4 w-4" />
                  Say hi
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-6xl flex-col gap-3 px-5 pb-8 text-[13px] text-[#111111]/40 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© 2026 Nirav Rohra</p>
        <p>AI, cybersecurity, and trust infrastructure.</p>
      </footer>

      {ready && <AskNiravPill />}
    </main>
  );
}

export default function Page() {
  return (
    <SmoothScroll>
      <HomePage />
    </SmoothScroll>
  );
}
