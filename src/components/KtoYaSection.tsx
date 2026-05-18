export default function KtoYaSection() {
  return (
    <section className="section-spacing bg-paper relative overflow-hidden">
      <div className="page-wide relative">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 04 · Кто я</p>
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
              <p className="font-serif italic text-base md:text-lg text-mute leading-[1.55]">
                Живу в Италии, но эту работу с русскоязычными людьми делаю
                отдельно — разговор о настоящем честнее на родном языке.
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

        <div className="copy-block max-w-[860px]">
          <p className="eyebrow mb-5">Почему мне это важно</p>
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-[1.7]">
              Когда у меня была своя компания, не было тех возможностей,
              которые есть сейчас. Даже черновой перевод текста на другой
              язык требовал нанять переводчика — это время и деньги.
              Представительство онлайн, процесс продаж — всё собиралось
              руками. Месяцами. И большая команда вокруг, без которой
              ничего было не сделать.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              Сейчас наступило такое время, когда каждый может собрать
              для себя «команду» и выстроить процессы моментально — и делать
              вещи, которые раньше казались немыслимыми.
            </p>
            <p className="font-serif italic text-xl md:text-2xl text-ink pt-3 border-t border-ink/10 mt-5">
              Было бы <em className="accent">желание</em>, идеи и понятная цель.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
