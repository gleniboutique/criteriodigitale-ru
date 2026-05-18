export default function KontaktSection() {
  return (
    <section className="section-spacing bg-paper">
      <div className="page">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">06 · Контакт</p>
          <p className="eyebrow-mute">пара дней на ответ</p>
        </header>

        <h2 className="display-2 mb-3">
          Если что-то из этого{" "}
          <em className="accent-italic">про вас</em> — напишите
        </h2>
        <hr className="rule-gold mb-14" />

        <div className="max-w-[680px]">
          <p className="lead mb-12">
            Я отвечу сама в течение пары дней. Не «оставьте заявку»,
            а напишите как пишут человеку.
          </p>

          <dl className="space-y-0">
            <div className="grid grid-cols-[120px_1fr] gap-6 md:gap-10 py-7 border-t border-ink/15">
              <dt className="eyebrow-mute pt-1">Email</dt>
              <dd>
                <a
                  href="mailto:pc@gleni.it"
                  className="font-serif italic text-2xl md:text-3xl text-ink hover:text-gold-deep transition"
                >
                  pc@gleni.it
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-[120px_1fr] gap-6 md:gap-10 py-7 border-t border-b border-ink/15">
              <dt className="eyebrow-mute pt-1">Telegram</dt>
              <dd>
                <a
                  href="https://t.me/tatianamiroshina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif italic text-2xl md:text-3xl text-ink hover:text-gold-deep transition"
                >
                  @tatianamiroshina
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
