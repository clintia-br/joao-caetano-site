import { HomeHero } from "@/components/site/HomeHero";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { DiffItem, Step, Timeline, ArticleCard, InfoRow } from "@/components/site/Pieces";
import { Marquee } from "@/components/motion/Marquee";
import { FaqList } from "@/components/site/FaqList";
import { PhotoCarousel, type CarouselPhoto } from "@/components/site/PhotoCarousel";
import { ButtonLink } from "@/components/ds/Button";
import { ServiceCard } from "@/components/ds/ServiceCard";
import { Disclaimer } from "@/components/ds/Disclaimer";
import { Badge } from "@/components/ds/Badge";
import { Eyebrow } from "@/components/ds/Eyebrow";
import { JcSymbol } from "@/components/ds/JcSymbol";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ARTICLES, FAQS, SERVICES, site } from "@/lib/site";

const PILLARS = [
  ["Calma", "Até duas horas reservadas pra você entender tudo, no seu ritmo. Sem pressa."],
  ["Verdade", "Se dá pra resolver sem remédio, é isso que você vai ouvir."],
  [
    "Presença",
    "A visita termina e o acompanhamento continua. Eu volto pra ver como o seu animal respondeu.",
  ],
] as const;

const DIFERENCIAIS = [
  ["01", "Até duas horas reservadas", "A agenda é sua. A consulta dura o que precisar dentro dessa janela."],
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

/* Day-to-day photo strip. Slots are placeholders until João's photos land —
   add `src`, `alt`, `width` and `height` to each one to fill it. */
const GALERIA: CarouselPhoto[] = [
  { brief: "João com um paciente em casa · 4:5" },
  { brief: "Consulta na sala do tutor · 4:5" },
  { brief: "Vacina aplicada em casa · 4:5" },
  { brief: "João conversando com o tutor · 4:5" },
  { brief: "Gato sendo examinado no sofá · 4:5" },
  { brief: "Detalhe do cuidado · 4:5" },
];

/* The strip only renders once at least one real photo is in — a row of
   placeholders in production never looks finished. */
const GALERIA_READY = GALERIA.some((p) => p.src);

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/**
 * Single-page site. Every section carries the id its nav anchor points to
 * (see NAV / FOOTER_COLUMNS in lib/site.ts and the scroll spy in SiteHeader).
 * Order is the sales narrative: quem é → o que muda → manifesto → serviços →
 * como funciona → prova social → conteúdo → dúvidas → agendar.
 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <HomeHero />

      <div className="jc-bg-sage">
        <Marquee
          items={[
            "Cuidado que você entende.",
            "O consultório é a sua casa.",
            "Cães e gatos, em casa, na Zona Sul.",
            "Nenhuma decisão sem porquê.",
          ]}
        />
      </div>

      {/* ---------------------------------------------------- quem cuida */}
      <Section bg="musgo-deep" id="sobre">
        <div className="jc-grid jc-grid--split">
          <div className="jc-stack jc-stack--md">
            <SectionHead number="01" eyebrow="Quem cuida" title="Cuidar bem tem um caminho" />
            <p className="jc-body jc-body--lg" data-reveal="rise">
              Sou o João, médico-veterinário. Vou até a sua casa e cuido do seu cão ou gato onde ele
              se sente seguro — perto de você. Gosto de entender como ele vive, o que ele sente e o
              que ele precisa antes de pensar em remédio. É esse cuidado, com calma e atenção, que
              ajuda ele a viver bem por mais tempo ao seu lado.
            </p>

            <ul className="jc-pillars" data-reveal-stagger="">
              {PILLARS.map(([t, b]) => (
                <li className="jc-pillar" key={t} data-reveal="rise">
                  <strong className="jc-pillar__title">{t}</strong>
                  <span className="jc-pillar__text">{b}</span>
                </li>
              ))}
            </ul>

            <div data-reveal="rise">
              <ButtonLink href="#contato" variant="secondary" size="lg">
                Falar comigo
              </ButtonLink>
            </div>
          </div>

          <div>
            <div className="jc-photo-pair">
              <div className="jc-photo-pair__back">
                <PhotoSlot
                  src="/fotos/cuidar-1.jpg"
                  alt="Filhote recebendo vacina em casa"
                  brief="Detalhe do cuidado"
                  width={1000}
                  height={1333}
                  ratio="3 / 4"
                  parallax={6}
                />
              </div>
              <div className="jc-photo-pair__front">
                <PhotoSlot
                  src="/fotos/cuidar-2.jpg"
                  alt="João Caetano segurando um gato durante o atendimento em casa"
                  brief="João atendendo em casa"
                  width={1100}
                  height={1467}
                  ratio="4 / 5"
                  parallax={10}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------- galeria / dia a dia */}
      {GALERIA_READY && (
        <Section bg="page" light>
          <SectionHead eyebrow="No dia a dia" title="Em casa, com eles" />
          <div className="jc-mt-lg" data-reveal="rise">
            <PhotoCarousel items={GALERIA} />
          </div>
        </Section>
      )}

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
          <SplitHeading as="h2" className="jc-display jc-h2">
            {"Cuidar antes costuma ser mais simples, mais barato e mais tranquilo."}
          </SplitHeading>
          <span className="jc-quote__cite" data-reveal="fade">
            {site.name} · {site.role}
          </span>
          <span className="jc-fio" data-reveal="line" aria-hidden="true" />
          <div
            className="jc-grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: "1.6rem 3rem",
              textAlign: "left",
              width: "100%",
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
              key={s.title}
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
      <Section bg="musgo-deep" id="como-funciona" divider>
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
              body="Chego no horário, com até duas horas reservadas. Examino o pet no lugar onde ele vive, sem precisar botar ninguém na caixa de transporte."
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
      <Section bg="warm" light>
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
              {/* no avatar until there is a real one: an empty circle reads
                  as a missing photo, a short fio reads as a signature */}
              <figcaption className="jc-review__foot">
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
      <Section bg="musgo" id="conteudo">
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
            <ButtonLink href="#contato" variant="ghost">
              Tirar uma dúvida
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
              href="#contato"
              brief={`Imagem do artigo · ${a.tag}`}
            />
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ faq */}
      <Section bg="musgo-deep" id="faq" light>
        <div className="jc-grid jc-grid--wide-right">
          <div className="jc-sticky jc-stack jc-stack--md">
            <SectionHead
              number="07"
              eyebrow="Perguntas frequentes"
              title="O que costumam me perguntar"
            />
            <div data-reveal="rise">
              <ButtonLink href="#contato" size="lg">
                Ainda com dúvida? Me chame
              </ButtonLink>
            </div>
          </div>
          <FaqList items={FAQS} />
        </div>
      </Section>

      {/* -------------------------------------------------------- contato */}
      {/* One channel only: the practice runs on WhatsApp, so the close is a
          single strong WhatsApp call — no competing form. */}
      <Section bg="musgo-deep" id="contato" divider>
        <div
          className="jc-stack jc-center"
          style={{ alignItems: "center", gap: "1.8rem" }}
        >
          <SectionHead
            align="center"
            number="08"
            eyebrow="O consultório é a sua casa"
            title="Vamos agendar"
            lead="Me conta um pouco sobre o seu animal pelo WhatsApp. Eu respondo com o preço aberto e a primeira janela livre."
          />

          <div className="jc-row" style={{ justifyContent: "center" }} data-reveal="rise">
            <ButtonLink href={site.whatsapp.href} size="lg">
              Agendar pelo WhatsApp
            </ButtonLink>
          </div>

          <div className="jc-row" style={{ justifyContent: "center", gap: "0.6rem" }} data-reveal="rise">
            <Badge variant="preco">Preço aberto</Badge>
            <Badge variant="terra">Sem compromisso</Badge>
          </div>

          <div className="jc-stack jc-stack--sm" style={{ width: "100%", maxWidth: 460 }} data-reveal="rise">
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

          <div className="jc-contact-disclaimer" style={{ maxWidth: 560, width: "100%" }} data-reveal="rise">
            <Disclaimer />
          </div>
        </div>
      </Section>
    </>
  );
}
