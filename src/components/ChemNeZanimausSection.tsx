const notDoing = [
  "Не оказываю юридических консультаций.",
  "Не внедряю «под ключ» чужой софт.",
  "Не работаю с корпорациями на 1000+ человек.",
  "Не обещаю «трансформацию» и не гарантирую результатов в цифрах.",
  "Не делаю маркетинг, брендинг и SMM как отдельные услуги.",
  "Не работаю здесь как экзистенциально-аналитический консультант — хотя слышу глубже именно благодаря этому образованию.",
];

export default function ChemNeZanimausSection() {
  return (
    <section className="section-spacing bg-paper-2">
      <div className="page">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">05 · Границы</p>
          <p className="eyebrow-mute">{notDoing.length} пунктов</p>
        </header>

        <h2 className="display-2 mb-3">
          Чем <em className="accent-italic">не</em> занимаюсь
        </h2>
        <hr className="rule-gold mb-14" />

        <ul className="space-y-0 mb-14">
          {notDoing.map((line, i) => (
            <li
              key={i}
              className="grid grid-cols-[40px_1fr] gap-5 md:gap-8 items-baseline py-6 md:py-7 border-t border-ink/10 first:border-t-0"
            >
              <span className="font-serif italic text-3xl md:text-4xl text-gold leading-none">
                ×
              </span>
              <p className="font-serif text-lg md:text-xl leading-[1.4] text-ink">
                {line}
              </p>
            </li>
          ))}
        </ul>

        <div className="border-l-2 border-gold pl-5 md:pl-6 max-w-2xl">
          <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-snug">
            Чем я не занимаюсь — иногда{" "}
            <em className="accent">важнее</em> того, чем занимаюсь.
          </p>
        </div>
      </div>
    </section>
  );
}
