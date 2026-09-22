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
  /** Registro no conselho: aparece no footer, no aviso CFMV e em "Quem cuida". */
  crmv: "CRMV-RJ 22314",
  /** Formação: graduação em Medicina Veterinária. */
  formacao: { sigla: "UFRRJ", nome: "Universidade Federal Rural do Rio de Janeiro" },
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
  { src: "/fotos/casa-gato-laranja.jpg", alt: "João sorrindo com um gato laranja no colo, na porta de uma casa", width: 800, height: 1000 },
  { src: "/fotos/casa-filhote-lambida.jpg", alt: "João com um filhote no colo, recebendo uma lambida no rosto", width: 800, height: 1000 },
  { src: "/fotos/casa-shih-tzu-abraco.jpg", alt: "João agachado na sala de um tutor, abraçando um shih tzu", width: 800, height: 1000 },
  { src: "/fotos/casa-yorkie-janela.jpg", alt: "João sorrindo com um yorkshire no colo, na luz da janela", width: 800, height: 1000 },
  { src: "/fotos/apto-bulldog-sofa.jpg", alt: "João no sofá de um apartamento com um filhote de bulldog no colo", width: 800, height: 1000 },
  { src: "/fotos/casa-dois-caes-sala.jpg", alt: "João agachado na sala de um tutor cumprimentando dois cães", width: 800, height: 1000 },
  { src: "/fotos/casa-exame-no-chao.jpg", alt: "João sentado no chão examinando um cão de pelo curto com calma", width: 800, height: 1000 },
  { src: "/fotos/jardim-spitz-banco.jpg", alt: "João sentado num banco de jardim com um spitz no colo", width: 800, height: 1000 },
];

export const ARTICLES: readonly {
  slug: string;
  tag: string;
  title: string;
  read: string;
  /** Optional cover photo; without it the card shows the branded placeholder. */
  image?: Foto;
}[] = [
  { slug: "v8-ou-v10", tag: "Prevenção", title: "V8 ou V10, qual a diferença entre as duas?", read: "4 min", image: { src: "/fotos/artigo-vacina-no-sofa.jpg", alt: "Filhote de bulldog deitado no sofá recebendo vacina em casa", width: 1200, height: 800 } },
  { slug: "mudanca-de-comportamento", tag: "Rotina", title: "Quando a mudança de comportamento do seu pet merece atenção?", read: "3 min", image: { src: "/fotos/artigo-cao-idoso-carinho.jpg", alt: "João agachado segurando com calma o rosto de um cão idoso", width: 1200, height: 800 } },
  { slug: "primeiro-ano", tag: "Filhotes", title: "Primeiro ano: quais são os cuidados essenciais para o desenvolvimento do seu filhote?", read: "5 min", image: { src: "/fotos/artigo-filhote-no-sofa.jpg", alt: "João examinando um filhote de bulldog no sofá, com luz da janela", width: 1200, height: 800 } },
  { slug: "exame-de-sangue", tag: "Prevenção", title: "Quando o exame de sangue vale a pena", read: "4 min" },
  { slug: "gato-e-o-transporte", tag: "Gatos", title: "Por que o gato odeia o transporte (e o que fazer)", read: "3 min" },
  { slug: "racao-e-peso", tag: "Rotina", title: "Ração, peso e as contas que ninguém faz", read: "4 min" },
  { slug: "menos-e-mais", tag: "Prevenção", title: "Menos é mais: cuidar sem exagerar", read: "3 min" },
];

export const FAQS = [
  // ---- antes de agendar
  {
    q: "Como eu agendo?",
    a: "Pelo WhatsApp. Você me conta do seu pet em poucas linhas: espécie, idade, o que está acontecendo ou se é rotina. Eu respondo com o preço aberto e a primeira janela livre. Sem formulário, sem cadastro.",
  },
  {
    q: "Atende em quais bairros?",
    a: "Zona Sul do Rio: Botafogo, Flamengo, Laranjeiras, Humaitá, Copacabana, Ipanema, Leblon, Gávea e Jardim Botânico. Fora desse raio, me chama que a gente vê: às vezes dá, às vezes eu te indico alguém mais perto.",
  },
  {
    q: "Quanto custa?",
    a: "Está tudo no site, antes de você me chamar: vacina de R$ 80 a 120 por aplicação, consulta completa R$ 250, plano anual sob medida. Exames e medicamentos são adicionais, e você sabe o valor antes de qualquer decisão. Pagamento por Pix, cartão ou dinheiro, combinado antes.",
  },
  {
    q: "Com quanta antecedência preciso marcar?",
    a: "Me chama pelo WhatsApp que eu te passo a primeira janela livre. Quanto antes você marcar, mais opções de horário. Se for algo que não pode esperar, me diz na mensagem que eu vejo o que dá.",
  },
  // ---- a visita
  {
    q: "Como é a primeira consulta?",
    a: "Eu chego, sento com você e ouço a história do seu pet: rotina, comida, comportamento, o que mudou. Depois examino ele no lugar onde ele fica mais tranquilo, sem pressa. No fim a gente conversa sobre o que eu vi e você recebe um plano por escrito, com o porquê de cada decisão.",
  },
  {
    q: "Quanto tempo dura?",
    a: "Reservo até duas horas na agenda. Não é que a consulta precise durar tudo isso, é que ela dura o que precisar. Eu não marco outro atendimento colado no seu.",
  },
  {
    q: "Preciso preparar alguma coisa em casa?",
    a: "Muito pouco. Um lugar onde o seu pet costuma ficar à vontade, a caderneta de vacinação se tiver, e a embalagem da ração e de remédios que ele use. Se precisar de algo a mais pra uma visita específica, eu te aviso antes.",
  },
  {
    q: "E se precisar de exame?",
    a: "Quando o exame pode ser feito em casa, como uma coleta de sangue, eu resolvo ali mesmo e o material vai pro laboratório. Exames de imagem, como ultrassom e raio-x, precisam de clínica: eu te indico onde fazer e interpreto o resultado com você. Exame só entra quando muda a decisão, e sempre explicado antes.",
  },
  // ---- depois
  {
    q: "O que acontece depois da visita?",
    a: "O acompanhamento continua. Eu volto a falar com você pra saber como o seu pet respondeu e ajusto o plano se precisar. Você não fica sozinho com um papel na mão.",
  },
  {
    q: "Como funciona o plano anual?",
    a: "É pra quem quer um veterinário de referência o ano inteiro: vacinas, consultas periódicas e um canal aberto comigo pra tirar dúvidas. O valor é sob medida porque depende da idade e da rotina do seu pet. A gente monta juntos, sem surpresa.",
  },
  // ---- situações específicas
  {
    q: "Meu pet é medroso ou bravo com veterinário. Dá pra atender em casa?",
    a: "Na maioria das vezes é justamente em casa que dá. Sem transporte, sem sala de espera e sem cheiro de clínica, muito cão e muito gato que \"não deixa mexer\" se examina tranquilo. Eu vou no ritmo dele. Se em algum caso não for seguro, eu te falo com honestidade e a gente pensa em alternativas.",
  },
  {
    q: "O que você não faz em casa?",
    a: "Cirurgias, internação e emergências. Se o seu pet precisar de algo assim, eu te oriento e indico onde ir. Este não é um serviço 24h: em uma emergência, procure imediatamente um atendimento emergencial.",
  },
] as const;
