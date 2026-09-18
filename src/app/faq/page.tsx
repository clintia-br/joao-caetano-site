import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { ButtonLink } from "@/components/ds/Button";
import { JcSymbol } from "@/components/ds/JcSymbol";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { FaqList } from "@/components/site/FaqList";
import { FAQS, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Bairros atendidos, duração da consulta, exames, pagamento e conformidade — as respostas às perguntas mais comuns sobre o atendimento veterinário domiciliar.",
};

const CONFORMIDADE = [
  `Identificação sempre visível: ${site.name} · ${site.role} · ${site.crmv}.`,
  "Conteúdo educativo, nunca diagnóstico pela internet.",
  "Sem promessa de cura, resultado ou “prevenção garantida”.",
  "Sem “o melhor”, sem comparação com colegas, sem exploração de medo.",
  "Fotos de pacientes só com autorização escrita do tutor.",
  "Não é serviço de emergência 24h — em emergência, procure atendimento emergencial.",
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <Section bg="musgo" className="jc-section--hero-pad">
        <div className="jc-grid jc-grid--wide-right">
          <div className="jc-sticky jc-stack jc-stack--md">
            <SectionHead
              as="h1"
              eyebrow="Perguntas frequentes"
              title="O que costumam me perguntar"
            />
            <div data-reveal="rise">
              <ButtonLink href="/contato" size="lg">
                Ainda com dúvida? Me chame
              </ButtonLink>
            </div>
          </div>
          <FaqList items={FAQS} />
        </div>
      </Section>

      <Section bg="warm">
        <div className="jc-grid jc-grid--wide-right">
          <div className="jc-stack jc-stack--sm" data-reveal-stagger="">
            <span data-reveal="rise">
              <JcSymbol size={44} color="var(--musgo)" decorative />
            </span>
            <SplitHeading as="h2" className="jc-display jc-h2">
              Conformidade e ética
            </SplitHeading>
            <p className="jc-body" data-reveal="rise" style={{ maxWidth: "40ch" }}>
              Toda comunicação segue o Código de Ética do Médico-Veterinário e a Resolução CFMV
              1.649/2025.
            </p>
          </div>
          <ul className="jc-numbered" data-reveal-stagger="">
            {CONFORMIDADE.map((t, i) => (
              <li className="jc-numbered__item" key={t} data-reveal="rise">
                <span className="jc-numbered__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="jc-numbered__text">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
