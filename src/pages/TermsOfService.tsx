import Section from "../components/ui/Section";

export default function TermsOfService() {
  return (
    <div className="overflow-x-hidden bg-[#FBF4E6] text-[#2A2A2A]">
      <Section className="pt-24">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C6A44] font-bold mb-6 block">
          Terms
        </span>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8">Terms of Service</h1>
        <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed">
          <p>
            Enquiry submission does not guarantee admission into any coaching program. Every engagement
            begins with a fit check and mutual confirmation.
          </p>
          <p>
            Coaching, mentoring, and emotional wellbeing support are offered as guidance services and do
            not replace emergency care, medical treatment, or licensed psychiatric intervention where such
            care is required.
          </p>
          <p>
            Program structure, fees, and next steps are discussed privately after the initial enquiry or
            discovery conversation.
          </p>
        </div>
      </Section>
    </div>
  );
}
