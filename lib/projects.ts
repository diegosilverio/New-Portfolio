export interface Project {
  id: string;
  title: string;
  year: number;
  image: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  challenges?: string[];
  results?: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'nuvem-envio',
    title: 'Nuvem Envio',
    year: 2021,
    image: '/projects/nuvem-envio.svg',
    description: 'Shipping & logistics platform redesign',
    longDescription:
      'A complete redesign of the shipping and logistics platform serving thousands of e-commerce merchants across Latin America. Focused on simplifying complex multi-carrier flows into a single, predictable experience.',
    technologies: ['UI Design', 'Product Strategy', 'Research'],
    challenges: [
      'Reconcile 6+ carrier integrations behind a single mental model',
      'Make label printing and tracking feel instant on slow connections',
    ],
    results: [
      '32% drop in support tickets for shipping issues',
      'Adoption by 80% of active merchants in the first quarter',
    ],
  },
  {
    id: 'itaucard',
    title: 'Itaucard',
    year: 2019,
    image: '/projects/itaucard.svg',
    description: 'Credit card app interface for one of LATAM’s largest banks',
    longDescription:
      'Redesign of the Itaucard mobile experience — millions of monthly active users — with an emphasis on clarity, trust, and accessible micro-interactions in fintech contexts.',
    technologies: ['Mobile Design', 'Fintech', 'User Research'],
    challenges: [
      'Bring a 20-year-old product up to modern banking standards',
      'Balance regulatory copy with a calm, confident interface',
    ],
    results: [
      'App store rating raised from 3.4 to 4.6',
      'Reduced first-payment errors by 41%',
    ],
  },
  {
    id: 'nuvemshop-partners',
    title: 'Nuvemshop Partners',
    year: 2020,
    image: '/projects/nuvemshop-partners.svg',
    description: 'Partnership platform for the e-commerce ecosystem',
    longDescription:
      'B2B platform connecting agencies, freelancers, and integrators with Nuvemshop’s merchant base. Designed the entire dashboard, certification tracks, and lead-sharing flow.',
    technologies: ['Platform Design', 'B2B', 'Analytics'],
    challenges: [
      'Serve three distinct partner archetypes from one platform',
      'Surface high-signal leads without overwhelming the dashboard',
    ],
    results: [
      '3x growth in active partners during the first year',
      'Lead-to-deal conversion improved by 27%',
    ],
  },
  {
    id: 'nimbus-design-system',
    title: 'Nimbus Design System',
    year: 2021,
    image: '/projects/nimbus-ds.svg',
    description: 'Enterprise design system architecture',
    longDescription:
      'Nimbus is the design system powering Nuvemshop’s suite of products. I led component architecture, token strategy, and the design-engineering contract.',
    technologies: ['Design System', 'Components', 'Documentation'],
    challenges: [
      'Unify 4 product surfaces with conflicting visual histories',
      'Ship a token model that survives multi-brand theming',
    ],
    results: [
      '60% reduction in time-to-first-screen for new product teams',
      'Adopted by 7 squads and 40+ contributors',
    ],
  },
];
