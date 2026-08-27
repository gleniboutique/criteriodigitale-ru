import RulerGrid from "./ornaments/RulerGrid";

const observations = [
  "Заявленная задача почти всегда не настоящая.",
  "Сайт чаще симптом, чем решение.",
  "Человек редко знает, что у него уже есть. Самое важное он говорит, а не пишет, — и только если его спросить.",
];

const ledger: { say: string; real: string }[] = [
  {
    say: "Хочу в онлайн, но не знаю, что мне нужно",
    real: "Слушаю вас, спрашиваю, читаю ваш архив и цифры. Обычно у вас уже есть больше, чем вы думали, а строить надо меньше, чем вам предлагали.",
  },
  {
    say: "Годы материала лежат мёртвым грузом",
    real: "Разбираю архив целиком — видео, фотографии, переписки — и превращаю его в то, из чего можно публиковать год без новой съёмки.",
  },
  {
    say: "Хочу сайт, но чтобы он был мой",
    real: "Собираю на вашем материале и вашими словами. Тексты, картинки, приём заказов — всё сама.",
  },
  {
    say: "Не понимаю, во что превратится сезон",
    real: "Считаю назад от главной даты: что к какому числу, сколько денег до первой выручки, сколько ваших часов — и где вы упрётесь.",
  },
];

export default function DlyaKogoSection() {
  return (
    <section id="dlya-kogo" className="section-spacing bg-paper-2 relative overflow-hidden border-t border-ink/8 scroll-mt-4">
      <div className="page-wide relative">
        <div className="mb-3 opacity-50">
          <RulerGrid />
        </div>

        <header className="section-head flex items-baseline justify-between">
          <p className="eyebrow-mute">№ 02 · Для кого</p>
          <p className="eyebrow-mute">и с чем приходят</p>
        </header>

        <h2 className="display-2 mb-3">
          Дело, которое живёт{" "}
          <em className="accent-italic">в одном человеке</em>
        </h2>
        <hr className="rule-gold mb-12" />

        <div className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-10 items-start mb-14">
          <div className="copy-block">
            <p className="text-base md:text-lg leading-[1.7] mb-4">
              Вы делаете что-то настоящее — продукт, дом, практику,
              сообщество — и делаете давно. Команды нет: есть вы, телефон,
              в котором все покупатели, и архив, до которого не доходят руки.
              Продавали лично, и этот способ перестал работать. Вы понимаете,
              что «надо что-то делать», но не понимаете, что именно.
            </p>
            <p className="text-base md:text-lg leading-[1.7] text-ink-soft">
              Часто вы живёте в одной стране, а покупатели — в другой.
              Я знаю обе стороны: живу в Италии, работаю на русском
              и итальянском.
            </p>
          </div>

          <aside className="copy-block-mute">
            <p className="eyebrow-mute mb-4">Кому я не нужна</p>
            <ul className="space-y-2.5 text-base leading-[1.5] text-ink-soft">
              <li>Компаниям с командой и отделом маркетинга.</li>
              <li>Тем, кому нужен сайт по шаблону за неделю.</li>
              <li>Тем, у кого готовое техзадание и нужны руки.</li>
            </ul>
          </aside>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-14">
          {observations.map((text, i) => (
            <article key={i} className="copy-block">
              <p
                className="font-serif italic text-gold leading-[0.85] select-none mb-4"
                style={{ fontSize: "44px", letterSpacing: "-0.04em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-serif text-xl md:text-2xl leading-[1.2] text-ink">
                {text}
              </p>
            </article>
          ))}
        </div>

        <p className="eyebrow mb-5">С чем приходят — и что я с этим делаю</p>
        <div className="grid gap-4">
          {ledger.map((row, i) => (
            <article
              key={i}
              className="copy-block grid md:grid-cols-[minmax(0,300px)_1fr] gap-3 md:gap-9 items-start"
            >
              <p className="font-serif italic text-xl md:text-2xl leading-[1.25] text-ink">
                <span className="text-mute">— </span>
                {row.say}
              </p>
              <p className="text-base md:text-lg leading-[1.6] text-ink-soft">
                {row.real}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
