// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://batistaredencaonatal.com.br",
  image: {
    // Thumbs dos sermões (YouTube) e episódios (CDN do podcast) são
    // otimizadas no build pelo astro:assets — requer autorizar os domínios.
    remotePatterns: [
      { protocol: "https", hostname: "**.ytimg.com" },
      { protocol: "https", hostname: "d3t3ozftmdmh3i.cloudfront.net" },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
