import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { ServiceHero } from "@/components/site/ServiceHero";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { IncludeList } from "@/components/site/Pieces";
import { Badge } from "@/components/ds/Badge";
import { ButtonLink } from "@/components/ds/Button";
import { PriceItem } from "@/components/ds/PriceItem";
import { Quote } from "@/components/ds/Quote";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vacina em Casa",
  description:
    "Vacinação domiciliar para cães e gatos na Zona Sul do Rio, com a escolha técnica explicada, caderneta em dia e lembrete de reforço anual. Tabela de preços aberta.",
};

export default function VacinaEmCasaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Porta de entrada · em casa"
        title="Vacina em Casa"
        lead="Qualquer vacina aplicada no conforto da sua casa, com a escolha técnica explicada e o reforço anual lembrado. Sem transporte, sem sala de espera."
        price="R$ 80–120"
        priceNote="por aplicação · tabela aberta"
        photoBrief="João aplicando vacina em casa · 4:5"
        primary="Marcar a vacina"
      />

      <Section bg="musgo">
        <div className="jc-grid jc-grid--split-start">
          <div className="jc-stack jc-stack--md">
            <SectionHead number="01" eyebrow="O que está incluído" title="Mais do que aplicar" />
            <IncludeList
              items={[
                {
                  t: "A escolha técnica explicada",
                  b: "V8 ou V10 depende da área onde o seu cão vive. Eu explico a diferença antes de aplicar.",
                },
                { t: "Caderneta em dia", b: "Registro de tudo que foi aplicado, com data e lote." },
                {
                  t: "Lembrete de reforço anual",
                  b: "Você não precisa lembrar sozinho — eu aviso quando chega a hora.",
                },
                { t: "Cães e gatos", b: "Atendo as duas espécies, cada uma no seu protocolo." },
              ]}
            />
          </div>

          <div className="jc-card jc-card--table" data-reveal="frame">
            <p className="jc-eyebrow-row__label" style={{ padding: "0.6rem 0 0.4rem" }}>
              Tabela pública
            </p>
            <div data-reveal-stagger="">
              <PriceItem label="Antirrábica" detail="por aplicação" price="R$ 90" />
              <PriceItem label="V10 (cães)" detail="múltipla" price="R$ 120" />
              <PriceItem label="Gripe (tosse dos canis)" price="R$ 120" />
              <PriceItem label="Pro-Heart" detail="por kg" price="R$ 30/kg" />
            </div>
          </div>
        </div>
      </Section>

      <Section bg="page">
        <div className="jc-grid jc-grid--wide-left">
          <div className="jc-stack jc-stack--md" data-reveal-stagger="">
            <div data-reveal="fade">
              <Badge variant="musgo">Sub-oferta · filhotes</Badge>
            </div>
            <SplitHeading as="h2" className="jc-display jc-h2">
              Primeiro Ano Completo
            </SplitHeading>
            <p className="jc-body jc-body--lg" data-reveal="rise">
              O calendário inteiro do primeiro ano do filhote, montado e acompanhado: 1 antirrábica,
              3 doses de V10 e 2 de gripe. Seis aplicações, todas em casa.
            </p>
            <p className="jc-service-hero__price" data-reveal="rise">
              <span className="jc-service-hero__price-value">~R$ 680</span>
              <span className="jc-service-hero__price-note">6 aplicações · primeiro ano</span>
            </p>
            <div data-reveal="rise">
              <ButtonLink href="/contato" size="lg">
                Montar o calendário
              </ButtonLink>
            </div>
          </div>
          <PhotoSlot brief="Foto de filhote no colo do tutor · 4:5" parallax={6} />
        </div>
      </Section>

      <Section bg="musgo-deep">
        <Quote size="lg" cite={`${site.name} · ${site.role}`}>
          Vacina não é só uma picada. É a escolha certa, no animal certo, na hora certa.
        </Quote>
      </Section>
    </>
  );
}
