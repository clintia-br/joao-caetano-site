import type { CSSProperties } from "react";
import { HomeHero } from "@/components/site/HomeHero";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { ArticleCard } from "@/components/site/Pieces";
import { JcSymbol } from "@/components/ds/JcSymbol";
import { FaqList } from "@/components/site/FaqList";
import { PhotoCarousel } from "@/components/site/PhotoCarousel";
import { ButtonLink } from "@/components/ds/Button";
import { ServiceCard } from "@/components/ds/ServiceCard";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { ARTICLES, FAQS, MANIFESTO_FOTOS, SERVICES, site } from "@/lib/site";

const DIFERENCIAIS = [
  ["01", "Até duas horas reservadas", "A agenda é sua. A consulta dura o que precisar dentro dessa janela."],
  [
    "02",
    "Preço aberto antes de agendar",
    "Você sabe o preço antes mesmo de agendar uma consulta comigo, e pode decidir se faz sentido ou não o atendimento para seu bichinho. Sem surpresas.",
  ],
  [
    "03",
    "Plano feito sob medida pro seu amigo de 4 patas",
    "Cada pet ganha um plano ajustado para sua necessidade, e eu te explico detalhe por detalhe de cada decisão.",
  ],
  [
    "04",
    "No ambiente real do seu pet",
    "Onde ele vive me diz muita coisa, e eu consigo entender como fazer os ajustes certos.",
  ],
] as const;

const DEPOIMENTOS = [
  {
    name: "Marina e a Nina",
    text: "Ele explicou cada passo, sem pressa. Pela primeira vez saí de uma consulta sabendo exatamente o que fazer, e por quê.",
  },
  {
    name: "Renata e o Tom",
    text: "Chegou no horário, ficou o tempo que precisou e me falou o preço antes. Sem susto, sem enrolação.",
  },
  {
    name: "Paulo e a Fumaça",
    text: "A Fumaça odeia sair de casa. Ser atendida na sala dela mudou tudo. E ele continuou por perto depois.",
  },
] as const;

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
 * prova social → conteúdo → dúvidas → agendar.
 */
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />
      <HomeHero />

      {/* ------------------------------------- quem cuida · photo band */}
      <section className="jc-band jc-on-dark" id="sobre">
        <div className="jc-band__photo" data-reveal="frame">
          <PhotoSlot
            src="/fotos/casa-spitz-branco.jpg"
            alt="João Caetano sorrindo com um spitz branco no colo"
            brief="João atendendo em casa"
            width={900}
            height={1125}
            ratio="auto"
            reveal={false}
            parallax={6}
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
        <div className="jc-band__copy">
          <SectionHead number="01" eyebrow="Quem cuida" title="Cuidar bem tem um caminho" />
          <p className="jc-body jc-body--lg" data-reveal="rise">
            Sou o João, médico-veterinário. Vou até a sua casa e cuido do seu cão ou gato onde ele
            se sente seguro, perto de você. Gosto de entender como ele vive, o que ele sente e o
            que ele precisa antes de pensar em remédio. É esse cuidado, com calma e atenção, que
            ajuda ele a viver bem e por mais tempo ao seu lado.
          </p>
          {/* Credentials: training and council registration, quiet and factual. */}
          <dl className="jc-credenciais" data-reveal="rise">
            <div>
              <dt>Formação</dt>
              <dd>
                {site.formacao.nome} ({site.formacao.sigla})
              </dd>
            </div>
            <div>
              <dt>Registro</dt>
              <dd>{site.crmv}</dd>
            </div>
          </dl>
          <div data-reveal="rise">
            <ButtonLink href="#contato" variant="secondary" size="lg">
              Falar comigo
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* ------------------------------------ diferenciais · numbered cards */}
      <Section bg="page" id="diferenciais" className="jc-arc" style={{ "--arc-from": "var(--musgo-escuro)" } as CSSProperties}>
        <span className="jc-orb jc-orb--terra" aria-hidden="true" style={{ width: 420, height: 420, right: -160, top: 40 }} />
        <SectionHead
          number="02"
          eyebrow="O que muda comigo"
          title="E qual a diferença do meu atendimento?"
          wide
        />
        <div className="jc-grid--two jc-mt-lg" data-reveal-stagger="">
          {DIFERENCIAIS.map(([n, t, b]) => (
            <div className="jc-num-card" key={n} data-reveal="rise">
              <span className="jc-num-card__num">{n}</span>
              <div>
                <h3 className="jc-num-card__title">{t}</h3>
                <p className="jc-num-card__body">{b}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------- a crença do João */}
      <Section bg="page" className="jc-section--crenca">
        {/* João's day-to-day photos open the manifesto (full container
            width); until they are selected the símbolo holds the spot. */}
        {MANIFESTO_FOTOS.length > 0 && (
          <div className="jc-manifesto__fotos" data-reveal="rise">
            <PhotoCarousel items={MANIFESTO_FOTOS} label="João no dia a dia" />
          </div>
        )}
        <div
          className="jc-stack jc-center"
          style={{ maxWidth: 880, margin: "0 auto", alignItems: "center", gap: "1.6rem" }}
          data-reveal-stagger=""
        >
          {MANIFESTO_FOTOS.length === 0 && (
            <span data-reveal="rise">
              <JcSymbol size={46} color="var(--musgo)" decorative />
            </span>
          )}
          <SplitHeading as="h2" className="jc-display jc-h2">
            {"Cuidar do seu animalzinho antes de qualquer emergência é cuidar da qualidade de vida dele por muito mais tempo."}
          </SplitHeading>
          <span className="jc-quote__cite" data-reveal="fade">
            {site.name} · {site.role}
          </span>
          <span className="jc-fio" data-reveal="line" aria-hidden="true" />
          <p
            className="jc-body jc-body--lg"
            style={{ maxWidth: "58ch", textAlign: "left" }}
            data-reveal="rise"
          >
            Eu acredito no seguinte: a prevenção e o cuidado com o seu pet fazem com que o seu dia
            a dia e o dele sejam muito mais tranquilos. Tudo parte de uma análise completa feita na
            sua casa. O ambiente onde vocês vivem diz muito do que podemos melhorar e adaptar. E o
            meu cuidado não acaba depois da primeira visita: você pode contar comigo como um amigo
            da família!
          </p>
        </div>
      </Section>

      {/* ------------------------------------- esteira · tinted panel */}
      <Section bg="page" id="servicos" className="jc-section--servicos">
        <div className="jc-panel-block jc-bg-sage">
          <SectionHead
            align="center"
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
        </div>
      </Section>

      {/* -------------------------------------------------------- tutores */}
      <Section bg="warm" light>
        <SectionHead
          number="04"
          eyebrow="O que os tutores dizem"
          title="Sobre a experiência, sem promessa"
          lead="Depoimentos sobre como é ser atendido em casa: pontualidade, clareza e o tempo dedicado. Nunca sobre desfecho clínico."
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
          Formato de exemplo. Publicar somente com depoimento real e aceite escrito do tutor.
        </p>
      </Section>

      {/* ------------------------------------------------------- conteúdo */}
      <Section bg="musgo" id="conteudo">
        <div
          className="jc-row"
          style={{ justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}
        >
          <SectionHead
            number="05"
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
              image={a.image}
              href="#contato"
              brief={`Imagem do artigo · ${a.tag}`}
            />
          ))}
        </div>
      </Section>

      {/* ------------------------------------ faq · accordion + arch */}
      <Section bg="page" id="faq" className="jc-arc" style={{ "--arc-from": "var(--musgo)" } as CSSProperties}>
        <div className="jc-grid jc-grid--wide-left" style={{ alignItems: "start" }}>
          <div className="jc-stack jc-stack--md">
            <SectionHead
              number="06"
              eyebrow="Perguntas frequentes"
              title="O que costumam me perguntar"
            />
            <FaqList items={FAQS} />
            <div data-reveal="rise">
              <ButtonLink href="#contato" size="lg">
                Ainda com dúvida? Me chame
              </ButtonLink>
            </div>
          </div>
          <div className="jc-sticky jc-hide-mobile">
            <div className="jc-split-figure jc-split-figure--orb-br" data-reveal="frame">
              <span className="jc-orb jc-orb--terra" aria-hidden="true" />
              <div className="jc-arch jc-arch--rect">
                <PhotoSlot
                  src="/fotos/casa-dois-chihuahuas.jpg"
                  alt="João sorrindo com dois chihuahuas de pelo longo no colo"
                  brief="João com dois cães"
                  width={800}
                  height={1000}
                  ratio="auto"
                  reveal={false}
                  parallax={5}
                  sizes="(max-width: 900px) 100vw, 440px"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------- contato · panel */}
      {/* One channel only: the practice runs on WhatsApp, so the close is a
          single strong WhatsApp call — no competing form. */}
      <Section bg="page" id="contato" light>
        <div className="jc-contact-panel jc-on-dark" data-reveal="frame">
          <SectionHead
            align="center"
            number="07"
            eyebrow="O consultório é a sua casa"
            title="Vamos agendar"
            lead="Me conta um pouco sobre o seu pet pelo WhatsApp. Eu respondo com o preço aberto e a primeira janela livre."
          />
          <div className="jc-row" style={{ justifyContent: "center" }} data-reveal="rise">
            <ButtonLink href={site.whatsapp.href} size="lg">
              Agendar pelo WhatsApp
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
