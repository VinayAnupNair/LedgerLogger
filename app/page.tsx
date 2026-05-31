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
import { Mail, ExternalLink, ArrowDown } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import AskNiravPill from "@/components/AskNiravPill";

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

const credibility = [
  {
    label: "Founder",
    value: "Honrly Inc",
    detail: "AI integrity platform for macOS and Windows.",
  },
  {
    label: "Cybersecurity",
    value: "Zebra Technologies",
    detail: "AI/cyber intern  -  SIEM, vuln workflows, internal tooling.",
  },
  {
    label: "Research",
    value: "CCD-Bench preprint",
    detail: "Cross-channel disagreement in LLM evaluation — paper & corpus.",
    href: "/research",
  },
  {
    label: "Education",
    value: "UT Dallas",
    detail: "B.S. CS (AI), cyber-defense cert. Community Council president.",
  },
];

const selectedWork = [
  {
    title: "Honrly Inc",
    eyebrow: "Founder",
    description:
      "AI integrity for macOS and Windows  -  mostly interviews and hiring.",
  },
  {
    title: "Mechanistic interpretability",
    eyebrow: "Researcher",
    description:
      "Cross-channel disagreement in LLM evaluation — CCD-Bench preprint.",
    href: "/research",
  },
  {
    title: "Zebra Technologies",
    eyebrow: "AI / Cyber Intern",
    description:
      "AI/cyber intern — SIEM, vuln ops, internal AI tooling; leadership projects across Orca, CrowdStrike, HackerOne VDP, and more.",
  },
  {
    title: "UT Dallas · Lab Assistant",
    eyebrow: "Office of Information & Technology",
    description:
      "Campus lab IT  -  Mac, Windows, Linux support, ticketing, print systems.",
  },
  {
    title: "UT Dallas · Community Council",
    eyebrow: "President",
    description:
      "Council meetings, budget and grants, exec board for campus programs.",
  },
  {
    title: "UT Dallas · Facility Management",
    eyebrow: "Student Assistant",
    description:
      "Admin and facility ops  -  access, safety, day-to-day compliance.",
  },
  {
    title: "UT Dallas · Research",
    eyebrow: "Undergraduate Researcher",
    description:
      "ML notebook for particle classification. Malware detection research with entropy analysis.",
  },
  {
    title: "Royal Technosoft",
    eyebrow: "Programming Intern",
    description:
      "Taught intro programming  -  C++ games and Unity3D HoloLens projects.",
  },
  {
    title: "Web Design & Deployment",
    eyebrow: "Contract",
    description:
      "Sites for a few local orgs  -  ftth24x7, tranquilflow, aiaautd, HRCR Lamination.",
  },
  {
    title: "Cybersecurity & Analytics",
    eyebrow: "Projects",
    description:
      "Pen testing, NSA Codebreaker, deepfake audio detection, NASA L'SPACE cost modeling.",
  },
];

const tools = [
  "Python",
  "PyTorch",
  "Next.js / React",
  "Kali Linux",
  "Docker / MLOps",
  "AWS / GCP / Azure",
  "CrowdStrike SIEM",
  "TensorFlow / Keras",
  "SQL / Presto",
  "Hugging Face",
  "Scikit-learn",
  "Power BI",
];

const featuredHackathon = {
  name: "Call My Agent Hackathon",
  org: "Y Combinator",
  year: "2026",
  detail: "Went to YC's Call My Agent Hackathon. Good day.",
  href: "https://www.linkedin.com/feed/update/urn:li:activity:7462011224017240064/",
};

const hackathons = [
  "Hack Harvard",
  "Penn Apps XXVI",
];

const certifications = [
  "Oracle Certified Associate Java SE 8",
  "CompTIA Network+",
  "AWS Certified Cloud Practitioner",
  "Azure AI Engineer Associate (In Progress)",
  "Yoga Alliance USA Certified Yoga Instructor",
];

function SmoothAnchor({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault();
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="transition hover:text-[#111111] dark:hover:text-[#f4f1ea]"
    >
      {children}
    </a>
  );
}

export default function Page() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, reducedMotion ? 0 : -70]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.75, 0.25]);

  return (
    <main className="min-h-screen scroll-smooth bg-[#f4f1ea] text-[#111111] selection:bg-[#111111] selection:text-[#f4f1ea]">
      {/* Ambient background */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="pointer-events-none fixed left-1/2 top-[-20rem] z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[#b4693d]/10 blur-3xl" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#111111]/10 bg-[#f4f1ea]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a
            href="#top"
            className="text-sm font-semibold tracking-[-0.03em] text-[#111111]"
          >
            nr
          </a>

          <nav className="flex items-center gap-5 text-[13px] text-[#111111]/55">
            <a
              href="/research"
              className="transition hover:text-[#111111] dark:hover:text-[#f4f1ea]"
            >
              Research
            </a>
            <SmoothAnchor href="#dino">This is boring  -  play game</SmoothAnchor>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/niravrohra"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-xs text-[#111111]/50 transition hover:text-[#111111] sm:inline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nirav-rohra"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-xs text-[#111111]/50 transition hover:text-[#111111] sm:inline"
            >
              LinkedIn
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pt-8 md:px-8">
        <motion.a
          href={featuredHackathon.href}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="group flex flex-col gap-2 border border-[#111111]/10 bg-[#111111]/[0.03] px-4 py-3 transition hover:border-[#111111]/20 sm:flex-row sm:items-center sm:justify-between md:px-6"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/40">
              {featuredHackathon.org} · {featuredHackathon.year}
            </p>
            <p className="mt-0.5 text-sm font-medium tracking-[-0.02em] text-[#111111]/80">
              {featuredHackathon.name}
            </p>
          </div>
          <p className="text-[13px] leading-5 text-[#111111]/45">
            {featuredHackathon.detail}
          </p>
        </motion.a>
      </section>

      {/* Hero */}
      <section id="top" className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
        <motion.div
          style={{ y: heroY }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.05em]"
          >
            I build AI things. The dinosaur is below if this bores you.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-8 max-w-2xl border-t border-[#111111]/15 pt-6"
          >
            <p className="text-[14px] leading-6 text-[#111111]/55">
              I&apos;m Nirav  -  a human like you who likes building stuff in the
              AI space, talking to people, and sometimes messing around with
              mechanistic interpretability and ethics.
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

      {/* Credibility cards */}
      <section className="relative z-10 mx-auto max-w-6xl px-5 pb-24 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {credibility.map((item) => {
            const card = (
              <>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#111111]/38">
                  {item.label}
                </p>
                <h2 className="mt-4 text-lg font-medium tracking-[-0.04em]">
                  {item.value}
                </h2>
                <p className="mt-3 text-[13px] leading-5 text-[#111111]/50">
                  {item.detail}
                </p>
              </>
            );
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="group min-h-[180px] border border-[#111111]/10 bg-[#f4f1ea]/70 p-5 backdrop-blur transition duration-500 hover:border-[#111111]/25"
              >
                {"href" in item && item.href ? (
                  <a href={item.href} className="block">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Selected work */}
      <section id="work" className="relative z-10 bg-[#111111] text-[#f4f1ea]">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-[0.38fr_0.62fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-[12px] uppercase tracking-[0.24em] text-white/35">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-[1] tracking-[-0.05em] md:text-4xl">
              Some things I&apos;ve done.
            </h2>
              <div className="mt-8 space-y-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30">
                Hackathons · 2025
              </p>
              <div className="border border-white/10 px-3 py-3">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                  {featuredHackathon.org} · {featuredHackathon.year}
                </p>
                <p className="mt-1.5 text-sm font-medium tracking-[-0.02em] text-[#f4f1ea]/90">
                  {featuredHackathon.name}
                </p>
                <p className="mt-1.5 text-[12px] leading-5 text-white/45">
                  {featuredHackathon.detail}
                </p>
                <a
                  href={featuredHackathon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[12px] text-white/40 underline decoration-white/15 underline-offset-4 transition hover:text-white/70"
                >
                  LinkedIn recap
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {hackathons.map((name) => (
                  <span
                    key={name}
                    className="border border-white/10 px-2.5 py-1 text-[12px] text-white/50"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/30 pt-3">
                Press
              </p>
              <div className="flex flex-col gap-1.5">
                <a
                  href="https://www.thecrimson.com/article/2025/10/6/facemash-website-hackathon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/45 underline decoration-white/15 underline-offset-4 transition hover:text-white/70"
                >
                  Harvard Crimson
                </a>
                <a
                  href="https://utdmercury.com/32536/news/from-utd-to-harvard-how-a-dallas-student-sparked-viral-debate-over-ethics-in-tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/45 underline decoration-white/15 underline-offset-4 transition hover:text-white/70"
                >
                  UTD Mercury
                </a>
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
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/35">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 text-lg font-medium tracking-[-0.03em]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[13px] leading-5 text-white/45">
                    {item.description}
                  </p>
                </>
              );
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="grid gap-3 border-b border-white/10 py-5 md:grid-cols-[0.34fr_0.66fr]"
                >
                  {"href" in item && item.href ? (
                    <a href={item.href} className="contents transition hover:opacity-90">
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

      {/* Systems section */}
      <section id="systems" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-28">
        <div className="grid gap-12 border-y border-[#111111]/15 py-14 lg:grid-cols-[0.42fr_0.58fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
          >
            <p className="text-[12px] uppercase tracking-[0.24em] text-[#111111]/40">
              Systems
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-medium leading-[1] tracking-[-0.05em] md:text-4xl">
              Tools I&apos;ve used.
            </h2>
            <p className="mt-6 max-w-md text-[13px] leading-5 text-[#111111]/50">
              ML, cloud, security tooling, and full-stack  -  whatever the project needed.
            </p>
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#111111]/35">
                Certifications
              </p>
              <ul className="mt-3 space-y-1">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="text-[13px] leading-5 text-[#111111]/50"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {tools.map((tool) => (
              <motion.div
                key={tool}
                variants={fadeUp}
                className="border border-[#111111]/10 bg-white/20 px-4 py-3.5 text-[13px] text-[#111111]/55 backdrop-blur transition hover:border-[#111111]/20"
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative z-10 mx-auto max-w-6xl px-5 pb-24 md:px-8 md:pb-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <motion.a
            variants={fadeUp}
            href="https://honrly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group min-h-[420px] bg-[#111111] p-7 text-[#f4f1ea] transition hover:bg-[#181818] md:p-9"
          >
            <div className="flex items-center justify-between border-b border-white/15 pb-5">
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/35">
                Main company
              </span>
              <ExternalLink className="h-4 w-4 text-white/35 transition group-hover:text-[#d79a70]" />
            </div>

            <div className="flex h-[calc(100%-48px)] flex-col justify-end">
              <img
                src="https://honrly.com/logo.png"
                alt="Honrly"
                className="mb-8 h-12 w-fit opacity-90"
              />
              <h3 className="max-w-2xl text-3xl font-medium leading-[1] tracking-[-0.05em] md:text-4xl">
                Interview integrity for the AI era.
              </h3>
              <p className="mt-5 max-w-xl text-[13px] leading-5 text-white/45">
                Detects suspicious tools in interviews, exams, and online workflows.
              </p>
            </div>
          </motion.a>

          <div className="grid gap-5">
            {[
              {
                name: "aplcard.com",
                href: "https://aplcard.com",
                label: "Apple Wallet pass generator",
              },
            ].map((product) => (
              <motion.a
                key={product.name}
                variants={fadeUp}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[200px] flex-col justify-between border border-[#111111]/10 p-6 transition hover:border-[#b4693d]/45 hover:bg-white/25"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[12px] uppercase tracking-[0.2em] text-[#111111]/38">
                    Side thing
                  </p>
                  <ExternalLink className="h-4 w-4 text-[#111111]/35 transition group-hover:text-[#b4693d]" />
                </div>

                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.05em]">
                    {product.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#111111]/52">
                    {product.label}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* T-Rex */}
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

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-5 pb-10 md:px-8">
        <div className="bg-[#111111] px-6 py-16 text-[#f4f1ea] md:px-10 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div>
              <p className="text-[12px] uppercase tracking-[0.24em] text-white/35">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-[1] tracking-[-0.05em] md:text-5xl">
                Working on something AI, cyber, or trust-heavy?
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

      <AskNiravPill />
    </main>
  );
}