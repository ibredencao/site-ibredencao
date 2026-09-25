/**
 * Busca os vídeos mais recentes do canal do YouTube da igreja via feed RSS
 * público (sem API key, sem custo). Executa no BUILD — para atualizar o site
 * com novos vídeos, basta refazer o deploy (ex.: build agendado no Cloudflare).
 */
import type { ItemRecurso } from "../data/recursos";

// Canal: https://www.youtube.com/@batistaredencaonatal
export const YOUTUBE_CHANNEL_ID = "UCfKevJzYO8DHuPi3gMLRZRA";
export const YOUTUBE_CANAL_URL =
  "https://www.youtube.com/@batistaredencaonatal";

const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

function primeiro(re: RegExp, texto: string): string | null {
  const m = re.exec(texto);
  return m ? m[1] : null;
}

function formatarData(iso: string): string {
  // "2026-06-29T12:24:13+00:00" -> "29/06/2026"
  const [ano, mes, dia] = iso.slice(0, 10).split("-");
  return `${dia}/${mes}/${ano}`;
}

export interface VideoYoutube extends ItemRecurso {
  thumb: string;
}

/**
 * O RSS só oferece o hqdefault (4:3, com tarjas pretas embutidas — elas vazam
 * 1–2px nos cards 16:9). Busca a melhor variante 16:9 real: maxresdefault →
 * hq720 → mqdefault (esta sempre existe). Roda no build, custo desprezível.
 */
async function melhorThumb(id: string): Promise<string> {
  for (const nome of ["maxresdefault", "hq720"]) {
    const url = `https://i.ytimg.com/vi/${id}/${nome}.jpg`;
    try {
      const resp = await fetch(url, { method: "HEAD" });
      if (resp.ok) return url;
    } catch {
      // rede falhou — tenta a próxima variante
    }
  }
  return `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
}

export async function buscarVideosYoutube(limite = 6): Promise<VideoYoutube[]> {
  try {
    const resp = await fetch(FEED_URL);
    if (!resp.ok) throw new Error(`RSS status ${resp.status}`);
    const xml = await resp.text();

    const entradas = xml.split("<entry>").slice(1);
    const videos: VideoYoutube[] = [];
    for (const entrada of entradas.slice(0, limite)) {
      const id = primeiro(/<yt:videoId>(.*?)<\/yt:videoId>/, entrada);
      const titulo = primeiro(/<title>(.*?)<\/title>/, entrada);
      const publicado = primeiro(/<published>(.*?)<\/published>/, entrada);
      if (!id || !titulo) continue;
      videos.push({
        titulo: titulo.replace(/&amp;/g, "&").replace(/&#39;/g, "'"),
        data: publicado ? formatarData(publicado) : undefined,
        href: `https://www.youtube.com/watch?v=${id}`,
        thumb: await melhorThumb(id),
      });
    }
    return videos;
  } catch (erro) {
    // Falha de rede no build não deve quebrar o site — retorna vazio.
    console.warn("[youtube] não foi possível carregar o feed RSS:", erro);
    return [];
  }
}
