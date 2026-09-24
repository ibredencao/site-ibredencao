/**
 * Página "Quero ser membro" — texto final do Pr. Filipe (set/2026):
 * introdução doutrinária, as razões da membresia, a Trilha de Membresia
 * (entrevista → classe → reunião) e a chamada final.
 */

export const introMembresia: string[] = [
  "De acordo com o Novo Testamento, a igreja é, primariamente, um corpo de pessoas que confessam e dão evidência de que foram salvas pela graça de Deus, para a glória de Deus e por meio da fé somente em Cristo.",
  "Essa realidade se torna visível quando irmãos e irmãs decidem caminhar juntos, comprometendo-se publicamente com o mesmo evangelho e assumindo responsabilidades mútuas como parte de uma igreja local.",
];

export const razoesLead =
  "Sujeitar-se a uma igreja local é importante por algumas razões.";

export interface RazaoMembresia {
  titulo: string;
  texto: string;
}

export const razoesMembresia: RazaoMembresia[] = [
  {
    titulo: "Exibe a beleza do evangelho.",
    texto:
      "O evangelho reconcilia o pecador com Deus (Ef 2.1-10) e também com o seu povo (Ef 2.11-18). Em Cristo, pessoas que antes estavam separadas são reunidas em um só corpo. A membresia, portanto, torna visível essa nova realidade de reconciliação e comunhão que o evangelho produz.",
  },
  {
    titulo: "É um ensino bíblico.",
    texto:
      "As imagens que o Novo Testamento utiliza para falar da igreja pressupõem relacionamentos concretos e reconhecíveis entre seus membros. A igreja é apresentada, por exemplo, como corpo de Cristo (1Co 12.27) e família de Deus (Ef 2.19). Além disso, os diversos mandamentos de mutualidade da Escritura, como amar, servir, encorajar, ensinar, carregar os fardos e cuidar uns dos outros, apontam para uma vida compartilhada em uma comunidade local.",
  },
  {
    titulo: "Torna mais clara a distinção entre a igreja e o mundo.",
    texto:
      "Um membro de igreja é alguém que foi formalmente reconhecido pela igreja como cristão e como parte daquele corpo local. O padrão apresentado no Novo Testamento é crer antes de pertencer. Em Atos 2, por exemplo, aqueles que receberam a Palavra foram batizados e acrescentados à igreja.",
  },
];

export const introTrilha =
  "Por isso, a igreja possui uma Trilha de Membresia cuidadosamente pensada para que ninguém assuma esse compromisso sem antes compreendê-lo e para que a igreja também tenha a oportunidade de conhecer, ouvir e acolher cada pessoa que deseja fazer parte dela.";

export interface PassoMembresia {
  titulo: string;
  descricao: string;
}

export const passosMembresia: PassoMembresia[] = [
  {
    titulo: "Entrevista pastoral",
    descricao:
      "Uma conversa pessoal com o presbítero da igreja para conhecermos melhor a história do candidato, seu processo de conversão, sua fé em Cristo e seu desejo de se unir à igreja.",
  },
  {
    titulo: "Classe de membresia",
    descricao:
      "São encontros realizados com todos os candidatos à membresia. Nesse período, apresentamos a história da nossa igreja, quem somos, o que cremos, nossa Confissão de Fé e aquilo que assumimos uns com os outros por meio do Pacto de Membresia. É também um espaço para que o candidato conheça o DNA da Igreja Batista Redenção, tire suas dúvidas e pondere, de maneira consciente, seu desejo de pertencer à igreja e caminhar conosco.",
  },
  {
    titulo: "Reunião de membresia",
    descricao:
      "Por fim, os membros da igreja se reúnem para deliberar sobre a recepção dos candidatos à membresia. Dessa forma, a entrada de novos membros não é apenas uma decisão individual, mas um compromisso assumido pela comunidade de fé.",
  },
];

export const chamadaMembresia = {
  titulo: "Quer fazer parte da Igreja Batista Redenção?",
  texto:
    "Se você deseja ser membro da nossa igreja, entre em contato conosco para saber mais sobre esse processo.",
  link: "#onde-estamos",
  rotuloBotao: "Entrar em contato",
};
