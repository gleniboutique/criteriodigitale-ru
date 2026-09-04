import type { Metadata } from "next";
import { withDefaultSocialImage } from "@/config/metadata";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LongreadFeature from "@/components/LongreadFeature";
import ObservatoryArticleCard from "@/components/ObservatoryArticleCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { ITALIAN_OBSERVATORY_URL } from "@/config/site";
import {
  getFeaturedObservatoryMaterial,
  getObservatoryIndexArticles,
} from "@/content/observatoryDisplay";

export const metadata: Metadata = withDefaultSocialImage({
  title: "Observatory — исследования, AI и человеческое суждение",
  description:
    "Авторские наблюдения Татьяны Мирошиной об AI, системах, критериях выбора и человеческой ответственности.",
  alternates: {
    canonical: "/observatory",
    languages: {
      "ru-RU": "/observatory",
      "it-IT": ITALIAN_OBSERVATORY_URL,
    },
  },
  openGraph: {
    title: "Observatory — Татьяна Мирошина",
    description:
      "Авторские наблюдения об AI, системах, критериях выбора и человеческой ответственности.",
    type: "website",
    url: "/observatory",
  },
});

export default function ObservatoryPage() {
  const featuredMaterial = getFeaturedObservatoryMaterial();
  const articlesByNewest = getObservatoryIndexArticles();

  return (
    <main className="observatory-page" id="top">
      <SiteHeader context="observatory" hasLanguageCounterpart />

      <div className="observatory-index-breadcrumbs page-shell">
        <Breadcrumbs
          className="observatory-index-breadcrumbs-nav"
          items={[
            { label: "Главная", href: "/" },
            { label: "Наблюдения" },
          ]}
        />
      </div>

      <section className="observatory-index-hero page-shell" aria-labelledby="observatory-index-title">
        <div className="observatory-index-heading">
          <p className="kicker observatory-index-kicker">Исследования · мастерская · наблюдения</p>
          <h1 id="observatory-index-title">Наблюдать, прежде чем делать вывод.</h1>
          <p>
            Материалы о том, как AI и цифровые инструменты входят в работу,
            меняют решения и требуют новых критериев — технических и человеческих.
          </p>
        </div>
        <aside className="observatory-index-legend" aria-labelledby="observatory-legend-title">
          <h2 id="observatory-legend-title">Как устроены материалы</h2>
          <dl>
            <div>
              <dt>Контекст</dt>
              <dd>что происходит</dd>
            </div>
            <div>
              <dt>Связи</dt>
              <dd>что с чем связано</dd>
            </div>
            <div>
              <dt>Структура</dt>
              <dd>как это устроено</dd>
            </div>
            <div>
              <dt>Возможное действие</dt>
              <dd>что можно сделать</dd>
            </div>
          </dl>
          <a className="observatory-materials-link" href="#materials">
            Перейти к материалам <span aria-hidden="true">↓</span>
          </a>
        </aside>
      </section>

      <section
        className="observatory-index-list page-shell"
        id="materials"
        aria-label="Все материалы Observatory"
      >
        {featuredMaterial.kind === "longread" ? (
          <LongreadFeature variant="index" />
        ) : (
          <ObservatoryArticleCard
            article={featuredMaterial.article}
            featured
            variant="index"
          />
        )}
        {articlesByNewest.map((article) => (
          <ObservatoryArticleCard article={article} key={article.slug} variant="index" />
        ))}
      </section>

      <div className="observatory-index-return page-shell">
        <Link href="/#thinking">← Вернуться к Living System</Link>
      </div>

      <SiteFooter />
    </main>
  );
}
