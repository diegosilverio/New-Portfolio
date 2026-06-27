export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Learning {
  title: string;
  body: string;
}

export interface Decision {
  body?: string;
  points: string[];
}

export interface Execution {
  title: string;
  body: string;
  bullets?: string[];
}

export interface Guidelines {
  title: string;
  body: string;
  items: { title: string; description: string }[];
  closingTitle?: string;
  closingBody?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  description: string;
  link?: string;

  // Meta
  role: string;
  company: string;
  scope: string;
  tagline: string;

  // Overview
  overview: string;
  highlights: string[];
  stats: ProjectStat[];

  // Challenge
  challengeTitle: string;
  challengeBody: string;

  // Decision points (optional)
  decision?: Decision;

  // Goals
  goals: string[];

  // Process
  processIntro: string;
  processFlow?: string;
  process: ProcessStep[];

  // Execution
  execution: Execution;

  // Guidelines (optional — Itaucard)
  guidelines?: Guidelines;

  // Results
  outcomeTitle: string;
  outcomeBody: string;
  outcomeBullets: string[];
  outcomeImage?: string;

  // Learnings
  learnings: Learning[];
}

export const projects: Project[] = [
  {
    id: 'nuvem-envio',
    title: 'Nuvem Envio',
    year: '2023',
    image: '/projects/nuvem-envio.svg',
    description:
      'Auto-activating the logistics service inside Tiendanube\'s free-plan onboarding',
    role: 'Design Manager',
    company: 'Tiendanube',
    scope: 'Product Strategy, Onboarding, Cross-team Design',
    tagline:
      'Turning logistics from an opt-in product into part of every seller\'s onboarding — in four weeks.',
    overview:
      'Nuvem Envio is the logistics tool inside the Tiendanube platform — what sellers use to collect and ship products to their customers. Because it lives inside the platform, only existing sellers can reach it. As design manager for the Logistics Services BU, I set the guidelines for the experience while guiding the senior product designer on the tribe, working hand in hand with product and engineering.',
    highlights: [
      'Logistics Services — a business unit of the company',
      'A product embedded inside the main platform',
      '~1.3k active sellers per month',
      'Team: 1 designer, 1 front-end and 3 back-end engineers',
    ],
    stats: [
      { value: '4 wks', label: 'Discovery to Production' },
      { value: '+2pp', label: 'Onboarding Adoption' },
      { value: '−16%', label: 'Days to First Shipment' },
    ],
    challengeTitle: 'Bundle a paid product into the free plan — without rebuilding both.',
    challengeBody:
      'The company decided to seed the free basic plan with a starter package of products and services to attract more sellers and grow the entry-level base. These would be activated automatically — a shift from the old model, where sellers opted in on demand. The question: how might we automatically activate the logistics services during the onboarding journey of free-plan users?',
    goals: [
      'Map the platform\'s current onboarding journey.',
      'Create the automatic activation flow during onboarding.',
      'Inform sellers about the logistics services along the way.',
    ],
    processIntro:
      'We kicked off together with product and engineering because we had real doubts about the technical and business viability of activating automatically during onboarding. The problem was well defined and the journey well mapped, so the work stayed mostly linear. I sat down early with the designer and the product and engineering leads to agree on the approach and on how to split or reduce scope as cleanly as possible.',
    processFlow:
      'Problem → Discovery → Creative sessions → Design → Prototype → Test → Hand over to build',
    process: [
      {
        title: 'Initial Alignment',
        description:
          'Got product, design, and engineering on the same page about technical and business viability before sketching a single screen.',
      },
      {
        title: 'Discovery & Mapping',
        description:
          'Mapped how the product fit inside the platform\'s onboarding to find the integration points worth fighting for.',
      },
      {
        title: 'Three-Path Decision',
        description:
          'Scoped three options — ideal, reduced, and minimum — then chose the simplest path that still delivered real value.',
      },
      {
        title: 'Build & Hand-off',
        description:
          'Designed with the existing design system, prototyped, tested, and handed off to engineering in one tight cycle.',
      },
    ],
    execution: {
      title: 'Pick the path that ships value fastest.',
      body:
        'After the initial discussion, three routes were clear — from the most complete and complex to the simplest. Laying them out let everyone weigh the direction and surface risks before committing, and in the end we chose the simplest route: the one that would reach users fastest. The solution then connected three layers — the Tiendanube platform, the Nuvem Envio product, and the integration between them — with the experience designed across each.',
      bullets: [
        'Option A — Ideal experience, fully integrated into the platform',
        'Option B — Reduced scope, fully integrated into the platform',
        'Option C — Minimum experience, partially integrated (chosen)',
      ],
    },
    outcomeTitle: 'Shipped in four weeks, lifted adoption.',
    outcomeBody:
      'From discovery to production in four weeks — the close collaboration between design, product, and engineering was what got the improvement to customers so quickly. Onboarding adoption rose ~2pp, from 3% to 5%. We fell short of the 6% target, but improved conversion and learned a lot about how the journey and product are perceived. As a side effect, average days to first shipment dropped from 21 to 17.',
    outcomeBullets: [
      'Four weeks from discovery to production deploy',
      'Onboarding adoption rose +2pp (3% → 5%)',
      'Days to first shipment cut from 21 to 17 (−16%)',
      'Activation flow built almost entirely from the existing design system',
    ],
    outcomeImage: '/projects/nuvem-envio.svg',
    learnings: [
      {
        title: 'Do more with the data the metrics generate.',
        body:
          'We\'re clear on our objectives and monitor the metrics this project moved, but I believe we can evaluate the impact of our work in finer detail.',
      },
      {
        title: 'Be explicit about platform–product connections.',
        body:
          'Discovery took longer than expected just to understand how our product fit into the main platform\'s onboarding. Building that view up front would have saved time.',
      },
      {
        title: 'Lean on the design system for speed.',
        body:
          'Deciding early to build the activation journey almost entirely from our design system paid off — it optimised both the design and the engineering work.',
      },
    ],
  },
  {
    id: 'itaucard',
    title: 'Itaucard',
    year: '2018',
    image: '/projects/itaucard.svg',
    description:
      'New home screen and structure guidelines for the credit card app of Latin America\'s largest bank',
    role: 'Design Manager',
    company: 'Itaú-Unibanco',
    scope: 'Mobile Design, Product Strategy, Guidelines',
    tagline:
      'Restructuring the home screen of a credit card app used by 7M Brazilians — and the guidelines to keep it evolving.',
    overview:
      'Itaucard is the credit card app for Itaú-Unibanco, the largest bank in Latin America, with a ~10M card base and roughly 7M active on iOS and Android. The unit ran four tribes across the end-to-end card journey. As Design Manager inside the Retention tribe — the one most responsible for the apps and the home flow — I led a focused effort with a Group Product Manager and a PD specialist to restructure the home screen and hand the seven squads the guidelines they\'d need to keep evolving it after we left.',
    highlights: [
      'Credit card unit of Itaú, Latin America\'s largest bank',
      'Native Android and iOS apps',
      '~7M active users across both',
      '7 squads responsible for the apps',
      'Design team of 9 — 4 of them in this tribe',
    ],
    stats: [
      { value: '7M', label: 'Active App Users' },
      { value: '3×', label: 'Virtual Card Access' },
      { value: '82%', label: 'Positive Feedback' },
    ],
    challengeTitle: 'Important features were hidden in plain sight.',
    challengeBody:
      'Engagement was low and customers couldn\'t easily find features on the home screen — generating support tickets and burying tools that mattered to the business. The home surfaced and buried a long list: card details, limits, bills, activity, installments, loans, rewards, virtual card, temporary lock, benefits, and more. The virtual card was the clearest case — a security tool people actively requested, sitting at just a 6.1% access rate. How might we make these important features easier to find?',
    decision: {
      points: [
        'Improving the home screen wasn\'t a business priority.',
        'We had strong customer insight that justified the work.',
        'The home\'s structure was limiting the apps\' evolution.',
        'The GPM and I chose to start a short project with a PD specialist.',
      ],
    },
    goals: [
      'Give visibility to features that mattered to users.',
      'Make the structure of the home more flexible.',
      'Generate product learnings for the tribe.',
    ],
    processIntro:
      'To move quickly we ran a short cycle — delivering value fast and producing results that would justify scaling the work across the whole app. My job was to lead the process with the PD specialist and, above all, define the app guidelines so the tribes could absorb them into their squads\' routines. We kept the whole design team in the loop and opened the creative sessions to other roles who wanted to take part. With the problem, data, and decision stages already done, we set a two-week window for creative sessions, execution, and hand-off.',
    processFlow:
      'Problem → Data collection → Decision → Creative sessions → Execution → Guidelines → Hand over to teams',
    process: [
      {
        title: 'Problem & Data',
        description:
          'Mapped feature-access metrics, support tickets, and qualitative research to size the engagement gap and rank the features hiding on the home.',
      },
      {
        title: 'Decision & Goals',
        description:
          'Aligned with the GPM on a two-week intervention with three goals: surface key features, make the structure flexible, generate learnings.',
      },
      {
        title: 'Creative Sessions',
        description:
          'Ran open design crits with the broader team to test layouts that kept the card in the spotlight and reused existing components.',
      },
      {
        title: 'Guidelines & Hand-off',
        description:
          'Delivered a home-screen roadmap, a squad responsibility guide, and an evolution map so all seven squads could continue the work.',
      },
    ],
    execution: {
      title: 'Designed for the engineering we actually had.',
      body:
        'Explorations moved from study and draft into a before / study / after comparison of the home, with accessibility checked along the way. Engineering came back with a three-month estimate and only one part-time front-end available — so we changed the implementation strategy: reuse existing screens, reduce the number of API endpoints, and limit the impact on the current codebase. That cut development from three months to one (dev, tests, QA, deploy), and we rolled out to 250 selected beta testers to keep risk under control.',
      bullets: [
        'Accessibility checks: contrast, reading order, overall a11y',
        'Reused screens and trimmed API endpoints to fit the codebase',
        'Development cut from 3 months to 1',
        'Controlled rollout to 250 beta testers',
      ],
    },
    guidelines: {
      title: 'Tools to keep the apps evolving.',
      body:
        'The deliverable of this stage was a set of guidelines for every squad — and especially designers — to continue the work and scale the UI improvements across the apps. We handed over three tools.',
      items: [
        {
          title: 'Roadmap',
          description: 'A roadmap for the evolution of the home screen.',
        },
        {
          title: 'Guide',
          description:
            'A guide to each squad\'s area of responsibility within the apps\' architecture — Welcome, Manage, Pay, Use, Config, Rewards, Information, Search, FAQ, and Content.',
        },
        {
          title: 'Evolution',
          description: 'A suggestion for how the other areas of the apps could evolve.',
        },
      ],
      closingTitle: '…and how is it today?',
      closingBody:
        'Years later the product looks a little different from what we imagined. A product is a living organism and gains new paths as it\'s enhanced. Guidelines matter because they show what\'s possible — but they must not restrict the product\'s evolution.',
    },
    outcomeTitle: 'Visibility, validated by data.',
    outcomeBody:
      'The new home shipped to the 250-user beta. Virtual card access jumped from 6% to 18% — about 6% via the services area and 12% via the new home button, tripling the original rate. Of the beta group, 53% answered the feedback survey, and 82% of them rated the experience "great" or "good."',
    outcomeBullets: [
      'Virtual card access rose from 6% to 18% — a 3× lift',
      '82% of survey respondents rated the new home great or good',
      'Engineering scope cut from 3 months to 1 with a part-time front-end',
      'Guidelines adopted by 7 squads across the credit card unit',
    ],
    outcomeImage: '/projects/itaucard.svg',
    learnings: [
      {
        title: 'Guidelines for the routine of designers and PMs.',
        body:
          'Before this, designers and PMs struggled to understand each squad\'s responsibilities within the app. The guideline gave them that view — and proved valuable both during and after the project.',
      },
      {
        title: 'Involve engineering in the early stages of design.',
        body:
          'Getting engineering in early to assess feasibility was a real difficulty. The lesson: bring them in from the start to avoid rework and replanning.',
      },
      {
        title: 'Designers must master data and results.',
        body:
          'Metric-driven data was essential to justify the work. We trained the team to own the metrics and use them as part of their decision-making argument.',
      },
    ],
  },
  {
    id: 'nuvemshop-partners',
    title: 'Tiendanube Partners',
    year: '2021',
    image: '/projects/nuvemshop-partners.svg',
    description:
      'Redesign and migration of Admin for Partners — unmerged from the Tiendanube core',
    role: 'Design Manager',
    company: 'Tiendanube',
    scope: 'Platform Design, Migration, Research',
    tagline:
      'Unmerging Tiendanube\'s partner admin from the core — and shipping it in 8 months.',
    overview:
      'Admin for Partners is the main tool partners use to manage their relationship with Tiendanube — withdrawing commissions, publishing apps to the app store, and tracking the stores created through their referrals. The partner base is wide, from software houses to affiliates. As Design Manager in the Ecosystem BU I led a team of four product designers, partnering with three front-end and four back-end engineers; given the demand, I also worked hands-on in execution alongside the Admin for Partners squad.',
    highlights: [
      'Ecosystem — a business unit of the company',
      'Admin for Partners is the main system',
      '~6k active users per month',
      'Team being built: 4 designers, 3 front-end and 4 back-end engineers',
    ],
    stats: [
      { value: '8 mo', label: 'Full Migration' },
      { value: '100%', label: 'Partners Migrated' },
      { value: '4.5', label: 'Satisfaction Score' },
    ],
    challengeTitle: 'A legacy admin fused to the core platform.',
    challengeBody:
      'The old administrator was built inside the Tiendanube core and inherited all of its dependencies — authentication among them — so every change was coupled and risky. That coupling created barriers to delivering more value to partners. In short: the legacy system was too old, merged into the core, and restricting any further improvement.',
    decision: {
      body:
        'Partners and our own operation told us the admin had many problems that disrupted routines and generated complaints. To ship a lot of improvements quickly, we first had to move the system onto new technology, unmerged from the core.',
      points: [
        'Many complaints from partners about the legacy admin.',
        'Unmerge from the core to gain speed and shed dependencies.',
        'Add only a few high-impact wins — like mobile-friendly — to finish fast.',
        'Ran qualitative research with ~30 partners to prioritise what fit the migration.',
      ],
    },
    goals: [
      'Redesign the system with small but impactful changes from the baseline.',
      'Use the new design system as the base of the redesign.',
      'Apply low-hanging fruit to add real value for partners.',
    ],
    processIntro:
      'We started together with product and engineering, factoring in contributions from the business area, decisions taken jointly, and the research with partners. From there we ran a continuous cycle inside the tribe to advance the Admin for Partners flows and hand them to engineering. To give visibility into every flow we needed to migrate — and the status of each — I built a migration plan from the design discipline\'s point of view, reported weekly to the whole tribe. It also gave designers clear ownership and more autonomy over the work.',
    processFlow:
      'Inputs from business → Research → Decision → Creative sessions → Design → Prototype → Hand over to build',
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
    execution: {
      title: 'Rebuilt the core flows, mobile and desktop.',
      body:
        'The redesign covered the core flows across both mobile and desktop, leaning on the new design system and folding in the low-hanging-fruit improvements partners had asked for — a responsive, mobile-friendly experience chief among them. A before/after comparison set the original system next to the redesign.',
      bullets: [
        'Login — mobile / desktop',
        'Home screen — mobile / desktop',
        'App create form — mobile / desktop',
        'Apps details — mobile / desktop',
        'Balance details — mobile / desktop',
      ],
    },
    outcomeTitle: 'Full migration, zero rollback.',
    outcomeBody:
      'We migrated 100% of the old platform\'s functionalities to the new one, opening room for improvements and new features. The entire partner base moved in eight months — no rollbacks, no parallel accounts on the old platform. The new Admin hit a 4.5 satisfaction score, meeting our goal of matching or beating the previous experience, and surfaced the next frictions to address.',
    outcomeBullets: [
      '100% of functionalities migrated to the new platform',
      '100% of partners moved without rollback',
      '4.5 satisfaction score after migration',
      'Mobile-friendly admin — a long-standing partner request shipped',
    ],
    outcomeImage: '/projects/nuvemshop-partners.svg',
    learnings: [
      {
        title: 'Break deliveries into smaller parts.',
        body:
          'To move faster and gather more feedback, we could have broken the deliverables down further while keeping the overall migration goal in sight.',
      },
      {
        title: 'Explore more MVPs during migration.',
        body:
          'We put heavy effort into shipping full features; faster, smaller deliveries would have let us test critical ones with selected users.',
      },
      {
        title: 'Explore the design system more.',
        body:
          'We used the DS throughout but customised it in places. Leaning on it harder — and letting the UI evolve post-migration — would have been faster.',
      },
    ],
  },
  {
    id: 'nimbus-design-system',
    title: 'Nimbus Design System',
    year: '2021–22',
    image: '/projects/nimbus-ds.svg',
    link: 'https://nimbus.nuvemshop.com.br/',
    description:
      'Tiendanube\'s product design system — born inside a mobile app redesign',
    role: 'Design Manager',
    company: 'Tiendanube',
    scope: 'Design System, Tokens, Documentation',
    tagline:
      'A design system born inside an app redesign — built to scale across Tiendanube\'s product ecosystem.',
    overview:
      'Nimbus is Tiendanube\'s product design system, built primarily for internal teams and for external partners integrating into the ecosystem. I\'m responsible for it alongside an engineering manager, with two senior product designers and a front-end developer specialised in design systems. We treat Nimbus as a product in its own right — knowing who our users are, what they need, what to prioritise, and which metrics measure our impact.',
    highlights: [
      'Desktop and mobile applications using the design system',
      'Focused on internal teams and partners',
      'Supports the new branding strategy',
      'Dedicated team: 2 senior designers + 1 specialist front-end, with an EM',
    ],
    stats: [
      { value: '13', label: 'Applications Using It' },
      { value: '40+', label: 'Components Shipped' },
      { value: '>90%', label: 'Coverage Goal' },
    ],
    challengeTitle: 'A design system isn\'t a project — it\'s a product.',
    challengeBody:
      'How might we implement the new brand definitions in a scalable way? To kick-start Nimbus we built it together with our mobile app redesign — a native Android and iOS app that hadn\'t been updated in years, with a feature gap versus desktop and an outdated brand. Pairing the two meant the DS had a real use case from day one, so every component we created had to actually be useful for the redesign.',
    goals: [
      'Update visuals and usability in line with the new brand.',
      'Boost the scalability of the new mobile app.',
      'Create a design and dev basis for other applications and products.',
    ],
    processIntro:
      'We split the work into two tracks — one for the app redesign, one for the design system. With no dedicated DS team at the start, the same people handled both design and dev; after discovery, the redesign was broken into smaller parts built in cycles. As it was our first design system, we did thorough research into market practices, common structures, and the most-used technologies, benchmarking recognised design systems to define what a world-class DS would require.',
    processFlow:
      'App redesign: Problem → Discovery → Creative sessions → Design → Prototype → Hand off  ·  DS: Discovery → Exploration → Component craft → Release',
    process: [
      {
        title: 'Discovery & Benchmarks',
        description:
          'Studied recognised design systems to define structure, token model, and principles aligned with the new brand work.',
      },
      {
        title: 'Foundations',
        description:
          'Established tokens for color, typography, and spacing — and the design-and-engineering contract that would hold them together.',
      },
      {
        title: 'Component Craft',
        description:
          'Built atomic, composite, and pattern components in tandem with the app redesign cycles, design and dev paired on each.',
      },
      {
        title: 'Adoption Metrics',
        description:
          'Defined Coverage (≥90%) and Overrides (≤10%) to track real adoption and surface where Nimbus was falling short.',
      },
    ],
    execution: {
      title: 'Validated by shipping real flows.',
      body:
        'We validated the system by redesigning real flows and comparing them across states — old mobile, desktop responsive, and new mobile — for key screens like the order flow and the dashboard. Building components against live screens kept them honest and made sure each one earned its place.',
      bullets: [
        'Order flow — old mobile / desktop responsive / new mobile',
        'Dashboard — old mobile / desktop responsive / new mobile',
        'Coverage metric — % of an app\'s front-end that is Nimbus (goal ≥90%)',
        'Overrides metric — % of DS components customised in apps (goal ≤10%)',
      ],
    },
    outcomeTitle: 'A product, not a project.',
    outcomeBody:
      'The redesign isn\'t finished, but we\'ve already shipped 40+ atomic, composite, and pattern components, and 13 mobile and desktop applications are using Nimbus — four teams adopting it without trouble. As usage scaled, we justified a dedicated team of two designers and a front-end dev, crucial for focus and pace. Coverage and Overrides metrics now give us an accurate read on adoption and where to improve.',
    outcomeBullets: [
      '13 applications adopting Nimbus across mobile and desktop',
      '40+ atomic, composite, and pattern components shipped',
      'Dedicated team formed: 2 product designers + 1 specialist front-end',
      'Coverage (≥90%) and Overrides (≤10%) metrics tracking real adoption',
    ],
    outcomeImage: '/projects/nimbus-ds.svg',
    learnings: [
      {
        title: 'Dig deeper into what the metrics reveal.',
        body:
          'The data is rich — it shows which use cases the DS isn\'t meeting and where to improve to increase Nimbus adoption.',
      },
      {
        title: 'Understand Nimbus\'s impact on end users.',
        body:
          'We\'re collecting feedback from teams on how end users receive the new interfaces — important input for prioritising improvements.',
      },
      {
        title: 'Raise the quality bar from the start.',
        body:
          'We\'re revisiting early components as we learn, applying more flexible, easier-to-use ways of building them.',
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getNextProject(slug: string): Project {
  const i = projects.findIndex((p) => p.id === slug);
  return projects[(i + 1) % projects.length];
}
