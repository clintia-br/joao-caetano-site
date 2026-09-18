import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { SectionHead } from "@/components/site/SectionHead";
import { ServiceHero } from "@/components/site/ServiceHero";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { IncludeList, Step, Timeline } from "@/components/site/Pieces";
import { ButtonLink } from "@/components/ds/Button";
import { Disclaimer } from "@/components/ds/Disclaimer";
import { Quote } from "@/components/ds/Quote";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulta Inteira",
  description:
    "Consulta veterinária domiciliar com duas horas reservadas, anamnese no ambiente real do animal e plano individualizado por escrito. R$ 250, preço aberto.",
};

export default function ConsultaInteiraPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Carro-chefe · em casa"
        title="Consulta Inteira"
        lead="Duas horas reservadas pra olhar o seu animal por inteiro, no lugar onde ele vive. Você sai com um plano por escrito e o porquê de cada decisão."
        price="R$ 250"
        priceNote="por consulta · 2h reservadas"
        photoBrief="João examinando o animal em casa · 4:5"
        primary="Agendar a consulta"
      />

      <Section bg="musgo">
        <div className="jc-grid jc-grid--wide-right">
          <div className="jc-sticky">
            <SectionHead
              number="01"
              eyebrow="O que acontece na visita"
              title="Sem pressa, sem relógio na cara"
            />
          </div>
          <Timeline>
            <Step
              n="1"
              title="Anamnese no ambiente real"
              body="Rotina, ração, espaço, o outro bicho da casa. Onde o animal vive diz muito sobre como ele está."
            />
            <Step
              n="2"
              title="Exame completo, sem apressar"
              body="A janela de duas horas é reservada pra você. A consulta dura o que precisar dentro dela."
            />
            <Step
              n="3"
              title="Decisão compartilhada"
              body="A gente decide junto — inclusive pelo bolso. Exames entram como adicional, só quando fazem sentido."
            />
            <Step
              n="4"
              title="Plano por escrito"
              body="Você recebe o que foi visto, o que fazer e por quê. Nada de receita de bolo."
            />
          </Timeline>
        </div>
      </Section>

      <Section bg="musgo-deep">
        <div className="jc-grid jc-grid--split">
          <PhotoSlot brief="Detalhe do exame em casa · 4:5" framed parallax={6} />
          <div className="jc-stack jc-stack--md">
            <SectionHead number="02" eyebrow="O que você leva" title="Clareza pra decidir" />
            <IncludeList
              items={[
                {
                  t: "Plano individualizado por escrito",
                  b: "Montado pro seu animal, não um modelo genérico.",
                },
                { t: "O porquê de cada decisão", b: "Você entende o raciocínio — e pode dizer não." },
                { t: "Preço aberto, sempre", b: "Adicionais explicados antes, nunca no susto." },
                { t: "Um canal aberto depois", b: "A visita termina, o acompanhamento não." },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section bg="warm">
        <div className="jc-grid jc-grid--split">
          <Quote size="xl" cite={site.name}>
            A visita termina, o acompanhamento não.
          </Quote>
          <div className="jc-stack jc-stack--md" data-reveal-stagger="">
            <p className="jc-body jc-body--lg" data-reveal="rise">
              A Consulta Inteira é o começo de um jeito diferente de cuidar: menos correria, mais
              base. Se der pra resolver com rotina em vez de remédio, é isso que vou te propor.
            </p>
            <div data-reveal="rise">
              <ButtonLink href={site.whatsapp.href} size="lg">
                Agendar pelo WhatsApp
              </ButtonLink>
            </div>
            <div data-reveal="rise">
              <Disclaimer />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
