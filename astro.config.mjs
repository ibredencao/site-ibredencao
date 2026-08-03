// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // TODO: trocar pelo domínio definitivo quando ele for configurado na Netlify
  site: "https://testeibredencao.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
