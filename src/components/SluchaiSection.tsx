type Case = {
  title: string;
  came: string;
  actually: string;
  inWork: string;
  confirms: string;
};

const cases: Case[] = [
  {
    title: "Школа верховой езды",
    came: "Нет материалов для учеников.",
    actually:
      "Нужна модель онлайн-школы плюс понимание места на рынке этой дисциплины и собственного позиционирования внутри неё.",
    inWork:
      "Исследование рынка Италии и мира, потенциал, форматы. Сейчас идёт сборка модели.",
    confirms: "Запрос на материалы оказался запросом на модель бизнеса.",
  },
  {
    title: "Экспорт в РФ",
    came:
      "Обновить обучение агентов. Раньше — личные встречи на выставках, сейчас такой возможности нет.",
    actually:
      "Заменить личное присутствие на платформу — не теряя самого эксперта как ядро (стиль, дух, голос).",
    inWork:
      "Собираем курсы из её материалов, нетворкинг, регулярные онлайн-встречи.",
    confirms: "Платформа имеет смысл, только если человек в ней не растворяется.",
  },
  {
    title: "Сообщество с архивом",
    came:
      "Много материалов, наработанных за годы — что с ними делать, не валяться же.",
    actually:
      "Сначала понять, чего сам Клуб хочет (денег, людей, влияния, всё вместе) — и только потом упаковывать.",
    inWork: "Идёт работа над определением цели Клуба.",
    confirms: "Упаковка без цели — это украшение пустоты.",
  },
  {
    title: "Поиск результатов в спорте",
    came:
      "Удобный способ следить за конкретными игроками, которые мигрируют по разным лигам и командам.",
    actually:
      "Агрегатора, который собирает это в одном месте, на рынке не существует — особенно не на русском.",
    inWork:
      "v1 — трекер для личного использования. v2 — публичный сайт. Сейчас на стадии v2.",
    confirms: "Иногда «нет инструмента» — это не жалоба, а возможность.",
  },
  {
    title: "Сдача жилья туристам",
    came: "Нужен сайт.",
    actually:
      "Не сайт. Нужно высвободить время владельца — не отнимая комфорт у гостя.",
    inWork:
      "Веб-приложение «всё внутри», PWA-гид для гостя, печатный комплект на случай отсутствия интернета.",
    confirms: "Сайт чаще симптом, чем решение.",
  },
];

export default function SluchaiSection() {
  return (
    <section className="section-spacing bg-paper-2">
      <div className="page">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">03 · Случаи</p>
          <p className="eyebrow-mute">{cases.length} историй</p>
        </header>

        <h2 className="display-2 mb-3">
          С чем приходят — и что{" "}
          <em className="accent-italic">оказывается на самом деле</em>
        </h2>
        <hr className="rule-gold mb-14" />

        <div className="space-y-0">
          {cases.map((c, i) => (
            <article
              key={i}
              className="grid md:grid-cols-[100px_1fr] gap-8 md:gap-12 py-10 md:py-14 border-t border-ink/10 first:border-t-0"
            >
              <div className="flex md:block items-baseline gap-4">
                <div className="num-display select-none" style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="eyebrow-mute md:mt-3">Случай</p>
              </div>

              <div>
                <h3 className="display-3 mb-8">{c.title}</h3>

                <dl className="space-y-6 mb-10">
                  <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                    <dt className="eyebrow-mute pt-1">С чем пришли</dt>
                    <dd className="text-base md:text-lg leading-[1.65] text-ink">
                      {c.came}
                    </dd>
                  </div>
                  <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                    <dt className="eyebrow-mute pt-1">Что оказалось</dt>
                    <dd className="text-base md:text-lg leading-[1.65] text-ink">
                      {c.actually}
                    </dd>
                  </div>
                  <div className="grid md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                    <dt className="eyebrow-mute pt-1">Что в работе</dt>
                    <dd className="text-base md:text-lg leading-[1.65] text-ink">
                      {c.inWork}
                    </dd>
                  </div>
                </dl>

                <div className="border-l-2 border-gold pl-5 md:pl-6 max-w-xl">
                  <p className="eyebrow mb-2">Что это подтвердило</p>
                  <p className="font-serif italic text-xl md:text-2xl leading-tight text-ink">
                    {c.confirms}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
