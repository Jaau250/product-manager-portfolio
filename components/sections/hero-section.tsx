import HeroImage from "@/components/hero-image";
import {
  heroHighlights,
  heroProofPoints,
  operatingLens,
  siteConfig
} from "@/content/portfolio";

export function HeroSection() {
  return (
    <section className="section-shell grid gap-12 pt-10 sm:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14 lg:pt-14">
      <div className="max-w-[44rem] lg:pt-2">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent">
          PRODUCT MANAGER | AI, DATA & PLATFORM PRODUCTS
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[0.94]">
          {siteConfig.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
          {siteConfig.heroIntro}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#case-studies"
            data-analytics-event="hero_case_studies_clicked"
            data-analytics-label="hero-view-case-studies"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            data-analytics-event="hero_lets_talk_clicked"
            data-analytics-label="hero-lets-talk"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-accent/40 hover:bg-white/[0.08]"
          >
            Let&apos;s Talk
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {heroProofPoints.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-2xl font-semibold tracking-tight text-white">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 lg:items-end lg:pt-1">
        <HeroImage />

        <div className="surface w-full max-w-[420px] overflow-hidden p-1 shadow-glow">
          <div className="rounded-[28px] border border-white/10 bg-mesh p-8">
            <div className="flex items-center justify-between gap-3">
              <p className="min-w-0 pr-2 text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Product Operating Lens
              </p>
              <span className="shrink-0 whitespace-nowrap rounded-full border border-lime/30 bg-lime/10 px-2.5 py-0.5 text-[11px] font-medium text-lime sm:px-3 sm:py-1 sm:text-xs">
                Platform-ready
              </span>
            </div>

            <div className="mt-8 space-y-4">
              {operatingLens.map((item, index) => (
                <div
                  key={item.title}
                  className="animate-drift rounded-3xl border border-white/10 bg-ink/65 p-5"
                  style={{ animationDelay: `${index * 1.25}s` }}
                >
                  <p className="text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-mist">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-accent/20 bg-accent/10 p-5">
              <p className="text-sm leading-6 text-slate-100">
                I&apos;ve led work across leasing systems, analytics platforms, and
                lending workflows where strong product thinking, reliable data,
                and cross-functional execution were critical to success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
