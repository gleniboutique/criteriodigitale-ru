type Props = {
  className?: string;
  goldVar?: string;
  inkVar?: string;
  /** "right" pushes the big orbit off-frame right; "left" mirrors */
  side?: "right" | "left";
};

export default function OrbitRings({
  className,
  goldVar = "hsl(var(--gold))",
  inkVar = "hsl(var(--ink))",
  side = "right",
}: Props) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      style={{
        position: "absolute",
        [side]: -160,
        top: -80,
        width: 560,
        height: 560,
        pointerEvents: "none",
      }}
    >
      <circle cx="200" cy="200" r="190" stroke={inkVar} strokeOpacity="0.10" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="140" stroke={inkVar} strokeOpacity="0.13" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="90" stroke={goldVar} strokeOpacity="0.32" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="40" fill={goldVar} fillOpacity="0.18" />
      <circle cx="320" cy="160" r="4" fill={goldVar} />
      <circle cx="120" cy="260" r="3" fill={inkVar} fillOpacity="0.4" />
    </svg>
  );
}
