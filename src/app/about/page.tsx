import type { Metadata } from "next";
import { Compass, Target } from "lucide-react";
import { about, site } from "@/content/site";
import { PageHeader } from "@/components/PageHeader";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading } from "@/components/ui";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About Us",
  description: about.intro,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About us" title={about.title} subtitle={about.intro} />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading eyebrow="Our story" title="Engineering from Nepal, for the world." />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {about.story.map((p) => <p key={p}>{p}</p>)}
            </div>
          </Reveal>
          <Reveal>
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-ink">
              <div aria-hidden className="absolute inset-0 bg-dots-dark" />
              <div aria-hidden className="absolute h-[140%] w-[140%] rounded-full bg-ember-500/15 blur-[100px]" />
              <LogoMark title={site.name} className="relative h-28 w-auto text-white sm:h-36" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-28">
        <Container className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Target, label: "Our mission", body: about.mission },
            { icon: Compass, label: "Our vision", body: about.vision },
          ].map(({ icon: I, label, body }) => (
              <div key={label} className="h-full rounded-2xl border border-line bg-white p-10">
                <I className="h-8 w-8 text-ember-500" strokeWidth={1.75} />
                <h2 className="mt-6 font-display text-sm font-medium uppercase tracking-wider text-muted">{label}</h2>
                <p className="mt-3 font-display text-2xl font-medium leading-snug tracking-tight text-ink">{body}</p>
              </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Our values" title="The principles behind every project." />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {about.values.map((v, i) => (
              <li key={v.title} className="bg-white p-8">
                <span className="font-display text-sm text-ember-600">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl font-semibold tracking-[-0.01em] text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <div className="pt-24 sm:pt-32">
        <CtaBand title="Let's create something meaningful together." />
      </div>
    </>
  );
}
