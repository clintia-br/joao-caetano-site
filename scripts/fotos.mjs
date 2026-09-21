/**
 * Compress João's photos for the site.
 *
 *   node scripts/fotos.mjs <origem> [destino=public/fotos]
 *
 * Every jpg/png/heic-converted file in <origem> is resized to fit 1600px on
 * the long edge, saved as progressive mozjpeg (q78) in <destino>, and the
 * script prints a ready-to-paste `Foto` entry (src, width, height) per file.
 */
import { readdir, mkdir } from "node:fs/promises";
import { extname, join, basename } from "node:path";
import sharp from "sharp";

const [, , src, dest = "public/fotos"] = process.argv;
if (!src) {
  console.error("uso: node scripts/fotos.mjs <origem> [destino]");
  process.exit(1);
}

await mkdir(dest, { recursive: true });
const files = (await readdir(src)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

for (const file of files) {
  const name = basename(file, extname(file)).toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".jpg";
  const out = join(dest, name);
  const info = await sharp(join(src, file))
    .rotate()
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true, progressive: true })
    .toFile(out);
  console.log(
    `{ src: "/fotos/${name}", alt: "", width: ${info.width}, height: ${info.height} }, // ${Math.round(info.size / 1024)} KB`,
  );
}
