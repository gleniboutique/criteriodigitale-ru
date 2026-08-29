import type { MetadataRoute } from "next";
import { observatoryArticles } from "@/content/observatory";

const baseUrl = "https://tatiana-living-system.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-08-29"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/observatory`,
      lastModified: new Date("2026-08-28"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ru: `${baseUrl}/observatory`,
          it: "https://criteriodigitale.it/osservatorio",
        },
      },
    },
    ...observatoryArticles.map((article) => ({
      url: `${baseUrl}/observatory/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          ru: `${baseUrl}/observatory/${article.slug}`,
          it: article.originalUrl,
        },
      },
    })),
  ];
}
