import { processSteps } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

export function Process() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we deliver"
            title="Our delivery process."
            subtitle="Predictable, transparent and built around continuous feedback, so there are no surprises."
          />
        </Reveal>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((s, i) => (
            <li key={s.title} className="bg-white p-7 last:sm:col-span-2 last:lg:col-span-1">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <span aria-hidden className="h-px flex-1 bg-line" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
