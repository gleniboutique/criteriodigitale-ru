import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FieldDiagram, type FieldDiagramMotif } from "@/components/PhaseOneVisuals";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import type { PhaseOnePage as PhaseOnePageConfig, PhaseOneUnit } from "@/content/phaseOne";
import { createPageStructuredData } from "@/content/structured-data";
import styles from "./PhaseOnePage.module.css";

type SituationRhythm =
  | "open"
  | "compressed"
  | "indexed"
  | "representationField"
  | "methodRoute"
  | "boundary"
  | "human"
  | "outcomes"
  | "note";

type SituationProfile = {
  hero: "dependencyHero" | "representationHero" | "aiHero" | "governanceHero";
  pageClass: "dependencyPage" | "representationPage" | "aiValuePage" | "governancePage";
  motif?: FieldDiagramMotif;
  rhythms: SituationRhythm[];
};

const situationProfiles: Record<string, SituationProfile> = {
  "/vse-derzhitsya-na-vas": {
    hero: "dependencyHero",
    pageClass: "dependencyPage",
    motif: "dependency",
    rhythms: ["indexed", "methodRoute", "note", "boundary", "human", "compressed"],
  },
  "/sait-ne-obyasnyaet-cennost": {
    hero: "representationHero",
    pageClass: "representationPage",
    motif: "representation",
    rhythms: ["representationField", "indexed", "note", "outcomes", "boundary", "compressed"],
  },
  "/ai-i-cennost": {
    hero: "aiHero",
    pageClass: "aiValuePage",
    motif: "boundary",
    rhythms: ["boundary", "open", "human", "outcomes", "boundary", "open", "compressed", "note"],
  },
  "/ai-pravila-v-rabote": {
    hero: "governanceHero",
    pageClass: "governancePage",
    rhythms: ["boundary", "methodRoute", "note", "indexed", "open", "boundary"],
  },
};

type SecondaryRhythm =
  | "relations"
  | "methodRoute"
  | "human"
  | "boundary"
  | "outcomes"
  | "workBand"
  | "trajectoryPortrait"
  | "trajectory"
  | "contactField"
  | "contactAction";

type SecondaryProfile = {
  family: "methodPage" | "workPage" | "aboutPage" | "contactPage";
  hero: "methodHero" | "workHero" | "aboutHero" | "contactHero";
  rail?: boolean;
  rhythms: SecondaryRhythm[];
};

const secondaryProfiles: Record<string, SecondaryProfile> = {
  "/kak-ya-rabotayu": {
    family: "methodPage",
    hero: "methodHero",
    rail: true,
    rhythms: ["relations", "methodRoute", "human", "boundary", "outcomes"],
  },
  "/rabota-s-criterio-digitale": {
    family: "workPage",
    hero: "workHero",
    rhythms: ["workBand", "workBand", "workBand", "workBand", "outcomes"],
  },
  "/obo-mne": {
    family: "aboutPage",
    hero: "aboutHero",
    rhythms: ["trajectoryPortrait", "trajectory", "human", "boundary"],
  },
  "/contact": {
    family: "contactPage",
    hero: "contactHero",
    rail: true,
    rhythms: ["contactField", "relations", "contactAction", "boundary"],
  },
};

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

function Units({ units, situation = false }: { units: PhaseOneUnit[]; situation?: boolean }) {
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

    if (!situation) {
      return (
        <section className={styles.subsection} key={`${unit.title}-${index}`}>
          <h3>{unit.title}</h3>
          <Units units={unit.units} />
        </section>
      );
    }

    return (
      <section className={styles.subsection} key={`${unit.title}-${index}`}>
        <h3>{unit.title}</h3>
        <div className={styles.subsectionBody}>
          <Units units={unit.units} situation />
        </div>
      </section>
    );
  });
}

function StructuredData({ page }: { page: PhaseOnePageConfig }) {
  const structuredData = createPageStructuredData({
    type: page.schemaType,
    path: page.path,
    name: page.h1,
    description: page.description,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function LegacyPhaseOnePage({
  page,
  sectionExtras,
}: {
  page: PhaseOnePageConfig;
  sectionExtras: Record<number, ReactNode>;
}) {
  return (
    <main className={styles.page} id="top">
      <SiteHeader currentPath={page.path} russianHref={page.path} />
      <StructuredData page={page} />

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

function SituationCoordinateRail() {
  return (
    <div className={styles.situationRail} aria-hidden="true">
      <span>ПОЛЕ</span><i />
      <span>ОТНОШЕНИЯ</span><i />
      <span>СТРУКТУРА</span><i />
      <span>ВОЗМОЖНОЕ ДЕЙСТВИЕ</span>
    </div>
  );
}

function SituationPage({
  page,
  profile,
  sectionExtras,
}: {
  page: PhaseOnePageConfig;
  profile: SituationProfile;
  sectionExtras: Record<number, ReactNode>;
}) {
  return (
    <main className={[styles.page, styles.situationPage, styles[profile.pageClass]].filter(Boolean).join(" ")} id="top">
      <SiteHeader currentPath={page.path} russianHref={page.path} />
      <StructuredData page={page} />

      <header className={`${styles.situationHero} ${styles[profile.hero]} page-shell`}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[{ label: "Главная", href: "/" }, { label: page.h1 }]}
        />
        <div className={styles.heroFrame}>
          <div className={styles.heroTitle}>
            <h1>{page.h1}</h1>
          </div>
          {profile.motif && (
            <div className={styles.heroVisual}>
              <FieldDiagram motif={profile.motif} />
            </div>
          )}
          <div className={styles.situationLead}>
            <Units units={page.lead} situation />
          </div>
        </div>
        <SituationCoordinateRail />
      </header>

      <div className={styles.situationSections}>
        {page.sections.map((section, index) => {
          const rhythm = profile.rhythms[index] ?? "open";

          return (
            <section
              className={[styles.situationSection, styles[rhythm]].filter(Boolean).join(" ")}
              id={section.id}
              key={`${section.title}-${index}`}
              aria-labelledby={`phase-section-${index}`}
            >
              <div className={`${styles.sectionInner} page-shell`}>
                <div className={styles.situationSectionHeading}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2 id={`phase-section-${index}`}>{section.title}</h2>
                </div>
                <div className={styles.situationSectionBody}>
                  <Units units={section.units} situation />
                  {sectionExtras[index]}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <SiteFooter />
    </main>
  );
}

function SecondaryCoordinateRail() {
  return (
    <div className={styles.secondaryRail} aria-hidden="true">
      <span>ПОЛЕ</span><i />
      <span>ОТНОШЕНИЯ</span><i />
      <span>СТРУКТУРА</span><i />
      <span>ВОЗМОЖНОЕ ДЕЙСТВИЕ</span>
    </div>
  );
}

function AboutPortrait() {
  return (
    <figure className={styles.aboutPortrait}>
      <Image
        src="/images/photo-02-editorial.webp"
        alt="Татьяна Мирошина делает записи за круглым деревянным столом под аркой."
        width={800}
        height={1153}
        sizes="(max-width: 700px) 82vw, (max-width: 980px) 38vw, 420px"
      />
      <figcaption>
        <span>Field note / 05.2</span>
        <em>20+ лет собственной практики</em>
      </figcaption>
    </figure>
  );
}

function SecondaryPage({
  page,
  profile,
  sectionExtras,
}: {
  page: PhaseOnePageConfig;
  profile: SecondaryProfile;
  sectionExtras: Record<number, ReactNode>;
}) {
  return (
    <main className={`${styles.page} ${styles.secondaryPage} ${styles[profile.family]}`} id="top">
      <SiteHeader currentPath={page.path} russianHref={page.path} />
      <StructuredData page={page} />

      <header className={`${styles.secondaryHero} ${styles[profile.hero]} page-shell`}>
        <Breadcrumbs
          className={styles.breadcrumbs}
          items={[{ label: "Главная", href: "/" }, { label: page.h1 }]}
        />
        <div className={styles.secondaryHeroFrame}>
          <div className={styles.secondaryHeroTitle}>
            <h1>{page.h1}</h1>
          </div>
          <div className={styles.secondaryLead}>
            <Units units={page.lead} situation />
          </div>
        </div>
        {profile.rail && <SecondaryCoordinateRail />}
      </header>

      <div className={styles.secondarySections}>
        {page.sections.map((section, index) => {
          const rhythm = profile.rhythms[index] ?? "relations";

          return (
            <section
              className={`${styles.secondarySection} ${styles[rhythm]}`}
              id={section.id}
              key={`${section.title}-${index}`}
              aria-labelledby={`phase-section-${index}`}
            >
              <div className={`${styles.secondarySectionInner} page-shell`}>
                <div className={styles.secondarySectionHeading}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2 id={`phase-section-${index}`}>{section.title}</h2>
                </div>
                {profile.family === "aboutPage" && index === 0 && <AboutPortrait />}
                <div className={styles.secondarySectionBody}>
                  <Units units={section.units} situation />
                  {sectionExtras[index]}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <SiteFooter />
    </main>
  );
}

export default function PhaseOnePage({
  page,
  sectionExtras = {},
}: {
  page: PhaseOnePageConfig;
  sectionExtras?: Record<number, ReactNode>;
}) {
  const profile = situationProfiles[page.path];

  if (profile) {
    return <SituationPage page={page} profile={profile} sectionExtras={sectionExtras} />;
  }

  const secondaryProfile = secondaryProfiles[page.path];

  if (secondaryProfile) {
    return <SecondaryPage page={page} profile={secondaryProfile} sectionExtras={sectionExtras} />;
  }

  return <LegacyPhaseOnePage page={page} sectionExtras={sectionExtras} />;
}
