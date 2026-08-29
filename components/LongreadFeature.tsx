import Link from "next/link";
import {
  AI_GOTOVO_LONGREAD,
  getLongreadReadingLabel,
} from "@/content/longread";
import styles from "./LongreadFeature.module.css";

type LongreadFeatureProps = {
  variant: "index" | "home";
};

export default function LongreadFeature({ variant }: LongreadFeatureProps) {
  const isHome = variant === "home";

  return (
    <article className={isHome ? styles.homeFeature : styles.indexFeature}>
      <Link href={AI_GOTOVO_LONGREAD.canonical}>
        <div className={styles.label}>
          <span>{isHome ? AI_GOTOVO_LONGREAD.homeType : AI_GOTOVO_LONGREAD.type}</span>
          {!isHome && <small>Observatory / {AI_GOTOVO_LONGREAD.number}</small>}
        </div>

        {isHome ? (
          <h3>{AI_GOTOVO_LONGREAD.shortTitle}</h3>
        ) : (
          <h2>{AI_GOTOVO_LONGREAD.title}</h2>
        )}

        <p>
          {isHome
            ? AI_GOTOVO_LONGREAD.homeDescription
            : AI_GOTOVO_LONGREAD.listingDescription}
        </p>

        {!isHome && (
          <div className={styles.tags} aria-label="Темы статьи">
            {AI_GOTOVO_LONGREAD.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        )}

        <div className={styles.meta}>
          <span>{getLongreadReadingLabel()}</span>
          <strong>{isHome ? "Читать разбор" : "Читать разбор →"}</strong>
        </div>
      </Link>
    </article>
  );
}
