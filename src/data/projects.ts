export type ProjectStatus = "production" | "beta" | "in-progress";

export type ProjectRepository = {
  owner: string;
  repo: string;
  branch?: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectItem = {
  slug: string;
  name: string;
  description: string;
  category: string;
  technologies: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
  tags: string[];
  image: ProjectImage;
  repository?: ProjectRepository;
};

export type ProjectCatalog = {
  source: {
    provider: "manual";
    nextProvider: "github";
  };
  items: ProjectItem[];
};

export const projectCatalog: ProjectCatalog = {
  source: {
    provider: "manual",
    nextProvider: "github",
  },
  items: [
    {
      slug: "portfolio-nextjs",
      name: "Portafolio profesional en Next.js",
      description:
        "Portafolio modular orientado a producción, construido desde una fuente de datos reusable para presentar experiencia, formación y proyectos con una identidad visual premium.",
      category: "Frontend",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
      status: "production",
      github: "https://github.com/inostrozabusiness-tech/portfolio",
      tags: ["Responsive", "SEO", "Portfolio", "UI premium"],
      image: {
        src: "/images/projects/portfolio-premium.svg",
        alt: "Vista conceptual de un portafolio profesional con paneles premium y acentos cian.",
      },
      repository: {
        owner: "inostrozabusiness-tech",
        repo: "portfolio",
        branch: "main",
      },
    },
    {
      slug: "ops-hub-dashboard",
      name: "Centro de monitoreo operativo",
      description:
        "Dashboard pensado para visualizar métricas, eventos y estados críticos de procesos industriales con foco en lectura rápida, trazabilidad y seguimiento operacional.",
      category: "Automatización",
      technologies: ["Next.js", "TypeScript", "Charts", "IoT", "Arquitectura modular"],
      status: "beta",
      tags: ["Monitoreo", "KPIs", "Industrial", "Tiempo real"],
      image: {
        src: "/images/projects/ops-dashboard.svg",
        alt: "Interfaz conceptual de un dashboard operativo con métricas, gráficos y estados de monitoreo.",
      },
      repository: {
        owner: "inostrozabusiness-tech",
        repo: "ops-hub-dashboard",
      },
    },
    {
      slug: "ai-knowledge-assistant",
      name: "Asistente documental con IA",
      description:
        "Experiencia enfocada en centralizar documentación técnica, acelerar búsquedas y generar respuestas contextualizadas para equipos que trabajan con procesos, manuales y activos de conocimiento.",
      category: "IA aplicada",
      technologies: ["React", "TypeScript", "Embeddings", "RAG", "Automatización"],
      status: "in-progress",
      tags: ["Knowledge base", "Copiloto", "Búsqueda semántica", "Productividad"],
      image: {
        src: "/images/projects/ai-knowledge.svg",
        alt: "Composición conceptual de un asistente documental con IA y flujos de conocimiento conectados.",
      },
      repository: {
        owner: "inostrozabusiness-tech",
        repo: "ai-knowledge-assistant",
      },
    },
  ],
};

export const projectStatusLabels: Record<ProjectStatus, string> = {
  production: "En producción",
  beta: "Beta",
  "in-progress": "En desarrollo",
};

export function getProjects() {
  return projectCatalog.items;
}

export function getProjectCategories(projects = getProjects()) {
  return ["Todos", ...new Set(projects.map((project) => project.category))];
}
