import { JcSymbol } from "./JcSymbol";
import { site } from "@/lib/site";

/**
 * LogoLockup — the brand assinaturas (manual §03): horizontal for the header,
 * institutional (with the CRMV line the CFMV requires) for the footer.
 */
export function LogoLockup({
  layout = "vertical",
  tone = "positive",
  size = 64,
  crmv = site.crmv,
}: {
  layout?: "vertical" | "horizontal" | "institutional" | "symbol";
  tone?: "positive" | "negative";
  size?: number;
  crmv?: string;
}) {
  const isNeg = tone === "negative";
  const ink = isNeg ? "var(--off-white)" : "var(--musgo)";
  const desc = isNeg ? "var(--offwhite-78)" : "var(--text-accent)";

  const name = (
    <span
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        color: ink,
        lineHeight: 1,
        fontSize: size * 0.42,
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
      }}
    >
      {site.name}
    </span>
  );

  const descritor = (
    <span
      style={{
        fontFamily: "var(--font-text)",
        fontWeight: 500,
        color: desc,
        fontSize: Math.max(9, size * 0.135),
        letterSpacing: "var(--tracking-descritor)",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      {site.descritor}
    </span>
  );

  if (layout === "symbol") return <JcSymbol size={size} color={ink} />;

  if (layout === "horizontal") {
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.28 }}>
        <JcSymbol size={size} color={ink} />
        <span style={{ display: "flex", flexDirection: "column", gap: size * 0.09, paddingTop: 2 }}>
          {name}
          <span style={{ display: "flex", alignItems: "center", gap: size * 0.18 }}>
            <span
              aria-hidden="true"
              style={{ width: size * 0.45, height: 1, background: "var(--line)", flex: "none" }}
            />
            {descritor}
          </span>
        </span>
      </span>
    );
  }

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.22,
        textAlign: "center",
      }}
    >
      <JcSymbol size={size} color={ink} />
      {name}
      <span aria-hidden="true" style={{ width: size * 0.9, height: 1, background: "var(--line)" }} />
      {descritor}
      {layout === "institutional" && (
        <span
          style={{
            fontFamily: "var(--font-text)",
            fontWeight: 500,
            color: desc,
            fontSize: Math.max(9, size * 0.125),
            letterSpacing: "var(--tracking-eyebrow)",
            textTransform: "uppercase",
          }}
        >
          {site.role} · {crmv}
        </span>
      )}
    </span>
  );
}
