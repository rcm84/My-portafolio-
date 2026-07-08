export const dictionary = {
  es: {
    meta: {
      title: "Raymer Castañeda — Ingeniero de sistemas con AI",
      description:
        "Construyo sistemas con AI que convierten ideas en productos reales: automatización, APIs y plataformas escalables.",
    },
    nav: {
      work: "Proyectos",
      how: "Cómo trabajo",
      contact: "Contacto",
      langSwitch: "EN",
    },
    hero: {
      eyebrow: "Ingeniero full-stack · Sistemas con AI",
      title: "Construyo sistemas con AI que convierten ideas en productos reales",
      subtitle:
        "Ingeniero full-stack enfocado en automatización, integraciones con AI y sistemas basados en APIs para problemas reales.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Hablemos",
    },
    proof: {
      title: "Validación rápida",
      items: [
        "Sistemas y APIs con AI listos para producción",
        "Automatización de procesos reales (real estate, data systems)",
        "Plataformas escalables integrando múltiples fuentes de datos",
        "Enfoque en velocidad, ejecución e impacto real",
      ],
    },
    projects: {
      title: "Proyectos seleccionados",
      subtitle: "Sistemas reales, construidos de punta a punta.",
      viewProject: "Ver detalle",
      stackLabel: "Stack",
      highlightsLabel: "Highlights",
    },
    how: {
      title: "Cómo construyo",
      description:
        "No solo escribo código. Diseño sistemas que integran herramientas, automatizan procesos y generan resultados reales.",
      stackTitle: "Stack principal",
      stack: [
        { label: "Frontend", value: "Next.js, React, Tailwind" },
        { label: "Backend", value: "Node.js, Python, APIs REST" },
        { label: "Automatización", value: "Workflows, integraciones, jobs asíncronos" },
        { label: "AI", value: "LLMs, pipelines de datos, sistemas de evaluación" },
      ],
    },
    cta: {
      title: "¿Buscas construir algo real?",
      subtitle: "Hablemos sobre tu producto, sistema o integración.",
      button: "Escríbeme",
      githubLabel: "GitHub",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js y Tailwind CSS.",
    },
  },
  en: {
    meta: {
      title: "Raymer Castañeda — AI Systems Engineer",
      description:
        "I build AI-powered systems that turn ideas into real products: automation, APIs and scalable platforms.",
    },
    nav: {
      work: "Projects",
      how: "How I work",
      contact: "Contact",
      langSwitch: "ES",
    },
    hero: {
      eyebrow: "Full-stack engineer · AI systems",
      title: "I build AI-powered systems that turn ideas into real products",
      subtitle:
        "Full-stack engineer focused on automation, AI integrations and API-driven systems for real-world applications.",
      ctaPrimary: "View my work",
      ctaSecondary: "Let's talk",
    },
    proof: {
      title: "Quick proof",
      items: [
        "Built production-ready AI systems and APIs",
        "Automated real business workflows (real estate, data systems)",
        "Designed scalable platforms integrating multiple data sources",
        "Focused on speed, execution and real-world impact",
      ],
    },
    projects: {
      title: "Selected projects",
      subtitle: "Real systems, built end to end.",
      viewProject: "View details",
      stackLabel: "Stack",
      highlightsLabel: "Highlights",
    },
    how: {
      title: "How I build",
      description:
        "I don't just write code. I design systems that integrate tools, automate workflows and deliver real outcomes.",
      stackTitle: "Core stack",
      stack: [
        { label: "Frontend", value: "Next.js, React, Tailwind" },
        { label: "Backend", value: "Node.js, Python, REST APIs" },
        { label: "Automation", value: "Workflows, integrations, async jobs" },
        { label: "AI", value: "LLMs, data pipelines, evaluation systems" },
      ],
    },
    cta: {
      title: "Looking to build something real?",
      subtitle: "Let's talk about your product, system or integration.",
      button: "Email me",
      githubLabel: "GitHub",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js and Tailwind CSS.",
    },
  },
};

export function getDictionary(lang) {
  return dictionary[lang] || dictionary.es;
}
