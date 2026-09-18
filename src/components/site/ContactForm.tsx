"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ds/Button";
import { Field } from "@/components/ds/Field";
import { JcSymbol } from "@/components/ds/JcSymbol";
import { DUR, gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";
import { site } from "@/lib/site";

/**
 * ContactForm — collects the message and hands it to WhatsApp, which is where
 * the conversation actually happens. The confirmation card fades in with the
 * brand curve; nothing celebrates, it just confirms.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [nome, setNome] = useState("");
  const card = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion() || !card.current) return;
      gsap.from(card.current.children, {
        opacity: 0,
        y: 14,
        duration: DUR.enter,
        ease: "jcOut",
        stagger: 0.07,
      });
    },
    { scope: card, dependencies: [sent] },
  );

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const parts = [
      `Oi, João! Sou ${data.get("nome") || "tutor(a)"}`,
      data.get("bairro") ? `moro em ${data.get("bairro")}` : "",
      data.get("msg") ? `\n\nSobre o meu animal: ${data.get("msg")}` : "",
    ].filter(Boolean);

    setNome(String(data.get("nome") || ""));
    setSent(true);

    window.open(
      `${site.whatsapp.href}?text=${encodeURIComponent(parts.join(", "))}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="jc-card" style={{ boxShadow: "var(--shadow-md)" }} data-reveal="frame">
      {sent ? (
        <div
          ref={card}
          className="jc-stack jc-center"
          style={{ alignItems: "center", gap: "1.2rem", padding: "1.5rem 0" }}
        >
          <JcSymbol size={54} color="var(--terra)" decorative />
          <h3 className="jc-display jc-h3">Recebido{nome ? `, ${nome}` : ""}.</h3>
          <p className="jc-body" style={{ maxWidth: "36ch" }}>
            Eu te respondo pelo WhatsApp com o preço aberto e a próxima janela livre. Sem pressa.
          </p>
          <Button variant="secondary" onClick={() => setSent(false)}>
            Enviar outra mensagem
          </Button>
        </div>
      ) : (
        <form className="jc-form" onSubmit={submit}>
          <div className="jc-form__full">
            <Field id="nome" name="nome" label="Seu nome" placeholder="Como podemos te chamar" required />
          </div>
          <Field
            id="zap"
            name="zap"
            label="WhatsApp"
            type="tel"
            placeholder="(21) 90000-0000"
            required
          />
          <Field id="bairro" name="bairro" label="Bairro" placeholder="Humaitá, Flamengo…" />
          <div className="jc-form__full">
            <Field
              id="msg"
              name="msg"
              label="Conte sobre o seu animal"
              as="textarea"
              placeholder="Espécie, idade e o que você notou"
              hint="Atendemos a Zona Sul do Rio. Não é um serviço de emergência 24h."
            />
          </div>
          <div className="jc-form__full">
            <Button type="submit" size="lg" fullWidth>
              Enviar pelo WhatsApp
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
