export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section-padding surface-warm overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, hsl(30 50% 75% / 0.5) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full blur-3xl"
             style={{ background: "radial-gradient(circle, hsl(36 55% 65% / 0.35) 0%, transparent 70%)" }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-3xl">
          <div className="divider-gold mb-10" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-8 animate-fade-in-up">
            Вы знаете, что что-то не так.
            <br />
            Но не знаете, что именно.
            <br />
            <span className="text-gradient-gold">И боитесь начать с не того конца.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up"
             style={{ animationDelay: "120ms", animationFillMode: "both" }}>
            Я помогаю разобраться — до того, как вы потратите
            деньги, время и команду на не ту задачу.
          </p>
        </div>
      </div>
    </section>
  );
}
