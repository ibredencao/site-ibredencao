/**
 * Gera os versículos citados na Confissão de Fé a partir de um dataset
 * público da Bíblia (JSON completo — github.com/thiagobodruk/biblia).
 * A tradução é definida em VERSAO (nvi | acf | aa).
 *
 * Rodar uma única vez (e re-rodar apenas se as referências em
 * src/data/confissao.ts mudarem):
 *
 *   node scripts/gerar-versiculos.mjs
 *
 * Saídas (commitadas no repositório — o site nunca consulta API/dataset):
 *  - src/data/versiculos-confissao.json  → estrutura p/ renderizar os rótulos
 *  - public/versiculos.json              → textos p/ o popover (fetch lazy)
 *
 * A Bíblia completa (~4MB) fica só em cache local (node_modules/.cache).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const RAIZ = path.resolve(import.meta.dirname, "..");
const VERSAO = "NVI";
const URL_DATASET = `https://raw.githubusercontent.com/thiagobodruk/biblia/master/json/${VERSAO.toLowerCase()}.json`;
const CACHE_DATASET = path.join(
  RAIZ,
  `node_modules/.cache/biblia-${VERSAO.toLowerCase()}.json`,
);

// Abreviações usadas na Confissão → abreviações do dataset
const LIVROS = {
  Gn: "gn",
  Êx: "ex",
  Dt: "dt",
  Js: "js",
  "1Sm": "1sm",
  "2Sm": "2sm",
  Sl: "sl",
  Pv: "pv",
  Ec: "ec",
  Is: "is",
  Jr: "jr",
  Ez: "ez",
  Dn: "dn",
  Zc: "zc",
  Ml: "ml",
  Mt: "mt",
  Mc: "mc",
  Lc: "lc",
  Jo: "jo",
  At: "atos",
  Rm: "rm",
  "1Co": "1co",
  "2Co": "2co",
  Gl: "gl",
  Ef: "ef",
  Fp: "fp",
  Cl: "cl",
  "1Ts": "1ts",
  "2Ts": "2ts",
  "1Tm": "1tm",
  "2Tm": "2tm",
  Tt: "tt",
  Hb: "hb",
  Tg: "tg",
  "1Pe": "1pe",
  "2Pe": "2pe",
  "1Jo": "1jo",
  "2Jo": "2jo",
  "3Jo": "3jo",
  Jd: "jd",
  Ap: "ap",
};

async function carregarBiblia() {
  if (!existsSync(CACHE_DATASET)) {
    console.log(`Baixando dataset ${VERSAO} (uma única vez)...`);
    const resp = await fetch(URL_DATASET);
    if (!resp.ok) throw new Error(`Download falhou: ${resp.status}`);
    await mkdir(path.dirname(CACHE_DATASET), { recursive: true });
    await writeFile(CACHE_DATASET, await resp.text());
  }
  // O arquivo vem com BOM
  const bruto = (await readFile(CACHE_DATASET, "utf8")).replace(/^﻿/, "");
  const livros = JSON.parse(bruto);
  const porAbbrev = new Map(livros.map((l) => [l.abbrev, l]));
  return porAbbrev;
}

/** "16-17" | "27, 31" | "7, 12, 14, 22" | "3, 6-7" → [16,17] etc. */
function expandirVersos(spec) {
  const versos = [];
  for (const parte of spec.split(",").map((p) => p.trim())) {
    const m = parte.match(/^(\d+)(?:-(\d+))?$/);
    if (!m) return null;
    const de = Number(m[1]);
    const ate = m[2] ? Number(m[2]) : de;
    if (ate < de || ate - de > 200) return null;
    for (let v = de; v <= ate; v++) versos.push(v);
  }
  return versos;
}

/**
 * Divide um item de referência ("2Tm 3.16-17; 2Pe 1.21; At 1.16; 3.21.")
 * em segmentos. Livro é herdado entre segmentos ("At 1.16; 3.21").
 * Segmento resolvido vira { tipo: "passagem" }; não resolvido (texto livre,
 * referência inexistente...) degrada para { tipo: "texto" } + aviso — a
 * página o renderiza como texto simples, sem popover.
 */
function parsearItem(item, biblia, avisos) {
  const segmentosSaida = [];
  const segmentos = item
    .trim()
    .replace(/\.$/, "")
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  let livroAtual = null;
  for (const segmento of segmentos) {
    const rotulo = segmento;
    const aviso = (motivo) => {
      avisos.push(`${motivo}: "${segmento}" (em "${item.slice(0, 40)}...")`);
      segmentosSaida.push({ tipo: "texto", rotulo });
    };

    // Prefixos de nota ("cf.", "n.b.") e "6:1-4" com dois-pontos
    let resto = segmento.replace(/^(cf|n\.?b)\.\s*/i, "").replace(/:/g, ".");

    const mLivro = resto.match(/^([1-3]?[A-Za-zÀ-ú]+)\s+(.+)$/);
    if (mLivro && LIVROS[mLivro[1]]) {
      livroAtual = mLivro[1];
      resto = mLivro[2];
    }
    const livro = livroAtual ? biblia.get(LIVROS[livroAtual]) : null;
    if (!livro) {
      aviso("sem livro identificável");
      continue;
    }
    const abbrev = LIVROS[livroAtual];
    const umCapitulo = livro.chapters.length === 1;

    let capitulo;
    let versos; // null = capítulo inteiro
    const mCapVerso = resto.match(/^(\d+)\.(.+)$/);
    if (mCapVerso) {
      capitulo = Number(mCapVerso[1]);
      versos = expandirVersos(mCapVerso[2]);
      if (!versos) {
        aviso("versos inválidos");
        continue;
      }
    } else if (umCapitulo && /^[\d,\s-]+$/.test(resto)) {
      // "Jd 3", "Jd 24-25" → capítulo 1
      capitulo = 1;
      versos = expandirVersos(resto);
      if (!versos) {
        aviso("versos inválidos");
        continue;
      }
    } else if (/^\d+$/.test(resto)) {
      // "Sl 51" → capítulo inteiro
      capitulo = Number(resto);
      versos = null;
    } else {
      aviso("formato não reconhecido");
      continue;
    }

    const textos = livro.chapters[capitulo - 1];
    if (!textos) {
      aviso("capítulo inexistente");
      continue;
    }
    const lista = versos ?? textos.map((_, i) => i + 1);
    const fora = lista.filter((v) => !textos[v - 1]);
    if (fora.length) {
      aviso(`versículo inexistente (${fora.join(",")})`);
      continue;
    }

    const id = `${abbrev}-${capitulo}-${versos ? versos.join("+") : "cap"}`;
    const nomeLivro = livro.name ?? livroAtual;
    const refCompleta = `${nomeLivro} ${
      umCapitulo ? "" : capitulo + (versos ? "." : "")
    }${versos ? resumoVersos(versos) : " (capítulo)"}`
      .replace(/\s+/g, " ")
      .trim();

    segmentosSaida.push({
      tipo: "passagem",
      rotulo,
      id,
      ref: refCompleta,
      texto: lista.map((v) => `${v} ${textos[v - 1]}`).join(" "),
    });
  }
  return segmentosSaida;
}

/** [16,17] → "16-17"; [7,12,14,22] → "7, 12, 14, 22"; [3,6,7] → "3, 6-7" */
function resumoVersos(versos) {
  const faixas = [];
  for (const v of versos) {
    const ultima = faixas[faixas.length - 1];
    if (ultima && v === ultima[1] + 1) ultima[1] = v;
    else faixas.push([v, v]);
  }
  return faixas.map(([a, b]) => (a === b ? `${a}` : `${a}-${b}`)).join(", ");
}

const biblia = await carregarBiblia();
const codigo = await readFile(path.join(RAIZ, "src/data/confissao.ts"), "utf8");
const itens = [...codigo.matchAll(/itens:\s*\[([^\]]*)\]/gs)].flatMap((m) =>
  [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]),
);

const mapaItens = {};
const passagens = {};
const avisos = [];
for (const item of itens) {
  const segmentos = parsearItem(item, biblia, avisos);
  mapaItens[item] = segmentos.map(({ tipo, rotulo, id }) =>
    tipo === "passagem" ? { rotulo, id } : { rotulo },
  );
  for (const s of segmentos) {
    if (s.tipo === "passagem") passagens[s.id] = { ref: s.ref, texto: s.texto };
  }
}

if (avisos.length) {
  console.warn(`\n⚠ ${avisos.length} segmento(s) ficaram como texto simples:`);
  for (const a of avisos) console.warn("  -", a);
}

await writeFile(
  path.join(RAIZ, "src/data/versiculos-confissao.json"),
  JSON.stringify({ versao: VERSAO, itens: mapaItens }, null, 1),
);
await writeFile(
  path.join(RAIZ, "public/versiculos.json"),
  JSON.stringify({ versao: VERSAO, passagens }),
);

const tamanho = JSON.stringify(passagens).length;
console.log(
  `✔ ${itens.length} itens, ${Object.keys(passagens).length} passagens únicas, ` +
    `public/versiculos.json com ${(tamanho / 1024).toFixed(0)}KB`,
);
