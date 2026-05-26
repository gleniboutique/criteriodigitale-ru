import LegalLayout from "../components/LegalLayout";

export default function CookiePage() {
  return (
    <LegalLayout
      eyebrow="Документы · Cookies"
      title="Cookie Policy"
      updated="Версия 1.0 · последнее обновление: 18 мая 2026"
    >
      <section className="copy-block-mute">
        <p className="text-ink text-lg md:text-xl mb-3">
          <em>Этот сайт практически не использует cookies.</em>
        </p>
        <p>
          Нет трекинга, нет аналитики, нет рекламных или маркетинговых
          cookies — поэтому вы не видите классический баннер согласия.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">Что НЕ используется</h2>
        <ul className="list-none space-y-1 pl-0 my-4">
          <li>— Google Analytics или любые другие трекеры</li>
          <li>— Cookies профилирования</li>
          <li>— Facebook Pixel / Meta-теги</li>
          <li>— Рекламные сети и ретаргетинг</li>
          <li>— A/B-тестирование и сбор поведения</li>
        </ul>
      </section>

      <section>
        <h2 className="display-3 mb-4">Что используется</h2>
        <p>
          Сайт размещён на платформе <strong>Vercel</strong>, которая может
          устанавливать <strong>строго технические cookies</strong> для работы
          сервиса (защита от атак, корректная отдача страниц, обеспечение
          безопасности соединения).
        </p>

        <div className="overflow-x-auto mt-6 mb-2">
          <table className="w-full text-sm border border-ink/15">
            <thead className="bg-paper-2">
              <tr>
                <th className="text-left p-3 font-medium text-ink border-b border-ink/15">Cookie</th>
                <th className="text-left p-3 font-medium text-ink border-b border-ink/15">Назначение</th>
                <th className="text-left p-3 font-medium text-ink border-b border-ink/15">Срок</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-ink/10">
                <td className="p-3 font-mono text-xs">__vercel_live_token</td>
                <td className="p-3">Технический cookie платформы хостинга</td>
                <td className="p-3">Сессия</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">_vercel_no_cache</td>
                <td className="p-3">Управление кэшем для актуальной версии страницы</td>
                <td className="p-3">Сессия</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-mute italic">
          Эти cookies — строго технически необходимые. По art. 122 итальянского
          Codice Privacy согласия пользователя для них не требуется.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">IP-адрес и логи</h2>
        <p>
          Vercel автоматически записывает IP-адреса в технические логи доступа —
          это нужно для защиты от атак и устранения сбоев. IP не используется
          для профилирования, не передаётся третьим лицам в маркетинговых целях
          и удаляется в течение короткого срока.
        </p>
      </section>

      <section>
        <h2 className="display-3 mb-4">Как управлять cookies в браузере</h2>
        <p>Вы можете очистить или заблокировать cookies в настройках браузера:</p>
        <ul className="list-none space-y-1 pl-0 my-4 text-sm">
          <li>— <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
          <li>— <a href="https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li>— <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li>— <a href="https://support.microsoft.com/microsoft-edge/" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        <p className="text-sm text-mute italic">
          Блокировка технических cookies может нарушить работу сайта.
        </p>
      </section>

      <section className="copy-block-mute">
        <p className="eyebrow mb-3">Правовая база</p>
        <ul className="list-none space-y-1 pl-0 text-sm">
          <li>— Regolamento UE 2016/679 (GDPR)</li>
          <li>— D.Lgs. 196/2003 (Codice Privacy) — art. 122</li>
          <li>— Provvedimento Garante n. 231/2021 — Linee guida cookie</li>
          <li>— Direttiva 2002/58/CE (ePrivacy)</li>
        </ul>
        <p className="text-sm mt-4">
          Полная информация о персональных данных — в{" "}
          <a href="/privacy">Политике конфиденциальности</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
