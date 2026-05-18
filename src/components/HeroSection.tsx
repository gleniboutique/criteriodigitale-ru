export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <header className="page pt-10 md:pt-14 flex items-baseline justify-between">
        <span className="eyebrow">
          Tatiana Miroshina
        </span>
        <span className="eyebrow-mute">
          Criterio Digitale · RU
        </span>
      </header>

      <div className="page flex-1 flex flex-col justify-center py-20 md:py-28">
        <div className="max-w-[760px] animate-fade-in-up">
          <p className="eyebrow mb-7">
            Архитектура процессов · до выбора инструментов
          </p>

          <h1 className="display-1 mb-10">
            Вы знаете,&nbsp;
            <em className="accent-italic">что что-то не так</em>.
            <br />
            Но не знаете, что именно.
            <br />
            И боитесь начать <em>с не того конца</em>.
          </h1>

          <hr className="rule-gold mb-9" />

          <p className="lead max-w-[640px] mb-8">
            Я помогаю разобраться — до того, как вы потратите
            деньги, время и команду на не ту задачу.
          </p>

          <p className="eyebrow-mute">
            Один человек, не агентство
          </p>
        </div>
      </div>

      <footer className="page pb-6 flex items-baseline justify-between">
        <span className="eyebrow-mute">
          01 — открытие
        </span>
        <span className="eyebrow-mute">
          ↓ читать
        </span>
      </footer>
    </section>
  );
}
