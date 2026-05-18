export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper-2 border-t border-ink/10">
      <div className="page py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <p className="font-serif italic text-xl text-ink mb-2">
              Татьяна Мирошина
            </p>
            <p className="text-sm text-mute">
              <a href="mailto:pc@gleni.it">pc@gleni.it</a>
            </p>
          </div>

          <nav className="space-y-2 text-sm">
            <p className="eyebrow-mute mb-3">Сайты</p>
            <p>
              <a
                href="https://criteriodigitale.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-gold-deep"
              >
                criteriodigitale.it
              </a>
              <span className="text-mute"> — итальянская версия</span>
            </p>
          </nav>

          <nav className="space-y-2 text-sm">
            <p className="eyebrow-mute mb-3">Правовое</p>
            <p>
              <a href="/privacy" className="text-ink-soft hover:text-gold-deep">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="/cookie" className="text-ink-soft hover:text-gold-deep">
                Cookie Policy
              </a>
            </p>
          </nav>
        </div>

        <hr className="rule-hair my-8 md:my-10" />

        <p className="text-xs text-mute text-center md:text-left">
          © {year} · criteriodigitale.ru
        </p>
      </div>
    </footer>
  );
}
