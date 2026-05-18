const observations = [
  "Заявленная задача почти всегда не настоящая.",
  "Сайт чаще симптом, чем решение.",
  "«Найдите подрядчика» — это конец работы, а не её часть.",
  "Сейчас одному человеку доступно то, что десять лет назад требовало команды из пяти. Я работаю с этого края.",
];

export default function ChtoZametilaSection() {
  return (
    <section className="section-padding golden-gradient relative overflow-hidden">
      <div className="container-wide relative">
        <div className="text-center mb-16 md:mb-20">
          <p className="eyebrow mb-4">01 · Позиция</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 leading-tight">
            Что я <span className="text-gradient-gold italic">заметила</span>
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="space-y-6 md:space-y-8 mb-20">
          {observations.map((text, i) => (
            <div
              key={i}
              className="glass-card-strong p-7 md:p-10 grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-center"
            >
              <div
                className="font-serif italic text-7xl md:text-8xl text-gradient-gold leading-none text-center md:text-left"
                style={{ letterSpacing: "-0.03em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-serif text-xl md:text-2xl lg:text-[1.7rem] leading-snug">
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow mb-6">Как устроен первый разговор</p>
          <p className="font-serif text-lg md:text-2xl leading-relaxed mb-6">
            Час, без презентаций и форм. Я задаю много вопросов,{" "}
            <span className="italic text-gradient-gold">иногда неудобных</span>.
            На выходе вы знаете, в чём настоящая задача — и стоит ли вообще
            что-то делать. Это уже результат, даже если дальше мы не работаем.
          </p>
          <div className="divider-gold mx-auto mb-6" />
          <p className="font-serif italic text-base md:text-lg text-foreground/65">
            Это работа одного человека — то, что обычно делает команда из четырёх.
            Так и задумано.
          </p>
        </div>
      </div>
    </section>
  );
}
