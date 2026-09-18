"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/** A 2px fio terra across the top that tracks how far down the page you are. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion() || !ref.current) return;
      gsap.to(ref.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: () => document.body.scrollHeight - window.innerHeight, scrub: 0.3 },
      });
      ScrollTrigger.refresh();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return <div ref={ref} className="jc-progress" aria-hidden="true" />;
}
