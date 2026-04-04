# James Umole Portfolio

Modern recruiter-focused product portfolio rebuilt with Next.js App Router and Tailwind CSS.

## Folder structure

```text
app/
  case-studies/[slug]/page.tsx   Dynamic case-study pages
  contact-success/page.tsx       Static success page for form fallback
  globals.css                    Global theme and utility styles
  layout.tsx                     Shared layout + metadata
  page.tsx                       Homepage
  robots.ts                      SEO robots file
  sitemap.ts                     SEO sitemap
components/
  analytics/
    portfolio-analytics.tsx
  contact/
    contact-form.tsx
  site-header.tsx
  layout/
    site-footer.tsx
  sections/
    case-studies-section.tsx
    contact-section.tsx
    experience-section.tsx
    hero-section.tsx
    innovation-lab-section.tsx
    metrics-section.tsx
    technical-depth-section.tsx
  case-study-card.tsx
  metric-card.tsx
  section-heading.tsx
  timeline-item.tsx
content/
  portfolio.ts                   Shared content and portfolio data
public/
  favicon.ico
  images/analytics-dashboard.png
```

## Migration plan used in this rebuild

1. Leave the original static HTML files in place as source material during migration.
2. Rebuild the homepage first using structured portfolio data and reusable components.
3. Migrate case studies into static Next.js routes with stronger storytelling and SEO metadata.
4. Keep the app deployable on modern Next.js hosting with minimal custom configuration.
5. Replace or retire the legacy HTML pages only after the new site is reviewed and deployed.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
If that port is busy, Next.js will automatically choose the next available port.

## Production build

```bash
npm run build
```

For a local production smoke test, run:

```bash
npm run start
```

## Contact form delivery

This portfolio keeps backend functionality intentionally small and Vercel-friendly:

- Contact form submission uses a minimal Next.js route handler at `app/api/contact/route.ts`.
- Email delivery is handled through the Resend API using environment variables.
- The app includes lightweight CTA and form event hooks through `PortfolioAnalytics`. These only emit events if you later add a provider like Plausible, Umami, or Google Analytics.

## Deployment

See [DEPLOY.md](./DEPLOY.md) for the Vercel deployment steps and required environment variables.

## Content notes

- The site is positioned around `Product Manager | AI, Data & Platform Products`.
- Metrics and case-study content are centralized in `content/portfolio.ts`.
- Some side-project copy is framed as prototype/experiment language to stay credible and avoid overclaiming.
- The canonical site URL is configured via `NEXT_PUBLIC_SITE_URL`.
- The original static HTML files remain in the repo as migration reference material and can be retired after deployment approval.
