import iconeConfissao from "../assets/icones/confissao-de-fe.svg?raw";
import iconePacto from "../assets/icones/pacto-de-membresia.svg?raw";
import iconeYoutube from "../assets/icones/youtube.svg?raw";
import iconeSpotify from "../assets/icones/spotify.svg?raw";
import iconeMusica from "../assets/icones/musica.svg?raw";
import iconeDownload from "../assets/icones/download.svg?raw";

export interface ItemDropdown {
  rotulo: string;
  href: string;
  /** SVG inline (importado com ?raw) — herda a cor do texto via currentColor */
  icone: string;
}

export interface ItemNav {
  rotulo: string;
  href?: string;
  dropdown?: ItemDropdown[];
}

export const documentosDeFe: ItemDropdown[] = [
  {
    rotulo: "Confissão de Fé",
    href: "/confissao-de-fe",
    icone: iconeConfissao,
  },
  {
    rotulo: "Pacto de Membresia",
    href: "/pacto-de-membresia",
    icone: iconePacto,
  },
];

export const recursos: ItemDropdown[] = [
  {
    rotulo: "Sermões no Youtube",
    href: "/recursos/youtube",
    icone: iconeYoutube,
  },
  {
    rotulo: "Sermões no Spotify",
    href: "/recursos/spotify",
    icone: iconeSpotify,
  },
  { rotulo: "Músicas", href: "/recursos/musicas", icone: iconeMusica },
  {
    rotulo: "Arquivos para Download",
    href: "/recursos/arquivos",
    icone: iconeDownload,
  },
];

/** Lado esquerdo e direito do header desktop (logo fica no centro) */
export const navEsquerda: ItemNav[] = [
  { rotulo: "Missão", href: "/#missao" },
  { rotulo: "Documentos de Fé", dropdown: documentosDeFe },
  { rotulo: "Nossa História", href: "/nossa-historia" },
];

export const navDireita: ItemNav[] = [
  { rotulo: "Agenda", href: "#agenda" },
  { rotulo: "Onde Estamos", href: "#onde-estamos" },
  { rotulo: "Recursos", dropdown: recursos },
];

export const contato = {
  email: "batistaredencaonatal@gmail.com",
  whatsapp: {
    placeholder: "(84) 9 8999-9999",
    href: "https://wa.me/5584989999999"
  },
  instagram: "https://www.instagram.com/batistaredencaonatal",
  youtube: "https://www.youtube.com/@batistaredencaonatal",
  spotify: "https://open.spotify.com/show/0NVwK9Sigk6gRwhRQld3AN?si=2faee73f53cf4622",
  endereco: {
    nome: "Igreja Batista Redenção",
    rua: "Av. Prudente de Morais, 5220",
    bairro: "Lagoa Nova",
    cidade: "Natal/RN",
  },
  rotaGoogleMaps:
    "https://www.google.com/maps/search/?api=1&query=Igreja+Batista+Reden%C3%A7%C3%A3o+Av.+Prudente+de+Morais+5220+Lagoa+Nova+Natal+RN",
};
