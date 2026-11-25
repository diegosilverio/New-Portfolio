import type { ManagementContent } from './management.en';

export const managementPt: ManagementContent = {
  labels: {
    eyebrow: 'Liderança em Design',
    title: 'Gestão de Times de Design',
    intro:
      'Uma página dedicada à minha experiência liderando e desenvolvendo times de design — os cargos, os princípios que me guiam, como encaro a liderança em design e os feedbacks que recebi pelo caminho.',
    yearsDesign: 'Anos de experiência em design',
    yearsManager: 'Anos como gestor de pessoas',
    career: 'Carreira',
    careerIntro:
      'Um panorama da minha trajetória em gestão, passando por edtech, e-commerce, siderurgia e banco.',
    roles: 'Cargos em Detalhe',
    rolesIntro:
      'Um olhar mais próximo sobre cada cargo — os times que liderei, o que estava sob nossa responsabilidade e a escala em que operávamos.',
    principles: 'Princípios',
    principlesTitle: 'O que me guia',
    designLeadership: 'Liderança em Design',
    peopleLeadership: 'Liderança de Pessoas',
    feedback: 'Feedback',
    feedbackTitle: 'Nas palavras de quem trabalhou comigo',
    work: 'Meu Trabalho',
    workIntro:
      'Ao longo desses cargos, a amplitude do trabalho abrangeu várias dimensões.',
    thanks: 'Obrigado!',
    talk: 'Vamos conversar',
    back: 'Voltar para Sobre',
  },
  career: [
    {
      role: 'Lead Product Designer',
      company: 'SuperSummary',
      period: 'Mai/24 – Hoje',
      description:
        'Startup de edtech focada no mercado educacional americano. Lidero um time de 3 designers nos squads de produto, marketing e inovação.',
    },
    {
      role: 'Product Design Manager',
      company: 'Tiendanube',
      period: 'Nov/20 – Mai/24',
      description:
        'Plataforma SaaS para e-commerce. Gestor do time de design de Core e Ecossistema.',
    },
    {
      role: 'Product Design Manager',
      company: 'Gerdau',
      period: 'Nov/19 – Nov/20',
      description:
        'Indústria siderúrgica. Gestor de um time interno e de designers terceirizados.',
    },
    {
      role: 'UX Design Manager',
      company: 'Itaú Unibanco',
      period: 'Mar/18 – Nov/19',
      description:
        'Setor bancário. Gestor do time de design de Soluções de Cartão de Crédito.',
    },
  ],
  roles: [
    {
      title: 'Lead Product Designer @ SuperSummary',
      period: 'Mai/24 até Hoje',
      paragraphs: [
        'Atuo como Lead Product Designer na SuperSummary, uma startup de edtech focada no mercado educacional americano. Lidero um time de 3 designers nos squads de produto, marketing e inovação.',
        'Também sou responsável pela operação de pesquisa, gerenciando todos os processos, do recrutamento e planejamento à orientação para a execução nos squads. Reporto diretamente ao CEO e lidero as definições estratégicas de design da empresa.',
      ],
      caseIds: ['design-ops', 'research-ops', 'customer-brain'],
      stats: [
        { value: '+150 mil', label: 'Marcas aplicadas aos produtos' },
        { value: '4', label: 'Squads focados em produtos digitais B2C' },
      ],
    },
    {
      title: 'Product Design Manager @ Tiendanube',
      period: 'Nov/20 até Mai/24',
      paragraphs: [
        'Liderei um time de 6 designers alocados remotamente em times ágeis. Esses times eram donos de produtos digitais nos domínios de plataforma core e ecossistema, com foco na experiência dos nossos parceiros e lojistas em diferentes países.',
        'Também fui responsável pelo time de design system, dando direção estratégica e criativa ao Nimbus Design System da Tiendanube. Trabalhei em parceria com executivos e outras lideranças multifuncionais para ampliar a adoção do Nimbus em toda a nossa família de produtos e entre nossos parceiros.',
      ],
      stats: [
        { value: '115 mil', label: 'Clientes B2B' },
        { value: '5', label: 'Países com operação' },
        { value: '2', label: 'Tribos — plataforma core e ecossistema' },
        { value: '10', label: 'Squads nas tribos' },
      ],
    },
    {
      title: 'Product Design Manager @ Gerdau',
      period: 'Nov/19 até Nov/20',
      paragraphs: [
        'Liderei o chapter de design e um time de 4 designers alocados em times ágeis focados em produtos digitais para clientes (B2B e B2C) e em produtos digitais internos. Esses produtos eram construídos na plataforma SAP e em algumas tecnologias customizadas.',
        'Além do chapter de design, apoiei um time de gestão de mudança que conduzia a transformação digital usando metodologias e mindset de design. Por se tratar de uma siderúrgica, esse time de transformação tinha como foco levar oportunidades de digitalização aos processos de manufatura.',
      ],
      stats: [
        { value: '2', label: 'Marcas aplicadas aos produtos' },
        { value: '6', label: 'Squads focados em produtos B2B e B2C' },
      ],
    },
    {
      title: 'UX Design Manager @ Itaú Unibanco',
      period: 'Mar/18 até Nov/19',
      paragraphs: [
        'Tive a oportunidade de liderar um time recém-formado de 9 UX designers. Éramos responsáveis por toda a experiência das soluções digitais para clientes exclusivamente de cartão de crédito — site desktop, site mobile e apps Android/iOS —, além de uma plataforma de BaaS, programas de fidelidade e carteiras digitais (Apple Pay, Samsung Pay, Google Pay e PayPal).',
        'Minha responsabilidade era liderar e desenvolver esses designers dentro dos seus times ágeis, trabalhar com lideranças de negócio e tecnologia em direção a uma estratégia integrada de produto digital e garantir que o design system fosse aplicado de forma consistente junto a times de outros segmentos do banco.',
      ],
      stats: [
        { value: '~10 mi', label: 'Clientes B2C' },
        { value: '4', label: 'Tribos de soluções de cartão de crédito' },
        { value: '18', label: 'Squads nas tribos' },
      ],
    },
  ],
  principles: [
    {
      title: 'Inspiração',
      body: 'A inspiração é fundamental para fortalecer e evoluir continuamente os times de design. Ela pode vir de exemplos práticos, mão na massa, de fontes externas ou de uma north star. Considero a north star especialmente poderosa — usar uma narrativa visual ou um conceito para expressar aonde queremos chegar e por quê. Bem feita, ela dá ao time uma visão clara, apoia a criatividade, engaja as pessoas, cria alinhamento multifuncional e fomenta uma cultura de aprendizado contínuo. Essa inspiração também pode alcançar os stakeholders, construindo engajamento cruzado e um compromisso compartilhado com a excelência na experiência do usuário.',
    },
    {
      title: 'Direcionamento',
      body: 'Com uma inspiração consistente e contínua estabelecida, o próximo passo essencial é transformar essa visão em um direcionamento claro, alcançável e executável. O líder de design pode apoiar essa direção com ferramentas — design systems e guias de conteúdo, por exemplo — que a tornem tangível e efetiva na rotina e nas entregas do time. Além das ferramentas, o líder precisa continuar apoiando e orientando o time para que ele nunca perca a conexão entre a inspiração e a experiência real do usuário, garantindo consistência, alinhamento e entrega de valor.',
    },
    {
      title: 'Impacto',
      body: 'Junto com a inspiração e o direcionamento, o time precisa ter clareza e domínio sobre o impacto do seu trabalho — nos usuários, no negócio e na operação da empresa. Antes de cada iniciativa, o designer deve definir, em conjunto com produto e engenharia, os impactos qualitativos e quantitativos esperados e, depois da entrega, validar se esses impactos foram alcançados. Sem impacto, é difícil defender e justificar o esforço investido em discovery e execução. É assim que tornamos o design mais forte e mais relevante para a empresa e para seus usuários.',
    },
  ],
  designLeadership: [
    {
      title: 'Visão',
      body: 'Nos muitos contextos em que trabalhei, criei e mantive uma visão de design de curto e longo prazo, guiando os times em direção à experiência que queríamos entregar em nossos produtos e serviços.',
    },
    {
      title: 'Consistência',
      body: 'Como gestor, sempre trabalhei para garantir uma experiência consistente entre diferentes produtos e serviços. Essa consistência foi possível graças a diretrizes e exemplos concretos de aonde queríamos chegar.',
    },
    {
      title: 'Métodos',
      body: 'Sempre me dediquei a manter e melhorar a qualidade dos processos e métodos do time, assim como o alinhamento e a troca de experiências entre os designers.',
    },
    {
      title: 'Excelência',
      body: 'Sempre procurei estar próximo do time e garantir os mais altos níveis de excelência — de um olhar atento às entregas estratégicas a uma abordagem mais holística, por meio de boas práticas e orientação aos designers.',
    },
  ],
  peopleLeadership: [
    {
      title: 'Formação de times',
      body: 'Como gestor de pessoas, formei do zero times de design de diferentes tamanhos, contratando novos designers. Depois de formá-los, mantive esses times em alta performance e totalmente integrados ao negócio.',
    },
    {
      title: 'Desenvolvimento de carreira',
      body: 'Trabalhei com os designers individualmente para desenvolver suas carreiras — mapeando suas habilidades e criando planos de desenvolvimento de curto e longo prazo. Também promovi o desenvolvimento coletivo, incentivando a troca de conhecimento e experiência entre os designers.',
    },
    {
      title: 'Cultura de time',
      body: 'Ao montar os times, trabalhei para criar uma cultura de time, definindo de forma colaborativa valores aspiracionais e traduzindo-os em prática. Apoiei os times com atividades de team building e conduzi avaliações periódicas para acompanhar a evolução.',
    },
    {
      title: 'Rotinas',
      body: 'Para manter os designers integrados e alinhados com as outras áreas e com o negócio, criei rotinas individuais para discutir entregas, performance e carreira, além de rotinas coletivas para trocar conhecimento e alinhar o time às decisões das tribos e da empresa.',
    },
  ],
  feedback: [
    {
      quote:
        'O jeito do Diego de gerir o time é muito bom — sempre por perto, mas dando liberdade e independência ao time. Ele não faz microgerenciamento. Isso ajuda muito na confiança e no desenvolvimento do time.',
      author: 'Product Designer',
    },
    {
      quote:
        'Vejo que o Diego sempre procura direcionar o rumo das ações para o que gera mais resultado dentro e fora do nosso time, e isso me ensinou muito sobre como escolher frentes de trabalho e priorizar minhas tarefas.',
      author: 'Senior Product Designer',
    },
    {
      quote:
        'Desde o início, percebi seu comprometimento e dedicação em nos guiar na direção certa. É realmente inspirador ver como você está sempre em dia com todas as tarefas em andamento e assume a liderança do projeto com tanta confiança. Sua liderança nos dá a segurança de que estamos no caminho certo e de que podemos contar com você para superar os desafios. Você é um líder que inspira, empodera e nos faz sentir parte fundamental do sucesso do nosso design system.',
      author: 'Front-end Developer Specialist',
    },
    {
      quote:
        'Uma das melhores conversas que já tive sobre a minha carreira foi com o Diego. Ela me ajudou a abrir a mente para oportunidades e pontos de desenvolvimento que posso usar para evoluir como profissional e direcionar minha carreira.',
      author: 'Senior Product Designer',
    },
    {
      quote:
        'O Diego valoriza e leva em conta nossas opiniões ao fazer ajustes no planejamento e na tomada de decisão. Isso não só estimula um ambiente de inclusão e respeito, como também nos permite trabalhar em projetos relevantes e de impacto.',
      author: 'Product Designer',
    },
    {
      quote:
        'Ele sempre mantém a calma, por mais difícil que seja a conversa. Consegue ter conversas individuais com o time, com C-levels e com design leads de forma assertiva e direta, adaptando a mensagem para os times de engenharia, produto e design e para diferentes stakeholders.',
      author: 'Head of Design',
    },
    {
      quote:
        'Um destaque é a prática de se aprofundar nos problemas por meio de conversas, levando a soluções que eu não tinha percebido. Essa competência é uma grande vantagem para o meu crescimento pessoal e para o nosso crescimento como time.',
      author: 'Senior Product Designer',
    },
  ],
  work: [
    {
      label: 'Tipos de projeto',
      value:
        'Growth · Migrações · Novas funcionalidades · Novos produtos · Transformação digital · Digital + serviço · e mais.',
    },
    {
      label: 'Plataformas',
      value:
        'SaaS · Desktop · App mobile (iOS, Android, PWA) · Aplicação web · Soluções open source · Aplicação baseada em SAP · Aplicação interna customizada · e mais.',
    },
    {
      label: 'Tipos de produto',
      value:
        'B2B · B2C · B2B2C · Experiência de desenvolvedores · Experiência do colaborador · Processos industriais / chão de fábrica · e mais.',
    },
  ],
};
