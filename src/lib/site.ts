/**
 * Single source of truth for everything the brand considers a "declared gap"
 * (README → Caveats). Nothing here should be invented: these values are
 * placeholders until João confirms them, and they only exist in one place so
 * a confirmation is a one-line change.
 */
export const site = {
  name: "João Caetano",
  role: "Médico-Veterinário",
  descritor: "Veterinário a domicílio",
  tagline: "O veterinário que explica.",
  /** TODO confirmar com o João — número comercial ainda não definido. */
  whatsapp: {
    display: "(21) 98114-4804",
    href: "https://wa.me/5521981144804",
  },
  /** TODO confirmar com o João — nada publica sem o número real do CRMV. */
  crmv: "CRMV-RJ 0000",
  area: "Zona Sul do Rio",
  bairros: [
    "Botafogo",
    "Flamengo",
    "Laranjeiras",
    "Humaitá",
    "Copacabana",
    "Ipanema",
    "Leblon",
    "Gávea",
    "Jardim Botânico",
  ],
  url: "https://joaocaetano.vet.br",
  instagram: "https://instagram.com/",
} as const;

export const NAV = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Conteúdo", href: "/conteudo" },
  { label: "FAQ", href: "/faq" },
] as const;

export const SERVICES = [
  {
    slug: "/vacina-em-casa",
    eyebrow: "Porta de entrada",
    title: "Vacina em Casa",
    description:
      "Aplicação domiciliar de qualquer vacina. Explico a escolha técnica (V8 ou V10, por exemplo, muda conforme a área onde seu animal vive), atualizo a caderneta e lembro do reforço anual.",
    short: "Vacinação domiciliar, escolha técnica explicada.",
    price: "R$ 80–120",
    priceNote: "por aplicação",
    cta: "Ver a tabela",
    featured: false,
  },
  {
    slug: "/consulta-inteira",
    eyebrow: "Carro-chefe",
    title: "Consulta Inteira",
    description:
      "Duas horas reservadas, anamnese no ambiente real e um plano por escrito, decidido junto com você.",
    short: "2h reservadas e um plano por escrito.",
    price: "R$ 250",
    priceNote: "por consulta",
    cta: "Agendar",
    featured: true,
  },
  {
    slug: "/veterinario-da-casa",
    eyebrow: "Recorrência",
    title: "Veterinário da Casa",
    description:
      "Acompanhamento anual: reforços, consultas periódicas e um canal com régua clara pro ano inteiro.",
    short: "Acompanhamento pro ano inteiro.",
    price: "Sob medida",
    priceNote: "plano anual",
    cta: "Conhecer o plano",
    featured: false,
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Atendimento",
    links: [
      { label: "Vacina em Casa", href: "/vacina-em-casa" },
      { label: "Consulta Inteira", href: "/consulta-inteira" },
      { label: "Veterinário da Casa", href: "/veterinario-da-casa" },
    ],
  },
  {
    title: "A marca",
    links: [
      { label: "Sobre o João", href: "/sobre" },
      { label: "Como funciona", href: "/consulta-inteira" },
      { label: "Conteúdo", href: "/conteudo" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp", href: site.whatsapp.href },
      { label: "Instagram", href: site.instagram },
      { label: "Agendar", href: "/contato" },
    ],
  },
] as const;

export const ARTICLES = [
  { slug: "v8-ou-v10", tag: "Prevenção", title: "V8 ou V10? Depende de onde o seu cão vive", read: "4 min" },
  { slug: "mudanca-de-comportamento", tag: "Rotina", title: "Aquela mudança sutil de comportamento", read: "3 min" },
  { slug: "primeiro-ano", tag: "Filhotes", title: "O primeiro ano: o que realmente importa", read: "5 min" },
  { slug: "exame-de-sangue", tag: "Prevenção", title: "Quando o exame de sangue vale a pena", read: "4 min" },
  { slug: "gato-e-o-transporte", tag: "Gatos", title: "Por que o gato odeia o transporte (e o que fazer)", read: "3 min" },
  { slug: "racao-e-peso", tag: "Rotina", title: "Ração, peso e as contas que ninguém faz", read: "4 min" },
  { slug: "menos-e-mais", tag: "Prevenção", title: "Menos é mais: cuidar sem exagerar", read: "3 min" },
] as const;

export const FAQS = [
  {
    q: "Atende em quais bairros?",
    a: "Zona Sul do Rio — Botafogo, Flamengo, Laranjeiras, Humaitá, Copacabana, Ipanema, Leblon, Gávea e Jardim Botânico. Fora do raio, me chama que a gente vê.",
  },
  {
    q: "Quanto tempo dura a consulta?",
    a: "Duas horas reservadas na agenda. Esse tempo existe pra permitir uma avaliação completa e uma conversa sem pressa, mesmo nos dias em que dura menos.",
  },
  {
    q: "É um serviço de emergência?",
    a: "Não. Não é serviço 24h. Em uma emergência, procure imediatamente um serviço veterinário emergencial.",
  },
  {
    q: "E se meu animal precisar de exame?",
    a: "Exames entram como adicional, só quando fizerem sentido pro caso. E sempre explicados antes de fazer.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Pix, cartão ou dinheiro, combinado antes, sem surpresa.",
  },
  {
    q: "Atende gato?",
    a: "Sim, cães e gatos. Pra gato, ser atendido em casa costuma poupar todo o estresse do transporte.",
  },
] as const;
