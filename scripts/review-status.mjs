import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Editorial cadence documents the default policy. nextReviewAt is always stored
// explicitly in the registry because an editor may intentionally override it.
const REVIEW_CADENCE = Object.freeze({
  T0: "approximately 24 months",
  T1: "12 months",
  T2: "6 months",
  T3: "3 months",
  T4: "historic facts stay unchanged; review current surrounding context, usually every 12 months",
});

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const rootDirectory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function parseArguments(argumentsList) {
  const dateArgument = argumentsList.find((argument) => argument.startsWith("--date="));

  return {
    dueOnly: argumentsList.includes("--due"),
    showReasons: argumentsList.includes("--reasons"),
    referenceDate: dateArgument
      ? dateArgument.slice("--date=".length)
      : new Date().toISOString().slice(0, 10),
  };
}

function assertIsoDate(value, label) {
  if (!DATE_PATTERN.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    throw new Error(`${label} must use YYYY-MM-DD: ${value}`);
  }
}

export function getReviewStatus(referenceDate, nextReviewAt) {
  return referenceDate < nextReviewAt ? "current" : "due";
}

function readQuotedField(source, field, required = true) {
  const value = source.match(new RegExp(`${field}:\\s*"([^"]+)"`))?.[1];

  if (required && !value) {
    throw new Error(`${field} not found in editorial source`);
  }

  return value;
}

function readObservatoryDates(sourcePath, article) {
  const source = readFileSync(path.join(rootDirectory, sourcePath), "utf8");
  const marker = `slug: "${article}"`;
  const articleStart = source.indexOf(marker);

  if (articleStart === -1) {
    throw new Error(`Article not found in ${sourcePath}: ${article}`);
  }

  const nextArticleStart = source.indexOf("    slug: \"", articleStart + marker.length);
  const articleSource = source.slice(
    articleStart,
    nextArticleStart === -1 ? source.length : nextArticleStart,
  );

  return {
    publishedAt: readQuotedField(articleSource, "publishedAt"),
    updatedAt: readQuotedField(articleSource, "updatedAt", false),
    reviewedAt: readQuotedField(articleSource, "reviewedAt"),
  };
}

function readLongreadDates(sourcePath) {
  const source = readFileSync(path.join(rootDirectory, sourcePath), "utf8");

  return {
    publishedAt: readQuotedField(source, "publicationDate"),
    updatedAt: readQuotedField(source, "modifiedDate", false),
    reviewedAt: readQuotedField(source, "reviewedAt"),
  };
}

function readEditorialDates(entry) {
  if (entry.sourceKind === "observatory") {
    return readObservatoryDates(entry.source, entry.article);
  }
  if (entry.sourceKind === "longread") {
    return readLongreadDates(entry.source);
  }

  throw new Error(`Unknown source kind for ${entry.article}: ${entry.sourceKind}`);
}

function formatTable(rows) {
  const columns = [
    ["Article", "article"],
    ["Language", "language"],
    ["Review class", "reviewClass"],
    ["Published", "publishedAt"],
    ["Updated", "updatedAt"],
    ["Reviewed", "reviewedAt"],
    ["Next review", "nextReviewAt"],
    ["Status", "status"],
  ];
  const widths = columns.map(([heading, key]) =>
    Math.max(heading.length, ...rows.map((row) => String(row[key] ?? "—").length)),
  );
  const formatRow = (values) =>
    values.map((value, index) => String(value ?? "—").padEnd(widths[index])).join(" | ");

  return [
    formatRow(columns.map(([heading]) => heading)),
    widths.map((width) => "-".repeat(width)).join("-+-"),
    ...rows.map((row) => formatRow(columns.map(([, key]) => row[key]))),
  ].join("\n");
}

function main() {
  const options = parseArguments(process.argv.slice(2));
  assertIsoDate(options.referenceDate, "Reference date");

  const registry = JSON.parse(
    readFileSync(path.join(rootDirectory, "editorial/review-registry.json"), "utf8"),
  );
  const rows = registry.articles.map((entry) => {
    if (!REVIEW_CADENCE[entry.reviewClass]) {
      throw new Error(`Unknown review class for ${entry.article}: ${entry.reviewClass}`);
    }
    assertIsoDate(entry.nextReviewAt, `nextReviewAt for ${entry.article}`);

    const dates = readEditorialDates(entry);
    assertIsoDate(dates.publishedAt, `publishedAt for ${entry.article}`);
    if (dates.updatedAt) assertIsoDate(dates.updatedAt, `updatedAt for ${entry.article}`);
    assertIsoDate(dates.reviewedAt, `reviewedAt for ${entry.article}`);

    return {
      ...entry,
      ...dates,
      status: getReviewStatus(options.referenceDate, entry.nextReviewAt),
    };
  });
  const visibleRows = options.dueOnly ? rows.filter((row) => row.status === "due") : rows;

  console.log(`Reference date: ${options.referenceDate}`);
  console.log(formatTable(visibleRows));
  console.log(
    `Current: ${rows.filter((row) => row.status === "current").length} | Due: ${rows.filter((row) => row.status === "due").length}`,
  );

  if (options.showReasons) {
    console.log("\nReview reasons:");
    for (const row of visibleRows) console.log(`- ${row.article}: ${row.reviewReason}`);
  }
}

main();
