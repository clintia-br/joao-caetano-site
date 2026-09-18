"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

let registered = false;

if (typeof window !== "undefined" && !registered) {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, useGSAP);

  /* The brand's motion curves (manual §13). "A marca não grita": no bounce,
     no spring — these two easings are the only ones the site uses. */
  CustomEase.create("jcStandard", "0.22, 0.61, 0.36, 1");
  CustomEase.create("jcOut", "0.16, 1, 0.3, 1");

  gsap.defaults({ ease: "jcStandard", duration: 0.6 });
  ScrollTrigger.config({ ignoreMobileResize: true });

  registered = true;
}

/** Duration scale, in seconds. UI transitions stay inside the manual's
 *  140–380ms window; scroll entrances are allowed to breathe a little more. */
export const DUR = {
  fast: 0.14,
  base: 0.22,
  slow: 0.38,
  enter: 0.72,
  reveal: 0.9,
  long: 1.2,
} as const;

/** Honours the OS setting — every animation in the site checks this. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger, SplitText, CustomEase, useGSAP };
