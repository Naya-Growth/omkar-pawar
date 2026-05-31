import Section from "../components/ui/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { faqItems } from "../lib/omkar-content";

export default function Faq() {
  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      <Section className="pt-24">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold mb-6 block">
          FAQ
        </span>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8">
          Frequently Asked Questions
        </h1>
        <Accordion
          type="single"
          defaultValue={faqItems[0].question}
          collapsible
          className="max-w-3xl rounded-lg border border-black/5 bg-white px-6 shadow-sm"
        >
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="font-serif text-2xl">{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </div>
  );
}
