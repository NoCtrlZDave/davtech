import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectItem } from "../data/projects";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70 shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
    >
      <div className="aspect-video overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/projects/placeholder.svg";
          }}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="min-w-0 break-words text-xl font-semibold text-white">
            {project.name}
          </h3>
          <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
            {project.category}
          </span>
        </div>
        <p className="mt-3 break-words text-sm leading-7 text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="break-words rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            <Github size={16} /> View GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-300"
            >
              Live Demo <ArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
