import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { InfoRow } from "@/components/site/Pieces";
import { ContactForm } from "@/components/site/ContactForm";
import { Badge } from "@/components/ds/Badge";
import { Disclaimer } from "@/components/ds/Disclaimer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agendar",
  description:
    "Agende o atendimento veterinário domiciliar na Zona Sul do Rio. Conte sobre o seu animal e receba o preço aberto e a primeira janela livre pelo WhatsApp.",
};

export default function ContatoPage() {
  return (
    <Section bg="musgo-deep" className="jc-section--hero-pad">
      <div className="jc-grid jc-grid--split-start">
        <div className="jc-stack jc-stack--md">
          <SectionHead
            as="h1"
            eyebrow="O consultório é a sua casa"
            title="Vamos agendar"
            lead="Me conta um pouco sobre o seu animal. Eu respondo com o preço aberto e a primeira janela livre."
          />
          <div className="jc-stack jc-stack--sm" data-reveal-stagger="">
            <InfoRow
              label="WhatsApp"
              value={
                <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                  {site.whatsapp.display}
                </a>
              }
            />
            <InfoRow label="Atendimento" value={`${site.area} · a domicílio`} />
            <InfoRow label="Espécies" value="Cães e gatos" />
          </div>
          <div className="jc-row" data-reveal="rise">
            <Badge variant="preco">Preço aberto</Badge>
            <Badge variant="terra">Sem compromisso</Badge>
          </div>
          <div data-reveal="rise">
            <Disclaimer />
          </div>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}
