import Section from "../components/ui/Section";
import { siteConfig } from "../lib/site-config";

export default function PrivacyPolicy() {
  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#2A2A2A]">
      <Section className="pt-24">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#3D2B1F] font-bold mb-6 block">
          Privacy
        </span>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.1] mb-8">Privacy Policy</h1>
        <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed">
          <p>
            {siteConfig.projectName} and {siteConfig.practiceName} collect only the information you choose
            to share through the enquiry form, WhatsApp, email, or scheduled consultations.
          </p>
          <p>
            We use this information to respond to your enquiry, understand the support you are seeking,
            schedule conversations, and improve service delivery. Your details are not sold to third
            parties.
          </p>
          <p>
            If you would like your information updated or removed, write to{" "}
            <a className="text-[#3D2B1F] underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>.
          </p>
        </div>
      </Section>
    </div>
  );
}




