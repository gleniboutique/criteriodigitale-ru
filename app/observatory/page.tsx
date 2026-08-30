import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LongreadFeature from "@/components/LongreadFeature";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ITALIAN_OBSERVATORY_URL } from "@/config/site";
import { getReadingLabel, observatoryArticles } from "@/content/observatory";

export const metadata: Metadata = {
  title: "Observatory — исследования, AI и человеческое суждение",
  description:
    "Авторские наблюдения Татьяны Мирошиной об AI, системах, критериях выбора и человеческой ответственности.",
  alternates: {
    canonical: "/observatory",
    languages: {
      ru: "/observatory",
      it: ITALIAN_OBSERVATORY_URL,
    },
  },
  openGraph: {
    title: "Observatory — Татьяна Мирошина",
    description:
      "Авторские наблюдения об AI, системах, критериях выбора и человеческой ответственности.",
    type: "website",
    url: "/observatory",
  },
};

export default function ObservatoryPage() {
  return (
    <main className="observatory-page" id="top">
      <SiteHeader context="observatory" />

      <section className="observatory-index-hero page-shell" aria-labelledby="observatory-index-title">
        <div className="section-meta">
          <span>O</span>
          <span>Observatory / index</span>
        </div>
        <div className="observatory-index-heading">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Наблюдения" },
            ]}
          />
          <p className="kicker">Исследования / мастерская / наблюдения</p>
          <h1 id="observatory-index-title">Наблюдать, прежде чем делать вывод.</h1>
          <p>
            Материалы о том, как AI и цифровые инструменты входят в работу,
            меняют решения и требуют новых критериев — технических и человеческих.
          </p>
        </div>
        <aside aria-label="Логика Observatory">
          <span>FIELD</span>
          <span>RELATIONS</span>
          <span>STRUCTURE</span>
          <span>POSSIBLE ACTION</span>
        </aside>
      </section>

      <section className="observatory-index-list page-shell" aria-label="Все материалы Observatory">
        <LongreadFeature variant="index" />
        {observatoryArticles.map((article) => (
          <article className="observatory-index-item" key={article.slug}>
            <Link href={`/observatory/${article.slug}`}>
              <div className="observatory-index-label">
                <span>Observatory / {article.number}</span>
                <small>{article.category}</small>
              </div>
              <h2>{article.title}</h2>
              <p>{article.lead}</p>
              <div className="observatory-index-meta">
                <span>{getReadingLabel(article)}</span>
                <strong>Читать →</strong>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <div className="observatory-index-return page-shell">
        <Link href="/#thinking">← Вернуться к Living System</Link>
      </div>

      <SiteFooter />
    </main>
  );
}
