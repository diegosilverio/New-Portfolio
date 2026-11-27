import type { ManagementCase, ManagementCaseLabels } from './management-cases';

export const managementCaseLabelsPt: ManagementCaseLabels = {
  eyebrow: 'Case de Liderança',
  context: 'Contexto',
  challenge: 'Desafio',
  tradeoff: 'O trade-off',
  mandate: 'Mandato e Objetivos',
  asked: 'O que me pediram',
  pursued: 'O que persegui',
  notDone: 'O que escolhi não fazer',
  approach: 'Abordagem',
  diagnosis: 'Diagnóstico',
  decisions: 'Decisões, em ordem',
  practices: 'Práticas e Artefatos',
  outcomes: 'Resultados',
  operational: 'Operacional',
  before: 'Antes',
  after: 'Depois',
  people: 'Pessoas',
  perception: 'Percepção',
  limitation: 'Limitação',
  learnings: 'Aprendizados',
  next: 'Próximo case de liderança',
  back: 'Voltar para Gestão de Times de Design',
  cases: 'Cases de liderança',
  readCase: 'Ler o case',
};

const img = (id: string, name: string) => `/images/management/${id}/${id}-${name}.svg`;

export const managementCasesPt: Record<string, Omit<ManagementCase, 'id'>> = {
  'design-ops': {
    title: 'Escalando um time de design com IA, não com headcount',
    tagline:
      'Reconstruí o time e sua operação, depois usei IA para escalar a capacidade com orçamento fixo.',
    company: 'SuperSummary',
    meta: [
      {
        label: 'Papel',
        value:
          'Lead Product Designer: pessoas, design system, research ops, ferramentas, processo e contratação',
      },
      { label: 'Período', value: 'set/2024 – hoje' },
      {
        label: 'Empresa',
        value: 'SuperSummary: edtech americana bootstrapped, assinatura B2C, ~40 pessoas',
      },
      {
        label: 'Time',
        value: '3 hoje (Lead, Senior, Junior); pico de 4. Reconstruído com 3 contratações em um ano',
      },
    ],
    stats: [
      { value: '0', label: 'Atrasos causados por design desde dez/2024' },
      { value: '3', label: 'Contratações em um ano, mesmo headcount' },
      { value: '3 : 13', label: 'Designers para engenheiros' },
    ],
    overview: {
      title: 'Três designers para treze engenheiros.',
      paragraphs: [
        'A SuperSummary é uma edtech americana bootstrapped, com um produto de assinatura B2C e cerca de 40 pessoas. Engenharia tem 13 pessoas; Produto tem uma Head de Produto e 2 PMs. Entrei em setembro de 2024 como Lead Product Designer, reportando ao CEO.',
        'A Head de Produto direciona e aprova o backlog. Eu respondo por como o design trabalha: direção, suporte ao time, operação e execução em frentes específicas. O time começou comigo, uma Senior e uma Mid-level. Chegou a 4 pessoas e hoje tem 3, cobrindo até 4 frentes de produto ao mesmo tempo.',
      ],
    },
    challenge: {
      title: 'O design tinha virado o gargalo da engenharia.',
      paragraphs: [
        'Nos primeiros três meses, encontrei um time sem processo definido. PMs e engenheiros repetiam as mesmas três reclamações: atraso nas entregas, baixa qualidade e experiência inconsistente. Os PMs precisavam de vários follow-ups para conseguir uma entrega utilizável. A linguagem visual que herdei estava defasada.',
        'O risco ia além do design. A engenharia esperava pelo design, as squads atrasavam as entregas, e PMs e liderança já não confiavam no que o design entregava.',
      ],
      tradeoff:
        'Arrumar as pessoas ou o sistema primeiro? Um sistema melhor, operado por um time que não estava pronto para trabalhar com estrutura, não mudaria o resultado. Por isso, escolhi entender como cada designer trabalhava antes de construir qualquer coisa, e aceitei que processo, ferramentas e research iam esperar.',
    },
    mandate: {
      title: 'Primeiro confiança, depois escala.',
      asked:
        'Um time de design estruturado, com IA nos processos internos para escalar a capacidade produtiva, com orçamento fixo.',
      pursued:
        'Recuperar a confiança da empresa no design e garantir qualidade alta e constante nas entregas.',
      notDone:
        'Ampliar o time de forma permanente. Também adiei o design system e o research até o time estar formado.',
    },
    approach: {
      title: 'Pessoas, depois entrega, depois escala.',
      diagnosis:
        'Durante cerca de um mês, conversei com 6 pessoas entre PMs, engenheiros e liderança. Também analisei arquivos do Figma, rituais das squads e handoffs, e observei como cada designer executava, se relacionava e entregava. Minha conclusão: o time tinha baixa maturidade de entrega e de operação.',
      steps: [
        {
          title: 'Time',
          body: 'Reestruturei o time: 3 contratações em um ano, com critérios de contratação definidos por mim.',
        },
        {
          title: 'Processo de delivery',
          body: 'A confiança de PMs e engenharia dependia de entregas previsíveis, então resolvi isso antes de discovery.',
        },
        {
          title: 'Discovery e performance',
          body: 'Um processo de discovery, depois critérios de performance, que viraram a career ladder.',
        },
        {
          title: 'Ferramentas de IA, por último',
          body: 'Cada ferramenta foi construída sobre um processo manual que já existia, ou sobre uma necessidade que o processo não atendia. Automatizar um processo que ainda não existia seria trabalhar no chute.',
        },
      ],
      notes: [
        {
          title: 'Construído, não comprado',
          body: 'Construí as ferramentas eu mesmo. As opções de mercado que avaliei falhavam no preço ou no encaixe com a nossa forma de trabalhar, e nenhuma resolvia as duas coisas.',
        },
        {
          title: 'Resistência',
          body: 'O time queria usar IA, mas tinha dificuldade de encaixá-la no dia a dia. Atrelei cada ferramenta a uma etapa do processo e aos rituais de critique. O revisor com IA virou pré-requisito para apresentar no design critique e para o check final de handoff.',
        },
      ],
    },
    practices: {
      title: 'Um sistema operacional para um time pequeno.',
      intro:
        'Um processo de design com ferramentas mapeadas a cada etapa, uma career ladder, um skill map para contratação, o Design System 2.0 e ferramentas de IA que constroem e revisam o trabalho com base nele. Estes são os rituais que ficaram depois de testarmos vários formatos.',
      groups: [
        {
          title: 'Rituais',
          items: [
            {
              title: 'Design critique semanal',
              body: 'O time de design, às vezes com um PM ou alguém da liderança.',
            },
            {
              title: '1:1s',
              body: 'Carreira, entregas e, no momento certo do ano, avaliação de performance.',
            },
            {
              title: 'Revisão de handoff',
              body: 'Quando o projeto está pronto, o designer o compartilha no canal de design para um check com o time.',
            },
          ],
        },
        {
          title: 'Artefatos',
          items: [
            {
              title: 'Career Ladder',
              body: 'Modelo em Y, com trilha de IC (Junior a Staff) e trilha de gestão. Tem 9 competências, incluindo AI-Augmented Design.',
            },
            {
              title: 'Skill Map',
              body: 'A matriz que usei para comparar candidatos com as lacunas do time.',
            },
            {
              title: 'UX Maker',
              body: 'Um assistente de IA que constrói telas no Figma usando apenas tokens e componentes do DS 2.0.',
            },
            {
              title: 'DS to Code',
              body: 'Uma skill no repositório da engenharia que mapeia tokens e componentes do DS 2.0 para código de produção.',
            },
          ],
        },
      ],
      images: [
        { src: img('design-ops', 'career-ladder'), caption: 'Career Ladder: trilhas de IC e de gestão, 9 competências' },
        { src: img('design-ops', 'skill-map'), caption: 'Template do Skill Map usado para comparar candidatos com as lacunas do time' },
        { src: img('design-ops', 'ux-maker'), caption: 'UX Maker construindo uma tela no Figma com componentes do DS 2.0' },
      ],
    },
    outcomes: {
      title: 'O design deixou de ser o gargalo.',
      changes: [
        {
          area: 'Atrasos',
          before: 'Reclamações frequentes',
          after: 'Nenhum atraso causado por design desde dez/2024, segundo os PMs e o planejamento das squads',
        },
        {
          area: 'Follow-ups',
          before: 'PMs cobrando entregas',
          after: 'Os próprios PMs relataram menos follow-ups',
        },
        {
          area: 'Acompanhamento',
          before: 'Sem processo definido',
          after: 'Entregas de design geridas no Linear',
        },
        {
          area: 'Revisão',
          before: 'Informal',
          after: 'Revisão com IA obrigatória antes do critique e do handoff',
        },
        {
          area: 'Design para código',
          after: 'O DS to Code faz parte do repositório da engenharia',
        },
      ],
      people: [
        'A designer Senior (2+ anos no time) lidera sozinha o design da squad dela e apoia o PM no planejamento trimestral.',
        'A designer Junior (1+ ano) assume projetos como única designer, sem suporte de uma Senior nem meu.',
        'Os designers agora constroem as próprias ferramentas de IA.',
        'O time usa as ferramentas de IA quase todo dia.',
      ],
      perception: [],
      quote: {
        text: 'You overhauled the team, hired new designers, established our team’s operations…',
        author: 'Liderança de Produto',
      },
    },
    learnings: {
      title: 'Pessoas antes de sistema.',
      items: [
        {
          title: 'Contratar por skill não basta.',
          body: 'Contratei pela profundidade de skill e dei pouco peso à calibragem entre o escopo do design e o que a squad precisava entregar. Nossas entrevistas agora testam isso diretamente.',
        },
        {
          title: 'Research esperou demais.',
          body: 'Adiar foi a decisão certa, mas ficou parado por mais tempo do que deveria.',
        },
        {
          title: 'Pessoas antes de sistema.',
          body: 'Um processo só escala a maturidade de quem o executa. Arrumar o time primeiro foi o que fez o sistema funcionar.',
        },
      ],
    },
  },
  'research-ops': {
    title: 'Research Ops na SuperSummary',
    tagline:
      'Retomar a pesquisa com usuários e automatizar sua operação, para que as entrevistas virassem parte de como a empresa trabalha, e não uma tarefa do design.',
    company: 'SuperSummary',
    meta: [
      { label: 'Papel', value: 'Lead Product Designer' },
      { label: 'Período', value: 'out/2024 – hoje' },
      { label: 'Empresa', value: 'SuperSummary' },
      {
        label: 'Time',
        value: '3 product designers reportando a mim; sem researcher dedicado',
      },
      { label: 'Escopo', value: 'Research Ops, Continuous Discovery, workflows com IA' },
    ],
    stats: [
      { value: '285', label: 'Entrevistas realizadas desde outubro de 2024' },
      { value: '~15 → 2', label: 'Etapas manuais por entrevista' },
      { value: '6', label: 'Funções conduzindo entrevistas, antes só o design' },
    ],
    overview: {
      title: 'Pesquisa era papel do design, sem researcher.',
      paragraphs: [
        'A SuperSummary é uma edtech americana bootstrapped, com cerca de 40 pessoas e assinatura B2C de guias de estudo. Lidero um time de três product designers, reporto ao CEO e trabalho com o Head de Produto, PMs e engenharia em três squads. Não há researcher dedicado: pesquisa é responsabilidade do design.',
        'Em outubro de 2024, o CEO pediu para recolocar a empresa em contato regular com os usuários. Desenhei a operação de pesquisa, escrevi a documentação e construí as automações sozinho. As entrevistas foram conduzidas por pessoas de toda a empresa.',
      ],
    },
    challenge: {
      title: 'Uma empresa que sabia o que os usuários faziam, mas não por quê.',
      paragraphs: [
        'As decisões de produto se apoiavam em dados quantitativos e benchmarks. A pesquisa qualitativa acontecia em surtos: de 2023 a setembro de 2024 foram 43 entrevistas em 91 semanas, e nenhuma nos quatro meses antes da retomada.',
        'O que se aprendia ficava espalhado em seis ferramentas: Hotjar, Dovetail, BuildBetter, Slab, Airtable e Google Drive. O conhecimento existia, mas era difícil de acessar. Os PMs não o usavam, e ele ficava com quem tinha feito cada estudo. Dovetail e BuildBetter eram as mais caras e as que menos agregavam.',
      ],
      tradeoff:
        'O que estava em risco era oportunidade: novos conteúdos, novas features e melhorias no que já existia. O trade-off era tempo, não dinheiro. A liderança apoiou o orçamento; o custo era tempo de entrega dos squads e de três designers já alocados neles.',
    },
    mandate: {
      title: 'Uma conversa por semana, com um custo que os squads conseguissem carregar.',
      asked: 'Falar com usuários pelo menos uma vez por semana.',
      pursued:
        'Uma cadência de continuous discovery barata o bastante para caber na rotina dos squads e que não dependesse do design para acontecer.',
      notDone: 'Manter um repositório caro e de difícil acesso como o Dovetail.',
    },
    approach: {
      title: 'Primeiro o processo, depois a automação.',
      diagnosis:
        'Conversei com o CEO, o time de design e os PMs, e revisei as ferramentas antigas. Uma entrevista exigia cerca de 15 etapas manuais, entre recrutamento, agendamento, gravação, incentivo e pós-entrevista.',
      steps: [
        {
          title: 'Arrumar a prática antes de automatizá-la',
          body: 'Nos primeiros dez meses foquei em recrutamento, roteiros, condução das entrevistas e na mentalidade de continuous discovery nos squads. Automatizar um processo que ninguém executava só automatizaria a confusão.',
        },
        {
          title: 'Usar o que já tínhamos, provar, depois escalar',
          body: 'Nenhuma plataforma pronta cobria todas as etapas que queríamos automatizar. Construí uma primeira automação com ferramentas que a empresa já usava (Calendly, Zoom, Notion, Drive, Claude, Slack) para testar se funcionava, e a tornei o pipeline oficial em agosto de 2025.',
        },
        {
          title: 'Manter um humano no loop',
          body: 'A IA gera o rascunho de cada snapshot, e uma pessoa o revisa antes de entrar na base de usuários.',
        },
        {
          title: 'Abrir as entrevistas para todos',
          body: 'Mais entrevistadores fizeram o design deixar de ser gargalo.',
        },
      ],
      notes: [
        {
          title: 'Resistência',
          body: 'A resistência real não foi ao pipeline, mas à disponibilidade: alguns PMs não queriam participar. O Head de Produto se alinhou com eles sobre por que a participação importava.',
        },
      ],
    },
    practices: {
      title: 'Um sistema que qualquer pessoa aprende pela documentação.',
      groups: [
        {
          title: 'Sistema operacional',
          items: [
            {
              title: 'Pipeline automatizado',
              body: 'Recrutamento via Sprig, agendamento, gravação, transcrição, arquivamento, incentivos e resumos semanais rodam sozinhos. Por entrevista, as únicas etapas manuais são gerar e revisar o snapshot.',
            },
            {
              title: 'Handbooks',
              body: 'Planejamento de pesquisa, entrevistas, surveys (Sprig) e testes de usabilidade (Lyssna), com matriz de método por tipo de pergunta e guia de tamanho de amostra.',
            },
            {
              title: 'Workflows com IA',
              body: 'Claude Projects para snapshots, análise de múltiplas entrevistas e análise de surveys, além de um template de apresentação.',
            },
            {
              title: 'Rituais',
              body: 'Squads rodavam continuous discovery sobre suas Opportunity Solution Trees; resumos semanais no Slack; novos entrevistadores entravam pela documentação e por shadowing.',
            },
          ],
        },
      ],
      images: [
        {
          src: img('research-ops', 'pipeline'),
          caption: 'Pipeline automatizado de entrevistas: ~15 etapas manuais reduzidas a 2, ambas de revisão humana do snapshot gerado por IA',
        },
        {
          src: img('research-ops', 'method-matrix'),
          caption: 'Qual método para qual pergunta: entrevistas, surveys e testes de usabilidade',
        },
        {
          src: img('research-ops', 'repository'),
          caption: 'Seis ferramentas dispersas consolidadas em fontes ativas abertas a toda a empresa',
        },
      ],
    },
    outcomes: {
      title: 'A pesquisa virou rotina da empresa, conduzida por mais do que o design.',
      changes: [
        {
          area: 'Cadência',
          before: '~0,5 entrevista/semana',
          after: '~4,4/semana nos primeiros dez meses (59 nas primeiras dez semanas)',
        },
        { area: 'Custo', before: '~15 etapas manuais por entrevista', after: '2' },
        {
          area: 'Documentação',
          before: '4% das entrevistas com snapshot',
          after: '98% depois do pipeline',
        },
        { area: 'No-show', before: '~30%', after: '~20%' },
        {
          area: 'Repositório',
          before: 'Seis ferramentas dispersas',
          after: 'Um repositório aberto a toda a empresa',
        },
      ],
      people: [
        'De só o design para seis funções entrevistando (PMs, Head de Produto, CEO, engenharia, design, conteúdo) em três squads.',
      ],
      perception: [
        'As entrevistas validaram o Author Insights (conteúdo novo) e as features Story Recap e Book Activities, todos lançados.',
      ],
      quote: {
        text: 'Diego is the engine behind our qualitative research practice... it’s the connective tissue behind much of our user understanding.',
        author: 'Par de produto',
      },
      limitation:
        'Depois do pipeline, o volume caiu para ~1,3 entrevista/semana, com pelo menos uma entrevista em 41% das semanas. Nossa leitura é que os escopos de pesquisa ficaram mais direcionados.',
      image: {
        src: img('research-ops', 'cadence'),
        caption: 'Entrevistas por trimestre, do 4º tri de 2024 ao 4º tri de 2026',
      },
    },
    learnings: {
      title: 'Automação reduz o custo da pesquisa. Não cria o hábito.',
      items: [
        {
          title: 'Daria cadência à OST inteira, não só às entrevistas.',
          body: 'Entrevistar toda semana nos manteve perto dos usuários, mas a síntese e a atualização da árvore seguiram dependendo dos designers, sem ritmo próprio. O gargalo mudou de lugar em vez de sumir, e a cadência semanal caiu depois que o pipeline ficou pronto.',
        },
        {
          title: 'Provar antes de escalar.',
          body: 'Testar a automação como protótipo antes de oficializá-la foi o que transformou algo construído por uma pessoa em processo da empresa.',
        },
        {
          title: 'Começar, mesmo sem a pergunta perfeita.',
          body: 'Uma entrevista genérica tira a empresa da inércia, e isso vale mais do que esperar o objetivo de pesquisa ideal.',
        },
      ],
    },
  },
  'customer-brain': {
    title: 'User Discovery & Customer Brain',
    tagline:
      'Consolidei cinco anos de pesquisa dispersa numa base de conhecimento com IA que qualquer time consulta em minutos.',
    company: 'SuperSummary',
    meta: [
      { label: 'Papel', value: 'Lead Product Designer' },
      {
        label: 'Período',
        value: 'Fase principal de 3 meses em 2025; a base segue em expansão',
      },
      { label: 'Empresa', value: 'SuperSummary: edtech americana, assinatura B2C' },
      {
        label: 'Time',
        value:
          'Eu na pesquisa, no método e na construção; liderança de produto apoiando a avaliação e a adoção',
      },
      {
        label: 'Escopo',
        value: 'Product Discovery · Síntese de Pesquisa · Sistemas de Conhecimento com IA',
      },
    ],
    stats: [
      { value: '177', label: 'Transcrições de entrevistas (2021–2026) numa base só' },
      { value: '30', label: 'Surveys auditadas com regras de leitura' },
      { value: 'Dias → minutos', label: 'Tempo de síntese de pesquisa' },
    ],
    overview: {
      title: 'Cinco anos de conhecimento sobre usuários, espalhados.',
      paragraphs: [
        'A empresa viu que precisava colocar o usuário no centro das decisões e, por isso, buscou uma forma de concentrar o conhecimento que já tinha. O que sabíamos sobre os book readers estava espalhado em cinco anos de entrevistas, 30 surveys e na memória das pessoas.',
        'Conduzi o discovery e construí sozinho o Customer Brain: uma base de conhecimento com IA usada hoje por cerca de 10 pessoas, do CEO e do Head de Produto a PMs, designers e engenheiros.',
      ],
    },
    challenge: {
      title: 'Anos de pesquisa com usuários, nenhum jeito de chegar até ela.',
      paragraphs: [
        'A empresa tinha anos de entrevistas e surveys sobre seus usuários, mas nenhuma forma de acesso concentrado e democrático. As decisões eram tomadas sem evidência, e a pesquisa muitas vezes era refeita mesmo quando a resposta já existia dentro da empresa.',
        'Começar uma rodada de pesquisa do zero levaria meses. O gap real era de acesso: transformar os dados que já tínhamos em conhecimento que qualquer pessoa pudesse consultar, com respostas sólidas o bastante para embasar uma decisão.',
      ],
      tradeoff:
        'Construir vs. comprar: repositórios de pesquisa do mercado traziam custo, limite de seats, limite de consumo de dados e uma interface feita para pesquisadores. O time precisava de linguagem natural.',
    },
    mandate: {
      title: 'Uma fonte, evidência rastreável, resultado acionável.',
      asked:
        'Consolidar toda a pesquisa qualitativa e as surveys existentes sobre book readers numa fonte única.',
      pursued:
        'Garantir que toda resposta tenha evidência rastreável e transformar achados em oportunidades de negócio e próximos passos.',
      notDone:
        'Incluir analytics e tickets de suporte. Ficaram fora de propósito, pela complexidade e pelo volume.',
    },
    approach: {
      title: 'Infraestrutura primeiro, conclusões depois.',
      diagnosis:
        'Os inputs foram 177 transcrições únicas de entrevistas (2021–2026) e 30 relatórios de survey. Em vez de rodar uma nova pesquisa, construí primeiro a infraestrutura, para que personas, comparações de mercado e recomendações saíssem da mesma base.',
      steps: [
        {
          title: 'Auditar e consolidar',
          body: 'Reuni entrevistas e surveys num dataset estruturado e escrevi regras de leitura para exports de survey cujos totais e percentuais enganavam.',
        },
        {
          title: 'Construir o método',
          body: 'Defini o papel do Brain, regras rígidas, padrões de qualidade e um filtro de verificação de citações.',
        },
        {
          title: 'Testar e iterar',
          body: 'Fiz consultas e conferi cada fonte citada contra o dado bruto. O feedback do time de que as respostas eram longas demais gerou três formatos de resposta.',
        },
        {
          title: 'Extrair achados',
          body: 'Personas, gaps de mercado e um relatório final. Acompanhei o progresso em checkpoints com a liderança de produto sobre o funcionamento e a adoção do Brain.',
        },
      ],
      notes: [
        {
          title: 'Profundidade sob demanda',
          body: 'Um único formato de resposta não atendia uma dúvida rápida e uma decisão executiva.',
        },
        {
          title: 'Rigor acima da velocidade',
          body: 'Uma resposta de IA sem evidência seria lida como verdade.',
        },
      ],
    },
    practices: {
      title: 'O rigor é o produto.',
      intro:
        'A decisão principal: quando falta evidência, o Brain diz isso em vez de improvisar. As respostas embasam decisões, então precisam resistir a questionamento.',
      groups: [
        {
          title: 'Entregas',
          items: [
            {
              title: 'Customer Brain',
              body: 'Base consultável com três formatos de resposta: Simple, Intermediate e Detailed.',
            },
            {
              title: 'Camada de método',
              body: 'Regras rígidas, padrões de qualidade e verificação de citações contra as transcrições brutas.',
            },
            {
              title: 'Auditoria das surveys',
              body: 'Regras de leitura e um registro do que os dados não respondem.',
            },
            {
              title: 'Personas e gaps de mercado',
              body: 'Quatro personas e um público pouco atendido, leitores mais jovens (18–34).',
            },
            {
              title: 'Relatório e NPS',
              body: 'Áreas conhecidas e desconhecidas, oportunidades, próximos passos e uma nova pesquisa de NPS.',
            },
          ],
        },
      ],
      images: [
        {
          src: img('customer-brain', 'personas'),
          caption:
            'Quatro personas extraídas do Brain, cada uma com dados demográficos, comportamento e necessidades',
        },
        {
          src: img('customer-brain', 'query'),
          caption: 'Uma consulta real ao Customer Brain',
        },
      ],
    },
    outcomes: {
      title: 'Uma semana de síntese, agora dois minutos.',
      changes: [
        { area: 'Tempo de síntese', before: '5–7 dias', after: '~2 minutos por consulta' },
        { area: 'Adoção', after: '~10 pessoas em 5 funções' },
        { area: 'Base viva', after: '+26 transcrições adicionadas em ago/2026, depois do lançamento' },
        { area: 'Discovery', after: 'Ciclos de entrevistas retomados em 2026' },
      ],
      people: [
        'Cerca de 10 pessoas consultam o Brain, do CEO e do Head de Produto a PMs, designers e engenheiros.',
      ],
      perception: [
        'O Customer Brain virou a referência da empresa sobre como os book readers percebem e usam o produto.',
        'A pesquisa deixou de ser um projeto agendado e virou um input sob demanda para decisões.',
        'A liderança trata o Brain como padrão para ativos de pesquisa duráveis.',
      ],
      quote: {
        text: 'Diego has been a true champion of the [book reader] audience... his mechanism for collating and presenting these insights, pulled from UX research, was to leverage AI in experimental, creative, and effective new ways.',
        author: 'Liderança de produto',
      },
      image: {
        src: img('customer-brain', 'outcome'),
        caption: 'Resultado do Customer Brain',
      },
    },
    learnings: {
      title: 'Medir desde o primeiro dia, ajustar a profundidade à pergunta.',
      items: [
        {
          title: 'Medir uso e qualidade desde o início.',
          body: 'Eu criaria um ciclo de feedback com quem usa o Brain para acompanhar o uso e a qualidade das respostas. Hoje o impacto aparece nas decisões, mas não é contado.',
        },
        {
          title: 'Ajustar a profundidade, não o padrão de evidência.',
          body: 'Nem toda consulta precisa de uma resposta profunda, ou espera uma. Uma resposta curta continua citando a fonte; só cobre menos.',
        },
        {
          title: 'Conhecimento aberto, respostas verificadas.',
          body: 'O que levo adiante: uma fonte de informação aberta a todos, com respostas verificadas no nível que quem pergunta precisa. Quando as respostas embasam decisões, é essa verificação que as torna utilizáveis.',
        },
      ],
    },
  },
};
