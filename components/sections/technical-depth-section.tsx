import { SectionHeading } from "@/components/section-heading";
import {
  technicalArchitectureLayers,
  technicalDepthGroups
} from "@/content/portfolio";

export function TechnicalDepthSection() {
  return (
    <section id="technical-depth" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            eyebrow="Technical Depth"
            title="How I design and scale product systems"
            description="I focus on how workflows, systems, and data connect to deliver reliable, scalable product experiences. My work sits at the intersection of product ownership, system design, and operational impact."
          />

          <div className="mt-8 rounded-[28px] border border-accent/20 bg-accent/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Practical lens
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-100">
              I don&apos;t list tools as credentials. I focus on the systems I&apos;ve
              shaped, the tradeoffs I&apos;ve navigated, and the product decisions
              that improved real operational outcomes.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "AWS S3",
              "AWS Glue",
              "AWS DataBrew",
              "Snowflake",
              "API-first architecture",
              "Data pipelines",
              "Analytics tools"
            ].map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Architecture View
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  How I think about the product stack
                </h3>
              </div>
              <span className="hidden rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-medium text-lime sm:inline-flex">
                Systems-aware
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {technicalArchitectureLayers.map((layer, index) => (
                <article
                  key={layer.title}
                  className="relative rounded-[24px] border border-white/10 bg-ink/70 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mist">
                    {layer.label}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-white">
                    {layer.title}
                  </h4>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    {layer.detail}
                  </p>
                  {index < technicalArchitectureLayers.length - 1 ? (
                    <div className="pointer-events-none absolute -bottom-3 left-6 hidden h-6 w-px bg-gradient-to-b from-accent/60 to-transparent md:block" />
                  ) : null}
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {technicalDepthGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-mist">{group.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.badges.map((badge) => (
                  <span key={`${group.title}-${badge}`} className="pill">
                    {badge}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-3">
                {group.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-6 text-slate-200"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-ember" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
