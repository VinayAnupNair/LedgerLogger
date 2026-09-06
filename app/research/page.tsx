import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  FileText,
  Mail,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import {
  researchCanonicalUrl,
  researchMetaDescription,
  researchOgDescription,
  researchPaper,
  researchPdfUrl,
} from "@/lib/research-paper";

export const metadata: Metadata = {
  title: researchPaper.title,
  description: researchMetaDescription,
  keywords: [...researchPaper.keywords],
  authors: [
    {
      name: researchPaper.author,
      url: siteConfig.url,
    },
  ],
  creator: researchPaper.author,
  publisher: researchPaper.affiliation,
  category: "science",
  alternates: {
    canonical: researchPaper.path,
    types: {
      "application/pdf": researchPaper.pdfPath,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: researchCanonicalUrl,
    siteName: siteConfig.name,
    title: researchPaper.title,
    description: researchOgDescription,
    publishedTime: researchPaper.datePublished,
    modifiedTime: researchPaper.dateModified,
    authors: [researchPaper.author],
    section: "AI Safety & LLM Evaluation",
    tags: [...researchPaper.keywords.slice(0, 12)],
    images: [
      {
        url: siteConfig.ogImage,
        width: 512,
        height: 512,
        alt: `${researchPaper.title} — ${researchPaper.author}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: researchPaper.title,
    description: researchOgDescription,
    images: [siteConfig.ogImage],
  },
  other: {
    "citation_title": researchPaper.title,
    "citation_author": researchPaper.author,
    "citation_publication_date": researchPaper.datePublished.replace(/-/g, "/"),
    "citation_online_date": researchPaper.datePublished.replace(/-/g, "/"),
    "citation_pdf_url": researchPdfUrl,
    "citation_abstract_html_url": researchCanonicalUrl,
    "citation_language": researchPaper.language,
    "citation_technical_report_institution": researchPaper.affiliation,
  },
};

const scholarlyArticleSchema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "@id": researchCanonicalUrl,
  headline: researchPaper.title,
  name: researchPaper.title,
  abstract: researchPaper.abstract,
  author: {
    "@type": "Person",
    name: researchPaper.author,
    email: researchPaper.email,
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: researchPaper.affiliation,
    },
    url: siteConfig.url,
    sameAs: [siteConfig.links.linkedin],
  },
  datePublished: researchPaper.datePublished,
  dateModified: researchPaper.dateModified,
  inLanguage: researchPaper.language,
  genre: researchPaper.type,
  keywords: researchPaper.keywords.join(", "),
  url: researchCanonicalUrl,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": researchCanonicalUrl,
  },
  isAccessibleForFree: true,
  license: "https://creativecommons.org/licenses/by/4.0/",
  learningResourceType: "Research preprint",
  about: [
    { "@type": "Thing", name: "Large language model evaluation" },
    { "@type": "Thing", name: "Cross-channel disagreement" },
    { "@type": "Thing", name: "CCD-Bench" },
    { "@type": "Thing", name: "AI safety metrology" },
  ],
  encoding: [
    {
      "@type": "MediaObject",
      contentUrl: researchPdfUrl,
      encodingFormat: "application/pdf",
      name: `${researchPaper.title} (PDF)`,
    },
  ],
  potentialAction: {
    "@type": "ReadAction",
    target: [researchCanonicalUrl, researchPdfUrl],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: siteConfig.name,
      item: siteConfig.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Research",
      item: researchCanonicalUrl,
    },
  ],
};

const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "CCD-Bench diagnostic corpus",
  description:
    "Frozen diagnostic corpus with eighteen behavioral suites, twelve heterogeneous checkpoints, parser outputs, multi-judge scores, and replayable transcript rows for cross-channel disagreement analysis.",
  url: researchCanonicalUrl,
  creator: {
    "@type": "Person",
    name: researchPaper.author,
  },
  datePublished: researchPaper.datePublished,
  keywords: researchPaper.keywords.slice(0, 8).join(", "),
  license: "https://creativecommons.org/licenses/by/4.0/",
  isAccessibleForFree: true,
};

export default function ResearchPage() {
  return (
    <>
      <Script id="ld-json-scholarly-article" type="application/ld+json">
        {JSON.stringify(scholarlyArticleSchema)}
      </Script>
      <Script id="ld-json-breadcrumb-research" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <Script id="ld-json-ccd-bench-dataset" type="application/ld+json">
        {JSON.stringify(datasetSchema)}
      </Script>

      <div className="min-h-screen bg-[#f4f1ea] text-[#111111] selection:bg-[#111111] selection:text-[#f4f1ea] dark:bg-[#0c0c0c] dark:text-[#f4f1ea] dark:selection:bg-[#f4f1ea] dark:selection:text-[#111111]">
        <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.045)_1px,transparent_1px)] bg-[size:92px_92px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] dark:opacity-40" />

        <header className="sticky top-0 z-50 border-b border-[#111111]/10 bg-[#f4f1ea]/78 backdrop-blur-xl dark:border-[#f4f1ea]/10 dark:bg-[#0c0c0c]/78">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 md:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#111111]/55 transition hover:text-[#111111] dark:text-[#f4f1ea]/55 dark:hover:text-[#f4f1ea]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              Portfolio
            </Link>
            <nav aria-label="Research page" className="hidden gap-6 text-xs sm:flex">
              <a href="#abstract" className="text-[#111111]/50 hover:text-[#111111] dark:text-[#f4f1ea]/50 dark:hover:text-[#f4f1ea]">
                Abstract
              </a>
              <a href="#findings" className="text-[#111111]/50 hover:text-[#111111] dark:text-[#f4f1ea]/50 dark:hover:text-[#f4f1ea]">
                Findings
              </a>
              <a href="#pdf" className="text-[#111111]/50 hover:text-[#111111] dark:text-[#f4f1ea]/50 dark:hover:text-[#f4f1ea]">
                PDF
              </a>
              <a href="#cite" className="text-[#111111]/50 hover:text-[#111111] dark:text-[#f4f1ea]/50 dark:hover:text-[#f4f1ea]">
                Cite
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </header>

        <main className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
          <article itemScope itemType="https://schema.org/ScholarlyArticle">
            <meta itemProp="datePublished" content={researchPaper.datePublished} />
            <meta itemProp="inLanguage" content={researchPaper.language} />
            <link itemProp="url" href={researchCanonicalUrl} />
            <link itemProp="sameAs" href={researchPdfUrl} />

            <p className="text-[10px] uppercase tracking-[0.24em] text-[#b4693d]">
              {researchPaper.type} · {researchPaper.pageCount} pages · ~
              {researchPaper.readingTimeMinutes} min read
            </p>

            <h1
              className="mt-4 text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-[1.08] tracking-[-0.04em]"
              itemProp="headline"
            >
              {researchPaper.title}
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#111111]/60 dark:text-[#f4f1ea]/60">
              {researchPaper.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#111111]/10 pt-6 dark:border-[#f4f1ea]/10">
              <div itemProp="author" itemScope itemType="https://schema.org/Person">
                <p className="text-sm font-medium tracking-[-0.02em]" itemProp="name">
                  {researchPaper.author}
                </p>
                <p
                  className="text-xs text-[#111111]/50 dark:text-[#f4f1ea]/50"
                  itemProp="affiliation"
                >
                  {researchPaper.affiliation}
                </p>
              </div>
              <a
                href={`mailto:${researchPaper.email}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#111111]/50 transition hover:text-[#111111] dark:text-[#f4f1ea]/50 dark:hover:text-[#f4f1ea]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden />
                {researchPaper.email}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild className="rounded-none bg-[#111111] text-[#f4f1ea] hover:bg-[#111111]/90 dark:bg-[#f4f1ea] dark:text-[#111111] dark:hover:bg-[#f4f1ea]/90">
                <a href={researchPaper.pdfPath} download>
                  <Download className="mr-2 h-4 w-4" aria-hidden />
                  Download PDF
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-[#111111]/20 bg-transparent dark:border-[#f4f1ea]/20"
              >
                <a href="#pdf">
                  <FileText className="mr-2 h-4 w-4" aria-hidden />
                  Read in browser
                </a>
              </Button>
            </div>

            <section id="abstract" className="mt-16 scroll-mt-24" aria-labelledby="abstract-heading">
              <h2
                id="abstract-heading"
                className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/40 dark:text-[#f4f1ea]/40"
              >
                Abstract
              </h2>
              <p
                className="mt-4 text-[15px] leading-8 text-[#111111]/75 dark:text-[#f4f1ea]/75"
                itemProp="abstract"
              >
                {researchPaper.abstract}
              </p>
            </section>

            <section id="contributions" className="mt-14 scroll-mt-24" aria-labelledby="contributions-heading">
              <h2
                id="contributions-heading"
                className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/40 dark:text-[#f4f1ea]/40"
              >
                Contributions
              </h2>
              <ul className="mt-5 space-y-4">
                {researchPaper.contributions.map((item) => (
                  <li
                    key={item.label}
                    className="border-l-2 border-[#b4693d]/60 pl-4 text-[14px] leading-7 text-[#111111]/70 dark:text-[#f4f1ea]/70"
                  >
                    <span className="font-medium text-[#111111] dark:text-[#f4f1ea]">
                      {item.label}.{" "}
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </section>

            <section id="findings" className="mt-14 scroll-mt-24" aria-labelledby="findings-heading">
              <h2
                id="findings-heading"
                className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/40 dark:text-[#f4f1ea]/40"
              >
                Headline results (n = 642)
              </h2>
              <p className="mt-3 text-[13px] leading-6 text-[#111111]/50 dark:text-[#f4f1ea]/50">
                Finite-population, protocol-specific metrics on stratified blinded human-majority
                labels across all eighteen CCD-Bench suites. Full tables and BCa intervals in the
                paper.
              </p>
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {researchPaper.headlineFindings.map((finding) => (
                  <div
                    key={finding.metric}
                    className="border border-[#111111]/12 bg-[#111111]/[0.02] px-4 py-4 dark:border-[#f4f1ea]/12 dark:bg-[#f4f1ea]/[0.03]"
                  >
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-[#111111]/45 dark:text-[#f4f1ea]/45">
                      {finding.metric}
                    </dt>
                    <dd className="mt-1 text-2xl font-medium tracking-[-0.03em] text-[#b4693d]">
                      {finding.value}
                    </dd>
                    <dd className="mt-1 text-[12px] leading-5 text-[#111111]/50 dark:text-[#f4f1ea]/50">
                      {finding.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="ccd-bench" className="mt-14 scroll-mt-24" aria-labelledby="ccd-heading">
              <h2
                id="ccd-heading"
                className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/40 dark:text-[#f4f1ea]/40"
              >
                CCD-Bench coverage
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {researchPaper.constructs.map((construct) => (
                  <li
                    key={construct}
                    className="border border-[#111111]/12 px-3 py-1.5 text-[12px] text-[#111111]/65 dark:border-[#f4f1ea]/12 dark:text-[#f4f1ea]/65"
                  >
                    {construct}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[14px] leading-7 text-[#111111]/60 dark:text-[#f4f1ea]/60">
                Eighteen frozen behavioral suites, twelve heterogeneous checkpoints, joint parser
                outputs and multi-judge scores on replayable rows. Suites were frozen before aggregate
                analysis; null, refusal, and error rows were retained. Intended as wind-tunnel
                diagnostic metrology—not natural-user prevalence estimation.
              </p>
            </section>

            <section id="outline" className="mt-14 scroll-mt-24" aria-labelledby="outline-heading">
              <h2
                id="outline-heading"
                className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/40 dark:text-[#f4f1ea]/40"
              >
                Paper outline
              </h2>
              <ol className="mt-5 space-y-3">
                {researchPaper.sections.map((section, index) => (
                  <li
                    key={section.id}
                    className="flex gap-4 border-b border-[#111111]/8 pb-3 last:border-0 dark:border-[#f4f1ea]/8"
                  >
                    <span className="text-xs tabular-nums text-[#111111]/35 dark:text-[#f4f1ea]/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm font-medium tracking-[-0.02em]">{section.title}</p>
                      <p className="mt-0.5 text-[13px] leading-6 text-[#111111]/50 dark:text-[#f4f1ea]/50">
                        {section.summary}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="pdf" className="mt-16 scroll-mt-24" aria-labelledby="pdf-heading">
              <h2
                id="pdf-heading"
                className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/40 dark:text-[#f4f1ea]/40"
              >
                Full paper (PDF)
              </h2>
              <p className="mt-3 text-[13px] text-[#111111]/50 dark:text-[#f4f1ea]/50">
                Embedded viewer for{" "}
                <cite className="not-italic">{researchPaper.title}</cite>.{" "}
                <a
                  href={researchPaper.pdfPath}
                  className="underline underline-offset-2 hover:text-[#111111] dark:hover:text-[#f4f1ea]"
                >
                  Open PDF in a new tab
                </a>
                .
              </p>
              <div className="mt-5 overflow-hidden border border-[#111111]/15 dark:border-[#f4f1ea]/15">
                <iframe
                  title={`${researchPaper.title} — PDF viewer`}
                  src={`${researchPaper.pdfPath}#view=FitH`}
                  className="h-[min(80vh,900px)] w-full bg-white dark:bg-[#1a1a1a]"
                />
              </div>
            </section>

            <section id="cite" className="mt-16 scroll-mt-24" aria-labelledby="cite-heading">
              <h2
                id="cite-heading"
                className="text-[10px] uppercase tracking-[0.24em] text-[#111111]/40 dark:text-[#f4f1ea]/40"
              >
                How to cite
              </h2>
              <pre className="mt-4 overflow-x-auto border border-[#111111]/12 bg-[#111111]/[0.03] p-4 text-[12px] leading-6 text-[#111111]/75 dark:border-[#f4f1ea]/12 dark:bg-[#f4f1ea]/[0.04] dark:text-[#f4f1ea]/75">
                {`@misc{rohra2026ccd,
  author       = {${researchPaper.author}},
  title        = {${researchPaper.title}},
  year         = {2026},
  howpublished = {Preprint},
  institution  = {${researchPaper.affiliation}},
  url          = {${researchCanonicalUrl}}
}`}
              </pre>
              <p className="mt-4 text-[13px] text-[#111111]/50 dark:text-[#f4f1ea]/50">
                Reproducibility artifacts and harness details are described in the full paper (Section
                8).
              </p>
            </section>

            <section id="author" className="mt-16 border-t border-[#111111]/10 pt-10 dark:border-[#f4f1ea]/10">
              <h2 className="text-sm font-medium tracking-[-0.02em]">About the author</h2>
              <p className="mt-3 max-w-xl text-[14px] leading-7 text-[#111111]/60 dark:text-[#f4f1ea]/60">
                {researchPaper.author} researches mechanistic interpretability and LLM evaluation
                safety metrology. CS (AI) at UT Dallas. Research, hackathons, and contact on the{" "}
                <Link href="/" className="underline underline-offset-2 hover:text-[#111111] dark:hover:text-[#f4f1ea]">
                  main portfolio
                </Link>
                .
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-xs">
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me author"
                  className="inline-flex items-center gap-1 text-[#111111]/50 hover:text-[#111111] dark:text-[#f4f1ea]/50 dark:hover:text-[#f4f1ea]"
                >
                  LinkedIn <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
