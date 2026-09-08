import type { Metadata } from "next";
import { withDefaultSocialImage } from "@/config/metadata";
import ArticleBody from "@/components/ArticleBody";
import ArticleEditorialDates from "@/components/ArticleEditorialDates";
import ArticlePager from "@/components/ArticlePager";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArticleEnd } from "@/components/ObservatoryArticleModules";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/config/site";
import { EU4_ARTICLE } from "@/content/eu4";
import {
  getObservatoryCategoryLabel,
  getReadingLabel,
  getReadingTime,
} from "@/content/observatory";
import { personSchema } from "@/content/structured-data";

const article = EU4_ARTICLE;
const canonical = `/observatory/${article.slug}`;
const articleUrl = `${SITE_URL}${canonical}`;

export const metadata: Metadata = withDefaultSocialImage({
  title: article.seoTitle ?? `${article.title} — Observatory`,
  description: article.searchDescription ?? article.lead,
  authors: [{ name: "Татьяна Мирошина" }],
  alternates: {
    canonical,
    languages: {
      "ru-RU": canonical,
    },
  },
  openGraph: {
    title: article.seoTitle ?? article.title,
    description: article.searchDescription ?? article.lead,
    type: "article",
    url: canonical,
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    authors: ["Татьяна Мирошина"],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: article.seoTitle ?? article.title,
    description: article.searchDescription ?? article.lead,
  },
});

export default function Eu4ArticlePage() {
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.lead,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: personSchema,
    datePublished: article.publishedAt,
    ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    inLanguage: article.language ?? "ru",
    timeRequired: `PT${getReadingTime(article)}M`,
  };
  const breadcrumbStructuredData = {
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
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <main
      className={`article-page article-page-${article.format}`}
      data-article-format={article.format}
      id="top"
    >
      <SiteHeader
        context="article"
        russianHref={canonical}
        hasLanguageCounterpart={false}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <article className="article-shell page-shell">
        <header className="article-header">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Наблюдения", href: "/observatory" },
              { label: article.title },
            ]}
          />
          <div className="article-label">
            <span>Наблюдения · {article.number}</span>
            <span>{getObservatoryCategoryLabel(article.category)}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="article-lead">{article.lead}</p>
          <div className="article-reading-meta">
            <ArticleEditorialDates
              author={personSchema.name}
              publishedAt={article.publishedAt}
              updatedAt={article.updatedAt}
              reviewedAt={article.reviewedAt}
              className="article-editorial-dates"
            />
            <span>{getReadingLabel(article)}</span>
            <span>Русское издание</span>
          </div>
        </header>

        <ArticleBody body={article.body} layout="analysis" />

        <ArticleEnd className="article-end">
          <ArticlePager currentSlug={article.slug} />
        </ArticleEnd>
      </article>

      <SiteFooter />
    </main>
  );
}
