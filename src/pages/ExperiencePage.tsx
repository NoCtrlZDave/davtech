import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageHero } from "../components/PageHero";

const items = [
  {
    title: "Final-year Computer Engineering Student",
    period: "2024 — Present",
    type: "Education",
    details: [
      "Building strong foundations in engineering, systems thinking, and problem solving.",
      "Applying theory to real-world frontend and product delivery.",
    ],
    icon: <GraduationCap size={18} />,
  },
  {
    title: "Founder, Solosia Digital",
    period: "2023 — Present",
    type: "Freelance & Leadership",
    details: [
      "Creating polished web experiences for founders and businesses.",
      "Leading product-minded work across strategy, UI implementation, and launch readiness.",
    ],
    icon: <Briefcase size={18} />,
  },
  {
    title: "Independent Frontend Projects",
    period: "2022 — Present",
    type: "Personal Projects",
    details: [
      "Shipping modern web interfaces with strong UX and performance.",
      "Creating reusable, maintainable components and thoughtful interactions.",
    ],
    icon: <Sparkles size={18} />,
  },
];

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <PageHero
          eyebrow="Experience"
          title="A timeline of growth, delivery, and product-minded work."
          description="My experience comes from building in the real world: school projects, freelance work, and independent products that require strong execution."
        />
        <div className="mt-12 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-7"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-emerald-400">
                      {item.type}
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <ul className="mt-5 space-y-2 text-slate-400">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-1 text-emerald-400">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ExperiencePage;
