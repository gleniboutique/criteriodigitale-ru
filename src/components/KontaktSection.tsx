import { Mail, Send } from "lucide-react";

export default function KontaktSection() {
  return (
    <section className="section-padding surface-warm">
      <div className="container-wide">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-4">
            05 — контакт
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Если что-то из этого про вас — напишите
          </h2>
          <div className="divider-gold" />
        </div>

        <div className="max-w-3xl">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/85 mb-10">
            Я отвечу сама в течение пары дней.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:pc@gleni.it"
              className="group flex items-center gap-4 p-5 md:p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition"
            >
              <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-0.5">
                  Email
                </span>
                <span className="font-serif text-lg md:text-xl group-hover:text-primary transition">
                  pc@gleni.it
                </span>
              </span>
            </a>

            <a
              href="https://t.me/tatianamiroshna"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 md:p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition"
            >
              <span className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Send className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block text-xs uppercase tracking-[0.15em] text-muted-foreground mb-0.5">
                  Telegram
                </span>
                <span className="font-serif text-lg md:text-xl group-hover:text-primary transition">
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
