import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis: Lenis | null = null;

// Re-executa a cada navegação do ClientRouter (inclui o primeiro carregamento)
document.addEventListener("astro:page-load", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  lenis?.destroy();
  lenis = new Lenis({ autoRaf: true });
});
