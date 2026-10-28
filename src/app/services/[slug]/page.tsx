import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { CheckCircle2 } from "lucide-react";
import { customSoftware, hasWork, services } from "@/content/site";
import { ArchitectureVisual } from "@/components/ArchitectureVisual";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { WorkGrid } from "@/components/WorkGrid";
import { CtaBand } from "@/components/CtaBand";
import { Button, Container, SectionHeading } from "@/components/ui";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.intro, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug).slice(0, 4);
  // Custom software is our core service, so its page gets an extended deep-dive.
  const deep = s.slug === "software-development" ? customSoftware : null;

  return (
    <>
      <PageHeader eyebrow="Services" title={s.title} subtitle={s.intro}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="/contact">Discuss your project</Button>
          <Button href="/services" variant="outline">All services</Button>
        </div>
      </PageHeader>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What we offer" title="How we can help" />
          <div
            className={clsx(
              "mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2",
              s.offerings.length > 4 && "lg:grid-cols-4",
            )}
          >
            {s.offerings.map((o, i) => (
                <div key={o.title} className="h-full bg-white p-8">
                  <span className="font-display text-sm text-ember-600">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.01em] text-ink">{o.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{o.body}</p>
                </div>
            ))}
          </div>
        </Container>
      </section>

      {deep && (
        <>
          <section className="border-t border-line bg-mist py-20 sm:py-28">
            <Container>
              <SectionHeading eyebrow="Solutions" title="Custom software we build" subtitle={deep.intro} />
              <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {deep.solutions.map((x) => (
                  <li key={x.title} className="rounded-2xl border border-line bg-white p-6">
                    <Icon name={x.icon} className="h-6 w-6 text-ember-600" />
                    <p className="mt-5 font-display font-semibold text-ink">{x.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{x.body}</p>
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <section className="py-20 sm:py-28">
            <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading eyebrow="Engineering standards" title="Built to last, built to scale." />
                <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  {deep.standards.map((x) => (
                    <li key={x.title}>
                      <p className="flex items-center gap-2 font-display font-semibold text-ink">
                        <CheckCircle2 className="h-5 w-5 text-ember-500" strokeWidth={1.75} /> {x.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{x.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <ArchitectureVisual />
            </Container>
          </section>

          <section className="border-t border-line py-20 sm:py-28">
            <Container>
              <SectionHeading eyebrow="Technology stack" title="The right tools for every layer." />
              <dl className="mt-12 divide-y divide-line border-y border-line">
                {deep.stackGroups.map((g) => (
                  <div key={g.label} className="grid gap-4 py-6 sm:grid-cols-[200px_1fr] sm:items-center">
                    <dt className="font-display font-semibold text-ink">{g.label}</dt>
                    <dd className="flex flex-wrap gap-2">
                      {g.items.map((t) => (
                        <span key={t} className="rounded-full border border-line px-4 py-1.5 text-sm text-ink">{t}</span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </Container>
          </section>

          <div className="border-t border-line"><Process /></div>
        </>
      )}

      <section className="bg-ink py-20 text-white sm:py-28">
        <Container className={clsx("grid gap-12", !deep && "lg:grid-cols-2")}>
          <div>
            <SectionHeading dark eyebrow="Outcomes" title="What you can expect" />
            <ul className={clsx("mt-10 gap-5", deep ? "grid sm:grid-cols-2" : "space-y-5")}>
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-center gap-4 text-lg">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-ember-400" strokeWidth={1.75} /> {o}
                </li>
              ))}
            </ul>
          </div>
{!deep && (
          <div>
            <SectionHeading dark eyebrow="Technology" title="Tools we trust" />
            <ul className="mt-10 flex flex-wrap gap-2">
              {s.tech.map((t) => (
                <li key={t} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/85">{t}</li>
              ))}
            </ul>
          </div>
          )}
        </Container>
      </section>

      {hasWork && (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Case studies" title="Related work" />
            <div className="mt-12"><WorkGrid limit={2} /></div>
          </Container>
        </section>
      )}

      {deep && (
        <Faq
          items={deep.faqs}
          title="Custom software questions, answered."
          subtitle="Considering a custom build? Here's what clients usually ask us first."
        />
      )}

      <section className="border-t border-line bg-mist py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">Explore other services</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} className="flex h-full items-center gap-3 rounded-xl border border-line bg-white p-5 transition-colors hover:border-ink/30">
                  <Icon name={o.icon} className="h-5 w-5 text-ember-600" />
                  <span className="font-medium text-ink">{o.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <div className="pt-24 sm:pt-32"><CtaBand /></div>
    </>
  );
}
