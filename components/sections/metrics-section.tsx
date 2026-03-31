import { MetricCard } from "@/components/metric-card";
import { topMetrics } from "@/content/portfolio";

export function MetricsSection() {
  return (
    <section className="section-shell pt-0">
      <div className="grid gap-5 lg:grid-cols-3">
        {topMetrics.map((metric) => (
          <MetricCard key={`${metric.value}-${metric.label}`} {...metric} />
        ))}
      </div>
    </section>
  );
}
