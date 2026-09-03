import Image from "next/image";
import Link from "next/link";
import LongreadFeature from "@/components/LongreadFeature";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SystemMap from "@/components/SystemMap";
import { getReadingLabel, observatoryArticles } from "@/content/observatory";
import { websiteStructuredData } from "@/content/structured-data";

const entryPoints = [
  ["01", "Нужно что-то конкретно сделать.", "Задача уже видна, но ещё неясно, как лучше её собрать и чем реализовать."],
  ["02", "Непонятно, что именно нужно делать.", "Факторов, людей и ограничений много. Сначала нужно увидеть саму задачу."],
  ["03", "Вариантов стало слишком много.", "Возможности множатся быстрее, чем критерии, по которым их можно выбирать."],
  ["04", "Инструментов больше, но система не лучше.", "Новый сервис не исправляет связи, которые не были замечены."],
  ["05", "Есть идея, но нет работающей формы.", "Компетенцию, продукт или процесс нужно превратить в понятную цифровую систему."],
  ["06", "Нужно понять, где AI действительно поможет.", "Не добавить AI по инерции, а найти для него точное место и границы."],
];

const method = [
  ["01", "контекст", "Что уже происходит"],
  ["02", "отношения", "Что на что влияет"],
  ["03", "варианты", "Что может быть иначе"],
  ["04", "критерии", "Что важно сохранить"],
  ["05", "структура", "Что удержит целое"],
  ["06", "инструменты", "Что уместно применить"],
  ["07", "действие", "Что можно проверить"],
];

const outcomeFamilies = [
  ["01", "Решение", ["стратегическая карта", "критерии выбора", "выбранное направление", "следующие действия"]],
  ["02", "Система", ["структура продукта", "архитектура процесса", "workflow", "документация", "система работы"]],
  ["03", "Реализация", ["landing / сайт", "AI-assisted workflow", "автоматизация", "цифровые инструменты"]],
];

const trajectory = [
  ["01", "PRODUCT"],
  ["02", "CRAFT / PRODUCTION"],
  ["03", "INTERNATIONAL E-COMMERCE"],
  ["04", "DIGITAL"],
  ["05", "PROCESSES"],
  ["06", "SYSTEMS"],
  ["07", "AI"],
  ["08", "HUMAN LAYER"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const selectedMaterials = observatoryArticles.filter((article) => article.selected);

  return (
    <main id="top">
      <SiteHeader hasLanguageCounterpart />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <section className="hero page-shell" aria-labelledby="hero-title">
        <div className="hero-heading">
          <p className="eyebrow">Системы&nbsp;&nbsp;/&nbsp;&nbsp;AI&nbsp;&nbsp;/&nbsp;&nbsp;человек</p>
          <h1 id="hero-title">
            <span>Сначала увидеть,</span>
            <span>что действительно</span>
            <span>происходит.</span>
          </h1>
        </div>

        <div className="hero-map">
          <SystemMap />
        </div>

        <div className="hero-statement">
          <p className="hero-second">Потом решать,<br />что с этим делать.</p>
          <p className="lede">
            Помогаю экспертам и небольшим проектам разобраться в сложной задаче —
            особенно когда непонятно, что именно менять, что выбирать и нужен ли
            вообще новый инструмент. После этого собираем решение, которое можно
            реально выполнить: от продукта и процессов до digital и AI.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">
              Принести задачу <Arrow />
            </Link>
            <a className="text-link" href="#work">Как я работаю</a>
          </div>
        </div>

        <aside className="hero-proof" aria-label="Опыт и область практики">
          <span>20+ лет собственной практики</span>
          <span>предпринимательство / digital / systems</span>
          <span>AI / human layer</span>
        </aside>
      </section>

      <div className="concept-rail" aria-label="Логика работы">
        <div className="page-shell">
          <span>FIELD</span><i />
          <span>RELATIONS</span><i />
          <span>STRUCTURE</span><i />
          <span>POSSIBLE ACTION</span>
        </div>
      </div>

      <section className="section situations page-shell" id="work">
        <div className="section-meta">
          <span>01</span>
          <span>Точки входа</span>
        </div>
        <header className="situations-head">
          <p className="kicker">Что ко мне обычно приносят</p>
          <h2>Не всегда задача уже имеет правильное название.</h2>
          <p className="section-aside">
            Можно прийти с точным запросом, смутным ощущением или противоречивым полем.
            Название появится в процессе различения.
          </p>
        </header>

        <ol className="situation-list">
          {entryPoints.map(([number, title, body]) => (
            <li className={number === "01" ? undefined : "situation-featured"} key={number}>
              <span className="item-number">{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section method-wrap" aria-labelledby="method-title">
        <div className="page-shell method">
          <div className="section-meta section-meta-light">
            <span>02</span>
            <span>Способ работы</span>
          </div>
          <header className="method-head">
            <p className="kicker kicker-light">Я не начинаю с инструмента</p>
            <h2 id="method-title">Инструмент — следствие понимания, а не начало работы.</h2>
            <p className="method-signature">Living System / способ работы</p>
          </header>

          <ol className="method-route" aria-label="Последовательность метода">
            {method.map(([number, title, note]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <small>{note}</small>
              </li>
            ))}
          </ol>

          <div className="method-note">
            <span>Положение AI / 06.1</span>
            <p>AI может появиться внутри этой системы. Но он не обязан быть её центром.</p>
          </div>
        </div>
      </section>

      <section className="section outcomes page-shell" aria-labelledby="outcomes-title">
        <div className="section-meta">
          <span>03</span>
          <span>Рабочая форма</span>
        </div>
        <header className="outcomes-head">
          <p className="kicker">Что появляется на выходе</p>
          <h2 id="outcomes-title">Не пакет услуг.<br />Форма, нужная этой реальности.</h2>
          <p>
            Результат может быть мыслительным, организационным или цифровым.
            Иногда это система целиком. Иногда — одно достаточно обоснованное действие.
          </p>
        </header>

        <div className="outcome-families">
          {outcomeFamilies.map(([number, title, items]) => (
            <section className="outcome-family" key={String(title)}>
              <div>
                <span>{String(number)}</span>
                <h3>{String(title)}</h3>
              </div>
              <ul>
                {(items as string[]).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="section human-wrap" aria-labelledby="human-title">
        <div className="page-shell human">
          <div className="section-meta">
            <span>04</span>
            <span>Human layer</span>
          </div>
          <p className="kicker">Человек внутри системы</p>
          <h2 id="human-title">В любой системе<br />остаётся человек.</h2>

          <div className="human-body">
            <p className="human-lead">
              Поэтому меня интересует не только «можно ли это автоматизировать»,
              но и что человек хочет сохранить за собой.
            </p>
            <div className="human-boundary" aria-label="Критерии человеческого слоя">
              <span>Граница решения / 04.8</span>
              <p>Что мы получаем — и какой ценой.</p>
              <p>Сколько это требует времени, внимания и энергии.</p>
              <p>Что человек хочет оставить под своим контролем — и где проходит граница автономии.</p>
              <p>Что можно делегировать, а что — автоматизировать.</p>
              <p>Где AI помогает, а где начинает подменять человеческое суждение.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section trajectory page-shell" id="experience" aria-labelledby="trajectory-title">
        <div className="section-meta">
          <span>05</span>
          <span>Траектория</span>
        </div>
        <header className="trajectory-head">
          <p className="kicker">Почему я так работаю</p>
          <h2 id="trajectory-title">
            Опыт не как список должностей. Как эволюция способа видеть целое.
          </h2>
        </header>

        <ol className="trajectory-path" aria-label="Траектория опыта">
          {trajectory.map(([number, label]) => (
            <li key={number}>
              <span>{number}</span>
              <strong>{label}</strong>
            </li>
          ))}
        </ol>

        <div className="trajectory-ground">
          <figure className="trajectory-portrait">
            <Image
              src="/images/photo-02-editorial.webp"
              alt="Татьяна Мирошина делает записи за круглым деревянным столом под аркой."
              width={800}
              height={1153}
              sizes="(max-width: 780px) 82vw, (max-width: 1100px) 38vw, 420px"
            />
            <figcaption>
              <span>Field note / 05.2</span>
              <em>20+ лет собственной практики</em>
            </figcaption>
          </figure>

          <div className="trajectory-context">
            <p className="trajectory-copy">
              Этот способ мышления вырос из практики, где продукт нужно было не только придумать,
              но и произвести, вывести на международный рынок и удержать внутри сложных процессов.
            </p>
            <div className="trajectory-evidence" aria-label="Опыт, сформировавший подход">
              <p><span>01</span>Собственный продуктовый бренд, производство и многолетняя работа с ремесленными мастерскими.</p>
              <p><span>02</span>Международные B2B и B2C продажи и управление четырьмя интернет-магазинами на разных языках.</p>
              <p><span>03</span>Самостоятельная работа с сайтами, SEO, digital marketing и процессами; экспертиза CITES и опыт в сложной регуляторной среде.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section observatory" id="thinking" aria-labelledby="observatory-title">
        <div className="page-shell observatory-inner">
          <div className="section-meta section-meta-light">
            <span>06</span>
            <span>Наблюдения</span>
          </div>
          <header>
            <p className="kicker kicker-light">Исследования / мастерская / наблюдения</p>
            <h2 id="observatory-title">
              Смотреть не только на инструменты, но и на то, как они меняют способ думать и действовать.
            </h2>
          </header>
          <div className="observatory-materials" aria-label="Материалы Observatory">
            <LongreadFeature variant="home" />
            {selectedMaterials.map((article) => (
              <article key={article.slug}>
                <Link className="observatory-preview" href={`/observatory/${article.slug}`}>
                  <div className="observatory-preview-label">
                    <span>Observatory / {article.number}</span>
                    <small>{article.category}</small>
                  </div>
                  <h3>{article.title}</h3>
                  <p className="observatory-preview-lead">{article.lead}</p>
                  <div className="observatory-preview-meta">
                    <span>{getReadingLabel(article)}</span>
                    <strong>Читать →</strong>
                  </div>
                </Link>
              </article>
            ))}
            <Link className="observatory-index-link" href="/observatory">
              Все материалы →
            </Link>
            <p className="observatory-future">
              Здесь появляются исследования, наблюдения, Мастерская AI,
              тексты и эксперименты.
            </p>
            <aside
              className="observatory-resource-entry"
              aria-labelledby="ai-act-entry-title"
            >
              <h3 id="ai-act-entry-title">Работаете в ЕС или с европейским рынком?</h3>
              <p>
                Русская версия EU AI Act checklist помогает провести первый скрининг,
                если компания, работа или AI-сценарий связаны с ЕС. Важны организация,
                рынок и то, где используются система и её результат.
              </p>
              <Link href="/checklist-ai-act">Проверить свой случай →</Link>
            </aside>
            <figure className="observatory-note">
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
          </div>
        </div>
      </section>

      <section className="section engagement-wrap" id="start" aria-labelledby="engagement-title">
        <div className="page-shell engagement">
          <div className="section-meta">
            <span>07</span>
            <span>Начать работу</span>
          </div>
          <header className="engagement-head">
            <p className="kicker">От первого разговора к действию</p>
            <h2 id="engagement-title">Как можно начать работу.</h2>
            <p>
              Последовательность может закончиться после основного модуля или продолжиться
              сопровождением и реализацией — только если это действительно нужно задаче.
            </p>
          </header>

          <div className="engagement-path">
            <article className="engagement-intro">
              <div className="path-index">
                <span>01</span>
                <small>Знакомство</small>
              </div>
              <div className="intro-title">
                <h3>Знакомство</h3>
                <p>30 минут · бесплатно</p>
              </div>
              <div className="intro-copy">
                <p>
                  Короткая встреча, чтобы познакомиться, обозначить ситуацию и понять,
                  подходит ли задача формату работы.
                </p>
                <p className="boundary-note">
                  За эти 30 минут мы обозначим контур ситуации и поймём,
                  есть ли здесь задача для совместной работы.
                </p>
                <Link className="button button-primary" href="/contact">
                  Обсудить задачу <Arrow />
                </Link>
              </div>
            </article>

            <div className="path-connector" aria-hidden="true"><span>↓</span></div>

            <article className="engagement-core">
              <div className="core-label">
                <span>02 / Основной модуль</span>
                <small>Центр маршрута</small>
              </div>
              <header className="core-head">
                <h3>От задачи<br />к решению</h3>
                <div className="core-price">
                  <strong>600&nbsp;€</strong>
                  <small>В другой валюте — эквивалент на день оплаты.</small>
                </div>
              </header>

              <div className="core-description">
                <p>
                  Мы разбираем исходную ситуацию, формулируем реальную задачу, выявляем
                  ограничения и ресурсы, рассматриваем варианты, формируем критерии выбора
                  и принимаем решение, которое можно реально выполнить.
                </p>
                <blockquote>
                  Цель — определить минимальный результат, после которого ситуация
                  действительно изменилась.
                </blockquote>
                <p className="core-duration">
                  Обычно работа занимает до 4 рабочих встреч в течение примерно 4–6 недель.
                </p>
              </div>

              <div className="decision-map">
                <p className="decision-map-label">Итоговый артефакт</p>
                <h4>Рабочая карта решения</h4>
                <p className="decision-map-intro">Она включает:</p>
                <ul>
                  <li>исходную ситуацию</li>
                  <li>сформулированную задачу</li>
                  <li>ограничения и ресурсы</li>
                  <li>рассмотренные варианты</li>
                  <li>критерии выбора</li>
                  <li>принятое решение</li>
                  <li>минимальный выполнимый результат</li>
                  <li>следующие шаги</li>
                  <li>инструменты, если они нужны</li>
                </ul>
              </div>

            </article>

            <div className="path-connector path-connector-branch" aria-hidden="true">
              <span>↓</span>
              <small>Продолжение при необходимости</small>
            </div>

            <div className="engagement-branches">
              <article className="engagement-branch">
                <div className="path-index">
                  <span>03A</span>
                  <small>Сопровождение</small>
                </div>
                <h3>Продолжение работы</h3>
                <p className="branch-price">Сопровождение — от 300&nbsp;€ / месяц.</p>
                <p className="branch-price">Для более сложной и вовлечённой работы — от 600&nbsp;€ / месяц.</p>
                <p>Объём участия и рабочий лимит определяются заранее.</p>
              </article>

              <article className="engagement-branch engagement-branch-realization">
                <div className="path-index">
                  <span>03B</span>
                  <small>Реализация</small>
                </div>
                <h3>Реализация</h3>
                <p className="branch-price">Стоимость определяется отдельно.</p>
                <p>
                  Если после этапа проектирования нужна непосредственная реализация — сайт,
                  цифровой продукт, AI-workflow, автоматизация, процесс или другая система —
                  объём, сроки и стоимость определяются отдельно.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta page-shell" id="contact" aria-labelledby="contact-title">
        <div className="section-meta">
          <span>08</span>
          <span>Начало</span>
        </div>
        <p className="eyebrow">Start where it is unclear</p>
        <h2 id="contact-title">Не уверены, как называется ваша задача?</h2>
        <p className="final-answer">Можно начать с этого.</p>
        <Link className="button button-primary" href="/contact">
          Обсудить задачу <Arrow />
        </Link>
        <aside>
          <span>Можно начать без готового ТЗ</span>
          <span>Контекст важнее формулировки</span>
          <span>Первое действие — увидеть поле</span>
        </aside>
      </section>

      <SiteFooter />
    </main>
  );
}
