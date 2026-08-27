export default function KtoYaSection() {
  return (
    <section className="section-spacing bg-paper-2 relative overflow-hidden border-t border-ink/8">
      <div className="page-wide relative">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 05 · Кто я</p>
          <p className="eyebrow-mute">биография</p>
        </header>

        <h2 className="display-2 mb-3">
          Меня зовут <em className="accent-italic">Татьяна</em>
        </h2>
        <hr className="rule-gold mb-16" />

        <div className="grid md:grid-cols-[1fr_300px] gap-7 md:gap-10 mb-12 items-start">
          <div className="copy-block">
            <p className="eyebrow mb-5">Кратко</p>
            <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-snug mb-5">
              Живу в Италии с 1999 года.
            </p>
            <p className="text-base md:text-lg leading-[1.65] mb-4">
              Двадцать с лишним лет вела свою компанию — производство кожаных
              изделий и авторский бренд: производство, международные продажи,
              ошибки и перезапуски.
            </p>
            <p className="text-base md:text-lg leading-[1.65]">
              Последние годы работаю с другой стороны — с архитектурой
              процессов и (там, где это нужно) с AI. Помогаю предпринимателям
              и небольшим командам разобраться, что у них на самом деле
              происходит, до того как они решат что-то менять или покупать.
            </p>

            <div className="border-t border-ink/10 mt-7 pt-5">
              <p className="font-serif italic text-base md:text-lg text-mute leading-[1.55] mb-4">
                Работаю с русскоязычными — и теми, кто в России,
                и теми, кто за её пределами. Разговор о настоящем
                честнее на родном языке.
              </p>
              <p className="text-sm text-mute leading-relaxed">
                Формат договора и оплаты — всегда по договорённости.
                С клиентами в Италии и ЕС — стандартный итальянский
                контракт и банковский перевод в евро. С клиентами в России —
                ищем вместе удобный и прозрачный способ, в рамках
                текущих правил.
              </p>
            </div>
          </div>

          <aside className="space-y-5 md:sticky md:top-8">
            <div className="copy-block-mute tint-gold">
              <p className="eyebrow-mute mb-3">в Италии</p>
              <p className="font-serif italic text-gold leading-none"
                 style={{ fontSize: "clamp(56px, 8vw, 84px)", letterSpacing: "-0.04em" }}>
                25+
              </p>
              <p className="text-sm text-mute mt-3">лет с 1999 года</p>
            </div>
            <div className="copy-block-mute tint-gold">
              <p className="eyebrow-mute mb-3">свой бизнес</p>
              <p className="font-serif italic text-gold leading-none"
                 style={{ fontSize: "clamp(56px, 8vw, 84px)", letterSpacing: "-0.04em" }}>
                20+
              </p>
              <p className="text-sm text-mute mt-3">лет производства и продаж</p>
            </div>
            <div className="copy-block-mute tint-rust">
              <p className="eyebrow-mute mb-3">языки</p>
              <p className="font-serif italic leading-none text-ink"
                 style={{ fontSize: "clamp(32px, 4vw, 44px)", letterSpacing: "-0.02em" }}>
                RU&nbsp;<span className="text-mute">/</span>&nbsp;IT
              </p>
              <p className="text-sm text-mute mt-3">работаю билингвально</p>
            </div>
          </aside>
        </div>

        <div className="copy-block-mute max-w-[860px] mb-12 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
          <div>
            <p className="eyebrow mb-3">Вторая специальность</p>
            <p className="font-serif text-xl md:text-2xl text-ink leading-snug mb-3">
              Экзистенциальный аналитик.
            </p>
            <p className="text-sm text-mute italic mb-4">
              Программа экзистенциально-аналитического консультанта
              (школа Альфрида Лэнгле&nbsp;— GLE-International) пройдена,
              экзамены сданы. Осталось набрать супервизионные часы
              и защитить диплом.
            </p>
            <p className="text-base md:text-lg text-ink-soft leading-relaxed">
              Это помогает услышать запрос глубже —
              и понять, в какую сторону смотреть.
            </p>
          </div>
          <a
            href="https://life-angel.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif italic text-xl md:text-2xl text-gold-deep hover:text-gold whitespace-nowrap transition self-end md:self-center"
          >
            Life&nbsp;Angel&nbsp;→
          </a>
        </div>

        <div className="copy-block max-w-[860px]">
          <p className="eyebrow mb-5">Почему мне это важно</p>
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-[1.7]">
              Когда у меня была своя компания, сайт, перевод, процесс продаж —
              всё собиралось месяцами и большой командой. Сейчас одному человеку
              доступно то, что тогда требовало пятерых. Я работаю с этого края.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              Но когда инструмент стал дешёвым и быстрым, легко начать решать
              не ту задачу — быстро, красиво и мимо. Мне интересно помочь
              увидеть, что <em className="italic">на самом деле</em> решит
              вашу задачу, — и не превратится в ещё одно «надо переделать
              через полгода».
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
