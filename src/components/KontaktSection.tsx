import GoldenSwirls from "./ornaments/GoldenSwirls";

export default function KontaktSection() {
  return (
    <section className="section-spacing bg-paper-2 relative overflow-hidden border-t border-ink/8">
      <div className="ornament">
        <GoldenSwirls opacity={0.35} />
      </div>

      <div className="page-wide relative">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 08 · Контакт</p>
          <p className="eyebrow-mute">ответ в течение 2 дней</p>
        </header>

        <h2 className="display-2 mb-3">
          Если что-то из этого{" "}
          <em className="accent-italic">про вас</em> — напишите
        </h2>
        <hr className="rule-gold mb-14" />

        <div className="grid md:grid-cols-[1fr_2fr] gap-7 md:gap-12 items-start">
          <aside>
            <p className="lead mb-5">
              Не «оставьте заявку» —
              напишите как пишут&nbsp;человеку.
            </p>
            <p className="text-sm text-mute leading-relaxed">
              Я отвечу сама в течение пары дней.
              Без формы, без анкеты, без обещаний продать.
            </p>
          </aside>

          <div className="copy-block">
            <dl>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-5 border-b border-ink/15">
                <dt className="eyebrow-mute pt-1">Email</dt>
                <dd>
                  <a
                    href="mailto:pc@gleni.it"
                    className="font-serif italic text-2xl md:text-4xl text-ink hover:text-gold-deep transition leading-none"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    pc@gleni.it
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-6 md:gap-10 py-5">
                <dt className="eyebrow-mute pt-1">Telegram</dt>
                <dd>
                  <a
                    href="https://t.me/tatianamiroshina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif italic text-2xl md:text-4xl text-ink hover:text-gold-deep transition leading-none"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    @tatianamiroshina
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
