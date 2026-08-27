import MonoTelemetry from "./ornaments/MonoTelemetry";

type Step = {
  n: string;
  title: string;
  what: string;
  result: string;
  price: string;
  priceNote?: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Разговор и чтение",
    what:
      "Сначала слушаю вас и задаю вопросы — про дело, про людей, про то, что перестало работать. В этом разговоре вы скажете самое важное, и я это запишу. Потом забираю архив, переписки, ответы ваших людей, цифры за прошлые годы — и читаю всё. Не выборочно.",
    result:
      "Картина того, что у вас уже есть, — обычно её нет и у вас самих. Разбор, где на самом деле застревает. Список того, чего строить не надо. И смета на следующий шаг.",
    price: "600 €",
    priceNote:
      "Засчитывается в следующую ступень, если идём дальше. Архив примерно до пятидесяти видео; если больше — скажу заранее.",
  },
  {
    n: "02",
    title: "Сборка",
    what:
      "То, что оказалось нужным. У одного это сайт и приём заказов, у другого — письма к своим покупателям и таблица, у третьего — материалы для тех, кто продаёт его продукт, или каталог из архива. Всё на вашем материале и вашими словами.",
    result: "Работающее, которым владеете вы: тексты, код, доступы — ваши.",
    price: "1 500 – 8 000 €",
    priceNote:
      "Три размера: малая 1 500–2 500, средняя 4 000–6 000, большая от 8 000. Какой ваш — видно после первой ступени, и сумму я называю до начала.",
  },
  {
    n: "03",
    title: "План",
    what:
      "Обратный счёт от главной даты — сезона, запуска, урожая, набора. Деньги, которые нужно потратить до первой выручки. Кто что делает. Чего ждать от каждого источника покупателей и где вы упрётесь.",
    result:
      "План на бумаге, который выдерживает проверку, и решения, принятые по устройству дела, а не по ощущению.",
    price: "1 800 €",
  },
  {
    n: "04",
    title: "Сопровождение",
    what:
      "Короткая планёрка раз в неделю, поддержание сделанного, один-два материала в месяц из архива, ответы на ваши вопросы.",
    result: "Дело идёт, и вы не одна.",
    price: "500 € / мес",
    priceNote:
      "Десять часов в месяц. Сверх — 50 € в час и только по вашему предварительному согласию.",
  },
];

export default function KakUstroenoSection() {
  return (
    <section className="section-spacing bg-paper relative overflow-hidden border-t border-ink/8">
      <div className="page-wide relative">
        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 05 · Работа и цены</p>
          <p className="eyebrow-mute">4 ступени · открыто</p>
        </header>

        <h2 className="display-2 mb-3">
          Начинается с разговора,{" "}
          <em className="accent-italic">а не со стройки</em>
        </h2>
        <hr className="rule-gold mb-14" />

        <div className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-10 items-start mb-12">
          <div className="copy-block">
            <p className="text-base md:text-lg leading-[1.7] mb-4">
              Я не берусь за проект «под ключ» с первого разговора, потому что
              в первом разговоре ни вы, ни я ещё не знаем, что вам нужно.
              Результат — не сайт и не курс: сайт понадобился одному клиенту,
              другому нужны были письма к своим и таблица, третьему — план
              на год и человек на заказы.
            </p>
            <p className="text-base md:text-lg leading-[1.7]">
              Поэтому работа устроена ступенями. После каждой можно
              остановиться, и на каждой на руках остаётся вещь, а не ощущение.
            </p>
          </div>

          <aside className="copy-block-mute tint-gold md:sticky md:top-8">
            <p className="eyebrow-mute mb-3">Первый разговор</p>
            <p
              className="font-serif italic text-gold leading-none mb-3"
              style={{ fontSize: "clamp(38px, 4.6vw, 52px)", letterSpacing: "-0.03em" }}
            >
              бесплатно
            </p>
            <p className="text-sm text-mute leading-relaxed">
              Час, без презентаций и форм. Я задаю много вопросов, иногда
              неудобных. На выходе вы знаете, в чём настоящая задача — и стоит
              ли вообще что-то делать. Это уже результат, даже если дальше
              мы не работаем.
            </p>
          </aside>
        </div>

        <div className="space-y-5 md:space-y-6 mb-12">
          {steps.map((s) => (
            <article
              key={s.n}
              className="copy-block grid md:grid-cols-[64px_1fr_200px] gap-5 md:gap-9 items-start"
            >
              <div
                className="font-serif italic text-gold leading-[0.85] select-none"
                style={{ fontSize: "clamp(44px, 5vw, 60px)", letterSpacing: "-0.04em" }}
              >
                {s.n}
              </div>

              <div>
                <h3 className="display-3 mb-4">{s.title}</h3>
                <p className="text-base md:text-lg leading-[1.6] text-ink mb-4">
                  {s.what}
                </p>
                <div className="border-l-2 border-gold pl-4">
                  <p className="eyebrow mb-1">На выходе</p>
                  <p className="font-serif italic text-lg md:text-xl leading-[1.35] text-ink">
                    {s.result}
                  </p>
                </div>
              </div>

              <div className="md:text-right md:border-l md:border-ink/10 md:pl-6">
                <p className="eyebrow-mute mb-2">Цена</p>
                <p
                  className="font-serif text-ink leading-none mb-3"
                  style={{ fontSize: "clamp(26px, 2.6vw, 32px)", letterSpacing: "-0.02em" }}
                >
                  {s.price}
                </p>
                {s.priceNote && (
                  <p className="text-sm text-mute leading-relaxed">{s.priceNote}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_220px] gap-8 md:gap-12 items-start">
          <div className="copy-block-mute">
            <p className="eyebrow mb-4">Правила, одинаковые для всех</p>
            <ul className="space-y-3 text-base md:text-lg leading-[1.55] text-ink-soft">
              <li>
                <strong>Скидок нет — есть объём.</strong> Если сумма не по
                карману, меняется не цена, а размер работы. Скидка запоминается
                как настоящая цена и портит следующий разговор.
              </li>
              <li>
                <strong>Расходы отдельно, по чекам.</strong> Подписки, хостинг,
                домен, база. Это деньги проекта, а не мой гонорар, и скидке они
                не подлежат.
              </li>
              <li>
                <strong>Первая ступень оплачивается вперёд</strong>, сборка —
                половина в начале и половина при сдаче. Для сезонного дела
                вторая половина может ждать первой выручки, если это записано.
              </li>
              <li>
                <strong>Ничего не начинается без письменного согласия.</strong>{" "}
                Одно сообщение, где названы объём, сумма и срок.
              </li>
              <li>
                <strong>Цены в евро.</strong> С клиентами в Италии и ЕС —
                контракт и перевод в евро; с клиентами в России ищем удобный
                и прозрачный способ в рамках текущих правил.
              </li>
            </ul>
          </div>

          <aside className="hidden md:block sticky top-8">
            <p className="eyebrow-mute mb-4">журнал</p>
            <MonoTelemetry />
            <p className="font-serif italic text-sm text-mute mt-4 pt-3 border-t border-ink/10">
              цены названы · сверено
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
