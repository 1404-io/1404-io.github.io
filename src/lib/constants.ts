export const SITE = {
  name: '1404',
  title: '1404 — A transformational technology partner',
  description: 'Forward-deployed software engineers who work inside your business, building and running an AI strategy aligned with your growth plan. We work on a flat retainer and share in the upside we create together.',
  url: 'https://1404.io',
  email: 'holden@1404.io',
  emailArthur: 'arthur@1404.io',
  phone: '248-607-1414',
  booking: 'https://calendly.com/holden-1404/30min',
};

export const CLIENT_LOGOS = [
  { name: 'The Construct Group', src: '/logos/tcg.png', href: '/case-studies/tcg' },
] as const;

export const NAV_LINKS = [
  { label: 'Partnership', href: '/partnership' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Trust', href: '/trust' },
] as const;

export const FOOTER_SECTIONS = {
  product: [
    { label: 'Partnership', href: '/partnership' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Work', href: '/work' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Trust', href: '/trust' },
  ],
} as const;

// The engagement model — two phases. Source: intro one-pager (2026-07-15).
export const PHASES = [
  {
    kicker: 'One-time setup',
    title: 'Foundation',
    descriptor: 'We come on-site, get your people and systems ready, and set the plan.',
    bullets: [
      { lead: 'A clear AI plan,', rest: 'built from how your business runs and where you want to grow.' },
      { lead: "The best AI tools, in your team's hands.", rest: 'We roll out the latest AI across your people and get them fluent fast, so they get more done.' },
      { lead: 'One orchestration layer for everything.', rest: 'We connect the tools you already run so they work as one, giving you a single place to see and move the business.' },
    ],
  },
  {
    kicker: 'Ongoing, every month',
    title: 'Partnership',
    descriptor: 'We keep building whatever the business needs, and improve it as you grow.',
    bullets: [
      { lead: 'AI agents built for your work,', rest: 'handling the busywork that slows your team down.' },
      { lead: 'Custom software for any opportunity.', rest: 'When software can move the business forward, we build it and put it to use.' },
      { lead: 'Ongoing care and improvement.', rest: 'As better AI arrives we bring it in, and we maintain and sharpen everything we build as your priorities change.' },
    ],
  },
] as const;

// Why the partnership is different. Source: intro one-pager.
export const DIFFERENTIATORS = [
  { title: 'One flat retainer.', body: 'Bring us any priority and we build it. Your monthly number stays the same, so you can plan with confidence and ask for as much as you need.' },
  { title: 'We share in the upside we create.', body: 'Beyond the retainer, we earn a share of the value we build each quarter. Our reward grows as yours does, so we are aligned with your results.' },
  { title: 'Forward-deployed, on-site with you.', body: 'During Foundation we set up in your office to get your people and systems ready. Through the Partnership we come into the shop regularly and build alongside your team.' },
  { title: 'Built for the long term.', body: 'We stay with you and keep improving what we build as your business grows.' },
] as const;

// How we work. Every problem, the same way. Source: intro one-pager.
export const PROCESS = [
  { step: 'Investigate', body: 'We find where the problem is stemming from.' },
  { step: 'Understand', body: "We learn how it's arising and think through what a solution looks like." },
  { step: 'Build', body: "We build that solution and refine it iteratively until it's perfected." },
] as const;

export const SUITES = [
  {
    name: 'Executive Operations',
    slug: 'executive-operations',
    description: 'Takes over the daily operational work that eats into leadership time. Email triage, morning intelligence briefs, meeting preparation, weekly scorecards, executive presentations, and operating reviews — handled every day without you thinking about it.',
    short: 'Daily operations, briefs, email, meetings, scorecards, executive decks.',
    replaces: 'Executive Assistant + Operations Coordinator',
    skills: [
      'Morning intelligence briefs',
      'Email triage and drafting',
      'Meeting preparation and follow-up',
      'Weekly and monthly scorecards',
      'Executive presentations',
      'Operating reviews',
      'Playbook-driven preferences per executive',
      'Calendar and scheduling coordination',
    ],
  },
  {
    name: 'Financial Intelligence',
    slug: 'financial-intelligence',
    description: 'Handles the financial reporting and analysis that companies either do manually in Excel or pay a fractional CFO to produce weeks after the fact. Cash flow forecasting, job costing, WIP schedules, monthly financials, bank packages, and revenue projections — all connected to your actual accounting data and updated continuously.',
    short: 'Cash flow, job costing, WIP, financials, bank packages, forecasting.',
    replaces: 'Fractional CFO + Financial Analyst',
    skills: [
      'Thirteen-week cash flow forecasting',
      'Job cost reporting and variance analysis',
      'WIP schedule generation',
      'Monthly financial packages',
      'Bank and surety packages',
      'Revenue forecasting',
      'Budget vs. actual analysis',
      'Profit and loss reporting',
    ],
  },
  {
    name: 'Business Development',
    slug: 'business-development',
    description: 'Runs the sales operations work that most companies either don\'t do or have the owner doing between meetings. Pipeline management, prospect research, outreach sequences, bid monitoring, proposal tracking, and win/loss analysis. The sales infrastructure most companies this size know they need but haven\'t built.',
    short: 'Pipeline, prospecting, outreach, bid tracking, proposals, analysis.',
    replaces: 'BDR + Sales Operations',
    skills: [
      'Pipeline management and tracking',
      'Prospect research and qualification',
      'Outreach automation and sequences',
      'Bid monitoring and alerts',
      'Proposal generation and tracking',
      'Win/loss analysis',
      'Competitor intelligence',
      'Territory and market mapping',
    ],
  },
  {
    name: 'Acquisitions',
    slug: 'acquisitions',
    description: 'For companies that are actively acquiring or building a roll-up strategy. Automates the research-heavy work of screening targets, building financial models, running due diligence, drafting LOIs, and tracking deal pipelines. Analyst-level deal research on an ongoing basis, instead of only when you have an active banking engagement.',
    short: 'Target screening, deal modeling, diligence, LOIs, pipeline tracking.',
    replaces: 'M&A Analyst + Deal Research',
    skills: [
      'Acquisition target screening',
      'Financial modeling and valuation',
      'Due diligence checklists and tracking',
      'Letter of intent drafting',
      'Deal pipeline management',
      'Counter-valuation analysis',
      'Integration planning',
      'Comparable transaction research',
    ],
  },
  {
    name: 'Exit & Liquidity',
    slug: 'exit-liquidity',
    description: 'For owners who are planning to sell their company within the next one to five years. Handles the preparation work that makes the difference between a smooth exit and a messy one — readiness scoring, data room assembly, CIM building, financial normalization, buyer-ready presentations, and KPI synthesis reports that answer the questions buyers ask during diligence.',
    short: 'Readiness scoring, data rooms, CIMs, valuations, buyer presentations.',
    replaces: 'Investment Banking Prep',
    skills: [
      'Exit readiness scoring and gap analysis',
      'Virtual data room assembly',
      'Confidential information memorandum',
      'Financial normalization',
      'Buyer-ready presentations',
      'KPI synthesis reports',
      'Valuation preparation',
      'Management presentation materials',
    ],
  },
] as const;
