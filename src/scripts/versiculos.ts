/**
 * Popover de versículos da Confissão de Fé. As referências viram botões
 * (data-versiculo) e, no hover/foco/toque, mostram o texto bíblico vindo de
 * /versiculos.json — arquivo estático gerado por scripts/gerar-versiculos.mjs
 * (nenhuma chamada a API externa; o fetch só acontece na primeira interação).
 */
interface Passagem {
  ref: string;
  texto: string;
}

let passagens: Record<string, Passagem> | null = null;
let versao = "";
let carregamento: Promise<void> | null = null;

function carregarPassagens(): Promise<void> {
  carregamento ??= fetch("/versiculos.json")
    .then((r) => r.json())
    .then((json: { versao: string; passagens: Record<string, Passagem> }) => {
      passagens = json.passagens;
      versao = json.versao;
    })
    .catch(() => {
      carregamento = null; // permite tentar de novo na próxima interação
    });
  return carregamento;
}

function initVersiculos() {
  const botoes = document.querySelectorAll<HTMLElement>("[data-versiculo]");
  if (!botoes.length) return;

  // Popover único, reutilizado por todos os botões
  const popover = document.createElement("div");
  popover.id = "popover-versiculo";
  popover.setAttribute("role", "tooltip");
  popover.setAttribute("data-lenis-prevent", ""); // capítulos longos rolam dentro dele
  popover.className =
    "fixed z-90 w-[22rem] max-w-[calc(100vw_-_2rem)] max-h-72 overflow-y-auto " +
    "rounded-xl border border-preto/10 bg-creme p-5 " +
    "shadow-[0_37px_18px_rgba(111,110,103,0.09),0_9px_10px_rgba(111,110,103,0.1)] " +
    "invisible opacity-0 motion-safe:transition-opacity motion-safe:duration-200";
  const refEl = document.createElement("p");
  refEl.className = "font-ui text-[13px] font-semibold text-sangue";
  const textoEl = document.createElement("p");
  textoEl.className = "mt-2 font-sans text-sm leading-snug text-preto/80";
  popover.append(refEl, textoEl);
  document.body.appendChild(popover);

  let botaoAtivo: HTMLElement | null = null;
  let timerFechar: ReturnType<typeof setTimeout> | undefined;

  async function abrir(botao: HTMLElement) {
    clearTimeout(timerFechar);
    botaoAtivo = botao;
    await carregarPassagens();
    // Outro botão pode ter sido ativado enquanto o JSON carregava
    if (botaoAtivo !== botao || !passagens) return;
    const passagem = passagens[botao.dataset.versiculo ?? ""];
    if (!passagem) return;

    refEl.textContent = `${passagem.ref} — ${versao}`;
    textoEl.textContent = passagem.texto;
    popover.scrollTop = 0;

    // Mede invisível e posiciona: acima do botão; abaixo se faltar espaço
    popover.classList.remove("invisible", "opacity-0");
    const r = botao.getBoundingClientRect();
    const p = popover.getBoundingClientRect();
    const margem = 8;
    let top = r.top - p.height - margem;
    if (top < margem)
      top = Math.min(r.bottom + margem, innerHeight - p.height - margem);
    const left = Math.min(
      Math.max(r.left + r.width / 2 - p.width / 2, margem),
      innerWidth - p.width - margem,
    );
    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
    botao.setAttribute("aria-describedby", popover.id);
  }

  function fechar() {
    botaoAtivo?.removeAttribute("aria-describedby");
    botaoAtivo = null;
    popover.classList.add("invisible", "opacity-0");
  }

  function agendarFechar() {
    clearTimeout(timerFechar);
    // Delay curto: dá tempo de mover o mouse do botão para dentro do popover
    timerFechar = setTimeout(fechar, 150);
  }

  for (const botao of botoes) {
    botao.addEventListener("mouseenter", () => void abrir(botao));
    botao.addEventListener("mouseleave", agendarFechar);
    botao.addEventListener("focus", () => void abrir(botao));
    botao.addEventListener("blur", fechar);
    // Toque (mobile): alterna
    botao.addEventListener("click", () =>
      botaoAtivo === botao ? fechar() : void abrir(botao),
    );
  }
  popover.addEventListener("mouseenter", () => clearTimeout(timerFechar));
  popover.addEventListener("mouseleave", agendarFechar);

  const onKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") fechar();
  };
  const onScroll = () => {
    if (botaoAtivo) fechar(); // posição fica órfã ao rolar; fecha discretamente
  };
  const onClickFora = (e: MouseEvent) => {
    if (
      botaoAtivo &&
      e.target instanceof Node &&
      !popover.contains(e.target) &&
      !botaoAtivo.contains(e.target)
    )
      fechar();
  };
  document.addEventListener("keydown", onKeydown);
  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("click", onClickFora);
  document.addEventListener(
    "astro:before-swap",
    () => {
      document.removeEventListener("keydown", onKeydown);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickFora);
    },
    { once: true },
  );
}

document.addEventListener("astro:page-load", initVersiculos);
