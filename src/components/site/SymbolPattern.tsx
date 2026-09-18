/**
 * Padrão de símbolos — the only motif the manual allows on large dark areas:
 * the símbolo repeated at 6% opacity. It drifts a few pixels with the scroll
 * (data-parallax), which is what keeps a flat colour field from feeling dead.
 */
export function SymbolPattern({
  size = 120,
  parallax = 4,
  className = "jc-pattern",
}: {
  size?: number;
  parallax?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={className}
      data-parallax={parallax}
      style={{
        backgroundImage: "url(/logo-symbol-offwhite.svg)",
        backgroundSize: `${size}px auto`,
      }}
    />
  );
}
