import { SectionHeading } from "@/components/section-heading";
import { sideProjects } from "@/content/portfolio";

export function InnovationLabSection() {
  return (
    <section id="innovation-lab" className="section-shell">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionHeading
            eyebrow="Innovation Lab"
            title="Builder-style projects that show execution, not just product management"
            description="I use side projects to test ideas, prototype workflows, and stay close to the mechanics of building. The goal is simple: show that I can turn product thinking into working artifacts."
          />

          <div className="mt-8 rounded-[28px] border border-accent/20 bg-accent/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              What this section signals
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-100">
              Technical curiosity, execution bias, and a habit of exploring AI,
              APIs, automation, and workflow design through lightweight product builds.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
        {sideProjects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[0.06]"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                {project.format}
              </p>
              <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-[11px] font-medium text-lime">
                Builder
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-mist">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((item) => (
                <span key={`${project.title}-${item}`} className="pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-ink/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                What it proves
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">
                {project.proof}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <p className="text-sm text-mist">Built to explore product execution.</p>
              <div className="flex items-center gap-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-200 transition hover:text-white"
                  >
                    Live Demo
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-slate-200 transition hover:text-white"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
