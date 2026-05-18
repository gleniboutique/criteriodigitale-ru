const observations = [
  "Заявленная задача почти всегда не настоящая.",
  "Сайт чаще симптом, чем решение.",
  "«Найдите подрядчика» — это конец работы, а не её часть.",
  "Сейчас одному человеку доступно то, что десять лет назад требовало команды из пяти. Я работаю с этого края.",
];

export default function ChtoZametilaSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
            01 — позиция
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Что я заметила
          </h2>
          <div className="divider-gold" />
        </div>

        <ol className="space-y-10 md:space-y-12 mb-20">
          {observations.map((text, i) => (
            <li key={i} className="flex gap-6 md:gap-8">
              <span className="font-serif text-2xl md:text-3xl text-primary/60 leading-none pt-1 min-w-[2ch]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-xl md:text-2xl lg:text-3xl leading-snug max-w-3xl">
                {text}
              </p>
            </li>
          ))}
        </ol>

        <div className="border-t border-border pt-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Как устроен первый разговор
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
            Час, без презентаций и форм. Я задаю много вопросов, иногда неудобных.
            На выходе вы знаете, в чём настоящая задача и стоит ли вообще что-то делать.
            Это уже результат — даже если дальше мы не работаем.
          </p>
          <p className="font-serif italic text-base md:text-lg text-muted-foreground">
            Это работа одного человека — то, что обычно делает команда из четырёх.
            Так и задумано.
          </p>
        </div>
      </div>
    </section>
  );
}
