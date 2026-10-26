import { site } from "@/content/site";
import { Button, Container } from "./ui";

export function CtaBand({
  title = "Have a project in mind? Let's build what's next.",
  subtitle = "Tell us about your goals. We'll get back within one business day with ideas, a plan and a transparent estimate.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-ember-500 px-8 py-14 text-white sm:px-14 sm:py-20">
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full border-[40px] border-white/10" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 right-40 h-72 w-72 rounded-full border border-white/20" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.015em] text-balance sm:text-5xl">{title}</h2>
            <p className="mt-5 text-lg text-white/80">{subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" variant="dark">Start a conversation</Button>
              <a href={`mailto:${site.email}`} className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-[15px] font-medium transition-colors hover:bg-white/10">
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
