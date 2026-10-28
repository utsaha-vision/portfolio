import { industries } from "@/content/site";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";
import { Container, SectionHeading } from "../ui";

export function Industries() {
  return (
    <section id="industries" className="bg-mist py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Industries we build for."
            subtitle="We take time to understand the workflows, users and rules of your sector, so the software fits how your business actually works."
          />
        </Reveal>
        <Reveal className="mt-14">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
              <li key={ind.title} className="group h-full rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_-20px_rgb(11_13_18/0.25)]">
                <Icon name={ind.icon} className="h-7 w-7 text-ink transition-colors group-hover:text-ember-600" />
                <h3 className="mt-6 font-display text-lg font-semibold tracking-[-0.01em] text-ink">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ind.body}</p>
              </li>
          ))}
        </ul>
        </Reveal>
      </Container>
    </section>
  );
}
