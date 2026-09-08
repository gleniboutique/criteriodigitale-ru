import type { ReactNode } from "react";
import {
  DarkSystemField,
  DistinctionBoundary,
  EvidenceField,
  IndexedField,
  ProseField,
  QuestionCriterionField,
  SourceTrace,
  observatoryModuleStyles as styles,
} from "./ObservatoryArticleModules";

type ArticleBodyProps = {
  body: string;
  layout: "note" | "analysis";
};

type VisualModule =
  | "prose"
  | "distinction"
  | "indexed"
  | "evidence"
  | "question"
  | "dark"
  | "source";

type IndexedVariant = "steps" | "observations" | "compare";

type ModuleDescriptor = {
  module: VisualModule;
  indexedVariant?: IndexedVariant;
};

type ParsedSection = {
  heading: string;
  headingIndex: number;
  copy: string[];
  visual?: ModuleDescriptor;
};

const sectionMarker = /^\[\[OBS_SECTION:(prose|distinction|indexed|evidence|question|dark|source)(?::(steps|observations|compare))?\]\]$/;
const groupMarker = /^\[\[OBS_GROUP:(prose|distinction|indexed|evidence|question|dark|source)(?::(steps|observations|compare))?\]\]$/;
const groupEndMarker = "[[/OBS_GROUP]]";

function readVisualMarker(block: string, pattern: RegExp): ModuleDescriptor | undefined {
  const match = block.match(pattern);

  if (!match) return undefined;

  return {
    module: match[1] as VisualModule,
    indexedVariant: match[2] as IndexedVariant | undefined,
  };
}

function renderInline(text: string) {
  return text
    .split(/(\*\*.*?\*\*|\[[^\]]+\]\((?:https:\/\/[^)\s]+|\/[^)\s]+)\))/g)
    .map((part, index): ReactNode => {
      const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^)\s]+|\/[^)\s]+)\)$/);

      if (link) {
        const isExternal = link[2].startsWith("https://");

        return (
          <a
            href={link[2]}
            key={`${link[2]}-${index}`}
            rel={isExternal ? "noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
          >
            {link[1]}
          </a>
        );
      }

      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
      }

      return part;
    });
}

function renderBlock(block: string, index: number) {
  if (block.startsWith("## ") || block.startsWith("### ")) {
    const heading = block.startsWith("### ") ? block.slice(4) : block.slice(3);
    return <h2 key={index}>{heading}</h2>;
  }

  if (block.startsWith("> ")) {
    return (
      <blockquote className="article-pullquote" key={index}>
        {renderInline(block.slice(2))}
      </blockquote>
    );
  }

  if (block.startsWith("**") && block.endsWith("**")) {
    return (
      <p className="article-step-title" key={index}>
        {renderInline(block)}
      </p>
    );
  }

  return <p key={index}>{renderInline(block)}</p>;
}

function isHeading(block: string) {
  return block.startsWith("## ") || block.startsWith("### ");
}

function parseSections(blocks: string[]) {
  const preface: string[] = [];
  const sections: ParsedSection[] = [];
  let currentSection: ParsedSection | undefined;
  let pendingVisual: ModuleDescriptor | undefined;

  blocks.forEach((block, index) => {
    const marker = readVisualMarker(block, sectionMarker);

    if (marker) {
      if (pendingVisual) throw new Error("Два OBS_SECTION-маркера подряд");
      pendingVisual = marker;
      return;
    }

    if (isHeading(block)) {
      currentSection = {
        heading: block,
        headingIndex: index,
        copy: [],
        visual: pendingVisual,
      };
      sections.push(currentSection);
      pendingVisual = undefined;
      return;
    }

    if (currentSection) currentSection.copy.push(block);
    else preface.push(block);
  });

  if (pendingVisual) throw new Error("OBS_SECTION-маркер не связан с секцией");

  return { preface, sections };
}

function renderModule(
  module: VisualModule,
  children: ReactNode,
  key: string,
  indexedVariant?: IndexedVariant,
) {
  if (module === "distinction") {
    return <DistinctionBoundary as="aside" key={key}>{children}</DistinctionBoundary>;
  }

  if (module === "indexed") {
    return <IndexedField key={key} variant={indexedVariant}>{children}</IndexedField>;
  }

  if (module === "evidence") {
    return <EvidenceField as="aside" key={key}>{children}</EvidenceField>;
  }

  if (module === "dark") {
    return <DarkSystemField as="aside" key={key}>{children}</DarkSystemField>;
  }

  if (module === "source") {
    return <SourceTrace as="aside" key={key}>{children}</SourceTrace>;
  }

  if (module === "prose") {
    return <ProseField as="div" key={key}>{children}</ProseField>;
  }

  return <QuestionCriterionField as="aside" key={key}>{children}</QuestionCriterionField>;
}

function renderMarkedBlocks(blocks: string[], keyPrefix: string) {
  const result: ReactNode[] = [];
  let activeVisual: ModuleDescriptor | undefined;
  let activeBlocks: Array<{ block: string; index: number }> = [];

  blocks.forEach((block, index) => {
    const marker = readVisualMarker(block, groupMarker);

    if (marker) {
      if (activeVisual) throw new Error("Вложенные OBS_GROUP-маркеры не поддерживаются");
      activeVisual = marker;
      activeBlocks = [];
      return;
    }

    if (block === groupEndMarker) {
      if (!activeVisual) throw new Error("Закрывающий OBS_GROUP-маркер без начала");
      const content = activeBlocks.map((item) => renderBlock(item.block, item.index));
      result.push(
        renderModule(
          activeVisual.module,
          content,
          `${keyPrefix}-group-${index}`,
          activeVisual.indexedVariant,
        ),
      );
      activeVisual = undefined;
      activeBlocks = [];
      return;
    }

    if (activeVisual) activeBlocks.push({ block, index });
    else result.push(renderBlock(block, index));
  });

  if (activeVisual) throw new Error("OBS_GROUP-маркер не закрыт");

  return result;
}

function SectionModule({
  children,
  coordinate,
  module = "prose",
  indexedVariant,
}: {
  children: ReactNode;
  coordinate: string;
  module?: VisualModule;
  indexedVariant?: IndexedVariant;
}) {
  const common = { className: styles.analysisSection, coordinate };

  if (module === "distinction") return <DistinctionBoundary {...common}>{children}</DistinctionBoundary>;
  if (module === "indexed") return <IndexedField {...common} variant={indexedVariant}>{children}</IndexedField>;
  if (module === "evidence") return <EvidenceField {...common}>{children}</EvidenceField>;
  if (module === "question") return <QuestionCriterionField {...common}>{children}</QuestionCriterionField>;
  if (module === "dark") return <DarkSystemField {...common}>{children}</DarkSystemField>;
  if (module === "source") return <SourceTrace {...common}>{children}</SourceTrace>;
  return <ProseField {...common}>{children}</ProseField>;
}

function NoteSection({ section, coordinate }: { section: ParsedSection; coordinate: string }) {
  const content = (
    <>
      <div className={styles.sectionHeading}>{renderBlock(section.heading, section.headingIndex)}</div>
      <div className={styles.sectionCopy}>
        {renderMarkedBlocks(section.copy, `note-${section.headingIndex}`)}
      </div>
    </>
  );
  const common = { coordinate };

  if (section.visual?.module === "distinction") return <DistinctionBoundary {...common}>{content}</DistinctionBoundary>;
  if (section.visual?.module === "indexed") return <IndexedField {...common} variant={section.visual.indexedVariant}>{content}</IndexedField>;
  return <ProseField {...common}>{content}</ProseField>;
}

export default function ArticleBody({ body, layout }: ArticleBodyProps) {
  const blocks = body.trim().split(/\n{2,}/);
  const { preface, sections } = parseSections(blocks);
  const isAnalysis = layout === "analysis";

  return (
    <div
      className={`article-body ${styles.body} ${isAnalysis ? styles.bodyAnalysis : styles.bodyNote}`}
      data-article-visual-profile={layout}
    >
      {preface.length > 0 ? (
        <ProseField
          as="div"
          className={isAnalysis ? styles.analysisPreface : styles.notePreface}
          coordinate={isAnalysis ? "01" : undefined}
        >
          <div className={styles.sectionCopy}>
            {renderMarkedBlocks(preface, "preface")}
          </div>
        </ProseField>
      ) : null}

      {sections.map((section, sectionIndex) => {
        const coordinate = String(sectionIndex + 2).padStart(2, "0");

        if (!isAnalysis) {
          return <NoteSection coordinate={coordinate} key={section.headingIndex} section={section} />;
        }

        return (
          <SectionModule
            coordinate={coordinate}
            indexedVariant={section.visual?.indexedVariant}
            key={section.headingIndex}
            module={section.visual?.module}
          >
            <div className={styles.sectionHeading}>{renderBlock(section.heading, section.headingIndex)}</div>
            <div className={styles.sectionCopy}>
              {renderMarkedBlocks(section.copy, `analysis-${section.headingIndex}`)}
            </div>
          </SectionModule>
        );
      })}
    </div>
  );
}
