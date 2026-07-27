/**
 * Barra de progresso no topo durante a navegação entre páginas.
 * Com o ClientRouter, o tempo entre astro:before-preparation e
 * astro:before-swap é o carregamento da página de destino — sem feedback
 * visual, parece que nada está acontecendo nesse intervalo.
 * A barra só aparece se o carregamento passar de 150ms, para não piscar
 * em navegações instantâneas (página em cache ou pré-carregada).
 */

const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)");

const barra = document.createElement("div");
barra.setAttribute("aria-hidden", "true");
Object.assign(barra.style, {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "3px",
  background: "var(--color-bege)",
  transformOrigin: "left",
  transform: "scaleX(0)",
  opacity: "0",
  zIndex: "80",
  pointerEvents: "none",
});

let atraso: ReturnType<typeof setTimeout> | undefined;

function mostrar() {
  document.body.appendChild(barra);
  if (reduzirMovimento.matches) {
    // Sem animação: a barra apenas aparece inteira, discreta, enquanto carrega
    barra.style.transition = "none";
    barra.style.transform = "scaleX(1)";
    barra.style.opacity = "0.6";
    return;
  }
  barra.style.transition = "none";
  barra.style.transform = "scaleX(0)";
  barra.style.opacity = "1";
  void barra.offsetWidth; // aplica o estado inicial antes de transicionar
  // Avança rápido no início e desacelera perto do fim, sem nunca completar
  barra.style.transition = "transform 6s cubic-bezier(0.05, 0.8, 0.15, 1)";
  barra.style.transform = "scaleX(0.9)";
}

function concluir() {
  clearTimeout(atraso);
  if (!barra.isConnected) return;
  if (reduzirMovimento.matches) {
    barra.remove();
    return;
  }
  barra.style.transition = "transform 0.2s ease, opacity 0.3s ease 0.1s";
  barra.style.transform = "scaleX(1)";
  barra.style.opacity = "0";
  setTimeout(() => barra.remove(), 400);
}

document.addEventListener("astro:before-preparation", () => {
  clearTimeout(atraso);
  atraso = setTimeout(mostrar, 150);
});
// before-swap: página carregada (a barra some junto com o body antigo na troca).
// page-load: garantia extra de limpeza (ex.: navegação cancelada/instantânea).
document.addEventListener("astro:before-swap", concluir);
document.addEventListener("astro:page-load", concluir);
