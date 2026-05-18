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
    <section className="section-padding navy-section relative overflow-hidden">
      <div className="container-wide relative">
        <div className="text-center mb-14">
          <p className="eyebrow-light mb-4">04 · Границы</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-golden-light leading-tight">
            Чем <span className="text-gradient-gold italic">не</span> занимаюсь
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-12">
          {notDoing.map((line, i) => (
            <div
              key={i}
              className="glass-card-dark p-5 md:p-6 flex gap-4 items-start"
            >
              <span
                className="font-serif italic text-3xl text-gradient-gold leading-none pt-1"
                style={{ minWidth: "1.5ch" }}
              >
                ×
              </span>
              <p className="text-base md:text-lg leading-snug text-golden-light/90">
                {line}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center pt-6 border-t border-golden-light/15">
          <p className="font-serif italic text-lg md:text-2xl text-golden-light/80 pt-8">
            Чем я не занимаюсь — иногда{" "}
            <span className="text-gradient-gold">важнее</span> того, чем занимаюсь.
          </p>
        </div>
      </div>
    </section>
  );
}
