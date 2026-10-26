import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/site";
import { tones } from "@/components/WorkGrid";
import { CtaBand } from "@/components/CtaBand";
import { Container, Eyebrow } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.summary, alternates: { canonical: `/work/${c.slug}` } };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const c = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];
  const t = tones[c.tone] ?? tones.ink;

  return (
    <article>
      <Container className="pt-14 sm:pt-20">
        <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> All case studies
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <Eyebrow>{c.category}</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.015em] text-balance text-ink sm:text-5xl lg:text-6xl">{c.title}</h1>
          </div>
          <dl className="grid grid-cols-3 gap-6 border-t border-line pt-6 text-sm lg:border-t-0 lg:pt-0">
            <div><dt className="text-muted">Client</dt><dd className="mt-1 font-medium text-ink">{c.client}</dd></div>
            <div><dt className="text-muted">Industry</dt><dd className="mt-1 font-medium text-ink">{c.industry}</dd></div>
            <div><dt className="text-muted">Year</dt><dd className="mt-1 font-medium text-ink">{c.year}</dd></div>
          </dl>
        </div>
      </Container>

      <Container className="mt-12">
        <div className={clsx("relative overflow-hidden rounded-3xl p-8 sm:p-14", t.panel)}>
          <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-current opacity-10" />
          <p className={clsx("relative max-w-2xl text-xl leading-relaxed", t.sub)}>{c.summary}</p>
          <ul className="relative mt-12 grid gap-8 sm:grid-cols-3">
            {c.results.map((r) => (
              <li key={r.label} className="border-t border-current/20 pt-5">
                <p className="font-display text-5xl font-semibold tracking-[-0.01em]">{r.value}</p>
                <p className={clsx("mt-1 text-sm", t.sub)}>{r.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container size="wide" className="grid gap-12 py-20 sm:py-28 md:grid-cols-[200px_1fr]">
        <h2 className="font-display text-sm font-medium uppercase tracking-wider text-muted">The challenge</h2>
        <p className="text-xl leading-relaxed text-ink">{c.challenge}</p>
        <h2 className="font-display text-sm font-medium uppercase tracking-wider text-muted">Our solution</h2>
        <p className="text-xl leading-relaxed text-ink">{c.solution}</p>
        <h2 className="font-display text-sm font-medium uppercase tracking-wider text-muted">Technology</h2>
        <ul className="flex flex-wrap gap-2">
          {c.stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-4 py-2 text-sm text-ink">{s}</li>
          ))}
        </ul>
      </Container>

      <Container className="pb-24">
        <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-6 border-y border-line py-10">
          <div>
            <p className="text-sm text-muted">Next case study</p>
            <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-ember-600 sm:text-3xl">{next.title}</p>
          </div>
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </Container>
      <CtaBand />
    </article>
  );
}
