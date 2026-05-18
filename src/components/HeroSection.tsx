import Monogram from "./ornaments/Monogram";
import OrbitRings from "./ornaments/OrbitRings";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="ornament">
        <OrbitRings side="right" />
      </div>

      <header className="page-wide pt-8 md:pt-10 flex items-start justify-between relative z-10">
        <div className="flex items-center gap-4">
          <Monogram size={44} />
          <div>
            <p className="font-serif text-lg md:text-xl text-ink leading-none">
              Tatiana <em>Miroshina</em>
            </p>
            <p className="eyebrow-mute mt-1">criteriodigitale.ru</p>
          </div>
        </div>
        <p className="eyebrow-mute hidden md:block">Studio · 2026 · Milano</p>
      </header>

      <div className="page flex-1 flex flex-col justify-center py-20 md:py-28 relative z-10">
        <div className="max-w-[760px] animate-fade-in-up">
          <p className="eyebrow mb-8">
            № 01 · Открытие
          </p>

          <h1 className="display-1 mb-10">
            Вы знаете,&nbsp;
            <em className="accent-italic">что что-то не так</em>.
            <br />
            Но не знаете, что именно.
            <br />
            И боитесь начать <em>с не того конца</em>.
          </h1>

          <hr className="rule-gold mb-9" />

          <p className="lead max-w-[640px] mb-12">
            Я помогаю разобраться — до того, как вы потратите
            деньги, время и команду на не ту задачу.
          </p>

          <div className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline max-w-[640px] pt-6 border-t border-ink/15">
            <p className="eyebrow-mute">Архитектура процессов</p>
            <span className="h-px bg-ink/15"></span>
            <p className="eyebrow-mute">Один человек</p>
          </div>
        </div>
      </div>

      <footer className="page-wide pb-6 flex items-baseline justify-between relative z-10">
        <span className="eyebrow-mute">↓ читать дальше</span>
        <span className="eyebrow-mute font-serif italic normal-case tracking-normal text-base text-mute">
          шесть глав
        </span>
      </footer>
    </section>
  );
}
