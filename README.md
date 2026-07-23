# Site — Igreja Batista Redenção

Site institucional estático, construído com **Astro + Tailwind CSS**, com scroll suave (**Lenis**) e transições de página (**View Transitions**). Hospedagem em **Cloudflare Pages**.

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
- **Sermões do YouTube**: automáticos, puxados do canal via RSS no build (`src/lib/youtube.ts`). Basta refazer o deploy para atualizar.
- **Sermões do Spotify**: embed do show da igreja (sempre atualizado).

Fotos: os blocos com o símbolo esmaecido (`MoldemImagem`) são placeholders — trocar por fotos reais em `src/assets` quando disponíveis.

## Fontes

- **Work Sans** e **Bitter**: via Fontsource (já instaladas).
- **Collier** (títulos): fonte comercial em `public/fonts/` (`Collier-Light.woff2`, `Collier-Book.woff2`). Fallback: Georgia.
- **Frase do rodapé** ("Ao Senhor pertence a salvação — Jonas 2.9"): a fonte Forevs Demo não tinha acentos, então a frase é uma imagem SVG (texto em curvas) em `public/frase-salvacao.svg` (telas grandes) e `public/frase-salvacao-mobile.svg` (telas pequenas), trocadas por `<picture>`.

## Deploy no Cloudflare Pages

1. Crie um repositório no GitHub e envie este projeto:
   ```bash
   git remote add origin git@github.com:SEU_USUARIO/site-ibredencao.git
   git push -u origin main
   ```
2. No painel do Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, escolha o repositório.
3. Configuração de build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** definida pelo `.nvmrc` (22)
4. Cada `git push` na branch `main` publica automaticamente.

### Manter os sermões do YouTube atualizados

Como os vídeos são lidos no build, um novo sermão só aparece após um novo deploy.
Para atualizar sozinho periodicamente, crie um **Deploy Hook** no Cloudflare Pages
e dispare-o por um agendamento (ex.: um Cron Trigger do Cloudflare Workers ou
qualquer serviço de cron chamando a URL do hook).
