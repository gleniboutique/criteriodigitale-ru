const russianDateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatRussianDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);

  return russianDateFormatter
    .format(new Date(Date.UTC(year, month - 1, day)))
    .replace(/\s*г\.$/u, "");
}
