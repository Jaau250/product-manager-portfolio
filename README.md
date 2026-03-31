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
4. Export the site as static files so Netlify deployment stays simple.
5. Replace or retire the legacy HTML pages only after the new site is reviewed and deployed.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static site will be generated in `out/`.

## Netlify deployment

Use these settings if Netlify does not auto-detect them:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `20`

The included `netlify.toml` already matches this setup.

## Lightweight backend additions

This portfolio keeps backend functionality intentionally small and Netlify-friendly:

- Contact form submission uses Netlify Forms via static HTML form detection.
- Email handling comes from Netlify form notifications. The form includes an `email` field so notification emails can use `Reply-To`.
- A hidden `subject` field is included so notification emails have a cleaner subject line.
- Netlify Web Analytics can be enabled in the dashboard for pageview tracking without adding a custom backend.
- The app includes lightweight CTA and form event hooks through `PortfolioAnalytics`. These only emit events if you later add a provider like Plausible, Umami, or Google Analytics.

### Netlify setup notes

1. Make sure form detection is enabled for the site.
2. After the first deploy, go to Netlify form notifications and add an email notification for the `portfolio-contact` form.
3. If you want pageview analytics, enable Netlify Web Analytics in the project dashboard.

## Content notes

- The site is positioned around `Product Manager | AI & Data Platforms`.
- Metrics and case-study content are centralized in `content/portfolio.ts`.
- Some side-project copy is framed as prototype/experiment language to stay credible and avoid overclaiming.
- The site currently assumes the existing Netlify URL: `https://james-umole-portfolio.netlify.app`
- The original static HTML files remain in the repo as migration reference material and can be retired after deployment approval.
