import { StrategyItem, FunnelStage, TerminalRow, Slide, Offer, TargetIndustry } from './types';

export const STRATEGY_ITEMS: StrategyItem[] = [
  {
    title: "Builder + Operator",
    description: "Designs the strategy and the execution rails. Not just advice, but governance and operating rhythms.",
    category: "blue",
    icon: "Hammer"
  },
  {
    title: "Practical AI Bias",
    description: "Favors 'boring but profitable' use cases (service automation) over speculative demos.",
    category: "emerald",
    icon: "Brain"
  },
  {
    title: "Selective Capacity",
    description: "Small, elite team. High trust. Direct relationship with top leadership. No 'body shop' behavior.",
    category: "purple",
    icon: "ShieldCheck"
  }
];

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    stage: "The Digital Hub",
    title: "Content Loop (Newsletter & Social)",
    description: "Weekly 'Interpreter' newsletter and high-signal LinkedIn posts. Strategy: All roads lead to the Website to capture intent and book Okaro.",
    metrics: "Metric: Subscribers / Web Traffic",
    type: "top"
  },
  {
    stage: "Authority Building",
    title: "The Speaking Circuit",
    description: "Targeting 20-40 high-leverage executive forums. Converting digital authority into physical trust via 'War Story' keynotes.",
    metrics: "Metric: Speaking Pipeline",
    type: "middle"
  },
  {
    stage: "Revenue Conversion",
    title: "The AI Impact Sprint",
    description: "Fixed scope, fixed fee discovery. The primary mechanism to move from 'Interest' to 'contracted Roadmap'.",
    metrics: "Outcome: Retainer / Project",
    type: "bottom"
  }
];

export const TERMINAL_DATA: TerminalRow[] = [
  { 
    id: "01", 
    timeframe: "Weeks 1-2", 
    focus: "Foundation + Packaging", 
    output: "Finalize positioning, offer stack, core messaging.", 
    status: "complete",
    details: [
      "Define 'Mid-Market Gap' narrative for pitch deck.",
      "Finalize service rate cards for Sprint vs. Retainer.",
      "Interview 3 friendly executives to validate messaging.",
      "Setup legal entities and MSA templates."
    ]
  },
  { 
    id: "02", 
    timeframe: "Weeks 3-4", 
    focus: "Digital Hub Construction", 
    output: "Publish website (The Conversion Engine).", 
    status: "active",
    details: [
      "Launch OkaroAdvisory.com with 'Book Now' CTAs.",
      "Setup HubSpot for CRM and newsletter capture.",
      "Draft first 3 editions of 'The Interpreter' newsletter.",
      "Optimize LinkedIn profile for 'Bridge Executive' SEO."
    ]
  },
  { 
    id: "03", 
    timeframe: "Weeks 5-6", 
    focus: "The Content Loop", 
    output: "Begin weekly publishing cadence.", 
    status: "pending",
    details: [
      "Publish 'Manifesto' post on LinkedIn linking to site.",
      "Send Newsletter #1 to initial seed list.",
      "Identify top 20 industry forums for speaking pitches.",
      "Record 3 short-form video clips on 'AI Paralysis'."
    ]
  },
  { 
    id: "04", 
    timeframe: "Weeks 7-8", 
    focus: "Outreach & Validation", 
    output: "Secure first speaking slots.", 
    status: "pending",
    details: [
      "Direct outreach to event organizers with Speaker Kit.",
      "Run first 'Executive Roundtable' dinner (invite only).",
      "A/B test LinkedIn hooks to drive newsletter signups.",
      "Review web analytics for traffic sources."
    ]
  },
  { 
    id: "05", 
    timeframe: "Weeks 9-10", 
    focus: "Delivery Excellence", 
    output: "Deliver first sprint(s) with high-quality readouts.", 
    status: "pending",
    details: [
      "Execute first paid 'Impact Sprint' for pilot client.",
      "Document the case study (anonymized if needed).",
      "Refine the 'Developer Mercenary' handoff process.",
      "Collect testimonial for website."
    ]
  },
  { 
    id: "06", 
    timeframe: "Weeks 11-12", 
    focus: "Scale Demand Loop", 
    output: "Refine messaging based on market feedback.", 
    status: "pending",
    details: [
      "Analyze highest performing newsletter topics.",
      "Automate follow-up sequences for web inquiries.",
      "Book speaking tour for next quarter.",
      "Evaluate capacity for Retainer vs. Sprint mix."
    ]
  },
];

export const OFFERS: Offer[] = [
  { name: "Executive AI Advisory", idealFor: "CEO/BU Leader", duration: "3-12 Months", type: "retainer" },
  { name: "AI Impact Sprint", idealFor: "Clarity & Roadmap", duration: "3-6 Weeks", type: "sprint" },
  { name: "Transformation Strike Team", idealFor: "High-stakes Delivery", duration: "8-16+ Weeks", type: "delivery" },
  { name: "Managed Workflows", idealFor: "Repeatable Needs", duration: "Ongoing", type: "managed" },
];

export const TARGET_INDUSTRIES: TargetIndustry[] = [
  { name: "Financial Services", rationale: "Data integrity is non-negotiable.", icon: "Landmark" },
  { name: "Insurance", rationale: "Actuarial science meets predictive AI.", icon: "Umbrella" },
  { name: "Healthcare", rationale: "Privacy + Operational Efficiency.", icon: "Stethoscope" },
  { name: "Aviation/Logistics", rationale: "High-throughput environments.", icon: "Plane" },
  { name: "Media & Info", rationale: "Trusted content at scale.", icon: "Newspaper" },
];

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "The Executive Summary",
    subtitle: "Closing the gap between strategy and execution.",
    type: "list",
    content: [
      "Mid-market gap: $50M-$3B orgs need speed but lack top-tier AI leadership.",
      "Core Promise: Turn 'AI Intention' into measurable 'AI Impact'.",
      "Ideal Buyer: CEO/President (Top-down sponsorship).",
      "Delivery: Elite 'special operations' team, embedded partnership."
    ],
    footer: "Okaro Advisory Blueprint"
  },
  {
    id: 2,
    title: "Why The Mid-Market?",
    subtitle: "The Wedge Strategy",
    type: "text",
    content: [
      "The mid-market is under the same competitive pressure as the largest enterprises—but without the budget to hire top-tier product and AI leadership full-time.",
      "They need a partner who can bring executive-level judgment and an execution system, quickly."
    ],
    footer: "Market Opportunity"
  },
  {
    id: 3,
    title: "Goals & Constraints",
    subtitle: "Strategic Guardrails",
    type: "list",
    content: [
      "Build demand through visibility (Speaking) not 'spray and pray'.",
      "Win engagements from the top (Direct accountability).",
      "Position as luxury/premium (Selective capacity).",
      "Use AI as a beachhead for broader digital transformation."
    ],
    footer: "Strategy Call Draft"
  },
  {
    id: 4,
    title: "Proof Points",
    subtitle: "Credibility Inventory",
    type: "list",
    content: [
      "Built 'firsts' in the app economy (push notifications, streaming).",
      "Scaled digital audiences at major brands (ESPN, Bloomberg).",
      "Holds U.S. patents & innovation awards.",
      "Led practical AI implementations at scale (workflow summarization)."
    ],
    footer: "Appendix A"
  }
];