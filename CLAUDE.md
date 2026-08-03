# Site — Igreja Batista Redenção

Site institucional estático. Idioma do projeto, do conteúdo e da comunicação: **português (pt-BR)**.

## Stack

- **Astro** (estático, zero JS por padrão) + ilhas de interatividade apenas quando necessário
- **Tailwind CSS v4** via `@tailwindcss/vite` — tema definido em `src/styles/global.css` (`@theme`)
- **Lenis** para scroll suave — inicializado em `src/scripts/smooth-scroll.ts`, importado pelo BaseLayout
- **View Transitions** (`<ClientRouter />`) para navegação suave entre páginas
- Deploy: **Netlify** (build `npm run build`, output `dist/`; config em `netlify.toml`). Rebuild agendado às segundas via GitHub Actions + Build Hook (episódios novos dos feeds RSS).

## Design

- Design de referência no Figma: `vGkMjdnXsXScuu0hxlHsmY` (Igreja Batista Redenção — Website)
- Implementar com o Figma MCP (`get_design_context` + `get_screenshot`), buscando fidelidade 1:1
- **Cores**: usar somente os tokens (nomes idênticos ao Figma): `bege #A48055`, `preto #1D1B1A`, `branco #EFECE1`, `sangue #8C3238`, `areia #DACBB4`. Nunca hardcodar hex em componentes.
- **Grid do site (todo o layout segue isso)**: 12 colunas, gutter de 40px (`gap-x-10`), sobre o container de conteúdo de 1585px (`max-w-[1585px] px-6 lg:px-10`, dentro do `Secao`). Colunas ≈95px (fluidas). Alinhar as seções a esse grid com `lg:grid-cols-12` + `lg:col-span-*`/`lg:col-start-*`. Ex.: em "Onde estamos" o padrão (≥1536px/2xl) é texto `col-start-3 col-span-3` e mapa `col-start-6 col-span-5`; na faixa `lg` (1024–1535px) o texto vira `col-start-2 col-span-4` e o mapa `col-start-6 col-span-6` (ambos maiores e simétricos) para o título não quebrar.
- **Fontes**: `font-display` (Collier — títulos), `font-sans` (Work Sans — corpo, rótulos e legendas), `font-ui` (Bitter — **apenas links e CTAs**; nunca em rótulos/legendas/textos). Work Sans e Bitter via Fontsource; Collier é comercial, arquivos .woff2 em `public/fonts/`.

## Organização (para o código não virar bagunça)

- `src/components/ui/` — peças pequenas reutilizáveis (Btn, Card...)
- `src/components/layout/` — Header, Footer, Nav
- `src/components/sections/` — seções de página (Hero, Agenda, OndeEstamos...). Seções repetidas entre páginas (Agenda, Onde Estamos, Footer) existem UMA vez aqui.
- `src/layouts/` — BaseLayout (SEO, fontes, Lenis, ClientRouter)
- `src/content/` — conteúdo editável em Markdown (sermões, documentos longos como a Confissão de Fé)
- `src/pages/` — apenas composição de seções; sem lógica ou markup extenso
- `src/assets/` — logos e ícones usados pelo código (importados com `?raw` para SVG inline com `currentColor`). Os originais do designer ficam em `assets/` na raiz.
- Ícones SVG usam `currentColor` (recoloridos a partir do Figma) e são renderizados inline via `src/components/ui/Icone.astro`

## Convenções

- TypeScript strict; sem `any`
- Textos longos (Confissão de Fé, História) vivem em Markdown/content collections, nunca hardcoded em componente
- Animações: minimalistas, reveal sutil; **sempre** respeitar `prefers-reduced-motion`
- Acessibilidade: HTML semântico, contraste, foco visível — público inclui idosos
- Antes de finalizar mudança visual: comparar com screenshot do Figma
- Rodar `npm run format` e `npm run lint` antes de commitar
