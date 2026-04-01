import { CaseStudyCard } from "@/components/case-study-card";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/content/portfolio";

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section-shell">
      <SectionHeading
        eyebrow="Case Studies"
        title="Case studies focused on ownership, systems, and measurable impact"
        description="Each case highlights what was built, how it worked, and the business outcomes it delivered."
      />

      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
