export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  challenges: string[];
  architecture: string[];
  live: string;
  github: string;
  image: string;
};

export type Service = {
  title: string;
  description: string;
  benefits: string[];
};

export type ExperienceItem = {
  title: string;
  period: string;
  type: string;
  details: string[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
};

export const heroStats = [
  { value: "2+", label: "years learning and building" },
  { value: "20+", label: "projects shipped" },
  { value: "100%", label: "focus on business impact" },
];

export const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Basics",
    items: ["REST APIs", "Node.js fundamentals"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma"],
  },
  {
    title: "Soft Skills",
    items: [
      "Communication",
      "Problem solving",
      "Teamwork",
      "Attention to detail",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "engineering-faculty-portal",
    title: "Engineering Faculty Portal",
    category: "Education Platform",
    summary:
      "A responsive portal that makes faculty communications clearer, faster, and more accessible for stakeholders.",
    problem:
      "The institution needed an information-rich website that felt trustworthy and easy to navigate for parents, students, and staff.",
    solution:
      "I focused on information hierarchy, CTA placement, and interactive components that kept the experience calm and intuitive.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    results: [
      "Clearer content structure",
      "Improved engagement",
      "Faster content updates",
    ],
    challenges: [
      "Maintaining accessibility standards at scale",
      "Structuring dense information into simple pathways",
    ],
    architecture: [
      "Modular page composition",
      "Reusable content patterns",
      "Accessible form flows",
    ],
    live: "https://absu-engineering.vercel.app/",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "lawyer-portfolio-website",
    title: "Lawyer Portfolio Website",
    category: "Professional Services",
    summary:
      "A modern portfolio website for a lawyer that showcases expertise, client testimonials, and case studies.",
    problem:
      "The product needed a page that could quickly explain value, build credibility, and guide visitors toward action.",
    solution:
      "I implemented a clear problem-solution narrative with a premium visual system and strong conversion cues.",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Zod"],
    results: [
      "Higher clarity for key messaging",
      "More compelling CTA flow",
      "Polished user experience",
    ],
    challenges: [
      "Reducing friction without overwhelming the interface",
      "Keeping the experience premium and concise",
    ],
    architecture: [
      "Focused section architecture",
      "Reusable CTA patterns",
      "Motion designed for clarity",
    ],
    live: "https://ijeoma-barrister-solicitor.vercel.app/",
    github: "https://github.com",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "High-performing websites that communicate credibility and help convert attention into action.",
    benefits: [
      "Clear value proposition",
      "Mobile-first UX",
      "SEO-ready structure",
    ],
  },
  {
    title: "Corporate Websites",
    description:
      "Professional online presences designed for trust, brand consistency, and long-term growth.",
    benefits: [
      "Executive-ready storytelling",
      "Scalable information architecture",
      "Fast update flow",
    ],
  },
  {
    title: "School Portals",
    description:
      "Accessible, polished websites for schools that keep information organized and welcoming.",
    benefits: [
      "Hero-first messaging",
      "Simple navigation",
      "Easy content updates",
    ],
  },
  {
    title: "Landing Pages",
    description:
      "Focused marketing pages built to turn traffic into leads, sales, or booked calls.",
    benefits: [
      "Conversion-oriented design",
      "Fast load speeds",
      "Clear, measurable CTA paths",
    ],
  },
  {
    title: "Website Redesign",
    description:
      "Refined redesigns that modernize old experiences without sacrificing clarity.",
    benefits: [
      "Visual refresh",
      "Better usability",
      "Improved perceived quality",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Technical improvements that make products feel faster, smoother, and more reliable.",
    benefits: [
      "Higher Lighthouse scores",
      "Lower friction",
      "Better retention",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Final Year Computer Engineering Student",
    period: "2024 — Present",
    type: "Education",
    details: [
      "Building strong foundations in systems thinking and product-minded engineering.",
      "Applying technical learning to practical frontend delivery and problem solving.",
    ],
  },
  {
    title: "Frontend Developer & Founder, Solosia Digital",
    period: "2023 — Present",
    type: "Freelance & Leadership",
    details: [
      "Creating production-ready web experiences for businesses and founders.",
      "Leading a small studio focused on premium UI implementation and growth-minded websites.",
    ],
  },
  {
    title: "React & Web Product Projects",
    period: "2022 — Present",
    type: "Projects",
    details: [
      "Shipping modern interfaces with strong attention to detail and performance.",
      "Turning business goals into usable, polished digital products.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aisha Yusuf",
    role: "Founder, Brightlane Studio",
    quote:
      "The experience felt strategic from the start. Every detail reflected care, clarity, and business awareness.",
  },
  {
    name: "Daniel Okafor",
    role: "Marketing Lead, Northgate Labs",
    quote:
      "The redesign made our product feel immediately more credible and premium. The process was smooth and thoughtful.",
  },
  {
    name: "Mariam Bello",
    role: "Principal, Crestfield School",
    quote:
      "The website now feels welcoming, professional, and easier for families to navigate. It exceeded expectations.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-for-conversion",
    title: "Designing for conversion without sacrificing trust",
    category: "Design",
    excerpt:
      "A practical framework for building interfaces that feel polished while guiding visitors toward action.",
    readTime: "5 min read",
    tags: ["UX", "Conversion", "Frontend"],
    featured: true,
  },
  {
    slug: "building-fast-modern-websites",
    title: "How I approach performance in modern web products",
    category: "Performance",
    excerpt:
      "The habits and decisions that help me create faster, calmer digital experiences.",
    readTime: "6 min read",
    tags: ["Performance", "React", "Vite"],
    featured: false,
  },
  {
    slug: "why-business-clarity-matters",
    title: "Why business clarity should shape every frontend decision",
    category: "Strategy",
    excerpt:
      "Good interfaces are not just beautiful; they are aligned with the goals of the business behind them.",
    readTime: "4 min read",
    tags: ["Strategy", "Business", "Product"],
    featured: false,
  },
];
