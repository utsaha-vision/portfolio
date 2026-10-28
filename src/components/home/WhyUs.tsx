import { CheckCircle2 } from "lucide-react";
import { whyUs } from "@/content/site";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "../ui";

export function WhyUs() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Why Utsaha Vision"
            title="A partner invested in your success."
            subtitle="We combine deep technical expertise with business understanding to deliver software that creates lasting value."
          />
        </Reveal>
        <Reveal>
        <ul className="grid content-start gap-x-8 gap-y-10 sm:grid-cols-2">
          {whyUs.map((w) => (
              <li key={w.title}>
                <CheckCircle2 className="h-6 w-6 text-ember-500" strokeWidth={1.75} />
                <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
              </li>
          ))}
        </ul>
        </Reveal>
      </Container>
    </section>
  );
}
