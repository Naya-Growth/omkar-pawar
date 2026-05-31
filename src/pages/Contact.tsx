import { motion } from "motion/react";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";

import InquiryForm from "../components/InquiryForm";
import { useLeadWizard } from "../components/LeadWizardProvider";
import { Button } from "../components/ui/button";
import { wizardContent } from "../lib/omkar-content";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Contact() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      <section className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-24 text-center md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-4xl"
        >
          <motion.span variants={fadeUp} className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C7A6B]">
            Connect
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
            Start Your <span className="italic text-[#8C7A6B]">Healing Journey</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl">
            Whether you are ready to apply for support or simply want to ask a thoughtful question,
            this page gives you the cleanest way to reach out.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-12 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col gap-8 lg:col-span-5"
          >
            <motion.div variants={fadeUp} className="overflow-hidden rounded-[3rem] border border-black/5 bg-white shadow-sm">
              <div className="aspect-[4/5] overflow-hidden bg-[#EFE6DA]">
                <img
                  src={siteConfig.image.contactPortrait}
                  alt="Omkar Pawar portrait"
                  className="h-full w-full object-cover object-[center_24%]"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="space-y-4 p-8">
                <h3 className="font-serif text-3xl">Choose The Easiest Next Step</h3>
                <p className="text-sm leading-7 text-gray-600">
                  Start with the quick clarity check, message directly on WhatsApp, or use the enquiry
                  form if you want to explain things in your own words first.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button
                    type="button"
                    onClick={() => openLeadWizard()}
                    size="md"
                  >
                    {wizardContent.triggerLabel}
                  </Button>
                  <Button asChild variant="instagram" size="md">
                    <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[2.5rem] bg-[#25D366] p-10 text-white shadow-lg shadow-[#25D366]/20">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl">Chat On WhatsApp</h3>
              <p className="mt-4 text-lg font-light text-white/90">
                If you want the quickest reply before filling anything out, WhatsApp is the fastest
                route.
              </p>
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to know more about working with you.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-[0.16em] text-[#128C7E] transition-colors hover:bg-gray-100"
              >
                Message Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-6 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF4EA] text-[#8C7A6B]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">Email</p>
                  <p className="mt-2 font-medium text-[#2A2A2A]">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF4EA] text-[#8C7A6B]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">Location</p>
                  <p className="mt-2 font-medium text-[#2A2A2A]">{siteConfig.locationLabel}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#FAF9F6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#FAF9F6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={siteConfig.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#FAF9F6] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
                >
                  <Youtube className="h-4 w-4" />
                  YouTube
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[3rem] border border-black/5 bg-white p-10 shadow-sm lg:col-span-7 md:p-14"
          >
            <h3 className="font-serif text-3xl text-[#2A2A2A]">Send An Enquiry</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600">
              This form is connected to the live Naya lead system, so your enquiry is stored,
              routed, and visible inside the client workspace without disappearing into a broken
              inbox.
            </p>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
