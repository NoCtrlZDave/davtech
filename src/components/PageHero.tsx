import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-400/10 to-sky-400/10 p-8 lg:p-12"
    >
      <p className="break-words text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
        {eyebrow}
      </p>
      <h1 className="mt-4 break-words text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-5 max-w-3xl break-words text-lg leading-8 text-slate-400">
        {description}
      </p>
      {actions ? (
        <div className="mt-8 flex flex-wrap gap-4">{actions}</div>
      ) : null}
    </motion.div>
  );
}
