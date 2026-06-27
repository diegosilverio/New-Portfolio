'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const;

const career = [
  {
    role: 'Lead Product Designer',
    company: 'SuperSummary',
    period: 'May/24 – Today',
    description:
      'Edtech startup focused on the American education market. I lead a team of 3 designers across the product, marketing, and innovation squads.',
  },
  {
    role: 'Product Design Manager',
    company: 'Tiendanube',
    period: 'Nov/20 – May/24',
    description:
      'SaaS platform for e-commerce. Manager of the Core and Ecosystem design team.',
  },
  {
    role: 'Product Design Manager',
    company: 'Gerdau',
    period: 'Nov/19 – Nov/20',
    description:
      'Steel industry. Manager of an in-house team and outsourced designers.',
  },
  {
    role: 'UX Design Manager',
    company: 'Itaú Unibanco',
    period: 'Mar/18 – Nov/19',
    description:
      'Banking. Manager of the Credit Card Solutions design team.',
  },
];

const roles = [
  {
    title: 'Lead Product Designer @ SuperSummary',
    period: 'May/24 to Today',
    paragraphs: [
      'I work as Lead Product Designer at SuperSummary, an edtech startup focused on the American education market. I lead a team of 3 designers across the product, marketing, and innovation squads.',
      "I'm also responsible for the research operation, managing every process from recruitment and planning to guidance for execution in the squads. I report directly to the CEO and lead the company's strategic design definitions.",
    ],
    stats: [
      { value: '+150k', label: 'Brands applied to products' },
      { value: '4', label: 'Squads focused on B2C digital products' },
    ],
  },
  {
    title: 'Product Design Manager @ Tiendanube',
    period: 'Nov/20 to May/24',
    paragraphs: [
      'I led a team of 6 designers allocated remotely in agile teams. These teams owned digital products across the core platform and ecosystem domains, focused on the experience of our partners and sellers across different countries.',
      "I was also responsible for the design system team, providing strategic and creative direction to Tiendanube's Nimbus Design System. I partnered with executives and other cross-functional leaders to grow Nimbus adoption across our family of products and our partners.",
    ],
    stats: [
      { value: '115k', label: 'B2B customers' },
      { value: '5', label: 'Countries with operations' },
      { value: '2', label: 'Tribes — core platform & ecosystem' },
      { value: '10', label: 'Squads across the tribes' },
    ],
  },
  {
    title: 'Product Design Manager @ Gerdau',
    period: 'Nov/19 to Nov/20',
    paragraphs: [
      'I led the design chapter and a team of 4 designers allocated in agile teams focused on digital products for clients (B2B and B2C) and on internal digital products. These products were built on the SAP platform and on some customized technologies.',
      'Beyond the design chapter, I supported a change management team driving digital transformation using design methodologies and mindset. As a steel company, this transformation team was focused on bringing digitalization opportunities to manufacturing processes.',
    ],
    stats: [
      { value: '2', label: 'Brands applied to products' },
      { value: '6', label: 'Squads focused on B2B & B2C products' },
    ],
  },
  {
    title: 'UX Design Manager @ Itaú Unibanco',
    period: 'Mar/18 to Nov/19',
    paragraphs: [
      'I had the opportunity to lead a newly formed team of 9 UX designers. We were responsible for the entire experience of digital solutions for credit-card-only customers — across desktop website, mobile website, and Android/iOS apps — as well as a BaaS platform, loyalty programs, and digital wallets (Apple Pay, Samsung Pay, Google Pay, and PayPal).',
      'My responsibility was to lead and grow these designers within their agile teams, work with business and technology leaders toward an integrated digital product strategy, and ensure the design system was applied consistently alongside teams from other segments of the bank.',
    ],
    stats: [
      { value: '~10MM', label: 'B2C clients' },
      { value: '4', label: 'Tribes for credit card solutions' },
      { value: '18', label: 'Squads across the tribes' },
    ],
  },
];

const principles = [
  {
    title: 'Inspiration',
    body: "Inspiration is fundamental to strengthening and continuously evolving design teams. It can come from practical, hands-on examples, from external sources, or from a north star. I find the north star especially powerful — using a visual narrative or a concept to express where we want to go and why. Done well, it gives the team a clear vision, supports creativity, engages members, creates cross-functional alignment, and fosters a culture of continuous learning. That inspiration can also reach stakeholders, building cross-engagement and a shared commitment to excellence in the user experience.",
  },
  {
    title: 'Guidance',
    body: "With consistent, continuous inspiration in place, the next essential step is turning that vision into clear, attainable, executable guidance. The design leader can support this direction with tools — design systems and content guides, for example — that make it tangible and effective in the team's routine and deliveries. Beyond the tools, the leader needs to keep supporting and guiding the team so it never loses the connection between inspiration and the real user experience, guaranteeing consistency, alignment, and the delivery of value.",
  },
  {
    title: 'Impact',
    body: "Alongside inspiration and guidance, the team must have clarity and mastery over the impact of their work — on users, on the business, and on the company's operations. Before each initiative, the designer should define, together with product and engineering, the expected qualitative and quantitative impacts, and then validate after delivery whether those impacts were achieved. Without impact, it's hard to argue for and justify the effort put into discovery and execution. This is how we make design stronger and more relevant to the company and its users.",
  },
];

const designLeadership = [
  {
    title: 'Vision',
    body: "Across the many contexts I've worked in, I created and maintained a short- and long-term design vision, guiding teams toward the experience we wanted to deliver in our products and services.",
  },
  {
    title: 'Consistency',
    body: 'As a manager, I always worked to ensure a consistent experience across different products and services. That consistency was made possible by guidelines and concrete examples of where we wanted to go.',
  },
  {
    title: 'Methods',
    body: "I've always dedicated myself to maintaining and improving the quality of the team's processes and methods, as well as the alignment and exchange of experiences between designers.",
  },
  {
    title: 'Excellence',
    body: 'I always focused on staying close to the team and ensuring the highest levels of excellence — from a close look at strategic deliveries to a more holistic approach through good practices and guidance for designers.',
  },
];

const peopleLeadership = [
  {
    title: 'Build teams',
    body: 'As a people manager, I built design teams of different sizes from scratch, hiring new designers. After forming them, I kept these teams running at high performance and fully integrated into the business.',
  },
  {
    title: 'Career development',
    body: 'I worked with designers individually to develop their careers — mapping their skills and creating short- and long-term development plans. I also promoted collective development, encouraging the exchange of knowledge and experience between designers.',
  },
  {
    title: 'Team culture',
    body: 'When setting up teams, I worked to create a team culture, collaboratively defining aspirational values and translating them into practice. I supported the teams with team-building activities and ran regular evaluations to check progress.',
  },
  {
    title: 'Routines',
    body: 'To keep designers integrated and aligned with other areas and the business, I created individual routines to discuss deliveries, performance, and careers, plus collective routines to exchange knowledge and align the team with the decisions of the tribes and the company.',
  },
];

const feedback = [
  {
    quote:
      "Diego's way of managing the team is very good — always staying close but giving the team freedom and independence. He doesn't micro-manage. This helps a lot with the team's confidence and development.",
    author: 'Product Designer',
  },
  {
    quote:
      'I see that Diego always tries to guide the course of action toward what generates the most results inside and outside our team, and this has taught me a lot about how to choose work fronts and prioritise my tasks.',
    author: 'Senior Product Designer',
  },
  {
    quote:
      "Since the beginning, I realised your commitment and dedication to guiding us in the right direction. It's really inspiring to see how you're always on track with all the ongoing tasks and take the lead on the project with such confidence. Your leadership gives us the confidence that we are on the right track and that we can count on you to overcome the challenges. You are a leader who inspires, empowers, and makes us feel a fundamental part of the success of our design system.",
    author: 'Front-end Developer Specialist',
  },
  {
    quote:
      'One of the best conversations I’ve ever had about my career was with Diego. It helped me open my mind to opportunities and development points I can use to evolve as a professional and direct my career.',
    author: 'Senior Product Designer',
  },
  {
    quote:
      'Diego values and takes our opinions into account when making adjustments in planning and decision-making. This not only encourages an environment of inclusion and respect, but also lets us work on projects that are relevant and impactful.',
    author: 'Product Designer',
  },
  {
    quote:
      'He always keeps his cool, no matter how difficult the conversation. He can hold one-to-one conversations with the team, C-levels, and design leads in an assertive and straightforward manner, adapting the message to engineering, product, and design teams, and to different stakeholders.',
    author: 'Head of Design',
  },
  {
    quote:
      'One highlight is the practice of delving into problems through conversations and leading to solutions I hadn’t realised. This competence is a great advantage for my personal growth and for our growth as a team.',
    author: 'Senior Product Designer',
  },
];

const work = [
  {
    label: 'Types of projects',
    value:
      'Growth · Migrations · New functionalities · New products · Digital transformation · Digital + service · and more.',
  },
  {
    label: 'Platforms',
    value:
      'SaaS · Desktop · Mobile app (iOS, Android, PWA) · Web application · Open-source solutions · SAP-based application · Customized internal application · and more.',
  },
  {
    label: 'Types of products',
    value:
      'B2B · B2C · B2B2C · Dev experience · Employee experience · Industrial / shop-floor processes · and more.',
  },
];

export function ManagementExperience() {
  return (
    <article>
      {/* Hero */}
      <section className="container-x pt-40 pb-10 md:pt-40 md:pb-section">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="label-eyebrow">Design Leadership</span>
          <h1 className="font-serif text-hero text-ink">
            Managing Design Teams
          </h1>
          <p className="max-w-[840px] text-xl md:text-2xl leading-relaxed text-muted">
            A page dedicated to my experience leading and growing design teams —
            the roles, the principles that guide me, how I approach design
            leadership, and the feedback I&apos;ve received along the way.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-12 border-y border-border-soft py-8 md:gap-20">
          <div className="flex flex-col gap-2">
            <span className="font-display text-[40px] md:text-[48px] leading-none text-accent">
              16+
            </span>
            <span className="label-eyebrow !text-muted">
              Years of experience in design
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display text-[40px] md:text-[48px] leading-none text-accent">
              8+
            </span>
            <span className="label-eyebrow !text-muted">
              Years as a people manager
            </span>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">Career</span>
            <p className="max-w-[320px] text-lg leading-relaxed text-muted">
              A snapshot of my management journey across edtech, e-commerce,
              steel, and banking.
            </p>
          </div>
          <ol className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
            {career.map((item) => (
              <li
                key={item.company}
                className="flex flex-col gap-3 py-8 md:flex-row md:items-start md:justify-between md:gap-10"
              >
                <div className="flex flex-col gap-2 md:max-w-[520px]">
                  <h3 className="text-lg md:text-xl font-semibold text-ink">
                    {item.role}{' '}
                    <span className="text-accent">@ {item.company}</span>
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <span className="label-eyebrow !text-muted shrink-0">
                  {item.period}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Roles in detail */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[400px_1fr] md:gap-10">
            <span className="label-eyebrow">Roles in Detail</span>
            <p className="max-w-[840px] text-lg md:text-xl leading-relaxed text-muted">
              A closer look at each role — the teams I led, what we owned, and
              the scale we operated at.
            </p>
          </div>

          <div className="flex flex-col gap-16 md:gap-20">
            {roles.map((role) => (
              <motion.div
                key={role.title}
                {...reveal}
                className="grid grid-cols-1 gap-8 md:grid-cols-[400px_1fr] md:gap-10"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight text-ink">
                    {role.title}
                  </h3>
                  <span className="label-eyebrow !text-muted">
                    {role.period}
                  </span>
                </div>
                <div className="flex max-w-[840px] flex-col gap-6">
                  {role.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-lg md:text-xl leading-relaxed text-muted"
                    >
                      {p}
                    </p>
                  ))}
                  <div className="mt-2 flex flex-wrap gap-10 border-t border-border-soft pt-8 md:gap-16">
                    {role.stats.map((s) => (
                      <div key={s.label} className="flex flex-col gap-2">
                        <span className="font-serif text-[32px] md:text-[40px] leading-none text-accent">
                          {s.value}
                        </span>
                        <span className="label-eyebrow !text-muted max-w-[180px]">
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">Principles</span>
            <h2 className="font-serif text-section text-ink">
              What guides me
            </h2>
          </div>
          <ol className="flex max-w-[840px] flex-col divide-y divide-border-soft border-t border-border-soft">
            {principles.map((p, i) => (
              <li
                key={p.title}
                className="flex flex-col gap-3 py-8 md:flex-row md:gap-8"
              >
                <span className="font-serif text-2xl text-accent md:w-12 md:shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed text-muted">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Design leadership */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">Design Leadership</span>
          <div className="flex max-w-[840px] flex-col gap-10">
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {designLeadership.map((item, i) => (
                <li key={item.title} className="flex flex-col gap-3">
                  <span className="text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* People leadership */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <span className="label-eyebrow">People Leadership</span>
          <div className="flex max-w-[840px] flex-col gap-10">
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {peopleLeadership.map((item, i) => (
                <li key={item.title} className="flex flex-col gap-3">
                  <span className="text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="bg-[#f2f1ed] py-20 md:py-section">
        <div className="container-x flex flex-col gap-12 md:gap-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[400px_1fr] md:gap-10">
            <span className="label-eyebrow">Feedback</span>
            <h2 className="max-w-[840px] font-serif text-section text-ink">
              In the words of the people I&apos;ve worked with
            </h2>
          </div>

          <div className="columns-1 gap-8 md:columns-2 [&>*]:mb-8 [&>*]:break-inside-avoid">
            {feedback.map((item, i) => (
              <motion.figure
                key={i}
                {...reveal}
                className="flex flex-col gap-5 rounded-card border border-border bg-card p-8 md:p-10"
              >
                <blockquote className="font-serif text-xl md:text-2xl leading-[1.5] text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="label-eyebrow !text-muted">
                  — {item.author}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* My work */}
      <section className="container-x py-20 md:py-section">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[400px_1fr] md:gap-10">
          <div className="flex flex-col gap-6">
            <span className="label-eyebrow">My Work</span>
            <p className="max-w-[320px] text-lg leading-relaxed text-muted">
              Across these roles, the breadth of work spanned several
              dimensions.
            </p>
          </div>
          <div className="flex max-w-[840px] flex-col gap-10">
            <dl className="flex flex-col divide-y divide-border-soft border-t border-border-soft">
              {work.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 py-6 md:flex-row md:gap-10"
                >
                  <dt className="label-eyebrow !text-muted md:w-[200px] md:shrink-0">
                    {item.label}
                  </dt>
                  <dd className="text-base md:text-lg leading-relaxed text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="container-x pb-20 pt-12 md:pb-24 md:pt-20">
        <div className="flex flex-col gap-6">
          <span className="label-eyebrow">Thanks!</span>
          <a
            href="mailto:diegosilverio@gmail.com"
            className="group flex flex-wrap items-center gap-3 font-serif text-footer text-ink"
          >
            <span>Let&apos;s talk</span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
          <Link
            href="/#about"
            className="text-base text-muted underline underline-offset-[6px] decoration-1 hover:text-accent transition-colors duration-250"
          >
            Back to About
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border-soft pt-6 text-xs md:text-sm text-muted">
          <span>© 2026 Diego Silverio</span>
          <span className="font-serif text-base md:text-xl text-ink">D.S</span>
        </div>
      </section>
    </article>
  );
}
