// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // TODO: trocar pelo domínio definitivo quando configurado no Cloudflare
  site: "https://ibredencao.pages.dev",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});