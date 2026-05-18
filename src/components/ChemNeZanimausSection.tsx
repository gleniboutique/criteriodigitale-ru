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
    <section className="section-padding surface-navy">
      <div className="container-wide">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.18em] opacity-60 mb-4">
            04 — границы
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-background">
            Чем не занимаюсь
          </h2>
          <div className="divider-gold" />
        </div>

        <ul className="space-y-5 mb-12 max-w-3xl">
          {notDoing.map((line, i) => (
            <li key={i} className="flex gap-4 text-lg md:text-xl leading-snug">
              <span className="text-accent font-serif pt-1 min-w-[1.5ch]">×</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>

        <p className="font-serif italic text-lg md:text-xl opacity-75 max-w-2xl border-t border-white/15 pt-8">
          Чем я не занимаюсь — иногда важнее того, чем занимаюсь.
        </p>
      </div>
    </section>
  );
}
