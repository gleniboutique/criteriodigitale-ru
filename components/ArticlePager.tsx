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
      {previous && (
        <div className={styles.previous}>
          <Link href={previous.href}>
            <span className={styles.direction}>
              <span className={styles.arrow} aria-hidden="true">←</span>
              Предыдущая статья
            </span>
            <strong>{previous.title}</strong>
          </Link>
        </div>
      )}

      <Link className={styles.all} href="/observatory">
        Все наблюдения
      </Link>

      {next && (
        <div className={styles.next}>
          <Link href={next.href}>
            <span className={styles.direction}>
              Следующая статья
              <span className={styles.arrow} aria-hidden="true">→</span>
            </span>
            <strong>{next.title}</strong>
          </Link>
        </div>
      )}
    </nav>
  );
}
