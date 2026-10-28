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
[`src/content/site.ts`](src/content/site.ts). Only publish facts you can stand behind: sections backed
by an empty list (`caseStudies`, `careers.openings`, `site.socials`) stay hidden until you add real entries.

Adding an entry to `services` or `caseStudies` automatically creates its page at `/services/<slug>`
or `/work/<slug>` and adds it to the menus and the sitemap. The first case study also brings back the
"Work" nav link and the case-study sections on the home and service pages.

## Contact form

The contact form posts directly from the browser to [FormSubmit](https://formsubmit.co), which emails
each enquiry to the inbox set as `formEmail` in `src/content/site.ts` (no backend or API key needed).

**First-time setup:** the first submission triggers an activation email from FormSubmit to that inbox.
Click the link in it once; after that, every submission is delivered. Optionally, replace the email in
`formEmail` with the random alias FormSubmit gives you after activation to keep the address out of the page source.

## Project structure

```
src/
  app/            routes: /, /services, /services/[slug], /work, /work/[slug],
                  /about, /careers, /contact, sitemap, robots, icons, OG image
  components/     shared UI (Navbar, Footer, WorkGrid, Process, Faq, CtaBand, ContactForm…)
  components/home home-page sections (Hero, Aperture, ServicesGrid, AiShowcase, Industries…)
  content/site.ts all site content
```

## Deployment

Deploys as-is to Vercel (recommended), Netlify, or any Node host (`npm run build && npm start`).
