import Monogram from "./ornaments/Monogram";

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper-2 border-t border-ink/10">
      <div className="page-wide py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-10">
          <div className="flex items-start gap-3">
            <Monogram size={36} />
            <div>
              <p className="font-serif italic text-lg text-ink leading-tight">
                Tatiana<br />Miroshina
              </p>
            </div>
          </div>

          <nav className="space-y-2 text-sm">
            <p className="eyebrow-mute mb-3">Контакт</p>
            <p>
              <a href="mailto:pc@gleni.it" className="text-ink-soft hover:text-gold-deep">
                pc@gleni.it
              </a>
            </p>
            <p>
              <a
                href="https://t.me/tatianamiroshina"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-gold-deep"
              >
                @tatianamiroshina
              </a>
            </p>
          </nav>

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
            </p>
            <p className="text-mute italic">italiano</p>
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

        <hr className="rule-hair" />

        <div className="flex flex-col sm:flex-row items-baseline justify-between gap-2 pt-6 text-xs text-mute">
          <p>© {year} · criteriodigitale.ru</p>
          <p className="font-serif italic">Italia · {year}</p>
        </div>
      </div>
    </footer>
  );
}
