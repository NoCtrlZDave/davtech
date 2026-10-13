type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl min-w-0">
      <p className="mb-3 break-words text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 break-words text-lg text-slate-400">{description}</p>
    </div>
  );
}
