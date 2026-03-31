import type { Metric } from "@/content/portfolio";

export function MetricCard({ value, label, detail }: Metric) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-glow">
      <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-200">
        {label}
      </p>
      <p className="mt-4 text-sm leading-6 text-mist">{detail}</p>
    </div>
  );
}
