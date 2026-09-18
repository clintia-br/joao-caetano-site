import { ReactNode } from "react";

/**
 * Eyebrow — section opener carrying two pieces of the manual's graphic
 * vocabulary at once: the numeração fina in Caslon italic and the fio terra.
 */
export function Eyebrow({
  children,
  number,
  align = "left",
  rule = true,
}: {
  children: ReactNode;
  number?: string;
  align?: "left" | "center";
  rule?: boolean;
}) {
  return (
    <div className={`jc-eyebrow-row${align === "center" ? " jc-eyebrow-row--center" : ""}`}>
      {number && <span className="jc-eyebrow-row__num">{number}</span>}
      {rule && <span className="jc-eyebrow-row__rule" aria-hidden="true" />}
      <span className="jc-eyebrow-row__label">{children}</span>
    </div>
  );
}
