export type NavigationItem = {
  label: string;
  href: string;
};

export type HighlightItem = {
  title: string;
  description: string;
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

export const navigationItems: NavigationItem[] = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Tecnologías", href: "#technologies" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Portafolio personal",
  title: "Benjamín Inostroza",
  subtitle:
    "Ingeniería en Informática con base en Automatización y Robótica Industrial.",
  description:
    "Una presencia digital sobria, premium y preparada para presentar experiencia, proyectos y visión tecnológica con claridad.",
  primaryAction: {
    label: "Ver proyectos",
    href: "#projects",
  },
  secondaryAction: {
    label: "Ir a contacto",
    href: "#contact",
  },
  highlights: [
    {
      title: "Perfil híbrido",
      description:
        "Cruza software, automatización y pensamiento sistémico en una misma narrativa profesional.",
    },
    {
      title: "Diseño enfocado",
      description:
        "Base visual minimalista para evolucionar el contenido sin rehacer la experiencia completa.",
    },
    {
      title: "Arquitectura escalable",
      description:
        "Secciones reutilizables y datos desacoplados para crecer con nuevas experiencias y logros.",
    },
  ] satisfies HighlightItem[],
};

export const aboutContent = {
  title: "Sobre mí",
  intro:
    "Benjamín Inostroza construye su marca personal desde la convergencia entre informática, automatización y robótica industrial.",
  description:
    "La estructura del sitio prioriza claridad, credibilidad y foco para comunicar perfil profesional, capacidades técnicas y próximos hitos sin depender de contenido de relleno.",
  highlights: [
    {
      title: "Visión de producto",
      description:
        "Cada bloque está pensado para presentar trayectoria, valor y diferenciación con una lectura rápida.",
    },
    {
      title: "Preparado para iterar",
      description:
        "El contenido se puede ampliar desde un único archivo de datos sin alterar la composición general.",
    },
    {
      title: "Experiencia premium",
      description:
        "Tema oscuro, contraste cuidado y ritmo visual consistente para transmitir profesionalismo.",
    },
  ] satisfies HighlightItem[],
};

export const experienceItems: TimelineItem[] = [];

export const projectItems: TimelineItem[] = [];

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js 15", "TypeScript", "Tailwind CSS", "App Router"],
  },
  {
    title: "Experiencia",
    items: ["Responsive Design", "Accesibilidad", "Arquitectura modular"],
  },
  {
    title: "Base técnica",
    items: [
      "Ingeniería en Informática",
      "Automatización",
      "Robótica Industrial",
    ],
  },
];

export const certificationItems: TimelineItem[] = [];

export const educationItems: TimelineItem[] = [
  {
    title: "Ingeniería en Informática",
    description:
      "Formación orientada al desarrollo de software, resolución de problemas y construcción de soluciones digitales escalables.",
  },
  {
    title: "Automatización y Robótica Industrial",
    description:
      "Base técnica que aporta criterio operativo, integración entre sistemas y comprensión de entornos industriales.",
  },
];

export const contactContent = {
  title: "Contacto",
  description:
    "La sección queda preparada para integrar correo profesional, LinkedIn, GitHub o cualquier canal principal cuando el contenido definitivo esté disponible.",
  channels: ["Correo profesional", "LinkedIn", "GitHub"],
};
