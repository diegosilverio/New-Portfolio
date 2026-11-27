import type { ProjectTranslation } from './projects';

export const projectsPt: Record<string, ProjectTranslation> = {
  'legacy-subscriber-migration': {
    title: 'Migração de Assinantes Legacy',
    description:
      'Levando uma base legacy fiel para o novo plano Plus com um upgrade opcional e preço de fidelidade',
    role: 'Lead Product Designer (designer único da migração; também liderando Design e o design system)',
    company: 'SuperSummary',
    scope: 'Growth Design, Pricing & Packaging, Experimentação',
    tagline:
      'Um upgrade opcional, com preço de fidelidade, gerou mais de 8x a receita de upsell do controle, com cancelamentos estáveis.',
    overview:
      'A SuperSummary é uma plataforma de edtech americana de guias de estudo de literatura e ferramentas de leitura. Depois do lançamento da nova estrutura de planos Plus/Essentials, um grande grupo de assinantes legacy, em sua maioria estudantes e membros de book clubs, continuou com acesso completo ao Plus pagando preço de Essentials. Quase todos (97,7%) eram assinantes anuais de longa data. Fui o único designer da migração, dentro da squad de Growth Experimentation, enquanto também liderava o time de design e o design system. Participei das duas iniciativas anteriores: Pricing & Packaging (Q3 2025) e o Upgrade Flow (Q4 2025).',
    highlights: [
      'Squad de Growth Experimentation',
      '97,7% dos legacy em planos anuais de longa data',
      'Time: 1 PM, 2 engenheiros, 1 analista de dados; liderança como stakeholder principal',
      'Discovery no Q1 → teste A/B no Q2 → rollout para 100% em julho de 2026',
    ],
    stats: [
      { value: '5,4%', label: 'Taxa de upgrade (vs. 0,09%)' },
      { value: '8x+', label: 'Receita de upsell vs. controle' },
      { value: 'Estáveis', label: 'Cancelamentos' },
    ],
    challengeTitle: 'Cobrar mais de uma base fiel sem uma onda de cancelamentos.',
    challengeBody:
      'Os assinantes legacy recebiam Plus pelo preço do Essentials. Isso enfraquecia a nova estrutura de planos e deixava receita de upsell na mesa. Mas essa base tinha nos escolhido cedo, e qualquer mudança trazia dois riscos: um pico de cancelamentos e um dano à percepção da marca. A liderança não tinha definido um caminho. Eu e o PM usamos análises de negócio e benchmarks para reduzir as opções e recomendar uma direção.',
    decision: {
      body: 'Trade-offs em jogo:',
      points: [
        'Usos grátis antes do bloqueio: zero, um ou três',
        'Bloquear todas as ferramentas de IA, ou só algumas',
        'Desconto: 20% vitalício, ou só no primeiro ano',
        'Migração forçada com prazo, ou upgrade opcional',
      ],
    },
    goals: [
      'Aumentar a receita de upsell dos assinantes legacy que migram para o Plus.',
      'Manter os cancelamentos no mesmo patamar, apesar do novo bloqueio.',
      'Proteger a percepção da marca: sem pico de reclamações, sem desengajamento silencioso.',
      'Fora do escopo, de propósito: o app nativo (só web, para reduzir o esforço de engenharia) e tudo o que os usuários já tinham quando assinaram (PDFs, áudio, jogos).',
    ],
    processIntro:
      'Os inputs foram dados de comportamento do Amplitude e do Clarity, mais o aprendizado das duas iniciativas de pricing anteriores. Um benchmark de Todoist, Buffer e Grammarly definiu dois princípios: manter grátis as ferramentas existentes e cobrar só pelas novas ferramentas de IA, e tornar a migração opcional, a partir de um uso gratuito limitado. Decisão principal de escopo: um uso grátis por ferramenta de IA, para que todos pudessem testar cada uma antes do bloqueio.',
    processFlow:
      'Acompanhamento: 6 rodadas de validação com a squad e a liderança e, depois, um teste A/B com receita de upsell como métrica principal e guardrails de cancelamento.',
    process: [
      {
        title: 'Discovery',
        description:
          'Mapeei o comportamento dos legacy e validei com Engenharia quais intervenções de retenção o fluxo de cancelamento comportava.',
      },
      {
        title: 'Workshop de estratégia',
        description:
          'Co-conduzido com o PM, transformando as perguntas abertas da liderança em hipóteses testáveis.',
      },
      {
        title: 'Exploração e validação',
        description:
          'Gerei uma primeira rodada ampla de rascunhos com Claude e Figma e depois rodei um teste de usabilidade não moderado com 40 pessoas. Ele confirmou o entendimento do fluxo e trouxe ajustes pontuais.',
      },
      {
        title: 'Alinhamento e hand-off',
        description:
          'Liderei o design nas revisões cross-funcionais e fui responsável pelo hand-off para engenharia.',
      },
    ],
    execution: {
      title: 'Fazer o upgrade parecer um agradecimento, não um muro.',
      body:
        'A decisão central foi um upgrade opcional, aberto por um uso grátis por ferramenta de IA. A e B tinham o maior risco para cancelamentos e para a marca. A C deixava as pessoas sentirem o valor primeiro, e a mensagem apresentava o desconto como agradecimento pela fidelidade: uma nota de introdução no primeiro uso, banners de limite e de bloqueio explicando o que o Plus libera, um modal de upgrade com 20% off vitalício e uma oferta de retenção de última hora no fluxo de cancelamento.',
      bullets: [
        'Opção A — Migração forçada com prazo',
        'Opção B — Bloquear todas as ferramentas de IA de uma vez',
        'Opção C — Upgrade opcional com um uso grátis por ferramenta de IA (escolhida)',
      ],
    },
    outcomeTitle: '8x+ de receita de upsell, com cancelamentos estáveis.',
    outcomeBody:
      'No teste A/B (junho–julho de 2026), o tratamento superou o controle em receita sem mexer nos cancelamentos. A liderança aprovou o rollout para 100% dos assinantes legacy em julho de 2026, sem objeções. Só uma mensagem de suporte mencionou a mudança, e o uso das funcionalidades que continuaram grátis subiu cerca de 11%.',
    outcomeBullets: [
      'Taxa de upgrade: 5,4% dos usuários expostos, vs. 0,09% no controle (60x)',
      'Receita de upsell: 8x+ o controle durante a janela do teste',
      'Cancelamentos agendados: estáveis (−2,1%, não significativo)',
      'Retenção no fluxo de cancelamento: 60,6% vs. 52,2% (+8,4 p.p.)',
    ],
    quote: {
      text: 'Diego\'s most valuable contribution is being the design anchor on our highest-stakes, highest-ambiguity projects — the ones that wouldn\'t ship at the same quality without him.',
      author: 'Colega da squad de Growth',
    },
    ownWork: {
      position: 'beforeExecution',
      label: 'O que desenhei',
      items: [
        { title: 'Nota de introdução', body: 'Exibida no primeiro uso.' },
        { title: 'Banners de limite e de bloqueio', body: 'Explicando o que o Plus libera.' },
        { title: 'Modal de upgrade', body: '20% off vitalício.' },
        { title: 'Oferta de retenção', body: 'Uma oferta de última hora no fluxo de cancelamento.' },
      ],
      image: {
        src: '/images/legacy-subscriber-migration/legacy-image-1.png',
        caption: 'Fluxo de upgrade: banner de limite, modal de upgrade, confirmação e boas-vindas.',
      },
    },
    background: {
      title: 'Contexto: Pricing & Packaging',
      body: 'Antes da migração, trabalhei na estrutura de planos e no funil de upgrade: Pricing & Packaging (Q3 2025), o Upgrade Flow e os Upsell Modals (do Q4 2025 ao Q1 2026). Nesses testes, cerca de metade dos novos assinantes escolheu o Plus, a receita líquida por usuário exposto subiu cerca de 15% na primeira entrega e a receita de upsell subiu cerca de 30%.',
      linkSlug: 'plus-plan',
      linkLabel: 'Ver o case do Plano Plus',
    },
    learnings: [
      {
        title: 'Convergir mais cedo.',
        body:
          'O projeto passou por 6 rodadas de validação, contra uma média de 2,4 em outras iniciativas de design, e parte dessas rodadas de alinhamento não era necessária. Da próxima vez, defino no kickoff os critérios de decisão e o momento de input de cada stakeholder.',
      },
      {
        title: 'Proteger a promessa original.',
        body:
          'Manter grátis o que os usuários tinham quando assinaram foi o que nos permitiu cobrar mais sem perder a base. Levo isso para qualquer mudança de pricing.',
      },
      {
        title: 'Instrumentar antes de lançar.',
        body:
          'O guardrail de churn intent subiu 41% e gerou uma recomendação automática de rollback; a análise mostrou que era um artefato de medição. Um evento de bloqueio nunca disparou, então a conversão por ferramenta só pôde ser lida para algumas delas. Hoje defino guardrails e eventos junto com o design.',
      },
    ],
  },
  'visual-language': {
    title: 'Nova Linguagem Visual',
    description:
      'Uma nova linguagem visual que superou a meta de não perder receita em duas páginas',
    role: 'Lead Product Designer',
    company: 'SuperSummary',
    scope: 'Linguagem Visual, Experimentação, Liderança de Design',
    tagline:
      'Liderei a exploração da nova linguagem visual da SuperSummary e a desdobrei em dois redesigns de página testados em A/B, que superaram a meta de não perder receita.',
    overview:
      'A SuperSummary é uma plataforma por assinatura com ~10.000 guias de leitura escritos por especialistas, além de quizzes e recursos de IA como o Ask SuperSummary, um chatbot. Seus leitores são estudantes, professores, clubes do livro e leitores em geral. O projeto cobriu duas páginas públicas: a Homepage, porta de entrada institucional, e a Subscribe page, a landing page onde começa o funil de conversão. Liderei como Lead Product Designer, alinhando a direção com o CEO e o Head de Produto.',
    highlights: [
      'Duas páginas públicas: Homepage e Subscribe page',
      '~10.000 guias escritos por especialistas',
      'Começou comigo e duas designers, uma sênior e uma júnior',
      'Depois dividido entre dois squads: Product Innovation e Growth',
    ],
    stats: [
      { value: '~+11%', label: 'Receita líquida mobile (Homepage)' },
      { value: '~+11%', label: 'Receita bruta (Subscribe)' },
      { value: '~+20%', label: 'Checkouts do plano anual' },
    ],
    challengeTitle: 'Uma linguagem visual de 2015 sobre um produto de 2025.',
    challengeBody:
      'O produto tinha avançado: conteúdos novos, recursos de IA, quizzes e um chatbot de IA. A linguagem visual não. Ela era baseada no Material Design inicial (~2015), existia havia pelo menos cinco anos e não usava o nosso novo design system. Com a primeira versão do design system pronta, a empresa precisava ver como ficaria aplicado e para onde a marca ia visualmente. A restrição: essas páginas geravam receita. A liderança queria algo rápido para testar, a engenharia avaliava que aquele escopo não sairia tão rápido, e a expectativa sobre a receita líquida, a métrica principal, era alta.',
    decision: {
      body: 'Trade-offs:',
      points: [
        'Velocidade pedida pela liderança vs. esforço real de engenharia',
        'Expectativa alta de receita líquida vs. uma primeira entrega simplificada',
        'Uma linguagem nova e ambiciosa vs. trabalho quebrado em blocos que os squads conseguissem entregar',
      ],
    },
    goals: [
      'Definir uma nova linguagem visual sobre o design system.',
      'Prová-la em duas páginas: uma institucional e uma de conversão.',
      'Fazer a troca sem perder receita líquida.',
      'Fora de escopo, de propósito: o restante da plataforma, que seria convertido depois, com a migração do design system.',
    ],
    processIntro:
      'Os inputs foram referências de mercado, concorrentes e tendências visuais. Não fizemos pesquisa com usuários antes: a liderança queria avançar rápido, e os testes A/B viraram a nossa validação com usuários. A principal decisão de escopo foi testar a linguagem em duas páginas com funções diferentes, em vez de redesenhar a plataforma. Para caber na capacidade da engenharia, simplificamos a primeira entrega e a quebramos em blocos.',
    processFlow:
      'Acompanhamento: design reviews quinzenais no início; nos squads, 1:1 com as designers e experimentos acompanhados no Amplitude.',
    process: [
      {
        title: 'Explorar',
        description: 'Três direções visuais, com a designer sênior e a júnior.',
      },
      {
        title: 'Alinhar',
        description: 'O CEO, o Head de Produto e eu escolhemos uma direção.',
      },
      {
        title: 'Aplicar',
        description:
          'Homepage e Subscribe page, com um segundo alinhamento com a liderança.',
      },
      {
        title: 'Passar para os squads',
        description:
          'Product Innovation assumiu a Homepage e Growth, a Subscribe page. As designers dos squads executaram os redesigns das páginas com o meu apoio, mais próximo da designer júnior na Subscribe page. Os PMs assumiram a meta de receita e cada decisão de rollout.',
      },
    ],
    execution: {
      title: 'Desenhando com os gestos da leitura.',
      body:
        'A decisão principal foi ancorar a linguagem no que as pessoas fazem quando leem, como marcar com marca-texto e fazer anotações. Ela parte de uma prática familiar e tornou a nova linguagem tangível para a liderança.',
      bullets: [
        'Linguagem visual — três direções exploradas, uma escolhida',
        'Homepage — a busca saiu do header, com um ícone de busca no mobile, uma seção Featured Guides e Trending Titles como filtro padrão. Lançada em iterações.',
        'Subscribe page — a primeira versão perdeu cliques porque o fluxo escondia o livro do leitor e o card do hero no desktop não era clicável. A versão seguinte corrigiu os dois pontos.',
      ],
    },
    outcomeTitle:
      'Uma nova linguagem visual nas duas páginas, superando a meta de não perder receita.',
    outcomeBody:
      'Cada métrica foi medida contra o controle do A/B. Na Homepage, o desktop não teve impacto detectável; o ganho veio do mobile. Além dos números, a linguagem virou o padrão para a migração do restante da plataforma, a liderança adotou a direção e as designers ganharam autonomia com uma Visual Language Library no Figma.',
    outcomeBullets: [
      '~+11% de receita líquida no mobile, Homepage (abr–mai/2026)',
      '~+11% de receita bruta, Subscribe page (mai–jun/2026)',
      '~+20% de checkouts do plano anual, Subscribe page',
      'Virou o padrão para migrar o restante da plataforma',
    ],
    ownWork: {
      position: 'afterOverview',
      label: 'O que desenhei',
      body: 'Desenhei as explorações de conceito e defini a linguagem. As designers dos squads executaram os redesigns das páginas, com o meu apoio.',
      image: {
        src: '/images/visual-language/visual-language-image-1.png',
        caption: 'Explorações de conceito: as três direções visuais que desenhei.',
      },
    },
    learnings: [
      {
        title: 'Pesquisa de percepção antes dos testes.',
        body:
          'Focamos em preparar os experimentos, e o A/B mostrou o que funcionava, não o porquê. Ficaram lacunas sobre como os usuários percebiam a linguagem.',
      },
      {
        title: 'Uma linguagem visual precisa ser defendida nos trade-offs de engenharia.',
        body:
          'As discussões de viabilidade iam desgastando a linguagem, e como ela era o principal ativo do projeto, o design precisou sustentá-la até o lançamento. Usuários de mobile e desktop também reagiram de forma diferente; hoje planejo e leio experimentos por dispositivo desde o início.',
      },
      {
        title: 'Ancorar uma linguagem visual num comportamento real do usuário.',
        body:
          'O gesto de ler a tornou tangível para a liderança e conectou a marca ao leitor.',
      },
    ],
  },
  'plus-plan': {
    title: 'Plano Plus',
    description:
      'Preços, planos e upgrade: lançando um plano com IA em ciclos de A/B test',
    role: 'Lead Product Designer (designer hands-on do squad de Growth)',
    company: 'SuperSummary',
    scope: 'Growth Design, Pricing & Packaging, Experimentação',
    tagline:
      'Co-defini a estrutura Essentials vs Plus e mantive o valor de cada plano visível no checkout e no upgrade; cerca de metade dos novos assinantes escolheu o Plus.',
    overview:
      'A SuperSummary oferece guias de estudo completos para estudantes e membros de clubes do livro. Entre julho de 2025 e março de 2026, depois da saída do designer sênior do squad de Growth, assumi como designer hands-on do squad sem deixar de liderar Design na empresa. O squad roda ciclos rápidos de A/B test no funil de conversão e monetização. Este case cobre três frentes conectadas: Pricing & Packaging (a nova estrutura Essentials vs Plus), o Upgrade Flow e os Upsell Modals.',
    highlights: [
      'Squad de Growth Experimentation',
      'Estudantes e membros de clubes do livro; a maioria dos assinantes do Plus é de clubes do livro',
      'Time: 1 PM, 2 engenheiros, 1 analista de dados',
      'Sozinho até novembro de 2025; depois, com uma designer júnior',
    ],
    stats: [
      { value: '~+15%', label: 'Receita líquida por usuário (P&P v1)' },
      { value: '~+8%', label: 'Receita (Select Your Plan)' },
      { value: '~+30%', label: 'Receita de upsell (Modals)' },
    ],
    challengeTitle:
      'Provar que o plano de IA justificava mudar toda a estrutura de preços.',
    challengeBody:
      'As novas ferramentas de IA abriam espaço para um plano superior. Mas cada chamada de IA tem um custo de uso, e não sabíamos se a adesão justificaria reestruturar planos e preços. Por isso começamos com um smoke test. Quando ele mostrou adesão relevante ao Plus, eu e o PM construímos a estrutura de dois planos na plataforma. O maior risco estava no checkout: uma escolha de plano a mais podia fazer o usuário novo hesitar e desistir, custando mais assinaturas do Essentials do que o Plus traria.',
    decision: {
      body: 'Trade-offs:',
      points: [
        'Lançar o Plus sem canibalizar o Essentials.',
        'Adicionar o passo Select Plan sem aumentar a desistência no checkout.',
        'Preservar a base atual: a mudança valeu só para novos usuários.',
      ],
    },
    goals: [
      'Validar a demanda pelo Plus antes de construir a nova estrutura de planos.',
      'Aumentar a receita líquida por usuário exposto no checkout e no upgrade.',
      'Fora do escopo, de propósito: migrar a base atual, mudar o preço do Essentials, redesenhar o paywall e levar o Plus para o app mobile na primeira leva.',
    ],
    processIntro:
      'O PM trouxe a análise de concorrentes e os estudos de preço. Eu transformei esses conceitos em experiência, mapeei quais touchpoints precisavam mudar e entreguei de ponta a ponta: o funil de conversão (landing page, criação de conta, checkout), a tela de conta e os gates das features. Decisão principal de escopo: o Plus ficou com tudo que tem custo por uso, como cada chamada de IA, e com o download de PDF, pelo peso na conversão. O Essentials manteve os guias de estudo completos.',
    processFlow:
      'Acompanhamento: dashboard no Amplitude e tickets de CX, com a desistência no checkout como guardrail.',
    process: [
      {
        title: 'Encontrar a alavanca',
        description:
          'Gravações do Clarity e funis do Amplitude para achar desistências por layout e dispositivo.',
      },
      {
        title: 'Enquadrar em conjunto',
        description:
          'Workshops com o squad para transformar ideias em conceitos.',
      },
      {
        title: 'Desenhar enxuto',
        description: 'Padrões do design system, com detalhe onde importava.',
      },
      {
        title: 'Lançar e ler',
        description: 'Toda entrega como A/B test.',
      },
    ],
    execution: {
      title: 'Deixar o valor de cada plano impossível de ignorar.',
      body:
        'A decisão que mais pesou: deixar o valor de cada plano explícito e above the fold. Comparando o mesmo design em diferentes alturas de tela no Clarity, ficou claro que, nas telas mais baixas, a diferença entre os planos e o CTA saíam de vista.',
      bullets: [
        'Smoke test — variantes do checkout comparando uma headline de proposta de valor com depoimentos',
        'Passo Select Plan — Essentials vs Plus para novos usuários',
        'Select Your Plan — layout e CTA ajustados para telas mais baixas',
        'Upgrade Flow — redesenho de ponta a ponta, mais a Mobile Sticky Toolbar',
        'Upsell Modals — experimentos com desconto desenhados pela designer júnior sob minha direção',
      ],
    },
    outcomeTitle:
      'O plano de IA conquistou metade dos novos assinantes e aumentou a receita.',
    outcomeBody:
      'Cada entrega saiu como A/B test, e os ganhos se somaram ao longo do funil: da própria estrutura de planos aos momentos de upgrade e upsell.',
    outcomeBullets: [
      '~50% dos novos assinantes escolhem o Plus (após o P&P v1, set/2025)',
      '~+15% de receita líquida por usuário exposto vs controle (P&P v1)',
      '~+8% de receita vs controle no Select Your Plan (Q4 2025)',
      '~+30% de receita de upsell e ~−12% de usuários iniciando o cancelamento (Q1 2026)',
    ],
    quote: {
      text: 'O Diego identificou oportunidades de melhorar o layout e a posição do CTA em telas mais baixas, o que gerou um dos A/B tests mais bem-sucedidos do trimestre.',
      author: 'Colega do squad de Growth',
    },
    learnings: [
      {
        title: 'Definir a proposta de valor junto com o escopo.',
        body:
          'Discutimos várias vezes o que o Plus oferecia. Hoje eu fecharia isso antes de desenhar e garantiria que esse valor ficasse visível em todos os cenários, até numa tela baixa. A maior alavanca foi uma correção pequena, não um redesign.',
      },
      {
        title: 'Rodar um pre-mortem em cada tratamento.',
        body:
          'Uma taxa baixa de vitórias me ensinou a revisar os riscos de cada proposta antes de ela virar teste.',
      },
      {
        title: 'Delegar sem isolar.',
        body:
          'Mesmo cuidando de iniciativas pontuais, a designer júnior precisava estar no fluxo de informação do projeto inteiro. É isso que levo para qualquer time que eu lidere.',
      },
    ],
  },
  'nuvem-envio': {
    title: 'Nuvem Envio',
    description:
      'Ativação automática do serviço de logística no onboarding do plano gratuito da Tiendanube',
    role: 'Design Manager',
    company: 'Tiendanube',
    scope: 'Estratégia de Produto, Onboarding, Design entre Times',
    tagline:
      'Transformando a logística de um produto opcional em parte do onboarding de todo lojista — em quatro semanas.',
    overview:
      'O Nuvem Envio é a ferramenta de logística dentro da plataforma Tiendanube — é o que os lojistas usam para coletar e enviar produtos aos seus clientes. Por viver dentro da plataforma, só lojistas existentes conseguem acessá-lo. Como design manager da unidade de negócio de Serviços Logísticos, defini as diretrizes da experiência enquanto orientava o product designer sênior da tribo, trabalhando lado a lado com produto e engenharia.',
    highlights: [
      'Serviços Logísticos — uma unidade de negócio da empresa',
      'Um produto embutido na plataforma principal',
      '~1,3 mil lojistas ativos por mês',
      'Time: 1 designer, 1 engenheiro front-end e 3 back-end',
    ],
    stats: [
      { value: '4 sem', label: 'Do Discovery à Produção' },
      { value: '+2 p.p.', label: 'Adoção no Onboarding' },
      { value: '−16%', label: 'Dias até o Primeiro Envio' },
    ],
    challengeTitle:
      'Incluir um produto pago no plano gratuito — sem reconstruir os dois.',
    challengeBody:
      'A empresa decidiu incluir no plano básico gratuito um pacote inicial de produtos e serviços para atrair mais lojistas e ampliar a base de entrada. Eles seriam ativados automaticamente — uma mudança em relação ao modelo antigo, em que o lojista ativava sob demanda. A pergunta: como poderíamos ativar automaticamente os serviços de logística durante a jornada de onboarding dos usuários do plano gratuito?',
    goals: [
      'Mapear a jornada de onboarding atual da plataforma.',
      'Criar o fluxo de ativação automática durante o onboarding.',
      'Informar os lojistas sobre os serviços de logística ao longo do caminho.',
    ],
    processIntro:
      'Começamos junto com produto e engenharia porque tínhamos dúvidas reais sobre a viabilidade técnica e de negócio de ativar automaticamente durante o onboarding. O problema estava bem definido e a jornada bem mapeada, então o trabalho seguiu de forma quase linear. Sentei cedo com o designer e com as lideranças de produto e engenharia para alinhar a abordagem e como dividir ou reduzir o escopo da forma mais limpa possível.',
    processFlow:
      'Problema → Discovery → Sessões criativas → Design → Protótipo → Teste → Entrega para desenvolvimento',
    process: [
      {
        title: 'Alinhamento Inicial',
        description:
          'Coloquei produto, design e engenharia na mesma página sobre a viabilidade técnica e de negócio antes de esboçar uma única tela.',
      },
      {
        title: 'Discovery e Mapeamento',
        description:
          'Mapeamos como o produto se encaixava no onboarding da plataforma para encontrar os pontos de integração pelos quais valia a pena brigar.',
      },
      {
        title: 'Decisão entre Três Caminhos',
        description:
          'Dimensionamos três opções — ideal, reduzida e mínima — e escolhemos o caminho mais simples que ainda entregava valor real.',
      },
      {
        title: 'Construção e Hand-off',
        description:
          'Desenhamos com o design system existente, prototipamos, testamos e entregamos para a engenharia em um único ciclo enxuto.',
      },
    ],
    execution: {
      title: 'Escolher o caminho que entrega valor mais rápido.',
      body:
        'Depois da discussão inicial, três rotas ficaram claras — da mais completa e complexa à mais simples. Colocá-las lado a lado permitiu que todos avaliassem a direção e levantassem riscos antes de se comprometer, e no fim escolhemos a rota mais simples: a que chegaria mais rápido aos usuários. A solução então conectou três camadas — a plataforma Tiendanube, o produto Nuvem Envio e a integração entre eles — com a experiência desenhada em cada uma.',
      bullets: [
        'Opção A — Experiência ideal, totalmente integrada à plataforma',
        'Opção B — Escopo reduzido, totalmente integrado à plataforma',
        'Opção C — Experiência mínima, parcialmente integrada (escolhida)',
      ],
    },
    outcomeTitle: 'No ar em quatro semanas, com mais adoção.',
    outcomeBody:
      'Do discovery à produção em quatro semanas — a colaboração próxima entre design, produto e engenharia foi o que levou a melhoria aos clientes tão rápido. A adoção no onboarding subiu ~2 p.p., de 3% para 5%. Ficamos abaixo da meta de 6%, mas melhoramos a conversão e aprendemos muito sobre como a jornada e o produto são percebidos. Como efeito colateral, a média de dias até o primeiro envio caiu de 21 para 17.',
    outcomeBullets: [
      'Quatro semanas do discovery ao deploy em produção',
      'Adoção no onboarding subiu +2 p.p. (3% → 5%)',
      'Dias até o primeiro envio reduzidos de 21 para 17 (−16%)',
      'Fluxo de ativação construído quase inteiramente com o design system existente',
    ],
    learnings: [
      {
        title: 'Fazer mais com os dados que as métricas geram.',
        body:
          'Temos clareza dos nossos objetivos e monitoramos as métricas que este projeto moveu, mas acredito que podemos avaliar o impacto do nosso trabalho com mais detalhe.',
      },
      {
        title: 'Ser explícito sobre as conexões entre plataforma e produto.',
        body:
          'O discovery levou mais tempo do que o esperado só para entender como nosso produto se encaixava no onboarding da plataforma principal. Construir essa visão logo no início teria economizado tempo.',
      },
      {
        title: 'Apoiar-se no design system para ganhar velocidade.',
        body:
          'Decidir cedo construir a jornada de ativação quase inteiramente com o nosso design system valeu a pena — otimizou tanto o trabalho de design quanto o de engenharia.',
      },
    ],
  },
  itaucard: {
    title: 'Itaucard',
    description:
      'Nova home e diretrizes de estrutura para o app de cartão de crédito do maior banco da América Latina',
    role: 'Design Manager',
    company: 'Itaú-Unibanco',
    scope: 'Design Mobile, Estratégia de Produto, Diretrizes',
    tagline:
      'Reestruturando a home de um app de cartão de crédito usado por 7 milhões de brasileiros — e as diretrizes para mantê-lo evoluindo.',
    overview:
      'O Itaucard é o app de cartão de crédito do Itaú-Unibanco, o maior banco da América Latina, com uma base de ~10 milhões de cartões e cerca de 7 milhões de usuários ativos em iOS e Android. A unidade operava com quatro tribos ao longo de toda a jornada do cartão. Como Design Manager na tribo de Retenção — a principal responsável pelos apps e pelo fluxo da home — liderei um esforço focado, com um Group Product Manager e um especialista em product design, para reestruturar a home e entregar aos sete squads as diretrizes de que precisariam para continuar evoluindo-a depois da nossa saída.',
    highlights: [
      'Unidade de cartões de crédito do Itaú, o maior banco da América Latina',
      'Apps nativos para Android e iOS',
      '~7 milhões de usuários ativos nos dois',
      '7 squads responsáveis pelos apps',
      'Time de design com 9 pessoas — 4 delas nesta tribo',
    ],
    stats: [
      { value: '7 mi', label: 'Usuários Ativos no App' },
      { value: '3×', label: 'Acesso ao Cartão Virtual' },
      { value: '82%', label: 'Feedback Positivo' },
    ],
    challengeTitle:
      'Funcionalidades importantes estavam escondidas à vista de todos.',
    challengeBody:
      'O engajamento era baixo e os clientes não encontravam as funcionalidades com facilidade na home — o que gerava chamados no atendimento e enterrava ferramentas importantes para o negócio. A home exibia e escondia uma longa lista: dados do cartão, limites, faturas, lançamentos, parcelamentos, empréstimos, pontos, cartão virtual, bloqueio temporário, benefícios e mais. O cartão virtual era o caso mais claro — uma ferramenta de segurança que as pessoas pediam ativamente, com apenas 6,1% de taxa de acesso. Como poderíamos tornar essas funcionalidades importantes mais fáceis de encontrar?',
    decision: {
      points: [
        'Melhorar a home não era uma prioridade do negócio.',
        'Tínhamos insights fortes de clientes que justificavam o trabalho.',
        'A estrutura da home estava limitando a evolução dos apps.',
        'O GPM e eu decidimos iniciar um projeto curto com um especialista em product design.',
      ],
    },
    goals: [
      'Dar visibilidade às funcionalidades que importavam para os usuários.',
      'Tornar a estrutura da home mais flexível.',
      'Gerar aprendizados de produto para a tribo.',
    ],
    processIntro:
      'Para andar rápido, rodamos um ciclo curto — entregando valor depressa e produzindo resultados que justificassem escalar o trabalho para o app inteiro. Meu papel era liderar o processo com o especialista em product design e, acima de tudo, definir as diretrizes do app para que as tribos pudessem absorvê-las na rotina dos seus squads. Mantivemos todo o time de design informado e abrimos as sessões criativas para pessoas de outras funções que quisessem participar. Com as etapas de problema, dados e decisão já concluídas, definimos uma janela de duas semanas para sessões criativas, execução e hand-off.',
    processFlow:
      'Problema → Coleta de dados → Decisão → Sessões criativas → Execução → Diretrizes → Entrega para os times',
    process: [
      {
        title: 'Problema e Dados',
        description:
          'Mapeamos métricas de acesso às funcionalidades, chamados de atendimento e pesquisa qualitativa para dimensionar a lacuna de engajamento e ranquear as funcionalidades escondidas na home.',
      },
      {
        title: 'Decisão e Objetivos',
        description:
          'Alinhei com o GPM uma intervenção de duas semanas com três objetivos: dar destaque às funcionalidades-chave, flexibilizar a estrutura e gerar aprendizados.',
      },
      {
        title: 'Sessões Criativas',
        description:
          'Conduzimos design critiques abertas com o time ampliado para testar layouts que mantinham o cartão em destaque e reaproveitavam componentes existentes.',
      },
      {
        title: 'Diretrizes e Hand-off',
        description:
          'Entregamos um roadmap da home, um guia de responsabilidades dos squads e um mapa de evolução para que os sete squads pudessem continuar o trabalho.',
      },
    ],
    execution: {
      title: 'Desenhado para a engenharia que realmente tínhamos.',
      body:
        'As explorações evoluíram de estudo e rascunho para uma comparação antes / estudo / depois da home, com a acessibilidade verificada ao longo do caminho. A engenharia voltou com uma estimativa de três meses e apenas um front-end em meio período disponível — então mudamos a estratégia de implementação: reaproveitar telas existentes, reduzir o número de endpoints de API e limitar o impacto no código atual. Isso reduziu o desenvolvimento de três meses para um (dev, testes, QA, deploy), e liberamos para 250 beta testers selecionados para manter o risco sob controle.',
      bullets: [
        'Verificações de acessibilidade: contraste, ordem de leitura e a11y em geral',
        'Telas reaproveitadas e endpoints de API enxugados para caber no código existente',
        'Desenvolvimento reduzido de 3 meses para 1',
        'Rollout controlado para 250 beta testers',
      ],
    },
    guidelines: {
      title: 'Ferramentas para manter os apps evoluindo.',
      body:
        'O entregável desta etapa foi um conjunto de diretrizes para todos os squads — e especialmente para os designers — continuarem o trabalho e escalarem as melhorias de UI pelos apps. Entregamos três ferramentas.',
      items: [
        {
          title: 'Roadmap',
          description: 'Um roadmap para a evolução da home.',
        },
        {
          title: 'Guia',
          description:
            'Um guia da área de responsabilidade de cada squad dentro da arquitetura dos apps — Boas-vindas, Gerenciar, Pagar, Usar, Configurações, Pontos, Informações, Busca, FAQ e Conteúdo.',
        },
        {
          title: 'Evolução',
          description:
            'Uma sugestão de como as outras áreas dos apps poderiam evoluir.',
        },
      ],
      closingTitle: '…e como está hoje?',
      closingBody:
        'Anos depois, o produto está um pouco diferente do que imaginamos. Um produto é um organismo vivo e ganha novos caminhos à medida que é aprimorado. Diretrizes importam porque mostram o que é possível — mas não devem restringir a evolução do produto.',
    },
    outcomeTitle: 'Visibilidade, validada por dados.',
    outcomeBody:
      'A nova home foi liberada para o beta de 250 usuários. O acesso ao cartão virtual saltou de 6% para 18% — cerca de 6% pela área de serviços e 12% pelo novo botão da home, triplicando a taxa original. Do grupo beta, 53% responderam à pesquisa de feedback, e 82% deles avaliaram a experiência como "ótima" ou "boa".',
    outcomeBullets: [
      'Acesso ao cartão virtual subiu de 6% para 18% — um aumento de 3×',
      '82% dos respondentes avaliaram a nova home como ótima ou boa',
      'Escopo de engenharia reduzido de 3 meses para 1, com um front-end em meio período',
      'Diretrizes adotadas por 7 squads da unidade de cartões de crédito',
    ],
    learnings: [
      {
        title: 'Diretrizes para a rotina de designers e PMs.',
        body:
          'Antes disso, designers e PMs tinham dificuldade para entender as responsabilidades de cada squad dentro do app. A diretriz deu a eles essa visão — e se mostrou valiosa durante e depois do projeto.',
      },
      {
        title: 'Envolver a engenharia nas etapas iniciais do design.',
        body:
          'Trazer a engenharia cedo para avaliar a viabilidade foi uma dificuldade real. A lição: envolvê-la desde o início para evitar retrabalho e replanejamento.',
      },
      {
        title: 'Designers precisam dominar dados e resultados.',
        body:
          'Dados baseados em métricas foram essenciais para justificar o trabalho. Treinamos o time para ser dono das métricas e usá-las como parte da argumentação na tomada de decisão.',
      },
    ],
  },
  'nuvemshop-partners': {
    title: 'Tiendanube Partners',
    description:
      'Redesign e migração do Admin para Parceiros, retirado do core da Tiendanube',
    role: 'Design Manager',
    company: 'Tiendanube',
    scope: 'Design de Plataforma, Migração, Pesquisa',
    tagline:
      'Desacoplando o admin de parceiros da Tiendanube do core — e entregando em 8 meses.',
    overview:
      'O Admin para Parceiros é a principal ferramenta que os parceiros usam para gerenciar sua relação com a Tiendanube — sacar comissões, publicar aplicativos na loja de apps e acompanhar as lojas criadas por meio de suas indicações. A base de parceiros é ampla, de software houses a afiliados. Como Design Manager na unidade de negócio de Ecossistema, liderei um time de quatro product designers, em parceria com três engenheiros front-end e quatro back-end; dada a demanda, também atuei com a mão na massa na execução junto ao squad do Admin para Parceiros.',
    highlights: [
      'Ecossistema — uma unidade de negócio da empresa',
      'O Admin para Parceiros é o sistema principal',
      '~6 mil usuários ativos por mês',
      'Time em formação: 4 designers, 3 engenheiros front-end e 4 back-end',
    ],
    stats: [
      { value: '8 meses', label: 'Migração Completa' },
      { value: '100%', label: 'Parceiros Migrados' },
      { value: '4,5', label: 'Nota de Satisfação' },
    ],
    challengeTitle: 'Um admin legado fundido à plataforma core.',
    challengeBody:
      'O administrador antigo foi construído dentro do core da Tiendanube e herdava todas as suas dependências — entre elas a autenticação —, então toda mudança era acoplada e arriscada. Esse acoplamento criava barreiras para entregar mais valor aos parceiros. Em resumo: o sistema legado era antigo demais, fundido ao core e restringia qualquer melhoria.',
    decision: {
      body:
        'Os parceiros e a nossa própria operação nos diziam que o admin tinha muitos problemas que atrapalhavam as rotinas e geravam reclamações. Para entregar muitas melhorias rapidamente, primeiro precisávamos mover o sistema para uma nova tecnologia, desacoplada do core.',
      points: [
        'Muitas reclamações dos parceiros sobre o admin legado.',
        'Desacoplar do core para ganhar velocidade e eliminar dependências.',
        'Adicionar apenas alguns ganhos de alto impacto — como a versão mobile-friendly — para terminar rápido.',
        'Conduzimos uma pesquisa qualitativa com ~30 parceiros para priorizar o que cabia na migração.',
      ],
    },
    goals: [
      'Redesenhar o sistema com mudanças pequenas, mas de impacto, a partir da base existente.',
      'Usar o novo design system como base do redesign.',
      'Aplicar ganhos rápidos para agregar valor real aos parceiros.',
    ],
    processIntro:
      'Começamos junto com produto e engenharia, considerando as contribuições da área de negócio, as decisões tomadas em conjunto e a pesquisa com parceiros. A partir daí, rodamos um ciclo contínuo dentro da tribo para avançar os fluxos do Admin para Parceiros e entregá-los à engenharia. Para dar visibilidade a todos os fluxos que precisávamos migrar — e ao status de cada um —, construí um plano de migração do ponto de vista da disciplina de design, reportado semanalmente para toda a tribo. Ele também deu aos designers clareza de ownership e mais autonomia sobre o trabalho.',
    processFlow:
      'Insumos do negócio → Pesquisa → Decisão → Sessões criativas → Design → Protótipo → Entrega para desenvolvimento',
    process: [
      {
        title: 'Pesquisa',
        description:
          'Conduzimos entrevistas qualitativas com ~30 parceiros de diferentes perfis para inventariar as reclamações e ranqueá-las por impacto vs. esforço.',
      },
      {
        title: 'Decisão de Escopo',
        description:
          'Mantivemos o limite em "base existente + ganhos rápidos" — mobile-friendly, recebíveis melhores, criação de apps mais limpa — para que a migração realmente terminasse.',
      },
      {
        title: 'Acompanhamento da Migração',
        description:
          'Construí um plano de migração por fluxo, reportado semanalmente à tribo, dando a designers e engenheiros ownership claro sobre cada parte.',
      },
      {
        title: 'Hand-off Contínuo',
        description:
          'Rodamos um ciclo constante de design, revisão e hand-off para a engenharia em todos os fluxos do Admin, até a plataforma antiga ficar vazia.',
      },
    ],
    execution: {
      title: 'Reconstruímos os fluxos principais, em mobile e desktop.',
      body:
        'O redesign cobriu os fluxos principais em mobile e desktop, apoiando-se no novo design system e incorporando os ganhos rápidos que os parceiros haviam pedido — com destaque para uma experiência responsiva e mobile-friendly. Uma comparação antes/depois colocou o sistema original ao lado do redesign.',
      bullets: [
        'Login — mobile / desktop',
        'Home — mobile / desktop',
        'Formulário de criação de app — mobile / desktop',
        'Detalhes dos apps — mobile / desktop',
        'Detalhes do saldo — mobile / desktop',
      ],
    },
    outcomeTitle: 'Migração completa, zero rollback.',
    outcomeBody:
      'Migramos 100% das funcionalidades da plataforma antiga para a nova, abrindo espaço para melhorias e novas funcionalidades. Toda a base de parceiros foi migrada em oito meses — sem rollbacks e sem contas paralelas na plataforma antiga. O novo Admin alcançou nota de satisfação 4,5, cumprindo nossa meta de igualar ou superar a experiência anterior, e revelou os próximos atritos a resolver.',
    outcomeBullets: [
      '100% das funcionalidades migradas para a nova plataforma',
      '100% dos parceiros migrados sem rollback',
      'Nota de satisfação 4,5 após a migração',
      'Admin mobile-friendly — um pedido antigo dos parceiros, entregue',
    ],
    learnings: [
      {
        title: 'Quebrar as entregas em partes menores.',
        body:
          'Para andar mais rápido e coletar mais feedback, poderíamos ter quebrado ainda mais os entregáveis, sem perder de vista o objetivo geral da migração.',
      },
      {
        title: 'Explorar mais MVPs durante a migração.',
        body:
          'Investimos muito esforço em entregar funcionalidades completas; entregas menores e mais rápidas teriam nos permitido testar as mais críticas com usuários selecionados.',
      },
      {
        title: 'Explorar mais o design system.',
        body:
          'Usamos o DS do início ao fim, mas o customizamos em alguns pontos. Apoiar-se mais nele — e deixar a UI evoluir depois da migração — teria sido mais rápido.',
      },
    ],
  },
  'nimbus-design-system': {
    title: 'Nimbus Design System',
    description:
      'O design system de produto da Tiendanube — nascido dentro do redesign de um app mobile',
    role: 'Design Manager',
    company: 'Tiendanube',
    scope: 'Design System, Tokens, Documentação',
    tagline:
      'Um design system nascido dentro do redesign de um app — construído para escalar por todo o ecossistema de produtos da Tiendanube.',
    overview:
      'O Nimbus é o design system de produto da Tiendanube, construído principalmente para os times internos e para parceiros externos que se integram ao ecossistema. Sou responsável por ele ao lado de um engineering manager, com dois product designers sêniores e um desenvolvedor front-end especializado em design systems. Tratamos o Nimbus como um produto de fato — sabendo quem são nossos usuários, do que precisam, o que priorizar e quais métricas medem nosso impacto.',
    highlights: [
      'Aplicações desktop e mobile usando o design system',
      'Foco em times internos e parceiros',
      'Sustenta a nova estratégia de marca',
      'Time dedicado: 2 designers sêniores + 1 front-end especialista, com um EM',
    ],
    stats: [
      { value: '13', label: 'Aplicações em Uso' },
      { value: '40+', label: 'Componentes Entregues' },
      { value: '>90%', label: 'Meta de Cobertura' },
    ],
    challengeTitle: 'Um design system não é um projeto — é um produto.',
    challengeBody:
      'Como poderíamos implementar as novas definições de marca de forma escalável? Para dar a largada no Nimbus, nós o construímos junto com o redesign do nosso app mobile — um app nativo para Android e iOS que não era atualizado havia anos, com uma defasagem de funcionalidades em relação ao desktop e uma marca desatualizada. Unir os dois significava que o DS tinha um caso de uso real desde o primeiro dia, então cada componente criado precisava ser de fato útil para o redesign.',
    goals: [
      'Atualizar o visual e a usabilidade de acordo com a nova marca.',
      'Aumentar a escalabilidade do novo app mobile.',
      'Criar uma base de design e desenvolvimento para outras aplicações e produtos.',
    ],
    processIntro:
      'Dividimos o trabalho em duas frentes — uma para o redesign do app, outra para o design system. Sem um time dedicado de DS no início, as mesmas pessoas cuidavam de design e desenvolvimento; depois do discovery, o redesign foi quebrado em partes menores, construídas em ciclos. Por ser nosso primeiro design system, fizemos uma pesquisa aprofundada sobre práticas de mercado, estruturas comuns e as tecnologias mais usadas, fazendo benchmark de design systems reconhecidos para definir o que um DS de classe mundial exigiria.',
    processFlow:
      'Redesign do app: Problema → Discovery → Sessões criativas → Design → Protótipo → Hand-off  ·  DS: Discovery → Exploração → Criação de componentes → Release',
    process: [
      {
        title: 'Discovery e Benchmarks',
        description:
          'Estudamos design systems reconhecidos para definir estrutura, modelo de tokens e princípios alinhados ao novo trabalho de marca.',
      },
      {
        title: 'Fundamentos',
        description:
          'Estabelecemos tokens de cor, tipografia e espaçamento — e o contrato entre design e engenharia que os manteria unidos.',
      },
      {
        title: 'Criação de Componentes',
        description:
          'Construímos componentes atômicos, compostos e de padrões em paralelo aos ciclos do redesign do app, com design e dev em dupla em cada um.',
      },
      {
        title: 'Métricas de Adoção',
        description:
          'Definimos Cobertura (≥90%) e Overrides (≤10%) para acompanhar a adoção real e revelar onde o Nimbus estava deixando a desejar.',
      },
    ],
    execution: {
      title: 'Validado ao entregar fluxos reais.',
      body:
        'Validamos o sistema redesenhando fluxos reais e comparando-os entre estados — mobile antigo, desktop responsivo e mobile novo — em telas-chave como o fluxo de pedidos e o dashboard. Construir os componentes sobre telas reais os manteve honestos e garantiu que cada um merecesse o seu lugar.',
      bullets: [
        'Fluxo de pedidos — mobile antigo / desktop responsivo / mobile novo',
        'Dashboard — mobile antigo / desktop responsivo / mobile novo',
        'Métrica de Cobertura — % do front-end de um app que é Nimbus (meta ≥90%)',
        'Métrica de Overrides — % de componentes do DS customizados nos apps (meta ≤10%)',
      ],
    },
    outcomeTitle: 'Um produto, não um projeto.',
    outcomeBody:
      'O redesign não terminou, mas já entregamos mais de 40 componentes atômicos, compostos e de padrões, e 13 aplicações mobile e desktop estão usando o Nimbus — com quatro times adotando-o sem dificuldades. Conforme o uso escalou, justificamos um time dedicado de dois designers e um dev front-end, crucial para o foco e o ritmo. As métricas de Cobertura e Overrides agora nos dão uma leitura precisa da adoção e de onde melhorar.',
    outcomeBullets: [
      '13 aplicações adotando o Nimbus em mobile e desktop',
      '40+ componentes atômicos, compostos e de padrões entregues',
      'Time dedicado formado: 2 product designers + 1 front-end especialista',
      'Métricas de Cobertura (≥90%) e Overrides (≤10%) acompanhando a adoção real',
    ],
    learnings: [
      {
        title: 'Ir mais fundo no que as métricas revelam.',
        body:
          'Os dados são ricos — mostram quais casos de uso o DS não está atendendo e onde melhorar para aumentar a adoção do Nimbus.',
      },
      {
        title: 'Entender o impacto do Nimbus nos usuários finais.',
        body:
          'Estamos coletando feedback dos times sobre como os usuários finais recebem as novas interfaces — um insumo importante para priorizar melhorias.',
      },
      {
        title: 'Elevar a régua de qualidade desde o início.',
        body:
          'Estamos revisitando os primeiros componentes à medida que aprendemos, aplicando formas mais flexíveis e fáceis de usar para construí-los.',
      },
    ],
  },
};
