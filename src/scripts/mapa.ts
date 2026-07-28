import { estiloMapa } from "../lib/mapaEstilo";

/**
 * Mapa da seção "Onde estamos" — MapLibre GL + tiles vetoriais da OpenFreeMap,
 * com o tema nas cores da marca (src/lib/mapaEstilo.ts). Sem chave de API.
 * A biblioteca (~230KB gzip) só é baixada quando a seção se aproxima do
 * viewport (IntersectionObserver), para não pesar o carregamento inicial.
 */
function initMapa() {
  const alvo = document.getElementById("mapa-localizacao");
  if (!alvo) return;

  const observador = new IntersectionObserver(
    (entradas) => {
      if (!entradas.some((e) => e.isIntersecting)) return;
      observador.disconnect();
      void criarMapa(alvo);
    },
    { rootMargin: "400px" },
  );
  observador.observe(alvo);
  document.addEventListener(
    "astro:before-swap",
    () => observador.disconnect(),
    {
      once: true,
    },
  );
}

async function criarMapa(alvo: HTMLElement) {
  const [maplibre] = await Promise.all([
    import("maplibre-gl"),
    // @ts-expect-error — import de CSS resolvido pelo Vite
    import("maplibre-gl/dist/maplibre-gl.css"),
  ]);

  const lng = Number(alvo.dataset.lng);
  const lat = Number(alvo.dataset.lat);
  if (!Number.isFinite(lng) || !Number.isFinite(lat)) return;

  const reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const mapa = new maplibre.Map({
    container: alvo,
    style: estiloMapa(),
    center: [lng, lat],
    zoom: 15.2,
    minZoom: 11,
    maxZoom: 18,
    // Rolar a página com o cursor sobre o mapa não dá zoom (zoom com Ctrl/⌘),
    // preservando o scroll suave do Lenis.
    cooperativeGestures: true,
    attributionControl: { compact: true },
    fadeDuration: reduzirMovimento ? 0 : 300,
    locale: {
      "CooperativeGesturesHandler.WindowsHelpText":
        "Use Ctrl + rolagem para dar zoom no mapa",
      "CooperativeGesturesHandler.MacHelpText":
        "Use ⌘ + rolagem para dar zoom no mapa",
      "CooperativeGesturesHandler.MobileHelpText":
        "Use dois dedos para mover o mapa",
      "NavigationControl.ZoomIn": "Aproximar",
      "NavigationControl.ZoomOut": "Afastar",
    },
  });

  mapa.addControl(new maplibre.NavigationControl({ showCompass: false }));

  // ⌘/Ctrl + rolagem é zoom do mapa: impede o evento de subir até o Lenis
  // (que ouve na janela) e rolar a página junto. A rolagem normal continua
  // propagando, então o scroll suave da página segue funcionando sobre o mapa.
  alvo.addEventListener("wheel", (e) => {
    if (e.metaKey || e.ctrlKey) e.stopPropagation();
  });

  // Pin da igreja na cor do tema
  const sangue = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-sangue")
    .trim();
  new maplibre.Marker({ color: sangue }).setLngLat([lng, lat]).addTo(mapa);

  document.addEventListener("astro:before-swap", () => mapa.remove(), {
    once: true,
  });
}

document.addEventListener("astro:page-load", initMapa);
