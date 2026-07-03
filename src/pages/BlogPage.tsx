import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageHero } from "../components/PageHero";

const posts = [
  {
    title: "Designing for trust and conversion",
    excerpt:
      "A look at how thoughtful UI patterns can create confidence without making a product feel heavy.",
    category: "Design",
    readTime: "5 min read",
  },
  {
    title: "The practical side of frontend performance",
    excerpt:
      "A guide to creating faster interfaces that still feel refined and premium.",
    category: "Performance",
    readTime: "4 min read",
  },
  {
    title: "Why clean architecture matters in React",
    excerpt:
      "How component structure and good conventions help teams scale products effectively.",
    category: "Development",
    readTime: "6 min read",
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <PageHero
          eyebrow="Blog"
          title="Writing about product thinking, design craft, and modern frontend development."
          description="This blog section is ready for future articles and can be expanded easily with real posts later."
        />
        <div className="mt-10 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-slate-300">
            <Search size={16} />
            <input
              className="w-full bg-transparent text-sm outline-none"
              placeholder="Search articles"
            />
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-slate-300">
            {["All", "Design", "Performance", "Development"].map((cat) => (
              <button
                key={cat}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-7"
            >
              <p className="text-sm font-medium text-emerald-400">
                {post.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-3 text-slate-400">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                <span>{post.readTime}</span>
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-emerald-300"
                >
                  Read more <ArrowRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 rounded-[1.5rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-8">
          <h3 className="text-2xl font-semibold text-white">
            Subscribe for updates
          </h3>
          <p className="mt-3 max-w-2xl text-slate-300">
            Get thoughtful insights on frontend craft, product design, and
            deliberate engineering.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none"
              placeholder="Enter your email"
            />
            <button className="rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950">
              Notify me
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default BlogPage;
