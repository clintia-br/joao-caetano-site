import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Display, Libre_Franklin } from "next/font/google";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { site } from "@/lib/site";
import "@/styles/globals.css";

/* Manual §09: Libre Caslon Display for the name and titles, always 400.
   Libre Franklin for everything else. No substitutions. */
const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-caslon",
});

const franklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-franklin",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Veterinário a domicílio na ${site.area} | ${site.name}, ${site.role}`,
    template: `%s | ${site.name}, ${site.role}`,
  },
  description:
    "Atendimento veterinário em casa para cães e gatos na Zona Sul do Rio. Até duas horas reservadas por consulta, plano por escrito e preço aberto.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: `${site.name} · ${site.descritor}`,
    title: `${site.name} · ${site.role}`,
    description:
      "Cuidado veterinário para cães e gatos na casa deles: até duas horas reservadas, um plano individualizado por escrito e prevenção antes de medicar, pra ele viver bem, ao seu lado, por mais tempo.",
  },
  icons: { icon: "/logo-symbol-musgo.svg" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
};

/* Hidden-until-revealed states only apply once we know motion is wanted.
   The timeout is insurance: if the bundle never arrives, the page un-hides. */
const MOTION_BOOT = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.classList.add('has-motion');setTimeout(function(){if(!r.dataset.motionReady)r.classList.remove('has-motion')},4000)}}catch(e){}`;

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: `${site.name} · ${site.role}`,
  description:
    "Atendimento veterinário a domicílio para cães e gatos na Zona Sul do Rio de Janeiro.",
  url: site.url,
  telephone: site.whatsapp.display,
  areaServed: site.bairros.map((b) => ({ "@type": "Place", name: `${b}, Rio de Janeiro` })),
  address: { "@type": "PostalAddress", addressLocality: "Rio de Janeiro", addressRegion: "RJ", addressCountry: "BR" },
  availableService: [
    { "@type": "Service", name: "Vacina em Casa" },
    { "@type": "Service", name: "Consulta Inteira" },
    { "@type": "Service", name: "Veterinário da Casa" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${caslon.variable} ${franklin.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body>
        <a className="jc-skip-link" href="#main">
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        <MotionRoot />
      </body>
    </html>
  );
}
