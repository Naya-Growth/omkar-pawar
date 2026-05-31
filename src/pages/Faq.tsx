import Section from "../components/ui/Section";

const faqs = [
  {
    question: "How Do I Begin?",
    answer:
      "Start with the quick clarity check, enquiry form, or a WhatsApp message. The team will help you understand the right next step.",
  },
  {
    question: "Are Sessions Online?",
    answer:
      "Yes. Sessions are conducted online so support can be offered across locations in a calm and flexible format.",
  },
  {
    question: "Is Pricing Public?",
    answer:
      "Pricing is discussed privately after understanding your needs and the format that fits you best.",
  },
];

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
        <div className="max-w-3xl grid gap-6">
          {faqs.map((item) => (
            <article key={item.question} className="rounded-lg border border-black/5 bg-white p-8">
              <h2 className="font-serif text-2xl mb-3">{item.question}</h2>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
