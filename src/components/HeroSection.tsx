import goldenBg from "@/assets/golden-waves-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={goldenBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-navy/10 to-navy/60" />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-32">
        <div className="glass-card-dark rounded-2xl p-10 md:p-14 space-y-7 text-center animate-fade-in-up">
          <p className="eyebrow-light">
            Татьяна Мирошина · criteriodigitale.ru
          </p>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-[3rem] leading-[1.1] text-golden-light tracking-tight">
            Вы знаете, что что-то{" "}
            <span className="text-gradient-gold italic">не так</span>.
            <br />
            Но не знаете, что именно.
            <br />
            И боитесь начать{" "}
            <span className="text-gradient-gold italic">с не того конца</span>.
          </h1>

          <div className="divider-gold mx-auto" />

          <p className="font-serif italic text-base md:text-lg text-golden-light/85 leading-relaxed max-w-xl mx-auto">
            Я помогаю разобраться — до того, как вы потратите
            деньги, время и команду на не ту задачу.
          </p>

          <p className="text-xs text-golden-light/55 tracking-[0.18em] uppercase pt-2">
            Один человек, не агентство
          </p>
        </div>
      </div>
    </section>
  );
}
