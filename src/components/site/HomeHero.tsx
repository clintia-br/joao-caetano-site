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

      return () => {
        tl.kill();
      };
    },
    { scope: root },
  );

  return (
    <section className="jc-hero jc-on-dark" ref={root} id="top">
      <div className="jc-hero__copy">
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
          {"Cuidar hoje pra ele viver bem, ao seu lado, por mais tempo."}
        </SplitHeading>

        <p className="jc-lead" data-hero>
          Atendimento veterinário para <strong>cães e gatos, na casa deles</strong>, na {site.area} —
          com tempo, calma e o cuidado de quem sabe que ele é da família.
        </p>

        <div className="jc-row" data-hero>
          <ButtonLink href="#contato" size="lg">
            Agendar pelo WhatsApp
          </ButtonLink>
          <ButtonLink href="#como-funciona" variant="ghost" size="lg">
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

    </section>
  );
}
