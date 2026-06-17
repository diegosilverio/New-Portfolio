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
    year: 2023,
    image: '/projects/nuvem-envio.svg',
    description:
      'Auto-activating the logistics service inside Tiendanube’s free-plan onboarding',
    longDescription:
      'A four-week, cross-functional project to fold Nuvem Envio into the platform’s onboarding so new sellers landed already activated — instead of opting in later.',
    technologies: ['Product Strategy', 'Onboarding', 'Cross-team Design'],
    challenges: [
      'Bundle a previously opt-in product into the free-plan onboarding without a multi-quarter integration',
      'Scope three viable paths and pick the one that shipped value fastest',
    ],
    results: [
      'Adoption rose from 3% to 5% (+2 percentage points)',
      'Average days to first shipment cut from 21 to 17',
    ],
    role: 'Design Manager',
    company: 'Nuvemshop',
    scope: 'Product Strategy, Onboarding, Cross-team Design',
    tagline:
      'Turning logistics from an opt-in product into part of every seller’s onboarding — in four weeks.',
    overview:
      'Nuvem Envio is the logistics service inside the Tiendanube platform — the tool sellers use to collect and ship products to their customers. As design manager for the Logistics Services BU, I led a cross-functional effort with one product designer, one front-end and three back-end engineers to fold the product into the platform’s free-plan onboarding, so new sellers landed already activated.',
    stats: [
      { value: '4 wks', label: 'Discovery to Production' },
      { value: '+2pp', label: 'Adoption Lift' },
      { value: '−16%', label: 'Days to First Shipment' },
    ],
    challengeTitle: 'Bundle a paid product into the free plan — without rebuilding both.',
    challengeBody:
      'The company wanted every free-plan onboarding to seed sellers with a basic logistics package, automatically. Until then, the product was opt-in. We had to thread the activation flow through the existing platform onboarding without dragging the work into a multi-quarter integration.',
    process: [
      {
        title: 'Initial Alignment',
        description:
          'Got product, design, and engineering on the same page about technical and business viability before sketching a single screen.',
      },
      {
        title: 'Discovery & Mapping',
        description:
          'Mapped how the product fit inside the platform’s onboarding to identify the integration points worth fighting for.',
      },
      {
        title: 'Three-Path Decision',
        description:
          'Scoped three options — ideal, reduced, and minimum — then chose the simplest path that still delivered real value.',
      },
      {
        title: 'Build & Hand-off',
        description:
          'Designed with the existing design system, prototyped, tested, and handed off to engineering in a single tight cycle.',
      },
    ],
    outcomeTitle: 'Shipped in four weeks, lifted adoption.',
    outcomeBody:
      'From kickoff to production in four weeks. Adoption climbed from 3% to 5% and the average time to first shipment dropped from 21 to 17 days — a side effect that hinted at a smoother end-to-end journey, not just a smarter activation step.',
    outcomeBullets: [
      'Four weeks from discovery to production deploy',
      'Adoption rose +2 percentage points (3% → 5%)',
      'Days to first shipment cut from 21 to 17',
      'Activation flow built almost entirely from the existing design system',
    ],
    outcomeImage: '/projects/nuvem-envio.svg',
  },
  {
    id: 'itaucard',
    title: 'Itaucard',
    year: 2018,
    image: '/projects/itaucard.svg',
    description:
      'New home screen and structure guidelines for the credit card app of Latin America’s largest bank',
    longDescription:
      'A two-week intervention to restructure the Itaucard home screen and produce the guidelines seven squads would use to keep evolving the apps. Led with a Group Product Manager and a PD specialist inside the Retention tribe.',
    technologies: ['Mobile Design', 'Product Strategy', 'Guidelines'],
    challenges: [
      'Surface high-value features buried inside a low-engagement home screen',
      'Negotiate a 3-month engineering scope down to something shippable in a sprint',
    ],
    results: [
      'Virtual card access rose from 6% to 18% — a 3× lift',
      '82% of beta survey respondents rated the new experience great or good',
    ],
    role: 'Design Manager',
    company: 'Itaú-Unibanco',
    scope: 'Mobile Design, Product Strategy, Guidelines',
    tagline:
      'Restructuring the home screen of a credit card app used by 7M Brazilians — and the guidelines to keep it evolving.',
    overview:
      'Itaucard is the credit card app for Itaú-Unibanco, the largest bank in Latin America, with roughly 7M active users on iOS and Android. As Design Manager inside the Retention tribe, I ran a focused two-week effort with a GPM and a PD specialist to restructure the home screen and hand the seven squads in the unit the guidelines they needed to keep evolving it after we left.',
    stats: [
      { value: '7M', label: 'Active App Users' },
      { value: '3×', label: 'Virtual Card Access' },
      { value: '82%', label: 'Positive Feedback' },
    ],
    challengeTitle: 'Important features were hidden in plain sight.',
    challengeBody:
      'Engagement on the apps was flat and customers kept opening support tickets to ask whether features even existed. The virtual card — a security tool people actively requested — sat at a 6% access rate. Improving the home wasn’t a roadmap priority, so any intervention had to be small, fast, and defensible by data.',
    process: [
      {
        title: 'Problem & Data',
        description:
          'Mapped feature-access metrics, support tickets, and qualitative research to size the engagement gap and prioritize the features hiding on the home.',
      },
      {
        title: 'Decision & Goals',
        description:
          'Aligned with the GPM on a two-week intervention with three goals: surface key features, make the structure flexible, and generate learnings for the tribe.',
      },
      {
        title: 'Creative Sessions',
        description:
          'Ran open design crits with the broader team to test layouts that kept the card in the spotlight and reused existing design system components.',
      },
      {
        title: 'Guidelines & Hand-off',
        description:
          'Delivered a home-screen roadmap, a squad responsibility guide, and an evolution map so all seven squads could continue the work.',
      },
    ],
    outcomeTitle: 'Visibility, validated by data.',
    outcomeBody:
      'The new home shipped to a 250-user beta after we negotiated engineering scope from three months down to one. Within weeks the virtual card access tripled, feedback skewed overwhelmingly positive, and the guidelines kept shaping the apps long after the project closed.',
    outcomeBullets: [
      'Virtual card access rose from 6% to 18% — a 3× lift',
      '82% of survey respondents rated the new home great or good',
      'Engineering scope cut from 3 months to 1 with a part-time front-end',
      'Guidelines adopted by 7 squads across the credit card unit',
    ],
    outcomeImage: '/projects/itaucard.svg',
  },
  {
    id: 'nuvemshop-partners',
    title: 'Nuvemshop Partners',
    year: 2021,
    image: '/projects/nuvemshop-partners.svg',
    description:
      'Redesign and migration of Admin for Partners — unmerged from the Nuvemshop core',
    longDescription:
      'An 8-month redesign and full migration of the partner administrator off the Nuvemshop core, paired with a curated set of high-impact improvements partners had been asking for.',
    technologies: ['Platform Design', 'Migration', 'Research'],
    challenges: [
      'Unmerge a legacy admin fused into the core platform without freezing partner activity',
      'Bundle real partner-requested improvements into a migration without blowing the scope',
    ],
    results: [
      '100% of partners migrated to the new platform — no rollback',
      '4.5 satisfaction score, meeting the parity goal',
    ],
    role: 'Design Lead',
    company: 'Nuvemshop',
    scope: 'Platform Design, Migration, Research',
    tagline:
      'Unmerging Nuvemshop’s partner admin from the core — and shipping it in 8 months.',
    overview:
      'Admin for Partners is the tool partners use to manage their relationship with Nuvemshop — withdrawing commissions, publishing apps to the appstore, tracking referred stores. The legacy version was fused into the Nuvemshop core, making every improvement slow and risky. I led the design effort with a team of 4 product designers across the Ecosystem tribe, partnering with 3 front-end and 4 back-end engineers on the rebuild.',
    stats: [
      { value: '8 mo', label: 'Full Migration' },
      { value: '100%', label: 'Partners Migrated' },
      { value: '4.5', label: 'Satisfaction Score' },
    ],
    challengeTitle: 'A legacy admin fused to the core platform.',
    challengeBody:
      'The old administrator inherited every dependency of the Nuvemshop core, including authentication, which made any improvement a coupled change. Partners were vocal about pain points — especially on mobile — and a tech-only migration would have wasted the moment, so we had to bring real value alongside the rebuild.',
    process: [
      {
        title: 'Research',
        description:
          'Ran qualitative interviews with ~30 partners across types to inventory complaints and rank them by impact vs. effort.',
      },
      {
        title: 'Scope Decision',
        description:
          'Held the line at "baseline + low-hanging fruit" — mobile-friendly, better receivables, cleaner app creation — so the migration would actually finish.',
      },
      {
        title: 'Migration Tracking',
        description:
          'Built a per-flow migration plan reported weekly to the tribe, giving designers and engineers clear ownership over each piece.',
      },
      {
        title: 'Continuous Hand-off',
        description:
          'Ran a steady cycle of design, review, and engineering hand-off across every Admin flow until the old platform was empty.',
      },
    ],
    outcomeTitle: 'Full migration, zero rollback.',
    outcomeBody:
      'The entire partner base moved to the new platform in 8 months with no rollback and no parallel maintenance. The new Admin hit a 4.5 satisfaction score, meeting parity with the old experience and freeing the team to ship the next wave of improvements without dragging core dependencies along.',
    outcomeBullets: [
      '100% of functionalities migrated to the new platform',
      '100% of partners moved without rollback',
      '4.5 satisfaction score after migration',
      'Mobile-friendly admin — a long-standing partner request shipped',
    ],
    outcomeImage: '/projects/nuvemshop-partners.svg',
  },
  {
    id: 'nimbus-design-system',
    title: 'Nimbus Design System',
    year: 2021,
    image: '/projects/nimbus-ds.svg',
    description:
      'Nuvemshop’s product design system — born inside a mobile app redesign',
    longDescription:
      'Nimbus is the design system serving Nuvemshop’s internal teams and external partners. I helped kick it off alongside a mobile app redesign so it would have a real customer from day one, then grew it into a measured, dedicated-team product.',
    technologies: ['Design System', 'Tokens', 'Documentation'],
    challenges: [
      'Build a design system with no dedicated team and no obvious first customer',
      'Prove adoption with real metrics, not vanity uptake',
    ],
    results: [
      '13 mobile and desktop applications using Nimbus',
      '40+ atomic, composite, and pattern components shipped',
    ],
    role: 'Design Lead',
    company: 'Nuvemshop',
    scope: 'Design System, Tokens, Documentation',
    tagline:
      'A design system born inside an app redesign — built to scale across Nuvemshop’s product ecosystem.',
    overview:
      'Nimbus is the design system for Nuvemshop’s product ecosystem, used by internal teams and external partners building on the platform. I kick-started it alongside the redesign of the native mobile apps so every component would earn its place by shipping in a real product, then grew it into a dedicated-team product with measured adoption.',
    stats: [
      { value: '13', label: 'Applications Using It' },
      { value: '40+', label: 'Components Shipped' },
      { value: '>90%', label: 'Coverage Goal' },
    ],
    challengeTitle: 'A design system isn’t a project — it’s a product.',
    challengeBody:
      'Nimbus didn’t have a dedicated team or an obvious first customer when I joined. To avoid building in a vacuum, we paired it with the redesign of the native mobile apps — Android and iOS that hadn’t been touched in years, with feature gaps versus desktop and an outdated brand application. Every component had to ship inside that redesign to earn its place.',
    process: [
      {
        title: 'Discovery & Benchmarks',
        description:
          'Studied recognized design systems to define structure, token model, and principles aligned with the new brand work.',
      },
      {
        title: 'Foundations',
        description:
          'Established tokens for color, typography, and spacing — and the design-and-engineering contract that would hold them together.',
      },
      {
        title: 'Component Craft',
        description:
          'Built atomic, composite, and pattern components in tandem with the app redesign cycles, with design and dev paired on each one.',
      },
      {
        title: 'Adoption Metrics',
        description:
          'Defined Coverage (≥90%) and Overrides (≤10%) metrics to track real adoption and surface where Nimbus was falling short.',
      },
    ],
    outcomeTitle: 'A product, not a project.',
    outcomeBody:
      'Treating Nimbus as a product earned it a dedicated team and a measurable adoption story. As coverage scaled, so did the case for the investment — and the bar for design and code quality across the company.',
    outcomeBullets: [
      '13 applications adopting Nimbus across mobile and desktop',
      '40+ atomic, composite, and pattern components shipped',
      'Dedicated team formed: 2 product designers + 1 specialist front-end',
      'Coverage and Overrides metrics tracking real adoption',
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
