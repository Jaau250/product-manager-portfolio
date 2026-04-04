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
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/70">
          <span className={`mt-2 h-2 w-2 rounded-full ${bulletColor}`} />
          <span className="max-w-[65ch]">{item}</span>
        </li>
      ))}
    </ul>
  );
}
