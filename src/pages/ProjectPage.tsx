import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { projects } from "../data/content";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <Layout active="Projects">
        <main className="px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 text-center">
            <h1 className="text-3xl font-semibold text-white">
              Project not found
            </h1>
            <p className="mt-4 text-slate-400">
              The requested project could not be found.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 text-emerald-300"
            >
              Back home <ArrowRight size={16} />
            </Link>
          </div>
        </main>
      </Layout>
    );
  }

  return (
    <Layout active="Projects">
      <main className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
              {project.category}
            </p>
            <h1 className="mt-4 break-words text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl break-words text-lg leading-8 text-slate-400">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.live}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-slate-950"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-medium text-white"
              >
                <Github size={18} />
                GitHub Repository
              </a>
            </div>
            <img
              src={project.image}
              alt={project.title}
              className="mt-10 h-80 w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
              <h2 className="text-2xl font-semibold text-white">Overview</h2>
              <p className="mt-4 text-slate-400">{project.problem}</p>
              <h3 className="mt-8 text-xl font-semibold text-white">
                Solution
              </h3>
              <p className="mt-4 text-slate-400">{project.solution}</p>
            </section>
            <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
              <h2 className="text-2xl font-semibold text-white">
                Technologies
              </h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-white">Results</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {project.results.map((result) => (
                  <li key={result}>• {result}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-white">Challenges</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>• {challenge}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold text-white">Architecture</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {project.architecture.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ProjectPage;
