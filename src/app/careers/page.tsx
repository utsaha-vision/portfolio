import type { Metadata } from "next";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { careers, site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { Button, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.intro,
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader eyebrow="Careers" title={careers.title} subtitle={careers.intro}>
        <div className="mt-9">
          <Button href="#openings">View open roles</Button>
        </div>
      </PageHeader>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Life at Utsaha Vision" title="Why you'll love working here." />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careers.perks.map((p) => (
                <li key={p.title} className="h-full rounded-2xl border border-line p-7">
                  <Sparkles className="h-6 w-6 text-ember-500" strokeWidth={1.75} />
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="openings" className="bg-mist py-20 sm:py-28">
        <Container size="wide">
          <SectionHeading eyebrow="Open positions" title="Find your role." />
          <ul className="mt-12 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {careers.openings.map((o) => (
              <li key={o.title}>
                <a
                  href={`mailto:${site.careersEmail}?subject=${encodeURIComponent(`Application: ${o.title}`)}`}
                  className="group flex flex-col gap-3 p-6 transition-colors hover:bg-mist sm:flex-row sm:items-center sm:justify-between sm:p-8"
                >
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-[-0.01em] text-ink group-hover:text-ember-600">{o.title}</h3>
                    <p className="mt-1 text-sm text-muted">{o.type} · {o.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    Apply <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-dashed border-ink/20 p-8 text-center">
            <p className="font-display text-lg font-semibold text-ink">Don&apos;t see the right role?</p>
            <p className="mt-2 text-muted">
              We&apos;re always looking for talented people. Send your CV to{" "}
              <a href={`mailto:${site.careersEmail}`} className="font-medium text-ember-600 hover:underline">{site.careersEmail}</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
