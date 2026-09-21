import { HomeHero } from "@/components/site/HomeHero";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { DiffItem, ArticleCard } from "@/components/site/Pieces";
import { Marquee } from "@/components/motion/Marquee";
import { FaqList } from "@/components/site/FaqList";
import { PhotoCarousel } from "@/components/site/PhotoCarousel";
import { ButtonLink } from "@/components/ds/Button";
import { ServiceCard } from "@/components/ds/ServiceCard";
import { JcSymbol } from "@/components/ds/JcSymbol";
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
              se sente seguro, perto de você. Gosto de entender como ele vive, o que ele sente e o
              que ele precisa antes de pensar em remédio. É esse cuidado, com calma e atenção, que
              ajuda ele a viver bem e por mais tempo ao seu lado.
            </p>

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

      {/* -------------------------------------------------- diferenciais */}
      <Section bg="musgo" id="diferenciais">
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

      {/* ------------------------------------------- a crença do João */}
      <Section bg="page">
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

      {/* ------------------------------------------------------------ faq */}
      <Section bg="musgo-deep" id="faq" light>
        <div className="jc-grid jc-grid--wide-right">
          <div className="jc-sticky jc-stack jc-stack--md">
            <SectionHead
              number="06"
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
      <Section bg="musgo-deep" id="contato" divider className="jc-section--close">
        <div
          className="jc-stack jc-center"
          style={{ alignItems: "center", gap: "1.8rem" }}
        >
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
