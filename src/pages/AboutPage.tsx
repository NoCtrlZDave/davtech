import {
  ArrowDownToLine,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageHero } from "../components/PageHero";
import { SectionTitle } from "../components/SectionTitle";

const values = ["Clarity", "Craft", "Consistency", "Empathy"];
const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Accessibility",
  "Performance",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <PageHero
          eyebrow="About"
          title="I build thoughtful interfaces that solve business problems elegantly."
          description="I’m a frontend developer who cares about product strategy, clarity, and polished execution. My work blends engineering depth with business awareness so every experience feels fast, modern, and trustworthy."
          actions={
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              <ArrowDownToLine size={18} /> Download Resume
            </a>
          }
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8"
          >
            <SectionTitle
              eyebrow="Biography"
              title="A product-minded developer with a strong engineering foundation."
              description="My journey began with curiosity about how digital products work, and it grew into a commitment to building experiences that are useful, accessible, and beautiful."
            />
            <p className="mt-6 text-lg leading-8 text-slate-400">
              I’m currently a final-year Computer Engineering student, and I
              spend most of my time turning product ideas into clean,
              high-performance web experiences. I enjoy solving real problems
              for real users and making interfaces feel effortless.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              I care deeply about semantics, performance, responsiveness, and
              the small details that elevate a product from good to premium.
            </p>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-8"
          >
            <div className="flex items-center gap-3 text-emerald-300">
              <BrainCircuit size={18} />{" "}
              <span className="font-medium">Values</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                >
                  {value}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 text-emerald-300">
              <GraduationCap size={18} />{" "}
              <span className="font-medium">Education</span>
            </div>
            <p className="mt-3 text-slate-300">
              Computer Engineering student with hands-on experience building
              modern web products and collaborating on real-world projects.
            </p>
          </motion.section>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8"
          >
            <SectionTitle
              eyebrow="Stack"
              title="Tools I use to build thoughtfully."
              description="I favor a modern stack that balances speed, maintainability, and visual quality."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8"
          >
            <SectionTitle
              eyebrow="Mindset"
              title="I’m always learning and improving."
              description="My approach is rooted in curiosity, accountability, and craftsmanship."
            />
            <div className="mt-6 space-y-4 text-slate-400">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">Mission</p>
                <p className="mt-2">
                  To build fast, elegant digital experiences that help
                  businesses grow.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">Vision</p>
                <p className="mt-2">
                  To become a dependable engineer who creates products people
                  genuinely enjoy using.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
