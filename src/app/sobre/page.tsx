import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { DiffItem } from "@/components/site/Pieces";
import { Badge } from "@/components/ds/Badge";
import { ButtonLink } from "@/components/ds/Button";
import { LogoLockup } from "@/components/ds/LogoLockup";
import { Quote } from "@/components/ds/Quote";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre o João",
  description:
    "João Caetano, médico-veterinário. Atendimento domiciliar para cães e gatos na Zona Sul do Rio: consulta sem pressa, explicação do porquê e prevenção antes do remédio.",
};

export default function SobrePage() {
  return (
    <>
      <section className="jc-service-hero jc-on-dark">
        <div className="jc-container jc-service-hero__grid">
          <PhotoSlot brief="Retrato do João · 4:5" framed parallax={6} priority />
          <div className="jc-stack jc-stack--md" data-reveal-stagger="">
            <div data-reveal="fade">
              <Badge variant="outline">
                {site.role} · {site.crmv}
              </Badge>
            </div>
            <SplitHeading as="h1" className="jc-display jc-h1" trigger="load" delay={0.15}>
              Oi, eu sou o João.
            </SplitHeading>
            <p className="jc-lead" data-reveal="rise">
              Atendo cães e gatos na casa deles, na Zona Sul do Rio. Gosto de consulta sem pressa,
              de explicar o porquê das coisas e de resolver com rotina sempre que dá — antes de
              partir pro remédio.
            </p>
            <div className="jc-row" data-reveal="rise">
              <ButtonLink href={site.whatsapp.href} size="lg">
                Falar comigo
              </ButtonLink>
              <ButtonLink href="/consulta-inteira" variant="secondary" size="lg">
                Como é a consulta
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section bg="warm">
        <div className="jc-grid jc-grid--split">
          <Quote size="xl" cite={site.name}>
            Não existe receita de bolo. Cada animal é um.
          </Quote>
          <div className="jc-stack jc-stack--sm" data-reveal-stagger="">
            <p className="jc-body jc-body--lg" data-reveal="rise">
              Muita coisa que preocupa o tutor se resolve arrumando a base primeiro: alimentação,
              rotina, o ambiente. Quando a gente cuida antes, costuma ser mais simples, mais barato
              e mais tranquilo.
            </p>
            <p className="jc-body jc-body--lg" data-reveal="rise">
              E quando precisa de remédio, precisa mesmo — aí eu explico exatamente por quê. É esse
              o combinado: você nunca sai sem entender.
            </p>
          </div>
        </div>
      </Section>

      <Section bg="musgo-deep">
        <SectionHead number="01" eyebrow="Como eu trabalho" title="Três coisas que não mudam" />
        <div className="jc-grid jc-grid--three jc-mt-lg" data-reveal-stagger="">
          <DiffItem
            n="01"
            title="Calma, nunca urgência falsa"
            body="Não vendo medo. Se não é grave, eu te digo que não é — e a gente acompanha."
          />
          <DiffItem
            n="02"
            title="Verdade sobre o que é preciso"
            body="Se não precisa de remédio, é isso que você ouve. A prática é honesta, a conversa também."
          />
          <DiffItem
            n="03"
            title="Presença depois da visita"
            body="Sou o veterinário que volta. O acompanhamento continua quando a porta se fecha."
          />
        </div>
      </Section>

      <Section bg="musgo">
        <div className="jc-gallery" data-reveal-stagger="" data-reveal-stagger-step="0.14">
          <PhotoSlot brief="João + animal · 4:5" parallax={5} />
          <PhotoSlot brief="Atendimento em casa · 4:5" parallax={7} />
          <PhotoSlot brief="Detalhe do cuidado · 4:5" parallax={5} />
        </div>
        <p className="jc-note jc-center jc-mt-sm" data-reveal="fade">
          Fotos reais dos atendimentos, publicadas com autorização escrita do tutor.
        </p>
      </Section>

      <Section bg="page">
        <div style={{ display: "flex", justifyContent: "center" }} data-reveal="rise">
          <LogoLockup layout="institutional" size={64} />
        </div>
      </Section>
    </>
  );
}
