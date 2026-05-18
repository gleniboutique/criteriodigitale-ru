import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Case = {
  title: string;
  came: string;
  actually: string;
  inWork: string;
  confirms: string;
};

const cases: Case[] = [
  {
    title: "Школа верховой езды",
    came: "Нет материалов для учеников.",
    actually:
      "Нужна модель онлайн-школы плюс понимание места на рынке этой дисциплины и собственного позиционирования внутри неё.",
    inWork:
      "Исследование рынка Италии и мира, потенциал, форматы. Сейчас идёт сборка модели.",
    confirms: "Запрос на материалы оказался запросом на модель бизнеса.",
  },
  {
    title: "Экспорт в РФ",
    came:
      "Обновить обучение агентов. Раньше — личные встречи на выставках, сейчас такой возможности нет.",
    actually:
      "Заменить личное присутствие на платформу — не теряя самого эксперта как ядро (стиль, дух, голос).",
    inWork:
      "Собираем курсы из её материалов, нетворкинг, регулярные онлайн-встречи.",
    confirms: "Платформа имеет смысл, только если человек в ней не растворяется.",
  },
  {
    title: "Сообщество с архивом",
    came:
      "Много материалов, наработанных за годы — что с ними делать, не валяться же.",
    actually:
      "Сначала понять, чего сам Клуб хочет (денег, людей, влияния, всё вместе) — и только потом упаковывать.",
    inWork: "Идёт работа над определением цели Клуба.",
    confirms: "Упаковка без цели — это украшение пустоты.",
  },
  {
    title: "Поиск результатов в спорте",
    came:
      "Удобный способ следить за конкретными игроками, которые мигрируют по разным лигам и командам.",
    actually:
      "Агрегатора, который собирает это в одном месте, на рынке не существует — особенно не на русском.",
    inWork:
      "v1 — трекер для личного использования. v2 — публичный сайт. Сейчас на стадии v2.",
    confirms: "Иногда «нет инструмента» — это не жалоба, а возможность.",
  },
  {
    title: "Сдача жилья туристам",
    came: "Нужен сайт.",
    actually:
      "Не сайт. Нужно высвободить время владельца — не отнимая комфорт у гостя.",
    inWork:
      "Веб-приложение «всё внутри», PWA-гид для гостя, печатный комплект на случай отсутствия интернета.",
    confirms: "Сайт чаще симптом, чем решение.",
  },
];

export default function SluchaiSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-padding surface-warm">
      <div className="container-wide">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
            02 — случаи
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            С чем приходят — и что оказывается на самом деле
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="relative">
          <div className="overflow-hidden -mx-2" ref={emblaRef}>
            <div className="flex">
              {cases.map((c, i) => (
                <article
                  key={i}
                  className="flex-[0_0_100%] md:flex-[0_0_85%] lg:flex-[0_0_70%] min-w-0 px-2"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 h-full border border-border/50 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.15em] text-primary/80 mb-2">
                      Случай {i + 1}
                    </p>
                    <h3 className="font-serif text-2xl md:text-3xl mb-8">
                      {c.title}
                    </h3>

                    <dl className="space-y-6 mb-8">
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                          С чем пришли
                        </dt>
                        <dd className="text-base md:text-lg leading-relaxed">{c.came}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                          Что оказалось на самом деле
                        </dt>
                        <dd className="text-base md:text-lg leading-relaxed">{c.actually}</dd>
                      </div>
                      <div>
                        <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                          Что в работе
                        </dt>
                        <dd className="text-base md:text-lg leading-relaxed">{c.inWork}</dd>
                      </div>
                    </dl>

                    <div className="border-t border-border/60 pt-5">
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                        Что это подтвердило
                      </p>
                      <p className="font-serif italic text-base md:text-lg text-foreground/80">
                        {c.confirms}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Случай ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === selectedIndex
                      ? "w-8 bg-primary"
                      : "w-1.5 bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canPrev}
                aria-label="Назад"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 transition hover:bg-card"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canNext}
                aria-label="Вперёд"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 transition hover:bg-card"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
