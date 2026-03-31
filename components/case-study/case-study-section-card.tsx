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
    <section className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
