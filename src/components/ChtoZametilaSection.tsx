const observations = [
  "Заявленная задача почти всегда не настоящая.",
  "Сайт чаще симптом, чем решение.",
  "«Найдите подрядчика» — это конец работы, а не её часть.",
  "Сейчас одному человеку доступно то, что десять лет назад требовало команды из пяти. Я работаю с этого края.",
];

export default function ChtoZametilaSection() {
  return (
    <section className="section-spacing bg-paper">
      <div className="page">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">02 · Позиция</p>
          <p className="eyebrow-mute">{observations.length} наблюдения</p>
        </header>

        <h2 className="display-2 mb-3">
          Что я <em className="accent-italic">заметила</em>
        </h2>
        <hr className="rule-gold mb-16" />

        <ol className="space-y-0 mb-20">
          {observations.map((text, i) => (
            <li
              key={i}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-baseline py-8 md:py-10 border-t border-ink/10 first:border-t-0"
            >
              <div className="num-display select-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-serif text-2xl md:text-[1.85rem] leading-[1.2] text-ink">
                {text}
              </p>
            </li>
          ))}
        </ol>

        <div className="surface-card max-w-[680px]">
          <p className="eyebrow mb-4">Как устроен первый разговор</p>
          <p className="font-serif italic text-lg md:text-xl leading-[1.55] text-ink-soft mb-5">
            Час, без презентаций и форм. Я задаю много вопросов,
            иногда неудобных. На выходе вы знаете, в чём настоящая задача —
            и стоит ли вообще что-то делать.
          </p>
          <p className="text-base md:text-lg text-ink-soft leading-relaxed">
            Это уже результат, даже если дальше мы не работаем.
          </p>
          <hr className="rule-hair my-5" />
          <p className="text-sm md:text-base italic text-mute">
            Это работа одного человека — то, что обычно делает команда
            из четырёх. Так и задумано.
          </p>
        </div>
      </div>
    </section>
  );
}
