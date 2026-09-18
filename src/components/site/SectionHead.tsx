import { Eyebrow } from "@/components/ds/Eyebrow";
import { SplitHeading } from "@/components/motion/SplitHeading";

/**
 * SectionHead — eyebrow, Caslon title, optional lead. The title is split into
 * lines that rise out of a mask; the eyebrow and lead follow it.
 */
export function SectionHead({
  eyebrow,
  number,
  title,
  lead,
  align = "left",
  wide = false,
  as = "h2",
  id,
}: {
  eyebrow?: string;
  number?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  wide?: boolean;
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  return (
    <div
      className={[
        "jc-section-head",
        wide ? "jc-section-head--wide" : "",
        align === "center" ? "jc-section-head--center" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-reveal-stagger=""
    >
      {eyebrow && (
        <div data-reveal="fade">
          <Eyebrow number={number} align={align}>
            {eyebrow}
          </Eyebrow>
        </div>
      )}
      <SplitHeading
        as={as}
        id={id}
        className={`jc-display ${as === "h1" ? "jc-h1" : "jc-h2"}`}
      >
        {title}
      </SplitHeading>
      {lead && (
        <p className="jc-lead" data-reveal="rise">
          {lead}
        </p>
      )}
    </div>
  );
}
