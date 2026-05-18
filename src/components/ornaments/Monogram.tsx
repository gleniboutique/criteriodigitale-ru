type Props = {
  size?: number;
  inkVar?: string;
  goldVar?: string;
  className?: string;
};

export default function Monogram({
  size = 64,
  inkVar = "hsl(var(--ink))",
  goldVar = "hsl(var(--gold))",
  className,
}: Props) {
  return (
    <svg
      width={size}
      height={size * 0.95}
      viewBox="0 0 100 96"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Serif T with bracketed terminals */}
      <path d="M14 10 H86 M14 10 V16 M86 10 V16" stroke={inkVar} strokeWidth="3.2" strokeLinecap="butt" />
      <path d="M50 10 L50 56" stroke={inkVar} strokeWidth="3.2" strokeLinecap="butt" />
      {/* Tiny foot serif */}
      <path d="M42 56 H58" stroke={inkVar} strokeWidth="2.2" strokeLinecap="butt" />
      {/* Gold dot — the thread between two voices */}
      <circle cx="50" cy="66" r="2.8" fill={goldVar} />
      {/* italic lowercase m */}
      <text
        x="50"
        y="92"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        fontSize="28"
        fontWeight="500"
        fill={inkVar}
        letterSpacing="-0.5"
      >
        m
      </text>
    </svg>
  );
}
