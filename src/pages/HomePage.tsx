import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Code2,
  Github,
  Linkedin,
  MoveRight,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SectionHeading } from "../components/SectionHeading";
import {
  blogPosts,
  experience,
  heroStats,
  projects,
  services,
  skills,
  testimonials,
} from "../data/content";

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.16),_transparent_25%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="min-w-0 max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
                <BadgeCheck size={16} />
                Available for freelance, full-time, and agency collaborations
              </div>
              <h1 className="break-words text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                I build fast, modern websites that help businesses grow.
              </h1>
              <p className="mt-6 max-w-2xl break-words text-lg leading-8 text-slate-400">
                I’m Okoro Chukwuebuka, a frontend developer and founder of
                Solosia Digital. I turn business goals into high-converting web
                experiences with clean code, careful UX, and modern React
                architecture.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-emerald-300"
                >
                  Hire Me <ArrowRight size={18} />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  View My Work <MoveRight size={18} />
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-400">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-semibold text-white">
                      {stat.value}
                    </div>
                    <div>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative min-w-0"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/20 to-sky-400/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-emerald-500/10">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm text-slate-400">Developer Focus</p>
                      <p className="break-words text-lg font-semibold text-white">
                        Business-first frontend engineering
                      </p>
                    </div>
                    <div className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-400/10 p-2 text-emerald-300">
                      <Code2 size={18} />
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
                    <div className="flex items-center gap-3 text-sm text-slate-400">
                      <BrainCircuit size={16} className="shrink-0 text-emerald-400" />
                      <span className="min-w-0 break-words">
                        React • TypeScript • Tailwind • Vite
                      </span>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {[
                        "UI Systems",
                        "SEO",
                        "Accessibility",
                        "Performance",
                      ].map((chip) => (
                        <div
                          key={chip}
                          className="break-words rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                        >
                          {chip}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="min-w-0">
                      <p className="text-sm text-slate-400">
                        GitHub contribution preview
                      </p>
                      <p className="break-words text-xl font-semibold text-white">
                        Consistent build streak
                      </p>
                    </div>
                    <div className="shrink-0 text-emerald-300">●●●●●</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
              <SectionHeading
                eyebrow="About"
                title="I combine engineering depth with business clarity."
                description="My work is rooted in real product thinking: I care about how a site performs, how it feels, and how it helps a business grow."
              />
              <div className="min-w-0 space-y-6 break-words text-lg text-slate-400">
                <p>
                  I’m a final-year Computer Engineering student with a growing
                  track record of building polished frontend experiences for
                  real products, agencies, and founders.
                </p>
                <p>
                  My path into development came from a desire to solve practical
                  business problems with software that is clean, fast, and
                  intuitive. I enjoy translating goals into interfaces that feel
                  premium and easy to use.
                </p>
                <p>
                  I’m guided by continuous learning, thoughtful execution, and a
                  belief that strong UI is a business asset, not just a design
                  preference.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work that balances polish and performance."
              description="Each project is designed to feel premium, convert better, and scale cleanly."
            />
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <p className="text-sm text-emerald-400">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {project.summary}
                    </p>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-300"
                    >
                      View case study <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Services"
              title="Practical services for brands, founders, and growing teams."
              description="I focus on websites that look premium, feel smooth, and support business goals."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7"
                >
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-slate-400">{service.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Zap size={14} className="mt-1 shrink-0 text-emerald-400" />
                        <span className="min-w-0 break-words">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-12">
            <SectionHeading
              eyebrow="Experience"
              title="A trajectory shaped by learning, building, and leading."
              description="The goal is not just to code, but to create thoughtful products with measurable business value."
            />
            <div className="mt-10 space-y-6">
              {experience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 p-6"
                >
                  <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-emerald-400">
                        {item.type}
                      </p>
                      <h3 className="break-words text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="shrink-0 text-sm text-slate-400">
                      {item.period}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-slate-400">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <Sparkles
                          size={14}
                          className="mt-1 shrink-0 text-emerald-400"
                        />
                        <span className="min-w-0 break-words">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Skills"
              title="The toolkit behind fast, modern products."
              description="I build with a balance of design sensibility, product thinking, and reliable engineering practices."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {skills.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-400">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by people who value clarity and craftsmanship."
              description="These are placeholder testimonials ready for real client voices."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-lg text-slate-300">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Blog"
              title="Thoughtful writing on product, design, and frontend craft."
              description="I share practical lessons from building digital products with intention."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <div
                  key={post.slug}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
                >
                  <p className="text-sm text-emerald-400">{post.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                    <span>{post.readTime}</span>
                    <Link to="/blog" className="text-emerald-300">
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-8 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
                  Contact
                </p>
                <h2 className="mt-3 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s build something that feels as strong as it performs.
                </h2>
                <p className="mt-5 break-words text-lg text-slate-400">
                  I’m available for freelance projects, full-time roles, and
                  agency collaborations.
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                  <a
                    href="mailto:okorochukwuebuka@gmail.com"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <Github size={16} />
                    Email
                  </a>

                  <a
                    href="https://wa.me/2349025068558"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <Send size={16} /> WhatsApp
                  </a>

                  <a
                    href="https://github.com/noctrlzdave"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
              <form className="min-w-0 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="min-w-0 text-sm text-slate-400">
                    Name
                    <input
                      className="mt-2 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none ring-0"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="min-w-0 text-sm text-slate-400">
                    Email
                    <input
                      className="mt-2 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none ring-0"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label className="mt-4 block min-w-0 text-sm text-slate-400">
                  Project brief
                  <textarea
                    className="mt-2 min-h-32 w-full min-w-0 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white outline-none ring-0"
                    placeholder="Tell me about your product or website goal."
                  />
                </label>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950">
                  Send Inquiry <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
