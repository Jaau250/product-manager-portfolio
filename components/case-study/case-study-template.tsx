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
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-8">
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
              <p className="mt-4 max-w-[65ch] text-sm leading-relaxed text-white/70 sm:text-base">
                {study.summary}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist">
                  Company
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{study.company}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mist">
                  Timeframe
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{study.period}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                Snapshot
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {study.measurableOutcomes.map((outcome) => (
                  <div
                    key={`${study.slug}-${outcome.value}-${outcome.label}`}
                    className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold text-white">{outcome.value}</p>
                    <p className="text-sm leading-relaxed text-white/70">
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
            <p className="whitespace-pre-line text-sm leading-relaxed text-white/70">
              {study.overview}
            </p>
          </CaseStudySectionCard>
        </div>
      </div>

      <section className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <CaseStudySectionCard eyebrow="02" title="Problem">
          <p className="whitespace-pre-line text-sm leading-relaxed text-white/70">
            {study.problem}
          </p>
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
          <p className="whitespace-pre-line text-sm leading-relaxed text-white/70">
            {study.solution}
          </p>
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="08" title="Technical Design">
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            APIs, integrations, and data systems behind the product.
          </p>
          <CaseStudyBulletList items={study.technicalComponents} bulletColor="bg-lime" />
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="09" title="Tradeoffs">
          <CaseStudyBulletList items={study.tradeoffs} bulletColor="bg-ember" />
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="10" title="Metrics / Outcomes">
          <div className="grid gap-4 sm:grid-cols-3">
            {study.measurableOutcomes.map((outcome) => (
              <article
                key={`${study.slug}-${outcome.value}-${outcome.label}-detail`}
                className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-white">{outcome.value}</p>
                <p className="text-sm leading-relaxed text-white/70">
                  {outcome.label}
                </p>
                <p className="text-sm leading-relaxed text-white/70">{outcome.detail}</p>
              </article>
            ))}
          </div>
        </CaseStudySectionCard>

        <CaseStudySectionCard eyebrow="11" title="Key Learnings">
          <CaseStudyBulletList items={study.keyLearnings} />
        </CaseStudySectionCard>
      </section>

      {study.liveUrl ? (
        <div className="mt-6 flex items-center justify-between">
          <a
            href={study.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 transition hover:text-white"
          >
            External reference ↗
          </a>
        </div>
      ) : null}
    </main>
  );
}
