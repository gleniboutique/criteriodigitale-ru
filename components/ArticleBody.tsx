import type { ReactNode } from "react";

type ArticleBodyProps = {
  body: string;
  variant?: "material-two";
};

const materialTwoDistinction =
  "И здесь легко соединить две разные вещи: то, **что собираются изменить**, и то, **что должно измениться благодаря этому**.";

const materialTwoExamples = [
  "«Сайт теперь действительно выглядит профессионально, но мне всё равно приходится долго объяснять, что именно мы делаем».",
  "«Мне очень нравится, как он выглядит, но люди стали обращаться с ожиданиями, которые не соответствуют нашей работе».",
  "«Теперь всё сформулировано гораздо понятнее, но мы словно стали похожи на всех остальных».",
  "«Сайт хороший, но я почему-то не узнаю в нём свой бизнес».",
] as const;

const materialTwoPracticeHeading =
  "## Почему запрос «нам нужен сайт» может быть только началом";
const materialTwoPracticeNextHeading =
  "## Что осталось неизменным после улучшения";

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

    return (
      <h2
        className={heading === "Источники и исследования" ? "article-sources-heading" : undefined}
        key={index}
      >
        {heading}
      </h2>
    );
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

export default function ArticleBody({ body, variant }: ArticleBodyProps) {
  const blocks = body.trim().split(/\n{2,}/);

  if (variant === "material-two") {
    const renderedBlocks: ReactNode[] = [];

    for (let index = 0; index < blocks.length; index += 1) {
      const block = blocks[index];

      if (block === materialTwoDistinction) {
        renderedBlocks.push(
          <p className="article-material-two-distinction" key={index}>
            {renderInline(block)}
          </p>,
        );
        continue;
      }

      if (
        block === materialTwoExamples[0] &&
        materialTwoExamples.every((example, exampleIndex) => blocks[index + exampleIndex] === example)
      ) {
        renderedBlocks.push(
          <div className="article-material-two-examples" key={index}>
            {materialTwoExamples.map((example, exampleIndex) => (
              <p data-example={exampleIndex + 1} key={example}>
                {renderInline(example)}
              </p>
            ))}
          </div>,
        );
        index += materialTwoExamples.length - 1;
        continue;
      }

      if (block === materialTwoPracticeHeading) {
        const nextHeadingIndex = blocks.indexOf(materialTwoPracticeNextHeading, index + 1);

        if (nextHeadingIndex > index) {
          renderedBlocks.push(
            <section className="article-material-two-practice" key={index}>
              <div className="article-material-two-practice-heading">
                <h2>{block.slice(3)}</h2>
              </div>
              <div className="article-material-two-practice-body">
                {blocks
                  .slice(index + 1, nextHeadingIndex)
                  .map((practiceBlock, practiceIndex) =>
                    renderBlock(practiceBlock, index + practiceIndex + 1),
                  )}
              </div>
            </section>,
          );
          index = nextHeadingIndex - 1;
          continue;
        }
      }

      renderedBlocks.push(renderBlock(block, index));
    }

    return <div className="article-body article-body--material-two">{renderedBlocks}</div>;
  }

  return (
    <div className="article-body">
      {blocks.map(renderBlock)}
    </div>
  );
}
