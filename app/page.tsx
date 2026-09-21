import Image from "next/image";
import Link from "next/link";
import LongreadFeature from "@/components/LongreadFeature";
import ObservatoryArticleCard from "@/components/ObservatoryArticleCard";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SystemMap from "@/components/SystemMap";
import { homepageMetadata } from "@/config/metadata";
import { homepageRecognition } from "@/content/phaseOne";
import {
  getFeaturedObservatoryMaterial,
  getLatestObservatoryArticles,
} from "@/content/observatoryDisplay";
import { createPageStructuredData, websiteStructuredData } from "@/content/structured-data";
import styles from "./page.module.css";

const { title, description } = homepageMetadata;

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
          <h1 id="home-title">
            <span>Понять, что действительно нужно.</span>{" "}
            <span>И сделать следующий шаг.</span>
          </h1>
        </div>
        <div className={styles.heroLead}>
          <p><strong className={styles.leadOpening}>Можно прийти без готового проекта</strong> — с опытом, материалами, идеей или делом, которому ещё предстоит найти подходящую форму.</p>
          <p><strong className={styles.systemOpening}>Можно прийти и с уже работающей системой</strong>: когда решения продолжают возвращаться к вам, сайт не передаёт ценность, ИИ только собираются покупать или уже внедрили, а его польза остаётся неясной.</p>
          <p><strong className={styles.rulesOpening}>Отдельный класс задач</strong> — понять, как определённые требования к ИИ должны работать внутри организации: в ролях, решениях, человеческом контроле, исключениях и ответственности.</p>
          <p className={styles.approachNote}>Я соединяю внимание к человеку и тому, что для него важно, с системным рассмотрением ситуации, фактами и практической работой. Вместе определяем, что имеет смысл делать дальше. Согласованную часть я могу выполнить сама, если она находится в пределах моей компетенции.</p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryLink} href="#situations">
              Найти свою ситуацию <span aria-hidden="true">↓</span>
            </Link>
            <Link className={styles.secondaryLink} href="/contact">
              Рассказать о своей ситуации <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className={styles.systemMap}>
          <SystemMap />
        </div>
      </section>

      <div className={styles.conceptRail} aria-label="Логика работы">
        <div className="page-shell">
          <span>FIELD</span><i /><span>RELATIONS</span><i /><span>STRUCTURE</span><i /><span>POSSIBLE ACTION</span>
        </div>
      </div>

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
            <h2 id="principle-title">Сначала понять ситуацию. Потом решать, что делать.</h2>
          </header>
          <div className={styles.principleBody}>
            <p>Не каждый человек приходит с уже сформулированной задачей.</p>
            <p>Иногда сначала нужно понять, чему вообще стоит дать форму. Иногда задача уже существует, но один и тот же симптом может иметь разные причины. Иногда нужно не искать причину, а принять решение: покупать ли ИИ, продолжать ли пилот или как перевести уже определённое требование в рабочие правила.</p>
            <p>Поэтому я не начинаю автоматически ни с личной консультации, ни с инструмента, ни с готовой услуги.</p>
            <p>В зависимости от ситуации мы можем:</p>
            <ul>
              <li>прояснить, что для вас действительно важно и какую задачу стоит ставить;</li>
              <li>рассмотреть связи, ограничения и реальные факты;</li>
              <li>различить несколько возможных объяснений;</li>
              <li>определить решение или изменение, которое имеет смысл проверить;</li>
              <li>согласовать практическую часть, которую я могу выполнить сама;</li>
              <li>остановиться и передать следующий этап другому специалисту, если он требует другой компетенции.</li>
            </ul>
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
          <h2 id="boundary-title">Можно обратиться и до готовой задачи, и после уже принятого решения</h2>
        </header>
        <div className={styles.boundaryBody}>
          <p>Можно прийти с опытом, идеей или материалами, которым ещё предстоит найти форму.</p>
          <p>Можно — когда работающая команда, сайт, процесс или ИИ не дают ожидаемого результата.</p>
          <p>Можно — когда нужно решить, стоит ли вообще использовать ИИ, продолжать пилот или масштабировать его.</p>
          <p>Можно — когда требования к ИИ уже определены, но их ещё нужно превратить в роли, контроль, исключения и ответственность.</p>
          <p>Дальше мы определяем ближайший осмысленный шаг. Если я могу выполнить практическую часть сама, её границы согласуем отдельно. Если нужна иная профессиональная компетенция, это тоже должно стать ясным результатом.</p>
          <Link href="/rabota-s-criterio-digitale">С чем можно обратиться <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className={styles.trust} aria-labelledby="trust-title">
        <div className={`${styles.trustInner} page-shell`}>
          <header>
            <span>05 / Trust</span>
            <h2 id="trust-title">Татьяна Мирошина</h2>
          </header>
          <figure className={styles.humanNote}>
            <Image
              src="/images/photo-04-authentic.webp"
              alt="Татьяна Мирошина на улице в осеннем городе."
              width={640}
              height={853}
              sizes="(max-width: 780px) 48vw, 190px"
            />
            <figcaption>
              <span>Human note / 06.1</span>
              <em>Человек внутри наблюдения</em>
            </figcaption>
          </figure>
          <div>
            <p>Мой подход вырос из практического опыта с продуктом, производством, международными онлайн-продажами, цифровыми системами и реальными рабочими процессами.</p>
            <p>Экзистенциально-аналитическое консультирование помогает мне удерживать в центре человека, его значимое, выбор и обстоятельства. Системное мышление помогает видеть связи, ограничения и последствия решений. Практический digital-опыт и работа с ИИ позволяют не останавливаться на обсуждении там, где я могу сама участвовать в осуществлении решения.</p>
            <p><strong>«Цифровой критерий»</strong> соединяет эти стороны работы, но не сводит все задачи к одной модели обращения.</p>
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
