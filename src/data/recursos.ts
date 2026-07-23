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
  letra?: string;
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

const musicas: Musica[] = [
  {
    titulo: "Sua graça é maior",
    autor: "Matt Boswell, Matt Papa",
    versao: "Versão: Luiz Felipe Moraes (2025)",
    letra: "#",
    partitura: "#",
    ouvir: "#",
  },
  {
    titulo: "Seu fardo pelo meu",
    autor: "Chris Anderson",
    versao: "Versão: Luiz Felipe Moraes (2026)",
    letra: "#",
    partitura: "#",
    ouvir: "#",
  },
  {
    titulo: "Tudo o que existe é teu",
    autor: "Autoral",
    versao: "Luiz Felipe Moraes (2026)",
    letra: "#",
    partitura: "#",
    ouvir: "#",
  },
  {
    titulo: "Perante o trono de Deus no céu",
    autor: "Vikki Cook",
    versao: "Versão: Igreja Batista Betel de Mesquita",
    letra: "#",
    partitura: "#",
    ouvir: "#",
  },
  {
    titulo: "Não mais eu, mas Cristo em mim",
    autor: "Jonny Robinson, Rich Thompson, Michael Farren",
    versao: "Versão: Luiz Felipe Moraes, Davi Resende (2025)",
    letra: "#",
    partitura: "#",
    ouvir: "#",
  },
];

const arquivos: Arquivo[] = [
  {
    titulo: "Diretório de Membros",
    tipo: "Arquivo PDF ou INDD (InDesign)",
    downloads: [
      { rotulo: "Download do PDF", href: "#" },
      { rotulo: "Download em INDD", href: "#" },
    ],
  },
  {
    titulo: "Leitura Bíblica Anual",
    tipo: "Arquivo PDF",
    downloads: [{ rotulo: "Download do PDF", href: "#" }],
  },
  {
    titulo: "Boletim",
    tipo: "Arquivo PDF",
    downloads: [{ rotulo: "Download do PDF", href: "#" }],
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
