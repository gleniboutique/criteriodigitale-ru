import type { Metadata } from "next";
import { withDefaultSocialImage } from "@/config/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/ArticleBody";
import ArticleEditorialDates from "@/components/ArticleEditorialDates";
import ArticlePager from "@/components/ArticlePager";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/config/site";
import {
  getObservatoryArticle,
  getObservatoryCategoryLabel,
  getReadingLabel,
  getReadingTime,
  observatoryArticles,
} from "@/content/observatory";
import { articleNavigation } from "@/content/articleNavigation";
import { personSchema } from "@/content/structured-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

type ThematicRelation = {
  slug: string;
  label: string;
};

const thematicRelations: Record<string, ThematicRelation[]> = {
  "otvet-ranshe-voprosa": [
    {
      slug: "ii-govorit-gotovo",
      label: "Как проверить, что AI действительно сделал работу",
    },
    {
      slug: "novosti-ob-ai",
      label: "Как отделять важные AI-сигналы от шума",
    },
  ],
  "ai-soglasen-so-vsem": [
    {
      slug: "ii-govorit-gotovo",
      label: "О проверяемости утверждений и действий AI",
    },
    {
      slug: "chto-sposoben-ponyat-klient",
      label: "Как сохранить профессиональный критерий в AI-редактуре",
    },
  ],
  "chto-sposoben-ponyat-klient": [
    {
      slug: "ai-soglasen-so-vsem",
      label: "Почему соглашательство AI — плохой совет",
    },
    {
      slug: "otvet-ranshe-voprosa",
      label: "Почему собственный вопрос должен появиться раньше ответа",
    },
  ],
  "novosti-ob-ai": [
    {
      slug: "ai-soglasen-so-vsem",
      label: "Как отличить проверку от убедительного согласия",
    },
  ],
};

export function generateStaticParams() {
  return observatoryArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getObservatoryArticle(slug);

  if (!article) {
    return {};
  }

  const canonical = `/observatory/${article.slug}`;

  return withDefaultSocialImage({
    title: `${article.title} — Observatory`,
    description: article.lead,
    authors: [{ name: "Татьяна Мирошина" }],
    alternates: {
      canonical,
      languages: {
        ru: canonical,
        it: article.originalUrl,
      },
    },
    openGraph: {
      title: article.title,
      description: article.lead,
      type: "article",
      url: canonical,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Татьяна Мирошина"],
      locale: "ru_RU",
      alternateLocale: ["it_IT"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.lead,
    },
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getObservatoryArticle(slug);

  if (!article) {
    notFound();
  }

  const canonical = `/observatory/${article.slug}`;
  const articleUrl = `${SITE_URL}${canonical}`;
  const relatedObservations = (thematicRelations[article.slug] ?? []).flatMap(
    (relation) => {
      const target = articleNavigation.find((item) => item.slug === relation.slug);

      return target ? [{ ...target, label: relation.label }] : [];
    },
  );
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
    inLanguage: "ru",
    timeRequired: `PT${getReadingTime(article)}M`,
  };
  const structuredData = {
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
        item: `${SITE_URL}${canonical}`,
      },
    ],
  };

  return (
    <main className="article-page" id="top">
      <SiteHeader
        context="article"
        russianHref={canonical}
        italianHref={article.originalUrl}
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
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
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

        <ArticleBody body={article.body} />

        <footer className="article-end">
          <div className="article-context-cta">
            <span>Возможное действие · {article.number}</span>
            <p>{article.cta}</p>
            <Link href={article.ctaHref}>Разобрать ситуацию →</Link>
          </div>

          <div className="article-edition-link">
            <span>Итальянская версия</span>
            <a href={article.originalUrl} hrefLang="it" rel="alternate">
              Читать по-итальянски <span aria-hidden="true">→</span>
            </a>
          </div>

          {relatedObservations.length > 0 && (
            <section
              className="article-related"
              aria-labelledby={`article-related-${article.slug}`}
            >
              <div className="article-related-heading">
                <span>По теме</span>
                <h2 id={`article-related-${article.slug}`}>Связанные наблюдения</h2>
              </div>
              <ul className="article-related-list">
                {relatedObservations.map((related) => (
                  <li key={related.slug}>
                    <Link href={related.href}>
                      <span>{related.label}</span>
                      <strong>{related.title}</strong>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <ArticlePager currentSlug={article.slug} />
        </footer>
      </article>

      <SiteFooter />
    </main>
  );
}
