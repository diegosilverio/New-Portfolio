import type { ProjectTranslation } from './projects';

export const projectsPt: Record<string, ProjectTranslation> = {
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
      'Redesign e migração do Admin para Parceiros — desacoplado do core da Tiendanube',
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
