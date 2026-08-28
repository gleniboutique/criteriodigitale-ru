type SiteHeaderProps = {
  context?: "home" | "observatory";
};

export default function SiteHeader({ context = "home" }: SiteHeaderProps) {
  const isHome = context === "home";

  return (
    <header className="topbar page-shell">
      <a className="brand" href={isHome ? "#top" : "/"} aria-label="Татьяна Мирошина — на главную">
        <span>Татьяна</span>
        <span>Мирошина</span>
      </a>
      <p className="brand-field">Living system<br />Roma / online</p>
      <nav aria-label="Главная навигация">
        <a href={isHome ? "#work" : "/#work"}>Метод</a>
        <a href={isHome ? "#experience" : "/#experience"}>Траектория</a>
        <a href={isHome ? "#thinking" : "/observatory"} aria-current={isHome ? undefined : "page"}>
          Наблюдения
        </a>
      </nav>
      <span className="lang">RU&nbsp;&nbsp;·&nbsp;&nbsp;IT</span>
    </header>
  );
}
