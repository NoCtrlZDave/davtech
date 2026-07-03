type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-slate-400">{description}</p>
    </div>
  );
}
