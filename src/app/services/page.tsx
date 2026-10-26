import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { Icon } from "@/components/Icon";
import { PageHeader } from "@/components/PageHeader";
import { Process } from "@/components/Process";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description: "AI & machine learning, generative AI, custom software, mobile apps, cloud, data, design and digital growth services.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Technology services that turn ambition into impact."
        subtitle="Whether you're validating an idea or scaling an enterprise platform, our teams bring the expertise to deliver."
      />
      <section className="py-20 sm:py-28">
        <Container>
          <ul className="divide-y divide-line border-y border-line">
            {services.map((s, i) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="group grid gap-6 py-10 md:grid-cols-[80px_1fr_1.3fr_auto] md:items-center">
                    <span className="font-display text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ember-50 text-ember-600">
                        <Icon name={s.icon} className="h-6 w-6" />
                      </span>
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-ember-600">{s.title}</h2>
                    </div>
                    <p className="leading-relaxed text-muted">{s.intro}</p>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ember-500 group-hover:bg-ember-500 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </Link>
                </li>
            ))}
          </ul>
        </Container>
      </section>
      <Process />
      <CtaBand />
    </>
  );
}
