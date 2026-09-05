import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nirav Rohra",
    "AI engineer",
    "cybersecurity",
    "mechanistic interpretability",
    "Honrly",
    "UT Dallas",
    "machine learning",
    "AI integrity",
    "LLM research",
    "Zebra Technologies",
    "portfolio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 512,
        height: 512,
        alt: "Nirav Rohra — Stealth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  jobTitle: "Co-founder",
  description: siteConfig.description,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.honrly,
    siteConfig.links.aplcard,
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "The University of Texas at Dallas",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Mechanistic Interpretability",
    "Cybersecurity",
    "Machine Learning",
    "Large Language Models",
    "Interview Integrity Software",
    "Cross-Channel Disagreement",
    "CCD-Bench",
    "LLM Evaluation",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Honrly Inc",
    url: siteConfig.links.honrly,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: {
    "@type": "Person",
    name: siteConfig.name,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        <Script id="ld-json-person" type="application/ld+json">
          {JSON.stringify(personSchema)}
        </Script>
        <Script id="ld-json-website" type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </Script>

        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          strategy="afterInteractive"
          async
          defer
        />
      </body>
    </html>
  );
}
