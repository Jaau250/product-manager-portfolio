export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type ProofPoint = {
  value: string;
  label: string;
  detail: string;
};

export type HeroHighlight = {
  title: string;
  body?: string;
  lines?: string[];
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
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  liveNote?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location?: string;
  period: string;
  summary: string;
  highlights: string[];
  sectionLabel?: string;
  tier?: "primary" | "earlier";
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

export const heroHighlights: HeroHighlight[] = [
  {
    title: "Focus",
    body:
      "AI, data, and platform products that drive measurable outcomes across financial and operational workflows."
  },
  {
    title: "Strength",
    body:
      "Systems thinking across APIs, integrations, and data workflows, bridging business needs with scalable solutions."
  },
  {
    title: "Fit",
    body:
      "Product Manager, Technical PM, and AI/Data Platform roles in FinTech and SaaS environments."
  },
  {
    title: "Verticals",
    lines: [
      "FinTech & Lending",
      "SaaS & Platform Products",
      "PropTech & Marketplaces"
    ]
  }
];

export const heroProofPoints: ProofPoint[] = [
  {
    value: "85%",
    label: "faster lease cycle",
    detail: "Turned fragmented leasing into a structured digital funnel."
  },
  {
    value: "Hours → Minutes",
    label: "reporting turnaround",
    detail: "Shifted analytics from manual pulls to decision-ready dashboards."
  },
  {
    value: ">$2B",
    label: "balances retained",
    detail: "Supported earlier renewal intervention across lending workflows."
  }
];

export const trustSignals = [
  "Property Vista",
  "TD Canada Trust",
  "Leasing platforms",
  "Analytics systems",
  "AI-assisted workflows",
  "Lending products"
];

export const operatingLens = [
  {
    title: "Workflow layer",
    body:
      "Orchestrated end-to-end leasing flows across Plaid, ID verification, credit checks, and e-signature into a single digital funnel."
  },
  {
    title: "System layer",
    body:
      "Defined API contracts across Propexo, Payroc, Plaid, and insurance integrations to build a reliable, extensible leasing platform."
  },
  {
    title: "Data layer",
    body:
      "Piped leasing and AI signals into self-serve dashboards, cutting reporting turnaround from hours to minutes."
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
      "Led the 0→1 build of a multi-integration leasing platform, orchestrating multiple integrations across identity verification, credit checks, banking data, payments, and e-signature into a unified product experience. Designed and scaled leasing workflows across thousands of units, enabling faster, fully digital application-to-lease conversion.",
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
        value: "5,000+",
        label: "Units supported",
        detail: "Scaled across multiple properties and operational teams with consistent system behavior."
      },
      {
        value: "1,000+",
        label: "Monthly applications processed",
        detail: "Built for sustained operational volume rather than one-time launches."
      },
      {
        value: "85%",
        label: "Reduction in time to lease",
        detail: "Shifted leasing from manual coordination to a structured, fully digital workflow."
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
      "Led the development of a centralized analytics platform serving internal teams, GTM functions, and customers through role-based access. Built data pipelines and dashboards that transformed leasing, operations, and AI assistant data into decision-ready insights. Instrumented AI leasing assistant and nurturing signals to support performance tracking and drive customer renewal conversations.",
    overview:
      "Vista Analytics transformed reporting into a product capability by turning fragmented operational data into reusable pipelines, governed data models, and self-serve analytics surfaces.\n\nThe platform unified leasing, maintenance requests, purchase orders, insurance data, tenant demographics, and AI-driven leasing signals into a single analytics layer.\n\nIt enabled internal teams and external customers to access consistent, decision-ready insights through embedded dashboards, Power BI integrations, and self-serve analytics tooling.",
    company: "Property Vista",
    period: "Dec 2021 - Present",
    liveUrl: "https://www.vidabypropertyvista.com/vida-analytics",
    tags: ["Analytics", "Data pipelines", "RBAC", "Customer analytics", "AI instrumentation"],
    users: [
      "Executives and operators preparing QBRs and monitoring performance KPIs",
      "Customer-facing teams requiring self-serve portfolio visibility",
      "Product and operations teams making prioritization and optimization decisions"
    ],
    stakeholders: [
      "Data and engineering teams (ETL, modeling, pipelines)",
      "External customers using Power BI and embedded dashboards",
      "Leadership requiring consistent cross-domain reporting"
    ],
    constraints: [
      "Source data was fragmented and not originally designed for product-grade analytics",
      "The solution had to support both internal reporting and customer-facing multi-tenant access",
      "AI-assisted insights needed to be credible, explainable, and grounded in trusted data"
    ],
    problem:
      "Operational and leasing data lived across disconnected systems, making reporting slow, inconsistent, and dependent on manual extraction and spreadsheet workflows.",
    approach: [
      "Started from business questions and KPI definitions before defining dashboards or outputs",
      "Prioritized reusable data models and pipelines over one-off reporting requests",
      "Designed analytics for adoption, trust, and governance as core product requirements"
    ],
    solution:
      "Delivered a centralized analytics platform built on reusable data pipelines, structured data models, and governed access controls.\n\nUnified leasing, maintenance, purchase orders, insurance, tenant demographics, and AI signals into one analytics layer.\n\nEnabled:\n- Superset dashboards for internal teams\n- Power BI integrations for customers\n- Real-time operational visibility",
    measurableOutcomes: [
      {
        value: "Hours → Minutes",
        label: "QBR preparation time",
        detail: "Replaced manual reporting workflows and spreadsheet stitching with structured dashboards."
      },
      {
        value: "Self-serve analytics",
        label: "Customer access",
        detail: "Enabled stakeholders to answer core business questions without relying on custom data pulls."
      },
      {
        value: "Real-time visibility",
        label: "Operational KPIs",
        detail: "Made leasing, funnel, and portfolio performance visible in near real-time."
      }
    ],
    responsibilities: [
      "Defined the analytics roadmap across leasing, maintenance, financial, and AI data domains",
      "Designed pipelines for maintenance requests, purchase orders, insurance, tenant demographics, and AI signals",
      "Enabled multi-tenant access for internal and external users",
      "Supported Power BI integrations and built internal analytics using Superset",
      "Positioned AI insights as decision-support, not black-box automation"
    ],
    technicalComponents: [
      "AWS Glue ETL pipelines for multi-domain data ingestion",
      "S3-backed storage and analytics-ready datasets",
      "Data modeling for tenant-aware, multi-tenant access",
      "Power BI connectors for external analytics access",
      "Superset dashboards for internal analytics",
      "Pipeline orchestration for data freshness and trust"
    ],
    tradeoffs: [
      "Prioritized data consistency and metric definition over rapidly shipping new dashboards",
      "Delayed AI-facing features until underlying data reliability and trust were established",
      "Balanced customer-facing flexibility with governance and multi-tenant access control"
    ],
    keyLearnings: [
      "Analytics products fail when metric definitions are inconsistent, even if the UI is strong",
      "Reusable data models create long-term leverage beyond individual dashboards",
      "AI-driven insights are only valuable when grounded in trusted, operational data"
    ],
    heroStat: "Analytics as a product surface",
    hideSupplementarySection: true,
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
      "This case study focuses on a mortgage renewal and retention platform designed to identify at-risk customers early, prioritize outreach, and improve renewal outcomes in a regulated financial environment.\n\nThe product combined customer data, segmentation models, and advisor workflows to enable timely, personalized engagement before customers entered high-risk churn windows.",
    company: "TD Canada Trust",
    period: "2019 - 2021",
    liveUrl: "https://www.td.com/ca/en/personal-banking/products/mortgages/mortgage-offers",
    tags: ["Fintech", "Customer data", "Retention strategy", "Scoring models"],
    users: [
      "Mortgage customers approaching renewal windows",
      "Advisors and servicing teams prioritizing outreach and offers",
      "Internal teams monitoring retention performance and portfolio health"
    ],
    stakeholders: [
      "Pricing, risk, and compliance teams defining guardrails",
      "Data and analytics teams supporting segmentation and scoring",
      "Business leaders focused on retention economics and portfolio value"
    ],
    constraints: [
      "Operated in a regulated environment with strict compliance and governance requirements",
      "Personalization and timing needed to improve retention without increasing operational complexity",
      "System design had to balance advisor usability with risk and pricing controls"
    ],
    problem:
      "Renewal opportunities were often identified too late or missed entirely, leading to preventable attrition and reduced portfolio retention.\n\nAdvisors lacked clear prioritization, and customer data was fragmented across systems, making it difficult to act with the right timing, context, and offer strategy.",
    approach: [
      "Focused MVP on earlier identification of renewal opportunities and better cohort prioritization",
      "Worked cross-functionally to align business, risk, and delivery teams around a shared workflow",
      "Used retention economics and customer timing signals to guide prioritization decisions"
    ],
    solution:
      "Delivered a renewal and retention workflow that surfaced at-risk customers earlier, enabled targeted outreach, and supported advisors with better timing, context, and next-best actions.\n\nIntegrated customer data, scoring models, and workflow orchestration into a unified system that improved decision-making and execution across the lending portfolio.",
    measurableOutcomes: [
      {
        value: ">$2B",
        label: "Mortgage balances retained",
        detail: "Retention strategy contributed to preserving significant mortgage balances through earlier intervention"
      },
      {
        value: "Earlier",
        label: "Renewal opportunity identification",
        detail: "Teams could act before customers entered high-risk renewal windows"
      },
      {
        value: "Lower",
        label: "Cost to retain vs. reacquire",
        detail: "Targeted outreach improved efficiency compared to reacquisition strategies"
      }
    ],
    responsibilities: [
      "Connected business strategy, customer journey design, and technical delivery for renewal programs",
      "Partnered with pricing, compliance, analytics, and engineering teams to define MVP scope and rollout strategy",
      "Helped shape segmentation logic, prioritization models, and advisor workflows",
      "Used customer and performance data to evaluate which cohorts, offers, and channels drove the highest retention impact"
    ],
    technicalComponents: [
      "Customer data pipelines feeding segmentation and prioritization workflows",
      "Scoring and cohort models for renewal timing and outreach strategy",
      "Integration with advisor tools, communication systems, and reporting layers",
      "Governance-aware workflow design aligned with compliance and risk requirements"
    ],
    tradeoffs: [
      "Balanced personalization and timing improvements against compliance and governance constraints",
      "Optimized for advisor decision support rather than fully automated renewal handling",
      "Prioritized practical execution over overly complex modeling early on"
    ],
    keyLearnings: [
      "In regulated environments, sequencing the right MVP builds credibility faster than over-engineering",
      "Retention improves when customer timing, segmentation, and economics are aligned",
      "Cross-functional alignment is critical in lending workflows where trust and accuracy matter"
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
    liveUrl: "https://job-tracker-mvp-rho.vercel.app/",
    liveNote: "Actively iterating — new features added regularly",
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
    liveUrl: "https://localchef.vercel.app/",
    liveNote: "Work in progress — core marketplace flows in development",
    tags: [
      "Marketplace",
      "E-commerce",
      "Payments",
      "Local discovery",
      "Vendor platform"
    ]
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
  },
  {
    role: "Business Analyst",
    company: "Actv8 Marketing",
    location: "Windsor, ON",
    period: "Jan 2018 – May 2019",
    summary:
      "Worked on data-driven marketing initiatives, translating business goals into measurable campaigns and system improvements.",
    highlights: [
      "Drove marketing initiatives that contributed to a 15% increase in revenue.",
      "Built metrics frameworks to surface inefficiencies and improve system performance.",
      "Translated business goals into structured requirements and execution plans.",
      "Delivered end-to-end solutions across CRM workflows and marketing systems."
    ],
    sectionLabel: "Early Career: Data & Business Analysis Foundations",
    tier: "earlier"
  },
  {
    role: "Business Analyst / Data Analyst",
    company: "Citi Bank",
    location: "Lagos, Nigeria",
    period: "Aug 2013 – Sep 2017",
    summary:
      "Supported financial systems and decision-making through data analysis, reporting, and process optimization.",
    highlights: [
      "Improved financial operations efficiency by 10% by identifying transaction bottlenecks and optimizing processing workflows.",
      "Enhanced transaction monitoring to detect anomalies and strengthen risk controls.",
      "Delivered executive-level insights from large-scale transaction data.",
      "Partnered with stakeholders to translate business needs into scalable system solutions."
    ],
    tier: "earlier"
  }
];
