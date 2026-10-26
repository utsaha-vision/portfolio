import { Plus } from "lucide-react";
import { faqs } from "@/content/site";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

export function Faq({
  items = faqs,
  title = "Frequently asked questions.",
  subtitle = "Everything you need to know about working with us. Still have questions? Get in touch.",
}: {
  items?: { q: string; a: string }[];
  title?: string;
  subtitle?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            subtitle={subtitle}
          />
        </Reveal>
        <Reveal>
          <div className="divide-y divide-line border-y border-line">
            {items.map((f) => (
              <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium text-ink">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line transition-colors group-open:border-ember-500 group-open:bg-ember-500 group-open:text-white">
                    <Plus className="h-4 w-4 transition-transform group-open:rotate-45" />
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
