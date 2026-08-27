type Step = {
  n: string;
  title: string;
  what: string;
  result: string;
  price: string;
  priceNote?: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Разговор и чтение",
    what:
      "Слушаю вас и спрашиваю. Потом забираю архив, переписки, цифры — и читаю всё.",
    result:
      "Картина того, что у вас уже есть. Где застревает. Чего строить не надо. Смета на следующий шаг.",
    price: "600 €",
    priceNote: "Засчитывается в следующую ступень, если идём дальше.",
  },
  {
    n: "02",
    title: "Сборка",
    what:
      "То, что оказалось нужным: сайт и приём заказов, письма к покупателям, материалы из архива, схема, кто что делает.",
    result: "Работающее, которым владеете вы.",
    price: "1 500 – 8 000 €",
    priceNote: "Три размера. Какой ваш — видно после первой ступени; сумму называю до начала.",
  },
  {
    n: "03",
    title: "План",
    what:
      "Обратный счёт от главной даты: деньги до первой выручки, сроки, кто что делает, где упрётесь.",
    result: "План, который выдерживает проверку.",
    price: "1 800 €",
  },
  {
    n: "04",
    title: "Сопровождение",
    what:
      "Планёрка раз в неделю, поддержание сделанного, один-два материала в месяц из архива.",
    result: "Дело идёт, и вы не одна.",
    price: "500 € / мес",
    priceNote: "Десять часов. Сверх — 50 € в час, только по вашему согласию.",
  },
];

export default function KakUstroenoSection() {
  return (
    <section id="ceny" className="section-spacing bg-paper-2 relative overflow-hidden border-t border-ink/8 scroll-mt-4">
      <div className="page-wide relative">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 04 · Цены</p>
          <p className="eyebrow-mute">4 ступени · после каждой можно остановиться</p>
        </header>

        <h2 className="display-2 mb-3">
          Первый разговор — <em className="accent-italic">бесплатно</em>.
          <br />
          Дальше — ступенями.
        </h2>
        <hr className="rule-gold mb-6" />

        <p className="lead max-w-[640px] mb-12">
          Час без презентаций и форм. На выходе вы знаете, в чём настоящая
          задача и стоит ли что-то делать. Это уже результат, даже если
          дальше мы не работаем.
        </p>

        <div className="space-y-4 md:space-y-5 mb-12">
          {steps.map((s) => (
            <article
              key={s.n}
              className="copy-block grid md:grid-cols-[56px_1fr_190px] gap-4 md:gap-8 items-start"
            >
              <div
                className="font-serif italic text-gold leading-[0.85] select-none"
                style={{ fontSize: "clamp(40px, 4.5vw, 52px)", letterSpacing: "-0.04em" }}
              >
                {s.n}
              </div>

              <div>
                <h3 className="display-3 mb-3">{s.title}</h3>
                <p className="text-base md:text-lg leading-[1.55] text-ink mb-3">{s.what}</p>
                <p className="font-serif italic text-lg leading-[1.35] text-ink-soft">
                  <span className="eyebrow mr-2">→</span>
                  {s.result}
                </p>
              </div>

              <div className="md:text-right md:border-l md:border-ink/10 md:pl-6">
                <p
                  className="font-serif text-ink leading-none mb-2"
                  style={{ fontSize: "clamp(26px, 2.6vw, 32px)", letterSpacing: "-0.02em" }}
                >
                  {s.price}
                </p>
                {s.priceNote && (
                  <p className="text-sm text-mute leading-relaxed">{s.priceNote}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="copy-block-mute max-w-[760px]">
          <p className="eyebrow mb-4">Три правила</p>
          <ul className="space-y-3 text-base md:text-lg leading-[1.5] text-ink-soft">
            <li>
              <strong>Скидок нет — есть объём.</strong> Если сумма не по
              карману, меняется размер работы, а не цена.
            </li>
            <li>
              <strong>Расходы отдельно, по чекам:</strong> подписки, хостинг,
              домен.
            </li>
            <li>
              <strong>Цены в евро.</strong> С клиентами в России ищем удобный
              и прозрачный способ в рамках текущих правил.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
