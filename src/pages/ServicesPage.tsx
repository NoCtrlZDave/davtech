import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  LayoutTemplate,
  MonitorSmartphone,
  RotateCcw,
  Sparkles,
  Zap,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageHero } from "../components/PageHero";

const services = [
  {
    title: "Business Websites",
    description:
      "Clear, premium websites that communicate trust and convert interest into action.",
    icon: <LayoutTemplate size={18} />,
    cta: "Plan a website",
  },
  {
    title: "Landing Pages",
    description:
      "Focused marketing pages designed to move visitors toward one clear outcome.",
    icon: <MonitorSmartphone size={18} />,
    cta: "Launch a landing page",
  },
  {
    title: "React Development",
    description:
      "Modern frontend apps built with clean architecture and thoughtful component design.",
    icon: <Code2 size={18} />,
    cta: "Build with React",
  },
  {
    title: "Website Redesign",
    description:
      "Refresh older sites so they feel modern, credible, and easier to use.",
    icon: <RotateCcw size={18} />,
    cta: "Redesign my site",
  },
  {
    title: "Maintenance",
    description:
      "Reliable ongoing support and updates so your website stays healthy.",
    icon: <Sparkles size={18} />,
    cta: "Maintain my site",
  },
  {
    title: "Performance Optimization",
    description:
      "Speed and ergonomics improvements that help products feel smoother and faster.",
    icon: <Zap size={18} />,
    cta: "Optimize performance",
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <PageHero
          eyebrow="Services"
          title="Premium services tailored to modern brands and products."
          description="I help businesses launch and improve websites that feel polished, perform well, and support growth."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-7 shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
            >
              <div className="inline-flex rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                {service.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-slate-400">{service.description}</p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-300"
              >
                {service.cta} <ArrowRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ServicesPage;
