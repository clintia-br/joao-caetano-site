import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { ServiceHero } from "@/components/site/ServiceHero";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { IncludeList } from "@/components/site/Pieces";
import { Badge } from "@/components/ds/Badge";
import { ButtonLink } from "@/components/ds/Button";
import { Quote } from "@/components/ds/Quote";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Veterinário da Casa",
  description:
    "Plano anual de acompanhamento veterinário domiciliar: reforços vacinais, consultas periódicas e um canal com régua clara — o veterinário da família, que vai até a família.",
};

export default function VeterinarioDaCasaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Recorrência · plano anual"
        title="Veterinário da Casa"
        lead="Um veterinário que continua por perto o ano inteiro. Reforços aplicados, consultas periódicas e um canal com régua clara — o veterinário da família, que vai até a família."
        price="Sob medida"
        priceNote="desenhado com você"
        photoBrief="João com a família e o animal · 4:5"
        primary="Conversar sobre o plano"
      />

      <Section bg="musgo">
        <div className="jc-grid jc-grid--split-start">
          <div className="jc-stack jc-stack--md">
            <SectionHead
              number="01"
              eyebrow="O que o plano acompanha"
              title="Cuidado que não some"
            />
            <IncludeList
              items={[
                {
                  t: "Reforço vacinal administrado",
                  b: "As vacinas do ano aplicadas em casa, no calendário certo.",
                },
                {
                  t: "Consultas periódicas",
                  b: "Visitas ao longo do ano pra acompanhar, não só apagar incêndio.",
                },
                {
                  t: "Exame de sangue no intervalo do protocolo",
                  b: "Pra enxergar antes o que ainda não deu sinal.",
                },
                {
                  t: "Canal com régua clara",
                  b: "Você sabe quando falar comigo e o que esperar — sem promessa de emergência 24h.",
                },
              ]}
            />
          </div>
          <PhotoSlot brief="Acompanhamento ao longo do ano · 4:5" framed parallax={6} />
        </div>
      </Section>

      <Section bg="musgo-deep">
        <div
          className="jc-stack jc-center"
          style={{ maxWidth: 720, margin: "0 auto", alignItems: "center", gap: "1.4rem" }}
          data-reveal-stagger=""
        >
          <div data-reveal="fade">
            <Badge variant="outline">Único na Zona Sul</Badge>
          </div>
          <SplitHeading as="h2" className="jc-display jc-h2">
            O plano é montado pro seu animal e pra sua rotina.
          </SplitHeading>
          <p className="jc-body jc-body--lg" data-reveal="rise" style={{ maxWidth: "48ch" }}>
            Por isso o preço a gente fecha junto, depois de entender o seu caso — nunca um número de
            prateleira. A primeira conversa é sem compromisso.
          </p>
          <div data-reveal="rise">
            <ButtonLink href="/contato" size="lg">
              Desenhar o meu plano
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section bg="page">
        <Quote size="lg" cite={`${site.name} · ${site.role}`}>
          Ser o veterinário da casa é estar lá antes do problema, não só depois dele.
        </Quote>
      </Section>
    </>
  );
}
