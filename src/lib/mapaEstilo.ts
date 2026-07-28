import type { StyleSpecification } from "maplibre-gl";

/**
 * Estilo do mapa (MapLibre) nas cores da marca, sobre os tiles vetoriais
 * gratuitos da OpenFreeMap (sem chave de API; dados © OpenStreetMap).
 *
 * Os tokens (branco, creme, areia, bege, preto) são lidos das variáveis CSS
 * do tema (src/styles/global.css). Alguns tons intermediários são derivados
 * deles (misturas com o branco) para dar profundidade sem sair da paleta.
 */
export function estiloMapa(): StyleSpecification {
  const raiz = getComputedStyle(document.documentElement);
  const token = (nome: string) => raiz.getPropertyValue(nome).trim();

  const branco = token("--color-branco"); // terra (fundo)
  const creme = token("--color-creme"); // vias menores
  const areia = token("--color-areia"); // água e contornos
  const bege = token("--color-bege"); // detalhes/realces
  const preto = token("--color-preto"); // rótulos

  // Deriva um rgba() de um token hex (#rrggbb) com a opacidade dada
  const comAlfa = (hex: string, alfa: number) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
    return `rgba(${r}, ${g}, ${b}, ${alfa})`;
  };

  // Tons derivados (areia→branco): quadras, vegetação e edificações
  const quadras = "#ece8db";
  const vegetacao = "#e6dfcc";
  const edificios = "#e7dfcd";
  const rotulo = comAlfa(preto, 0.65);
  const rotuloForte = comAlfa(preto, 0.85);

  const fonteRegular = ["Noto Sans Regular"];
  const fonteNegrito = ["Noto Sans Bold"];

  return {
    version: 8,
    glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
    sources: {
      openmaptiles: {
        type: "vector",
        url: "https://tiles.openfreemap.org/planet",
      },
    },
    layers: [
      {
        id: "fundo",
        type: "background",
        paint: { "background-color": branco },
      },
      {
        id: "quadras",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "landuse",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["residential", "suburb", "neighbourhood", "commercial"]],
        ],
        paint: { "fill-color": quadras },
      },
      {
        id: "vegetacao",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "landcover",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["grass", "wood", "farmland", "sand"]],
        ],
        paint: { "fill-color": vegetacao, "fill-opacity": 0.7 },
      },
      {
        id: "parques",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "park",
        paint: { "fill-color": vegetacao },
      },
      {
        id: "agua",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "water",
        paint: { "fill-color": areia },
      },
      {
        id: "rios",
        type: "line",
        source: "openmaptiles",
        "source-layer": "waterway",
        paint: { "line-color": areia, "line-width": 1.5 },
      },
      {
        id: "edificios",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "building",
        minzoom: 14,
        paint: {
          "fill-color": edificios,
          "fill-outline-color": areia,
          "fill-opacity": ["interpolate", ["linear"], ["zoom"], 14, 0, 15.5, 1],
        },
      },
      {
        id: "trilhas",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        minzoom: 14,
        filter: ["in", ["get", "class"], ["literal", ["path", "track"]]],
        paint: {
          "line-color": areia,
          "line-width": 1,
          "line-dasharray": [2, 2],
        },
      },
      {
        id: "vias-menores",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: ["in", ["get", "class"], ["literal", ["minor", "service"]]],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": creme,
          "line-width": [
            "interpolate",
            ["exponential", 1.5],
            ["zoom"],
            13,
            1,
            18,
            12,
          ],
        },
      },
      {
        id: "vias-medias-contorno",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["secondary", "tertiary"]],
        ],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": areia,
          "line-width": [
            "interpolate",
            ["exponential", 1.5],
            ["zoom"],
            12,
            2.5,
            18,
            18,
          ],
        },
      },
      {
        id: "vias-medias",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["secondary", "tertiary"]],
        ],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": "#ffffff",
          "line-width": [
            "interpolate",
            ["exponential", 1.5],
            ["zoom"],
            12,
            1.5,
            18,
            15,
          ],
        },
      },
      {
        id: "vias-principais-contorno",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["motorway", "trunk", "primary"]],
        ],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": bege,
          "line-opacity": 0.5,
          "line-width": [
            "interpolate",
            ["exponential", 1.5],
            ["zoom"],
            11,
            3,
            18,
            22,
          ],
        },
      },
      {
        id: "vias-principais",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["motorway", "trunk", "primary"]],
        ],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": "#ffffff",
          "line-width": [
            "interpolate",
            ["exponential", 1.5],
            ["zoom"],
            11,
            2,
            18,
            18,
          ],
        },
      },
      {
        id: "nomes-vias",
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "transportation_name",
        minzoom: 14,
        layout: {
          "symbol-placement": "line",
          "text-field": [
            "coalesce",
            ["get", "name:pt"],
            ["get", "name:latin"],
            ["get", "name"],
          ],
          "text-font": fonteRegular,
          "text-size": 12,
        },
        paint: {
          "text-color": rotulo,
          "text-halo-color": branco,
          "text-halo-width": 1.5,
        },
      },
      {
        id: "nomes-bairros",
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "place",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["suburb", "neighbourhood", "quarter"]],
        ],
        layout: {
          "text-field": [
            "coalesce",
            ["get", "name:pt"],
            ["get", "name:latin"],
            ["get", "name"],
          ],
          "text-font": fonteRegular,
          "text-size": 12,
          "text-letter-spacing": 0.15,
          "text-transform": "uppercase",
        },
        paint: {
          "text-color": rotulo,
          "text-halo-color": branco,
          "text-halo-width": 1.5,
        },
      },
      {
        id: "nomes-cidades",
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "place",
        filter: ["in", ["get", "class"], ["literal", ["city", "town"]]],
        layout: {
          "text-field": [
            "coalesce",
            ["get", "name:pt"],
            ["get", "name:latin"],
            ["get", "name"],
          ],
          "text-font": fonteNegrito,
          "text-size": 14,
        },
        paint: {
          "text-color": rotuloForte,
          "text-halo-color": branco,
          "text-halo-width": 1.5,
        },
      },
    ],
  };
}
