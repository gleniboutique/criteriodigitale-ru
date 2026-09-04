import Link from "next/link";
import { ITALIAN_OBSERVATORY_URL, ITALIAN_SITE_URL } from "@/config/site";
import { situationLinks } from "@/content/phaseOne";

type SiteHeaderProps = {
  context?: "home" | "observatory" | "article" | "contact" | "resource";
  italianHref?: string;
  russianHref?: string;
  hasLanguageCounterpart?: boolean;
  currentPath?: string;
};

export default function SiteHeader({
  context = "home",
  italianHref,
  russianHref,
  hasLanguageCounterpart = false,
  currentPath,
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
  const resolvedPath = currentPath ?? (isHome ? "/" : isObservatory ? "/observatory" : isResource ? "/checklist-ai-act" : undefined);
  const situationIsCurrent = situationLinks.some(({ href }) => href === resolvedPath);

  const navigationLinks = [
    { label: "Наблюдения", href: "/observatory" },
    { label: "Как я работаю", href: "/kak-ya-rabotayu" },
    { label: "Когда обращаться", href: "/rabota-s-criterio-digitale" },
    { label: "Обо мне", href: "/obo-mne" },
    { label: "Контакт", href: "/contact" },
  ] as const;

  const primaryNavigation = (
    <>
      <details className="situations-menu">
        <summary aria-current={situationIsCurrent ? "page" : undefined}>Ситуации</summary>
        <div className="situations-menu-panel">
          {situationLinks.map(({ label, href }) => (
            <Link href={href} key={href} aria-current={resolvedPath === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </div>
      </details>
      {navigationLinks.map(({ label, href }) => (
        <Link href={href} key={href} aria-current={resolvedPath === href ? "page" : undefined}>
          {label}
        </Link>
      ))}
    </>
  );

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
        <nav className="primary-nav desktop-navigation" aria-label="Главная навигация">
          {primaryNavigation}
        </nav>
        <details className="mobile-navigation">
          <summary>Меню</summary>
          <nav aria-label="Мобильная навигация">{primaryNavigation}</nav>
        </details>
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
