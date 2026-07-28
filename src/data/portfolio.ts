export type NavigationItem = {
  label: string;
  href: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type HeroAction = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
  download?: boolean;
  ariaLabel?: string;
};

export type TimelineItem = {
  title: string;
  subtitle?: string;
  period?: string;
  description: string;
  bullets?: string[];
};

export type TechnologyGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  value: string;
  download?: boolean;
};

const contactDetails = {
  email: undefined,
  github: "https://github.com/inostrozabusiness-tech",
  linkedin: undefined,
  cv: "/documents/benjamin-inostroza-cv.pdf",
};

const contactLinks: ContactLink[] = [
  ...(contactDetails.email
    ? [
        {
          label: "Correo",
          href: `mailto:${contactDetails.email}`,
          value: contactDetails.email,
        },
      ]
    : []),
  ...(contactDetails.github
    ? [
        {
          label: "GitHub",
          href: contactDetails.github,
          value: "@inostrozabusiness-tech",
        },
      ]
    : []),
  ...(contactDetails.linkedin
    ? [
        {
          label: "LinkedIn",
          href: contactDetails.linkedin,
          value: contactDetails.linkedin,
        },
      ]
    : []),
  ...(contactDetails.cv
    ? [
        {
          label: "CV",
          href: contactDetails.cv,
          value: "Descargar currículum",
          download: true,
        },
      ]
    : []),
];

export const portfolio = {
  fullName: "Benjamín Inostroza",
  professionalTitle:
    "Desarrollador de software | Automatización y Robótica Industrial | IA aplicada",
  description:
    "Estudiante de Ingeniería en Informática con base en automatización y robótica industrial. Desarrolla productos digitales con foco en frontend, experiencia de usuario y soluciones tecnológicas aplicadas a problemas reales.",
  email: contactDetails.email,
  github: contactDetails.github,
  linkedin: contactDetails.linkedin,
  cv: contactDetails.cv,
  socialLinks: contactLinks.filter((item) =>
    ["Correo", "GitHub", "LinkedIn"].includes(item.label),
  ),
  hero: {
    eyebrow: "Portafolio profesional",
    title: "Benjamín Inostroza",
    description:
      "Construyo una presencia digital clara y profesional para comunicar experiencia técnica, formación y capacidad para crear soluciones modernas con impacto real.",
    profileHeading: "Enfoque profesional",
    profileSummary:
      "Mi perfil combina formación en informática, automatización y robótica industrial para diseñar productos digitales, interfaces modernas y soluciones orientadas al negocio.",
    actions: [
      {
        label: "Ver proyectos",
        href: "#projects",
        variant: "primary",
        ariaLabel: "Ver la sección de proyectos",
      },
      {
        label: "Descargar CV",
        href: contactDetails.cv,
        variant: "secondary",
        download: true,
        ariaLabel: "Descargar el currículum en PDF",
      },
      {
        label: "Contacto",
        href: "#contact",
        variant: "ghost",
        ariaLabel: "Ir a la sección de contacto",
      },
    ] satisfies HeroAction[],
    metrics: [
      {
        label: "Especialidad",
        value: "Frontend, arquitectura modular y soluciones digitales escalables.",
      },
      {
        label: "Base técnica",
        value: "Informática, automatización y robótica industrial.",
      },
      {
        label: "Interés actual",
        value: "IA aplicada, automatización de procesos y productos con foco en usuario.",
      },
    ],
    highlights: [
      {
        title: "Software",
        description:
          "Desarrollo de interfaces y experiencias web modernas con enfoque en claridad, mantenibilidad y evolución continua.",
      },
      {
        title: "Automatización",
        description:
          "Visión de sistemas e integración tecnológica para conectar procesos, datos y operación.",
      },
      {
        title: "IA aplicada",
        description:
          "Interés en incorporar inteligencia artificial a soluciones útiles, medibles y orientadas a resultados.",
      },
    ] satisfies HighlightItem[],
  },
  about: {
    title: "Sobre mí",
    intro:
      "Soy Benjamín Inostroza, estudiante de Ingeniería en Informática con una base complementaria en automatización y robótica industrial.",
    description:
      "Me interesa construir soluciones digitales que combinen criterio técnico, buena experiencia de usuario y una visión práctica del negocio.",
    highlights: [
      {
        title: "Perfil multidisciplinario",
        description:
          "Integro desarrollo de software con conocimientos de automatización y entornos industriales.",
      },
      {
        title: "Construcción digital",
        description:
          "Trabajo en interfaces, estructuras de contenido y productos que priorizan claridad, orden y mantenibilidad.",
      },
      {
        title: "Aprendizaje continuo",
        description:
          "Mantengo foco en fortalecer competencias en frontend, inteligencia artificial y soluciones tecnológicas aplicadas.",
      },
    ] satisfies HighlightItem[],
  },
  experience: {
    eyebrow: "Trayectoria",
    title: "Experiencia",
    description:
      "Experiencia orientada a proyectos personales y académicos donde convergen desarrollo de software, organización de información y enfoque en soluciones aplicadas.",
    items: [
      {
        title: "Desarrollo de software",
        subtitle: "Proyectos académicos y personales",
        description:
          "Participación en la construcción de interfaces y productos digitales para presentar información de forma clara, modular y profesional.",
        bullets: [
          "Desarrollo frontend con Next.js, React y TypeScript.",
          "Organización de contenido y arquitectura por componentes reutilizables.",
          "Enfoque en experiencia de usuario, legibilidad y evolución del producto.",
        ],
      },
      {
        title: "Automatización y tecnología aplicada",
        subtitle: "Base técnica complementaria",
        description:
          "Formación práctica para abordar soluciones con visión de procesos, integración de sistemas y comprensión operativa de entornos técnicos.",
        bullets: [
          "Criterio para conectar software con necesidades operativas reales.",
          "Interés en automatización de procesos y mejora continua.",
          "Capacidad para traducir necesidades técnicas en soluciones digitales.",
        ],
      },
    ] satisfies TimelineItem[],
  },
  projects: {
    eyebrow: "Trabajo destacado",
    title: "Proyectos",
    description:
      "Selección de trabajo reciente para mostrar enfoque técnico, estructura de implementación y presentación profesional.",
    items: [
      {
        title: "Portafolio profesional en Next.js",
        subtitle: "Proyecto personal",
        description:
          "Aplicación creada para centralizar información profesional desde una sola fuente de datos y presentar perfil, experiencia, formación y stack técnico en una interfaz moderna.",
        bullets: [
          "Next.js 15, React 19 y TypeScript.",
          "Composición modular por secciones reutilizables.",
          "Diseño oscuro con énfasis en jerarquía visual y claridad.",
        ],
      },
    ] satisfies TimelineItem[],
  },
  technologies: {
    eyebrow: "Stack",
    title: "Tecnologías",
    description:
      "Herramientas y áreas de trabajo que forman la base de mi perfil técnico actual.",
    groups: [
      {
        title: "Frontend",
        items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      },
      {
        title: "Desarrollo web",
        items: ["JavaScript", "HTML", "CSS", "Arquitectura modular"],
      },
      {
        title: "Herramientas",
        items: ["Git", "GitHub", "Framer Motion", "Diseño responsive"],
      },
      {
        title: "Especialización",
        items: [
          "Ingeniería en Informática",
          "Automatización",
          "Robótica Industrial",
          "IA aplicada",
        ],
      },
    ] satisfies TechnologyGroup[],
  },
  certifications: {
    eyebrow: "Validación",
    title: "Certificaciones",
    description: "Credenciales técnicas y formativas relevantes del perfil profesional.",
    items: [] as TimelineItem[],
  },
  education: {
    eyebrow: "Formación",
    title: "Educación",
    description:
      "Formación orientada al desarrollo de software, la integración tecnológica y la resolución de problemas con enfoque aplicado.",
    items: [
      {
        title: "Ingeniería en Informática",
        description:
          "Formación enfocada en desarrollo de software, estructuras lógicas, solución de problemas y construcción de productos digitales.",
      },
      {
        title: "Automatización y Robótica Industrial",
        description:
          "Base técnica para comprender procesos, integración de sistemas y operación en contextos industriales y tecnológicos.",
      },
    ] satisfies TimelineItem[],
  },
  contact: {
    eyebrow: "Conexión",
    title: "Contacto",
    description:
      "Canales profesionales disponibles para conversar sobre desarrollo de software, automatización y nuevos proyectos digitales.",
    availability:
      "Abierto a colaborar en iniciativas donde la tecnología aporte claridad operativa, experiencia de usuario y resultados medibles.",
    links: contactLinks,
  },
  footer: {
    note: "Disponible para colaborar en proyectos de software, automatización y productos digitales.",
  },
};

export const navigationItems: NavigationItem[] = [
  { label: "Sobre mí", href: "#about" },
  ...(portfolio.experience.items.length > 0
    ? [{ label: "Experiencia", href: "#experience" }]
    : []),
  ...(portfolio.projects.items.length > 0
    ? [{ label: "Proyectos", href: "#projects" }]
    : []),
  ...(portfolio.technologies.groups.length > 0
    ? [{ label: "Tecnologías", href: "#technologies" }]
    : []),
  ...(portfolio.certifications.items.length > 0
    ? [{ label: "Certificaciones", href: "#certifications" }]
    : []),
  ...(portfolio.education.items.length > 0
    ? [{ label: "Educación", href: "#education" }]
    : []),
  ...(portfolio.contact.links.length > 0
    ? [{ label: "Contacto", href: "#contact" }]
    : []),
];
