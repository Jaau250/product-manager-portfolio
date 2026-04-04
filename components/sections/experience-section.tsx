import { SectionHeading } from "@/components/section-heading";
import { TimelineItem } from "@/components/timeline-item";
import { experience } from "@/content/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Product leadership across PropTech and financial services"
        description="My experience centers on turning ambiguous business problems into scalable product systems, aligning teams around clear workflows, measurable outcomes, and reliable execution."
      />

      <div className="mt-12 grid gap-6">
        {experience.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} {...item} />
        ))}
      </div>
    </section>
  );
}
