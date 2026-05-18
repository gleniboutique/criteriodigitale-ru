export default function KtoYaSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
            03 — кто я
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Меня зовут Татьяна
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="max-w-3xl space-y-6 text-lg md:text-xl leading-relaxed">
          <p>
            Живу в Италии с 1999 года.
          </p>
          <p>
            Двадцать с лишним лет вела свою компанию — производство кожаных
            изделий и авторский бренд: производство, международные продажи,
            ошибки и перезапуски.
          </p>
          <p>
            Последние годы работаю с другой стороны — с архитектурой процессов
            и (там, где это нужно) с AI. Помогаю предпринимателям и небольшим
            командам в одной задаче: разобраться, что у них на самом деле
            происходит, до того как они решат что-то менять или покупать.
          </p>

          <p className="text-muted-foreground italic font-serif text-base md:text-lg pt-2">
            Живу в Италии, но эту работу с русскоязычными людьми делаю отдельно —
            разговор о настоящем честнее на родном языке.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-border max-w-3xl">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Почему мне это важно
          </p>
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
            <p>
              Когда у меня была своя компания, не было тех возможностей,
              которые есть сейчас. Даже черновой перевод текста на другой
              язык требовал нанять переводчика — это время и деньги.
              Представительство онлайн, процесс продаж — всё собиралось
              руками, на это уходили не часы, не дни и даже не недели,
              а месяцы. И большая команда вокруг, без которой ничего было
              не сделать.
            </p>
            <p>
              Сейчас наступило такое время, когда каждый может собрать
              для себя «команду» и выстроить процессы моментально — и делать
              вещи, которые раньше казались немыслимыми. Было бы желание,
              идеи и понятная цель.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
