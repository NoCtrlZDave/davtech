export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  github: string;
  demo?: string;
  tech: string[];
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "portfolio-site",
    name: "Portfolio Site",
    description:
      "A premium personal portfolio built with React, TypeScript, Tailwind, and Framer Motion.",
    category: "Frontend",
    image: "/projects/placeholder.svg",
    github: "https://github.com/noctrlzdave/portfolio",
    demo: "https://example.com",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    featured: true,
  },
  {
    id: "ecommerce-dashboard",
    name: "E-commerce Dashboard",
    description:
      "A modern analytics dashboard focused on clarity, speed, and conversion insights.",
    category: "Dashboard",
    image: "/projects/placeholder.svg",
    github: "https://github.com/noctrlzdave/ecommerce-dashboard",
    demo: "https://example.com",
    tech: ["React", "Charts", "Tailwind CSS"],
  },
  {
    id: "saas-landing",
    name: "SaaS Landing Page",
    description:
      "A conversion-first landing experience designed to communicate trust and value clearly.",
    category: "Marketing",
    image: "/projects/placeholder.svg",
    github: "https://github.com/noctrlzdave/saas-landing",
    demo: "https://example.com",
    tech: ["React", "Animation", "Tailwind CSS"],
  },
];
