import Link from "next/link";
import { HomeHero } from "@/components/site/HomeHero";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { DiffItem, Step, Timeline, ArticleCard } from "@/components/site/Pieces";
import { Marquee } from "@/components/motion/Marquee";
import { ButtonLink } from "@/components/ds/Button";
import { ServiceCard } from "@/components/ds/ServiceCard";
import { Disclaimer } from "@/components/ds/Disclaimer";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { JcSymbol } from "@/components/ds/JcSymbol";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ARTICLES, SERVICES, site } from "@/lib/site";

const PILLARS = [
  ["01", "Calma", "Duas horas reservadas pra você entender tudo, no seu ritmo. Sem pressa."],
  ["02", "Verdade", "Se dá pra resolver sem remédio, é isso que você vai ouvir."],
  [
    "03",
    "Presença",
    "A visita termina e o acompanhamento continua. Eu volto pra ver como o seu animal respondeu.",
  ],
] as const;

const DIFERENCIAIS = [
  ["01", "Duas horas reservadas", "A agenda é sua. A consulta dura o que precisar dentro dessa janela."],
  [
    "02",
    "Preço aberto antes de agendar",
    "A tabela está no site. Você sabe quanto custa antes de marcar e decide se faz sentido antes mesmo de entrar em contato comigo.",
  ],
  [
    "03",
    "Plano individualizado por escrito",
    "Nada de receita pronta. Cada animal sai com um plano individualizado, e eu te explico detalhe por detalhe de cada decisão.",
  ],
  [
    "04",
    "No ambiente real do animal",
    "Onde o seu pet vive me diz muita coisa, e eu consigo entender como fazer os ajustes certos.",
  ],
] as const;

const DEPOIMENTOS = [
  {
    name: "Marina e a Nina",
    text: "Ele explicou cada passo, sem pressa. Pela primeira vez saí de uma consulta sabendo exatamente o que fazer — e por quê.",
  },
  {
    name: "Renata e o Tom",
    text: "Chegou no horário, ficou o tempo que precisou e me falou o preço antes. Sem susto, sem enrolação.",
  },
  {
    name: "Paulo e a Fumaça",
    text: "A Fumaça odeia sair de casa. Ser atendida na sala dela mudou tudo — e ele continuou por perto depois.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div className="jc-bg-sage">
        <Marquee
          items={[
            "Cuidado que você entende.",
            "O consultório é a sua casa.",
            "Cães e gatos, na Zona Sul.",
            "Nenhuma decisão sem porquê.",
          ]}
        />
      </div>

      {/* ---------------------------------------------------- quem cuida */}
      <Section bg="musgo-deep">
        <div className="jc-grid jc-grid--split">
          <div className="jc-stack jc-stack--md">
            <SectionHead number="01" eyebrow="Quem cuida" title="Cuidar bem tem um caminho" />
            <p className="jc-body jc-body--lg" data-reveal="rise">
              Sou o João, médico-veterinário. Atendo cães e gatos em suas casas, com calma e no
              tempo que cada caso pede. Muita coisa se resolve com ajuste na rotina, e quando dá pra
              começar por aí, é por aí que a gente começa.
            </p>

            <ul className="jc-numbered" data-reveal-stagger="">
              {PILLARS.map(([n, t, b]) => (
                <li className="jc-numbered__item" key={n} data-reveal="rise">
                  <span className="jc-numbered__num" style={{ fontSize: "var(--display-sm)" }}>
                    {n}
                  </span>
                  <span className="jc-stack jc-stack--xs" style={{ gap: "0.3rem" }}>
                    <strong className="jc-diff__title">{t}</strong>
                    <span className="jc-numbered__text">{b}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div data-reveal="rise">
              <ButtonLink href="/sobre" variant="secondary" size="lg">
                Conhecer o João
              </ButtonLink>
            </div>
          </div>

          <div>
            <div className="jc-photo-pair">
              <div className="jc-photo-pair__back">
                <PhotoSlot brief="João atendendo em casa · 4:3" ratio="4 / 3" parallax={6} />
              </div>
              <div className="jc-photo-pair__front">
                <PhotoSlot brief="Detalhe do cuidado · 4:5" ratio="4 / 5" parallax={10} />
              </div>
            </div>

            <div className="jc-row" style={{ marginTop: "0.5rem" }} data-reveal="rise">
              <a
                className="jc-whatsapp"
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale comigo pelo WhatsApp"
              >
                {/* the one exception to the icon-light rule, kept from the UI
                    kit: the WhatsApp glyph on the WhatsApp action */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
              <span className="jc-stack" style={{ gap: "0.2rem" }}>
                <span className="jc-eyebrow-row__label">Fale comigo</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--display-sm)",
                    lineHeight: 1,
                  }}
                >
                  {site.whatsapp.display}
                </span>
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------- diferenciais */}
      <Section bg="musgo">
        <SectionHead
          number="02"
          eyebrow="O que muda comigo"
          title="E qual a diferença do meu atendimento?"
          wide
        />
        <div className="jc-grid jc-grid--three jc-mt-lg" data-reveal-stagger="">
          {DIFERENCIAIS.map(([n, t, b]) => (
            <DiffItem key={n} n={n} title={t} body={b} />
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ manifesto */}
      <Section bg="page">
        <div
          className="jc-stack jc-center"
          style={{ maxWidth: 880, margin: "0 auto", alignItems: "center", gap: "1.6rem" }}
          data-reveal-stagger=""
        >
          <span data-reveal="rise">
            <JcSymbol size={46} color="var(--musgo)" decorative />
          </span>
          <div data-reveal="fade">
            <Eyebrow align="center">Manifesto</Eyebrow>
          </div>
          <SplitHeading
            as="h2"
            className="jc-display jc-h2"
            // the manifesto is the one place the measure narrows to 18ch
          >
            {"Cuidar antes costuma ser mais simples, mais barato e mais tranquilo."}
          </SplitHeading>
          <span className="jc-quote__cite" data-reveal="fade">
            {site.name} · {site.role}
          </span>
          <span className="jc-fio" data-reveal="line" aria-hidden="true" />
          <div
            className="jc-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.6rem 3rem",
              textAlign: "left",
              maxWidth: 720,
            }}
          >
            <p className="jc-body" data-reveal="rise">
              Trabalho com o que dá pra explicar e sustentar. Não com o medo nem com promessa fácil.
              Se o seu animal precisa de remédio, você vai entender exatamente por quê. Se não
              precisa, também.
            </p>
            <p className="jc-body" data-reveal="rise">
              A ideia é simples: arrumar a base primeiro, olhar o animal inteiro, e ficar por perto
              depois que a visita termina.
            </p>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- esteira */}
      <Section bg="musgo-deep" id="servicos">
        <SectionHead
          number="03"
          eyebrow="Como eu posso cuidar"
          title="Um caminho, três passos"
          lead="Começa pela vacina, passa pela consulta que olha o seu pet por completo, e vira acompanhamento pro ano todo."
        />
        <div className="jc-grid jc-grid--cards jc-mt-lg" data-reveal-stagger="" data-reveal-stagger-step="0.12">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              eyebrow={s.eyebrow}
              title={s.title}
              description={s.description}
              price={s.price}
              priceNote={s.priceNote}
              cta={s.cta}
              href={s.slug}
              featured={s.featured}
            />
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------- como funciona */}
      <Section bg="musgo-deep">
        <div className="jc-grid jc-grid--wide-right">
          <div className="jc-sticky">
            <SectionHead number="04" eyebrow="Como funciona" title="Da mensagem à casa" />
          </div>
          <Timeline>
            <Step
              n="1"
              title="Você me chama"
              body="Manda uma mensagem contando do seu animal. Eu respondo com o preço aberto e a primeira janela livre."
            />
            <Step
              n="2"
              title="Eu vou até você"
              body="Chego no horário, com duas horas reservadas. Examino o pet no lugar onde ele vive, sem precisar botar ninguém na caixa de transporte."
            />
            <Step
              n="3"
              title="Saímos com um plano"
              body="Você recebe por escrito o que foi visto, o que fazer e o porquê."
            />
          </Timeline>
        </div>
      </Section>

      {/* -------------------------------------------------------- tutores */}
      <Section bg="warm">
        <SectionHead
          number="05"
          eyebrow="O que os tutores dizem"
          title="Sobre a experiência, sem promessa"
          lead="Depoimentos sobre como é ser atendido em casa — pontualidade, clareza e o tempo dedicado. Nunca sobre desfecho clínico."
          wide
        />
        <div className="jc-grid jc-grid--cards jc-mt-lg" data-reveal-stagger="">
          {DEPOIMENTOS.map((d) => (
            <figure className="jc-card jc-review" key={d.name} data-reveal="rise">
              <span className="jc-review__kicker">Depoimento</span>
              <blockquote className="jc-review__body">{d.text}</blockquote>
              <figcaption className="jc-review__foot">
                <span className="jc-review__avatar" aria-hidden="true">
                  <PhotoSlot brief="" ratio="1 / 1" reveal={false} />
                </span>
                <span className="jc-review__name">{d.name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="jc-note jc-center jc-mt-sm" data-reveal="fade">
          Formato de exemplo — publicar somente com depoimento real e aceite escrito do tutor.
        </p>
      </Section>

      {/* ------------------------------------------------------- conteúdo */}
      <Section bg="musgo">
        <div
          className="jc-row"
          style={{ justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}
        >
          <SectionHead
            number="06"
            eyebrow="Antes que vire emergência"
            title="O que eu costumo explicar"
          />
          <div data-reveal="fade">
            <ButtonLink href="/conteudo" variant="ghost">
              Ver todo o conteúdo
            </ButtonLink>
          </div>
        </div>
        <div className="jc-grid jc-grid--articles jc-mt-lg" data-reveal-stagger="">
          {ARTICLES.slice(0, 3).map((a) => (
            <ArticleCard
              key={a.slug}
              tag={a.tag}
              title={a.title}
              read={a.read}
              href="/conteudo"
              brief={`Imagem do artigo · ${a.tag} · 3:2`}
            />
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ cta */}
      <Section bg="page">
        <div
          className="jc-stack jc-center"
          style={{ alignItems: "center", gap: "1.8rem" }}
          data-reveal-stagger=""
        >
          <SectionHead
            align="center"
            title="Será que o seu animal está bem?"
            lead="Se essa pergunta apareceu, já é motivo pra conversar. É só uma mensagem, você decide o resto."
          />
          <div className="jc-row" style={{ justifyContent: "center" }} data-reveal="rise">
            <ButtonLink href={site.whatsapp.href} size="lg">
              Agendar pelo WhatsApp
            </ButtonLink>
            <ButtonLink href="/vacina-em-casa" variant="secondary" size="lg">
              Ver a tabela de preços
            </ButtonLink>
          </div>
          <div style={{ maxWidth: 560, width: "100%" }} data-reveal="rise">
            <Disclaimer />
          </div>
          <p className="jc-note" data-reveal="fade">
            WhatsApp:{" "}
            <Link href={site.whatsapp.href}>{site.whatsapp.display}</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
