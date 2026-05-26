import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import Monogram from "./ornaments/Monogram";

type Props = {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalLayout({ eyebrow, title, updated, children }: Props) {
  return (
    <>
      <main className="min-h-screen bg-paper">
        <header className="page-wide pt-10 md:pt-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Monogram size={42} />
            <span className="eyebrow-mute hidden md:inline">← на главную</span>
          </Link>
          <p className="eyebrow-mute">ru.criteriodigitale.it</p>
        </header>

        <article className="page py-16 md:py-24">
          <p className="eyebrow mb-6">{eyebrow}</p>
          <h1 className="display-2 mb-3">{title}</h1>
          <hr className="rule-gold mb-4" />
          <p className="text-sm text-mute mb-12">{updated}</p>

          <div className="space-y-10 text-base md:text-lg leading-[1.7] text-ink-soft">
            {children}
          </div>

          <div className="mt-20 pt-8 border-t border-ink/10 flex flex-col sm:flex-row items-baseline justify-between gap-2">
            <Link to="/" className="font-serif italic text-lg text-gold-deep hover:text-gold">
              ← вернуться на главную
            </Link>
            <p className="eyebrow-mute">конец документа</p>
          </div>
        </article>
      </main>
      <FooterSection />
    </>
  );
}
