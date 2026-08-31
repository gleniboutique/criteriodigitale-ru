import type { MetadataRoute } from "next";
import { ITALIAN_OBSERVATORY_URL, ITALIAN_SITE_URL, SITE_URL } from "@/config/site";
import { AI_GOTOVO_LONGREAD } from "@/content/longread";
import { observatoryArticles } from "@/content/observatory";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ru: SITE_URL,
          it: ITALIAN_SITE_URL,
        },
      },
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/observatory`,
      lastModified: new Date("2026-08-30"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${SITE_URL}/observatory`,
          it: ITALIAN_OBSERVATORY_URL,
        },
      },
    },
    {
      url: `${SITE_URL}${AI_GOTOVO_LONGREAD.canonical}`,
      lastModified: AI_GOTOVO_LONGREAD.modifiedDate,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${SITE_URL}${AI_GOTOVO_LONGREAD.canonical}`,
        },
      },
    },
    ...observatoryArticles.map((article) => ({
      url: `${SITE_URL}/observatory/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${SITE_URL}/observatory/${article.slug}`,
          it: article.originalUrl,
        },
      },
    })),
  ];
}
