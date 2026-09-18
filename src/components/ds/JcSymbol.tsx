/**
 * JcSymbol — the one true mark: a house (domicílio) with a dog and a cat in
 * negative, the right wall curving into a J. Vector taken exactly from the
 * brand manual, never redrawn. Recolours through `color`.
 */
const PATH =
  "M111.32 243.00C138.91 216.83 168.24 192.01 195.88 165.85C200.75 161.25 205.95 156.54 211.01 152.15C218.81 159.87 228.29 168.12 236.46 175.56L289.08 223.46C295.53 229.41 304.53 237.07 310.35 243.07L310.27 335.23L310.28 359.74C310.31 370.10 310.76 379.39 308.37 389.60C305.33 402.57 298.66 415.26 289.10 424.59C276.28 437.34 258.82 444.31 240.74 443.88C237.57 443.82 233.33 443.59 230.19 443.08C246.28 437.30 257.98 430.11 265.62 414.01C270.35 403.78 271.57 392.28 269.08 381.29C267.93 376.44 265.81 371.57 264.60 366.73C260.33 349.70 281.39 351.85 285.91 339.43C287.19 335.91 287.14 333.01 287.28 329.28C284.51 328.98 281.73 328.74 278.95 328.55C269.71 318.02 265.01 315.71 250.79 316.47C248.05 311.55 245.09 306.77 241.92 302.11C234.79 319.47 228.71 332.83 229.71 351.65C230.09 358.82 222.38 365.07 217.47 368.88C212.68 372.86 206.84 377.76 203.27 382.84C203.79 363.93 198.51 352.00 189.30 336.26C191.51 333.94 195.72 328.97 198.38 327.53C203.72 324.65 215.28 322.59 219.74 318.49C226.25 312.51 227.41 297.63 227.32 289.26C219.58 288.75 208.50 287.91 200.85 286.73C181.92 261.86 141.74 271.38 138.62 303.29C137.59 313.86 139.11 331.18 152.58 333.77C164.71 335.50 170.51 318.27 171.76 309.25C171.77 308.41 171.86 307.49 171.92 306.65L172.17 306.73L172.73 308.56C174.46 316.53 176.64 326.81 172.02 334.23C170.07 337.43 166.89 339.70 163.23 340.51C157.86 341.76 152.86 340.25 147.82 338.54C143.09 358.25 131.73 372.96 111.31 377.30L111.32 243.00Z";

export function JcSymbol({
  size = 40,
  color = "currentColor",
  title = "João Caetano",
  decorative = false,
  className,
  style,
}: {
  size?: number;
  color?: string;
  title?: string;
  decorative?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="103.3 144.2 215.0 307.7"
      width={size}
      height={(size * 307.7) / 215}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : title}
      className={className}
      style={{ color, display: "block", flex: "none", ...style }}
    >
      <path fill={color} fillRule="evenodd" clipRule="evenodd" d={PATH} />
    </svg>
  );
}
