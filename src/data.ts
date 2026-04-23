export type ActivityData = {
  id: string;
  title: string;
  description: string;
  link?: string;
  link2?: string;
  critique?: string;
  skills?: string;
};

export type TrimesterData = {
  id: string;
  name: string;
  description: string;
  locked?: boolean;
  activities: ActivityData[];
};

export type Subject = {
  id: string;
  name: string;
  trimesters: TrimesterData[];
};

export type Category = {
  id: string;
  name: string;
  subjects?: Subject[];
  trimesters?: TrimesterData[]; 
};

// Common trimesters
const createTrimesters = (subjectId: string): TrimesterData[] => {
  const generateActivities = (triNum: number) => [
    { id: `${subjectId}-t${triNum}-a1`, title: "Atividade 1", description: "Descrição do trabalho ou projeto desenvolvido." },
    { id: `${subjectId}-t${triNum}-a2`, title: "Atividade 2", description: "Descrição do trabalho ou projeto desenvolvido." },
    { id: `${subjectId}-t${triNum}-a3`, title: "Atividade 3", description: "Descrição do trabalho ou projeto desenvolvido." }
  ];

  return [
    { id: `${subjectId}-tri1`, name: "1º Trimestre", description: "Conteúdos e projetos do primeiro trimestre.", locked: false, activities: generateActivities(1) },
    { id: `${subjectId}-tri2`, name: "2º Trimestre", description: "Conteúdos e projetos do segundo trimestre.", locked: true, activities: generateActivities(2) },
    { id: `${subjectId}-tri3`, name: "3º Trimestre", description: "Conteúdos e projetos do terceiro trimestre.", locked: true, activities: generateActivities(3) },
  ];
};

export const subjectsData: Category[] = [
  {
    id: "tecnico",
    name: "Técnico em Desenvolvimento de Sistemas - Integrado ao EM",
    subjects: [
      { id: "iot", name: "Internet das Coisas", trimesters: createTrimesters("iot") },
      { id: "db", name: "Banco de Dados", trimesters: createTrimesters("db") },
      { id: "intro-proj", name: "Introdução à Indústria de Projetos", trimesters: createTrimesters("intro-proj") },
      { id: "intro-40", name: "Introdução à Indústria 4.0", trimesters: createTrimesters("intro-40") },
      { id: "sustentabilidade", name: "Sustentabilidade nos Processos Industriais", trimesters: createTrimesters("sustentabilidade") },
      { id: "dev-sistemas", name: "Desenvolvimento de Sistemas", trimesters: createTrimesters("dev-sistemas") },
      { 
        id: "modelagem", 
        name: "Modelagem de Sistemas", 
        trimesters: [
          {
            id: "modelagem-tri1",
            name: "1º Trimestre",
            description: "Conteúdos e projetos do primeiro trimestre de Modelagem de Sistemas.",
            locked: false,
            activities: [
              {
                id: "mod-t1-a1",
                title: "Projeto: TaskSync - Sistema de Gestão de Tarefas",
                description: "Desenvolvemos essa atividade em grupo criando a ideia de um sistema de gestão de tarefas chamado TaskSync.",
                link: "https://satasksync.netlify.app/",
                critique: "Desenvolvemos essa atividade em grupo criando a ideia de um sistema de gestão de tarefas chamado TaskSync. Pensamos em como ele funcionaria, quem usaria e quais problemas ele resolveria. Organizamos regras, funcionalidades e até a parte visual do sistema. Fizemos isso para entender melhor como criar um sistema desde o começo. Aprendemos sobre organização de projetos, lógica de sistemas e como transformar uma ideia em algo mais estruturado."
              }
            ]
          },
          { id: "modelagem-tri2", name: "2º Trimestre", description: "Conteúdos e projetos do segundo trimestre.", locked: true, activities: [] },
          { id: "modelagem-tri3", name: "3º Trimestre", description: "Conteúdos e projetos do terceiro trimestre.", locked: true, activities: [] },
        ]
      },
    ],
  },
  {
    id: "matematica",
    name: "Matemática",
    trimesters: [
      {
        id: "matematica-tri1",
        name: "1º Trimestre",
        description: "Conteúdos e projetos do primeiro trimestre de Matemática.",
        locked: false,
        activities: [
          {
            id: "mat-t1-a1",
            title: "Jogo: Quebrando a Banca",
            description: "Nesta atividade, criamos um jogo inspirado no filme Quebrando a Banca, utilizando conceitos de probabilidade e análise combinatória.",
            link: "https://jogo-quebrando-a-banca.netlify.app/",
            link2: "https://drive.google.com/file/d/1-zr4wS6cZbFgX0arx3cIE9BGOjozogtS/view?usp=drive_link",
            critique: "Nesta atividade, criamos um jogo inspirado no filme Quebrando a Banca, utilizando conceitos de probabilidade e análise combinatória. O trabalho foi dinâmico e ajudou a aplicar a matemática na prática, desenvolvendo o raciocínio lógico de forma criativa.",
            skills: "C5: Aplicar o pensamento probabilístico para quantificar e fazer previsões em situações aplicadas a diferentes áreas do conhecimento e da vida cotidiana. | H30: Identificar dados, regularidades e relações numa situação que envolva o raciocínio combinatório, utilizando os processos de contagem. | H31: Reconhecer fenômenos e eventos de caráter aleatório, compreendendo o significado e a importância da probabilidade como meio de prever resultados."
          },
          { 
            id: "mat-t1-a2", 
            title: "Análise do Filme: Quebrando a Banca", 
            description: "Nesta atividade, analisamos o filme Quebrando a Banca, relacionando matemática e probabilidade com situações reais de jogo.",
            link: "https://docs.google.com/document/d/1pqG_mWFm3sJ7JL8XGYJNEtfC4I5zZB1ZKaMYFit6rVw/edit?usp=sharing",
            critique: "Nesta atividade, analisamos o filme Quebrando a Banca, relacionando matemática e probabilidade com situações reais de jogo. O filme mostra como o uso de estratégias, como a contagem de cartas, pode influenciar resultados e decisões. Foi uma atividade interessante que conectou teoria e prática de forma dinâmica.",
            skills: "H31: Reconhecer fenômenos e eventos de caráter aleatório, compreendendo o significado e a importância da probabilidade como meio de prever resultados. | H32: Identificar em diferentes áreas científicas e outras atividades práticas modelos e problemas que fazem uso de estatísticas e probabilidades."
          }
        ]
      },
      { id: "mat-tri2", name: "2º Trimestre", description: "Conteúdos e projetos do segundo trimestre.", locked: true, activities: [] },
      { id: "mat-tri3", name: "3º Trimestre", description: "Conteúdos e projetos do terceiro trimestre.", locked: true, activities: [] },
    ],
  },
  {
    id: "linguagens",
    name: "Linguagens",
    trimesters: [
      { 
        id: "linguagens-tri1", 
        name: "1º Trimestre", 
        description: "Conteúdos e projetos do primeiro trimestre de Linguagens.", 
        locked: false, 
        activities: [
          { 
            id: "linguagens-t1-a1", 
            title: "Jogo sobre o Barroco (Wordwall)", 
            description: "Nesta atividade, criamos um jogo no Wordwall sobre o Barroco, revisando suas principais características de forma interativa. O trabalho em grupo ajudou na organização e tornou a atividade mais dinâmica e criativa.",
            link: "https://canva.link/9p24lvjrtr10vu6",
            critique: "Nesta atividade, criamos um jogo no Wordwall sobre o Barroco, revisando suas principais características de forma interativa. O trabalho em grupo ajudou na organização e tornou a atividade mais dinâmica e criativa.",
            skills: "H15 - Produzir trabalhos individuais e coletivos, explorando materiais e técnicas ligados ao universo das composições artísticas e de práticas corporais."
          },
          { 
            id: "linguagens-t1-a2", 
            title: "Análise: A Paixão Segundo G.H.", 
            description: "Nesta atividade, analisamos A Paixão Segundo G.H. relacionando a experiência da personagem com a fisiologia e a neurociência.",
            link: "https://drive.google.com/file/d/18NO-vxr_UoI5TOHgqoUCdt4XOivSfbes/view?usp=sharing",
            critique: "Nesta atividade, analisamos A Paixão Segundo G.H. relacionando a experiência da personagem com a fisiologia e a neurociência. Discutimos reações como nojo e luta ou fuga, entendendo como o corpo responde à situação. Foi um trabalho que uniu literatura e ciência de forma interessante e reflexiva.",
            skills: "H4 e H22"
          }
        ] 
      },
      { id: "linguagens-tri2", name: "2º Trimestre", description: "Conteúdos e projetos do segundo trimestre.", locked: true, activities: [] },
      { id: "linguagens-tri3", name: "3º Trimestre", description: "Conteúdos e projetos do terceiro trimestre.", locked: true, activities: [] },
    ],
  },
  {
    id: "humanas",
    name: "Humanas",
    trimesters: [
      {
        id: "humanas-tri1",
        name: "1º Trimestre",
        description: "Conteúdos e projetos do primeiro trimestre de Humanas.",
        locked: false,
        activities: [
          { 
            id: "humanas-t1-a1", 
            title: "Geopolítica: Suíça", 
            description: "Trabalho em grupo sobre a Suíça, analisando aspectos históricos, sociais e políticos do país.",
            link: "https://canva.link/i054cc100fah9qy",
            critique: "Fizemos um trabalho em grupo sobre a Suíça, analisando aspectos históricos, sociais e políticos do país. Pesquisamos sobre sua neutralidade, organização e qualidade de vida. Fizemos isso para entender como um país se desenvolve de forma diferente. Aprendemos sobre economia, sociedade e a influência da história no presente.",
            skills: "C1: Compreender processos históricos, sociais e geográficos na sociedade | H1: Reconhecer a formação do indivíduo nos aspectos históricos e sociais | H2: Entender o processo de socialização e pensamento lógico | H3: Compreender relações de poder entre grupos sociais | H4: Identificar mudanças e permanências ao longo do tempo | H5: Analisar criticamente aspectos políticos, econômicos e sociais"
          },
          { 
            id: "humanas-t1-a2", 
            title: "Jornal: A Grande Guerra", 
            description: "Desenvolvemos em grupo a capa de um jornal inspirado no início do século XX sobre o exército britânico.",
            link: "https://drive.google.com/file/d/1D2LmpVLL2XXpGRn3xNbg_Bza0ph8LdGq/view?usp=sharing",
            critique: "Desenvolvemos em grupo a capa de um jornal inspirado no início do século XX. Escrevemos uma matéria principal e outras secundárias sobre O DIA MAIS MORTAL DA HISTÓRIA DO EXÉRCITO BRITÂNICO, como se fôssemos jornalistas da época. Fizemos isso para entender como funcionava a comunicação naquele período. Aprendemos sobre o contexto histórico e como o ponto de vista influencia as notícias.",
            skills: "C3: Analisar e interpretar informações históricas e sociais | H15: Compreender contextos históricos e suas características | H16: Analisar diferentes pontos de vista em um mesmo período | H20: Relacionar fatos históricos com aspectos sociais, políticos e econômicos | C6: Entender o papel da comunicação na sociedade | H39: Analisar a influência dos meios de comunicação ao longo do tempo"
          },
          { id: "humanas-t1-a3", title: "Atividade 3", description: "Descrição do trabalho ou projeto desenvolvido." }
        ]
      },
      { id: "humanas-tri2", name: "2º Trimestre", description: "Conteúdos e projetos do segundo trimestre.", locked: true, activities: [] },
      { id: "humanas-tri3", name: "3º Trimestre", description: "Conteúdos e projetos do terceiro trimestre.", locked: true, activities: [] },
    ],
  },
  {
    id: "natureza",
    name: "Natureza",
    trimesters: [
      {
        id: "natureza-tri1",
        name: "1º Trimestre",
        description: "Conteúdos e projetos do primeiro trimestre de Natureza.",
        locked: false,
        activities: [
          {
            id: "nat-t1-a1",
            title: "Evolução e Ideias Evolucionistas",
            description: "Nesta atividade, estudamos as ideias evolucionistas e analisamos evidências da evolução de forma dinâmica através da criação de memes.",
            link: "https://canva.link/dqdzyledmqfksaq",
            critique: "Nesta atividade, estudamos as ideias evolucionistas e analisamos evidências da evolução de forma dinâmica. A criação de um meme ajudou a entender o conteúdo de maneira mais leve e atual, tornando o aprendizado mais interessante.",
            skills: "C3 - Determinar os impactos das ações humanas nos ambientes, identificando suas causas e propondo soluções para a sua redução. | H15 - Comparar propostas de intervenção ambiental aplicando conhecimentos científicos e tecnológicos, observando os riscos e benefícios de sua implementação. | H18 - Identificar situações de risco ambiental na cidade onde reside."
          },
          { 
            id: "nat-t1-a2", 
            title: "Guerras e Recursos Energéticos", 
            description: "Nesta atividade, analisamos a relação entre guerras e recursos energéticos, como petróleo e gás.",
            link: "https://canva.link/aqp3r6b0yluvr1s",
            critique: "Nesta atividade, analisamos a relação entre guerras e recursos energéticos, como petróleo e gás. Discutimos como esses recursos influenciam conflitos, a economia e o preço dos combustíveis, além de refletir sobre seus impactos na sociedade e possíveis alternativas.",
            skills: "C1: Entender a ciência e a tecnologia como construções humanas | C2: Aplicar conceitos científicos para explicar fenômenos do cotidiano | H9: Compreender energia e suas transformações | H11: Investigar, levantar hipóteses e tirar conclusões | H1: Interpretar diferentes formas de informação (textos, gráficos, dados)"
          },
          { 
            id: "nat-t1-a3", 
            title: "Experimento: Eletrização por Atrito", 
            description: "Nesta atividade, buscamos compreender como os corpos ficam eletrizados com cargas de sinais opostos através do atrito.",
            link: "https://docs.google.com/document/d/1-B0JUfEMyaCoHxIaDVscOM6IEmAXIJpdg4JQez0CEaA/edit?tab=t.0#heading=h.wxwgm2ght48f",
            critique: "O objetivo da atividade foi compreender, na prática, como ocorre a eletrização por atrito, observando a transferência de elétrons entre diferentes materiais quando são esfregados. Além disso, buscou-se analisar como os corpos ficam eletrizados com cargas de sinais opostos e como isso influencia fenômenos como a atração entre objetos.",
            skills: "C1-Compreender as ciências naturais e as tecnologias como construções humanas | H1-Interpretar informações apresentadas em diferentes linguagens | C2-Aplicar os conceitos fundamentais das Ciências da Natureza | H7-Compreender os conceitos relacionados à Química | H9-Explicar os conceitos de energia, matéria, vida e transformação | H11-Empregar procedimentos e práticas de observação | H12-Relacionar informações para construir modelos em ciência e tecnologia"
          }
        ]
      },
      { id: "natureza-tri2", name: "2º Trimestre", description: "Conteúdos e projetos do segundo trimestre.", locked: true, activities: [] },
      { id: "natureza-tri3", name: "3º Trimestre", description: "Conteúdos e projetos do terceiro trimestre.", locked: true, activities: [] },
    ],
  }
];
