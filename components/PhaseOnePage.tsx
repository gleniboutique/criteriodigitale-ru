import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { PhaseOnePage as PhaseOnePageConfig, PhaseOneUnit } from "@/content/phaseOne";
import { createPageStructuredData } from "@/content/structured-data";
import styles from "./PhaseOnePage.module.css";

function renderInline(text: string) {
  return text
    .split(/(\*\*.*?\*\*)/g)
    .filter(Boolean)
    .map((part, index): ReactNode => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
      }

      return part;
    });
}

function Units({ units }: { units: PhaseOneUnit[] }) {
  return units.map((unit, index) => {
    if (unit.type === "paragraph") {
      return <p key={`${unit.text}-${index}`}>{renderInline(unit.text)}</p>;
    }

    if (unit.type === "list") {
      return (
        <ul className={styles.list} key={`list-${index}`}>
          {unit.items.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ul>
      );
    }

    if (unit.type === "link") {
      return (
        <Link className={styles.routeLink} href={unit.href} key={`${unit.href}-${index}`}>
          <span>{unit.label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      );
    }

    return (
      <section className={styles.subsection} key={`${unit.title}-${index}`}>
        <h3>{unit.title}</h3>
        <Units units={unit.units} />
      </section>
    );
  });
}

export default function PhaseOnePage({
  page,
  sectionExtras = {},
}: {
  page: PhaseOnePageConfig;
  sectionExtras?: Record<number, ReactNode>;
}) {
  const structuredData = createPageStructuredData({
    type: page.schemaType,
    path: page.path,
    name: page.h1,
    description: page.description,
  });

  return (
    <main className={styles.page} id="top">
      <SiteHeader currentPath={page.path} russianHref={page.path} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className={`${styles.hero} page-shell`}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[{ label: "Главная", href: "/" }, { label: page.h1 }]}
        />
        <div className={styles.heroGrid}>
          <div>
            <h1>{page.h1}</h1>
          </div>
          <div className={styles.lead}>
            <Units units={page.lead} />
          </div>
        </div>
        <div className={styles.relationRail} aria-hidden="true">
          <span>FIELD</span><i />
          <span>RELATIONS</span><i />
          <span>STRUCTURE</span><i />
          <span>POSSIBLE ACTION</span>
        </div>
      </header>

      <div className={`${styles.sections} page-shell`}>
        {page.sections.map((section, index) => (
          <section
            className={styles.section}
            id={section.id}
            key={`${section.title}-${index}`}
            aria-labelledby={`phase-section-${index}`}
          >
            <div className={styles.sectionHeading}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2 id={`phase-section-${index}`}>{section.title}</h2>
            </div>
            <div className={styles.sectionBody}>
              <Units units={section.units} />
              {sectionExtras[index]}
            </div>
          </section>
        ))}
      </div>

      <SiteFooter />
    </main>
  );
}
