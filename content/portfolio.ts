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
  hideSupplementarySection?: boolean;
  artifact?: {
    src: string;
    alt: string;
    caption: string;
  };
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:3000";

export const siteConfig = {
  name: "James Umole",
  title: "Product Manager | AI, Data & Platform Products",
  description:
    "Product manager with technical depth across AI-enabled workflows, data systems, APIs, and platform-scale operating models.",
  heroIntro:
    "I lead products from idea to launch, translating business problems into user workflows, system requirements, and measurable outcomes. My background spans AI-enabled products, data platforms, and operational workflows.",
  url: siteUrl,
  email: "mailto:umolejames@gmail.com",
  linkedin: "https://linkedin.com/in/jamesumole"
};

export const heroHighlights = [
  {
    title: "Focus",
    body: "AI and data products tied to real operational outcomes."
  },
  {
    title: "Strength",
    body: "Strong systems thinking across APIs, integrations, analytics, and workflow design."
  },
  {
    title: "Fit",
    body: "Best aligned to Product Manager, Technical PM, and AI/Data Platform roles."
  }
];

export const operatingLens = [
  {
    title: "Workflow layer",
    body: "Design customer and internal workflows that reduce friction and improve execution."
  },
  {
    title: "System layer",
    body: "Define APIs, integrations, and product boundaries that support scale."
  },
  {
    title: "Data layer",
    body: "Build the data foundation needed for reporting, decision-making, and AI-driven features."
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
      "Led the 0→1 build of an end-to-end leasing platform, orchestrating multiple integrations across identity verification, credit checks, banking data, payments, and e-signature into a unified product experience. Designed and scaled leasing workflows across thousands of units, enabling faster, fully digital application-to-lease conversion.",
    overview:
      "The Online Leasing Engine is a digital leasing platform that unified application intake, identity verification, payments, and lease signing into a single, end-to-end workflow.\n\nIt replaced fragmented, manual processes with a structured, API-driven system that improved conversion speed, reduced operational friction, and enabled full visibility across the leasing funnel.",
    company: "Property Vista",
    period: "Dec 2021 - Present",
    liveUrl: "https://www.vidabypropertyvista.com/ai-leasing-engine",
    tags: [
      "0→1 delivery",
      "API-first",
      "AWS",
      "Leasing operations",
      "Payments",
      "Identity & Verification",
      "Integrations",
      "Workflow automation"
    ],
    users: [
      "Prospective renters completing applications, verification, and lease signing online",
      "Leasing teams managing lead-to-lease workflows and applicant progression",
      "Operations leaders tracking conversion rates, fallout, and portfolio performance"
    ],
    stakeholders: [
      "Engineering and design teams building and scaling the leasing platform",
      "Legal and compliance stakeholders defining verification and document requirements",
      "Business and GTM leaders focused on conversion, throughput, and operational adoption"
    ],
    constraints: [
      "Manual leasing workflows needed digitization without breaking compliance-sensitive processes",
      "Vendor integrations (credit, identity, payments, e-signature) had to feel native, not bolted on",
      "The platform needed to support multiple properties, teams, and workflows at scale"
    ],
    problem:
      "Leasing teams operated across disconnected systems and manual handoffs, creating delays, inconsistent applicant experiences, and limited visibility into conversion performance from lead to signed lease.",
    approach: [
      "Mapped the full lead-to-lease journey to identify high-friction steps and breakdown points",
      "Sequenced delivery around the core leasing funnel first, while designing for modular expansion",
      "Defined success metrics around time-to-lease, conversion rates, and operational throughput"
    ],
    solution:
      "Delivered a modular leasing platform that unified application intake, verification, payments, document execution, and telemetry into a single product flow.\n\nBuilt on API-first architecture with AWS-backed services and integrated third-party providers, enabling scalable workflows and consistent user experiences across properties.",
    measurableOutcomes: [
      {
        value: "85%",
        label: "Reduction in time to lease",
        detail: "Shifted leasing from manual coordination to a structured, fully digital workflow."
      },
      {
        value: "1,000+",
        label: "Monthly applications processed",
        detail: "Built for sustained operational volume rather than one-time launches."
      },
      {
        value: "5,000+",
        label: "Units supported",
        detail: "Scaled across multiple properties and operational teams with consistent system behavior."
      }
    ],
    responsibilities: [
      "Defined product vision, roadmap, and success metrics for the end-to-end leasing platform",
      "Translated legal, compliance, and operational requirements into structured product flows and acceptance criteria",
      "Led prioritization and integration of third-party services for identity verification, payments, and e-signature",
      "Instrumented funnel telemetry to track completion rates, drop-offs, and operational performance"
    ],
    technicalComponents: [
      "API-first architecture for orchestrating application flows and partner integrations",
      "AWS-backed infrastructure for document handling, data storage, and analytics readiness",
      "Event-based telemetry for funnel observability, reporting, and optimization",
      "Integrated third-party services for payments, identity verification, credit checks, and e-signature"
    ],
    tradeoffs: [
      "Balanced a smooth applicant experience with strict compliance and operational control requirements",
      "Chose modular integration patterns over tightly coupled implementations to support long-term scalability",
      "Invested early in telemetry to enable reliable funnel optimization and performance visibility"
    ],
    keyLearnings: [
      "In workflow-heavy products, instrumentation is part of the product, not a post-launch addition",
      "Platform thinking is critical when multiple teams rely on the same system foundation",
      "The biggest performance gains came from reducing handoffs, not adding more features"
    ],
    heroStat: "85% faster lease cycle",
    hideSupplementarySection: true
  },
  {
    slug: "vista-analytics",
    eyebrow: "Data Platform Case Study",
    title: "Vista Analytics",
    summary:
      "Led the development of a centralized analytics platform serving internal teams, GTM functions, and customers through role-based access. Built data pipelines and dashboards that transformed leasing, operations, and AI assistant data into decision-ready insights. Instrumented AI leasing assistant and nurturing data to support performance tracking and drive customer renewal conversations.",
    overview:
      "Vista Analytics reframed reporting as a product capability by turning fragmented operational data into reusable pipelines, dashboards, and customer-facing analytics surfaces.",
    company: "Property Vista",
    period: "Dec 2021 - Present",
    liveUrl: "https://www.vidabypropertyvista.com/vida-analytics",
    tags: [
      "Analytics",
      "AWS Glue",
      "Dashboards",
      "Data pipelines",
      "RBAC / Access control",
      "Customer analytics",
      "AI data instrumentation"
    ],
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
        value: "Hours → Minutes",
        label: "QBR preparation time",
        detail: "Dashboards replaced manual report assembly and spreadsheet stitching."
      },
      {
        value: "Self-serve analytics",
        label: "Customer access",
        detail: "Stakeholders could answer core questions without waiting on custom extracts."
      },
      {
        value: "Real-time visibility",
        label: "Operational KPIs",
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
      "Led product initiatives for a mortgage retention platform, leveraging customer data, scoring models, and targeted outreach to identify at-risk accounts and improve renewal outcomes. Enabled earlier intervention and more effective retention strategies across the lending portfolio.",
    overview:
      "This case study centers on a renewal and retention workflow designed to identify at-risk customers early, support tailored outreach, and improve renewal outcomes in a regulated environment.",
    company: "TD Canada Trust",
    period: "2019 - 2021",
    liveUrl: "https://www.td.com/ca/en/personal-banking/products/mortgages/mortgage-offers",
    tags: [
      "Fintech",
      "Customer data",
      "Renewals",
      "Retention strategy",
      "Scoring models",
      "Customer segmentation",
      "Retention analytics"
    ],
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
        label: "Mortgage balances retained",
        detail: "Retention strategy centered on proactive targeting and timely interventions."
      },
      {
        value: "Earlier",
        label: "Renewal opportunity identification",
        detail: "Teams could act before customers entered a high-risk decision window."
      },
      {
        value: "Lower",
        label: "Cost to retain vs. reacquire",
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
      "I design products where user experience depends on clean service boundaries, reliable integrations, and scalable workflow orchestration.",
    badges: ["API-first architecture", "Integrations", "Platform workflows"],
    bullets: [
      "Defined system interactions across payments, verification, and document workflows",
      "Ensured systems trigger downstream actions and remain observable in production",
      "Designed for extensibility to avoid one-off workflow solutions"
    ]
  },
  {
    title: "Data pipelines and cloud tooling",
    summary:
      "I define data flows that move cleanly from source systems into reporting, analytics, and decision layers.",
    badges: ["AWS S3", "AWS Glue", "AWS DataBrew", "Data pipelines"],
    bullets: [
      "Built pipelines using S3, Glue, and DataBrew-style workflows",
      "Enabled reliable data movement for analytics and product reporting",
      "Focused on data structure, freshness, and trust as product requirements",
      "Prepared structured data for AI use cases, including retrieval (RAG) and grounding workflows"
    ]
  },
  {
    title: "Warehouse and analytics systems",
    summary:
      "I design products where decision-making depends on accessible, well-structured analytics.",
    badges: ["Snowflake", "Analytics tools", "Dashboards", "KPIs"],
    bullets: [
      "Designed dashboards and analytics tools for operators, leadership, and customers",
      "Defined KPIs and reporting layers to support self-serve visibility",
      "Prioritized instrumentation early to enable stronger post-launch decisions",
      "Supported AI-driven features through clean data access, instrumentation, and feedback loops"
    ]
  }
];

export const technicalArchitectureLayers = [
  {
    label: "Product Layer",
    title: "User workflows",
    detail: "User-facing workflows, dashboards, and decision-support experiences."
  },
  {
    label: "Integration Layer",
    title: "APIs and services",
    detail: "External integrations, orchestration logic, business rules, and event-driven interactions."
  },
  {
    label: "Data Layer",
    title: "Pipelines and storage",
    detail: "Data pipelines, storage layers (S3), transformation workflows (Glue/DataBrew), and reporting-ready models."
  },
  {
    label: "Insight Layer",
    title: "Analytics and action",
    detail: "Dashboards, KPI tracking, self-serve analytics, and decision support for operators and leadership."
  },
  {
    label: "AI Systems",
    title: "AI Layer",
    detail: "AI-assisted workflows, retrieval (RAG), grounding strategies, and guardrails to ensure reliable and context-aware product behavior."
  }
];

export const sideProjects: SideProject[] = [
  {
    title: "AI Job Application Tracker",
    format: "Workflow product build",
    summary:
      "A full-stack application tracking system helping job seekers manage applications, track progress, and stay organized across opportunities.\n\nIntegrates job boards, tracking, notes, follow-ups, and contacts into a single workflow. AI features analyze job descriptions and assist with ATS-aligned resume updates.",
    proof:
      "Shows my ability to design and ship a complete product, combining workflow management, integrations, and AI-assisted features to solve a real user problem end-to-end.",
    tags: [
      "Product build",
      "AI workflows",
      "Integrations",
      "Workflow system",
      "Next.js",
      "Automation"
    ]
  },
  {
    title: "Local Chef Marketplace",
    format: "Marketplace product build",
    summary:
      "A marketplace platform connecting local food vendors with nearby customers, enabling discovery, ordering, and delivery of home-cooked meals.\n\nDesigned as an end-to-end e-commerce system with vendor listings, product catalogs, payments, and order fulfillment workflows tailored for small-scale food businesses.",
    proof:
      "Demonstrates my ability to design marketplace systems, handle supply-demand interactions, and structure end-to-end product flows from listing to transaction and fulfillment.",
    tags: [
      "Marketplace",
      "E-commerce",
      "Payments",
      "Local discovery",
      "Vendor platform"
    ]
  },
  {
    title: "Builder Sandbox",
    format: "API + systems prototypes",
    summary:
      "Small prototypes exploring API flows, data pipelines, telemetry, and system behavior — used to test ideas quickly and validate product patterns before scaling.",
    proof:
      "Reinforces an execution mindset — the ability to quickly move from idea to working prototype to validate workflows, integrations, and system design decisions.",
    tags: ["APIs", "Data pipelines", "Telemetry", "Builder mindset"]
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Product Manager",
    company: "Property Vista",
    location: "Toronto, ON",
    period: "Dec 2021 – Present",
    summary:
      "Owned product strategy and delivery for leasing and analytics platforms used by property management teams, with a focus on scalable workflows, measurable outcomes, and platform-ready systems across thousands of units.",
    highlights: [
      "Led 0→1 delivery of the Online Leasing Engine, connecting applications, verification workflows, payments, and e-signature into a unified leasing experience.",
      "Built analytics capabilities that transformed reporting into a reusable, customer-facing product for internal teams, GTM stakeholders, and external users.",
      "Partnered across design, engineering, legal, and go-to-market teams to ship products with strong operational reliability across leasing, analytics, and AI-assisted workflows."
    ]
  },
  {
    role: "Product Owner",
    company: "TD Canada Trust",
    location: "London, ON",
    period: "Jun 2019 – Nov 2021",
    summary:
      "Led product work across lending and digital banking workflows, translating business goals into structured product solutions while balancing customer needs, compliance requirements, and delivery constraints.",
    highlights: [
      "Delivered features supporting mortgage renewal and retention, focused on protecting balances and improving renewal outcomes.",
      "Collaborated with data, pricing, compliance, and delivery teams to define MVP scope, prioritize requirements, and support execution in a regulated environment.",
      "Introduced product structure to complex financial workflows where timing, trust, and operational accuracy were critical."
    ]
  }
];
