import { ArrowUpRight, Menu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  active?: string;
};

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Services", to: "/#services" },
  { label: "Experience", to: "/#experience" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/#contact" },
];

export function Layout({ children, active }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2 text-lg font-semibold tracking-tight text-white"
          >
            <span className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-400/10 p-2 text-emerald-300">
              <Sparkles size={16} />
            </span>
            <span className="min-w-0 break-words">
              Okoro<span className="text-emerald-400">Chukwuebuka</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={
                  active === link.label
                    ? "text-white"
                    : "hover:text-emerald-300"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <motion.a
            whileHover={{ scale: 1.02 }}
            href="mailto:okorochukwuebuka@gmail.com"
            className="hidden items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 md:inline-flex"
          >
            Hire Me <ArrowUpRight size={16} />
          </motion.a>
          <button
            className="shrink-0 rounded-full border border-white/10 p-2 text-slate-200 md:hidden"
            aria-label="Open navigation"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/10 bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="min-w-0 break-words">
            © 2026 Okoro Chukwuebuka. Building premium web experiences for
            founders and businesses.
          </p>
          <div className="flex shrink-0 gap-4">
            <a href="https://github.com" className="hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com" className="hover:text-white">
              LinkedIn
            </a>
            <a href="https://x.com" className="hover:text-white">
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
