import Link from "next/link";
import { getArticleNavigation } from "@/content/articleNavigation";
import styles from "./ArticlePager.module.css";

type ArticlePagerProps = {
  currentSlug: string;
  className?: string;
};

export default function ArticlePager({ currentSlug, className }: ArticlePagerProps) {
  const { previous, next } = getArticleNavigation(currentSlug);

  return (
    <nav
      className={[styles.pager, className].filter(Boolean).join(" ")}
      aria-label="Навигация между статьями"
    >
      <div className={styles.previous}>
        {previous && (
          <Link href={previous.href}>
            <span>← Предыдущая статья</span>
            <strong>{previous.title}</strong>
          </Link>
        )}
      </div>

      <Link className={styles.all} href="/observatory">
        Все наблюдения
      </Link>

      <div className={styles.next}>
        {next && (
          <Link href={next.href}>
            <span>Следующая статья →</span>
            <strong>{next.title}</strong>
          </Link>
        )}
      </div>
    </nav>
  );
}
