import type { Dictionary } from './dictionaries';

export const pt: Dictionary = {
  meta: {
    title: 'Diego Silverio — Lead Product Designer',
    description:
      'Mais de 16 anos entre América Latina e EUA criando experiências digitais que as pessoas amam. Atualmente lidero o design de produto na SuperSummary.',
    ogDescription:
      'Mais de 16 anos entre América Latina e EUA criando experiências digitais que as pessoas amam.',
    managementTitle: 'Gestão de Times de Design — Diego Silverio',
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
    titleBefore: 'Criando',
    titleAccent: 'experiências',
    titleAfter: 'digitais que as pessoas amam',
    body: 'Mais de 16 anos entre América Latina e EUA entregando trabalhos para fintechs, marketplaces e plataformas. Atualmente lidero o design de produto na SuperSummary — com foco em EdTech e IA.',
    scrollLabel: 'Trabalhos selecionados',
    scrollAria: 'Ir para os trabalhos selecionados',
  },
  works: {
    eyebrow: 'Portfólio',
    title: 'Trabalhos Selecionados',
    viewCase: 'Ver estudo de caso',
    openCase: (title: string) => `Abrir o estudo de caso ${title}`,
  },
  about: {
    eyebrow: 'Trajetória',
    title: 'Sobre',
    portraitAlt: 'Retrato de Diego Silverio',
    lead: 'Meu nome é Diego — sou product designer com mais de 16 anos de experiência em desenvolvimento de software para marketplaces, fintechs e, atualmente, EdTech.',
    body: 'Morando no Brasil, liderei times de diversos tamanhos e configurações, atuando em grandes empresas, pequenos negócios e startups para transformar problemas complexos em experiências de produto eficientes e de impacto.',
    managementLink: 'Leia sobre minha experiência na gestão de times de design',
    stats: [
      { value: '16+', label: 'Anos em design de produto' },
      { value: '8+', label: 'Anos liderando times' },
      { value: 'LATAM e EUA', label: 'Mercados em que atuei' },
      { value: 'EdTech e IA', label: 'Foco atual — SuperSummary' },
    ],
  },
  footer: {
    titleBefore: 'Vamos criar algo que',
    titleAccent: 'valha',
    titleAfter: 'a pena usar.',
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
  password: {
    eyebrow: 'Trabalho protegido',
    title: 'Digite a senha',
    unlockProject: (title: string) =>
      `Desbloqueie ${title} e os outros estudos de caso.`,
    unlockAll: 'Desbloqueie os estudos de caso deste site.',
    label: 'Senha',
    error: 'Senha incorreta. Tente novamente.',
    cancel: 'Cancelar',
    backHome: 'Voltar para a home',
    submit: 'Desbloquear',
    closeAria: 'Fechar a solicitação de senha',
  },
  error: {
    titleBefore: 'Algo',
    titleAccent: 'quebrou',
    body: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
    retry: 'Tentar novamente',
  },
};
