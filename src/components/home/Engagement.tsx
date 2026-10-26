import clsx from "clsx";
import { Check } from "lucide-react";
import { engagementModels } from "@/content/site";
import { Reveal } from "../Reveal";
import { ArrowLink, Container, SectionHeading } from "../ui";

export function Engagement() {
  return (
    <section className="bg-mist py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Engagement models"
            title="Flexible ways to work together."
            subtitle="Choose the model that fits your stage, budget and team. Switch as your needs evolve."
          />
        </Reveal>
        <Reveal className="mt-14">
        <ul className="grid gap-5 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
              <li
                key={m.title}
                className={clsx(
                  "relative flex h-full flex-col rounded-2xl border p-8",
                  m.featured ? "border-ink bg-ink text-white" : "border-line bg-white",
                )}
              >
                {m.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-ember-500 px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <p className={clsx("font-display text-sm font-medium", m.featured ? "text-white/50" : "text-muted")}>0{i + 1}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.01em]">{m.title}</h3>
                <p className={clsx("mt-3 leading-relaxed", m.featured ? "text-white/65" : "text-muted")}>{m.body}</p>
                <ul className={clsx("mt-6 space-y-3 border-t pt-6", m.featured ? "border-white/10" : "border-line")}>
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <Check className={clsx("h-4 w-4", m.featured ? "text-ember-400" : "text-ember-600")} /> {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <ArrowLink href="/contact" dark={m.featured}>Get a proposal</ArrowLink>
                </div>
              </li>
          ))}
        </ul>
        </Reveal>
      </Container>
    </section>
  );
}
