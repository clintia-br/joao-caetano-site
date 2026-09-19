"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { DUR, ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

/**
 * MotionRoot — the single scroll-reveal engine for the whole site.
 *
 * Every element that should appear on scroll just carries a `data-reveal`
 * attribute; a parent with `data-reveal-stagger` makes its children come in
 * one after the other. Nothing here is decorative for its own sake: the
 * vocabulary is the manual's — fades, short position shifts, the fio terra
 * drawing itself, a photo uncovering. No bounce, no spring, no zoom.
 */
export function MotionRoot() {
  const pathname = usePathname();

  /* The inline boot script in the layout adds `has-motion` before first
     paint and removes it again if this component never shows up. */
  useEffect(() => {
    if (prefersReducedMotion()) return;
    document.documentElement.dataset.motionReady = "true";
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      /* On a phone everything is closer together and scrolls faster: shorter
         stagger, and no parallax at all (it fights native scrolling and costs
         battery for a shift nobody asked for). */
      const phone = window.matchMedia("(max-width: 900px)").matches;
      const staggerScale = phone ? 0.65 : 1;

      const enter = (
        targets: gsap.TweenTarget,
        kind: string,
        stagger: number,
        trigger: Element,
      ) => {
        const common = {
          scrollTrigger: { trigger, start: "top 86%", once: true },
          stagger,
        };

        switch (kind) {
          case "line":
            return gsap.to(targets, { scaleX: 1, duration: DUR.reveal, ease: "jcOut", ...common });
          case "frame":
            return gsap.to(targets, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: DUR.long,
              ease: "jcOut",
              ...common,
            });
          case "fade":
            return gsap.to(targets, { opacity: 1, duration: DUR.reveal, ...common });
          default:
            return gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration: DUR.enter,
              ease: "jcOut",
              ...common,
            });
        }
      };

      /* 1 — grouped reveals: the children of a staggered container travel
             together, which is what makes a card row feel composed. */
      gsap.utils.toArray<HTMLElement>("[data-reveal-stagger]").forEach((group) => {
        const children = gsap.utils
          .toArray<HTMLElement>("[data-reveal]", group)
          .filter((el) => !el.dataset.revealBound);

        const byKind = new Map<string, HTMLElement[]>();
        children.forEach((el) => {
          el.dataset.revealBound = "true";
          const kind = el.dataset.reveal || "rise";
          byKind.set(kind, [...(byKind.get(kind) || []), el]);
        });

        const step = (Number(group.dataset.revealStaggerStep) || 0.09) * staggerScale;
        byKind.forEach((els, kind) => enter(els, kind, step, group));
      });

      /* 2 — everything else comes in on its own. */
      gsap.utils
        .toArray<HTMLElement>("[data-reveal]")
        .filter((el) => !el.dataset.revealBound)
        .forEach((el) => {
          el.dataset.revealBound = "true";
          enter(el, el.dataset.reveal || "rise", 0, el);
        });

      /* 3 — photos uncover from the bottom edge instead of fading: a slower,
             quieter move that suits a portrait. */
      gsap.utils.toArray<HTMLElement>("[data-reveal-clip]").forEach((el) => {
        gsap.to(el, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: DUR.long,
          ease: "jcOut",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      /* 4 — parallax: the depth is deliberately small (a few percent), the
             difference you feel rather than notice. */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        if (phone) return;
        const amount = Number(el.dataset.parallax) || 6;
        gsap.fromTo(
          el,
          { yPercent: -amount / 2 },
          {
            yPercent: amount / 2,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      });

      /* 5 — the fio terra of a timeline draws as you read down it. */
      gsap.utils.toArray<HTMLElement>("[data-draw-line]").forEach((el) => {
        gsap.to(el, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el.parentElement || el,
            start: "top 70%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        });
      });
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  /* Fonts land after first paint and change every measurement. */
  useEffect(() => {
    if (!("fonts" in document)) return;
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }, [pathname]);

  return null;
}
