import Link from "next/link";
import {
  getReadingLabel,
  type ObservatoryArticle,
} from "@/content/observatory";

type ObservatoryArticleCardProps = {
  article: ObservatoryArticle;
  variant: "home" | "index";
  featured?: boolean;
};

export default function ObservatoryArticleCard({
  article,
  variant,
  featured = false,
}: ObservatoryArticleCardProps) {
  const isHome = variant === "home";
  const className = [
    isHome ? "observatory-home-item" : "observatory-index-item",
    `${isHome ? "observatory-home-item" : "observatory-index-item"}-${article.format}`,
    featured
      ? `${isHome ? "observatory-home-item" : "observatory-index-item"}-featured`
      : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={className} data-article-format={article.format}>
      <Link
        className={isHome ? "observatory-preview" : undefined}
        href={`/observatory/${article.slug}`}
      >
        <div className={isHome ? "observatory-preview-label" : "observatory-index-label"}>
          <span>Observatory / {article.number}</span>
          <small>{article.category}</small>
        </div>
        {isHome ? <h3>{article.title}</h3> : <h2>{article.title}</h2>}
        <p className={isHome ? "observatory-preview-lead" : undefined}>{article.cardDescription ?? article.lead}</p>
        <div className={isHome ? "observatory-preview-meta" : "observatory-index-meta"}>
          <span>{getReadingLabel(article)}</span>
          <strong>Читать →</strong>
        </div>
      </Link>
    </article>
  );
}
