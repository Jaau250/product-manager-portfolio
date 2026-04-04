type CaseStudySectionCardProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function CaseStudySectionCard({
  eyebrow,
  title,
  children
}: CaseStudySectionCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 max-w-[65ch]">{children}</div>
    </section>
  );
}
