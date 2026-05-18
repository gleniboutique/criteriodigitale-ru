import { Mail, Send } from "lucide-react";

export default function KontaktSection() {
  return (
    <section className="section-padding navy-section relative overflow-hidden">
      <div className="container-wide relative">
        <div className="text-center mb-14">
          <p className="eyebrow-light mb-4">05 · Контакт</p>
          <h2 className="font-serif text-3xl md:text-5xl mb-4 text-golden-light leading-tight">
            Если что-то из этого{" "}
            <span className="text-gradient-gold italic">про вас</span> — напишите
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="font-serif italic text-lg md:text-xl text-golden-light/80 mb-10 text-center leading-relaxed">
            Я отвечу сама в течение пары дней.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:pc@gleni.it"
              className="glass-card-dark group flex items-center gap-5 p-6 md:p-7 hover:border-primary/40 transition"
            >
              <span className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block eyebrow-light mb-1">Email</span>
                <span className="block font-serif text-xl md:text-2xl text-golden-light group-hover:text-gradient-gold transition">
                  pc@gleni.it
                </span>
              </span>
            </a>

            <a
              href="https://t.me/tatianamiroshna"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-dark group flex items-center gap-5 p-6 md:p-7 hover:border-primary/40 transition"
            >
              <span className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
                <Send className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block eyebrow-light mb-1">Telegram</span>
                <span className="block font-serif text-xl md:text-2xl text-golden-light group-hover:text-gradient-gold transition">
                  @tatianamiroshna
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
