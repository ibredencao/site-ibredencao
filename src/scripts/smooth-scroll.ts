import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;

// Re-executa a cada navegação do ClientRouter (inclui o primeiro carregamento)
document.addEventListener("astro:page-load", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  lenis?.destroy();
  lenis = new Lenis({ autoRaf: true });
});

/**
 * Âncoras da mesma página com scroll suave: o comportamento nativo (e o do
 * ClientRouter) pula direto para o alvo; aqui o clique é entregue ao Lenis.
 * O offset reproduz o cálculo nativo: scroll-padding-top do html (header fixo)
 * + scroll-margin-top do alvo (ex.: artigos da Confissão de Fé).
 */
function offsetPara(alvo: HTMLElement): number {
  const margemAlvo = parseFloat(getComputedStyle(alvo).scrollMarginTop) || 0;
  const paddingHtml =
    parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) ||
    0;
  return -(margemAlvo + paddingHtml);
}

// Fase de captura: roda antes do listener do ClientRouter; com o clique
// prevenido, o router ignora o evento (e a propagação segue normal para os
// handlers que fecham menu/índice). Com reduced-motion, lenis é null e o
// comportamento nativo (instantâneo) é mantido.
document.addEventListener(
  "click",
  (e) => {
    if (!lenis || e.defaultPrevented) return;
    const origem = e.target instanceof Element ? e.target : null;
    const link = origem?.closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link) return;

    const [caminho, hash] = (link.getAttribute("href") ?? "").split("#");
    if (!hash) return;
    // Só âncoras da própria página; com caminho diferente é navegação normal
    if (caminho && caminho !== window.location.pathname) return;

    const alvo = document.getElementById(decodeURIComponent(hash));
    if (!alvo) return;

    e.preventDefault();
    history.pushState(null, "", `#${hash}`);
    lenis.scrollTo(alvo, { offset: offsetPara(alvo) });
  },
  true,
);
