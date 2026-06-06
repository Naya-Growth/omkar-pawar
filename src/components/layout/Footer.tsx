import { ArrowRight, Instagram, Linkedin, Mail, MapPin, MessageCircle, Send, ShieldCheck, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { BrandLockup } from "../BrandMark";
import { useLeadWizard } from "../LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../../lib/site-config";

const directionCtaLabel = "Find My Next Step";

export default function Footer() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <footer className="mt-20 w-full">
      <div className="bg-[#1A1A1A] px-6 py-20 text-white md:px-12">
        <div className="mx-auto grid max-w-[1400px] gap-8 rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.025))] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.24)] md:grid-cols-[1.05fr_0.95fr] md:p-12">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8C0A1]">
                Calm, Practical Emotional Support
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
                Ready To Feel Clearer, Steadier, And More Like Yourself Again?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                Start with one clean next step: a guided direction check, a private enquiry, or a
                direct WhatsApp message.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "Private first response",
                "Online worldwide",
                "No pressure to commit",
              ].map((item) => (
                <div key={item} className="rounded-md border border-white/10 bg-white/[0.05] px-4 py-3">
                  <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                  <p className="mt-2 text-xs font-bold leading-5 text-white/76">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 self-stretch sm:grid-cols-2">
            <motion.button
              type="button"
              onClick={() => openLeadWizard()}
              whileHover={{ y: -3, rotateX: 4 }}
              whileTap={{ scale: 0.98 }}
              className="flex min-h-[142px] flex-col justify-between rounded-2xl bg-white p-6 text-left text-[#1A1A1A] shadow-[0_18px_50px_rgba(61,43,31,0.12)]"
            >
              <Send className="h-6 w-6 text-[#3D2B1F]" />
              <span className="font-serif text-2xl font-semibold leading-tight">{directionCtaLabel}</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.a
              href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, rotateX: 4 }}
              whileTap={{ scale: 0.98 }}
              className="flex min-h-[142px] flex-col justify-between rounded-2xl border border-[#25D366]/24 bg-[#25D366]/10 p-6 text-left text-white"
            >
              <MessageCircle className="h-6 w-6 text-[#25D366]" />
              <span className="font-serif text-2xl font-semibold leading-tight">Message On WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <Link
              to="/contact"
              className="rounded-xl border border-white/12 bg-white/[0.05] px-6 py-5 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10"
            >
              Send An Enquiry
            </Link>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D62976]/24 bg-[#D62976]/10 px-6 py-5 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#D62976]/16"
            >
              <Instagram className="h-4 w-4 text-[#FEDA75]" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF6F0] px-6 pb-32 pt-16 text-[#2A2A2A] md:px-12 md:pb-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[1.35fr_0.7fr_0.95fr]">
          <div>
            <BrandLockup className="items-start" />
            <p className="mt-6 max-w-xl text-sm leading-7 text-gray-600">
              {siteConfig.practiceName} supports people who want to move beyond high-functioning
              anxiety, perfectionism, emotional overwhelm, and unresolved inner-child patterns.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#3D2B1F]">
                {siteConfig.socialProof.years}
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#3D2B1F]">
                {siteConfig.socialProof.clients}
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#3D2B1F]">
                {siteConfig.locationLabel}
              </span>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3D2B1F]">Explore</p>
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
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3D2B1F]">Connect</p>
            <div className="mt-5 space-y-4 text-sm text-gray-600">
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 transition-colors hover:text-[#2A2A2A]">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#3D2B1F]" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors hover:text-[#2A2A2A]"
              >
                <MessageCircle className="mt-1 h-4 w-4 shrink-0 text-[#3D2B1F]" />
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#3D2B1F]" />
                <span>{siteConfig.locationLabel}</span>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#3D2B1F]/30 hover:text-[#3D2B1F]"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#3D2B1F]/30 hover:text-[#3D2B1F]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#3D2B1F]/30 hover:text-[#3D2B1F]"
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




