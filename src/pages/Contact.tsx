import { ArrowRight, Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";

import InquiryForm from "../components/InquiryForm";
import { useLeadWizard } from "../components/LeadWizardProvider";
import { Button } from "../components/ui/button";
import {
  FeatureCard,
  MediaFrame,
  PremiumCard,
  Reveal,
  SectionIntro,
  SectionShell,
} from "../components/ui/premium";
import { wizardContent } from "../lib/omkar-content";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const contactRoutes = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Book a Clarity Call",
    body: "Start with a short, 15-20 min online clarity call to share what is troubling you and map the right next step.",
    actionLabel: "Book Clarity Call",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Message on WhatsApp",
    body: "Send a direct message on WhatsApp if you have quick questions about session availability or formats.",
    href: buildWhatsAppUrl("Hi Omkar, I would like to book a clarity call with you."),
    actionLabel: "Message on WhatsApp",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Written Enquiry",
    body: "Describe what you are navigating in your own words if you prefer a slower, more detailed first message.",
    href: "#enquiry-form",
    actionLabel: "Write Enquiry",
  },
];

export default function Contact() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <Reveal immediate>
          <SectionIntro
            align="center"
            className="max-w-4xl"
            eyebrow="Connect"
            title={
              <>
                Start Your <span className="italic text-[#3D2B1F]">Healing Journey</span>
              </>
            }
            body="Choose the cleanest first step: book a clarity call, message directly on WhatsApp, or send a written enquiry."
            titleClassName="text-5xl md:text-6xl lg:text-7xl"
          />
        </Reveal>
      </SectionShell>

      <SectionShell tone="white" className="border-y border-[#1A1A1A]/8">
        <div className="grid gap-8 lg:grid-cols-3">
          {contactRoutes.map((route, index) => (
            <Reveal key={route.title} delay={index * 0.05}>
              <FeatureCard
                icon={route.icon}
                title={route.title}
                body={route.body}
                href={route.href}
                actionLabel={route.actionLabel}
                onAction={route.title === "Book a Clarity Call" ? () => openLeadWizard() : undefined}
                className="min-h-[290px]"
              />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <MediaFrame
                src={siteConfig.image.contactPortrait}
                alt="Omkar Pawar portrait"
                aspect="aspect-[4/5]"
                imageClassName="object-[center_24%]"
                priority
                caption={
                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl font-semibold text-[#1A1A1A]">
                      Choose The Easiest Next Step
                    </h3>
                    <p className="text-sm leading-7 text-[#1A1A1A]">
                      Start with a clarity call, message directly on WhatsApp, or write a detailed enquiry.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Button type="button" onClick={() => openLeadWizard()} size="md">
                        Book Clarity Call
                      </Button>
                      <Button asChild variant="secondary" size="md">
                        <a
                          href={buildWhatsAppUrl("Hi Omkar, I would like to book a clarity call.")}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-4 w-4" />
                          Message WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                }
              />

              <PremiumCard className="mt-6 grid gap-5 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[24px] bg-[#FAF6F0] text-[#3D2B1F]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3D2B1F]">
                      Email
                    </p>
                    <a href={`mailto:${siteConfig.email}`} className="mt-2 block font-semibold text-[#1A1A1A] hover:text-[#3D2B1F]">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[24px] bg-[#FAF6F0] text-[#3D2B1F]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3D2B1F]">
                      Location
                    </p>
                    <p className="mt-2 font-semibold text-[#1A1A1A]">{siteConfig.locationLabel}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  {[
                    { label: "Instagram", href: siteConfig.instagramUrl, icon: <Instagram className="h-4 w-4" /> },
                    { label: "LinkedIn", href: siteConfig.linkedinUrl, icon: <Linkedin className="h-4 w-4" /> },
                    { label: "YouTube", href: siteConfig.youtubeUrl, icon: <Youtube className="h-4 w-4" /> },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/8 bg-[#FAF6F0] px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:border-[#3D2B1F]/35 hover:text-[#3D2B1F]"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  ))}
                </div>
              </PremiumCard>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <PremiumCard id="enquiry-form" className="p-6 md:p-10">
              <SectionIntro
                eyebrow="Send An Enquiry"
                title="Write What You Are Navigating."
                body="This form is for a private, thoughtful first message. Share enough context for Omkar to understand what kind of support may fit."
                titleClassName="text-3xl md:text-4xl"
              />
              <div className="mt-8">
                <InquiryForm />
              </div>
            </PremiumCard>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="charcoal">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <SectionIntro
              inverse
              eyebrow="Prefer A Direct Message?"
              title="WhatsApp Is The Fastest Route."
              body="Use WhatsApp if you want a direct first message before filling out the longer enquiry form."
              titleClassName="max-w-3xl"
            />
            <Button asChild variant="inverted" size="lg">
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to know more about working with you.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </Reveal>
      </SectionShell>
    </div>
  );
}




