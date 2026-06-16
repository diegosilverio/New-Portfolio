export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

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

  role: string;
  company: string;
  scope: string;
  tagline: string;
  overview: string;
  stats: ProjectStat[];
  challengeTitle: string;
  challengeBody: string;
  process: ProcessStep[];
  outcomeTitle: string;
  outcomeBody: string;
  outcomeBullets: string[];
  outcomeImage?: string;
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
    role: 'Lead Designer',
    company: 'Nuvemshop',
    scope: 'Product Strategy, UI Design, Research',
    tagline:
      'Reimagining how thousands of LATAM merchants ship — from chaos to confidence.',
    overview:
      'Nuvem Envio is the shipping and logistics product I led at Nuvemshop, reconciling six carrier integrations into a single, predictable flow for thousands of merchants across LATAM. Work spanned discovery, end-to-end UI, and the operational dashboard used by the support team.',
    stats: [
      { value: '6+', label: 'Carriers Unified' },
      { value: '32%', label: 'Fewer Tickets' },
      { value: '80%', label: 'Merchant Adoption' },
    ],
    challengeTitle: 'Six carriers, one mental model.',
    challengeBody:
      'Merchants juggled six logistics partners with different rules, formats, and failure modes. The challenge was hiding that complexity without taking power away from the operators who depend on the details.',
    process: [
      {
        title: 'Discovery',
        description:
          'Shadowed merchants and support agents to map the real journey from order to delivery.',
      },
      {
        title: 'Flow Architecture',
        description:
          'Designed a unified shipment object that abstracted carrier-specific rules into a single model.',
      },
      {
        title: 'Interface Build',
        description:
          'Prototyped label printing and tracking states that hold up on slow connections.',
      },
      {
        title: 'Rollout',
        description:
          'Phased migration with support playbooks and merchant onboarding clinics.',
      },
    ],
    outcomeTitle: 'Shipping that finally feels boring.',
    outcomeBody:
      'Nuvem Envio turned a fragile, multi-vendor process into a calm operational tool. Merchants stopped fighting the product and could focus on running their stores.',
    outcomeBullets: [
      '32% drop in support tickets related to shipping',
      'Adopted by 80% of active merchants in the first quarter',
      'Became the foundation for our cross-border logistics expansion',
    ],
    outcomeImage: '/projects/nuvem-envio.svg',
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
    role: 'Senior Product Designer',
    company: 'Itaú',
    scope: 'Mobile Design, Fintech, User Research',
    tagline:
      'Modernizing a credit card app used by millions — without breaking trust.',
    overview:
      'Itaucard is the credit card mobile experience for one of LATAM’s largest banks, serving millions of monthly active users. The redesign focused on clarity, trust, and accessible micro-interactions while honoring strict regulatory and security constraints.',
    stats: [
      { value: '4.6', label: 'App Store Rating' },
      { value: '41%', label: 'Fewer Payment Errors' },
      { value: 'M+', label: 'Monthly Users' },
    ],
    challengeTitle: 'Modernizing a product people rely on.',
    challengeBody:
      'A 20-year-old app, calcified UI patterns, and regulatory copy that nobody wanted to touch. The redesign had to feel modern and confident without spooking customers who depend on the product every day.',
    process: [
      {
        title: 'Audit',
        description:
          'Mapped every flow, regulation, and edge case to find safe places to evolve the experience.',
      },
      {
        title: 'Foundation',
        description:
          'Established type, color, and motion principles tuned for fintech trust signals.',
      },
      {
        title: 'Component System',
        description:
          'Designed accessible patterns for statements, payments, and disputes.',
      },
      {
        title: 'Validation',
        description:
          'Ran usability sessions with low-vision users and first-time mobile bankers.',
      },
    ],
    outcomeTitle: 'A calmer way to manage credit.',
    outcomeBody:
      'The redesign restored trust and gave the team a sustainable design foundation to ship on. People started recommending the app instead of tolerating it.',
    outcomeBullets: [
      'App store rating raised from 3.4 to 4.6',
      'First-payment errors reduced by 41%',
      'Foundation reused across Itaú’s broader card portfolio',
    ],
    outcomeImage: '/projects/itaucard.svg',
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
    role: 'Lead Designer',
    company: 'Nuvemshop',
    scope: 'Platform Design, B2B, Analytics',
    tagline:
      'A B2B platform that turned a partner network into a real growth channel.',
    overview:
      'Nuvemshop Partners connects agencies, freelancers, and integrators with the platform’s merchant base. I led design for the partner dashboard, certification tracks, and the lead-sharing engine that powers the program.',
    stats: [
      { value: '3×', label: 'Partner Growth' },
      { value: '27%', label: 'Lead Conversion' },
      { value: '3', label: 'Partner Archetypes' },
    ],
    challengeTitle: 'One platform, three partner archetypes.',
    challengeBody:
      'Agencies want pipelines, freelancers want jobs, and integrators want APIs. The platform had to serve all three without becoming a Frankenstein of dashboards.',
    process: [
      {
        title: 'Segmentation',
        description:
          'Interviewed each partner type to understand the jobs they hire the program to do.',
      },
      {
        title: 'Information Architecture',
        description:
          'Designed a modular dashboard that adapts to each archetype’s priorities.',
      },
      {
        title: 'Lead Engine',
        description:
          'Built a lead-sharing flow that ranks opportunities by likelihood and fit.',
      },
      {
        title: 'Certification',
        description:
          'Created learning tracks tied to badges, perks, and lead priority.',
      },
    ],
    outcomeTitle: 'A program partners actually grow with.',
    outcomeBody:
      'Partners stopped treating the platform as a directory and started treating it as a pipeline. Merchant fit improved and partner retention compounded.',
    outcomeBullets: [
      '3× growth in active partners during the first year',
      'Lead-to-deal conversion improved by 27%',
      'Became a measurable acquisition channel for the merchant business',
    ],
    outcomeImage: '/projects/nuvemshop-partners.svg',
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
    role: 'Lead Designer',
    company: 'Nuvemshop',
    scope: 'Design System, Tokens, Documentation',
    tagline:
      'Building a scalable, token-based design system for Nuvemshop’s product ecosystem.',
    overview:
      'Nimbus is the design system I led at Nuvemshop — a unified component library and token architecture built to scale across multiple product teams in LATAM. The project involved defining foundational tokens, building a component library in Figma, and establishing contribution workflows across design and engineering.',
    stats: [
      { value: '40+', label: 'Components' },
      { value: '3', label: 'Product Teams' },
      { value: '1', label: 'Design Language' },
    ],
    challengeTitle: 'Scaling design across fragmented teams.',
    challengeBody:
      'Before Nimbus, each product team maintained their own component library — leading to inconsistent UIs, duplicated work, and slow delivery. The challenge was aligning teams on a single source of truth without slowing them down.',
    process: [
      {
        title: 'Audit & Discovery',
        description:
          'Evaluating 300+ UI patterns to identify inconsistencies and core functional needs.',
      },
      {
        title: 'Token Architecture',
        description:
          'Establishing a multi-mode token system for colors, spacing, and typography.',
      },
      {
        title: 'Component Build',
        description:
          'Designing and documenting flexible, accessible components in Figma and React.',
      },
      {
        title: 'Documentation',
        description:
          'Creating a central portal for guidelines, code snippets, and design principles.',
      },
    ],
    outcomeTitle: 'A system teams actually use.',
    outcomeBody:
      'Nimbus transformed the way we build product at Nuvemshop. By shifting from a static library to a living system, we enabled teams to focus on solving user problems rather than pixel-pushing.',
    outcomeBullets: [
      'Reduced design-to-dev handoff time by 40%',
      'Adopted across 3 core product teams',
      'Became the foundation for future product expansion',
    ],
    outcomeImage: '/projects/nimbus-ds.svg',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.id === slug);
  return projects[(i + 1) % projects.length];
}
