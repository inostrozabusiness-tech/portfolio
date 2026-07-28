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
  eyebrow: "Software engineer portfolio",
  title: "Benjamín Inostroza",
  subtitle:
    "Estudiante de Ingeniería en Informática | Automatización y Robótica Industrial | Desarrollo de Software | IA",
  description:
    "Hero de alto impacto, minimalista y escalable para comunicar una identidad profesional sólida desde el primer scroll.",
  actions: [
    {
      label: "Ver proyectos",
      href: "#projects",
      variant: "primary",
      ariaLabel: "Ver la sección de proyectos",
    },
    {
      label: "Descargar CV",
      href: "/documents/benjamin-inostroza-cv.pdf",
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
      label: "Enfoque",
      value: "Software, automatización e IA aplicados a soluciones reales.",
    },
    {
      label: "Diseño",
      value: "Interfaz premium con énfasis en claridad, jerarquía y elegancia.",
    },
    {
      label: "Escalabilidad",
      value: "Base modular preparada para iterar contenido y nuevas secciones.",
    },
  ],
  highlights: [
    {
      title: "Automatización",
      description:
        "Una base industrial que aporta criterio operativo, integración y visión de sistemas.",
    },
    {
      title: "Desarrollo",
      description:
        "Arquitectura frontend limpia para mostrar proyectos, experiencia y evolución técnica.",
    },
    {
      title: "IA",
      description:
        "Espacio preparado para posicionar iniciativas y capacidades ligadas a inteligencia artificial.",
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
