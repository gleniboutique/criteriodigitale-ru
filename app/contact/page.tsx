import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_TELEGRAM,
} from "@/config/contact";

export const metadata: Metadata = {
  title: "Обсудить задачу — Татьяна Мирошина",
  description:
    "Способы связаться с Татьяной Мирошиной, чтобы обозначить контур задачи и понять, подходит ли она для совместной работы.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Обсудить задачу — Татьяна Мирошина",
    description:
      "Короткое знакомство, чтобы обозначить контур ситуации и понять, имеет ли смысл идти в неё вместе.",
    url: "/contact",
    type: "website",
    locale: "ru_RU",
  },
};

export default function ContactPage() {
  return (
    <main className="contact-page" id="top">
      <SiteHeader context="contact" />

      <section className="contact-shell page-shell" aria-labelledby="contact-page-title">
        <header className="contact-intro">
          <div className="contact-label">
            <span>Contact / 01</span>
            <span>Marche, Italia / online</span>
          </div>
          <h1 id="contact-page-title">Обсудить задачу</h1>
          <p className="contact-lead">
            Если хочется сначала понять, есть ли здесь задача для совместной работы,
            можно написать мне удобным способом.
          </p>
        </header>

        <aside className="contact-annotation" aria-label="Последовательность первого разговора">
          <span>FIELD / СИТУАЦИЯ</span>
          <span>RELATIONS / РАЗГОВОР</span>
          <span>POSSIBLE ACTION / СЛЕДУЮЩИЙ ШАГ</span>
        </aside>

        <div className="contact-meeting">
          <span className="contact-note">Field note / 01</span>
          <h2>30 минут для знакомства · бесплатно</h2>
          <p>
            За это время обозначим контур ситуации и поймём, имеет ли смысл идти в неё вместе.
          </p>
        </div>

        <nav className="contact-links" aria-label="Способы связи">
          <a
            href={CONTACT_TELEGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Написать Татьяне в Telegram"
          >
            <span>Telegram</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href={CONTACT_EMAIL_HREF} aria-label={`Написать Татьяне по email: ${CONTACT_EMAIL}`}>
            <span>Email</span>
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </section>

      <SiteFooter />
    </main>
  );
}
