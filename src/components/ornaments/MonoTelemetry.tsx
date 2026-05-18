const lines = [
  { text: "2026·05 · ОТКРЫТИЕ · НАЧАТО", opacity: 0.3 },
  { text: "2026·05 · ПОЗИЦИЯ · ОПУБЛ.", opacity: 0.42 },
  { text: "2026·05 · СЛУЧАИ · 05 · АКТ.", opacity: 0.55, accent: true },
  { text: "2026·05 · ГРАНИЦЫ · СВЕРЕНО", opacity: 0.42 },
  { text: "2026·05 · КОНТАКТ · ОТКРЫТО", opacity: 0.3 },
];

export default function MonoTelemetry({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        fontFamily: '"JetBrains Mono", ui-monospace, "SF Mono", monospace',
        fontSize: 10,
        letterSpacing: "0.1em",
        lineHeight: 1.9,
      }}
      aria-hidden="true"
    >
      {lines.map((l, i) => (
        <div
          key={i}
          style={{
            opacity: l.opacity,
            color: l.accent ? "hsl(var(--gold-deep))" : "hsl(var(--ink))",
          }}
        >
          {l.text}
        </div>
      ))}
    </div>
  );
}
