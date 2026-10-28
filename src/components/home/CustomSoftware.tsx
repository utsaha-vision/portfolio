import { Check } from "lucide-react";
import { customSoftware } from "@/content/site";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";
import { ArchitectureVisual } from "../ArchitectureVisual";
import { Button, Container, SectionHeading } from "../ui";

export function CustomSoftware() {
  return (
    <section id="custom-software" className="border-t border-line bg-mist py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={customSoftware.eyebrow} title={customSoftware.title} subtitle={customSoftware.intro} />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {customSoftware.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ember-500">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/services/software-development" variant="dark" className="w-full sm:w-auto">Our software services</Button>
              <Button href="/contact" variant="outline" className="w-full sm:w-auto">Get an estimate</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ArchitectureVisual />
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <h3 className="font-display text-xl font-semibold tracking-[-0.01em] text-ink">What we build</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customSoftware.solutions.map((s) => (
              <li key={s.title} className="group rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_-20px_rgb(11_13_18/0.25)]">
                <Icon name={s.icon} className="h-6 w-6 text-ink transition-colors group-hover:text-ember-600" />
                <p className="mt-5 font-display font-semibold text-ink">{s.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
