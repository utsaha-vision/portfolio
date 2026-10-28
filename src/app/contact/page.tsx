import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { Container, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Talk to Utsaha Vision about your custom software, AI or digital project.",
  alternates: { canonical: "/contact" },
};

const steps = [
  "We read your message and reply by email",
  "A call to understand your goals and requirements",
  "A proposal with scope, timeline and estimate",
];

export default function ContactPage() {
  const details = [
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    ...(site.phone ? [{ icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` }] : []),
    { icon: MapPin, label: "Location", value: site.location },
  ];

  return (
    <section className="relative overflow-hidden bg-mist">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-dots mask-radial opacity-60" />
      <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <div>
          <Eyebrow>Contact us</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.015em] text-balance text-ink sm:text-5xl">
            Let&apos;s talk about your next project.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Share a few details and our team will get back to you with ideas and next steps.
          </p>

          <ol className="mt-10 space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-white">{i + 1}</span>
                <span className="text-ink">{s}</span>
              </li>
            ))}
          </ol>

          <ul className="mt-12 grid gap-6 border-t border-line pt-10 sm:grid-cols-2">
            {details.map(({ icon: I, label, value, href }) => (
              <li key={label} className="flex gap-3">
                <I className="mt-0.5 h-5 w-5 shrink-0 text-ember-600" strokeWidth={1.75} />
                <div>
                  <p className="text-sm text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium text-ink hover:text-ember-600">{value}</a>
                  ) : (
                    <p className="font-medium text-ink">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-30px_rgb(11_13_18/0.25)] sm:p-10">
          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">Tell us about your project</h2>
          <p className="mt-1 mb-8 text-sm text-muted">Share as much or as little detail as you like.</p>
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
