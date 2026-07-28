// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO: trocar pelo domínio definitivo quando configurado no Cloudflare
  site: "https://ibredencao.pages.dev",
  vite: {
    plugins: [tailwindcss()],
    // O pré-bundling do Vite quebra o worker do MapLibre no dev server
    // (os tiles nunca renderizam); excluído, o pacote resolve o worker sozinho.
    optimizeDeps: { exclude: ["maplibre-gl"] },
  },
});
