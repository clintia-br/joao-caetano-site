"use client";

import { useRef } from "react";
import { PhotoSlot } from "./PhotoSlot";

export type CarouselPhoto = {
  src?: string;
  alt?: string;
  /** Shown while the slot is empty; falls back to the alt text. */
  brief?: string;
  width?: number;
  height?: number;
};

/**
 * PhotoCarousel — a horizontal strip of João's day-to-day photos. Native
 * scroll-snap does the work (light, touch-friendly); the arrows exist for
 * mouse users. Slots without `src` render the branded placeholder until the
 * photo lands.
 */
export function PhotoCarousel({ items, label = "Fotos do João" }: { items: CarouselPhoto[]; label?: string }) {
  const track = useRef<HTMLDivElement>(null);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".jc-carousel__item");
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="jc-carousel">
      <div className="jc-carousel__track" ref={track} role="region" aria-label={label}>
        {items.map((photo, i) => (
          <div className="jc-carousel__item" key={`${photo.src || photo.brief}-${i}`}>
            <PhotoSlot
              src={photo.src}
              alt={photo.alt}
              brief={photo.brief || photo.alt || ""}
              width={photo.width}
              height={photo.height}
              ratio="4 / 5"
              reveal={false}
              parallax={0}
            />
          </div>
        ))}
      </div>
      <div className="jc-carousel__nav">
        <button type="button" className="jc-carousel__btn" onClick={() => step(-1)} aria-label="Foto anterior">
          ←
        </button>
        <button type="button" className="jc-carousel__btn" onClick={() => step(1)} aria-label="Próxima foto">
          →
        </button>
      </div>
    </div>
  );
}
