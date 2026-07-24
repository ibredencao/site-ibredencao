// Confissão de Fé da Igreja Batista Redenção (Confissão de New Hampshire, art. I–XVIII + art. XIX).
// Conteúdo extraído do Figma. Editar aqui mantém a página /confissao-de-fe sincronizada.

export interface BlocoConfissao {
  tipo: "p" | "refs";
  texto?: string;
  itens?: string[];
}

export interface ArtigoConfissao {
  num: string;
  slug: string;
  titulo: string;
  blocos: BlocoConfissao[];
}

export const artigosConfissao: ArtigoConfissao[] = [
  {
    num: "I",
    slug: "as-escrituras-sagradas",
    titulo: "As Escrituras Sagradas",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que a Bíblia Sagrada foi escrita por homens divinamente inspirados e é um perfeito tesouro de instrução celestial.¹ Ela tem Deus como seu autor, a salvação como sua finalidade² e a verdade, sem qualquer mistura de erro, como seu conteúdo.³ Ela revela os princípios pelos quais Deus nos julgará⁴ e, portanto, é, e continuará sendo até o fim do mundo, o verdadeiro centro da união cristã⁵ e o supremo padrão pelo qual toda conduta e todos os credos e opiniões humanas devem ser julgados.⁶",
      },
      {
        tipo: "refs",
        itens: [
          "2Tm 3.16-17; 2Pe 1.21; 2Sm 23.2; At 1.16; 3.21; Jo 10.35; Lc 16.29-31; Sl 119.111; Rm 3.1-2.",
          "2Tm 3.15; 1Pe 1.10-12; At 11.14; Rm 1.16; Mc 16.16; Jo 5.38-39.",
          "Pv 30.5-6; Jo 17.17; Ap 22.18-19; Rm 3.4.",
          "Rm 2.12; Jo 12.47-48; 1Co 4.3-4; Lc 10.10-16; 12.47-48.",
          "Fp 3.16; Ef 4.3-6; Fp 2.1-2; 1Co 1.10; 1Pe 4.11.",
          "1Jo 4.1; Is 8.20; 1Ts 5.21; 2Co 13.5; At 17.11; 1Jo 4.6; Jd 3; Ef 6.17; Sl 119.59-60; Fp 1.9-11.",
        ],
      },
    ],
  },
  {
    num: "II",
    slug: "o-deus-verdadeiro",
    titulo: "O Deus Verdadeiro",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que há um, e somente um, Deus vivo e verdadeiro, um Espírito infinito e inteligente, cujo nome é YAHVEH, o Criador e Governante supremo do céu e da terra.¹ Ele é inexprimivelmente glorioso em santidade² e digno de toda honra, toda confiança e todo amor possíveis.³ Há três pessoas na unidade da Divindade — o Pai, o Filho e o Espírito Santo.⁴ Eles são iguais em toda perfeição divina⁵ e executam seus ofícios distintos, embora harmoniosos, na grande obra da redenção.⁶",
      },
      {
        tipo: "refs",
        itens: [
          "Jo 4.24; Sl 147.5; 83.18; Hb 3.4; Rm 1.20; Jr 10.10.",
          "Êx 15.11; Is 6.3; 1Pe 1.15-16; Ap 4.6-8.",
          "Mc 12.30; Ap 4.11; Mt 10.37; Jr 2.12-13.",
          "Mt 28.19; Jo 15.26; 1Co 12.4-6; 1Jo 5.7.",
          "Jo 10.30; Jo 5.17; 14.23; 17.5, 10; At 5.3-4; 1Co 2.10-11; Fp 2.5-6.",
          "Ef 2.18; 2Co 13.4; Ap 1.4-5; cf. 2.7.",
        ],
      },
    ],
  },
  {
    num: "III",
    slug: "a-queda-do-homem",
    titulo: "A queda do homem",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que o homem foi criado em santidade, sob a lei de seu Criador,¹ mas, por transgressão voluntária, caiu daquele estado santo e feliz.² Em consequência disso, toda a humanidade é agora pecadora³ não por coação, mas por escolha,⁴ estando, por natureza, completamente destituída daquela santidade requerida pela lei de Deus, intrinsecamente inclinada ao mal e, portanto, sob a justa condenação à ruína eterna,⁵ sem defesa ou desculpa.⁶",
      },
      {
        tipo: "refs",
        itens: [
          "Gn 1.27, 31; Ec 7.29; At 17.26-29; Gn 2.16-17.",
          "Gn 3.6-24; Rm 5.12.",
          "Rm 5.19; Jo 3.6; Sl 51.5; Rm 5.15-19; 8.7.",
          "Is 53.6; Gn 6.12; Rm 3.9-18.",
          "Ef 2.1-3; Rm 1.18, 32; Rm 2.1-16; Gl 3.10; Mt 20.15.",
          "Ez 18.19-20; Rm 1.20; 3.18; Gl 3.22.",
        ],
      },
    ],
  },
  {
    num: "IV",
    slug: "o-caminho-da-salvacao",
    titulo: "O caminho da salvação",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que a salvação de pecadores é inteiramente gratuita,¹ por meio dos ofícios mediadores do Filho de Deus,² que, pela designação do Pai, livremente tomou sobre si nossa natureza, ainda que sem pecado.³ Ele honrou a lei divina por sua obediência pessoal⁴ e, por sua morte, fez expiação total por nossos pecados.⁵ Tendo ressuscitado dentre os mortos, ele está agora entronizado no céu⁶ e, unindo as simpatias mais ternas com as divinas perfeições em sua maravilhosa pessoa, ele é qualificado, em todos os sentidos, para ser um Salvador idôneo, compassivo e todo-suficiente.⁷",
      },
      {
        tipo: "refs",
        itens: [
          "Ef 2.8; Mt 18.11; 1Jo 4.10; 1Co 3.5-7; At 15.11.",
          "Jo 3.16; 1.1-14; Hb 4.14; 12.24.",
          "Fp 2.6-7; Hb 2.9, 14; 2Co 5.21.",
          "Is 42.21; Fp 2.8; Gl 4.4-5; Rm 3.21.",
          "Is 53.4-5; Mt 20.28; Rm 4.25; 3.21-26; 1Jo 4.10; 2.2; 1Co 15.1-3; Hb 9.13-15.",
          "Hb 1.8; 1.3; 8.1; Cl 3.1-4.",
          "Hb 7.25; Cl 2.9; Hb 2.18; 7.26; Sl 89.19; 34.1-22.",
        ],
      },
    ],
  },
  {
    num: "V",
    slug: "a-justificacao",
    titulo: "A justificação",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que a grande bênção do evangelho que Cristo¹ assegura a tantos quantos creem nele é a justificação,² que inclui o perdão dos pecados,³ e a promessa da vida eterna, ambas firmadas nos princípios de justiça.⁴ A justificação é aplicada não em consideração a quaisquer obras de justiça que tenhamos feito, mas somente por meio da fé no sangue do Redentor,⁵ em virtude da qual sua perfeita justiça é livremente imputada a nós por Deus.⁶ Além disso, a justificação nos traz a um estado de mui abençoada paz e favor com Deus, bem como nos assegura todas as outras bênçãos necessárias agora e na eternidade.⁷",
      },
      {
        tipo: "refs",
        itens: [
          "Jo 1.16; Ef 3.8.",
          "At 8.39; Is 53.11-12; Rm 8.1.",
          "Rm 5.9; Zc 13.1; Mt 9.6; At 10.43.",
          "Rm 5.17; Tt 3.5-7; 1Pe 3.7; 1Jo 2.25; Rm 5.21.",
          "Rm 4.4-5; 5.21; 6.23; Fp 3.7-9.",
          "Rm 5.19; 3.24-26; 4.23-25; 1Jo 2.12.",
          "Rm 5.1-3, 11; 1Co 1.30-31; Mt 6.33; 1Tm 4.8.",
        ],
      },
    ],
  },
  {
    num: "VI",
    slug: "a-oferta-livre-de-salvacao",
    titulo: "A oferta livre de salvação",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que as bênçãos da salvação são colocadas à disposição de todos pelo evangelho.¹ É dever imediato de todos aceitá-las por uma fé cordial, penitente e obediente.² Nada impede a salvação do maior pecador na terra senão sua própria depravação inerente e a rejeição voluntária do evangelho.³ Tal rejeição o envolve em uma condenação ainda mais severa.⁴",
      },
      {
        tipo: "refs",
        itens: [
          "Is 55.1; Ap 22.17; Lc 14.17.",
          "Rm 16.26; Mc 1.15; Rm 1.15-17.",
          "Jo 5.40; Mt 23.37; Rm 9.32; Pv 1.24; At 13.46.",
          "Jo 3.19; Mt 11.20; Lc 19.27; 2Ts 1.8.",
        ],
      },
    ],
  },
  {
    num: "VII",
    slug: "a-graca-da-regeneracao",
    titulo: "A graça da regeneração",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que, a fim de serem salvos, os pecadores devem ser regenerados, ou seja, nascidos de novo.¹ A regeneração consiste em conceder uma disposição santa à mente² e é efetuada de um modo que está acima de nossa compreensão, pelo poder do Espírito Santo e em conexão com a verdade divina,³ a fim de assegurar a nossa obediência voluntária ao evangelho.⁴ Sua evidência apropriada se manifesta nos frutos santos do arrependimento, da fé e da novidade de vida.⁵",
      },
      {
        tipo: "refs",
        itens: [
          "Jo 3.3, 6-7; 1Co 2.14; Ap 14.3; 21.27.",
          "2Co 5.17; Ez 36.26; Dt 30.6; Rm 2.28-29; 5.5; 1Jo 4.7.",
          "Jo 3.8; 1.13; Tg 1.16-18; 1Co 1.30; Fp 2.13.",
          "1Pe 1.22-25; 1Jo 5.1; Ef 4.20-24; Cl 3.9-11.",
          "Ef 5.9; Rm 8.9; Gl 5.16-23; Ef 2.14-21; Mt 3.8-10; 7.20; 1Jo 5.4, 18.",
        ],
      },
    ],
  },
  {
    num: "VIII",
    slug: "o-arrependimento-e-a-fe",
    titulo: "O arrependimento e a fé",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que o arrependimento e a fé são deveres sagrados e também graças inseparáveis, operadas em nossas almas pelo Espírito regenerador de Deus,¹ através do qual, ao sermos profundamente convencidos de nossa culpa, perigo e desamparo, bem como do caminho da salvação por Cristo,² voltamo-nos para Deus com sinceras contrição, confissão e súplica por misericórdia,³ recebendo, ao mesmo tempo, de coração, o Senhor Jesus Cristo como nosso Profeta, Sacerdote e Rei, e confiando nele somente como único e todo-suficiente Salvador.⁴",
      },
      {
        tipo: "refs",
        itens: [
          "Mc 1.15; At 11.18; Ef 2.8; 1Jo 5.1.",
          "Jo 16.8; At 2.37-38; At 16.30-31.",
          "Lc 18.13; 15.18-21; Tg 4.7-10; 2Co 7.11; Rm 10.12-13; Sl 51.",
          "Rm 10.9-11; At 3.22-23; Hb 4.14; Sl 2.6; Hb 1.8; 7.25; 2Tm 1.12.",
        ],
      },
    ],
  },
  {
    num: "IX",
    slug: "o-proposito-da-graca-de-deus",
    titulo: "O propósito da graça de Deus",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que a eleição é o eterno propósito de Deus, segundo o qual ele, graciosamente, regenera, santifica e salva os pecadores.¹ Sendo perfeitamente consistente com a livre agência do homem, a eleição abrange todos os meios, em conexão com o fim,² e é uma demonstração gloriosíssima da bondade soberana de Deus, sendo infinitamente livre, sábia, santa e imutável.³ Ela exclui completamente a vanglória e promove humildade, amor, oração, louvor, confiança em Deus, bem como ativa imitação de sua misericórdia livre.⁴ Além disso, a eleição encoraja o uso dos meios no mais alto grau⁵ e pode ser constatada por seus efeitos em todo aquele que verdadeiramente crê no evangelho.⁶ Ela é o fundamento da segurança cristã,⁷ e verificá-la com respeito a nós mesmos demanda e merece máxima diligência.⁸",
      },
      {
        tipo: "refs",
        itens: [
          "2Tm 1.8-9; Ef 1.3-14; 1Pe 1.1-2; Rm 11.5-6; Jo 15.16; 1Jo 4.19.",
          "2Ts 2.13-14; At 13.48; Jo 10.16; Mt 20.16; At 15.14.",
          "Êx 33.18-19; Mt 20.15; Ef 1.11; Rm 9.23-24; Jr 31.3; Rm 11.28-29; Tg 1.17-18.",
          "1Co 4.7; 1.26-31; Rm 3.27; 4.16; Cl 3.12; 1Co 15.10; 1Pe 5.10; 1Ts 2.12-23; 1Pe 2.9; Lc 18.7.",
          "2Tm 2.10; 1Co 9.22; Jo 6.37-40; 2Pe 1.10.",
          "1Ts 1.4-10.",
          "Rm 8.28-30; Is 42.16; Rm 11.29.",
          "2Pe 1.10-11; Fp 3.12; Hb 6.11.",
        ],
      },
    ],
  },
  {
    num: "X",
    slug: "a-santificacao",
    titulo: "A santificação",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que a santificação é o processo pelo qual, segundo a vontade de Deus, somos feitos participantes de sua santidade.¹ Trata-se de uma obra progressiva,² iniciada na regeneração³ e efetivada nos corações dos crentes pela presença e o poder do Espírito Santo, o Selador e Consolador, no uso contínuo dos meios decretados, especialmente a Palavra de Deus, o autoexame, a abnegação, a vigilância e a oração.⁴",
      },
      {
        tipo: "refs",
        itens: [
          "1Ts 4.3; 5.23; 2Co 7.1; 8.9; Ef 1.4.",
          "Pv 4.18; Hb 6.1; 2Pe 1.5-8; Fp 3.12-16.",
          "1Jo 2.29; Rm 8.5; Jo 3.6; Fp 1.9-11.",
          "Fp 2.12-13; Ef 4.11-12, 30; 6.18; 1Pe 2.2; 2Pe 3.18; 2Co 8.5; Lc 9.23; 11.35; Mt 26.41; Ef 6.18.",
        ],
      },
    ],
  },
  {
    num: "XI",
    slug: "a-perseveranca-dos-santos",
    titulo: "A perseverança dos santos",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que apenas os crentes verdadeiros perseveram até o fim.¹ Seu apego perseverante a Cristo é a grande marca que os distingue dos crentes nominais.² Uma Providência especial vela por seu bem-estar,³ e eles são guardados pelo poder de Deus, por meio da fé, para a salvação.⁴",
      },
      {
        tipo: "refs",
        itens: [
          "Jo 8.31; 1Jo 2.27-28; 3.9; 5.18.",
          "1Jo 2.19; Jo 13.18; Mt 13.20-21; Jo 6.66-69.",
          "Rm 8.28; Mt 6.30-33; Jr 32.40; Sl 121.3; 91.11-12.",
          "Fp 1.6; 2.12-13; Jd 24-25; Hb 1.14; 13.5; 1Jo 4.4.",
        ],
      },
    ],
  },
  {
    num: "XII",
    slug: "a-harmonia-da-lei-e-do-evangelho",
    titulo: "A harmonia da lei e do evangelho",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que a lei de Deus é a regra eterna e imutável de seu governo moral¹ e que é santa, justa e boa.² A incapacidade de cumprir os preceitos da lei que as Escrituras atribuem aos homens caídos procede inteiramente do amor deles pelo pecado.³ Livrá-los disso e restaurá-los, através de um Mediador, à obediência autêntica à santa lei são dois dos grandes propósitos do evangelho e dos meios de graça associados ao estabelecimento da igreja visível.⁴",
      },
      {
        tipo: "refs",
        itens: [
          "Rm 3.31; Mt 5.17; Lc 16.17; Rm 3.20; 4.15.",
          "Rm 7.7, 12, 14, 22; Gl 3.21; Sl 119.",
          "Rm 8.7-8; Js 24.19; Jr 13.23; Jo 5.44; 6.44.",
          "Rm 8.2-4; Rm 10.4; Hb 8.10; 12.14; Jd 20-21.",
        ],
      },
    ],
  },
  {
    num: "XIII",
    slug: "uma-igreja-evangelica",
    titulo: "Uma igreja evangélica",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que uma igreja visível de Cristo é uma congregação de crentes batizados¹ que se associam pactualmente na fé e na comunhão do evangelho,² observam as ordenanças de Cristo,³ são governados por suas leis⁴ e exercitam os dons, direitos e privilégios com os quais sua Palavra os reveste.⁵ Seus únicos oficiais bíblicos são os bispos, ou pastores, e os diáconos,⁶ cujas qualificações, reivindicações e deveres são definidos nas epístolas a Timóteo e Tito.",
      },
      {
        tipo: "refs",
        itens: [
          "1Co 1.1-13; Mt 18.17; At 5.11; 8.1; 11.21-23; 1Co 4.17; 14.23; 3Jo 9.",
          "At 2.41-42; 2Co 8.5; At 2.47; 1Co 5.12-13.",
          "1Co 11.2; 2Ts 3.6; Rm 16.17-20; 1Co 11.23-26; Mt 18.15-20; 2Co 2.17; 1Co 4.17.",
          "Mt 28.20; Jo 14.15, 21; 15.12; 1Jo 4.21; 1Ts 4.2; 2Jo 6; Gl 6.2; todas as epístolas.",
          "Ef 4.7; 1Co 14.12; Fp 1.27.",
          "Fp 1.1; At 14.23; 15.22; 1Tm 3; Tt 1.",
        ],
      },
    ],
  },
  {
    num: "XIV",
    slug: "o-batismo-e-a-ceia-do-senhor",
    titulo: "O Batismo e a Ceia do Senhor",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que o Batismo cristão é a imersão de um crente em água,¹ em nome do Pai, e do Filho, e do Espírito Santo;² para anunciar, em um solene e belo símbolo, nossa fé no Salvador crucificado, sepultado e ressurreto, com seu efeito em nossa morte para o pecado e a ressurreição para uma nova vida.³ Essa ordenança é pré-requisito para os privilégios de uma relação eclesiástica e para a Ceia do Senhor,⁴ na qual os membros da igreja, pelo uso sagrado de pão e vinho, devem comemorar, juntos, a morte amorosa de Cristo,⁵ mas apenas depois de proceder a um autoexame solene.⁶",
      },
      {
        tipo: "refs",
        itens: [
          "At 8.36-39; Mt 3.5-6; Jo 3.22-23; 4.1-2; Mt 28.19; Mc 16.16; At 2.38; 8.12; 16.32-34; 18.8.",
          "Mt 28.19; At 10.47-48; Gl 3.27-28.",
          "Rm 6.4; Cl 2.12; 1Pe 3.20-21; At 22.16.",
          "At 2.41-42; Mt 28.19-20; Atos e todas as epístolas.",
          "1Co 11.26; Mt 26.26-29; Mc 14.22-25; Lc 22.14-20.",
          "1Co 5.1, 8; 10.3-32; 11.17-32; n.b. 11.28; Jo 6.26-71.",
        ],
      },
    ],
  },
  {
    num: "XV",
    slug: "o-sabado-cristao",
    titulo: "O sábado cristão",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que o primeiro dia da semana é o Dia do Senhor, ou o Sábado cristão.¹ Do princípio do mundo até a ressurreição de Cristo, esse dia de descanso era o último dia da semana. A partir da ressurreição de Cristo, porém, foi mudado para o primeiro dia da semana, que é chamado de Dia do Senhor, e, como Descanso Cristão, deve ter continuidade até o fim do mundo. Tal ocasião deve ser consagrada a propósitos religiosos,² com a abstenção de todo o labor e recreação seculares;³ pela observância devota de todos os meios de graça, tanto privados⁴ como públicos;⁵ e pela preparação para aquele repouso que resta para o povo de Deus.⁶",
      },
      {
        tipo: "refs",
        itens: [
          "At 20.7; Gn 2.3; Cl 2.16-17; Mc 2.27; Jo 20.19; 1Co 16.1-2.",
          "Êx 20.8; Ap 1.10; Sl 118.24.",
          "Is 58.13-14.",
          "Sl 113.15.",
          "Hb 10.24-25; At 11.26.",
          "Hb 4.3-11.",
        ],
      },
    ],
  },
  {
    num: "XVI",
    slug: "o-governo-civil",
    titulo: "O governo civil",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que o governo civil é de designação divina para os interesses e a boa ordem da sociedade humana.¹ Devemos orar pelos magistrados, conscientemente honrá-los e obedecer-lhes,² exceto nas coisas opostas à vontade de nosso Senhor Jesus Cristo,³ o qual é o único Senhor da consciência e o Príncipe dos reis da terra.⁴",
      },
      {
        tipo: "refs",
        itens: [
          "Rm 13.1-7; Dt 16.18; 2Sm 13.3; Êx 18.21-23; Jr 30.21.",
          "Mt 22.21; Tt 3.1; 1Pe 2.13; 1Tm 2.1-3.",
          "At 5.29; Mt 10.28; Dn 3.15-18; 6.7-10; At 4.18-20.",
          "Mt 23.10; Rm 14.4; Ap 19.16; Sl 72.11; Sl 2; Rm 14.9-13.",
        ],
      },
    ],
  },
  {
    num: "XVII",
    slug: "o-justo-e-o-impio",
    titulo: "O justo e o ímpio",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que há uma diferença radical e essencial entre os justos e os ímpios.¹ Apenas aqueles que, por meio da fé, são justificados em nome do Senhor Jesus e santificados pelo Espírito do nosso Deus são verdadeiramente estimados como justos por ele,² enquanto todos que continuam em impenitência e incredulidade são, aos seus olhos, ímpios e estão sob a maldição.³ Essa distinção se mantém entre os homens tanto na morte como depois dela.⁴",
      },
      {
        tipo: "refs",
        itens: [
          "2Tm 3.16-17; 2Pe 1.21; 2Sm 23.2; At 1.16; 3.21; Jo 10.35; Lc 16.29-31; Sl 119.111; Rm 3.1-2.",
          "2Tm 3.15; 1Pe 1.10-12; At 11.14; Rm 1.16; Mc 16.16; Jo 5.38-39.",
          "Pv 30.5-6; Jo 17.17; Ap 22.18-19; Rm 3.4.",
          "Rm 2.12; Jo 12.47-48; 1Co 4.3-4; Lc 10.10-16; 12.47-48.",
          "Fp 3.16; Ef 4.3-6; Fp 2.1-2; 1Co 1.10; 1Pe 4.11.",
          "1Jo 4.1; Is 8.20; 1Ts 5.21; 2Co 13.5; At 17.11; 1Jo 4.6; Jd 3; Ef 6.17; Sl 119.59-60; Fp 1.9-11.",
        ],
      },
    ],
  },
  {
    num: "XVIII",
    slug: "o-mundo-vindouro",
    titulo: "O mundo vindouro",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que o fim do mundo está se aproximando.¹ No último dia, Cristo descerá do céu² e ressuscitará os mortos da sepultura para a retribuição final.³ Haverá, então, uma separação solene:⁴ o ímpio será condenado à punição infindável; o justo, ao júbilo eterno.⁵ Esse julgamento fixará para sempre o estado final dos homens no céu ou no inferno, com base na justiça.⁶",
      },
      {
        tipo: "refs",
        itens: [
          "1Pe 4.7; 1Co 7.29-31; Hb 1.10-12; Mt 25.31; 28.20; 13.39-43; 1Jo 2.17; 2Pe 3.3-13.",
          "At 1.11; Ap 1.7; Hb 9.28; At 3.21; 1Ts 4.13-18; 5.1-11.",
          "At 24.15; 1Co 15.12-59; Lc 14.14; Dn 12.2; Jo 5.28-29; 6.40; 11.25-26; At 10.42.",
          "Mt 13.37-43, 49; 24.30-31; 25.31-33.",
          "Mt 25.31-46; Ap 22.11; 1Co 6.9-10; Mc 9.43-48; 2Pe 2.9; Jd 7; Fp 3.19; Rm 6.32; 2Co 5.10-11; Jo 4.36; 2Co 4.18.",
          "Rm 3.5-6; 2Ts 1.6-12; Hb 6.1-2; 1Co 4.5; At 17.31; Rm 2.2-16; Ap 20.11-12; 1Jo 2.28; 4.17; n.b. 2Pe 3.11-12.",
        ],
      },
    ],
  },
  {
    num: "XIX",
    slug: "a-familia",
    titulo: "A família",
    blocos: [
      {
        tipo: "p",
        texto:
          "Cremos que Deus ordenou a família como a instituição fundamental da sociedade humana. Ela é composta por pessoas relacionadas entre si por meio do casamento, laços de sangue ou adoção.",
      },
      {
        tipo: "p",
        texto:
          "Cremos que o casamento é a união de um homem e uma mulher em compromisso de aliança para toda a vida. É um dom único de Deus para revelar a união entre Cristo e Sua igreja, e para proporcionar ao homem e à mulher no casamento o contexto para a companhia íntima, o canal de expressão sexual de acordo com os padrões bíblicos, e o meio para a procriação da raça humana.",
      },
      {
        tipo: "p",
        texto:
          "Cremos que o marido e a esposa têm igual valor diante de Deus, pois ambos foram criados à imagem de Deus. O relacionamento matrimonial reflete a maneira como Deus se relaciona com Seu povo. O marido deve amar sua esposa como Cristo amou a igreja, tendo a responsabilidade dada por Deus de prover, proteger e liderar sua família. A esposa deve submeter-se graciosamente à liderança servil de seu marido, assim como a igreja se submete voluntariamente à liderança de Cristo. Ela, estando na imagem de Deus, assim como seu marido e, portanto, igual a ele, tem a responsabilidade dada por Deus de respeitar seu marido e servi-lo como auxiliadora na administração do lar e na criação da próxima geração.",
      },
      {
        tipo: "p",
        texto:
          "Cremos que as crianças, desde o momento da concepção, são uma bênção e herança do Senhor. Os pais devem demonstrar aos seus filhos o padrão de Deus para o casamento. Os pais devem ensinar aos seus filhos valores espirituais e morais e guiá-los, por meio de um exemplo de estilo de vida consistente e disciplina amorosa, a fazer escolhas baseadas na verdade bíblica. As crianças devem honrar e obedecer a seus pais.¹",
      },
      {
        tipo: "refs",
        itens: [
          "Gn 1.26-28; 2.15-25; 3.1-20; Êx 20.12; Dt 6.4-9; Js 24.15; 1Sm 1.26-28; Sl 51.5; 78.1-8; 127; 128; 139.13-16; Pv 1.8; 5.15-20; 6.20-22; 12.4; 13.24; 14.1; 17.6; 18.22; 22.6,15; 23.13-14; 24.3; 29.15,17; 31.10-31; Ec 4.9-12; 9.9; Ml 2.14-16; Mt 5.31-32; 18.2-5; 19.3-9; Mc 10.6-12; Rm 1.18-32; 1Co 7.1-16; Ef 5.21-33; 6:1-4; Cl 3.18-21; 1Tm 5.8,14; 2Tm 1.3-5; Tt 2.3-5; Hb 13.4; 1Pe 3.1-7.",
        ],
      },
    ],
  },
];

export const notaConfissao: BlocoConfissao[] = [
  {
    tipo: "p",
    texto:
      "A confissão de fé exposta acima, do artigo I ao XVIII, corresponde integralmente à Confissão de Fé de New Hampshire, exceto no acréscimo de algumas proposições ao artigo XV, que foi inserido à partir da CFB1689, capítulo 22, parágrafo 7. Uma associação de igrejas batistas no nordeste dos Estados Unidos ratificou essa confissão de fé, pela primeira vez, em 1833. Posteriormente, um de seus autores, J. Newton Brown, aperfeiçoou, gramaticalmente, à sua linguagem e acrescentou dois artigos importantes: o arrependimento e a fé (artigo VIII) e a santificação (artigo X). Ele e vários outros pastores renomados optaram por essa revisão de 1853, inserindo-a em seus manuais de igreja publicados, de modo a disseminar a CFNH por todo o território dos Estados Unidos. Em consequência, a revisão da CFNH, com seus 18 artigos, tornou-se o compêndio doutrinário preferido dos corpos batistas no norte e no sul dos Estados Unidos.",
  },
  {
    tipo: "p",
    texto:
      "Zacharias C. Taylor, missionário pioneiro no Brasil ligado aos batistas do Sul, por meio da Junta de Missões Estrangeiras, traduziu a CFNH no primeiro ano após a sua chegada. Em 1883, ele publicou esse documento, junto com o Pacto de Igreja, ao lado de questões de governança e ordem da igreja. Seu esforço produziu o primeiro manual de igreja batista em língua portuguesa. Com efeito, a CFNH e seu Pacto de Igreja seriam afirmados na fundação da Primeira Igreja Batista do Rio de Janeiro e em muitas outras igrejas batistas no Brasil.",
  },
  {
    tipo: "p",
    texto:
      "Além disso, a CFNH tem ajudado, ao longo das décadas, no desenvolvimento de outras confissões doutrinárias. Ela serviu, por exemplo, como a estrutura de Mensagem & Fé Batista 2000, para as igrejas em cooperação com a Convenção Batista do Sul e, em algum grau, para a Declaração Doutrinária da Convenção Batista Brasileira. Não obstante, algumas membresias adotam a CFNH praticamente da forma como Brown a revisou, há quase dois séculos.",
  },
  {
    tipo: "p",
    texto:
      "Já o artigo XIX – FAMÍLIA, da confissão de fé exposta acima, corresponde ao artigo XVIII da declaração doutrinária Mensagem & Fé Batista 2000 (Baptist Faith & Message 2000). Essa é uma confissão de fé adotada pela Convenção Batista do Sul, uma das maiores denominações batistas nos Estados Unidos.",
  },
];
