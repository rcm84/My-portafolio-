const projects = [
  {
    slug: "wearable-data-platform",
    title: {
      es: "Plataforma de Datos de Wearables",
      en: "Wearable Data Platform",
    },
    tagline: {
      es: "API unificada y dashboard para integración de datos de salud",
      en: "Unified API and dashboard for wearable data integration",
    },
    description: {
      es:
        "Sistema que agrega datos de wearables, los normaliza y los expone mediante una API y dashboard unificados. Diseñado como base para aplicaciones de salud con AI.",
      en:
        "Built a system that aggregates wearable and health-related data, normalizes it, and exposes it through a unified API and dashboard. Designed as a foundation for AI-driven health applications.",
    },
    highlights: {
      es: [
        "Integración de múltiples fuentes",
        "Arquitectura API-first",
        "Escalable y listo para AI",
        "Deploy con Docker",
      ],
      en: [
        "Multi-source data integration",
        "API-first architecture",
        "Scalable and AI-ready",
        "Dockerized deployment",
      ],
    },
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    year: "2025",
    links: { repo: "https://github.com/rcm84", demo: null },
  },
  {
    slug: "ai-real-estate-engine",
    title: {
      es: "Motor AI de Leads y Oportunidades Inmobiliarias",
      en: "AI Real Estate Lead & Opportunity Engine",
    },
    tagline: {
      es: "Sistema automatizado para capturar, analizar y priorizar oportunidades",
      en: "Automated system to capture, analyze and prioritize real estate opportunities",
    },
    description: {
      es:
        "Sistema que captura leads desde redes sociales, procesa requerimientos y recomienda propiedades de alto valor según datos del mercado y potencial de monetización.",
      en:
        "Developed a system that captures leads from social platforms, processes user requirements, and recommends high-value properties based on market data and monetization potential.",
    },
    highlights: {
      es: [
        "Captura automática de leads",
        "Procesamiento con workflows",
        "Priorización de oportunidades",
        "Enfoque en generación de valor",
      ],
      en: [
        "Lead capture automation (social platforms)",
        "Workflow-driven processing",
        "Opportunity prioritization",
        "Business-focused decision system",
      ],
    },
    stack: ["Python", "FastAPI", "n8n", "PostgreSQL"],
    year: "2025",
    links: { repo: "https://github.com/rcm84", demo: null },
  },
  {
    slug: "ai-audit-engine",
    title: {
      es: "Motor Automatizado de Auditoría con AI",
      en: "Automated AI Audit & Reporting Engine",
    },
    tagline: {
      es: "Sistema API que evalúa sitios web y genera reportes automáticamente",
      en: "API system that evaluates websites and generates structured reports automatically",
    },
    description: {
      es:
        "Plataforma API-first que audita sitios web usando métricas configurables con AI y genera reportes estructurados. Diseñada para automatización, escalabilidad e integración en otros sistemas.",
      en:
        "Built an API-first platform that audits websites using configurable AI metrics and generates detailed reports. Designed for automation, scalability and integration into other systems.",
    },
    highlights: {
      es: [
        "Evaluación con AI",
        "Procesamiento asíncrono",
        "Generación de reportes",
        "Backend orientado a API",
      ],
      en: [
        "AI-based evaluation",
        "Async job processing",
        "Report generation",
        "API-first backend",
      ],
    },
    stack: ["Node.js", "Python", "Redis", "OpenAI API"],
    year: "2026",
    links: { repo: "https://github.com/rcm84", demo: null },
  },
];

export default projects;
