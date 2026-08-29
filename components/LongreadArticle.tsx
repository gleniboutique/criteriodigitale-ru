import type { ReactNode } from "react";
import Link from "next/link";
import { CONTACT_TELEGRAM } from "@/config/contact";
import {
  AI_GOTOVO_LONGREAD,
  LONGREAD_HEADING_IDS,
  LONGREAD_SOURCES,
  LONGREAD_TOC,
  getLongreadReadingLabel,
} from "@/content/longread";
import {
  getObservatoryArticle,
  getReadingLabel,
} from "@/content/observatory";
import styles from "./LongreadArticle.module.css";

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
  return (
    <figure
      className={styles.diagram}
      aria-label="Схема: поручение переходит к ИИ-агенту, затем система сообщает «Готово», но связь с внешним результатом остаётся под вопросом."
    >
      <figcaption>
        <span>Схема поручения / 00.1</span>
        <span>Сообщение и внешний результат — разные слои</span>
      </figcaption>
      <div className={styles.diagramRoute} aria-hidden="true">
        <span className={styles.diagramNode}>Поручение</span>
        <i>→</i>
        <span className={styles.diagramNode}>ИИ-агент</span>
        <i>→</i>
        <span className={styles.diagramDone}>«Готово»</span>
      </div>
      <div className={styles.diagramExternal} aria-hidden="true">
        <span>Внешний результат</span>
        <i />
        <strong>?</strong>
      </div>
    </figure>
  );
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

function ResultTraceCards() {
  return (
    <aside className={styles.resultMap} aria-label="Результат, маршрут и след">
      {resultCards.map(([number, title, description]) => (
        <section key={title}>
          <span>{number}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </section>
      ))}
    </aside>
  );
}

function DimensionsSummary() {
  return (
    <aside className={styles.dimensions} aria-label="Шесть измерений управляемости — кратко">
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
    </aside>
  );
}

function LongreadBody({ markdown }: { markdown: string }) {
  const blocks = markdown.trim().split(/\n{2,}/);
  const rendered: ReactNode[] = [];
  let currentSection = "";

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index].trim();

    if (block.startsWith("## ")) {
      const heading = block.slice(3);
      currentSection = LONGREAD_HEADING_IDS.get(heading) ?? "";
      rendered.push(
        <h2 id={currentSection || undefined} key={`h2-${heading}`}>
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

    if (/^\d+\. /.test(block)) {
      const items = [block.replace(/^\d+\. /, "")];

      while (/^\d+\. /.test(blocks[index + 1]?.trim() ?? "")) {
        index += 1;
        items.push(blocks[index].trim().replace(/^\d+\. /, ""));
      }

      rendered.push(
        <ol
          className={currentSection === "prakticheskaya-proverka" ? styles.checklist : styles.proseList}
          key={`ol-${index}`}
        >
          {items.map((item, itemIndex) => (
            <li key={item}>
              {currentSection === "prakticheskaya-proverka" && (
                <span aria-hidden="true">{String(itemIndex + 1).padStart(2, "0")}</span>
              )}
              {renderInline(item)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    if (block.startsWith("> ")) {
      const quote = block.slice(2);
      const plainQuote = quote.replaceAll("**", "");

      if (plainQuote.startsWith("Что именно означает слово «готово»")) {
        rendered.push(
          <blockquote className={styles.transitionQuestion} key={`quote-${index}`}>
            <span>Главный вопрос</span>
            <p>{renderInline(quote)}</p>
          </blockquote>,
        );
      } else if (plainQuote.startsWith("Работа сделана, когда существует внешний результат")) {
        rendered.push(
          <figure className={styles.criterion} key={`criterion-${index}`}>
            <figcaption>Критерий «готово» для агентной системы</figcaption>
            <blockquote>{renderInline(quote)}</blockquote>
          </figure>,
        );
      } else {
        rendered.push(
          <blockquote
            className={plainQuote.includes("Можем перейти к другому вопросу?") ? styles.quietQuote : styles.pullquote}
            key={`quote-${index}`}
          >
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

    if (block === "После неё они стали для меня основным условием делегирования.") {
      rendered.push(
        <div className={styles.introEnd} key={`p-${index}`}>
          {paragraph}
          <TableOfContents />
        </div>,
      );
    } else {
      rendered.push(<div key={`p-${index}`}>{paragraph}</div>);
    }

    if (block.startsWith("Поэтому хороший результат ещё не доказывает")) {
      rendered.push(<ResultTraceCards key="result-map" />);
    }

    if (block.startsWith("Именно поэтому не всякая задача может быть целиком передана системе")) {
      rendered.push(<DimensionsSummary key="dimensions" />);
    }
  }

  return <div className={styles.body}>{rendered}</div>;
}

function Sources() {
  return (
    <section className={styles.sources} aria-labelledby="sources-title">
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
    </section>
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
        <a href={CONTACT_TELEGRAM} rel="noreferrer" target="_blank">
          Telegram-канал «Между» ↗
        </a>
      </div>
    </aside>
  );
}

function ArticleCta() {
  return (
    <aside className={styles.cta} aria-labelledby="longread-cta-title">
      <span>Possible action / рабочий процесс</span>
      <h2 id="longread-cta-title">Планируется дать ИИ доступ к файлам, сайту или рабочим сервисам?</h2>
      <p>
        До запуска стоит определить, что система может делать самостоятельно, где требуется
        подтверждение, какой след она должна оставлять и что именно будет считаться выполненной работой.
      </p>
      <div>
        <Link href="/contact">Обсудить рабочий процесс →</Link>
        <Link href="/#work">Посмотреть мой подход</Link>
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
              <span>{article.category}</span>
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
        <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
          <ol>
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/observatory">Наблюдения</Link></li>
            <li aria-current="page">{AI_GOTOVO_LONGREAD.shortTitle}</li>
          </ol>
        </nav>

        <div className={styles.headerLabel}>
          <span>{AI_GOTOVO_LONGREAD.type}</span>
          <span>Observatory / {AI_GOTOVO_LONGREAD.number}</span>
        </div>
        <h1>{AI_GOTOVO_LONGREAD.title}</h1>
        <p className={styles.lead}>{AI_GOTOVO_LONGREAD.lead}</p>

        <div className={styles.tags} aria-label="Темы статьи">
          {AI_GOTOVO_LONGREAD.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className={styles.meta}>
          <span>Автор / {AI_GOTOVO_LONGREAD.author}</span>
          <span>{getLongreadReadingLabel()}</span>
          <span>Русское издание</span>
        </div>
      </header>

      <LongreadDiagram />
      <LongreadBody markdown={markdown} />
      <Sources />
      <AuthorNote />
      <ArticleCta />
      <RelatedArticles />

      <div className={styles.back}>
        <Link href="/observatory">← Все материалы Observatory</Link>
      </div>
    </article>
  );
}
