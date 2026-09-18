import { ReactNode } from "react";
import { SymbolPattern } from "./SymbolPattern";

type Bg = "page" | "warm" | "sage" | "raised" | "musgo" | "musgo-deep" | "marinho";

const DARK: Bg[] = ["musgo", "musgo-deep", "marinho"];

/**
 * Section — a flat colour field with the site's rhythm. On a dark field the
 * `jc-on-dark` class redefines the ink tokens, so every child inverts on its
 * own instead of each component carrying a "tone" prop around.
 */
export function Section({
  children,
  bg = "page",
  id,
  tight = false,
  pattern = false,
  className = "",
  narrow = false,
}: {
  children: ReactNode;
  bg?: Bg;
  id?: string;
  tight?: boolean;
  pattern?: boolean;
  className?: string;
  narrow?: boolean;
}) {
  const dark = DARK.includes(bg);
  return (
    <section
      id={id}
      className={[
        "jc-section",
        `jc-bg-${bg}`,
        dark ? "jc-on-dark" : "",
        tight ? "jc-section--tight" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {pattern && dark && <SymbolPattern />}
      <div className={`jc-container${narrow ? " jc-container--narrow" : ""}`}>{children}</div>
    </section>
  );
}
