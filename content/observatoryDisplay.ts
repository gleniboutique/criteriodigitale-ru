import { AI_GOTOVO_LONGREAD } from "@/content/longread";
import {
  type ObservatoryArticle,
  observatoryArticles,
} from "@/content/observatory";
import { EU4_ARTICLE } from "@/content/eu4";

export type FeaturedObservatoryMaterial =
  | { kind: "longread" }
  | { kind: "article"; article: ObservatoryArticle };

const allObservatoryArticles: ObservatoryArticle[] = [
  ...observatoryArticles,
  EU4_ARTICLE,
];

function newestFirst(first: ObservatoryArticle, second: ObservatoryArticle) {
  return second.publishedAt.localeCompare(first.publishedAt);
}

export function getFeaturedObservatoryMaterial(): FeaturedObservatoryMaterial {
  const featuredMaterials: FeaturedObservatoryMaterial[] = [
    ...(AI_GOTOVO_LONGREAD.featured ? [{ kind: "longread" as const }] : []),
    ...allObservatoryArticles
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
  return allObservatoryArticles
    .filter((article) => !article.featured)
    .sort(newestFirst)
    .slice(0, limit);
}

export function getObservatoryIndexArticles() {
  return allObservatoryArticles
    .filter((article) => !article.featured)
    .sort(newestFirst);
}
