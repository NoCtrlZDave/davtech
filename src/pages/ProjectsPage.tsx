import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageHero } from "../components/PageHero";
import { ProjectCard } from "../components/ProjectCard";
import { projects, type ProjectItem } from "../data/projects";
import { useGitHubRepos } from "../hooks/useGitHubRepos";

function ProjectsPage() {
  const { data: repos, isLoading, error } = useGitHubRepos();

  const projectList: ProjectItem[] =
    repos && repos.length > 0
      ? repos.map((repo) => ({
          id: repo.id.toString(),
          name: repo.name,
          description: repo.description || "A project from my GitHub profile.",
          category: "GitHub",
          image:
            repo.full_name && !/[\s?#]/.test(repo.full_name)
              ? `https://opengraph.githubassets.com/1/${repo.full_name}`
              : "/projects/placeholder.svg",
          github: repo.html_url,
          demo: repo.homepage || undefined,
          tech: [repo.language || "Code"],
          featured: true,
        }))
      : projects;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <PageHero
          eyebrow="Projects"
          title="Selected work from my GitHub and product build journey."
          description="Every project here is chosen to reflect the kind of polished, reliable frontend work I enjoy building for users and businesses."
          actions={
            <a
              href="https://github.com/noctrlzdave"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 font-medium text-emerald-300 hover:bg-emerald-400/20"
            >
              <Github size={18} /> View GitHub Profile
            </a>
          }
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {isLoading ? (
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8 text-slate-400">
              Loading repositories from GitHub…
            </div>
          ) : error ? (
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8 text-slate-400">
              GitHub data is temporarily unavailable, but the portfolio still
              showcases curated project highlights.
            </div>
          ) : null}
          {projectList.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage;
