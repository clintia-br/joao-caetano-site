import { Badge } from "./Badge";
import { ButtonLink } from "./Button";

/**
 * ServiceCard — a product in the esteira. Editorial: Caslon title, open price,
 * one clear action. The carro-chefe inverts to a musgo fill.
 */
export function ServiceCard({
  eyebrow,
  title,
  description,
  price,
  priceNote,
  cta = "Saiba mais",
  href,
  featured = false,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  price?: string;
  priceNote?: string;
  cta?: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`jc-service-card${featured ? " jc-service-card--featured jc-on-dark" : ""}`}
      data-reveal="rise"
    >
      {eyebrow && <Badge variant={featured ? "outline" : "terra"}>{eyebrow}</Badge>}
      <h3 className="jc-service-card__title">{title}</h3>
      <p className="jc-service-card__desc">{description}</p>
      {price && (
        <p className="jc-service-card__pricing">
          <span className="jc-service-card__price">{price}</span>
          {priceNote && <span className="jc-service-card__note">{priceNote}</span>}
        </p>
      )}
      <div className="jc-service-card__action">
        <ButtonLink href={href} variant={featured ? "primary" : "secondary"} fullWidth>
          {cta}
        </ButtonLink>
      </div>
    </article>
  );
}
