import { HelpCircle } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { IconBadge, Reveal, SectionIntro, SectionShell } from "../components/ui/premium";
import { faqItems } from "../lib/omkar-content";

export default function Faq() {
  return (
    <div className="overflow-x-hidden bg-[#FBF4E6] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal immediate>
            <div className="lg:sticky lg:top-28">
              <IconBadge icon={<HelpCircle className="h-6 w-6" />} className="mb-6" />
              <SectionIntro
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                body="Clear answers for people considering a clarity session, online support, or deeper inner-child healing work."
                titleClassName="text-5xl md:text-6xl"
              />
            </div>
          </Reveal>

          <Reveal immediate delay={0.08}>
            <Accordion
              type="single"
              defaultValue={faqItems[0].question}
              collapsible
              className="rounded-lg border border-[#1A1A1A]/8 bg-white/92 px-5 shadow-[0_22px_70px_rgba(140,106,68,0.13)] md:px-7"
            >
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="font-serif text-2xl md:text-3xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </SectionShell>
    </div>
  );
}
