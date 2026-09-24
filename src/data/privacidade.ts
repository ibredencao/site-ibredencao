/**
 * Política de Privacidade — texto da página /politica-de-privacidade.
 * Escrita para refletir EXATAMENTE o que o site faz; se novas ferramentas
 * forem adicionadas (ex.: Google Analytics), atualizar aqui ANTES do deploy
 * (nova seção de cookies/estatísticas) e revisar a data abaixo.
 */

export const atualizadaEm = "24 de setembro de 2026";

export interface SecaoPrivacidade {
  titulo: string;
  paragrafos: string[];
}

export const secoesPrivacidade: SecaoPrivacidade[] = [
  {
    titulo: "O que este site coleta",
    paragrafos: [
      "Diretamente, quase nada: este é um site informativo, e você navega sem se cadastrar, sem preencher formulários e sem informar qualquer dado pessoal. Para entender como o site é utilizado, usamos uma ferramenta de estatísticas de visitação, descrita na seção seguinte.",
    ],
  },
  {
    titulo: "Estatísticas de visitação (Google Analytics)",
    paragrafos: [
      "O site usa o Google Analytics, um serviço do Google, para gerar estatísticas de uso: quais páginas são mais visitadas, de que regiões vêm os acessos e como os visitantes navegam. Para isso, a ferramenta utiliza cookies — pequenos arquivos gravados no navegador — que identificam o navegador de forma pseudônima. Eles não revelam quem você é e não coletam nome, e-mail ou telefone.",
      "Essas informações são tratadas pelo Google em nosso nome e chegam até nós apenas de forma agregada; usamos os relatórios exclusivamente para melhorar o site. Se preferir não participar, você pode bloquear cookies nas configurações do seu navegador ou instalar o complemento oficial de desativação do Google Analytics (tools.google.com/dlpage/gaoptout).",
    ],
  },
  {
    titulo: "Conteúdo carregado de terceiros",
    paragrafos: [
      "Algumas partes do site exibem conteúdo hospedado em serviços de terceiros: as capas dos sermões (servidores do YouTube e do Spotify for Podcasters) e o mapa da nossa localização (Google Maps). Ao carregar essas páginas, o seu navegador se comunica diretamente com esses serviços, que recebem dados técnicos básicos da conexão — como endereço IP e tipo de navegador — apenas para entregar o conteúdo.",
      "O site não usa esses serviços para rastrear você, e nenhuma informação sua é vendida ou compartilhada por nós com quem quer que seja.",
    ],
  },
  {
    titulo: "Hospedagem e registros de acesso",
    paragrafos: [
      "O site é hospedado em serviços de nuvem que, como é padrão na internet, mantêm registros técnicos de acesso (endereço IP, data e hora) por tempo limitado, para fins de segurança e operação da infraestrutura.",
    ],
  },
  {
    titulo: "Links para outras plataformas",
    paragrafos: [
      "O site contém links para WhatsApp, e-mail, Instagram, YouTube e Spotify. Ao seguir um desses links, você passa a estar sujeito às políticas de privacidade da plataforma de destino, que não estão sob o nosso controle.",
    ],
  },
  {
    titulo: "Seus direitos",
    paragrafos: [
      "A Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) garante a você direitos sobre os seus dados pessoais, como confirmação de tratamento, acesso e correção. Como este site praticamente não trata dados pessoais, há pouco a exercer na prática — mas qualquer dúvida ou solicitação pode ser enviada para batistaredencaonatal@gmail.com, e teremos alegria em responder.",
    ],
  },
  {
    titulo: "Alterações desta política",
    paragrafos: [
      "Se o site passar a usar novas ferramentas que envolvam dados dos visitantes — por exemplo, estatísticas de visitação ou um formulário de contato —, esta página será atualizada antes da mudança entrar no ar, com a data de revisão indicada no topo.",
    ],
  },
];
