import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

import { BrandLockup } from "../BrandMark";
import { useLeadWizard } from "../LeadWizardProvider";
import { Button } from "../ui/button";
import { wizardContent } from "../../lib/omkar-content";
import { buildWhatsAppUrl, siteConfig } from "../../lib/site-config";

export default function Footer() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <footer className="mt-20 w-full">
      <div className="bg-[#2A2A2A] px-6 py-20 text-white md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-10 rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-10 shadow-[0_24px_90px_rgba(0,0,0,0.22)] md:grid-cols-[1.15fr_0.85fr] md:p-14">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8C0A1]">
              Calm, Practical Emotional Support
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Ready To Feel Clearer, Steadier, And More Like Yourself Again?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
              If you are navigating anxiety, emotional overwhelm, or old patterns that keep repeating,
              we can start with a guided enquiry or a direct WhatsApp conversation and find the right
              next step without pressure.
            </p>
          </div>

          <div className="grid gap-3 self-start sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="rounded-full bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#2A2A2A] transition-colors hover:bg-[#D8C0A1]"
            >
              {wizardContent.triggerLabel}
            </button>
            <a
              href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/14 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
            >
              Message On WhatsApp
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white/14 px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
            >
              Send An Enquiry
            </Link>
            <Button asChild variant="inverted" size="md" className="border border-white/14 bg-transparent text-white hover:bg-white/10">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-[#F3EEE6] px-6 pb-32 pt-16 text-[#2A2A2A] md:px-12 md:pb-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1.35fr_0.7fr_0.95fr]">
          <div>
            <BrandLockup className="items-start" />
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600">
              {siteConfig.practiceName} supports people who want to move beyond high-functioning
              anxiety, perfectionism, emotional overwhelm, and unresolved inner-child patterns.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C7A6B]">
                {siteConfig.socialProof.years}
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C7A6B]">
                {siteConfig.socialProof.clients}
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8C7A6B]">
                {siteConfig.locationLabel}
              </span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">Explore</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600">
              <Link to="/" className="transition-colors hover:text-[#2A2A2A]">Home</Link>
              <Link to="/about" className="transition-colors hover:text-[#2A2A2A]">About Omkar</Link>
              <Link to="/services" className="transition-colors hover:text-[#2A2A2A]">Programs & Support</Link>
              <Link to="/stories" className="transition-colors hover:text-[#2A2A2A]">Client Stories</Link>
              <Link to="/content" className="transition-colors hover:text-[#2A2A2A]">Content Library</Link>
              <Link to="/contact" className="transition-colors hover:text-[#2A2A2A]">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">Connect</p>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 transition-colors hover:text-[#2A2A2A]">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#8C7A6B]" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-[#2A2A2A]"
              >
                <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-[#8C7A6B]" />
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#8C7A6B]" />
                <span>{siteConfig.locationLabel}</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1400px] flex-col gap-4 border-t border-black/5 pt-6 text-[11px] text-gray-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="transition-colors hover:text-[#2A2A2A]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="transition-colors hover:text-[#2A2A2A]">Terms of Service</Link>
            <Link to="/faq" className="transition-colors hover:text-[#2A2A2A]">FAQ</Link>
          </div>
          <p>© {new Date().getFullYear()} {siteConfig.projectName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
