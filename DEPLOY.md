# Vercel Deployment

## Import the repo into Vercel

1. Push your latest changes to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import this GitHub repository.
4. Keep the detected **Framework Preset** as `Next.js`.
5. Leave the install and build settings at their defaults unless you need to override them:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output setting: Vercel default for Next.js

## Environment variables

Add these environment variables in the Vercel project settings before your first production deploy:

- `NEXT_PUBLIC_SITE_URL`
  Use your production site URL, for example `https://your-domain.com`.
- `RESEND_API_KEY`
  API key used by the contact form route handler.
- `CONTACT_TO_EMAIL`
  The inbox that should receive portfolio contact form messages.
- `CONTACT_FROM_EMAIL`
  A verified sender for Resend, for example `Portfolio Contact <portfolio@yourdomain.com>`.

## Triggering production deploys

1. Connect the production branch you want Vercel to deploy, typically `main`.
2. Merge or push to that branch.
3. Vercel will automatically create a new production deployment.

## Pulling environment variables locally

If you use the Vercel CLI locally, you can pull the configured environment variables with:

```bash
vercel env pull .env.local
```

Then run the app locally with:

```bash
npm install
npm run dev
```

## Notes

- This project now uses a standard Next.js deployment instead of a static export workflow.
- The contact form is handled by `app/api/contact/route.ts`, so the form works on Vercel without Netlify Forms.
