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

/* One-page site: every destination is a section on "/". Ids must match the
   `id` given to each <Section> in app/page.tsx. */
export const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SERVICES = [
  {
    slug: "#contato",
    eyebrow: "Pra começar",
    title: "Vacina em Casa",
    description:
      "Aplicação domiciliar de qualquer vacina. Explico a escolha técnica (V8 ou V10, por exemplo, muda conforme a área onde o seu pet vive), atualizo a caderneta e lembro do reforço anual.",
    short: "Vacinação domiciliar, escolha técnica explicada.",
    price: "R$ 80 a 120",
    priceNote: "por aplicação",
    cta: "Agendar a vacina",
    featured: false,
  },
  {
    slug: "#contato",
    eyebrow: "O atendimento completo",
    title: "Consulta Inteira",
    description:
      "Até duas horas reservadas, anamnese no ambiente real e um plano por escrito, decidido junto com você.",
    short: "Até 2h reservadas e um plano por escrito.",
    price: "R$ 250",
    priceNote: "por consulta",
    cta: "Agendar",
    featured: true,
  },
  {
    slug: "#contato",
    eyebrow: "Pro ano inteiro",
    title: "Veterinário da Casa",
    description:
      "Acompanhamento anual: reforços, consultas periódicas e um canal com régua clara pro ano inteiro.",
    short: "Acompanhamento pro ano inteiro.",
    price: "Sob medida",
    priceNote: "plano anual",
    cta: "Conversar sobre o plano",
    featured: false,
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Atendimento",
    links: [
      { label: "Vacina em Casa", href: "#servicos" },
      { label: "Consulta Inteira", href: "#servicos" },
      { label: "Veterinário da Casa", href: "#servicos" },
    ],
  },
  {
    title: "A marca",
    links: [
      { label: "Sobre o João", href: "#sobre" },
      { label: "O que muda comigo", href: "#diferenciais" },
      { label: "Conteúdo", href: "#conteudo" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "WhatsApp", href: "#contato" },
      { label: "Instagram", href: site.instagram },
      { label: "Agendar", href: "#contato" },
    ],
  },
] as const;

/** A real photo: path under /public, alt text and intrinsic pixel size. */
export type Foto = { src: string; alt: string; width: number; height: number };

/**
 * Fotos do João no dia a dia, shown as the strip at the top of the Manifesto.
 * Empty until the photos are selected: the section falls back to the símbolo.
 * Fill with `{ src: "/fotos/…jpg", alt, width, height }` (see scripts/fotos.mjs).
 */
export const MANIFESTO_FOTOS: Foto[] = [
  { src: "/fotos/dia-a-dia-1.jpg", alt: "João Caetano com um filhote no colo, recebendo uma lambida no rosto", width: 800, height: 1000 },
  { src: "/fotos/dia-a-dia-2.jpg", alt: "João segurando um spitz branco no corredor de uma casa", width: 800, height: 1000 },
  { src: "/fotos/dia-a-dia-3.jpg", alt: "Selfie do João sorrindo ao lado de um spitz branco com a língua de fora", width: 800, height: 1000 },
  { src: "/fotos/dia-a-dia-4.jpg", alt: "João beijando um spitz branco no colo", width: 800, height: 1000 },
  { src: "/fotos/dia-a-dia-5.jpg", alt: "João sorrindo com um spitz caramelo no colo", width: 800, height: 1000 },
  { src: "/fotos/dia-a-dia-6.jpg", alt: "João sentado num banco de jardim com um spitz no colo", width: 800, height: 1000 },
];

export const ARTICLES: readonly {
  slug: string;
  tag: string;
  title: string;
  read: string;
  /** Optional cover photo; without it the card shows the branded placeholder. */
  image?: Foto;
}[] = [
  { slug: "v8-ou-v10", tag: "Prevenção", title: "V8 ou V10? Depende de onde o seu cão vive", read: "4 min", image: { src: "/fotos/artigo-prevencao.jpg", alt: "João sentado no chão examinando um cão de pelo curto com calma", width: 1200, height: 800 } },
  { slug: "mudanca-de-comportamento", tag: "Rotina", title: "Aquela mudança sutil de comportamento", read: "3 min", image: { src: "/fotos/artigo-rotina.jpg", alt: "João sorrindo com um pug de roupinha azul no colo", width: 1200, height: 800 } },
  { slug: "primeiro-ano", tag: "Filhotes", title: "O primeiro ano: o que realmente importa", read: "5 min", image: { src: "/fotos/artigo-filhotes.jpg", alt: "Filhote lambendo o rosto do João", width: 1200, height: 800 } },
  { slug: "exame-de-sangue", tag: "Prevenção", title: "Quando o exame de sangue vale a pena", read: "4 min" },
  { slug: "gato-e-o-transporte", tag: "Gatos", title: "Por que o gato odeia o transporte (e o que fazer)", read: "3 min" },
  { slug: "racao-e-peso", tag: "Rotina", title: "Ração, peso e as contas que ninguém faz", read: "4 min" },
  { slug: "menos-e-mais", tag: "Prevenção", title: "Menos é mais: cuidar sem exagerar", read: "3 min" },
];

export const FAQS = [
  {
    q: "Atende em quais bairros?",
    a: "Zona Sul do Rio: Botafogo, Flamengo, Laranjeiras, Humaitá, Copacabana, Ipanema, Leblon, Gávea e Jardim Botânico. Fora do raio, me chama que a gente vê.",
  },
  {
    q: "Quanto tempo dura a consulta?",
    a: "Reservo até duas horas na agenda. Esse tempo existe pra permitir uma avaliação completa e uma conversa sem pressa. A consulta dura o que precisar dentro dele.",
  },
  {
    q: "É um serviço de emergência?",
    a: "Não. Não é serviço 24h. Em uma emergência, procure imediatamente um serviço veterinário emergencial.",
  },
  {
    q: "E se o meu pet precisar de exame?",
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
