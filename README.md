# Site — Igreja Batista Redenção

Site institucional estático, construído com **Astro + Tailwind CSS**, com scroll suave (**Lenis**) e transições de página (**View Transitions**). Hospedagem na **Netlify**.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

Outros comandos:

```bash
npm run build     # gera o site estático em dist/
npm run preview   # serve o build localmente
npm run format    # Prettier
npm run lint      # ESLint
```

Requer Node 22 (ver `.nvmrc`).

## Estrutura

```
src/
├── assets/          # logo, símbolo e ícones (SVG inline, currentColor) + fotos
├── components/
│   ├── ui/          # peças reutilizáveis (Btn, Icone, Secao, cards…)
│   ├── layout/      # Header, Footer, NavColuna, MenuMobile
│   └── sections/    # seções de página (HomeHero, Agenda, OndeEstamos, HeroInterno…)
├── data/            # conteúdo editável (navegação, textos, confissão, recursos)
├── layouts/         # BaseLayout (SEO, fontes, Lenis, View Transitions)
├── lib/             # integrações (YouTube RSS)
├── pages/           # rotas
├── scripts/         # Lenis (smooth-scroll) e reveal-on-scroll
└── styles/          # global.css (tokens de design no @theme)
```

## Como editar o conteúdo

- **Textos institucionais** (missão, "no que cremos"): `src/data/conteudo.ts`
- **Menu / contato / redes / endereço**: `src/data/navegacao.ts`
- **Confissão de Fé** (artigos e referências): `src/data/confissao.ts`
- **Recursos** (categorias/links): `src/data/recursos.ts`
- **Sermões do YouTube e do Spotify**: automáticos, puxados dos feeds RSS no build (`src/lib/youtube.ts` e `src/lib/podcastRss.ts`). Um episódio novo aparece no próximo deploy — há um rebuild agendado às segundas (ver Deploy).

Fotos: os blocos com o símbolo esmaecido (`MoldemImagem`) são placeholders — trocar por fotos reais em `src/assets` quando disponíveis.

## Fontes

- **Work Sans** e **Bitter**: via Fontsource (já instaladas).
- **Collier** (títulos): fonte comercial em `public/fonts/` (`Collier-Light.woff2`, `Collier-Book.woff2`). Fallback: Georgia.
- **Frase do rodapé** (Salmos 90.17): texto em Collier, direto no `Footer.astro`.

## Deploy na Netlify

1. Envie o repositório para o GitHub e, na Netlify, **Add new project → Import an existing project**, escolhendo o repositório.
2. Configuração de build (também registrada em `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** definida pelo `.nvmrc` (22)
3. Cada `git push` na branch `main` publica automaticamente.

### Manter os sermões atualizados

Os feeds do YouTube/Spotify são lidos no build, então um episódio novo só
aparece após um novo deploy. O workflow `.github/workflows/rebuild.yml`
reconstrói o site às segundas (11h e 19h de Natal/RN) chamando um **Build
Hook** da Netlify. Configuração (uma vez por conta/repositório):

1. Netlify: **Project configuration → Build & deploy → Continuous deployment → Build hooks** → criar hook e copiar a URL.
2. GitHub: **Settings → Secrets and variables → Actions** → secret `NETLIFY_BUILD_HOOK` com essa URL.

O workflow também pode ser disparado manualmente na aba **Actions** ("Run workflow").
