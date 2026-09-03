import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { withDefaultSocialImage } from "@/config/metadata";
import { ITALIAN_SITE_URL, SITE_URL } from "@/config/site";
import { PERSON_ID, RU_WEBSITE_ID } from "@/content/structured-data";
import styles from "./page.module.css";

const title = "Checklist AI Act 2026 — русская версия | Criterio Digitale";
const description =
  "Практическая checklist по EU AI Act: территориальный охват, роли, AI literacy, Article 5, high-risk, Article 50, GPAI, данные и рабочий план.";
const pageUrl = `${SITE_URL}/checklist-ai-act`;

export const metadata: Metadata = withDefaultSocialImage({
  title,
  description,
  alternates: {
    canonical: "/checklist-ai-act",
    languages: {
      "ru-RU": "/checklist-ai-act",
      "it-IT": `${ITALIAN_SITE_URL}/checklist-ai-act`,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/checklist-ai-act",
    locale: "ru_RU",
  },
  twitter: { title, description },
});

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${pageUrl}#webpage`,
  name: title,
  description,
  url: pageUrl,
  inLanguage: "ru-RU",
  isPartOf: { "@id": RU_WEBSITE_ID },
  creator: { "@id": PERSON_ID },
} as const;

const routeSteps = [
  ["01", "Территория", "Есть ли у сценария связь с рынком, людьми или использованием в ЕС."],
  ["02", "Роль", "Кто вы в конкретном сценарии: deployer, provider или другой участник цепочки."],
  ["03", "Маршрут", "Какие требования уже действуют, какие вступят позже, а что относится к guidance и практике."],
  ["04", "Действия", "Что сделать внутри команды, что запросить у provider и где нужен legal или DPO."],
];

const boundaries = [
  {
    label: "Можно сделать самостоятельно",
    title: "Собрать исходные факты.",
    text: "Описать сценарий, определить предварительный маршрут, собрать документы, зафиксировать вопросы и подготовить данные для проверки специалистом.",
  },
  {
    label: "Criterio Digitale",
    title: "Собрать рабочую систему.",
    text: "Карта процессов и AI-сценариев, operational governance, human oversight, контроль, documentation flow и traceability.",
  },
  {
    label: "Legal / DPO",
    title: "Дать правовую квалификацию.",
    text: "Окончательная применимость, Article 5, high-risk classification, DPIA/FRIA, договоры, ответственность и национальное право.",
  },
];

export default function ChecklistAIActPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader
        context="resource"
        russianHref="/checklist-ai-act"
        italianHref={`${ITALIAN_SITE_URL}/checklist-ai-act`}
        hasLanguageCounterpart
      />
      <main className={styles.page} id="top">
        <div className={`${styles.breadcrumbWrap} page-shell`}>
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Checklist AI Act" },
            ]}
          />
        </div>

        <section className={`${styles.hero} page-shell`} aria-labelledby="checklist-title">
          <div className={styles.heroMain}>
            <p className={styles.eyebrow}>Практический документ / EU AI Act</p>
            <h1 id="checklist-title">Checklist AI Act 2026</h1>
            <p className={styles.edition}>Русская редакция</p>
            <p className={styles.lead}>
              Быстрый маршрут + подробная проверка: от связи сценария с AI Act
              до роли, применимого маршрута и следующих действий.
            </p>
            <a
              className={styles.downloadLink}
              href="/AI-Act-Checklist-2026-RU-v1.0.pdf"
              download
              aria-label="Скачать Checklist AI Act 2026, русская версия 1.0, PDF"
            >
              Скачать Checklist AI Act 2026 — RU v1.0
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <aside className={styles.releaseMeta} aria-label="Сведения о редакции">
            <span>Версия 1.0</span>
            <span>Актуально на 1 сентября 2026</span>
            <span>PDF · прямой доступ</span>
          </aside>
        </section>

        <section className={`${styles.section} page-shell`} aria-labelledby="route-title">
          <header className={styles.sectionHeader}>
            <p>01 / Маршрут</p>
            <h2 id="route-title">Сначала территория. Затем роль и маршрут.</h2>
            <div>
              <p>
                Русский язык документа не означает нахождение вне ЕС. Человек может
                жить или работать в ЕС, а компания за пределами ЕС всё равно может
                попасть в territorial scope AI Act.
              </p>
              <p>
                Checklist помогает провести первый operational screening, отделить
                уже применимые требования от будущих и выбрать дальнейшую проверку.
                Для итальянского контекста предусмотрен отдельный optional Italy layer.
              </p>
            </div>
          </header>

          <ol className={styles.routeList}>
            {routeSteps.map(([number, heading, text]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{heading}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.boundaryBand} aria-labelledby="boundary-title">
          <div className={`${styles.boundaryInner} page-shell`}>
            <header>
              <p>02 / Граница работы</p>
              <h2 id="boundary-title">Кто делает следующий шаг.</h2>
              <p>
                Checklist помогает подготовить решение, но не является юридическим
                заключением и не подтверждает соответствие требованиям AI Act.
              </p>
            </header>

            <div className={styles.boundaryGrid}>
              {boundaries.map((boundary) => (
                <article key={boundary.label}>
                  <span>{boundary.label}</span>
                  <h3>{boundary.title}</h3>
                  <p>{boundary.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.closing} page-shell`} aria-labelledby="download-title">
          <p>03 / Документ</p>
          <div>
            <h2 id="download-title">Полная русская редакция.</h2>
            <p>
              Внутри — быстрый маршрут, подробные проверки, источники и рабочие поля
              для фиксации решений. Скачивание доступно напрямую, без формы и email.
            </p>
            <a
              className={styles.downloadLink}
              href="/AI-Act-Checklist-2026-RU-v1.0.pdf"
              download
            >
              Скачать Checklist AI Act 2026 — RU v1.0
              <span aria-hidden="true">↓</span>
            </a>
            <Link className={styles.crossLink} href={`${ITALIAN_SITE_URL}/checklist-ai-act`}>
              Итальянская версия / Versione italiana <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
