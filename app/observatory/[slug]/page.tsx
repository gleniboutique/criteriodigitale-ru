import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleBody from "@/components/ArticleBody";
import ArticlePager from "@/components/ArticlePager";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/config/site";
import {
  getObservatoryArticle,
  getReadingLabel,
  observatoryArticles,
} from "@/content/observatory";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
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

  return {
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
      authors: ["Татьяна Мирошина"],
      locale: "ru_RU",
      alternateLocale: ["it_IT"],
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.lead,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getObservatoryArticle(slug);

  if (!article) {
    notFound();
  }

  const canonical = `/observatory/${article.slug}`;
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
            <span>Observatory / {article.number}</span>
            <span>{article.category}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="article-lead">{article.lead}</p>
          <div className="article-reading-meta">
            <span>{getReadingLabel(article)}</span>
            <span>Russian edition</span>
          </div>
        </header>

        <aside className="article-margin" aria-label="Системная аннотация">
          <span>FIELD / {article.number}</span>
          <span>RELATIONS</span>
          <span>CRITERIA</span>
          <span>HUMAN JUDGMENT</span>
        </aside>

        <ArticleBody body={article.body} />

        <footer className="article-end">
          <div className="article-context-cta">
            <span>Possible action / {article.number}</span>
            <p>{article.cta}</p>
            <Link href={article.ctaHref}>Разобрать ситуацию →</Link>
          </div>

          <div className="article-edition-link">
            <span>Italian original</span>
            <a href={article.originalUrl} hrefLang="it" rel="alternate">
              Итальянская версия →
            </a>
          </div>

          <ArticlePager currentSlug={article.slug} />
        </footer>
      </article>

      <SiteFooter />
    </main>
  );
}
