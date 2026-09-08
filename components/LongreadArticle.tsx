import type { ReactNode } from "react";
import Link from "next/link";
import ArticleEditorialDates from "@/components/ArticleEditorialDates";
import ArticlePager from "@/components/ArticlePager";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ArticleEnd,
  AssignmentTraceMap,
  DarkSystemField,
  EvidenceField,
  IndexedField,
  QuestionCriterionField,
  SourceTrace,
} from "@/components/ObservatoryArticleModules";
import {
  AI_GOTOVO_LONGREAD,
  LONGREAD_HEADING_IDS,
  LONGREAD_SOURCES,
  LONGREAD_TOC,
  getLongreadReadingLabel,
} from "@/content/longread";
import {
  getObservatoryCategoryLabel,
  getObservatoryArticle,
  getReadingLabel,
} from "@/content/observatory";
import styles from "./LongreadArticle.module.css";

const MEJDU_TELEGRAM_URL = "https://t.me/mejdu_ai";

const resultCards = [
  ["01", "Результат", "Что появилось или изменилось во внешней системе."],
  ["02", "Маршрут", "Как система пришла к результату и какие решения приняла."],
  ["03", "След", "Что позволяет независимо проверить и восстановить сделанное."],
] as const;

const dimensions = [
  "Возможность остановить.",
  "Видимость во время процесса.",
  "Управление ресурсами.",
  "Границы области действия.",
  "Сохранение контекста.",
  "Сохранение намерения.",
] as const;

type EditorialMarker =
  | "main-question"
  | "delegation-question"
  | "case-snapshot"
  | "audit-questions"
  | "done-levels"
  | "quiet-quote"
  | "dark-criterion"
  | "practical-checklist";

const editorialMarkers = new Map<string, EditorialMarker>([
  ["[[MAIN_QUESTION]]", "main-question"],
  ["[[DELEGATION_QUESTION]]", "delegation-question"],
  ["[[CASE_SNAPSHOT]]", "case-snapshot"],
  ["[[AUDIT_QUESTIONS]]", "audit-questions"],
  ["[[DONE_LEVELS]]", "done-levels"],
  ["[[QUIET_QUOTE]]", "quiet-quote"],
  ["[[DARK_CRITERION]]", "dark-criterion"],
  ["[[PRACTICAL_CHECKLIST]]", "practical-checklist"],
]);

function renderInline(text: string) {
  return text
    .split(/(\*\*.*?\*\*|\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part, index): ReactNode => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
      }

      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
      }

      return part;
    });
}

function LongreadDiagram() {
  return <AssignmentTraceMap className={styles.diagram} />;
}

function TableOfContents() {
  return (
    <details className={styles.toc} open>
      <summary>
        <span>Содержание</span>
        <small>Навигация по статье</small>
      </summary>
      <ol>
        {LONGREAD_TOC.map(([title, id], index) => (
          <li key={id}>
            <a href={`#${id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {title}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}

function ResultRouteTraceCompare() {
  return (
    <IndexedField className={styles.resultMap} label="Результат, маршрут и след" variant="compare">
      {resultCards.map(([number, title, description]) => (
        <section key={title}>
          <span>{number}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
      ))}
    </IndexedField>
  );
}

function getNumberedItems(block: string) {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);

  if (lines.length === 0 || lines.some((line) => !/^\d+\. /.test(line))) {
    return [];
  }

  return lines.map((line) => line.replace(/^\d+\. /, ""));
}

function CaseSnapshot({ items }: { items: string[] }) {
  return (
    <EvidenceField as="aside" className={styles.caseSnapshot} label="Карта трёх расхождений">
      <ol>
        {items.map((item, index) => (
          <li key={item}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p>{renderInline(item)}</p>
          </li>
        ))}
      </ol>
    </EvidenceField>
  );
}

function AuditQuestions({ items }: { items: string[] }) {
  return (
    <EvidenceField className={styles.auditQuestions} label="Пять вопросов к системе">
      <div>Контрольная сверка / 05 вопросов</div>
      <ol>
        {items.map((item, index) => (
          <li key={item}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p>{renderInline(item)}</p>
          </li>
        ))}
      </ol>
    </EvidenceField>
  );
}

function DoneLevels({ items }: { items: string[] }) {
  return (
    <IndexedField className={styles.doneLevels} label="Пять уровней значения «готово»" variant="steps">
      <ol>
        {items.map((item, index) => (
          <li key={item}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p>{renderInline(item)}</p>
          </li>
        ))}
      </ol>
    </IndexedField>
  );
}

function DimensionsSummary() {
  return (
    <IndexedField className={styles.dimensions} label="Шесть измерений управляемости — кратко" variant="steps">
      <div>
        <span>Резюме / 06</span>
        <p>Управляемость складывается из отдельных условий, а не из одного общего обещания контроля.</p>
      </div>
      <ol>
        {dimensions.map((dimension, index) => (
          <li key={dimension}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {dimension}
          </li>
        ))}
      </ol>
    </IndexedField>
  );
}

function LongreadBody({ markdown }: { markdown: string }) {
  const blocks = markdown.trim().split(/\n{2,}/);
  const rendered: ReactNode[] = [];
  let pendingMarker: EditorialMarker | undefined;

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index].trim();

    if (block === "[[LONGREAD_TOC]]") {
      rendered.push(<TableOfContents key="longread-toc" />);
      continue;
    }

    if (block === "[[ASSIGNMENT_TRACE_MAP]]") {
      rendered.push(<LongreadDiagram key="assignment-trace-map" />);
      continue;
    }

    if (block === "[[RESULT_ROUTE_TRACE_COMPARE]]") {
      rendered.push(<ResultRouteTraceCompare key="result-route-trace-compare" />);
      continue;
    }

    if (block === "[[DIMENSIONS_SUMMARY]]") {
      rendered.push(<DimensionsSummary key="dimensions-summary" />);
      continue;
    }

    const editorialMarker = editorialMarkers.get(block);

    if (editorialMarker) {
      pendingMarker = editorialMarker;
      continue;
    }

    if (block.startsWith("## ")) {
      const heading = block.slice(3);
      const sectionId = LONGREAD_HEADING_IDS.get(heading) ?? "";
      rendered.push(
        <h2 id={sectionId || undefined} key={`h2-${heading}`}>
          {heading}
        </h2>,
      );
      continue;
    }

    if (block.startsWith("### ")) {
      const heading = block.slice(4);
      rendered.push(<h3 key={`h3-${heading}`}>{heading}</h3>);
      continue;
    }

    if (block.startsWith("— ")) {
      const items = [block.slice(2)];

      while (blocks[index + 1]?.trim().startsWith("— ")) {
        index += 1;
        items.push(blocks[index].trim().slice(2));
      }

      rendered.push(
        <ul className={styles.proseList} key={`ul-${index}`}>
          {items.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ul>,
      );
      continue;
    }

    const numberedItems = getNumberedItems(block);

    if (numberedItems.length > 0) {
      const items = [...numberedItems];

      while (getNumberedItems(blocks[index + 1]?.trim() ?? "").length > 0) {
        index += 1;
        items.push(...getNumberedItems(blocks[index].trim()));
      }

      if (pendingMarker === "case-snapshot") {
        rendered.push(<CaseSnapshot items={items} key="case-snapshot" />);
        pendingMarker = undefined;
        continue;
      }

      if (pendingMarker === "audit-questions") {
        rendered.push(<AuditQuestions items={items} key="audit-questions" />);
        pendingMarker = undefined;
        continue;
      }

      if (pendingMarker === "done-levels") {
        rendered.push(<DoneLevels items={items} key="done-levels" />);
        pendingMarker = undefined;
        continue;
      }

      if (pendingMarker === "practical-checklist") {
        rendered.push(
          <IndexedField
            className={styles.checklist}
            key="practical-checklist"
            label="Практическая проверка перед делегированием"
            variant="steps"
          >
            <ol>
              {items.map((item, itemIndex) => (
                <li key={item}>
                  <span aria-hidden="true">{String(itemIndex + 1).padStart(2, "0")}</span>
                  {renderInline(item)}
                </li>
              ))}
            </ol>
          </IndexedField>,
        );
        pendingMarker = undefined;
        continue;
      }

      rendered.push(
        <ol className={styles.proseList} key={`ol-${index}`}>
          {items.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ol>,
      );
      continue;
    }

    if (block.startsWith("> ")) {
      const quote = block.slice(2);

      if (pendingMarker === "main-question") {
        rendered.push(
          <QuestionCriterionField as="blockquote" className={styles.transitionQuestion} key={`quote-${index}`}>
            <span>Главный вопрос</span>
            <p>{renderInline(quote)}</p>
          </QuestionCriterionField>,
        );
        pendingMarker = undefined;
      } else if (pendingMarker === "delegation-question") {
        rendered.push(
          <QuestionCriterionField as="blockquote" className={styles.delegationQuestion} key={`quote-${index}`}>
            <span>Вопрос о делегировании</span>
            <p>{renderInline(quote)}</p>
          </QuestionCriterionField>,
        );
        pendingMarker = undefined;
      } else if (pendingMarker === "dark-criterion") {
        rendered.push(
          <DarkSystemField as="figure" className={styles.criterion} key={`criterion-${index}`}>
            <figcaption>Критерий «готово» для агентной системы</figcaption>
            <blockquote>{renderInline(quote)}</blockquote>
          </DarkSystemField>,
        );
        pendingMarker = undefined;
      } else if (pendingMarker === "quiet-quote") {
        rendered.push(
          <blockquote className={styles.quietQuote} key={`quote-${index}`}>
            {renderInline(quote)}
          </blockquote>,
        );
        pendingMarker = undefined;
      } else {
        rendered.push(
          <blockquote className={styles.pullquote} key={`quote-${index}`}>
            {renderInline(quote)}
          </blockquote>,
        );
      }
      continue;
    }

    const paragraph = (
      <p className={block.startsWith("**") && block.endsWith("**") ? styles.stepTitle : undefined}>
        {renderInline(block)}
      </p>
    );

    rendered.push(<div key={`p-${index}`}>{paragraph}</div>);
  }

  if (pendingMarker) {
    throw new Error(`Редакционный маркер не связан с блоком: ${pendingMarker}`);
  }

  return <div className={styles.body}>{rendered}</div>;
}

function Sources() {
  return (
    <SourceTrace className={styles.sources} labelledBy="sources-title">
      <div className={styles.sectionMarker}>Проверяемый след / источники</div>
      <h2 id="sources-title">Источники и примечания</h2>
      <ol>
        {LONGREAD_SOURCES.map((source) => (
          <li key={source.href}>
            <div>
              <span>{source.publisher}</span>
              <span>{source.date}{"updated" in source ? ` · ${source.updated}` : ""}</span>
            </div>
            <a href={source.href} rel="noreferrer" target="_blank">
              {source.title} ↗
            </a>
            <p>{source.note}</p>
          </li>
        ))}
        <li>
          <div>
            <span>Авторские материалы</span>
            <span>первичный опыт</span>
          </div>
          <p>Наблюдения и исходные материалы Татьяны Мирошиной.</p>
        </li>
      </ol>
    </SourceTrace>
  );
}

function AuthorNote() {
  return (
    <aside className={styles.authorNote} aria-labelledby="author-note-title">
      <span>Авторская заметка / 01</span>
      <div>
        <h2 id="author-note-title">Как появился этот текст</h2>
        <p>
          Статья выросла из нескольких наблюдений, опубликованных в Telegram-канале «Между»,
          и из моего опыта работы с агентной системой. Здесь они впервые собраны в одну
          последовательную модель: <strong>результат → маршрут → след → границы → возможность возврата.</strong>
        </p>
        <a href={MEJDU_TELEGRAM_URL} rel="noreferrer" target="_blank">
          Telegram-канал «Между» ↗
        </a>
      </div>
    </aside>
  );
}

function ArticleCta() {
  return (
    <aside className={styles.cta} aria-labelledby="longread-cta-title">
      <span>Возможное действие · рабочий процесс</span>
      <h2 id="longread-cta-title">Планируется дать ИИ доступ к файлам, сайту или рабочим сервисам?</h2>
      <p>
        До запуска стоит определить, что система может делать самостоятельно, где требуется
        подтверждение, какой след она должна оставлять и что именно будет считаться выполненной работой.
      </p>
      <div>
        <Link href="/ai-i-cennost">ИИ: нужен ли он и создаёт ли ценность →</Link>
        <Link href="/kak-ya-rabotayu">Посмотреть мой подход</Link>
      </div>
    </aside>
  );
}

function RelatedArticles() {
  const related = [
    getObservatoryArticle("otvet-ranshe-voprosa"),
    getObservatoryArticle("ai-soglasen-so-vsem"),
  ].filter((article) => article !== undefined);

  return (
    <section className={styles.related} aria-labelledby="related-title">
      <div className={styles.sectionMarker}>Продолжить чтение / 02</div>
      <h2 id="related-title">Связанные материалы</h2>
      <div>
        {related.map((article) => (
          <article key={article.slug}>
            <Link href={`/observatory/${article.slug}`}>
              <span>{getObservatoryCategoryLabel(article.category)}</span>
              <h3>{article.title}</h3>
              <p>{article.lead}</p>
              <small>{getReadingLabel(article)} · Читать →</small>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function LongreadArticle({ markdown }: { markdown: string }) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <Breadcrumbs
          className={styles.headerBreadcrumbs}
          items={[
            { label: "Главная", href: "/" },
            { label: "Наблюдения", href: "/observatory" },
            { label: AI_GOTOVO_LONGREAD.shortTitle },
          ]}
        />

        <div className={styles.headerLabel}>
          <span>{AI_GOTOVO_LONGREAD.type}</span>
          <span>Наблюдения · {AI_GOTOVO_LONGREAD.number}</span>
        </div>
        <h1>{AI_GOTOVO_LONGREAD.title}</h1>
        <p className={styles.lead}>{AI_GOTOVO_LONGREAD.lead}</p>

        <div className={styles.tags} aria-label="Темы статьи">
          {AI_GOTOVO_LONGREAD.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className={styles.meta}>
          <ArticleEditorialDates
            author={AI_GOTOVO_LONGREAD.author}
            publishedAt={AI_GOTOVO_LONGREAD.publicationDate}
            updatedAt={AI_GOTOVO_LONGREAD.modifiedDate}
            reviewedAt={AI_GOTOVO_LONGREAD.reviewedAt}
            className={styles.editorialDates}
            publishedSuffix={<> · {getLongreadReadingLabel()}</>}
          />
          <span>Русское издание</span>
        </div>
      </header>

      <LongreadBody markdown={markdown} />
      <ArticleEnd className={styles.end}>
        <Sources />
        <AuthorNote />
        <ArticleCta />
        <RelatedArticles />
        <ArticlePager className={styles.pager} currentSlug="ii-govorit-gotovo" />
      </ArticleEnd>
    </article>
  );
}
