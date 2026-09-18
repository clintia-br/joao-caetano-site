import { ReactNode } from "react";

/** Quote — the voz do João, set in Caslon. His real words, never invented. */
export function Quote({
  children,
  cite,
  size = "lg",
}: {
  children: ReactNode;
  cite?: string;
  size?: "md" | "lg" | "xl";
}) {
  return (
    <figure className={`jc-quote jc-quote--${size}`} data-reveal-stagger="">
      <span className="jc-quote__rule" data-reveal="line" aria-hidden="true" />
      <blockquote className="jc-quote__body" data-reveal="rise">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="jc-quote__cite" data-reveal="fade">
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
