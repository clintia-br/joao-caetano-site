"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/**
 * Marquee — the faixa of apoios contextuais, drifting at walking pace.
 * Slow enough to read a phrase without following it; it also nudges forward
 * slightly with scroll, so the band feels attached to the page.
 */
export function Marquee({ items }: { items: readonly string[] }) {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current;
      if (!el || prefersReducedMotion()) return;

      const group = el.firstElementChild as HTMLElement | null;
      if (!group) return;

      const loop = gsap.to(el, {
        x: () => -group.offsetWidth,
        duration: () => group.offsetWidth / 34, // px per second — a slow walk
        ease: "none",
        repeat: -1,
        modifiers: { x: gsap.utils.unitize((x) => parseFloat(x) % group.offsetWidth) },
      });

      return () => {
        loop.kill();
      };
    },
    { scope: track },
  );

  /* Two identical groups sit side by side; the track slides exactly one
     group's width and wraps, so the seam never shows. */
  const group = (
    <div className="jc-marquee__group" aria-hidden="true">
      {[...items, ...items].map((item, i) => (
        <span className="jc-marquee__item" key={`${item}-${i}`}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="jc-marquee">
      <p className="jc-visually-hidden">{items.join(". ")}</p>
      <div className="jc-marquee__track" ref={track}>
        {group}
        {group}
      </div>
    </div>
  );
}
