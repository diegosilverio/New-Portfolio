export const en = {
  meta: {
    title: 'Diego Silverio — Lead Product Designer',
    description:
      'Product designer with 16+ years across LATAM and the US, building the design system, research pipeline and AI tools that help product teams ship faster.',
    ogDescription:
      'Crafting products, and the AI tools that scale them.',
    managementTitle: 'Design Leadership — Diego Silverio',
    managementDescription:
      'My experience leading and growing design teams — the roles, the principles that guide me, how I approach design leadership, and the feedback I’ve received along the way.',
    managementOgDescription:
      'My experience leading and growing design teams across edtech, e-commerce, steel, and banking.',
  },
  header: {
    role: 'Lead Product Designer',
    navLabel: 'Primary',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    languageLabel: 'Language',
    languages: { en: 'English', pt: 'Português' },
  },
  hero: {
    titleBefore: 'Crafting products,\nand the',
    titleAccent: 'AI tools',
    titleAfter: '\nthat scale them',
    body: '16+ years designing products across LATAM and the US. Today at SuperSummary, I build the design system, research pipeline and AI tools that help product teams ship faster.',
    scrollLabel: 'Selected work',
    scrollAria: 'Jump to selected work',
  },
  works: {
    eyebrow: 'Portfolio',
    title: 'Selected Works',
    viewCase: 'View case study',
    openCase: (title: string) => `Open ${title} case study`,
  },
  earlier: {
    title: 'Earlier work',
  },
  systems: {
    title: 'Systems & AI',
  },
  about: {
    eyebrow: 'Background',
    title: 'About',
    portraitAlt: 'Diego Silverio portrait',
    body: 'I’m a product designer who works on problems that arrive unframed. I’ve done it in banking, e-commerce SaaS and, now, a subscription edtech company, where I design hands-on, create AI tooling for design workflow, own the design system and the research operation, and report to the senior leadership. I judge my work by what changed: revenue without more churn, delivery without delays, decisions backed by evidence instead of opinion. Based in Brazil, working across LATAM and the US.',
    managementLink: 'See how I build systems and AI tools for design teams',
    stats: [
      { value: '16+', label: 'Years in product design' },
      { value: 'Hands-on', label: 'Growth, design systems, AI tooling' },
      { value: 'LATAM & US', label: 'Markets shipped across' },
      { value: 'EdTech & AI', label: 'Current focus — SuperSummary' },
    ],
  },
  footer: {
    titleBefore: 'Let’s make something',
    titleAccent: 'worth',
    titleAfter: 'using.',
  },
  caseStudy: {
    eyebrow: 'Case Study',
    role: 'Role',
    year: 'Year',
    company: 'Company',
    scope: 'Scope',
    overview: 'Overview',
    challenge: 'Challenge',
    decision: 'Decision Points',
    goals: 'Goals',
    process: 'Process',
    execution: 'Execution',
    guidelines: 'Guidelines',
    results: 'Results',
    learnings: 'Learnings',
    next: 'Next',
    backToWork: 'Back to all work',
    caseLink:
      'Want to see more details about this project? View the full case here',
    imageAlt: (title: string, n: number) => `${title} — image ${n}`,
    outcomeAlt: (title: string) => `${title} outcome`,
  },
  error: {
    titleBefore: 'Something',
    titleAccent: 'broke',
    body: 'An unexpected error occurred. Please try again.',
    retry: 'Try again',
  },
};
