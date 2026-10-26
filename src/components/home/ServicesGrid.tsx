import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { Icon } from "../Icon";
import { Reveal } from "../Reveal";
import { ArrowLink, Container, SectionHeading } from "../ui";

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Custom software and AI services, end to end."
              subtitle="From product strategy and design to engineering, AI, cloud and growth, we cover the full software lifecycle."
            />
          </Reveal>
          <Reveal>
            <ArrowLink href="/services">View all services</ArrowLink>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug} className="bg-white">
                <Link href={`/services/${s.slug}`} className="group relative flex h-full flex-col p-7 transition-colors hover:bg-mist">
                  <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-ember-500 transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ember-50 text-ember-600">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-ink/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ember-600" />
                  </div>
                  <h3 className="mt-8 font-display text-lg font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
