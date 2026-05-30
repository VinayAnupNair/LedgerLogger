import type { MetadataRoute } from "next";

const siteUrl = "https://niravrohra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/research`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/research/measuring-cross-channel-disagreement-llm-evaluation.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
