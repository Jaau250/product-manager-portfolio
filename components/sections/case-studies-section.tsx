import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/content/portfolio";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="Structured product stories built around outcome, scale, and technical depth"
        description="Each case study is written for recruiters and hiring managers who want to understand ownership, the system behind the product, and the measurable business result."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
