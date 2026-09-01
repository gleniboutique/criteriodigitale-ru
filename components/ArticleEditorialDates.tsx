import type { ReactNode } from "react";
import { formatRussianDate } from "@/content/editorialDates";

type ArticleEditorialDatesProps = {
  author: string;
  publishedAt: string;
  updatedAt?: string;
  reviewedAt?: string;
  className?: string;
  publishedSuffix?: ReactNode;
};

export default function ArticleEditorialDates({
  author,
  publishedAt,
  updatedAt,
  reviewedAt,
  className,
  publishedSuffix,
}: ArticleEditorialDatesProps) {
  const datesCoincide = Boolean(updatedAt && reviewedAt && updatedAt === reviewedAt);

  return (
    <span className={className}>
      <span>
        {author} · Опубликовано{" "}
        <time dateTime={publishedAt}>{formatRussianDate(publishedAt)}</time>
        {publishedSuffix}
      </span>
      {datesCoincide ? (
        <span>
          Обновлено и проверено{" "}
          <time dateTime={updatedAt}>{formatRussianDate(updatedAt!)}</time>
        </span>
      ) : updatedAt || reviewedAt ? (
        <span>
          {updatedAt ? (
            <>
              Обновлено <time dateTime={updatedAt}>{formatRussianDate(updatedAt)}</time>
            </>
          ) : null}
          {updatedAt && reviewedAt ? " · " : null}
          {reviewedAt ? (
            <>
              Проверено <time dateTime={reviewedAt}>{formatRussianDate(reviewedAt)}</time>
            </>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
