import { SectionHeading } from "@/components/section-heading";
import { sideProjects } from "@/content/portfolio";

export function InnovationLabSection() {
  return (
    <section id="innovation-lab" className="section-shell">
      <SectionHeading
        eyebrow="Product Builds & Execution"
        title="Product Builds & Execution"
        description="Side projects where I design, build, and ship real products — from workflows and integrations to AI-assisted features and user-facing systems."
      />

      <div className="mt-12 grid auto-rows-fr gap-6 lg:grid-cols-2">
        {sideProjects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full min-w-0 flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="min-w-0 flex-1 pr-2 text-xs font-semibold uppercase leading-5 tracking-[0.28em] text-accent">
                {project.format}
              </p>
              <span className="shrink-0 whitespace-nowrap rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-[11px] font-medium text-lime">
                Builder
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-4 min-w-0 max-w-full whitespace-pre-line break-normal text-sm leading-6 text-mist">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap content-start gap-2">
              {project.tags.map((item) => (
                <span key={`${project.title}-${item}`} className="pill">
                  {item}
                </span>
              ))}
            </div>

            {project.liveUrl ? (
              <div className="mt-auto pt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.1]"
                >
                  View Live
                </a>
                {project.liveNote ? (
                  <p className="mt-3 text-sm leading-6 text-mist">
                    {project.liveNote}
                  </p>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
