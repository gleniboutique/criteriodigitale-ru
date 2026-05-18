import RulerGrid from "./ornaments/RulerGrid";

const observations = [
  "Заявленная задача почти всегда не настоящая.",
  "Сайт чаще симптом, чем решение.",
  "«Найдите подрядчика» — это конец работы, а не её часть.",
  "Сейчас одному человеку доступно то, что десять лет назад требовало команды из пяти. Я работаю с этого края.",
];

export default function ChtoZametilaSection() {
  return (
    <section className="section-spacing bg-paper-2 relative overflow-hidden border-t border-ink/8">
      <div className="page-wide relative">
        <div className="mb-3 opacity-60">
          <RulerGrid />
        </div>

        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 02 · Позиция</p>
          <p className="eyebrow-mute">4 наблюдения</p>
        </header>

        <h2 className="display-2 mb-3">
          Что я <em className="accent-italic">заметила</em>
        </h2>
        <hr className="rule-gold mb-16" />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6 mb-16">
          {observations.map((text, i) => (
            <article
              key={i}
              className="copy-block grid grid-cols-[auto_1fr] gap-5 md:gap-7 items-baseline"
            >
              <div
                className="font-serif italic text-gold leading-[0.85] select-none"
                style={{
                  fontSize: "clamp(60px, 8vw, 96px)",
                  letterSpacing: "-0.04em",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-serif text-xl md:text-2xl leading-[1.2] text-ink">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_280px] gap-6 items-start">
          <div className="copy-block">
            <p className="eyebrow mb-4">Как устроен первый разговор</p>
            <p className="font-serif italic text-lg md:text-2xl leading-[1.4] text-ink-soft mb-5">
              Час, без презентаций и форм. Я задаю много вопросов,
              иногда неудобных. На выходе вы знаете, в чём настоящая задача —
              и стоит ли вообще что-то делать.
            </p>
            <p className="text-base text-ink-soft leading-relaxed">
              Это уже результат, даже если дальше мы не работаем.
            </p>
          </div>

          <div className="copy-block-mute md:sticky md:top-8">
            <p className="eyebrow-mute mb-3">Команда</p>
            <p className="font-serif italic text-5xl text-gold leading-none mb-2"
               style={{ letterSpacing: "-0.03em" }}>
              1 из 4
            </p>
            <p className="text-sm text-mute leading-relaxed">
              Это работа одного человека — то, что обычно делает команда
              из четырёх. Так и задумано.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
