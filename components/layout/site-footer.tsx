import { siteConfig } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-mist sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. Product Manager portfolio
          focused on AI, data platforms, and outcome-driven product delivery.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a href={siteConfig.email} className="transition hover:text-white">
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
