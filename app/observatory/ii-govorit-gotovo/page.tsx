import type { Metadata } from "next";
import LongreadArticle from "@/components/LongreadArticle";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/config/site";
import {
  AI_GOTOVO_LONGREAD,
  getLongreadMarkdown,
  getLongreadReadingMinutes,
} from "@/content/longread";
import { personSchema } from "@/content/structured-data";

export const metadata: Metadata = {
  title: `${AI_GOTOVO_LONGREAD.title} — Татьяна Мирошина`,
  description: AI_GOTOVO_LONGREAD.lead,
  authors: [{ name: AI_GOTOVO_LONGREAD.author }],
  alternates: {
    canonical: AI_GOTOVO_LONGREAD.canonical,
    languages: {
      ru: AI_GOTOVO_LONGREAD.canonical,
    },
  },
  openGraph: {
    title: AI_GOTOVO_LONGREAD.title,
    description: AI_GOTOVO_LONGREAD.lead,
    type: "article",
    url: AI_GOTOVO_LONGREAD.canonical,
    authors: [AI_GOTOVO_LONGREAD.author],
    publishedTime: AI_GOTOVO_LONGREAD.publicationDate,
    modifiedTime: AI_GOTOVO_LONGREAD.modifiedDate,
    locale: "ru_RU",
  },
  twitter: {
    card: "summary",
    title: AI_GOTOVO_LONGREAD.title,
    description: AI_GOTOVO_LONGREAD.lead,
  },
};

export default function AiGotovoLongreadPage() {
  const markdown = getLongreadMarkdown();
  const pageUrl = `${SITE_URL}${AI_GOTOVO_LONGREAD.canonical}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: AI_GOTOVO_LONGREAD.title,
      description: AI_GOTOVO_LONGREAD.lead,
      inLanguage: "ru",
      mainEntityOfPage: pageUrl,
      author: personSchema,
      timeRequired: `PT${getLongreadReadingMinutes()}M`,
      keywords: AI_GOTOVO_LONGREAD.tags.join(", "),
      datePublished: AI_GOTOVO_LONGREAD.publicationDate,
      dateModified: AI_GOTOVO_LONGREAD.modifiedDate,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Наблюдения",
          item: `${SITE_URL}/observatory`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: AI_GOTOVO_LONGREAD.shortTitle,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="article-page" id="top">
      <SiteHeader
        context="article"
        russianHref={AI_GOTOVO_LONGREAD.canonical}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <LongreadArticle markdown={markdown} />
      <SiteFooter />
    </main>
  );
}
