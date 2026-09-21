type SiteFooterProps = {
  topHref?: string;
};

export default function SiteFooter({ topHref = "#top" }: SiteFooterProps) {
  return (
    <footer className="footer page-shell">
      <span>© Tatiana Miroshina</span>
      <a href={topHref}>Наверх ↑</a>
      <span>Цифровой критерий / русское издание</span>
    </footer>
  );
}
