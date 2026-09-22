"use client";

import { useRef } from "react";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { ButtonLink } from "@/components/ds/Button";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { PhotoSlot } from "./PhotoSlot";
import { DUR, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";

/**
 * HomeHero — the opening. One timeline: the photo card uncovers from the
 * right while the copy rises. Nothing zooms, nothing bounces; the whole thing
 * is over in under two seconds.
 */
export function HomeHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "jcOut" } });
      const phone = window.matchMedia("(max-width: 900px)").matches;

      if (phone) {
        /* Stacked layout: the photo simply settles into place (a fade and a
           very small scale), then the copy rises. No lateral wipe on a
           full-width image — it reads as a slide, not as calm. */
        tl.to("[data-hero-media]", { opacity: 1, duration: 1.1 })
          .from(
            "[data-hero-media] .jc-photo",
            { scale: 1.06, duration: 1.8, ease: "jcStandard" },
            0,
          )
          .to(
            "[data-hero]",
            { opacity: 1, y: 0, duration: DUR.enter, stagger: 0.07 },
            0.35,
          );
      } else {
        tl.to("[data-hero-media]", {
          clipPath: "inset(0 0 0 0%)",
          duration: 1.35,
        })
          .from(
            "[data-hero-media] .jc-photo",
            { scale: 1.12, duration: 2, ease: "jcStandard" },
            0,
          )
          .to(
            "[data-hero]",
            { opacity: 1, y: 0, duration: DUR.enter, stagger: 0.09 },
            0.25,
          );
      }

      return () => {
        tl.kill();
      };
    },
    { scope: root },
  );

  return (
    <section className="jc-hero2" ref={root} id="top">
      <div className="jc-hero2__inner">
        <div className="jc-hero2__copy">
          {/* The brand tagline stays as the kicker; the headline carries the
              emotional promise (care as family, prevention, more time together). */}
          <div data-hero>
            <Eyebrow>{site.tagline.replace(/\.$/, "")}</Eyebrow>
          </div>

          <SplitHeading
            as="h1"
            className="jc-display jc-h1--hero"
            trigger="load"
            delay={0.2}
          >
            {"Cuidando do seu pet hoje para que ele viva o melhor ao seu lado."}
          </SplitHeading>

          <p className="jc-lead" data-hero>
            Atendimento veterinário para cães e gatos, no conforto dos seus lares, com o carinho e o
            cuidado que eles merecem.
          </p>

          <div className="jc-hero2__actions" data-hero>
            <ButtonLink href="#contato" size="lg">
              Agendar pelo WhatsApp
            </ButtonLink>
          </div>
        </div>

        {/* The photo sits in an arch (a door, a house) over a sage circle,
            with a small terra circle behind the top corner. */}
        <div className="jc-hero2__figure">
          <span className="jc-orb jc-orb--sage" aria-hidden="true" data-hero />
          <span className="jc-orb jc-orb--terra" aria-hidden="true" data-hero />
          <div className="jc-arch" data-hero-media>
            <PhotoSlot
              src="/fotos/hero.jpg"
              alt="João Caetano sentado num banco com dois cães no colo"
              brief="Foto do João com o pet, na casa do tutor · recorte vertical"
              width={1500}
              height={2000}
              ratio="auto"
              reveal={false}
              parallax={7}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
