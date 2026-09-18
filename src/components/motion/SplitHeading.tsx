"use client";

import { ElementType, useRef } from "react";
import { DUR, SplitText, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type Props = {
  children: string;
  as?: ElementType;
  className?: string;
  /** "load" for the hero (plays immediately), "scroll" everywhere else. */
  trigger?: "load" | "scroll";
  delay?: number;
  id?: string;
};

/**
 * SplitHeading — a Caslon title that rises line by line from behind a mask.
 * The words never fade in place: they come up out of their own line box, the
 * way a printed page reveals itself. Two lines at a time, 60ms apart.
 */
export function SplitHeading({
  children,
  as: Tag = "h2",
  className,
  trigger = "scroll",
  delay = 0,
  id,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) return;

      const split = SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "jc-split-line",
        autoSplit: true,
        onSplit(self) {
          return gsap.from(self.lines, {
            yPercent: 115,
            opacity: 0,
            duration: DUR.long,
            ease: "jcOut",
            stagger: 0.075,
            delay,
            scrollTrigger:
              trigger === "scroll"
                ? { trigger: el, start: "top 88%", once: true }
                : undefined,
          });
        },
      });

      return () => split.revert();
    },
    { scope: ref, dependencies: [children] },
  );

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
