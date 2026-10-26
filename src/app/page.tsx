import { Hero } from "@/components/home/Hero";
import { TechStrip } from "@/components/home/TechStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AiShowcase } from "@/components/home/AiShowcase";
import { CustomSoftware } from "@/components/home/CustomSoftware";
import { Industries } from "@/components/home/Industries";
import { Engagement } from "@/components/home/Engagement";
import { WhyUs } from "@/components/home/WhyUs";
import { WorkGrid } from "@/components/WorkGrid";
import { Process } from "@/components/Process";
import { Faq } from "@/components/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, Container, SectionHeading } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <ServicesGrid />
      <CustomSoftware />
      <AiShowcase />
      <section className="py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Case studies"
                title="Real problems. Measurable results."
                subtitle="A selection of projects where AI and modern engineering moved the numbers that matter."
              />
            </Reveal>
            <Reveal>
              <ArrowLink href="/work">View all case studies</ArrowLink>
            </Reveal>
          </div>
          <div className="mt-14">
            <WorkGrid limit={4} />
          </div>
        </Container>
      </section>
      <Industries />
      <Process />
      <Engagement />
      <WhyUs />
      <Faq />
      <CtaBand />
    </>
  );
}
