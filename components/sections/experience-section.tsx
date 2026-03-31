import { SectionHeading } from "@/components/section-heading";
import { TimelineItem } from "@/components/timeline-item";
import { experience } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Product ownership across PropTech and financial services"
        description="The throughline in my work is translating ambiguous business problems into scalable product systems with clear metrics, operating rhythm, and cross-functional alignment."
      />

      <div className="mt-12 grid gap-6">
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} {...item} />
        ))}
      </div>
    </section>
  );
}
