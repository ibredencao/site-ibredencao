/**
 * Recursos (Sermões no Youtube/Spotify, Músicas, Arquivos).
 *
 * - youtube: puxado automaticamente do feed RSS do canal no build (src/lib/youtube.ts).
 * - spotify: embed do show da igreja (iframe), sempre atualizado.
 * - musicas/arquivos: itens de EXEMPLO (placeholder) — substituir pelo conteúdo real.
 */

export interface ItemRecurso {
  titulo: string;
  data?: string;
  href: string;
  thumb?: string;
}

export type LayoutRecurso = "cards-youtube" | "embed-spotify" | "cards";

export interface CategoriaRecurso {
  slug: string;
  titulo: string;
  layout: LayoutRecurso;
  /** Rótulo e destino do botão "Ver mais" (quando aplicável) */
  verMaisRotulo?: string;
  verMaisHref?: string;
  /** URL de embed (Spotify) */
  embedUrl?: string;
  /** Itens estáticos (placeholder) para layouts de cards sem fonte automática */
  itens?: ItemRecurso[];
}

// https://open.spotify.com/show/0NVwK9Sigk6gRwhRQld3AN
export const SPOTIFY_SHOW_ID = "0NVwK9Sigk6gRwhRQld3AN";

const exemploCards = (): ItemRecurso[] =>
  Array.from({ length: 3 }, () => ({
    titulo: "Título do recurso (exemplo)",
    data: "14/06/2026",
    href: "#",
  }));

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
    layout: "embed-spotify",
    verMaisRotulo: "Abrir no Spotify",
    verMaisHref: `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`,
    embedUrl: `https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`,
  },
  {
    // TODO(conteúdo): definir a fonte real das músicas (playlist do Spotify/YouTube?).
    slug: "musicas",
    titulo: "Músicas",
    layout: "cards",
    itens: exemploCards(),
  },
  {
    // TODO(conteúdo): substituir por lista real de arquivos para download.
    slug: "arquivos",
    titulo: "Arquivos",
    layout: "cards",
    verMaisRotulo: "Ver todos os arquivos",
    verMaisHref: "#",
    itens: exemploCards(),
  },
];
