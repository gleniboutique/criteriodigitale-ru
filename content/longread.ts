import { readFileSync } from "node:fs";
import path from "node:path";
import { countRussianWords, READING_WORDS_PER_MINUTE } from "@/content/observatory";

export const AI_GOTOVO_LONGREAD = {
  slug: "ii-govorit-gotovo",
  number: "05",
  type: "Разбор из практики",
  homeType: "Из практики",
  title: "Когда ИИ говорит «готово»: как понять, что работа действительно сделана",
  shortTitle: "Когда ИИ говорит «готово»",
  lead:
    "У чат-бота ответ обычно и есть результат. У агента ответ всё чаще становится только сообщением о результате. Если система получает доступ к файлам, сайту и внешним сервисам, одного слова «готово» уже недостаточно: нужны проверяемый след, ясные границы и возможность вмешаться.",
  listingDescription:
    "Несколько дней агент уверенно сообщал о выполненной работе. Во внешней системе почти ничего не было. Этот опыт заставил меня разделить результат, маршрут и оставленный системой след — и заново определить, что означает делегирование ИИ.",
  homeDescription:
    "Что изменяется, когда система не только отвечает, но самостоятельно действует — и почему хороший результат ещё не доказывает, что процесс был управляемым.",
  tags: ["ИИ-агенты", "делегирование", "управляемость"],
  author: "Татьяна Мирошина",
  publicationDate: "2026-08-30",
  modifiedDate: "2026-08-30",
  canonical: "/observatory/ii-govorit-gotovo",
} as const;

export const LONGREAD_TOC = [
  ["Разбор случая: отчёт был, результат не подтверждался", "razbor-sluchaya"],
  ["Пока ИИ отвечает, мы проверяем ответ", "poka-ii-otvechaet"],
  ["Результат, маршрут и след — не одно и то же", "rezultat-marshrut-sled"],
  ["Прослеживаемость нужна не только тогда, когда произошла ошибка", "proslezhivaemost"],
  ["Управляемость — это не постоянный надзор", "upravlyaemost"],
  ["Шесть измерений управляемости", "shest-izmereniy"],
  ["Седьмое условие: возможность вернуться к месту расхождения", "sedmoe-uslovie"],
  ["Это не частная проблема одного пользователя", "ne-chastnaya-problema"],
  ["Что теперь должно входить в слово «готово»", "chto-vhodit-v-gotovo"],
  ["Контроль не бывает бесплатным", "kontrol-ne-besplaten"],
  ["Как изменился мой собственный критерий", "sobstvennyy-kriteriy"],
  ["Практическая проверка перед делегированием", "prakticheskaya-proverka"],
] as const;

export const LONGREAD_HEADING_IDS = new Map<string, string>(LONGREAD_TOC);

export const LONGREAD_SOURCES = [
  {
    title: "AI Control: An Assessment of Frontier Practices",
    publisher: "Guidelight AI Standards",
    date: "18 августа 2026",
    updated: "обновлено 25 августа 2026",
    href: "https://guidelight.ai/blog/control-assessment-august-2026",
    note:
      "Оценка пяти разработчиков по шести практикам контроля на основании публично доступной информации; данные актуальны на 18 августа 2026 года.",
  },
  {
    title: "Pacing model development in an era of cyber-critical capabilities",
    publisher: "OpenAI",
    date: "18 августа 2026",
    href: "https://openai.com/index/pacing-model-development-cyber-capabilities/",
    note:
      "Источник оценки вычислительной нагрузки мониторинга — около 20% отслеживаемого inference compute, с существенными различиями между типами работ.",
  },
] as const;

function loadSource() {
  const source = readFileSync(
    path.join(process.cwd(), "content", "ii-govorit-gotovo.md"),
    "utf8",
  );

  return source.replace(/\r\n?/g, "\n");
}

export function getLongreadMarkdown() {
  const source = loadSource();
  const start = source.indexOf("OpenClaw я установила");
  const end = source.indexOf("\n---\n\n## Как появился этот текст");

  if (start < 0 || end < 0) {
    throw new Error("Не удалось выделить публичную часть longread-статьи.");
  }

  return source.slice(start, end).trim();
}

export function getLongreadReadingMinutes() {
  const visibleText = [
    AI_GOTOVO_LONGREAD.title,
    AI_GOTOVO_LONGREAD.lead,
    getLongreadMarkdown(),
  ].join(" ");

  return Math.max(
    1,
    Math.ceil(countRussianWords(visibleText) / READING_WORDS_PER_MINUTE),
  );
}

export function getLongreadReadingLabel() {
  return `${getLongreadReadingMinutes()} минут чтения`;
}

export function formatLongreadDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, day)))
    .replace(/\s*г\.$/u, "");
}
