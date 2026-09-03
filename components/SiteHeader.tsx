import Link from "next/link";
import { ITALIAN_OBSERVATORY_URL, ITALIAN_SITE_URL } from "@/config/site";

type SiteHeaderProps = {
  context?: "home" | "observatory" | "article" | "contact" | "resource";
  italianHref?: string;
  russianHref?: string;
  hasLanguageCounterpart?: boolean;
};

export default function SiteHeader({
  context = "home",
  italianHref,
  russianHref,
  hasLanguageCounterpart = false,
}: SiteHeaderProps) {
  const isHome = context === "home";
  const isObservatory = context === "observatory";
  const isArticle = context === "article";
  const isResource = context === "resource";
  const defaultRussianHref = isHome
    ? "/"
    : isObservatory || isArticle
      ? "/observatory"
      : isResource
        ? "/checklist-ai-act"
        : "/contact";
  const defaultItalianHref = isObservatory || isArticle
    ? ITALIAN_OBSERVATORY_URL
    : isResource
      ? `${ITALIAN_SITE_URL}/checklist-ai-act`
      : ITALIAN_SITE_URL;

  return (
    <header className="topbar-frame">
      <div className={`topbar page-shell${isArticle ? " topbar-article" : ""}`}>
        <a className="brand" href={isHome ? "#top" : "/"}>
          <span>Татьяна</span>
          <span>Мирошина</span>
        </a>
        <p className="brand-field">Living system<br />Marche, Italia / online</p>
        {isArticle && (
          <Link className="article-context-link" href="/observatory">
            <span aria-hidden="true">←</span> Наблюдения
          </Link>
        )}
        <nav aria-label="Главная навигация">
          <a href={isHome ? "#work" : "/#work"}>Метод</a>
          <a href={isHome ? "#experience" : "/#experience"}>Траектория</a>
          <a href={isHome ? "#thinking" : "/observatory"} aria-current={isObservatory ? "page" : undefined}>
            Наблюдения
          </a>
        </nav>
        <div className="lang" role="navigation" aria-label="Выбор языка">
          <a
            href={russianHref ?? defaultRussianHref}
            hrefLang={hasLanguageCounterpart ? "ru-RU" : undefined}
            lang="ru"
            rel={hasLanguageCounterpart ? "alternate" : undefined}
            aria-current="page"
          >
            RU
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={italianHref ?? defaultItalianHref}
            hrefLang={hasLanguageCounterpart ? "it-IT" : undefined}
            lang="it"
            rel={hasLanguageCounterpart ? "alternate" : undefined}
          >
            IT
          </a>
        </div>
      </div>
    </header>
  );
}
