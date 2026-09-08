import { AI_GOTOVO_LONGREAD } from "@/content/longread";
import { observatoryArticles } from "@/content/observatory";
import { EU4_ARTICLE } from "@/content/eu4";

export type ArticleNavigationItem = {
  slug: string;
  href: string;
  title: string;
};

export const articleNavigation: ArticleNavigationItem[] = [
  {
    slug: "ii-govorit-gotovo",
    href: AI_GOTOVO_LONGREAD.canonical,
    title: AI_GOTOVO_LONGREAD.title,
  },
  ...observatoryArticles.map((article) => ({
    slug: article.slug,
    href: `/observatory/${article.slug}`,
    title: article.title,
  })),
  {
    slug: EU4_ARTICLE.slug,
    href: `/observatory/${EU4_ARTICLE.slug}`,
    title: EU4_ARTICLE.title,
  },
];

export function getArticleNavigation(slug: string) {
  const currentIndex = articleNavigation.findIndex((article) => article.slug === slug);

  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: articleNavigation[currentIndex - 1],
    next: articleNavigation[currentIndex + 1],
  };
}
