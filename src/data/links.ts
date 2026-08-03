import { contato } from "./navegacao";
import iconeDistancia from "../assets/icones/distance.svg?raw";
import iconeConfissao from "../assets/icones/confissao-de-fe.svg?raw";
import iconeSpotify from "../assets/icones/spotify.svg?raw";
import iconeYoutube from "../assets/icones/youtube.svg?raw";
import iconeDownload from "../assets/icones/download.svg?raw";
import iconeInstagram from "../assets/icones/instagram.svg?raw";
import iconeLetra from "../assets/icones/letra.svg?raw";

/**
 * Itens da página /links (estilo linktree) — destino do QR code impresso
 * (batistaredencaonatal.com.br/links). Editar aqui para adicionar/remover.
 */
export interface ItemLinks {
  titulo: string;
  descricao?: string;
  href: string;
  /** SVG inline (?raw) exibido no quadrado sangue à esquerda do card */
  icone: string;
}

export const itensLinks: ItemLinks[] = [
  {
    titulo: "Como chegar",
    descricao: "Av. Prudente de Morais, 5220",
    href: contato.rotaGoogleMaps,
    icone: iconeDistancia,
  },
  {
    titulo: "No que cremos",
    descricao: "Leia nossa Confissão de Fé",
    href: "/confissao-de-fe",
    icone: iconeConfissao,
  },
  {
    titulo: "Sermões no Spotify",
    href: contato.spotify,
    icone: iconeSpotify,
  },
  {
    titulo: "Sermões no Youtube",
    href: contato.youtube,
    icone: iconeYoutube,
  },
  {
    titulo: "Instagram",
    href: contato.instagram,
    icone: iconeInstagram,
  },
  {
    titulo: "Plano de Leitura Bíblica Anual",
    descricao: "Baixe o PDF",
    href: "/arquivos/leitura-biblica-anual.pdf",
    icone: iconeDownload,
  },
  {
    titulo: "Outros recursos",
    descricao: "Músicas, arquivos e mais",
    href: "/recursos",
    icone: iconeLetra,
  },
];
