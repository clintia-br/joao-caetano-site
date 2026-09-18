import Image from "next/image";
import { JcSymbol } from "@/components/ds/JcSymbol";

/**
 * PhotoSlot — every photographic position on the site.
 *
 * The brand uses real photography only (manual §11) and that photography does
 * not exist yet — a declared asset gap. Until it lands, the slot renders a
 * musgo field with the padrão de símbolos and the brief for the shot, so the
 * page keeps its composition without borrowing a stock image. Passing `src`
 * turns the same slot into the real photo, nothing else changes.
 */
export function PhotoSlot({
  src,
  alt,
  brief,
  width = 1200,
  height = 1500,
  ratio = "4 / 5",
  framed = false,
  parallax,
  className = "",
  priority = false,
  reveal = true,
}: {
  src?: string;
  alt?: string;
  /** What is meant to be photographed here — shown while the slot is empty. */
  brief: string;
  /** Intrinsic pixel size of the real photo (used only when `src` is set). */
  width?: number;
  height?: number;
  ratio?: string;
  framed?: boolean;
  parallax?: number;
  className?: string;
  priority?: boolean;
  reveal?: boolean;
}) {
  return (
    <div
      className={`jc-photo${framed ? " jc-photo--framed" : ""} ${className}`.trim()}
      style={{ aspectRatio: ratio }}
      data-reveal-clip={reveal ? "" : undefined}
    >
      {src ? (
        // Intrinsic width/height (not `fill`): a fill image is positioned
        // absolutely by Next's own inline style, so if the stylesheet ever
        // fails to apply it escapes its box and covers the whole viewport.
        // With real dimensions the image stays in flow and just fills its
        // container via .jc-photo__img (object-fit: cover).
        <Image
          className="jc-photo__img"
          src={src}
          alt={alt || brief}
          width={width}
          height={height}
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={priority}
          data-parallax={parallax}
        />
      ) : (
        <span className="jc-photo__empty" role="img" aria-label={brief}>
          <span
            className="jc-photo__pattern"
            aria-hidden="true"
            data-parallax={parallax ?? 5}
            style={{ backgroundImage: "url(/logo-symbol-offwhite.svg)" }}
          />
          <JcSymbol size={30} color="var(--offwhite-78)" decorative />
          <span className="jc-photo__caption">{brief}</span>
        </span>
      )}
      {framed && <span className="jc-photo__frame" aria-hidden="true" />}
    </div>
  );
}
