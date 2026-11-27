import type { Dictionary } from './dictionaries';

export const pt: Dictionary = {
  meta: {
    title: 'Diego Silverio — Lead Product Designer',
    description:
      'Product designer com mais de 16 anos entre a América Latina e os EUA, construindo o design system, o pipeline de pesquisa e as ferramentas de IA que ajudam times a entregar produtos de alta qualidade, mais rápido.',
    ogDescription:
      'Criando produtos, e as ferramentas de IA que os fazem escalar.',
    managementTitle: 'Liderança em Design — Diego Silverio',
    managementDescription:
      'Minha experiência liderando e desenvolvendo times de design — os cargos, os princípios que me guiam, como encaro a liderança em design e os feedbacks que recebi pelo caminho.',
    managementOgDescription:
      'Minha experiência liderando e desenvolvendo times de design em edtech, e-commerce, siderurgia e banco.',
  },
  header: {
    role: 'Lead Product Designer',
    navLabel: 'Principal',
    work: 'Trabalhos',
    about: 'Sobre',
    contact: 'Contato',
    languageLabel: 'Idioma',
    languages: { en: 'English', pt: 'Português' },
  },
  hero: {
    titleBefore: 'Criando produtos, e as',
    titleAccent: 'ferramentas de IA',
    titleAfter: 'que os fazem escalar',
    body: 'Mais de 16 anos desenhando produtos entre a América Latina e os EUA. Hoje, na SuperSummary, construo o design system, o pipeline de pesquisa e as ferramentas de IA que ajudam meu time a entregar produtos de alta qualidade, mais rápido.',
    scrollLabel: 'Trabalhos selecionados',
    scrollAria: 'Ir para os trabalhos selecionados',
  },
  works: {
    eyebrow: 'Portfólio',
    title: 'Trabalhos Selecionados',
    viewCase: 'Ver estudo de caso',
    openCase: (title: string) => `Abrir o estudo de caso ${title}`,
  },
  systems: {
    eyebrow: 'Cases de liderança',
    title: 'Sistemas e IA',
  },
  about: {
    eyebrow: 'Trajetória',
    title: 'Sobre',
    portraitAlt: 'Retrato de Diego Silverio',
    body: 'Sou product designer e trabalho com problemas que chegam sem enquadramento: pricing e packaging, design systems e as ferramentas que permitem a um time pequeno entregar no ritmo de um time maior. Fiz isso em banco, em SaaS de e-commerce e, agora, numa edtech de assinatura, onde desenho com a mão na massa, cuido do design system e da operação de pesquisa e reporto ao CEO. Avalio meu trabalho pelo que mudou: receita sem mais churn, entregas sem atraso, decisões apoiadas em evidência em vez de opinião. Quando nenhuma ferramenta serve, eu crio uma, incluindo os assistentes de IA que meu time usa para desenhar e revisar no Figma. Moro no Brasil e trabalho entre a América Latina e os EUA.',
    managementLink: 'Veja como construo sistemas e ferramentas de IA para times de design',
    stats: [
      { value: '16+', label: 'Anos em design de produto' },
      { value: 'Hands-on', label: 'Growth, design systems, ferramentas de IA' },
      { value: 'LATAM e EUA', label: 'Mercados em que atuei' },
      { value: 'EdTech e IA', label: 'Foco atual — SuperSummary' },
    ],
  },
  footer: {
    titleBefore: 'Vamos criar experiências que',
    titleAccent: 'encantem',
    titleAfter: 'as pessoas.',
  },
  caseStudy: {
    eyebrow: 'Estudo de Caso',
    role: 'Função',
    year: 'Ano',
    company: 'Empresa',
    scope: 'Escopo',
    overview: 'Visão Geral',
    challenge: 'Desafio',
    decision: 'Pontos de Decisão',
    goals: 'Objetivos',
    process: 'Processo',
    execution: 'Execução',
    guidelines: 'Diretrizes',
    results: 'Resultados',
    learnings: 'Aprendizados',
    next: 'Próximo',
    backToWork: 'Voltar para todos os trabalhos',
    caseLink:
      'Quer ver mais detalhes sobre este projeto? Veja o case completo aqui',
    imageAlt: (title: string, n: number) => `${title} — imagem ${n}`,
    outcomeAlt: (title: string) => `Resultado de ${title}`,
  },
  error: {
    titleBefore: 'Algo',
    titleAccent: 'quebrou',
    body: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
    retry: 'Tentar novamente',
  },
};
