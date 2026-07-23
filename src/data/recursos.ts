/**
 * Recursos (Sermões no Youtube/Spotify, Músicas, Arquivos).
 *
 * TODO(conteúdo): os itens abaixo são EXEMPLOS (placeholder). Substituir pelos
 * sermões/vídeos/áudios/arquivos reais da igreja e ajustar os links de "Ver mais".
 * As miniaturas (thumb) podem apontar para imagens em src/assets quando houver.
 */

export interface ItemRecurso {
  titulo: string;
  data?: string;
  href: string;
}

export interface CategoriaRecurso {
  slug: string;
  titulo: string;
  /** Rótulo e destino do botão "Ver mais" */
  verMaisRotulo: string;
  verMaisHref: string;
  itens: ItemRecurso[];
}

const exemplo = (href: string): ItemRecurso[] =>
  Array.from({ length: 3 }, () => ({
    titulo: "CRISTO, O PROFETA PERFEITO – Deuteronômio 18.15-22",
    data: "14/06/2026",
    href,
  }));

export const categoriasRecursos: CategoriaRecurso[] = [
  {
    slug: "youtube",
    titulo: "Sermões no Youtube",
    verMaisRotulo: "Ver mais no Youtube",
    verMaisHref: "https://www.youtube.com/@batistaredencao",
    itens: exemplo("https://www.youtube.com/@batistaredencao"),
  },
  {
    slug: "spotify",
    titulo: "Sermões no Spotify",
    verMaisRotulo: "Ver mais no Spotify",
    verMaisHref: "https://open.spotify.com/",
    itens: exemplo("https://open.spotify.com/"),
  },
  {
    slug: "musicas",
    titulo: "Músicas",
    verMaisRotulo: "Ver mais",
    verMaisHref: "https://open.spotify.com/",
    itens: exemplo("https://open.spotify.com/"),
  },
  {
    slug: "arquivos",
    titulo: "Arquivos",
    verMaisRotulo: "Ver todos os arquivos",
    verMaisHref: "#",
    itens: exemplo("#"),
  },
];
