type Props = {
  className?: string;
  inkVar?: string;
};

export default function RulerGrid({
  className,
  inkVar = "hsl(var(--ink))",
}: Props) {
  return (
    <svg
      width="100%"
      height="22"
      viewBox="0 0 400 22"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {Array.from({ length: 41 }).map((_, i) => (
        <line
          key={i}
          x1={i * 10}
          y1="0"
          x2={i * 10}
          y2={i % 5 === 0 ? 16 : 8}
          stroke={inkVar}
          strokeOpacity={i % 5 === 0 ? 0.45 : 0.22}
          strokeWidth="0.7"
        />
      ))}
    </svg>
  );
}
