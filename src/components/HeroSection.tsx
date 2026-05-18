import Monogram from "./ornaments/Monogram";
import OrbitRings from "./ornaments/OrbitRings";
import RulerGrid from "./ornaments/RulerGrid";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-paper">
      <header className="page-wide pt-10 md:pt-12 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <Monogram size={42} />
          <p className="font-serif text-lg md:text-xl text-ink leading-tight">
            Tatiana <em>Miroshina</em>
          </p>
        </div>
        <p className="eyebrow-mute hidden md:block">criteriodigitale.ru</p>
      </header>

      <div className="page-wide flex-1 grid md:grid-cols-[1fr_280px] gap-8 md:gap-16 items-center py-20 md:py-24 relative z-10">
        {/* Left — text */}
        <div className="max-w-[680px] animate-fade-in-up">
          <h1 className="display-1 mb-10">
            Вы знаете,&nbsp;
            <em className="accent-italic">что что-то не так</em>.
            <br />
            Но не знаете, что именно.
          </h1>

          <hr className="rule-gold mb-9" />

          <p className="lead max-w-[620px]">
            Я помогаю разобраться — до того, как вы потратите
            деньги, время и команду на не ту задачу.
          </p>
        </div>

        {/* Right — decorative gutter (hidden on mobile to avoid clash) */}
        <aside className="hidden md:flex flex-col items-end gap-8 relative">
          <div className="relative w-full h-[240px]">
            <div className="absolute inset-0">
              <OrbitRings side="right" />
            </div>
          </div>

          <div className="copy-block-mute tint-gold w-full">
            <p className="eyebrow-mute mb-3">Глава</p>
            <p className="font-serif italic text-gold leading-none mb-3"
               style={{ fontSize: "72px", letterSpacing: "-0.04em" }}>
              01
            </p>
            <p className="text-sm text-mute leading-snug">
              из шести — открытие
            </p>
          </div>

          <div className="w-full opacity-50">
            <RulerGrid />
          </div>
        </aside>
      </div>

      {/* Bottom indicator: clear hero/next-section boundary */}
      <div className="page-wide pb-6 flex items-baseline justify-between relative z-10">
        <span className="eyebrow-mute">↓ читать</span>
        <span className="font-serif italic text-base text-mute">шесть глав</span>
      </div>
    </section>
  );
}
