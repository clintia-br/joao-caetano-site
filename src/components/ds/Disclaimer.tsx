import { JcSymbol } from "./JcSymbol";
import { site } from "@/lib/site";

/**
 * Disclaimer — the CFMV compliance block (manual §15, brief §8).
 * Every public piece carries the CRMV line; care pieces also carry the
 * "não é emergência 24h" note. Brand-critical: do not render a page without it.
 */
export function Disclaimer({
  crmv = site.crmv,
  showEmergency = true,
}: {
  crmv?: string;
  showEmergency?: boolean;
}) {
  return (
    <div className="jc-disclaimer">
      <JcSymbol size={22} color="var(--terra)" decorative style={{ marginTop: 2 }} />
      <div className="jc-stack jc-stack--xs" style={{ gap: "0.35rem" }}>
        <span className="jc-disclaimer__title">
          {site.name} · {site.role} · {crmv}
        </span>
        {showEmergency && (
          <span className="jc-disclaimer__text">
            Este não é um serviço de emergência 24h. Em caso de emergência, procure atendimento
            emergencial.
          </span>
        )}
      </div>
    </div>
  );
}
