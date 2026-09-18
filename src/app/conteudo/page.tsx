import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { ArticleCard } from "@/components/site/Pieces";
import { Badge } from "@/components/ds/Badge";
import { ButtonLink } from "@/components/ds/Button";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ARTICLES, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conteúdo",
  description:
    "Conteúdo educativo sobre saúde de cães e gatos: vacinas, rotina, filhotes e prevenção — pra você entender o seu animal antes do problema aparecer.",
};

const CATS = ["Todos", "Prevenção", "Rotina", "Filhotes", "Vacinas", "Gatos"] as const;

export default function ConteudoPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <Section bg="musgo-deep" tight className="jc-section--hero-pad">
        <SectionHead
          as="h1"
          eyebrow="Antes que vire emergência"
          title="O que eu costumo explicar"
          lead="Conteúdo pra você entender o seu animal antes do problema aparecer. Sem diagnóstico pela internet — isso é só na consulta."
          wide
        />
        <div className="jc-row jc-mt-md" data-reveal="rise">
          {CATS.map((c, i) => (
            <Badge key={c} variant={i === 0 ? "musgo" : "outline"}>
              {c}
            </Badge>
          ))}
        </div>
      </Section>

      <Section bg="musgo">
        <div className="jc-grid jc-grid--wide-left" style={{ alignItems: "center" }}>
          <PhotoSlot brief="Artigo em destaque · 3:2" ratio="3 / 2" parallax={6} />
          <div className="jc-stack jc-stack--sm" data-reveal-stagger="">
            <div data-reveal="fade">
              <Eyebrow number="01">Em destaque</Eyebrow>
            </div>
            <SplitHeading as="h2" className="jc-display jc-h2">
              {featured.title}
            </SplitHeading>
            <p className="jc-body jc-body--lg" data-reveal="rise">
              A vacina múltipla certa muda conforme a região e a rotina do animal. Explico a
              diferença em linguagem de gente, pra você decidir junto comigo.
            </p>
            <div data-reveal="rise">
              <ButtonLink href="/contato" variant="ghost">
                Ler o artigo
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="musgo">
        <div className="jc-grid jc-grid--articles" data-reveal-stagger="" data-reveal-stagger-step="0.08">
          {rest.map((a) => (
            <ArticleCard
              key={a.slug}
              tag={a.tag}
              title={a.title}
              read={a.read}
              href="/contato"
              brief={`Imagem do artigo · ${a.tag} · 3:2`}
            />
          ))}
        </div>
      </Section>

      <Section bg="page">
        <div className="jc-stack jc-center" style={{ alignItems: "center", gap: "1.6rem" }}>
          <SectionHead
            align="center"
            title="Ficou com uma pergunta?"
            lead="Melhor do que ler é conversar. Me manda a sua dúvida — respondo sem enrolação."
          />
          <div data-reveal="rise">
            <ButtonLink href={site.whatsapp.href} size="lg">
              Falar pelo WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
