import LegalLayout from "../components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Документы · Конфиденциальность"
      title="Политика конфиденциальности"
      updated="Версия 1.0 · последнее обновление: 18 мая 2026"
    >
      <section className="copy-block-mute">
        <p className="text-ink text-lg md:text-xl mb-3">
          <em>Этот сайт собирает минимум данных.</em>
        </p>
        <p>
          Только то, что вы сами решаете прислать, когда пишете мне.
          Без трекинга, без профилирования, без рекламных cookies.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">1 · Кто я</h2>
        <p>
          <strong>Татьяна Мирошина</strong> — независимый специалист (Italia).
          Работаю в режиме prestazione occasionale (без P.IVA, налоги уплачиваются
          через персональные обязательства). Свой codice fiscale в публичный
          доступ не выкладываю по соображениям безопасности — могу предоставить
          по официальному запросу через email.
        </p>
        <p>
          <strong>Адрес для переписки:</strong>{" "}
          <a href="mailto:pc@gleni.it">pc@gleni.it</a>
        </p>
        <p className="text-sm text-mute italic mt-2">
          DPO (Data Protection Officer) не назначен: масштаб обработки данных
          не требует этого по GDPR art. 37.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">2 · Какие данные собираю</h2>
        <p>
          Сайт <strong>сам по себе ничего не собирает</strong> — нет форм, нет
          регистрации, нет аналитики. Данные появляются только если вы пишете
          мне на email или в Telegram.
        </p>

        <div className="copy-block-mute mt-6">
          <p className="eyebrow mb-3">Если вы пишете на email</p>
          <p>
            Я получаю: ваш email-адрес, текст сообщения, имя (если указано).
          </p>
          <p className="text-sm text-mute mt-3">
            <strong>Цель:</strong> ответить вам, продолжить разговор.<br />
            <strong>Правовое основание:</strong> исполнение преддоговорных мер
            (GDPR art. 6.1.b).<br />
            <strong>Срок хранения:</strong> 12 месяцев с момента последнего
            сообщения, далее — удаление.
          </p>
        </div>

        <div className="copy-block-mute mt-5">
          <p className="eyebrow mb-3">Если пишете в Telegram</p>
          <p>
            Я получаю содержание ваших сообщений и ваш Telegram-username.
            Сама переписка хранится также у Telegram согласно{" "}
            <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer">
              их политике конфиденциальности
            </a>{" "}
            — на это я не могу влиять.
          </p>
        </div>
      </section>

      <section>
        <h2 className="display-3 mb-4">3 · Cookies и технические данные</h2>
        <p>Сайт <strong>не использует</strong>:</p>
        <ul className="list-none space-y-1 pl-0 my-4">
          <li>— Google Analytics или любые трекеры</li>
          <li>— Cookies для профилирования</li>
          <li>— Facebook Pixel / Meta-теги</li>
          <li>— Рекламные сети</li>
        </ul>
        <p>
          Хостинг — <strong>Vercel Inc. (США)</strong>. Vercel может устанавливать
          технические cookies для работы сайта и собирать обезличенные логи
          доступа (IP, время запроса) в течение короткого времени для защиты
          от атак. Это исключительно техническая необходимость, согласия
          по art. 122 Codice Privacy не требует.
        </p>
        <p>
          Детали — в <a href="/cookie">Cookie Policy</a>.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">4 · Передача данных за пределы ЕС</h2>
        <p>
          Хостинг сайта (Vercel) и почтовая инфраструктура (Google) находятся
          в США. Передача данных осуществляется на основе стандартных
          договорных условий (SCC), утверждённых Европейской Комиссией.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">5 · С кем делюсь данными</h2>
        <p>
          <strong>Ни с кем не делюсь</strong> для рекламы, маркетинга
          или продажи. Передача данных возможна только:
        </p>
        <ul className="list-none space-y-1 pl-0 my-4">
          <li>— Поставщикам инфраструктуры (Vercel, Google — только для работы сервиса)</li>
          <li>— Бухгалтеру/налоговой при необходимости (только для исполнения налоговых обязательств)</li>
          <li>— Государственным органам при законном запросе</li>
        </ul>
      </section>

      <section>
        <h2 className="display-3 mb-4">6 · Ваши права</h2>
        <p>По GDPR у вас есть права на:</p>
        <ul className="list-none space-y-2 pl-0 my-4">
          <li><strong>— Доступ</strong> — узнать, какие ваши данные у меня есть</li>
          <li><strong>— Исправление</strong> — если данные неточные</li>
          <li><strong>— Удаление</strong> («право быть забытым»)</li>
          <li><strong>— Ограничение обработки</strong></li>
          <li><strong>— Переносимость</strong> — получить данные в машиночитаемом виде</li>
          <li><strong>— Возражение</strong> против обработки</li>
        </ul>
        <p>
          Чтобы воспользоваться любым из этих прав — напишите на{" "}
          <a href="mailto:pc@gleni.it?subject=GDPR%20запрос">pc@gleni.it</a> с
          темой «GDPR запрос». Отвечу в течение 30 дней.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">7 · Жалоба регулятору</h2>
        <p>
          Если считаете, что я нарушаю ваши права, можете подать жалобу
          итальянскому регулятору защиты данных:
        </p>
        <p className="text-sm">
          <strong>Garante per la Protezione dei Dati Personali</strong><br />
          Piazza Venezia 11 — 00187 Roma<br />
          Email: <a href="mailto:garante@gpdp.it">garante@gpdp.it</a><br />
          Сайт: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">8 · Изменения</h2>
        <p>
          Эта политика может обновляться при изменении законов или сервисов.
          Версия документа и дата обновления — в самом верху страницы.
        </p>
      </section>

      <section className="copy-block-mute">
        <p className="eyebrow mb-3">Правовая база</p>
        <ul className="list-none space-y-1 pl-0 text-sm">
          <li>— Regolamento UE 2016/679 (GDPR) — artt. 12, 13, 14</li>
          <li>— D.Lgs. 196/2003 (Codice Privacy italiano) — art. 122</li>
          <li>— Provvedimento Garante n. 231/2021 — Linee guida cookie</li>
          <li>— Direttiva 2002/58/CE (ePrivacy)</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
