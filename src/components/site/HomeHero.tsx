"use client";

import { useRef } from "react";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { ButtonLink } from "@/components/ds/Button";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { PhotoSlot } from "./PhotoSlot";
import { DUR, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";

/**
 * HomeHero — the opening. One timeline: the photo uncovers from the right
 * while the copy rises, then the scroll cue starts its slow travel. Nothing
 * zooms, nothing bounces; the whole thing is over in under two seconds.
 */
export function HomeHero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "jcOut" } });

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
        )
        .fromTo(
          "[data-hero-cue]",
          { xPercent: -100 },
          { xPercent: 260, duration: 2.2, ease: "jcStandard", repeat: -1, repeatDelay: 0.4 },
          1.4,
        );

      return () => {
        tl.kill();
      };
    },
    { scope: root },
  );

  return (
    <section className="jc-hero jc-on-dark" ref={root} id="top">
      <div className="jc-hero__copy">
        <div data-hero>
          <Eyebrow>Atendimento veterinário domiciliar · {site.area}</Eyebrow>
        </div>

        <SplitHeading
          as="h1"
          className="jc-display jc-h1--hero"
          trigger="load"
          delay={0.2}
        >
          {"O veterinário que explica."}
        </SplitHeading>

        <p className="jc-lead" data-hero>
          Medicina veterinária na sua casa: duas horas reservadas por consulta, um plano montado pro
          seu animal — e o porquê de cada decisão explicado até o fim.
        </p>

        <div className="jc-row" data-hero>
          <ButtonLink href="#contato" size="lg">
            Agendar pelo WhatsApp
          </ButtonLink>
          <ButtonLink href="#como-funciona" variant="secondary" size="lg">
            Como funciona a consulta
          </ButtonLink>
        </div>
      </div>

      <div className="jc-hero__media" data-hero-media>
        <PhotoSlot
          src="/fotos/hero.jpg"
          alt="João Caetano sentado num banco com dois cães no colo"
          brief="Foto do João com o animal, na casa do tutor · recorte vertical"
          width={1500}
          height={2000}
          ratio="auto"
          reveal={false}
          parallax={7}
          priority
        />
      </div>

      <span className="jc-hero__scroll" aria-hidden="true">
        <span className="jc-hero__scroll-line">
          <span className="jc-hero__scroll-dot" data-hero-cue />
        </span>
        Role para ver
      </span>
    </section>
  );
}
