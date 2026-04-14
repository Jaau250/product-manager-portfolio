import type { ExperienceItem } from "@/content/portfolio";

export function TimelineItem({
  role,
  company,
  location,
  period,
  summary,
  highlights,
  sectionLabel,
  tier = "primary"
}: ExperienceItem) {
  const isEarlierRole = tier === "earlier";

  return (
    <div className="space-y-4">
      {sectionLabel ? (
        <p className="text-sm font-medium tracking-[0.04em] text-mist/75">
          {sectionLabel}
        </p>
      ) : null}

      <article
        className={`rounded-[28px] p-7 ${
          isEarlierRole
            ? "border border-white/[0.08] bg-white/[0.03]"
            : "border border-white/10 bg-white/[0.04]"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className={`text-2xl font-semibold ${isEarlierRole ? "text-white/95" : "text-white"}`}>
              {role}
            </h3>
            <p className={`mt-2 text-base ${isEarlierRole ? "text-slate-300" : "text-slate-200"}`}>
              {company}
              {location ? ` • ${location}` : ""}
            </p>
          </div>
          <p className={`text-sm tracking-[0.08em] ${isEarlierRole ? "text-accent/85" : "text-accent"}`}>
            {period}
          </p>
        </div>

        <p className={`mt-5 text-base leading-7 ${isEarlierRole ? "text-mist/90" : "text-mist"}`}>
          {summary}
        </p>

        <ul className="mt-6 space-y-3">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className={`flex gap-3 text-sm leading-6 ${isEarlierRole ? "text-slate-300" : "text-slate-200"}`}
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
