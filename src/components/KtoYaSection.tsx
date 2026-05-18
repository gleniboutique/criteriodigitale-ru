export default function KtoYaSection() {
  return (
    <section className="section-spacing bg-paper">
      <div className="page">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">04 · Кто я</p>
          <p className="eyebrow-mute">биография</p>
        </header>

        <h2 className="display-2 mb-3">
          Меня зовут <em className="accent-italic">Татьяна</em>
        </h2>
        <hr className="rule-gold mb-14" />

        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-16 mb-16 items-start">
          <div className="space-y-5">
            <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-snug">
              Живу в Италии с 1999 года.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              Двадцать с лишним лет вела свою компанию — производство кожаных
              изделий и авторский бренд: производство, международные продажи,
              ошибки и перезапуски.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              Последние годы работаю с другой стороны — с архитектурой
              процессов и (там, где это нужно) с AI. Помогаю предпринимателям
              и небольшим командам разобраться, что у них на самом деле
              происходит, до того как они решат что-то менять или покупать.
            </p>

            <hr className="rule-hair my-7" />

            <p className="font-serif italic text-base md:text-lg text-mute leading-[1.55]">
              Живу в Италии, но эту работу с русскоязычными людьми делаю
              отдельно — разговор о настоящем честнее на родном языке.
            </p>
          </div>

          <aside className="surface-card md:sticky md:top-8">
            <p className="eyebrow mb-5">В цифрах</p>
            <dl className="space-y-5">
              <div>
                <dt className="num-display" style={{ fontSize: "44px", lineHeight: 1 }}>
                  25+
                </dt>
                <dd className="text-sm text-mute mt-1">лет в Италии</dd>
              </div>
              <hr className="rule-hair" />
              <div>
                <dt className="num-display" style={{ fontSize: "44px", lineHeight: 1 }}>
                  20+
                </dt>
                <dd className="text-sm text-mute mt-1">лет своего бизнеса</dd>
              </div>
              <hr className="rule-hair" />
              <div>
                <dt className="font-serif italic text-3xl text-gold leading-none">
                  RU / IT
                </dt>
                <dd className="text-sm text-mute mt-1">работаю билингвально</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="border-t border-ink/10 pt-12 max-w-[760px]">
          <p className="eyebrow mb-6">Почему мне это важно</p>
          <div className="space-y-5">
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
            <p className="font-serif italic text-xl md:text-2xl text-ink pt-4">
              Было бы <em className="accent">желание</em>, идеи и понятная цель.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
