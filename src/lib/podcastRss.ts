/**
 * Lê episódios de um feed RSS de podcast (padrão RSS 2.0 + itunes), no BUILD.
 * Usado para os sermões do Spotify: o show é distribuído via Spotify for
 * Podcasters, que gera um RSS público — assim exibimos os episódios como cards
 * (título, data, capa e link) sem precisar da Web API do Spotify nem de Premium.
 */
import type { ItemRecurso } from "../data/recursos";

function primeiro(re: RegExp, texto: string): string | null {
  const m = re.exec(texto);
  return m ? (m[1] ?? m[2] ?? null) : null;
}

function limpar(s: string): string {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function formatarData(pubDate: string): string | undefined {
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return undefined;
  const dia = String(d.getUTCDate()).padStart(2, "0");
  const mes = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${dia}/${mes}/${d.getUTCFullYear()}`;
}

export interface EpisodioPodcast extends ItemRecurso {
  thumb?: string;
}

export async function buscarEpisodiosPodcast(
  rssUrl: string,
  fallbackLink: string,
  limite = 9,
): Promise<EpisodioPodcast[]> {
  if (!rssUrl) return [];
  try {
    const resp = await fetch(rssUrl);
    if (!resp.ok) throw new Error(`RSS status ${resp.status}`);
    const xml = await resp.text();

    // Capa do canal (fallback para episódios sem imagem própria)
    const capaCanal =
      primeiro(/<itunes:image[^>]*href="([^"]+)"/i, xml.split("<item")[0]) ??
      primeiro(/<image>[\s\S]*?<url>([^<]+)<\/url>/i, xml.split("<item")[0]);

    const itens = xml.split(/<item[\s>]/).slice(1);
    const episodios: EpisodioPodcast[] = [];
    for (const item of itens.slice(0, limite)) {
      const titulo = primeiro(
        /<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i,
        item,
      );
      if (!titulo) continue;
      const pubDate = primeiro(/<pubDate>([\s\S]*?)<\/pubDate>/i, item);
      const link =
        primeiro(/<link>([\s\S]*?)<\/link>/i, item) ??
        primeiro(/<enclosure[^>]*url="([^"]+)"/i, item);
      const thumb =
        primeiro(/<itunes:image[^>]*href="([^"]+)"/i, item) ??
        capaCanal ??
        undefined;
      episodios.push({
        titulo: limpar(titulo),
        data: pubDate ? formatarData(limpar(pubDate)) : undefined,
        href: link ? limpar(link) : fallbackLink,
        thumb: thumb ?? undefined,
      });
    }
    return episodios;
  } catch (erro) {
    console.warn("[podcastRss] não foi possível carregar o feed:", erro);
    return [];
  }
}
