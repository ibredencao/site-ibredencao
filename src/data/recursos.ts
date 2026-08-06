/**
 * Recursos (Sermões no Youtube/Spotify, Músicas, Arquivos).
 *
 * - youtube: puxado do feed RSS do canal no build (src/lib/youtube.ts).
 * - spotify: puxado do RSS do podcast no build (src/lib/podcastRss.ts).
 * - musicas / arquivos: cards de texto (sem foto). Conteúdo do Figma.
 *   TODO(links): trocar os "#" pelos links reais quando o usuário fornecer.
 */

export interface ItemRecurso {
  titulo: string;
  data?: string;
  href: string;
  thumb?: string;
}

/** Card de música: título + autor/versão + links (Letra, Partitura, Ouvir). */
export interface Musica {
  titulo: string;
  autor: string;
  versao?: string;
  /** Capa quadrada (public/arquivos/musicas/<slug>-capa.jpg) */
  capa?: string;
  letra?: string;
  cifra?: string;
  partitura?: string;
  ouvir?: string;
}

/** Card de arquivo: título + tipo + um ou mais downloads. */
export interface Arquivo {
  titulo: string;
  tipo: string;
  downloads: { rotulo: string; href: string }[];
}

export type LayoutRecurso =
  "cards-youtube" | "cards-spotify" | "musicas" | "arquivos";

export interface CategoriaRecurso {
  slug: string;
  titulo: string;
  layout: LayoutRecurso;
  /** Texto introdutório opcional acima dos cards (Músicas/Arquivos) */
  intro?: string;
  /** Rótulo e destino do botão "Ver mais" (quando aplicável) */
  verMaisRotulo?: string;
  verMaisHref?: string;
  /** URL de embed (Spotify) — usado como fallback quando não há RSS */
  embedUrl?: string;
  musicas?: Musica[];
  arquivos?: Arquivo[];
}

// https://open.spotify.com/show/0NVwK9Sigk6gRwhRQld3AN
export const SPOTIFY_SHOW_ID = "0NVwK9Sigk6gRwhRQld3AN";

// Feed RSS do podcast (Anchor/Spotify for Podcasters). Episódios puxados no build.
export const SPOTIFY_PODCAST_RSS = "https://anchor.fm/s/f4a394f0/podcast/rss";

// PDFs em public/arquivos/musicas/ (kebab-case, sufixo -letra/-partitura).
// Campos omitidos (partituras pendentes, links de "Ouvir") não renderizam —
// o CardMusica filtra links ausentes. Adicionar aqui quando chegarem.
const musicas: Musica[] = [
  {
    titulo: "Sua graça é maior",
    capa: "/arquivos/musicas/sua-graca-e-maior-capa.jpg",
    autor: "Letra e Música: Matt Boswell, Matt Papa",
    versao: "Versão: Luiz Felipe Moraes (2025)",
    letra: "/arquivos/musicas/sua-graca-e-maior-letra.pdf",
  },
  {
    titulo: "Seu fardo pelo meu",
    capa: "/arquivos/musicas/seu-fardo-pelo-meu-capa.jpg",
    autor: "Letra: Chris Anderson",
    versao: "Versão: Luiz Felipe Moraes (2026)",
    letra: "/arquivos/musicas/seu-fardo-pelo-meu-letra.pdf",
  },
  {
    titulo: "Tudo o que existe é teu",
    capa: "/arquivos/musicas/tudo-o-que-existe-e-teu-capa.jpg",
    autor: "Letra e Música: Luiz Felipe Moraes (2026)",
    versao: "",
    letra: "/arquivos/musicas/tudo-o-que-existe-e-teu-letra.pdf",
    partitura: "/arquivos/musicas/tudo-o-que-existe-e-teu-partitura.pdf",
  },
  {
    titulo: "Perante o trono de Deus no céu",
    capa: "/arquivos/musicas/perante-o-trono-de-deus-no-ceu-capa.jpg",
    autor: "Letra e Música: Charitie Lees Bancroft, Vikki Cook",
    versao: "Versão: Igreja Batista Betel de Mesquita",
    letra: "/arquivos/musicas/perante-o-trono-de-deus-no-ceu-letra.pdf",
  },
  {
    titulo: "Não mais eu, mas Cristo em mim",
    capa: "/arquivos/musicas/nao-mais-eu-mas-cristo-em-mim-capa.jpg",
    autor: "Letra e Música: J. Robinson, R. Thompson, M. Farren",
    versao: "Versão: Luiz Felipe Moraes, Davi Resende (2025)",
    letra: "/arquivos/musicas/nao-mais-eu-mas-cristo-em-mim-letra.pdf",
    partitura: "/arquivos/musicas/nao-mais-eu-mas-cristo-em-mim-partitura.pdf",
  },
];

// PDFs hospedados em public/arquivos/ (servidos como estão pelo Cloudflare).
const arquivos: Arquivo[] = [
  {
    titulo: "Diretório de Membros",
    tipo: "Template em PDF",
    // TODO(indd): restaurar o segundo download ("Download em INDD") quando o
    // arquivo .indd for adicionado em public/arquivos/.
    downloads: [
      {
        rotulo: "Baixar",
        href: "/arquivos/template-diretorio-de-membros.pdf",
      },
    ],
  },
  {
    titulo: "Leitura Bíblica Anual",
    tipo: "Arquivo PDF",
    downloads: [
      { rotulo: "Baixar", href: "/arquivos/leitura-biblica-anual.pdf" },
    ],
  },
  {
    titulo: "Boletim",
    tipo: "Arquivo PDF",
    downloads: [{ rotulo: "Baixar", href: "/arquivos/boletim.pdf" }],
  },
];

export const categoriasRecursos: CategoriaRecurso[] = [
  {
    slug: "youtube",
    titulo: "Sermões no Youtube",
    layout: "cards-youtube",
    verMaisRotulo: "Ver mais no Youtube",
    verMaisHref: "https://www.youtube.com/@batistaredencaonatal",
  },
  {
    slug: "spotify",
    titulo: "Sermões no Spotify",
    layout: "cards-spotify",
    verMaisRotulo: "Abrir no Spotify",
    verMaisHref: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
    embedUrl: `https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`,
  },
  {
    slug: "musicas",
    titulo: "Músicas",
    layout: "musicas",
    musicas,
  },
  {
    slug: "arquivos",
    titulo: "Arquivos",
    layout: "arquivos",
    arquivos,
  },
];
