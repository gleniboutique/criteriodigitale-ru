type Props = { className?: string; opacity?: number };

export default function GoldenSwirls({ className, opacity = 0.55 }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 500 500"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity,
      }}
    >
      <defs>
        <linearGradient id="cdrSwirl1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(42 60% 65%)" stopOpacity="0.25" />
          <stop offset="50%" stopColor="hsl(42 60% 45%)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(42 60% 65%)" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="cdrSwirl2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(42 60% 65%)" stopOpacity="0.20" />
          <stop offset="60%" stopColor="hsl(38 65% 35%)" stopOpacity="0.40" />
          <stop offset="100%" stopColor="hsl(42 60% 65%)" stopOpacity="0.20" />
        </linearGradient>
      </defs>
      <path d="M450 50 Q500 200 400 350 Q300 500 100 480" stroke="url(#cdrSwirl1)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M-50 450 Q100 400 200 300 Q300 200 450 180" stroke="url(#cdrSwirl2)" strokeWidth="1" strokeLinecap="round" fill="none" />
      <ellipse cx="250" cy="250" rx="220" ry="120" stroke="url(#cdrSwirl1)" strokeWidth="0.7" fill="none" transform="rotate(-8 250 250)" opacity="0.55" />
    </svg>
  );
}
