import type { ExperienceItem } from "@/content/portfolio";

export function TimelineItem({
  role,
  company,
  location,
  period,
  summary,
  highlights
}: ExperienceItem) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white">{role}</h3>
          <p className="mt-2 text-base text-slate-200">
            {company} • {location}
          </p>
        </div>
        <p className="text-sm tracking-[0.08em] text-accent">{period}</p>
      </div>

      <p className="mt-5 text-base leading-7 text-mist">{summary}</p>

      <ul className="mt-6 space-y-3">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-200">
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
