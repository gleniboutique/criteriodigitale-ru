import { AI_GOTOVO_LONGREAD } from "@/content/longread";
import {
  type ObservatoryArticle,
  observatoryArticles,
} from "@/content/observatory";

export type FeaturedObservatoryMaterial =
  | { kind: "longread" }
  | { kind: "article"; article: ObservatoryArticle };

function newestFirst(first: ObservatoryArticle, second: ObservatoryArticle) {
  return second.publishedAt.localeCompare(first.publishedAt);
}

export function getFeaturedObservatoryMaterial(): FeaturedObservatoryMaterial {
  const featuredMaterials: FeaturedObservatoryMaterial[] = [
    ...(AI_GOTOVO_LONGREAD.featured ? [{ kind: "longread" as const }] : []),
    ...observatoryArticles
      .filter((article) => article.featured)
      .map((article) => ({ kind: "article" as const, article })),
  ];

  if (featuredMaterials.length !== 1) {
    throw new Error(
      `Observatory requires exactly one featured material; found ${featuredMaterials.length}.`,
    );
  }

  return featuredMaterials[0];
}

export function getLatestObservatoryArticles(limit = 2) {
  return observatoryArticles
    .filter((article) => !article.featured)
    .sort(newestFirst)
    .slice(0, limit);
}

export function getObservatoryIndexArticles() {
  return observatoryArticles.filter((article) => !article.featured).sort(newestFirst);
}
