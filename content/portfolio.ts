export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type TechnicalCapability = {
  title: string;
  description: string;
  bullets: string[];
};

export type TechnicalDepthGroup = {
  title: string;
  summary: string;
  badges: string[];
  bullets: string[];
};

export type SideProject = {
  title: string;
  format: string;
  summary: string;
  proof: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  overview: string;
  company: string;
  period: string;
  liveUrl?: string;
  tags: string[];
  users: string[];
  stakeholders: string[];
  constraints: string[];
  problem: string;
  approach: string[];
  solution: string;
  tradeoffs: string[];
  measurableOutcomes: Metric[];
  responsibilities: string[];
  technicalComponents: string[];
  keyLearnings: string[];
  heroStat: string;
  artifact?: {
    src: string;
    alt: string;
    caption: string;
  };
};

export const siteConfig = {
  name: "James Umole",
  title: "Product Manager | AI & Data Platforms",
  description:
    "Product manager with technical depth across AI-enabled workflows, data systems, APIs, and platform-scale operating models.",
  heroIntro:
    "I build 0→1 products and platform capabilities that connect user workflows, data systems, and business outcomes. My work sits at the intersection of product ownership, technical fluency, and scalable operating design.",
  url: "https://james-umole-portfolio.netlify.app",
  email: "mailto:umolejames@gmail.com",
  linkedin: "https://linkedin.com/in/jamesumole"
};

export const heroHighlights = [
  {
    title: "Focus",
    body: "AI-enabled products grounded in measurable operational value."
  },
  {
    title: "Strength",
    body: "Platform thinking across APIs, reporting layers, and scalable workflows."
  },
  {
    title: "Fit",
    body: "Product Manager, Technical PM, and AI/data-platform roles."
  }
];

export const operatingLens = [
  {
    title: "Workflow layer",
    body: "Design journeys that reduce friction for customers and internal teams."
  },
  {
    title: "System layer",
    body: "Define APIs, integrations, and operating boundaries that scale cleanly."
  },
  {
    title: "Data layer",
    body: "Instrument the product so decisions, reporting, and AI features are grounded."
  }
];

export const topMetrics: Metric[] = [
  {
    value: "85%",
    label: "reduction in time-to-lease",
    detail: "Rebuilt the leasing workflow into a digital product funnel with fewer manual handoffs."
  },
  {
    value: "1,000+",
    label: "monthly applications supported",
    detail: "Scaled intake, orchestration, and reporting for a high-volume leasing operation."
  },
  {
    value: "5,000+",
    label: "units managed across the platform",
    detail: "Designed for portfolio-scale operations rather than single-property workflows."
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "online-leasing-engine",
    eyebrow: "Flagship Case Study",
    title: "Online Leasing Engine",
    summary:
      "A 0→1 leasing funnel that connected applications, identity checks, payments, and e-signature into one API-first product experience.",
    overview:
      "The Online Leasing Engine was built as a flagship digital leasing experience that unified application intake, verification, payment, signing, and operational visibility into one product flow.",
    company: "Property Vista",
    period: "2022 - Present",
    liveUrl: "https://www.vidabypropertyvista.com/ai-leasing-engine",
    tags: ["0→1 delivery", "API-first", "AWS", "Leasing operations"],
    users: [
      "Prospective renters completing applications online",
      "Leasing teams managing lead-to-lease conversion",
      "Operations leaders tracking speed, fallout, and portfolio health"
    ],
    stakeholders: [
      "Engineering and UX partners shaping the end-to-end product flow",
      "Legal and compliance stakeholders reviewing document and verification requirements",
      "Business leaders focused on conversion speed, throughput, and operational adoption"
    ],
    constraints: [
      "Manual leasing steps had to be digitized without breaking compliance-sensitive workflows.",
      "Vendor integrations needed to fit a coherent experience rather than feel bolted on.",
      "The product had to support multiple properties and operating teams, not a single workflow variant."
    ],
    problem:
      "Leasing teams were working across disconnected systems and manual handoffs, creating friction for applicants and slowing conversion from lead to signed lease.",
    approach: [
      "Mapped the full lead-to-lease journey to identify the highest-friction handoffs and delays.",
      "Sequenced delivery around the core leasing funnel first, while keeping the architecture modular.",
      "Defined success around time-to-lease, completion, and operational throughput instead of feature count."
    ],
    solution:
      "I led the product strategy and delivery of a modular leasing engine that unified application intake, verification, payments, document execution, and telemetry on top of AWS-backed services and vendor integrations.",
    measurableOutcomes: [
      {
        value: "85%",
        label: "reduction in time-to-lease",
        detail: "Shifted key steps from manual coordination to a guided digital journey."
      },
      {
        value: "1,000+",
        label: "applications processed monthly",
        detail: "Built for sustained leasing volume rather than one-off launches."
      },
      {
        value: "5,000+",
        label: "units supported",
        detail: "Product decisions were informed by portfolio-scale operational needs."
      }
    ],
    responsibilities: [
      "Defined the product vision, roadmap, and success metrics for the digital leasing experience.",
      "Translated legal, compliance, and operations constraints into scope, flows, and acceptance criteria.",
      "Prioritized vendor integrations for identity verification, payments, and e-signature.",
      "Instrumented funnel telemetry to measure completion rates, drop-off points, and SLA health."
    ],
    technicalComponents: [
      "API-first architecture for application orchestration and partner integrations",
      "AWS services including S3-backed document flows and analytics-ready data storage",
      "Event capture for funnel observability, operational reporting, and optimization",
      "Third-party integrations for payments, identity verification, and e-signature"
    ],
    tradeoffs: [
      "Balanced a smoother applicant experience against leasing compliance and operational control requirements.",
      "Chose modular integration patterns over faster but tightly coupled implementation shortcuts.",
      "Instrumented telemetry early because optimization depended on reliable funnel data."
    ],
    keyLearnings: [
      "In workflow-heavy products, instrumentation is part of the product, not a later add-on.",
      "Platform thinking matters when multiple teams rely on the same product foundation.",
      "The biggest gains came from reducing handoffs, not adding more features."
    ],
    heroStat: "85% faster lease cycle"
  },
  {
    slug: "vista-analytics",
    eyebrow: "Data Platform Case Study",
    title: "Vista Analytics",
    summary:
      "A self-serve analytics capability that turned scattered leasing and operations data into tenant-aware dashboards, reusable pipelines, and decision-ready reporting.",
    overview:
      "Vista Analytics reframed reporting as a product capability by turning fragmented operational data into reusable pipelines, dashboards, and customer-facing analytics surfaces.",
    company: "Property Vista",
    period: "2023 - Present",
    liveUrl: "https://www.vidabypropertyvista.com/vida-analytics",
    tags: ["Analytics", "AWS Glue", "Dashboards", "Platform thinking"],
    users: [
      "Executives and operators preparing QBRs and monitoring KPIs",
      "Customer teams that needed self-serve portfolio visibility",
      "Internal product and operations teams making prioritization decisions"
    ],
    stakeholders: [
      "Data and engineering teams responsible for ETL, modeling, and system performance",
      "Customer-facing teams that needed trustworthy reporting in front of clients",
      "Leadership stakeholders looking for faster and more consistent decision support"
    ],
    constraints: [
      "Source data was fragmented and not originally designed as a product-grade analytics layer.",
      "The solution had to support both internal reporting and customer-facing multi-tenant access.",
      "AI-enabled insights had to be useful and credible without overclaiming automation."
    ],
    problem:
      "Operational and leasing data lived in different systems, so reporting was slow, inconsistent, and heavily dependent on ad hoc data pulls.",
    approach: [
      "Started with the business questions and KPI definitions before choosing dashboard outputs.",
      "Prioritized reusable transformations and data models over one-off report requests.",
      "Treated analytics as a product surface with adoption, trust, and governance requirements."
    ],
    solution:
      "I drove the productization of a shared analytics layer: reusable data models, pipeline orchestration, curated dashboards, and AI-enabled signals that moved the team from reactive reporting to active decision support.",
    measurableOutcomes: [
      {
        value: "Hours → minutes",
        label: "QBR preparation time",
        detail: "Dashboards replaced manual report assembly and spreadsheet stitching."
      },
      {
        value: "Self-serve",
        label: "customer analytics access",
        detail: "Stakeholders could answer core questions without waiting on custom extracts."
      },
      {
        value: "Always-on",
        label: "operational KPI visibility",
        detail: "Leasing, funnel, and portfolio trends became visible in near real time."
      }
    ],
    responsibilities: [
      "Defined the analytics roadmap and aligned it to business questions, not vanity metrics.",
      "Partnered with engineering and data teams on pipeline design, modeling, and dashboard prioritization.",
      "Balanced internal reporting needs with customer-facing multi-tenant product requirements.",
      "Introduced AI-assisted insights carefully, positioning them as decision support rather than black-box automation."
    ],
    technicalComponents: [
      "AWS Glue for ETL and reusable transformation workflows",
      "S3, warehouse layers, and BI connectors for structured analytics access",
      "API and connector patterns that enabled downstream dashboards and reporting surfaces",
      "Pipeline orchestration and governance to maintain refresh quality and tenant-aware access"
    ],
    tradeoffs: [
      "Prioritized metric consistency and data quality over shipping a broader dashboard set too early.",
      "Introduced AI-assisted insights as support layers rather than headline features until the data was dependable.",
      "Balanced customer-facing flexibility with governance and tenant-aware access controls."
    ],
    keyLearnings: [
      "Analytics products break down when metric definitions are fuzzy, even if the interface looks strong.",
      "Reusable data modeling creates leverage long after the first dashboard ships.",
      "AI stories become more credible when grounded in operationally trusted data."
    ],
    heroStat: "Analytics as a product surface",
    artifact: {
      src: "/images/analytics-dashboard.png",
      alt: "Vista Analytics dashboard preview",
      caption: "Existing analytics dashboard asset reused as part of the new portfolio build."
    }
  },
  {
    slug: "mortgage-lending-platform",
    eyebrow: "Financial Services Case Study",
    title: "Mortgage / Lending Platform",
    summary:
      "A retention-focused renewal platform that used customer data, scoring, and targeted outreach to protect mortgage balances and improve renewal outcomes.",
    overview:
      "This case study centers on a renewal and retention workflow designed to identify at-risk customers early, support tailored outreach, and improve renewal outcomes in a regulated environment.",
    company: "TD Canada Trust",
    period: "2019 - 2021",
    liveUrl: "https://www.td.com/ca/en/personal-banking/products/mortgages/mortgage-offers",
    tags: ["Fintech", "Customer data", "Renewals", "Retention strategy"],
    users: [
      "Mortgage customers approaching renewal windows",
      "Advisers and internal teams prioritizing outreach and offer strategy",
      "Risk, pricing, and compliance stakeholders overseeing execution"
    ],
    stakeholders: [
      "Adviser and servicing teams acting on prioritized renewal opportunities",
      "Pricing, analytics, and compliance groups shaping offer logic and guardrails",
      "Business leaders focused on retention economics and customer value preservation"
    ],
    constraints: [
      "The product operated in a regulated environment with strong governance expectations.",
      "Offer timing and personalization had to improve retention without adding operational complexity for advisers.",
      "Some implementation detail is intentionally abstracted here because of domain sensitivity."
    ],
    problem:
      "Renewal opportunities were easy to miss or address too late, which created attrition risk and reduced the ability to match customers with timely, relevant offers.",
    approach: [
      "Focused the MVP on earlier renewal identification and better cohort prioritization.",
      "Worked across business, analytics, compliance, and delivery stakeholders to shape the workflow.",
      "Used customer timing and retention economics to guide prioritization."
    ],
    solution:
      "I led product work on a renewal and retention workflow that surfaced at-risk cohorts, supported tailored offers, and connected advisory teams with better timing, context, and measurable next steps.",
    measurableOutcomes: [
      {
        value: ">$2B",
        label: "mortgage balances retained",
        detail: "Retention strategy centered on proactive targeting and timely interventions."
      },
      {
        value: "Earlier",
        label: "renewal opportunity identification",
        detail: "Teams could act before customers entered a high-risk decision window."
      },
      {
        value: "Lower",
        label: "cost to retain vs. reacquire",
        detail: "Personalized journeys supported more efficient retention economics."
      }
    ],
    responsibilities: [
      "Connected business strategy, customer journey design, and technical delivery for renewal programs.",
      "Worked across pricing, compliance, analytics, and delivery teams to define the right MVP.",
      "Helped shape segmentation logic, prioritization, and the operating model for outreach.",
      "Used customer and performance data to evaluate which cohorts, offers, and channels mattered most."
    ],
    technicalComponents: [
      "Customer and product data pipelines feeding retention and prioritization workflows",
      "Scoring and segmentation logic for renewal timing and outreach strategy",
      "Integration points with adviser tooling, communication systems, and reporting layers",
      "Governance-conscious workflow design appropriate for regulated financial products"
    ],
    tradeoffs: [
      "Balanced personalization and timing improvements against compliance and governance requirements.",
      "Optimized for practical adviser decision support rather than fully automated renewal handling.",
      "Abstracted some internal thresholds and implementation details in this portfolio version."
    ],
    keyLearnings: [
      "In regulated product environments, credibility comes from sequencing the right MVP.",
      "Retention products improve when customer timing and business economics are considered together.",
      "Cross-functional alignment is often the hardest delivery problem in lending workflows."
    ],
    heroStat: ">$2B retained at renewal"
  }
];

export const technicalCapabilities: TechnicalCapability[] = [
  {
    title: "Data systems that support product decisions",
    description:
      "I work comfortably in the space between customer problems and the systems needed to measure, automate, and scale the right outcome.",
    bullets: [
      "Warehouse and reporting patterns across operational and analytical data",
      "Metric definition, instrumentation, and KPI design for roadmap decisions",
      "Tenant-aware analytics requirements and self-serve reporting surfaces"
    ]
  },
  {
    title: "Platform and API thinking",
    description:
      "I prefer products that can be extended, integrated, and governed well instead of one-off workflow fixes.",
    bullets: [
      "API-first orchestration for payments, identity, documents, and external services",
      "Product requirements that consider reuse, reliability, and scale from the start",
      "Experience translating business needs into clean integration and service boundaries"
    ]
  },
  {
    title: "Hands-on familiarity with cloud data tooling",
    description:
      "Enough technical depth to make strong trade-offs with engineering, data, and architecture partners.",
    bullets: [
      "AWS S3 for storage patterns and downstream analytics readiness",
      "AWS Glue and DataBrew for transformation, prep, and operational reporting workflows",
      "Snowflake and related BI/warehouse concepts for scalable analytics access"
    ]
  },
  {
    title: "Pragmatic AI product lens",
    description:
      "I position AI as a capability layer on top of solid data and workflow foundations, not as a substitute for product clarity.",
    bullets: [
      "AI-enabled recommendations and workflow assistance grounded in reliable system data",
      "Careful framing of automation, confidence, and human-in-the-loop decision points",
      "Focus on measurable operational value instead of inflated AI claims"
    ]
  }
];

export const technicalDepthGroups: TechnicalDepthGroup[] = [
  {
    title: "API-first product architecture",
    summary:
      "I work best on products where the user experience depends on clean service boundaries, integration choices, and scalable workflow orchestration.",
    badges: ["API-first architecture", "Integrations", "Platform workflows"],
    bullets: [
      "Defined product requirements around how systems exchange data, trigger downstream actions, and stay observable in production.",
      "Worked on products where payments, verification, document flows, and analytics all depended on dependable integration patterns.",
      "Use platform thinking to avoid one-off workflow fixes that are hard to extend later."
    ]
  },
  {
    title: "Data pipelines and cloud tooling",
    summary:
      "My technical depth is strongest where operational data needs to move cleanly from source systems into product, reporting, and decision layers.",
    badges: ["AWS S3", "AWS Glue", "AWS DataBrew", "Data pipelines"],
    bullets: [
      "Partnered on workflows that use S3-backed storage and data movement patterns to support downstream analytics and product reporting.",
      "Worked closely with ETL and transformation design using Glue and DataBrew-style workflows for reporting readiness and operational visibility.",
      "Think about data freshness, structure, and trust as product concerns, not just technical implementation details."
    ]
  },
  {
    title: "Warehouse and analytics systems",
    summary:
      "I’ve worked in environments where product quality depends on usable analytics, clear KPIs, and reliable access to decision-grade data.",
    badges: ["Snowflake", "Analytics tools", "Dashboards", "KPIs"],
    bullets: [
      "Comfortable shaping products that rely on Snowflake-style warehouse thinking, curated metrics, and reusable reporting layers.",
      "Built around analytics tools and dashboard experiences that support operators, leadership, and customers with self-serve visibility.",
      "Bias toward instrumentation and metric design early so teams can make stronger post-launch decisions."
    ]
  }
];

export const technicalArchitectureLayers = [
  {
    label: "Product Layer",
    title: "User workflows",
    detail: "Applications, dashboards, and decision-support experiences."
  },
  {
    label: "Integration Layer",
    title: "APIs and services",
    detail: "Partner integrations, orchestration, business rules, and events."
  },
  {
    label: "Data Layer",
    title: "Pipelines and storage",
    detail: "S3, Glue, DataBrew, warehouse structures, and reporting-ready models."
  },
  {
    label: "Insight Layer",
    title: "Analytics and action",
    detail: "Dashboards, KPI tracking, Snowflake-style access, and operator decisions."
  }
];

export const sideProjects: SideProject[] = [
  {
    title: "Job Application Tracker",
    format: "Workflow product build",
    summary:
      "A structured application-tracking product for managing roles, stages, notes, follow-ups, and decision momentum in one place.",
    proof:
      "Shows that I don’t just define workflow problems. I prototype them, structure the information model, and design for repeatable user behavior.",
    tags: ["Product build", "Automation", "Workflow design", "Next.js"]
  },
  {
    title: "AI Workflow Experiments",
    format: "Prompt + ops lab",
    summary:
      "A set of practical experiments exploring how AI can support research synthesis, task triage, and structured decision support without overselling automation.",
    proof:
      "Demonstrates an applied AI product lens: clear guardrails, human review, and workflow value tied to real execution rather than novelty.",
    tags: ["AI", "Prompt design", "Evaluation", "Automation"]
  },
  {
    title: "Builder Sandbox",
    format: "API + systems prototypes",
    summary:
      "Small prototypes around API flows, data handoffs, instrumentation, and system behavior inspired by platform-scale product work.",
    proof:
      "Reinforces that I can move from product thinking into lightweight execution when I want to test an idea, workflow, or technical pattern.",
    tags: ["APIs", "Data pipelines", "Telemetry", "Builder mindset"]
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Product Manager",
    company: "Property Vista",
    location: "Toronto, ON",
    period: "Dec 2021 - Present",
    summary:
      "Owned the roadmap for leasing and analytics products used by property management teams, with a focus on scalable workflows, measurable business outcomes, and platform-ready architecture.",
    highlights: [
      "Led 0→1 delivery of the Online Leasing Engine and related funnel optimization work.",
      "Shaped analytics products that turned reporting into a reusable customer-facing capability.",
      "Worked cross-functionally with design, engineering, legal, and go-to-market teams to ship with operational credibility."
    ]
  },
  {
    role: "Product Owner",
    company: "TD Canada Trust",
    location: "London, ON",
    period: "Jun 2019 - Nov 2021",
    summary:
      "Bridged business goals and technical execution for digital banking and lending workflows, balancing customer needs, compliance constraints, and roadmap focus.",
    highlights: [
      "Contributed to renewal and retention products tied to meaningful balance protection.",
      "Worked with data, pricing, compliance, and delivery teams on MVP definition and prioritization.",
      "Brought product structure to complex, regulated workflows where timing and trust mattered."
    ]
  }
];
