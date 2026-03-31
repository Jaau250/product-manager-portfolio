import Link from "next/link";

const navItems = [
  { href: "#case-studies", label: "Case Studies" },
  { href: "#technical-depth", label: "Technical Depth" },
  { href: "#experience", label: "Experience" },
  { href: "#innovation-lab", label: "Innovation Lab" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            James Umole
          </p>
          <p className="text-sm text-mist">Product Manager | AI & Data Platforms</p>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/70 hover:bg-accent/20"
          >
            Let&apos;s Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
