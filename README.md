# João Caetano · Veterinário a domicílio — site

**Landing page** (one-page) construída em **Next.js (App Router)** a partir do
design system "João Caetano — Design System" (manual da marca v2 + brief
estratégico), com animações **GSAP** (ScrollTrigger + SplitText).

Tudo vive em uma única rota `/`, dividida em seções ancoradas
(`#sobre`, `#diferenciais`, `#servicos`, `#conteudo`, `#faq`, `#contato`).
A navegação e o rodapé usam links de âncora; o header tem scroll-spy que
acompanha a seção em leitura. Para voltar a um site multipágina, cada seção
de `app/page.tsx` pode virar sua própria rota.

## Rodando

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de produção
npm start
```

## Estrutura

- `src/styles/tokens/` — tokens copiados do design system, sem alteração de valores.
- `src/styles/` — `globals.css` (base, layout, estados de motion) e `components.css` (componentes).
- `src/components/ds/` — primitivas do design system (Button, Badge, Eyebrow, JcSymbol, LogoLockup, ServiceCard, PriceItem, Quote, Disclaimer, Field).
- `src/components/site/` — seções e peças de página (Section, SectionHead, PhotoSlot, HomeHero, SiteHeader com scroll-spy, SiteFooter, FaqList…).
- `src/components/motion/` — camada GSAP (MotionRoot, SplitHeading, Marquee, ScrollProgress).
- `src/lib/site.ts` — **única fonte** de conteúdo/configuração (WhatsApp, CRMV, serviços, FAQ…).
- `src/lib/gsap.ts` — registro de plugins e curvas da marca (`jcStandard`, `jcOut`).

## Responsividade (mobile-first)

O CSS é **mobile-first**: o estilo base é o layout de celular e as telas maiores
são aprimoradas com `@media (min-width: …)`. Breakpoints:

- **421px** — o descritor volta a aparecer ao lado do nome no header.
- **561px** — as colunas do footer passam de 2 para 3.
- **621px** — formulário passa a 2 colunas.
- **761px** — galeria passa a 3 colunas; cards ganham sombra e raio maior; o
  aviso CFMV vira um card; diferenciais voltam ao layout empilhado.
- **881px** — o menu vira a navegação horizontal (abaixo disso, hambúrguer + drawer).
- **901px** — grids de duas colunas, hero em duas colunas (foto como card ao
  lado do texto) e elementos `sticky` são ativados.

No celular a escala tipográfica é um degrau menor (lead 18px, body 16–16,5px,
H1 30px), o hero mostra a foto primeiro (52svh) e o texto embaixo, o CTA
principal ocupa a largura toda, os cards são só hairline + superfície, e todo
link ou botão tem área de toque de pelo menos 44px. A galeria "No dia a dia"
só renderiza quando pelo menos uma foto real estiver em `GALERIA`.

## Movimento ("a marca não grita")

Todo o vocabulário de animação vem do manual §13: fades e deslocamentos curtos,
sem bounce, sem spring, sem zoom. `prefers-reduced-motion` é respeitado em tudo
(inclusive sem JavaScript a página renderiza completa). Elementos entram por
`data-reveal`; o fio terra se desenha; fotos se descobrem por clip-path; o
parallax é de poucos por cento. Abaixo de 901px o deslocamento cai para 12px,
o stagger encurta e o parallax é desligado (briga com o scroll nativo e gasta
bateria); o hero em coluna única entra por fade em vez de wipe lateral.

## Pendências declaradas (não inventar — confirmar com o João)

Centralizadas em `src/lib/site.ts`:

- **CRMV-RJ**: placeholder `CRMV-RJ 0000` — *nada publica sem o número real*.
- **WhatsApp comercial**: usando o número que constava no UI kit; confirmar.
- **Fotografia**: a marca só usa fotografia real (manual §11). Enquanto não
  existe, cada `PhotoSlot` renderiza um campo musgo com o padrão de símbolos e
  o brief da foto. Para trocar: `<PhotoSlot src="/fotos/arquivo.jpg" … />`.
- **Domínio** (`site.url`), Instagram e preço final do plano anual.

## Conformidade (CFMV)

Toda página carrega a linha de identificação (componente `Disclaimer`) e a nota
"não é emergência 24h". Depoimentos são formato de exemplo — publicar somente
com depoimento real e aceite escrito do tutor.
