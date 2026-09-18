import { ReactNode } from "react";
import Link from "next/link";
import { Badge } from "@/components/ds/Badge";
import { PhotoSlot } from "./PhotoSlot";

/** One verifiable differential — the fosso. Numbered, never icon-led. */
export function DiffItem({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="jc-diff" data-reveal="rise">
      <span className="jc-diff__num">{n}</span>
      <h3 className="jc-diff__title">{title}</h3>
      <p className="jc-diff__body">{body}</p>
    </div>
  );
}

/** A numbered step of "como funciona". */
export function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="jc-step" data-reveal="rise">
      <span className="jc-step__num">{n}</span>
      <div className="jc-stack jc-stack--xs">
        <h3 className="jc-step__title">{title}</h3>
        <p className="jc-step__body">{body}</p>
      </div>
    </div>
  );
}

/**
 * Timeline — the same steps threaded onto a fio terra that draws itself as
 * you scroll past. The line is the manual's own graphic element, so the
 * movement reads as brand rather than as effect.
 */
export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="jc-timeline" data-reveal-stagger="" data-reveal-stagger-step="0.12">
      <span className="jc-timeline__track" aria-hidden="true" />
      <span className="jc-timeline__fill" aria-hidden="true" data-draw-line="" />
      {children}
    </div>
  );
}

/** Checklist of what a service includes. */
export function IncludeList({ items }: { items: readonly { t: string; b?: string }[] }) {
  return (
    <ul className="jc-include" data-reveal-stagger="">
      {items.map((item) => (
        <li className="jc-include__item" key={item.t} data-reveal="rise">
          <span className="jc-include__check" aria-hidden="true">
            ✓
          </span>
          <span>
            <strong className="jc-include__title">{item.t}</strong>
            {item.b && <span className="jc-include__body">{item.b}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Educational article card. */
export function ArticleCard({
  tag,
  title,
  read = "3 min",
  href,
  brief,
}: {
  tag: string;
  title: string;
  read?: string;
  href: string;
  brief: string;
}) {
  return (
    <Link className="jc-article" href={href} data-reveal="rise">
      <span className="jc-article__media">
        <PhotoSlot brief={brief} ratio="3 / 2" reveal={false} parallax={5} />
      </span>
      <span className="jc-article__meta">
        <Badge variant="terra" size="sm">
          {tag}
        </Badge>
        <span className="jc-article__read">{read} de leitura</span>
      </span>
      <h3 className="jc-article__title">{title}</h3>
    </Link>
  );
}

/** A line of the info column on the contact page. */
export function InfoRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="jc-info-row" data-reveal="rise">
      <span className="jc-info-row__label">{label}</span>
      <span className="jc-info-row__value">{value}</span>
    </div>
  );
}
