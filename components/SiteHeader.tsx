import { ITALIAN_OBSERVATORY_URL, ITALIAN_SITE_URL } from "@/config/site";

type SiteHeaderProps = {
  context?: "home" | "observatory" | "contact";
  italianHref?: string;
  russianHref?: string;
};

export default function SiteHeader({
  context = "home",
  italianHref,
  russianHref,
}: SiteHeaderProps) {
  const isHome = context === "home";
  const isObservatory = context === "observatory";
  const defaultRussianHref = isHome ? "/" : isObservatory ? "/observatory" : "/contact";
  const defaultItalianHref = isObservatory ? ITALIAN_OBSERVATORY_URL : ITALIAN_SITE_URL;

  return (
    <header className="topbar-frame">
      <div className="topbar page-shell">
        <a className="brand" href={isHome ? "#top" : "/"}>
          <span>Татьяна</span>
          <span>Мирошина</span>
        </a>
        <p className="brand-field">Living system<br />Marche, Italia / online</p>
        <nav aria-label="Главная навигация">
          <a href={isHome ? "#work" : "/#work"}>Метод</a>
          <a href={isHome ? "#experience" : "/#experience"}>Траектория</a>
          <a href={isHome ? "#thinking" : "/observatory"} aria-current={isObservatory ? "page" : undefined}>
            Наблюдения
          </a>
        </nav>
        <div className="lang" role="navigation" aria-label="Выбор языка">
          <a href={russianHref ?? defaultRussianHref} hrefLang="ru" lang="ru" aria-current="page">
            RU
          </a>
          <span aria-hidden="true">·</span>
          <a href={italianHref ?? defaultItalianHref} hrefLang="it" lang="it" rel="alternate">
            IT
          </a>
        </div>
      </div>
    </header>
  );
}
