/**
 * All site copy lives here. Edit this file to update the website —
 * components read from it and never hard-code content.
 *
 * Only publish facts you can stand behind. Sections backed by an empty
 * list (case studies, openings, socials) are hidden until you add entries.
 */

export const site = {
  name: "Utsaha Vision",
  legalName: "Utsaha Vision",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://utsahavision.com",
  tagline: "From vision to intelligent software.",
  description:
    "Utsaha Vision is a custom software development and AI/ML company. We design, build and scale web, mobile and enterprise software, with intelligence built in, for startups and enterprises worldwide.",
  email: "utsahavision@gmail.com",
  /** Inbox that receives contact-form submissions via formsubmit.co */
  formEmail: "utsahavision@gmail.com",
  careersEmail: "utsahavision@gmail.com",
  /** Optional, e.g. "+977 98XXXXXXXX". Hidden when empty. */
  phone: "",
  location: "Nepal",
  /** Add real profile URLs, e.g. { label: "LinkedIn", href: "https://www.linkedin.com/company/..." } */
  socials: [] as { label: string; href: string }[],
};

export type IconKey =
  | "brain" | "sparkles" | "code" | "mobile" | "cloud" | "chart" | "design" | "megaphone"
  | "bank" | "health" | "education" | "retail" | "logistics" | "agri" | "travel" | "gov"
  | "eye" | "message" | "trend" | "bot"
  | "boxes" | "users" | "layers" | "dashboard" | "workflow" | "cart" | "wallet" | "plug";

export type Service = {
  slug: string;
  icon: IconKey;
  title: string;
  short: string;
  intro: string;
  offerings: { title: string; body: string }[];
  outcomes: string[];
  tech: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    icon: "code",
    title: "Custom Software Development",
    short: "Bespoke web platforms, SaaS products and enterprise systems built around your business.",
    intro:
      "Off-the-shelf tools force you to adapt to them. We build software that adapts to you: secure, scalable and engineered around your exact workflows, from MVP to enterprise platform.",
    offerings: [
      { title: "Web application development", body: "High-performance web apps, portals and dashboards built with modern frameworks." },
      { title: "SaaS product engineering", body: "Multi-tenant platforms with subscriptions, billing, analytics and admin tooling." },
      { title: "Enterprise software", body: "ERP, CRM, HRMS and operations systems tailored to how your organization works." },
      { title: "APIs & system integration", body: "Secure APIs and integrations with ERPs, CRMs, payment gateways and third-party services." },
      { title: "Legacy modernization", body: "Incremental re-platforming of aging systems to cloud-native architectures without downtime." },
      { title: "MVP & product development", body: "Validate ideas fast with a production-ready MVP, then scale it with confidence." },
      { title: "QA & test automation", body: "Manual and automated testing, performance and security testing built into every sprint." },
      { title: "Maintenance & support", body: "SLA-backed support, monitoring, security patches and continuous feature development." },
    ],
    outcomes: ["Software that fits your workflows", "Faster time-to-market", "Lower long-term maintenance cost", "Full ownership of code and IP"],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "NestJS", "Python", "Django", "Go", ".NET", "PostgreSQL", "Redis", "AWS"],
  },
  {
    slug: "ai-machine-learning",
    icon: "brain",
    title: "AI & Machine Learning",
    short: "Custom models, predictive analytics and computer vision, built for production.",
    intro:
      "We turn your data into a competitive advantage. Our ML engineers design, train and deploy models that run reliably at scale, with the monitoring and governance enterprises expect.",
    offerings: [
      { title: "Predictive analytics", body: "Forecasting, churn, risk scoring and demand planning models tied to business KPIs." },
      { title: "Computer vision", body: "Detection, classification, OCR and visual inspection for images and video streams." },
      { title: "Recommendation systems", body: "Personalization engines that lift engagement, retention and order value." },
      { title: "MLOps", body: "CI/CD for models, feature stores, drift monitoring and automated retraining." },
    ],
    outcomes: ["Faster, data-driven decisions", "Automated manual workflows", "Models that stay accurate over time"],
    tech: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "MLflow", "Airflow"],
  },
  {
    slug: "generative-ai",
    icon: "sparkles",
    title: "Generative AI & LLMs",
    short: "AI assistants, RAG systems and agentic workflows grounded in your data.",
    intro:
      "From proof-of-concept to enterprise rollout, we build secure generative AI applications that understand your domain, cite their sources and integrate with the tools your team already uses.",
    offerings: [
      { title: "AI assistants & copilots", body: "Chat and voice assistants for customers, sales and internal support teams." },
      { title: "Retrieval-augmented generation", body: "Accurate, citation-backed answers over your documents and knowledge bases." },
      { title: "AI agents & automation", body: "Multi-step agents that research, draft, classify and act across your systems." },
      { title: "LLM evaluation & safety", body: "Guardrails, evaluation suites and cost/latency optimization for production." },
    ],
    outcomes: ["Hours saved on knowledge work", "Consistent, on-brand responses", "Private, compliant deployments"],
    tech: ["Claude", "OpenAI", "LangGraph", "LlamaIndex", "pgvector", "Pinecone", "Hugging Face"],
  },
  {
    slug: "mobile-app-development",
    icon: "mobile",
    title: "Mobile App Development",
    short: "Native and cross-platform apps for iOS and Android.",
    intro:
      "We design and build mobile experiences people love to use, with offline support, push notifications, secure payments and analytics baked in from day one.",
    offerings: [
      { title: "Cross-platform apps", body: "One codebase for iOS and Android with Flutter or React Native." },
      { title: "Native development", body: "Swift and Kotlin apps when performance and platform features matter most." },
      { title: "App modernization", body: "Redesigns, performance tuning and migration of aging apps." },
      { title: "Store launch & growth", body: "App Store/Play Store release, ASO and in-app analytics." },
    ],
    outcomes: ["Higher user engagement", "Consistent cross-device experience", "Smooth store approvals"],
    tech: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Expo"],
  },
  {
    slug: "cloud-devops",
    icon: "cloud",
    title: "Cloud & DevOps",
    short: "Cloud architecture, migration, CI/CD and infrastructure as code.",
    intro:
      "We help teams ship faster and sleep better, with secure cloud foundations, automated pipelines and observability that keeps systems healthy and costs under control.",
    offerings: [
      { title: "Cloud migration", body: "Assessment, planning and migration to AWS, Azure or Google Cloud." },
      { title: "CI/CD automation", body: "Automated build, test and deploy pipelines for every commit." },
      { title: "Infrastructure as code", body: "Reproducible environments with Terraform and Kubernetes." },
      { title: "Monitoring & cost optimization", body: "Observability, alerting and FinOps practices that cut waste." },
    ],
    outcomes: ["Higher uptime", "Faster, safer releases", "Optimized cloud spend"],
    tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    slug: "data-analytics",
    icon: "chart",
    title: "Data Engineering & Analytics",
    short: "Data pipelines, warehouses and BI dashboards that drive decisions.",
    intro:
      "We build the data foundation every AI initiative needs: reliable pipelines, well-modeled warehouses and dashboards that put the right numbers in front of the right people.",
    offerings: [
      { title: "Data pipelines", body: "Batch and real-time ingestion from apps, databases and third-party APIs." },
      { title: "Data warehousing", body: "Modern warehouses and lakehouses modeled for analytics." },
      { title: "BI & dashboards", body: "Self-serve dashboards and reporting for leadership and operations." },
      { title: "Data governance", body: "Quality checks, lineage and access controls you can audit." },
    ],
    outcomes: ["A single source of truth", "Real-time visibility", "AI-ready data"],
    tech: ["dbt", "Apache Spark", "Kafka", "BigQuery", "Snowflake", "Power BI", "Metabase"],
  },
  {
    slug: "ui-ux-design",
    icon: "design",
    title: "UI/UX & Product Design",
    short: "Research-led product design, design systems and prototyping.",
    intro:
      "Great software starts with understanding people. Our designers turn research into intuitive interfaces and scalable design systems that make products easy to use and easy to build.",
    offerings: [
      { title: "User research", body: "Interviews, usability testing and journey mapping." },
      { title: "UI design", body: "Modern, accessible interfaces for web and mobile." },
      { title: "Design systems", body: "Reusable components and guidelines that keep products consistent." },
      { title: "Prototyping", body: "Clickable prototypes to validate ideas before writing code." },
    ],
    outcomes: ["Higher conversion and satisfaction", "Faster development", "Accessible experiences"],
    tech: ["Figma", "FigJam", "Framer", "Maze", "Storybook"],
  },
  {
    slug: "digital-marketing",
    icon: "megaphone",
    title: "Digital Growth & Marketing",
    short: "SEO, performance marketing and conversion optimization.",
    intro:
      "We help brands get found and grow online with data-driven SEO, paid campaigns and conversion optimization, measured against the metrics that matter to your business.",
    offerings: [
      { title: "SEO", body: "Technical, on-page and content SEO to grow organic traffic." },
      { title: "Performance marketing", body: "Google, Meta and LinkedIn campaigns optimized for ROI." },
      { title: "Conversion optimization", body: "A/B testing and funnel analytics to turn visitors into customers." },
      { title: "Marketing analytics", body: "Tracking, attribution and reporting set up correctly." },
    ],
    outcomes: ["More qualified leads", "Lower acquisition cost", "Clear marketing ROI"],
    tech: ["GA4", "Google Tag Manager", "Search Console", "Meta Ads", "HubSpot"],
  },
];

export const customSoftware = {
  eyebrow: "Custom software development",
  title: "Software built around your business, not the other way around.",
  intro:
    "Every organization runs differently. We design and engineer custom software that matches your processes, integrates with your existing systems and scales as you grow, with AI built in where it adds real value.",
  points: [
    "Dedicated product team: PM, architects, engineers, QA",
    "Clean, documented, maintainable code",
    "Agile delivery with demos every two weeks",
    "100% source code & IP ownership",
  ],
  solutions: [
    { icon: "boxes" as IconKey, title: "ERP & operations", body: "Inventory, procurement, production and finance in one system." },
    { icon: "users" as IconKey, title: "CRM & sales platforms", body: "Pipelines, customer portals and automated follow-ups." },
    { icon: "layers" as IconKey, title: "SaaS products", body: "Multi-tenant platforms with billing and analytics." },
    { icon: "dashboard" as IconKey, title: "Portals & dashboards", body: "Customer, partner and employee portals with real-time data." },
    { icon: "workflow" as IconKey, title: "Workflow automation", body: "Digitize approvals, forms and paper-based processes." },
    { icon: "cart" as IconKey, title: "E-commerce & marketplaces", body: "Storefronts, multi-vendor marketplaces and POS integrations." },
    { icon: "wallet" as IconKey, title: "Fintech & payments", body: "Wallets, lending, payment gateways and reconciliation." },
    { icon: "education" as IconKey, title: "Management systems", body: "School, hospital, HR and property management software." },
  ],
  standards: [
    { title: "Scalable architecture", body: "Modular, cloud-native designs (monolith-first or microservices) chosen for your scale, not trends." },
    { title: "Code quality", body: "Peer code reviews, linting, typed languages and coding standards on every pull request." },
    { title: "Automated testing", body: "Unit, integration and end-to-end tests run in CI before anything reaches production." },
    { title: "Security first", body: "OWASP practices, encryption, role-based access control and regular vulnerability scans." },
    { title: "DevOps & CI/CD", body: "Automated pipelines, infrastructure as code and zero-downtime deployments." },
    { title: "Documentation & handover", body: "Architecture docs, API references and knowledge transfer so your team is never locked in." },
  ],
  stackGroups: [
    { label: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", items: ["Node.js", "NestJS", "Python", "Django", "FastAPI", "Go", ".NET"] },
    { label: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
    { label: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"] },
    { label: "Cloud & DevOps", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"] },
  ],
  faqs: [
    {
      q: "Should I build custom software or use an off-the-shelf product?",
      a: "Off-the-shelf works when your process is standard. Custom software pays off when your workflows are a competitive advantage, when you need deep integrations, or when per-user license costs grow faster than your business. We'll give you an honest recommendation in the discovery call.",
    },
    {
      q: "How do you choose the technology stack?",
      a: "We choose based on your requirements, team skills, scalability needs and long-term maintenance cost, favoring proven, well-supported technologies over hype.",
    },
    {
      q: "Can you work on an existing codebase?",
      a: "Yes. We start with a code and architecture audit, then stabilize, document and extend your system, or plan an incremental modernization.",
    },
    {
      q: "Will we be locked in to Utsaha Vision?",
      a: "No. You own all code and IP, everything lives in your repositories, and we provide documentation and handover so any team can take it forward.",
    },
  ],
};

export const nav = [
  { label: "Services", href: "/services", children: true },
  { label: "Industries", href: "/#industries" },
  { label: "Work", href: "/work", requiresWork: true },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export const hero = {
  eyebrow: "Custom software & AI development company",
  title: "From vision to",
  highlight: "intelligent software.",
  subtitle:
    "We design, build and scale custom software for startups and enterprises: web platforms, mobile apps and enterprise systems, with AI and machine learning built in where it creates real value.",
  primaryCta: { label: "Talk to an expert", href: "/contact" },
  secondaryCta: { label: "Explore services", href: "/services" },
  highlights: ["Custom Software", "Web & Mobile Apps", "AI/ML & GenAI", "Cloud & DevOps"],
};

export const aiShowcase = {
  eyebrow: "AI at the core",
  title: "AI that ships to production, not just to slides.",
  subtitle:
    "We combine applied research with solid engineering to deliver AI systems that are accurate, explainable and secure.",
  capabilities: [
    {
      key: "genai",
      icon: "bot" as IconKey,
      label: "Generative AI",
      title: "Assistants and agents grounded in your knowledge",
      body: "Deploy LLM-powered assistants that answer from your documents with citations, automate multi-step tasks and plug into your existing tools, all with enterprise-grade privacy.",
      points: ["Retrieval-augmented generation", "Agentic workflows", "Guardrails & evaluation"],
      useCases: ["Customer support assistants", "Internal knowledge search", "Document drafting & review"],
    },
    {
      key: "vision",
      icon: "eye" as IconKey,
      label: "Computer Vision",
      title: "Machines that see, inspect and understand",
      body: "From quality inspection on production lines to document OCR and video analytics, our vision models turn pixels into structured, actionable data.",
      points: ["Object detection & tracking", "OCR & document parsing", "Edge deployment"],
      useCases: ["Quality inspection", "ID & invoice scanning", "Footfall and traffic analytics"],
    },
    {
      key: "predictive",
      icon: "trend" as IconKey,
      label: "Predictive Analytics",
      title: "Forecast demand, risk and behavior",
      body: "Anticipate what's next with forecasting and scoring models trained on your historical data and continuously retrained as conditions change.",
      points: ["Demand forecasting", "Credit & fraud risk", "Churn prediction"],
      useCases: ["Inventory planning", "Loan & risk assessment", "Customer retention"],
    },
    {
      key: "nlp",
      icon: "message" as IconKey,
      label: "NLP",
      title: "Understand language at scale",
      body: "Classify tickets, extract entities from contracts, analyze sentiment and support users in multiple languages.",
      points: ["Text classification", "Information extraction", "Multilingual models"],
      useCases: ["Ticket routing", "Contract data extraction", "Feedback & sentiment analysis"],
    },
  ],
};

export const industries: { icon: IconKey; title: string; body: string }[] = [
  { icon: "bank", title: "Banking & Fintech", body: "Digital banking, payments, credit scoring and fraud detection." },
  { icon: "health", title: "Healthcare", body: "Telehealth, patient platforms and medical imaging AI." },
  { icon: "education", title: "Education", body: "Learning platforms, school management and adaptive learning." },
  { icon: "retail", title: "Retail & E-commerce", body: "Storefronts, personalization and demand forecasting." },
  { icon: "logistics", title: "Logistics", body: "Fleet tracking, route optimization and warehouse automation." },
  { icon: "agri", title: "Agriculture", body: "Crop analytics, supply-chain visibility and farmer apps." },
  { icon: "travel", title: "Travel & Hospitality", body: "Booking engines, guest experience and revenue management." },
  { icon: "gov", title: "Government & NGOs", body: "Citizen services, data platforms and digital public goods." },
];

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  /** Measured outcomes, e.g. { value: "40%", label: "less manual data entry" } */
  results: { value: string; label: string }[];
  stack: string[];
  tone: "ember" | "ink" | "sky" | "stone";
};

/**
 * Real, client-approved projects only. While this list is empty the
 * "Work" pages, nav link and case-study sections are hidden.
 */
export const caseStudies: CaseStudy[] = [];
export const hasWork = caseStudies.length > 0;

export const engagementModels = [
  {
    title: "Fixed-scope project",
    body: "Clearly defined scope, timeline and budget. Ideal for MVPs, proofs-of-concept and well-specified builds.",
    points: ["Agreed price & milestones", "Detailed specification", "Predictable delivery"],
  },
  {
    title: "Dedicated team",
    body: "A cross-functional team (engineers, designers, QA and a delivery manager) working exclusively on your product.",
    points: ["Scale the team as needed", "Full transparency", "Long-term product ownership"],
    featured: true,
  },
  {
    title: "Team augmentation",
    body: "Add vetted AI, software or DevOps specialists to your in-house team to close skill gaps fast.",
    points: ["Quick onboarding", "Your processes & tools", "Flexible contracts"],
  },
];

export const processSteps = [
  { title: "Discover", body: "Workshops to understand your goals, users, data and constraints, and define what success looks like." },
  { title: "Design", body: "Solution architecture, UX prototypes and a delivery roadmap with clear milestones." },
  { title: "Build", body: "Two-week agile sprints with demos, automated tests and CI/CD from day one." },
  { title: "Deploy", body: "Secure launch to production with monitoring, documentation and team handover." },
  { title: "Evolve", body: "Ongoing support, model retraining and continuous improvement as you grow." },
];

export const whyUs = [
  { title: "AI-first engineering", body: "AI expertise is built into every team, not sold as an add-on." },
  { title: "Hands-on leadership", body: "The people who scope your project stay involved through delivery." },
  { title: "Security by design", body: "Secure coding, access control and data privacy from the first commit." },
  { title: "Transparent communication", body: "Weekly demos, shared boards and a single point of contact." },
  { title: "Cost-effective", body: "Quality engineering from Nepal at a competitive cost." },
  { title: "Long-term partnership", body: "We support, maintain and evolve what we build together." },
];

export const techStack = [
  "Python", "PyTorch", "TensorFlow", "LangChain", "Hugging Face", "OpenCV",
  "TypeScript", "React", "Next.js", "Node.js", "Django", "FastAPI",
  "Flutter", "React Native", "PostgreSQL", "MongoDB", "Docker", "Kubernetes",
  "AWS", "Google Cloud", "Azure", "Terraform",
];

export const about = {
  title: "Built on enthusiasm. Driven by vision.",
  intro:
    "Utsaha (उत्साह) means enthusiasm: the energy to begin and the drive to see things through. We pair that energy with a clear vision of how AI and modern software can transform the way organizations work.",
  story: [
    "Utsaha Vision is a software and AI company from Nepal. We build custom software, from web platforms and mobile apps to enterprise systems, and bring AI into it where it solves a real problem.",
    "We work closely with each client, keep communication clear and honest, and build software that is meant to be maintained and grown for years.",
  ],
  mission:
    "To help organizations unlock the power of AI and software through reliable engineering, thoughtful design and genuine partnership.",
  vision:
    "To be a trusted software and AI partner, known for quality, integrity and impact.",
  values: [
    { title: "Outcome over output", body: "We measure success by the impact we create, not hours billed." },
    { title: "Craft & quality", body: "We take pride in clean code, thoughtful design and thorough testing." },
    { title: "Responsible AI", body: "Privacy, fairness and transparency are non-negotiable." },
    { title: "Ownership", body: "We act like owners and treat every product as if it were our own." },
    { title: "Curiosity", body: "We keep learning and bring the latest proven ideas to our clients." },
    { title: "Integrity", body: "Honest estimates, clear communication and no surprises." },
  ],
};

export const careers = {
  title: "Build great software with us.",
  intro:
    "Join a team that values curiosity, craft and ownership. Work on meaningful software and AI products for real clients, right here in Nepal.",
  perks: [
    { title: "Meaningful work", body: "Build real software and AI products that clients rely on every day." },
    { title: "Modern stack", body: "Work with current tools and frameworks across web, mobile, cloud and AI." },
    { title: "Learn by doing", body: "Code reviews, pairing and knowledge sharing help everyone grow." },
    { title: "Ownership", body: "Take responsibility for your work and see its impact directly." },
  ],
  /** Add real roles, e.g. { title: "Flutter Developer", type: "Full-time", location: "Kathmandu" }. */
  openings: [] as { title: string; type: string; location: string }[],
};

export const faqs = [
  {
    q: "What services does Utsaha Vision offer?",
    a: "Our core is custom software development (web platforms, SaaS, enterprise systems and mobile apps), combined with AI/ML and generative AI, cloud & DevOps, data engineering, UI/UX design and digital growth.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope, complexity and engagement model. After an initial conversation about your needs, we share a proposal with transparent pricing. Many projects start with a focused first phase.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "It depends on scope. A focused MVP or AI proof-of-concept usually takes a few weeks to a few months. Larger platforms are delivered in phases, with working software shipped every sprint.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We can work across time zones, with overlapping working hours, regular video calls and shared project tools for full visibility.",
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do. All source code, models and designs created for your project are transferred to you, and we're happy to sign an NDA before any discussion.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. We offer maintenance and support plans covering monitoring, bug fixes, security updates, model retraining and new feature development.",
  },
];
