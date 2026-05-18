import organicShapes from "@/assets/organic-shapes.jpg";

export default function KtoYaSection() {
  return (
    <section className="relative section-padding overflow-hidden golden-gradient">
      <img
        src={organicShapes}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-wide relative">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">03 · Кто я</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 leading-tight">
            Меня зовут <span className="text-gradient-gold italic">Татьяна</span>
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="glass-card-strong p-8 md:p-10 space-y-5">
            <p className="eyebrow">Кратко</p>
            <p className="text-base md:text-lg leading-relaxed">
              Живу в Италии с 1999 года.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Двадцать с лишним лет вела свою компанию — производство кожаных
              изделий и авторский бренд: производство, международные продажи,
              ошибки и перезапуски.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Последние годы работаю с другой стороны — с архитектурой
              процессов и (там, где это нужно) с AI. Помогаю предпринимателям
              и небольшим командам разобраться, что у них на самом деле
              происходит, до того как они решат что-то менять или покупать.
            </p>
            <div className="divider-gold mt-6" />
            <p className="font-serif italic text-base md:text-lg text-foreground/70">
              Живу в Италии, но эту работу с русскоязычными людьми делаю
              отдельно — разговор о настоящем честнее на родном языке.
            </p>
          </div>

          <div className="glass-card-strong p-8 md:p-10 space-y-5">
            <p className="eyebrow">Почему мне это важно</p>
            <p className="text-base md:text-lg leading-relaxed">
              Когда у меня была своя компания, не было тех возможностей,
              которые есть сейчас. Даже черновой перевод текста на другой
              язык требовал нанять переводчика — это время и деньги.
              Представительство онлайн, процесс продаж — всё собиралось
              руками. Месяцами. И большая команда вокруг, без которой
              ничего было не сделать.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Сейчас наступило такое время, когда каждый может собрать
              для себя «команду» и выстроить процессы моментально — и делать
              вещи, которые раньше казались немыслимыми.
            </p>
            <div className="divider-gold mt-6" />
            <p className="font-serif italic text-lg md:text-xl text-gradient-gold">
              Было бы желание, идеи и понятная цель.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-3xl mx-auto mt-10">
          {[
            { v: "25+", l: "лет в Италии" },
            { v: "20+", l: "лет своего бизнеса" },
            { v: "RU / IT", l: "работаю билингвально" },
          ].map((s, i) => (
            <div key={i} className="glass-card-strong p-5 md:p-6 text-center">
              <div className="font-serif italic text-2xl md:text-4xl text-gradient-gold leading-none mb-2">
                {s.v}
              </div>
              <div className="text-xs md:text-sm text-foreground/65 leading-tight">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
