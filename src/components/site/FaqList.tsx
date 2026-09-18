"use client";

import { useRef, useState } from "react";
import { DUR, gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * FaqList — accordion. The panel height eases with the brand curve and the
 * "+" quietly becomes an "×"; one question open at a time keeps the page calm.
 */
export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  const [open, setOpen] = useState(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const next = open === index ? -1 : index;

    panels.current.forEach((panel, i) => {
      if (!panel) return;
      const opening = i === next;
      if (prefersReducedMotion()) {
        gsap.set(panel, { height: opening ? "auto" : 0 });
        return;
      }
      gsap.to(panel, {
        height: opening ? "auto" : 0,
        duration: DUR.slow,
        ease: "jcStandard",
        overwrite: true,
      });
    });

    setOpen(next);
  };

  return (
    <div className="jc-faq" data-reveal-stagger="" data-reveal-stagger-step="0.06">
      {items.map((item, i) => (
        <div className="jc-faq__item" key={item.q} data-open={open === i} data-reveal="rise">
          <h3 style={{ margin: 0 }}>
            <button
              type="button"
              className="jc-faq__trigger"
              aria-expanded={open === i}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
              onClick={() => toggle(i)}
            >
              <span className="jc-faq__q">{item.q}</span>
              <span className="jc-faq__sign" aria-hidden="true">
                +
              </span>
            </button>
          </h3>
          <div
            className="jc-faq__panel"
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${i}`}
            ref={(el) => {
              panels.current[i] = el;
            }}
            style={{ height: open === i && i === 0 ? "auto" : undefined }}
          >
            <p className="jc-faq__a">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
