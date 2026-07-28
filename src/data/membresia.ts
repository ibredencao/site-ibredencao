/**
 * Página "Quero ser membro" — texto e trilha de membresia.
 * Revisar o texto com o pastor antes de publicar, se necessário.
 */

export const versiculoMembresia = {
  texto:
    "Portanto, vocês já não são estrangeiros nem forasteiros, mas concidadãos dos santos e membros da família de Deus.",
  referencia: "Efésios 2.19 (NVI)",
};

export const introMembresia: string[] = [
  "Ser membro de uma igreja local é mais do que ter o nome numa lista. É assumir, diante de Deus e de uma comunidade concreta, o compromisso de caminhar junto: crer no mesmo evangelho, cuidar e ser cuidado, servir e ser servido, perseverar ao lado de irmãos que conhecem o seu nome.",
  "Por isso, na Igreja Batista Redenção a membresia é um passo consciente. Antes de ser recebido, cada interessado percorre um caminho simples — pensado para que ninguém assuma um compromisso sem entendê-lo, e para que a igreja conheça e acolha bem cada novo irmão.",
];

export interface PassoMembresia {
  titulo: string;
  descricao: string;
}

export const passosMembresia: PassoMembresia[] = [
  {
    titulo: "Classe de membresia",
    descricao:
      "Encontros que apresentam quem somos: a história da igreja, o que cremos — a Confissão de Fé — e o que assumimos uns com os outros no Pacto de Membresia. É o espaço para conhecer, perguntar e ponderar com calma.",
  },
  {
    titulo: "Entrevista pastoral",
    descricao:
      "Uma conversa pessoal com o pastor sobre a sua fé em Cristo e o seu desejo de se unir à igreja. Não é uma prova: é um momento de ouvir a sua história, esclarecer o compromisso e orar com você.",
  },
  {
    titulo: "Reunião de membresia",
    descricao:
      "Por fim, você é apresentado à igreja reunida, que o recebe com alegria como membro do corpo. A partir daí, caminhamos juntos — na mesa do Senhor, no serviço e no cuidado mútuo.",
  },
];
