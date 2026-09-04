import Link from "next/link";
import LongreadFeature from "@/components/LongreadFeature";
import ObservatoryArticleCard from "@/components/ObservatoryArticleCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { homepageRecognition } from "@/content/phaseOne";
import {
  getFeaturedObservatoryMaterial,
  getLatestObservatoryArticles,
} from "@/content/observatoryDisplay";
import { createPageStructuredData, websiteStructuredData } from "@/content/structured-data";
import styles from "./page.module.css";

const title = "Criterio Digitale — когда решение уже есть, а проблема осталась";
const description = "Люди, сайт, автоматизация или ИИ уже есть, но проблема осталась? Criterio Digitale помогает сначала различить причины и факты, а потом выбирать следующий шаг.";

export default function Home() {
  const featuredMaterial = getFeaturedObservatoryMaterial();
  const latestMaterials = getLatestObservatoryArticles(2);
  const pageStructuredData = createPageStructuredData({
    type: "WebPage",
    path: "/",
    name: title,
    description,
  });

  return (
    <main id="top">
      <SiteHeader currentPath="/" hasLanguageCounterpart />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className={`${styles.hero} page-shell`} aria-labelledby="home-title">
        <div className={styles.heroHeading}>
          <h1 id="home-title">Решение уже есть. Почему проблема осталась?</h1>
          <Link className={styles.primaryLink} href="#situations">
            Найти свою ситуацию <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <div className={styles.heroLead}>
          <p>Людей стало больше. Появились инструкции и инструменты. Сайт уже переделывали. ИИ внедрили или только собираются покупать. Требования записали.</p>
          <p>Но ожидаемого изменения не произошло.</p>
          <p>Criterio Digitale работает с такими ситуациями: когда прежде чем снова нанимать, автоматизировать, переделывать сайт или покупать ИИ, нужно понять, <strong>что именно осталось неизменным и почему</strong>.</p>
        </div>
        <div className={styles.heroMap} aria-hidden="true">
          <span>FIELD</span><i /><span>RELATIONS</span><i /><span>STRUCTURE</span><i /><span>POSSIBLE ACTION</span>
        </div>
      </section>

      <section className={`${styles.recognition} page-shell`} id="situations" aria-labelledby="situations-title">
        <header className={styles.sectionHeader}>
          <span>01</span>
          <h2 id="situations-title">С какой ситуацией вы пришли?</h2>
        </header>
        <div className={styles.recognitionList}>
          {homepageRecognition.map((item, index) => (
            <article className={styles.recognitionItem} key={item.href}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <Link href={item.href}>{item.label} <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.principle} aria-labelledby="principle-title">
        <div className={`${styles.principleInner} page-shell`}>
          <header className={styles.sectionHeaderLight}>
            <span>02</span>
            <h2 id="principle-title">Сначала различить причины</h2>
          </header>
          <div className={styles.principleBody}>
            <p>Один и тот же симптом может возникать по разным причинам.</p>
            <p>Поэтому я не начинаю с вопроса:</p>
            <blockquote>«Что внедрить?»</blockquote>
            <p>Сначала нужно понять:</p>
            <ul>
              <li>что действительно происходит;</li>
              <li>какие причины могут дать тот же результат;</li>
              <li>какие факты помогут их различить;</li>
              <li>какой следующий шаг после этого оправдан.</li>
            </ul>
            <p>Иногда это работа с Criterio Digitale.</p>
            <p>Иногда — другой специалист.</p>
            <p>Иногда — ещё один этап самостоятельной проверки.</p>
            <Link href="/kak-ya-rabotayu">Как я работаю <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={`${styles.selfCheck} page-shell`} aria-labelledby="self-check-title">
        <header className={styles.sectionHeader}>
          <span>03</span>
          <h2 id="self-check-title">Что можно проверить самостоятельно</h2>
        </header>
        <div className={styles.selfCheckBody}>
          <article>
            <h3>Observatory</h3>
            <p>В Observatory собраны материалы о ситуациях, где привычный ответ появляется раньше, чем мы успеваем проверить сам вопрос.</p>
            <Link href="/observatory">Перейти к наблюдениям <span aria-hidden="true">→</span></Link>
          </article>
          <article className={styles.aiActNote}>
            <h3>Checklist AI Act</h3>
            <p>Если ваша работа, компания, продукт или сценарий использования ИИ связаны с Европейским союзом, можно начать с самостоятельной проверки по <strong>Checklist AI Act 2026</strong>.</p>
            <p>Он помогает увидеть открытые вопросы и понять, где может потребоваться профессиональная проверка.</p>
            <p>Checklist не является юридическим заключением.</p>
            <Link href="/checklist-ai-act">Открыть Checklist AI Act <span aria-hidden="true">→</span></Link>
          </article>
        </div>
      </section>

      <section className={`${styles.boundary} page-shell`} aria-labelledby="boundary-title">
        <header className={styles.sectionHeader}>
          <span>04</span>
          <h2 id="boundary-title">Когда нужна внешняя работа</h2>
        </header>
        <div className={styles.boundaryBody}>
          <p>Внешняя работа становится оправданной, когда несколько правдоподобных объяснений всё ещё конкурируют между собой и для решения нужны реальные факты из вашей системы.</p>
          <p>Но Criterio Digitale нужна не всегда.</p>
          <p>Если уже ясно, что нужен новый сотрудник, обучение, техническая доработка сайта, автоматизация, интегратор ИИ или юридическая консультация, правильнее идти сразу к профильному специалисту.</p>
          <p>Задача Criterio Digitale — помочь определить <strong>правильный следующий класс действия</strong>, а не удерживать каждую проблему внутри своей работы.</p>
          <Link href="/rabota-s-criterio-digitale">Когда имеет смысл работа со мной <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className={styles.trust} aria-labelledby="trust-title">
        <div className={`${styles.trustInner} page-shell`}>
          <header>
            <span>05 / Trust</span>
            <h2 id="trust-title">Татьяна Мирошина</h2>
          </header>
          <div>
            <p>Мой подход вырос из практического опыта с продуктом, производством, международными онлайн-продажами, цифровыми системами и бизнес-процессами.</p>
            <p>Позже к этому добавились системное мышление и работа с ИИ.</p>
            <p>Criterio Digitale соединяет эти области там, где нужно понять не только <strong>что можно сделать</strong>, но и <strong>что действительно должно измениться в реальной системе</strong>.</p>
            <nav aria-label="Узнать больше о подходе">
              <Link href="/obo-mne">Обо мне <span aria-hidden="true">→</span></Link>
              <Link href="/kak-ya-rabotayu">Как я работаю <span aria-hidden="true">→</span></Link>
            </nav>
          </div>
        </div>
      </section>

      <section className="section observatory" id="thinking" aria-labelledby="observatory-title">
        <div className="page-shell observatory-inner">
          <div className="section-meta section-meta-light">
            <span>06</span>
            <span>Наблюдения</span>
          </div>
          <header className="observatory-home-heading">
            <p className="kicker kicker-light">Observatory</p>
            <h2 id="observatory-title">Наблюдения, которые помогают точнее поставить вопрос</h2>
            <p className={styles.observatoryIntro}>Материалы о цифровых системах, ИИ, решениях и человеческом суждении — особенно там, где формально правильный ответ ещё не означает, что проблема решена.</p>
          </header>
          <div className="observatory-feature-slot" aria-label="Главный материал Observatory">
            {featuredMaterial.kind === "longread" ? (
              <LongreadFeature variant="home" />
            ) : (
              <ObservatoryArticleCard article={featuredMaterial.article} featured variant="home" />
            )}
          </div>
          <div className="observatory-latest-grid" aria-label="Последние материалы Observatory">
            {latestMaterials.map((article) => (
              <ObservatoryArticleCard article={article} key={article.slug} variant="home" />
            ))}
          </div>
          <Link className="observatory-index-link" href="/observatory">Все наблюдения →</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
