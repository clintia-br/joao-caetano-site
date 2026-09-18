import { Eyebrow } from "@/components/ds/Eyebrow";
import { ButtonLink } from "@/components/ds/Button";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { PhotoSlot } from "./PhotoSlot";
import { site } from "@/lib/site";

/** ServiceHero — the opening of each product page: format first, price open,
 *  one primary action. Same skeleton across the three services. */
export function ServiceHero({
  eyebrow,
  title,
  lead,
  price,
  priceNote,
  photoBrief,
  primary = "Agendar pelo WhatsApp",
}: {
  eyebrow: string;
  title: string;
  lead: string;
  price?: string;
  priceNote?: string;
  photoBrief: string;
  primary?: string;
}) {
  return (
    <section className="jc-service-hero jc-on-dark">
      <div className="jc-container jc-service-hero__grid" style={{ position: "relative" }}>
        <div className="jc-stack jc-stack--md" data-reveal-stagger="">
          <div data-reveal="fade">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <SplitHeading as="h1" className="jc-display jc-h1" trigger="load" delay={0.15}>
            {title}
          </SplitHeading>
          <p className="jc-lead" data-reveal="rise">
            {lead}
          </p>
          {price && (
            <p className="jc-service-hero__price" data-reveal="rise">
              <span className="jc-service-hero__price-value">{price}</span>
              {priceNote && <span className="jc-service-hero__price-note">{priceNote}</span>}
            </p>
          )}
          <div className="jc-row" data-reveal="rise">
            <ButtonLink href={site.whatsapp.href} size="lg">
              {primary}
            </ButtonLink>
            <ButtonLink href="/contato" variant="secondary" size="lg">
              Tirar uma dúvida
            </ButtonLink>
          </div>
        </div>

        <PhotoSlot brief={photoBrief} framed parallax={6} />
      </div>
    </section>
  );
}
