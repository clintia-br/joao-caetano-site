import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/vacina-em-casa",
    "/consulta-inteira",
    "/veterinario-da-casa",
    "/sobre",
    "/conteudo",
    "/contato",
    "/faq",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
