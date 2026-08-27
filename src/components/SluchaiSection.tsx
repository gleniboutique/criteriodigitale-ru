import RulerGrid from "./ornaments/RulerGrid";

type Short = { title: string; came: string; actually: string };

const shorts: Short[] = [
  {
    title: "Конно-спортивный комплекс",
    came: "«Ученикам после урока не на что опереться». Запроса нет — есть ощущение.",
    actually: "Есть редкий метод, нет способа его доставить. Собирается структура онлайн-школы.",
  },
  {
    title: "Сообщество с архивом",
    came: "«Хотим всего сразу»: выйти в мир, зарабатывать, сохранить архив, оформить наследие.",
    actually: "Это не одна задача, а восемь на разных горизонтах. Пока не разведены — ничего большого не запускаем.",
  },
  {
    title: "Спортивная статистика",
    came: "«Удобный способ следить за игроками».",
    actually: "Претензия к качеству данных. Личное приложение, ТЗ собиралось на ходу — заказчик узнавал свой запрос, видя сделанное.",
  },
  {
    title: "Сдача жилья туристам",
    came: "«Нужен сайт».",
    actually: "Три задачи разом: время хозяина, автономия гостя, всё доступно до приезда. Гид-приложение вместо сайта.",
  },
  {
    title: "Личный штаб",
    came: "«Помоги с моим хаосом» — задачи, здоровье, почта, подписки.",
    actually: "Система, куда всё падает само, с тремя ИИ-брифами в день. Сделано для себя — и работает каждый день.",
  },
];

export default function SluchaiSection() {
  return (
    <section id="sluchai" className="section-spacing bg-paper relative overflow-hidden border-t border-ink/8 scroll-mt-4">
      <div className="page-wide relative">
        <div className="mb-3 opacity-50">
          <RulerGrid />
        </div>

        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 03 · Случаи</p>
          <p className="eyebrow-mute">один подробно · пять коротко</p>
        </header>

        <h2 className="display-2 mb-3">
          С чем приходят — и что{" "}
          <em className="accent-italic">оказывается на самом деле</em>
        </h2>
        <hr className="rule-gold mb-14" />

        {/* Один случай — подробно, с результатом */}
        <article className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-10 items-start mb-14">
          <div className="flex md:block items-baseline gap-4">
            <div
              className="font-serif italic text-gold leading-[0.85] select-none"
              style={{ fontSize: "clamp(56px, 7vw, 88px)", letterSpacing: "-0.04em" }}
            >
              01
            </div>
            <p className="eyebrow-mute md:mt-3">до результата</p>
          </div>

          <div className="copy-block">
            <h3 className="display-3 mb-2">Экспорт в Россию</h3>
            <p className="text-sm text-mute mb-7">
              Производство за рубежом, один человек, пятнадцать лет продаж
              через выставки и поездки. Клиент изменён так, чтобы его нельзя
              было узнать.
            </p>

            <dl className="space-y-5 mb-8">
              <div className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6 pb-4 border-b border-ink/10">
                <dt className="eyebrow-mute pt-1">С чем пришли</dt>
                <dd className="text-base md:text-lg leading-[1.6] text-ink">
                  Поездок больше нет, продажи держались на них. Запрос звучал
                  как «обновить обучение агентов». По сути — «не понимаю,
                  что теперь делать».
                </dd>
              </div>
              <div className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6 pb-4 border-b border-ink/10">
                <dt className="eyebrow-mute pt-1">Что оказалось</dt>
                <dd className="text-base md:text-lg leading-[1.6] text-ink">
                  Учить агентов продукту не нужно — они его знают. Застревало
                  другое: покупатели не понимали, за что платят такую цену,
                  агенты — чьи это клиенты. А самое ценное лежало не в архиве,
                  а в том, что владелица рассказывала, когда её спрашивали.
                </dd>
              </div>
              <div className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6 pb-4 border-b border-ink/10">
                <dt className="eyebrow-mute pt-1">Что сделано</dt>
                <dd className="text-base md:text-lg leading-[1.6] text-ink">
                  Полсотни её видео расшифрованы и разложены по темам. Сайт —
                  её словами и на её фотографиях. Приём заказов, который
                  не нарушает закон о данных. Счёт сезона назад от главной
                  даты: деньги, сроки, кого нанять.
                </dd>
              </div>
              <div className="grid md:grid-cols-[150px_1fr] gap-2 md:gap-6">
                <dt className="eyebrow pt-1">Что стало</dt>
                <dd className="text-base md:text-lg leading-[1.6] text-ink">
                  Вместо курса — работающая система за тринадцать недель,
                  и честный ответ, сколько получится продать в первый год:
                  вдвое меньше плана. Ошибка вдвое в расчёте объёма найдена
                  до того, как под неё напечатали упаковку. Цифры продаж —
                  зимой.
                </dd>
              </div>
            </dl>

            <div className="border-l-2 border-gold pl-5">
              <p className="eyebrow mb-2">Что это подтвердило</p>
              <p className="font-serif italic text-xl md:text-2xl leading-tight text-ink">
                Когда привычные мосты обрываются — нужны не новые инструменты,
                а помощь нащупать, какие мосты ещё возможны.
              </p>
            </div>
          </div>
        </article>

        {/* Остальные — коротко */}
        <p className="eyebrow mb-5">Ещё пять — в разных стадиях</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {shorts.map((c, i) => (
            <article key={i} className="copy-block-mute">
              <p className="eyebrow-mute mb-3">{String(i + 2).padStart(2, "0")}</p>
              <h3 className="font-serif text-xl md:text-2xl text-ink leading-tight mb-4">
                {c.title}
              </h3>
              <p className="font-serif italic text-base text-ink-soft leading-[1.45] mb-3">
                {c.came}
              </p>
              <p className="text-sm text-ink-soft leading-[1.55]">{c.actually}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
