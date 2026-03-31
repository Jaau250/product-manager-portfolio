import Link from "next/link";

import type { CaseStudy } from "@/content/portfolio";

import { CaseStudyBulletList } from "./case-study-bullet-list";
import { CaseStudySectionCard } from "./case-study-section-card";

type CaseStudyTemplateProps = {
  study: CaseStudy;
};

export function CaseStudyTemplate({ study }: CaseStudyTemplateProps) {
  return (
    <main className="section-shell pt-16 lg:pt-20">
      <div className="rounded-[36px] border border-white/10 bg-white/[0.04] p-8 sm:p-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
        >
          <span aria-hidden="true">←</span>
          Back to portfolio
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                {study.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {study.title}
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-300">{study.summary}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-ink/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist">
                  Company
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{study.company}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-ink/60 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist">
                  Timeframe
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{study.period}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-ink/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Snapshot
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {study.measurableOutcomes.map((outcome) => (
                  <div
                    key={`${study.slug}-${outcome.value}-${outcome.label}`}
                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-2xl font-semibold text-white">{outcome.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                      {outcome.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={`${study.slug}-${tag}`} className="pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <CaseStudySectionCard eyebrow="01" title="Overview">
            <p className="text-base leading-7 text-slate-200">{study.overview}</p>
          </CaseStudySectionCard>
        </div>
      </div>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <CaseStudySectionCard eyebrow="02" title="Problem">
          <p className="text-base leading-7 text-slate-200">{study.problem}</p>
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="03" title="Users / Stakeholders">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                Users
              </p>
              <div className="mt-4">
                <CaseStudyBulletList items={study.users} />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mist">
                Stakeholders
              </p>
              <div className="mt-4">
                <CaseStudyBulletList items={study.stakeholders} bulletColor="bg-lime" />
              </div>
            </div>
          </div>
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="04" title="Constraints">
          <CaseStudyBulletList items={study.constraints} bulletColor="bg-ember" />
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="05" title="My Role & Ownership">
          <CaseStudyBulletList items={study.responsibilities} />
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="06" title="Approach">
          <CaseStudyBulletList items={study.approach} />
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="07" title="Solution">
          <p className="text-base leading-7 text-slate-200">{study.solution}</p>
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="08" title="Technical Design">
          <p className="mb-4 text-sm leading-6 text-mist">
            APIs, integrations, and data systems behind the product.
          </p>
          <CaseStudyBulletList items={study.technicalComponents} bulletColor="bg-lime" />
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="09" title="Tradeoffs">
          <CaseStudyBulletList
            items={study.tradeoffs}
            bulletColor="bg-ember"
            emptyLabel="Placeholder: add key tradeoffs and why they mattered."
          />
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="10" title="Metrics / Outcomes">
          <div className="grid gap-4 sm:grid-cols-3">
            {study.measurableOutcomes.map((outcome) => (
              <article
                key={`${study.slug}-${outcome.value}-${outcome.label}-detail`}
                className="rounded-3xl border border-white/10 bg-ink/60 p-5"
              >
                <p className="text-2xl font-semibold text-white">{outcome.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                  {outcome.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-mist">{outcome.detail}</p>
              </article>
            ))}
          </div>
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="11" title="Key Learnings">
          <CaseStudyBulletList
            items={study.keyLearnings}
            emptyLabel="Placeholder: add 2-3 learnings from this case study."
          />
        </CaseStudySectionCard>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        {study.artifact ? (
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
            <img
              src={study.artifact.src}
              alt={study.artifact.alt}
              className="w-full rounded-[22px] border border-white/10 object-cover"
            />
            <p className="mt-4 text-sm leading-6 text-mist">{study.artifact.caption}</p>
          </div>
        ) : (
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Artifact Placeholder
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Placeholder: add a system diagram, dashboard screenshot, workflow map,
              or another visual that helps recruiters understand the product context.
            </p>
          </div>
        )}

        <div className="rounded-[28px] border border-white/10 bg-ink/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Recruiter Summary
          </p>
          <p className="mt-4 text-base leading-7 text-slate-200">
            This format is designed to show product ownership, system thinking,
            delivery tradeoffs, and measurable outcomes in a fast, recruiter-friendly
            layout.
          </p>
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent"
            >
              External reference
              <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}
