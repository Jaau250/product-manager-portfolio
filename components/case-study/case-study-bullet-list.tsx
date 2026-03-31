type CaseStudyBulletListProps = {
  items: string[];
  bulletColor?: string;
  emptyLabel?: string;
};

export function CaseStudyBulletList({
  items,
  bulletColor = "bg-accent",
  emptyLabel = "Placeholder: add content."
}: CaseStudyBulletListProps) {
  const safeItems = items.length > 0 ? items : [emptyLabel];

  return (
    <ul className="space-y-3">
      {safeItems.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
          <span className={`mt-2 h-2 w-2 rounded-full ${bulletColor}`} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
