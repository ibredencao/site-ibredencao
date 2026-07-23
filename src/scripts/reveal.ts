/**
 * Reveal-on-scroll minimalista: elementos com [data-reveal] entram com
 * fade + leve deslocamento quando ficam visíveis. Respeita prefers-reduced-motion
 * (nesse caso apenas garante que tudo fique visível).
 */
function initReveal() {
  const alvos = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!alvos.length) return;

  const semAnimacao = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (semAnimacao || !("IntersectionObserver" in window)) {
    alvos.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  alvos.forEach((el) => observer.observe(el));
}

document.addEventListener("astro:page-load", initReveal);
