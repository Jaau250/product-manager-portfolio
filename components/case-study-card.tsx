import Link from "next/link";

import type { CaseStudy } from "@/content/portfolio";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {study.eyebrow}
        </p>
        <p className="text-sm text-mist">{study.heroStat}</p>
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-white">{study.title}</h3>
          <p className="mt-2 text-sm text-slate-300">
            {study.company} • {study.period}
          </p>
        </div>
        <p className="text-base leading-7 text-mist">{study.summary}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {study.measurableOutcomes.map((outcome) => (
          <div
            key={`${study.slug}-${outcome.value}-${outcome.label}`}
            className="rounded-2xl border border-white/10 bg-ink/60 p-4"
          >
            <p className="text-xl font-semibold text-white">{outcome.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-mist">
              {outcome.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-accent"
        >
          View case study
          <span aria-hidden="true">→</span>
        </Link>
        {study.liveUrl ? (
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-300 transition hover:text-white"
          >
            Live reference
          </a>
        ) : null}
      </div>
    </article>
  );
}
