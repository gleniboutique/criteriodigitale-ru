import type { MetadataRoute } from "next";
import { ITALIAN_OBSERVATORY_URL, ITALIAN_SITE_URL, SITE_URL } from "@/config/site";
import { AI_GOTOVO_LONGREAD } from "@/content/longread";
import { observatoryArticles } from "@/content/observatory";
import { EU4_ARTICLE } from "@/content/eu4";
import { contactPage, phaseOnePages, phaseOnePaths } from "@/content/phaseOne";

// Published content updates: 09B (PR #7), then contextual links (PR #9).
const phaseOneLastModified: Record<(typeof phaseOnePaths)[number], string> = {
  "/vse-derzhitsya-na-vas": "2026-09-21",
  "/sait-ne-obyasnyaet-cennost": "2026-09-21",
  "/ai-i-cennost": "2026-09-21",
  "/ai-pravila-v-rabote": "2026-09-21",
  "/kak-ya-rabotayu": "2026-09-22",
  "/rabota-s-criterio-digitale": "2026-09-22",
  "/obo-mne": "2026-09-21",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const allObservatoryArticles = [...observatoryArticles, EU4_ARTICLE];

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-09-22"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}/`,
          "it-IT": `${ITALIAN_SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-09-21"),
      changeFrequency: "yearly",
      priority: 0.8,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}/contact`,
          "it-IT": contactPage.italianCounterpart,
        },
      },
    },
    ...phaseOnePaths.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(phaseOneLastModified[path]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}${path}`,
          "it-IT": phaseOnePages[path].italianCounterpart,
        },
      },
    })),
    {
      url: `${SITE_URL}/praktika/filigran`,
      lastModified: new Date("2026-09-09"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}/praktika/filigran`,
        },
      },
    },
    {
      url: `${SITE_URL}/praktika/put-geroini`,
      lastModified: new Date("2026-09-09"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}/praktika/put-geroini`,
        },
      },
    },
    {
      url: `${SITE_URL}/checklist-ai-act`,
      lastModified: new Date("2026-09-03"),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}/checklist-ai-act`,
          "it-IT": `${ITALIAN_SITE_URL}/checklist-ai-act`,
        },
      },
    },
    {
      url: `${SITE_URL}/observatory`,
      lastModified: new Date("2026-09-22"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}/observatory`,
          "it-IT": ITALIAN_OBSERVATORY_URL,
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
          "ru-RU": `${SITE_URL}${AI_GOTOVO_LONGREAD.canonical}`,
        },
      },
    },
    ...allObservatoryArticles.map((article) => ({
      url: `${SITE_URL}/observatory/${article.slug}`,
      lastModified: new Date(article.updatedAt || article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "ru-RU": `${SITE_URL}/observatory/${article.slug}`,
          ...(article.originalUrl ? { "it-IT": article.originalUrl } : {}),
        },
      },
    })),
  ];
}
