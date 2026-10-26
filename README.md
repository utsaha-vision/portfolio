# Utsaha Vision — Company Website

Marketing and portfolio site for Utsaha Vision (AI/ML, software development and digital solutions).

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Editing content

All copy (services, the custom software deep-dive (`customSoftware`), AI capabilities, industries, case studies, engagement models, careers, FAQ,
contact details, socials) lives in
[`src/content/site.ts`](src/content/site.ts). Entries marked `TODO: verify` are placeholders and
should be replaced with real company information before launch.

Adding an entry to `services` or `caseStudies` automatically creates its page at `/services/<slug>`
or `/work/<slug>`, adds it to the navigation/menus and the sitemap.

## Contact form

The form posts to `/api/contact`, which validates input, filters bots via a honeypot, and sends
email through [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries |
| `CONTACT_FROM_EMAIL` | Verified sender address |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for SEO metadata |

Without these, the form shows visitors a friendly error with the direct email address.

## Project structure

```
src/
  app/            routes: /, /services, /services/[slug], /work, /work/[slug],
                  /about, /careers, /contact, /api/contact, sitemap, robots, icon
  components/     shared UI (Navbar, Footer, WorkGrid, Process, Faq, CtaBand, ContactForm…)
  components/home home-page sections (Hero, Aperture, ServicesGrid, AiShowcase, Industries…)
  content/site.ts all site content
```

## Deployment

Deploys as-is to Vercel (recommended), Netlify, or any Node host (`npm run build && npm start`).
