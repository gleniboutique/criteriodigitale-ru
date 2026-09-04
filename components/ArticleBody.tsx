import type { ReactNode } from "react";

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

export default function ArticleBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n{2,}/);

  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        if (block.startsWith("### ")) {
          const heading = block.slice(4);

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
      })}
    </div>
  );
}
