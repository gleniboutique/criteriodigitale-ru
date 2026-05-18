import MonoTelemetry from "./ornaments/MonoTelemetry";

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
    <section className="section-spacing bg-paper-2 relative overflow-hidden">
      <div className="page-wide relative">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 05 · Границы</p>
          <p className="eyebrow-mute">6 пунктов · открыто</p>
        </header>

        <h2 className="display-2 mb-3">
          Чем <em className="accent-italic">не</em> занимаюсь
        </h2>
        <hr className="rule-gold mb-14" />

        <div className="grid md:grid-cols-[1fr_220px] gap-10 md:gap-14 mb-14 items-start">
          <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {notDoing.map((line, i) => (
              <li
                key={i}
                className="copy-block grid grid-cols-[28px_1fr] gap-4 items-baseline"
              >
                <span className="font-serif italic text-3xl text-gold leading-none">
                  ×
                </span>
                <p className="font-serif text-base md:text-lg leading-[1.35] text-ink">
                  {line}
                </p>
              </li>
            ))}
          </ul>

          <aside className="hidden md:block sticky top-8">
            <p className="eyebrow-mute mb-4">журнал</p>
            <MonoTelemetry />
            <p className="font-serif italic text-sm text-mute mt-4 pt-3 border-t border-ink/10">
              сверено · обновлено сегодня
            </p>
          </aside>
        </div>

        <div className="copy-block max-w-3xl">
          <p className="eyebrow mb-3">подпись</p>
          <p className="font-serif italic text-xl md:text-3xl text-ink leading-snug">
            Чем я не занимаюсь — иногда{" "}
            <em className="accent">важнее</em> того, чем занимаюсь.
          </p>
        </div>
      </div>
    </section>
  );
}
