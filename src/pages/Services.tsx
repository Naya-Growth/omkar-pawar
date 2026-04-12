import { motion } from "motion/react";
import { ArrowRight, Leaf, Users, Zap } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

export default function Services() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      <section className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-24 md:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.span variants={fadeUp} className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C7A6B]">
              Work with Omkar
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl leading-[1.05] md:text-7xl">
              Transformation
              <br />
              <span className="italic text-[#8C7A6B]">pathways</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-lg font-light leading-relaxed text-gray-600">
              These offerings are designed for people who want grounded, emotionally intelligent
              support instead of generic motivation. Pricing is discussed privately after fit and
              need are clear.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => openLeadWizard()}
                className="rounded-full bg-[#2A2A2A] px-8 py-4 text-sm font-bold tracking-[0.16em] text-white transition-colors hover:bg-[#8C7A6B]"
              >
                Start with the guided fit check
              </button>
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to know which program is right for me.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/5 bg-white px-8 py-4 text-sm font-bold tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
              >
                Ask on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl shadow-[#8C7A6B]/10">
              <img
                src={siteConfig.image.servicesPortrait}
                alt="Omkar Pawar portrait for services page"
                className="h-full w-full object-cover object-[center_18%]"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-8 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="group relative flex flex-col overflow-hidden rounded-[3rem] border border-black/5 bg-white p-12 shadow-sm transition-all duration-500 hover:shadow-xl">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-gradient-to-bl from-[#FAF4EA] to-transparent opacity-60 transition-transform duration-700 group-hover:scale-110" />
            <div className="relative z-10 flex-grow">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF4EA] text-[#8C7A6B]">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl">
                1:1 emotional healing & anxiety reset
              </h3>
              <p className="mt-6 text-gray-500 leading-8">
                A personalized support container for high-performers who feel anxious, emotionally
                stretched, or unable to find steadiness despite knowing “what to do.”
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-gray-600">
                <li>Format: 1:1 online sessions via Google Meet</li>
                <li>Focus: nervous system regulation, reframing, emotional stability, and clarity</li>
                <li>Outcome: calmer emotional baseline and a more grounded way of responding</li>
              </ul>
            </div>
            <button
              type="button"
              onClick={() => openLeadWizard()}
              className="relative z-10 mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#2A2A2A] px-8 py-4 text-sm font-bold tracking-[0.14em] text-white transition-colors hover:bg-[#8C7A6B]"
            >
              Apply to join
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div variants={fadeUp} className="rounded-[3rem] bg-[#8C7A6B] p-12 text-white shadow-sm transition-all duration-500 hover:shadow-xl">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl">Inner child healing sessions</h3>
              <p className="mt-5 leading-8 text-white/80">
                Intensive healing sessions for people who know their past experiences still shape their
                present triggers, reactions, self-image, and relationships.
              </p>
              <button
                type="button"
                onClick={() => openLeadWizard()}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-[0.14em] text-[#2A2A2A] transition-colors hover:bg-[#F1E4D0]"
              >
                Apply to join
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[3rem] bg-[#2A2A2A] p-12 text-white shadow-sm transition-all duration-500 hover:shadow-xl">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-3xl">28 days anxiety transformation</h3>
              <p className="mt-5 leading-8 text-white/80">
                A structured program for people who need a tighter, time-bound intervention to break
                anxiety loops, reduce overwhelm, and build a steadier internal rhythm.
              </p>
              <button
                type="button"
                onClick={() => openLeadWizard()}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold tracking-[0.14em] text-[#2A2A2A] transition-colors hover:bg-[#D8C0A1]"
              >
                Apply to join
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20 text-center"
        >
          <motion.span variants={fadeUp} className="mb-4 block text-[10px] font-bold uppercase tracking-[0.3em] text-[#8C7A6B]">
            The process
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl">
            How it <span className="italic text-[#8C7A6B]">works</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-lg font-light text-gray-500">
            The process is designed to keep things simple, human, and clear from the first enquiry.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid gap-12 text-center md:grid-cols-3"
        >
          {[
            {
              step: "1",
              title: "Guided enquiry",
              desc: "Start with the fit-check wizard or send a direct enquiry so the right context is captured properly.",
            },
            {
              step: "2",
              title: "Discovery & clarity",
              desc: "A discovery conversation helps map what you are carrying, what is repeating, and what kind of support fits.",
            },
            {
              step: "3",
              title: "Intentional support",
              desc: "If it is the right fit, the next phase becomes a more structured healing container with steady follow-through.",
            },
          ].map((item) => (
            <motion.div key={item.step} variants={fadeUp} className="flex flex-col items-center">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/5 bg-white text-2xl font-serif text-[#8C7A6B] shadow-sm">
                {item.step}
              </div>
              <h4 className="font-serif text-2xl">{item.title}</h4>
              <p className="mt-4 max-w-sm leading-7 text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
