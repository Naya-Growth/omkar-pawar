import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  Globe2,
  HeartHandshake,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import InquiryForm from "../components/InquiryForm";
import ShareWebsiteButton from "../components/ShareWebsiteButton";
import { useLeadWizard } from "../components/LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Home() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      <section className="mx-auto flex min-h-[92vh] max-w-[1400px] items-center px-6 pb-28 pt-14 md:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#EFE6DA] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#8C7A6B]">
                {siteConfig.roleLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C7A6B]">
                <MapPin className="h-3.5 w-3.5" />
                {siteConfig.locationLabel}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl leading-[1.02] md:text-7xl lg:text-[6.2rem]"
            >
              Emotional mastery for
              <br />
              <span className="italic text-[#8C7A6B]">calmer, clearer living.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg font-light leading-relaxed text-gray-600 md:text-xl"
            >
              Omkar Pawar helps people heal anxiety, regulate emotional overwhelm, and understand
              the root patterns that keep repeating beneath high-functioning outer lives.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openLeadWizard()}
                className="inline-flex items-center gap-3 rounded-full bg-[#2A2A2A] px-8 py-4 text-sm font-bold tracking-[0.14em] text-white transition-colors hover:bg-[#8C7A6B]"
              >
                Take the guided fit check
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white px-8 py-4 text-sm font-bold tracking-[0.14em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
              >
                Book a discovery call
              </Link>
              <ShareWebsiteButton
                className="inline-flex items-center gap-3 rounded-full border border-black/5 bg-white px-8 py-4 text-sm font-bold tracking-[0.14em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
                label="Share website"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-[1.6rem] border border-black/5 bg-white px-5 py-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C7A6B]">
                  Experience
                </p>
                <p className="mt-2 text-lg font-semibold">{siteConfig.socialProof.years}</p>
              </div>
              <div className="rounded-[1.6rem] border border-black/5 bg-white px-5 py-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C7A6B]">
                  Impact
                </p>
                <p className="mt-2 text-lg font-semibold">{siteConfig.socialProof.clients}</p>
              </div>
              <div className="rounded-[1.6rem] border border-black/5 bg-white px-5 py-4 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C7A6B]">
                  Sessions
                </p>
                <p className="mt-2 text-lg font-semibold">{siteConfig.languages.join(" · ")}</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(16px)", y: 18 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/60 bg-[#E6DACB] shadow-[0_24px_90px_rgba(84,61,34,0.14)]">
              <img
                src={siteConfig.image.heroPortrait}
                alt="Omkar Pawar standing outdoors"
                className="h-full w-full object-cover object-[center_20%]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1914]/12 via-transparent to-[#FAF9F6]/12" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -14, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -left-4 bottom-8 max-w-[250px] rounded-[1.8rem] border border-white/70 bg-white/88 p-5 shadow-xl backdrop-blur-md md:-left-12"
            >
              <p className="font-serif text-xl leading-snug text-[#2A2A2A]">
                “Be gentle with your thoughts and emotions.”
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C7A6B]">
                — Omkar Pawar
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.95 }}
              className="absolute -bottom-8 right-0 max-w-[250px] rounded-[1.8rem] border border-white/60 bg-[#2A2A2A] p-5 text-white shadow-2xl md:-right-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#D8C0A1]">
                <Globe2 className="h-3.5 w-3.5" />
                Online worldwide
              </div>
              <p className="mt-4 text-sm leading-7 text-white/74">
                Discovery calls, guided enquiries, and 1:1 support rooted in emotional healing,
                practical awareness, and calm follow-through.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF4EA] text-[#8C7A6B]"
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl leading-tight text-[#2A2A2A] md:text-5xl">
            “For every surface-level behavior, there is a
            <span className="italic text-[#8C7A6B]"> deep-rooted reason.</span> We do not just cope.
            We heal from the root.”
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-gray-500">
            The Freedom Innerwellbeing approach
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl">
              The invisible battles
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-6 text-lg font-light leading-relaxed text-gray-600">
              You may look composed on the outside and still feel exhausted by overthinking,
              emotional pressure, fear of judgment, and patterns that seem to return no matter how
              much you understand them intellectually.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#8C7A6B] transition-colors hover:text-[#2A2A2A]"
              >
                Read Omkar’s story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 lg:col-span-7"
          >
            {[
              {
                title: "Anxiety & overthinking",
                desc: "Constant internal noise, mental looping, self-doubt, and the difficulty of truly switching off.",
                icon: <BrainCircuit className="h-6 w-6" />,
              },
              {
                title: "Inner child wounds",
                desc: "Past emotional experiences that still shape present reactions, triggers, self-protection, and shutdown.",
                icon: <Sparkles className="h-6 w-6" />,
              },
              {
                title: "Relationship patterns",
                desc: "Fear of vulnerability, repeated cycles, emotional reactivity, and difficulty feeling secure in connection.",
                icon: <HeartHandshake className="h-6 w-6" />,
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="flex gap-5 rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FAF4EA] text-[#8C7A6B]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#2A2A2A]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#2A2A2A] px-6 py-28 text-white md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <motion.span variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D8C0A1]">
              Clinical expertise
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 font-serif text-4xl md:text-5xl">
              An eclectic approach to healing
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-lg font-light text-white/72">
              Omkar draws from multiple therapeutic and awareness-based modalities to understand the
              actual root of what is happening instead of staying only at symptom level.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {[
              "Inner Child Healing",
              "Cognitive Hypnotic Psychotherapy",
              "Neuro-Linguistic Programming",
              "Mindfulness-Based CBT",
            ].map((modality, index) => (
              <motion.div
                key={modality}
                variants={fadeUp}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-3xl font-serif text-[#D8C0A1]">0{index + 1}</p>
                <h3 className="mt-5 text-lg font-semibold tracking-wide">{modality}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-28 md:px-12">
        <div className="grid gap-10 overflow-hidden rounded-[3rem] border border-black/5 bg-white p-8 shadow-[0_24px_90px_rgba(94,75,43,0.08)] md:p-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#8C7A6B]">
              Prefer writing before a call?
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Send a grounded enquiry and let the right next step become clear.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600">
              Use the form below if you want to explain what you are currently navigating in your own
              words. The same live Naya lead system handles this enquiry flow too, so your message is
              captured properly and routed for follow-up.
            </p>

            <div className="mt-8">
              <InquiryForm sourceCta="home-inline-form" />
            </div>
          </div>

          <div className="relative rounded-[2.5rem] bg-[#F7F1E8] p-5">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={siteConfig.image.homeFormAside}
                alt="Omkar Pawar in a reflective outdoor portrait"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-5 rounded-[1.8rem] bg-white p-6 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8C7A6B]">
                Good for
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600">
                <li>People who want to describe their situation before speaking live</li>
                <li>Discovery-call requests and guided program fit checks</li>
                <li>Private enquiries for anxiety, emotional healing, and inner-child work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 text-center md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl leading-tight text-[#2A2A2A] md:text-6xl">
            Ready to stop surviving and start
            <span className="italic text-[#8C7A6B]"> living?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg font-light text-gray-500">
            Start with the guided fit check, send an enquiry, or message directly on WhatsApp and
            take the first honest step toward steadier emotional wellbeing.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="rounded-full bg-[#2A2A2A] px-10 py-4 text-sm font-bold tracking-[0.16em] text-white transition-colors hover:bg-[#8C7A6B]"
            >
              Open guided fit check
            </button>
            <a
              href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/5 bg-white px-10 py-4 text-sm font-bold tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
            >
              Message on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
