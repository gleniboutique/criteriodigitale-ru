import Monogram from "./ornaments/Monogram";
import OrbitRings from "./ornaments/OrbitRings";
import RulerGrid from "./ornaments/RulerGrid";

const nav = [
  { href: "#dlya-kogo", label: "Для кого" },
  { href: "#sluchai", label: "Случаи" },
  { href: "#ceny", label: "Цены" },
  { href: "#kontakt", label: "Контакт" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-paper">
      <header className="page-wide pt-10 md:pt-12 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <Monogram size={42} />
          <div className="hidden sm:block">
            <p className="font-serif italic text-lg text-ink leading-tight">
              Татьяна Мирошина
            </p>
            <p className="text-xs text-mute leading-snug">
              разбираю дела и собираю то, чего им не хватает
            </p>
          </div>
        </div>
        <nav className="hidden md:flex gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="eyebrow-mute hover:text-gold-deep transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="page-wide flex-1 grid md:grid-cols-[1fr_280px] gap-8 md:gap-16 items-center py-16 md:py-24 relative z-10">
        <div className="max-w-[680px] animate-fade-in-up">
          <h1 className="display-1 mb-8">
            Вы знаете,&nbsp;
            <em className="accent-italic">что что-то не так</em>.
            <br />
            Но не знаете, что именно.
          </h1>

          <hr className="rule-gold mb-8" />

          <p className="lead max-w-[620px] mb-5">
            Помогаю разобраться — и собираю то, что из этого следует:
            сайт и тексты, приём заказов, письма к своим покупателям,
            план на сезон. Одна, без агентства.
          </p>

          <p className="text-base md:text-lg text-ink-soft leading-[1.6] max-w-[560px] mb-9">
            Для тех, кто много лет делал своё дело сам — и старый способ
            перестал работать.
          </p>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#kontakt"
              className="inline-block bg-gold-deep text-paper px-6 py-3 rounded font-medium text-base hover:bg-gold transition"
              style={{ color: "hsl(var(--bone))" }}
            >
              Написать
            </a>
            <p className="font-serif italic text-lg md:text-xl text-ink">
              Первый разговор — <em className="accent">бесплатно</em>
            </p>
          </div>
        </div>

        <aside className="hidden md:flex flex-col items-end gap-8 relative">
          <div className="relative w-full h-[240px]">
            <div className="absolute inset-0">
              <OrbitRings side="right" />
            </div>
          </div>

          <div className="copy-block-mute tint-gold w-full">
            <p className="eyebrow-mute mb-3">Глава</p>
            <p
              className="font-serif italic text-gold leading-none mb-3"
              style={{ fontSize: "72px", letterSpacing: "-0.04em" }}
            >
              01
            </p>
            <p className="text-sm text-mute leading-snug">из семи — открытие</p>
          </div>

          <div className="w-full opacity-50">
            <RulerGrid />
          </div>
        </aside>
      </div>

      <div className="page-wide pb-6 flex items-baseline justify-between relative z-10">
        <span className="eyebrow-mute">↓ читать</span>
        <span className="font-serif italic text-base text-mute">семь глав</span>
      </div>
    </section>
  );
}
