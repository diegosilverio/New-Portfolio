import type { Locale } from './i18n/config';
import { managementCasesPt, managementCaseLabelsPt } from './management-cases.pt';

// Leadership cases live inside the management area, attached to a role.
// The structure follows how a leadership story is told (mandate, decisions,
// operating system, before/after) rather than the project case template.

export interface ManagementCase {
  id: string;
  title: string;
  tagline: string;
  company: string;
  meta: { label: string; value: string }[];
  stats: { value: string; label: string }[];
  overview: { title: string; paragraphs: string[] };
  challenge: { title: string; paragraphs: string[]; tradeoff: string };
  mandate: { title: string; asked: string; pursued: string; notDone: string };
  approach: {
    title: string;
    diagnosis: string;
    steps: { title: string; body: string }[];
    notes: { title: string; body: string }[];
  };
  practices: {
    title: string;
    intro?: string;
    groups: { title: string; items: { title: string; body: string }[] }[];
    images: { src: string; caption: string }[];
  };
  outcomes: {
    title: string;
    changes: { area: string; before?: string; after: string }[];
    people: string[];
    perception: string[];
    quote?: { text: string; author: string };
    limitation?: string;
    image?: { src: string; caption: string };
  };
  learnings: { title: string; items: { title: string; body: string }[] };
}

export const managementCaseLabelsEn = {
  eyebrow: 'Leadership Case',
  context: 'Context',
  challenge: 'Challenge',
  tradeoff: 'The trade-off',
  mandate: 'Mandate & Goals',
  asked: 'What I was asked',
  pursued: 'What I pursued',
  notDone: 'What I chose not to do',
  approach: 'Approach',
  diagnosis: 'Diagnosis',
  decisions: 'Decisions, in order',
  practices: 'Practices & Artifacts',
  outcomes: 'Outcomes',
  operational: 'Operational',
  before: 'Before',
  after: 'After',
  people: 'People',
  perception: 'Perception',
  limitation: 'Limitation',
  learnings: 'Learnings',
  next: 'Next leadership case',
  back: 'Back to Managing Design Teams',
  cases: 'Leadership cases',
  readCase: 'Read the case',
};

export type ManagementCaseLabels = typeof managementCaseLabelsEn;

const img = (id: string, name: string) => `/images/management/${id}/${id}-${name}.svg`;

export const managementCases: ManagementCase[] = [
  {
    id: 'design-ops',
    title: 'Scaling a design team with AI, not headcount',
    tagline:
      'Rebuilt the team and its operations, then used AI to scale capacity on a fixed budget.',
    company: 'SuperSummary',
    meta: [
      {
        label: 'Role',
        value:
          'Lead Product Designer: people, design system, research ops, tooling, process and hiring',
      },
      { label: 'Period', value: 'Sep 2024 – present' },
      {
        label: 'Company',
        value: 'SuperSummary: bootstrapped US edtech, B2C subscription, ~40 people',
      },
      {
        label: 'Team',
        value: '3 today (Lead, Senior, Junior); peak of 4. Rebuilt with 3 hires in one year',
      },
    ],
    stats: [
      { value: '0', label: 'Design-caused delays since Dec 2024' },
      { value: '3', label: 'Hires in one year, same headcount' },
      { value: '3 : 13', label: 'Designers to engineers' },
    ],
    overview: {
      title: 'Three designers for thirteen engineers.',
      paragraphs: [
        'SuperSummary is a bootstrapped US edtech company with a B2C subscription product and about 40 people. Engineering has 13 people; Product has a Head of Product and 2 PMs. I joined in September 2024 as Lead Product Designer, reporting to the CEO.',
        'The Head of Product sets direction for the backlog and approves it. I own how design works: direction, team support, operations, and hands-on execution on specific fronts. The team started with me, a Senior and a Mid-level designer. It peaked at 4 and is 3 today, covering up to 4 product fronts at a time.',
      ],
    },
    challenge: {
      title: 'Design had become engineering’s bottleneck.',
      paragraphs: [
        'In my first three months I found a team with no defined process. PMs and engineers raised the same three complaints: late deliveries, low quality and an inconsistent experience. PMs needed several follow-ups to get a usable delivery. The visual language I inherited was outdated.',
        'The risk went beyond design. Engineering was waiting on design, squads were shipping late, and PMs and leadership no longer trusted design’s deliveries.',
      ],
      tradeoff:
        'Fix the people or the system first? A better system run by a team that wasn’t ready for structure would not change the outcome. So I chose to understand how each designer worked before building anything, and accepted that process, tooling and research would wait.',
    },
    mandate: {
      title: 'Trust first, scale second.',
      asked:
        'A structured design team, with AI used in internal processes to scale productive capacity, on a fixed budget.',
      pursued:
        'Restore the company’s trust in design, and make delivery quality consistently high.',
      notDone:
        'Grow the team permanently. I also postponed the design system and research until the team was in place.',
    },
    approach: {
      title: 'People, then delivery, then scale.',
      diagnosis:
        'For about a month I interviewed 6 people across PMs, engineers and leadership. I also reviewed Figma files, squad rituals and handoffs, and looked at how each designer executed, collaborated and delivered. My conclusion: the team had low maturity in both delivery and operations.',
      steps: [
        {
          title: 'Team',
          body: 'Restructured the team: 3 hires in one year, using hiring criteria I defined.',
        },
        {
          title: 'Delivery process',
          body: 'PM and engineering trust depended on predictable delivery, so I fixed that before discovery.',
        },
        {
          title: 'Discovery & performance',
          body: 'A discovery process, then performance criteria, which became the career ladder.',
        },
        {
          title: 'AI tools, last',
          body: 'Each tool was built on top of a manual process that already existed, or a need the process did not cover. Automating a process that didn’t exist yet would have meant guessing.',
        },
      ],
      notes: [
        {
          title: 'Built, not bought',
          body: 'I built the tools myself. The market options I evaluated failed on price or on fit with how we work, and none solved both.',
        },
        {
          title: 'Resistance',
          body: 'The team wanted to use AI but struggled to fit it into daily work. I tied each tool to a step of the process and to our critique rituals. The AI reviewer became a prerequisite for presenting at design critique and for the final handoff check.',
        },
      ],
    },
    practices: {
      title: 'An operating system for a small team.',
      intro:
        'A design process with tools mapped to each step, a career ladder, a skill map for hiring, Design System 2.0, and AI tools that build and review work against it. These are the rituals that stuck after testing several formats.',
      groups: [
        {
          title: 'Rituals',
          items: [
            {
              title: 'Weekly design critique',
              body: 'The design team, sometimes with a PM or leadership.',
            },
            {
              title: '1:1s',
              body: 'Career, delivery and, at the right time of year, performance reviews.',
            },
            {
              title: 'Handoff review',
              body: 'When a project is ready, the designer posts it in the design channel for a team check.',
            },
          ],
        },
        {
          title: 'Artifacts',
          items: [
            {
              title: 'Career Ladder',
              body: 'A Y-model with an IC track (Junior to Staff) and a management track. It has 9 competencies, including AI-Augmented Design.',
            },
            {
              title: 'Skill Map',
              body: 'The matrix I used to compare candidates against the team’s gaps.',
            },
            {
              title: 'UX Maker',
              body: 'An AI assistant that builds screens in Figma using only DS 2.0 tokens and components.',
            },
            {
              title: 'DS to Code',
              body: 'A skill in the engineering repository that maps DS 2.0 tokens and components to production code.',
            },
          ],
        },
      ],
      images: [
        { src: img('design-ops', 'career-ladder'), caption: 'Career Ladder: IC and management tracks, 9 competencies' },
        { src: img('design-ops', 'skill-map'), caption: 'Skill Map template used to compare candidates against team gaps' },
        { src: img('design-ops', 'ux-maker'), caption: 'UX Maker building a screen in Figma from DS 2.0 components' },
      ],
    },
    outcomes: {
      title: 'Design stopped being the bottleneck.',
      changes: [
        {
          area: 'Delays',
          before: 'Frequent complaints',
          after: 'No design-caused delays since Dec 2024, per PMs and squad planning',
        },
        {
          area: 'Follow-ups',
          before: 'PMs chasing deliveries',
          after: 'PMs reported fewer follow-ups',
        },
        {
          area: 'Tracking',
          before: 'No defined process',
          after: 'Design delivery managed in Linear',
        },
        {
          area: 'Review',
          before: 'Ad hoc',
          after: 'AI review required before critique and handoff',
        },
        {
          area: 'Design to code',
          after: 'DS to Code is part of the engineering repository',
        },
      ],
      people: [
        'The Senior designer (2+ years on the team) leads design for her squad alone and supports the PM in quarterly planning.',
        'The Junior designer (1+ year) owns projects as the only designer, without support from a Senior or from me.',
        'Designers now build their own AI tools.',
        'The team uses the AI tools almost daily.',
      ],
      perception: [],
      quote: {
        text: 'You overhauled the team, hired new designers, established our team’s operations…',
        author: 'Product leadership',
      },
    },
    learnings: {
      title: 'People before system.',
      items: [
        {
          title: 'Hiring for skill isn’t enough.',
          body: 'I hired for depth of skill and gave too little weight to matching design scope to what the squad needed to ship. Our interviews now test that calibration directly.',
        },
        {
          title: 'Research waited too long.',
          body: 'Postponing it was the right call, but it stayed paused longer than it should have.',
        },
        {
          title: 'People before system.',
          body: 'A process only scales the maturity of the people running it. Fixing the team first is what made the system work.',
        },
      ],
    },
  },
  {
    id: 'research-ops',
    title: 'Research Ops at SuperSummary',
    tagline:
      'Restarting user research and automating its operation, so interviews became part of how the company works instead of a task owned by design.',
    company: 'SuperSummary',
    meta: [
      { label: 'Role', value: 'Lead Product Designer' },
      { label: 'Period', value: 'Oct 2024 – present' },
      { label: 'Company', value: 'SuperSummary' },
      {
        label: 'Team',
        value: '3 product designers reporting to me; no dedicated researcher',
      },
      { label: 'Scope', value: 'Research Ops, Continuous Discovery, AI workflows' },
    ],
    stats: [
      { value: '285', label: 'Interviews conducted since October 2024' },
      { value: '~15 → 2', label: 'Manual steps per interview' },
      { value: '6', label: 'Functions running interviews, up from design alone' },
    ],
    overview: {
      title: 'Research was design’s job, with no researcher.',
      paragraphs: [
        'SuperSummary is a bootstrapped US edtech company with about 40 people and a B2C subscription for study guides. I lead a team of three product designers, report to the CEO, and work with the Head of Product, PMs and engineering across three squads. There is no dedicated researcher: research is design’s responsibility.',
        'In October 2024, the CEO asked to put the company back in regular contact with users. I designed the research operation, wrote its documentation and built its automations myself. The interviews were run by people across the company.',
      ],
    },
    challenge: {
      title: 'A company that knew what users did, but not why.',
      paragraphs: [
        'Product decisions relied on quantitative data and benchmarks. Qualitative research happened in bursts: from 2023 to September 2024 there were 43 interviews in 91 weeks, and none in the four months before the restart.',
        'What had been learned was spread across six tools: Hotjar, Dovetail, BuildBetter, Slab, Airtable and Google Drive. The knowledge existed but was hard to reach. PMs didn’t use it, and it stayed with whoever had run each study. Dovetail and BuildBetter cost the most and added the least.',
      ],
      tradeoff:
        'What was at risk was opportunity: new content, new features and improvements to what was already built. The trade-off was time, not money. Leadership backed the budget; the cost was squad delivery time and the time of three designers already allocated to squads.',
    },
    mandate: {
      title: 'One conversation a week, at a cost squads could carry.',
      asked: 'Talk to users at least once a week.',
      pursued:
        'A continuous discovery cadence cheap enough to run inside squad routines and not dependent on design to happen.',
      notDone: 'Keep an expensive, hard-to-access repository like Dovetail.',
    },
    approach: {
      title: 'Process first, automation second.',
      diagnosis:
        'I talked to the CEO, the design team and the PMs, and reviewed the old tools. One interview took about 15 manual steps across recruiting, scheduling, recording, incentives and follow-up.',
      steps: [
        {
          title: 'Fix the practice before automating it',
          body: 'For the first ten months I focused on recruiting, scripts, interview execution and a continuous discovery mindset in the squads. Automating a process nobody ran yet would only have automated the confusion.',
        },
        {
          title: 'Build on what we had, prove it, then scale',
          body: 'No ready-made platform covered every step we wanted to automate. I built a first automation with tools the company already used (Calendly, Zoom, Notion, Drive, Claude, Slack) to test whether it worked, and made it the official pipeline in August 2025.',
        },
        {
          title: 'Keep a human in the loop',
          body: 'AI drafts each interview snapshot, and a person reviews it before it enters the user base.',
        },
        {
          title: 'Open interviews to everyone',
          body: 'More interviewers meant design stopped being the bottleneck.',
        },
      ],
      notes: [
        {
          title: 'Resistance',
          body: 'The real resistance wasn’t the pipeline but availability: some PMs didn’t want to take part. The Head of Product aligned with them on why their participation mattered.',
        },
      ],
    },
    practices: {
      title: 'A system anyone can pick up from the documentation.',
      groups: [
        {
          title: 'Operating system',
          items: [
            {
              title: 'Automated pipeline',
              body: 'Recruiting via Sprig, scheduling, recording, transcription, archiving, incentives and weekly summaries run on their own. Per interview, the only manual steps are generating and reviewing the snapshot.',
            },
            {
              title: 'Handbooks',
              body: 'Research planning, interviews, surveys (Sprig) and usability tests (Lyssna), with a method-by-question matrix and sample-size guidance.',
            },
            {
              title: 'AI workflows',
              body: 'Claude Projects for snapshots, multi-interview analysis and survey analysis, plus a shared presentation template.',
            },
            {
              title: 'Rituals',
              body: 'Squads ran continuous discovery on their Opportunity Solution Trees; summaries posted weekly to Slack; new interviewers onboarded through the docs and shadowing.',
            },
          ],
        },
      ],
      images: [
        {
          src: img('research-ops', 'pipeline'),
          caption: 'Automated interview pipeline: ~15 manual steps reduced to 2, both for human review of the AI-generated snapshot',
        },
        {
          src: img('research-ops', 'method-matrix'),
          caption: 'Which method for which question: interviews, surveys and usability tests',
        },
        {
          src: img('research-ops', 'repository'),
          caption: 'Six scattered tools consolidated into active sources open to the whole company',
        },
      ],
    },
    outcomes: {
      title: 'Research became a company routine, run by more than design.',
      changes: [
        {
          area: 'Cadence',
          before: '~0.5 interviews/week',
          after: '~4.4/week in the first ten months (59 in the first ten weeks)',
        },
        { area: 'Cost', before: '~15 manual steps per interview', after: '2' },
        {
          area: 'Documentation',
          before: '4% of interviews with a snapshot',
          after: '98% after the pipeline',
        },
        { area: 'No-shows', before: '~30%', after: '~20%' },
        {
          area: 'Repository',
          before: 'Six scattered tools',
          after: 'One repository open to the whole company',
        },
      ],
      people: [
        'From design only to six functions interviewing (PMs, Head of Product, CEO, engineering, design, content) across three squads.',
      ],
      perception: [
        'Interviews validated Author Insights (new content) and the Story Recap and Book Activities features, all launched.',
      ],
      quote: {
        text: 'Diego is the engine behind our qualitative research practice... it’s the connective tissue behind much of our user understanding.',
        author: 'Product peer',
      },
      limitation:
        'After the pipeline launched, volume fell to ~1.3 interviews/week, with at least one interview in 41% of weeks. Our reading is that research scopes became more targeted.',
      image: {
        src: img('research-ops', 'cadence'),
        caption: 'Interviews per quarter, Q4 2024 to Q4 2026',
      },
    },
    learnings: {
      title: 'Automation lowers the cost of research. It doesn’t create the habit.',
      items: [
        {
          title: 'Give the whole OST a cadence, not just the interviews.',
          body: 'Weekly interviews kept us close to users, but synthesis and tree updates still depended on designers, with no rhythm of their own. The bottleneck moved instead of disappearing, and the weekly cadence slipped once the pipeline existed.',
        },
        {
          title: 'Prove it before scaling it.',
          body: 'Testing the automation as a prototype before making it official is what turned a one-person build into a company process.',
        },
        {
          title: 'Start, even without the perfect question.',
          body: 'A generic interview gets a company out of inertia, and that is worth more than waiting for the ideal research goal.',
        },
      ],
    },
  },
  {
    id: 'customer-brain',
    title: 'User Discovery & Customer Brain',
    tagline:
      'Consolidated five years of scattered user research into an AI knowledge base any team can query in minutes.',
    company: 'SuperSummary',
    meta: [
      { label: 'Role', value: 'Lead Product Designer' },
      {
        label: 'Period',
        value: '3-month main phase in 2025; the base keeps expanding',
      },
      { label: 'Company', value: 'SuperSummary: US edtech, B2C subscription' },
      {
        label: 'Team',
        value:
          'Me on research, method and build; product leadership supporting evaluation and adoption',
      },
      {
        label: 'Scope',
        value: 'Product Discovery · Research Synthesis · AI Knowledge Systems',
      },
    ],
    stats: [
      { value: '177', label: 'Interview transcripts (2021–2026) in one base' },
      { value: '30', label: 'Surveys audited with reading rules' },
      { value: 'Days → minutes', label: 'Time to synthesize research' },
    ],
    overview: {
      title: 'Five years of user knowledge, scattered.',
      paragraphs: [
        'The company saw it needed to put users at the center of its decisions, and set out to concentrate the knowledge it already had. What we knew about book readers was spread across five years of interviews, 30 surveys and people’s memories.',
        'I led the discovery and built the Customer Brain on my own: an AI knowledge base now used by around 10 people, from the CEO and Head of Product to PMs, designers and engineers.',
      ],
    },
    challenge: {
      title: 'Years of user research, no way to reach it.',
      paragraphs: [
        'The company had years of interviews and surveys about its users, but no concentrated, democratic way to access them. Decisions were made without evidence, and research was often redone even when the answer already existed inside the company.',
        'Starting a new research round from zero would have taken months. The real gap was access: turning the data we had into knowledge anyone could query, with answers solid enough to support a decision.',
      ],
      tradeoff:
        'Build vs. buy: market research repositories meant cost, seat limits, caps on data consumption and an interface made for researchers. The team needed plain language.',
    },
    mandate: {
      title: 'One source, traceable evidence, actionable output.',
      asked:
        'Consolidate all existing qualitative research and surveys on book readers in a single source.',
      pursued:
        'Ensure every answer carries traceable evidence, and turn findings into business opportunities and next steps.',
      notDone:
        'Include analytics and support tickets. Left out on purpose, due to their complexity and volume.',
    },
    approach: {
      title: 'Infrastructure first, conclusions second.',
      diagnosis:
        'The inputs were 177 unique interview transcripts (2021–2026) and 30 survey reports. Instead of running a new research round, I built the infrastructure first, so personas, market comparisons and recommendations would all come from the same base.',
      steps: [
        {
          title: 'Audit & consolidate',
          body: 'Gathered interviews and surveys into one structured dataset, and wrote reading rules for survey exports whose headline totals and percentages were misleading.',
        },
        {
          title: 'Build the method',
          body: 'Defined the Brain’s role, hard rules, quality standards and a quote-verification gate.',
        },
        {
          title: 'Test & iterate',
          body: 'Ran queries and checked every cited source against the raw data. Team feedback that answers were too long led to three response formats.',
        },
        {
          title: 'Extract findings',
          body: 'Personas, market gaps and a final report. Progress was tracked through checkpoints with product leadership on how the Brain worked and how it was being adopted.',
        },
      ],
      notes: [
        {
          title: 'Depth on demand',
          body: 'One answer format couldn’t serve a quick question and an executive decision.',
        },
        {
          title: 'Rigor over speed',
          body: 'An AI answer without evidence would be read as truth.',
        },
      ],
    },
    practices: {
      title: 'Rigor is the product.',
      intro:
        'The key decision: when evidence is missing, the Brain says so instead of improvising. Answers feed decisions, so they have to survive scrutiny.',
      groups: [
        {
          title: 'Deliverables',
          items: [
            {
              title: 'Customer Brain',
              body: 'A queryable base with three response formats: Simple, Intermediate, Detailed.',
            },
            {
              title: 'Method layer',
              body: 'Hard rules, quality standards, quote verification against raw transcripts.',
            },
            {
              title: 'Survey audit',
              body: 'Reading rules and a register of what the data can’t answer.',
            },
            {
              title: 'Personas & market gaps',
              body: 'Four personas and an underserved audience, younger readers (18–34).',
            },
            {
              title: 'Report & NPS',
              body: 'Known and unknown areas, opportunities, next steps, and a new NPS survey.',
            },
          ],
        },
      ],
      images: [
        {
          src: img('customer-brain', 'personas'),
          caption: 'Four personas extracted from the Brain, each with demographics, behavior and needs',
        },
        {
          src: img('customer-brain', 'query'),
          caption: 'A real query to the Customer Brain',
        },
      ],
    },
    outcomes: {
      title: 'A week of synthesis, now two minutes.',
      changes: [
        { area: 'Synthesis time', before: '5–7 days', after: '~2 minutes per query' },
        { area: 'Adoption', after: '~10 people across 5 functions' },
        { area: 'Living base', after: '+26 transcripts added in Aug 2026, after launch' },
        { area: 'Discovery', after: 'Interview cycles restarted in 2026' },
      ],
      people: [
        'Around 10 people query the Brain, from the CEO and Head of Product to PMs, designers and engineers.',
      ],
      perception: [
        'The Customer Brain became the company’s reference for how book readers perceive and use the product.',
        'Research turned from a scheduled project into an on-demand input to decisions.',
        'Leadership treats the Brain as the standard for research assets that last.',
      ],
      quote: {
        text: 'Diego has been a true champion of the [book reader] audience... his mechanism for collating and presenting these insights, pulled from UX research, was to leverage AI in experimental, creative, and effective new ways.',
        author: 'Product leadership',
      },
      image: {
        src: img('customer-brain', 'outcome'),
        caption: 'Customer Brain outcome',
      },
    },
    learnings: {
      title: 'Measure from day one, match depth to the question.',
      items: [
        {
          title: 'Measure use and quality from the start.',
          body: 'I’d build a feedback loop with the people using the Brain to track usage and answer quality. Today the impact shows up in decisions, but it isn’t counted.',
        },
        {
          title: 'Adjust depth, not the evidence standard.',
          body: 'Not every query needs or expects a deep answer. A short answer still cites its source; it just covers less ground.',
        },
        {
          title: 'Open knowledge, verified answers.',
          body: 'What I carry forward: a source of information open to everyone, with answers verified to the level the person asking needs. Once answers feed decisions, that verification is what makes them usable.',
        },
      ],
    },
  },
];

export function getManagementCases(lang: Locale): ManagementCase[] {
  if (lang === 'en') return managementCases;
  return managementCases.map((c) => ({ ...c, ...managementCasesPt[c.id] }));
}

export function getManagementCase(id: string, lang: Locale) {
  return getManagementCases(lang).find((c) => c.id === id);
}

export function getNextManagementCase(id: string, lang: Locale) {
  const list = getManagementCases(lang);
  const i = list.findIndex((c) => c.id === id);
  return list[(i + 1) % list.length];
}

export function getManagementCaseLabels(lang: Locale): ManagementCaseLabels {
  return lang === 'en' ? managementCaseLabelsEn : managementCaseLabelsPt;
}
