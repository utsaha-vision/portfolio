import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { WorkGrid } from "@/components/WorkGrid";
import { CtaBand } from "@/components/CtaBand";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "How Utsaha Vision helps organizations deliver measurable results with AI and modern software.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Case studies in AI, software and digital growth."
        subtitle="Every project starts with a business problem. Here's how we solved some of them."
      />
      <section className="py-20 sm:py-28">
        <Container><WorkGrid /></Container>
      </section>
      <CtaBand />
    </>
  );
}
