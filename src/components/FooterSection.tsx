export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-wide px-6 md:px-10 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-muted-foreground">
          <div className="space-y-1">
            <p className="font-serif text-foreground text-base">Татьяна Мирошина</p>
            <p>
              <a href="mailto:pc@gleni.it" className="hover:text-primary transition">
                pc@gleni.it
              </a>
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://criteriodigitale.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
            >
              criteriodigitale.it
            </a>
            <a href="/privacy" className="hover:text-primary transition">
              Privacy Policy
            </a>
            <a href="/cookie" className="hover:text-primary transition">
              Cookie Policy
            </a>
          </nav>

          <p className="text-xs opacity-70">© {year}</p>
        </div>
      </div>
    </footer>
  );
}
