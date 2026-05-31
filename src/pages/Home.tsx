import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Globe2,
  HeartHandshake,
  Instagram,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import InquiryForm from "../components/InquiryForm";
import { useLeadWizard } from "../components/LeadWizardProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { heroStats, wizardContent } from "../lib/omkar-content";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const painPoints = [
  {
    title: "Anxiety & Overthinking",
    desc: "Constant internal noise, mental looping, self-doubt, and the difficulty of truly switching off.",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
  {
    title: "Inner Child Wounds",
    desc: "Past emotional experiences that still shape present reactions, triggers, self-protection, and shutdown.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    title: "Relationship Patterns",
    desc: "Fear of vulnerability, repeated cycles, emotional reactivity, and difficulty feeling secure in connection.",
    icon: <HeartHandshake className="h-5 w-5" />,
  },
];

const modalities = [
  {
    title: "Inner Child Healing",
    desc: "For old experiences that still shape present reactions, triggers, self-protection, and shutdown.",
  },
  {
    title: "Cognitive Hypnotic Psychotherapy",
    desc: "Root-level work for the deeper reason beneath surface-level behavior and emotional loops.",
  },
  {
    title: "Neuro-Linguistic Programming",
    desc: "Practical reframing support for confidence, self-doubt, emotional responses, and repeated patterns.",
  },
  {
    title: "Mindfulness-Based CBT",
    desc: "Calm awareness and grounded regulation for overthinking, overwhelm, and clearer follow-through.",
  },
];

const claritySteps = [
  "Share what feels most active right now.",
  "Choose the support path that feels comfortable.",
  "Leave your details for a personal response.",
];

export default function Home() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#F7F8F5] text-[#252724]">
      <section className="mx-auto max-w-[1500px] px-5 py-10 sm:px-8 lg:min-h-[calc(100svh-82px)] lg:px-10 lg:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,500px)] xl:gap-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="min-w-0"
          >
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-[#E7EDE6] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#53665A]">
                {siteConfig.roleLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#252724]/8 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6F6259]">
                <MapPin className="h-3.5 w-3.5" />
                {siteConfig.locationLabel}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-8 max-w-[860px] font-serif text-[3.45rem] leading-[0.9] text-[#252724] sm:text-[4.6rem] lg:mt-9 lg:text-[5.35rem] xl:text-[5.95rem] 2xl:text-[6.35rem]"
            >
              <span className="block">Emotional Mastery</span>
              <span className="block">For Calmer,</span>
              <span className="block italic text-[#8A7668]">Clearer Living.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-[#55616F] md:text-lg"
            >
              Omkar Pawar helps people heal anxiety, regulate emotional overwhelm, and understand
              the root patterns that keep repeating beneath high-functioning outer lives.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 grid max-w-2xl gap-2 sm:grid-cols-3">
              {[
                { label: "Anxiety & Overthinking", icon: <BrainCircuit className="h-4 w-4" /> },
                { label: "Emotional Overwhelm", icon: <HeartHandshake className="h-4 w-4" /> },
                { label: "Inner Child Healing", icon: <Sparkles className="h-4 w-4" /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-lg border border-[#252724]/8 bg-white/70 px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_28px_rgba(60,73,64,0.12)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#E7EDE6] text-[#53665A]">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold leading-5 text-[#252724]">{item.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button type="button" onClick={() => openLeadWizard()} size="lg" className="sm:w-auto">
                {wizardContent.triggerLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="secondary" size="lg" className="sm:w-auto">
                <Link to="/contact">Book A Clarity Session</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-5 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#9A5A50] underline-offset-4 transition-colors hover:text-[#252724] hover:underline"
              >
                <Instagram className="h-4 w-4" />
                Connect With Me On Instagram
              </a>
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#53665A] underline-offset-4 transition-colors hover:text-[#252724] hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Chat
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[520px] lg:mx-0"
          >
            <div className="overflow-hidden rounded-lg border border-[#252724]/8 bg-white p-3 shadow-[0_24px_80px_rgba(60,73,64,0.16)]">
              <div className="relative h-[440px] overflow-hidden rounded-md bg-[#E7EDE6] sm:h-[560px] lg:h-[min(64vh,620px)] lg:min-h-[500px]">
                <img
                  src={siteConfig.image.heroPortrait}
                  alt="Omkar Pawar standing outdoors"
                  className="h-full w-full object-cover object-[center_20%]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <Card className="absolute bottom-5 left-5 hidden max-w-[250px] bg-white/92 p-5 shadow-[0_18px_50px_rgba(37,39,36,0.14)] backdrop-blur lg:block">
              <p className="font-serif text-2xl leading-[1.05] text-[#252724]">
                "Be Gentle With Your Thoughts And Emotions."
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A7668]">
                Omkar Pawar
              </p>
            </Card>

            <Card className="absolute left-5 top-5 hidden max-w-[220px] bg-[#25322C] p-4 text-white shadow-[0_18px_50px_rgba(37,39,36,0.22)] lg:block">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D9E2D8]">
                <Globe2 className="h-3.5 w-3.5" />
                Online Worldwide
              </div>
              <p className="mt-4 text-sm leading-6 text-white/76">
                Clarity sessions and 1:1 support rooted in emotional healing and practical awareness.
              </p>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Card className="h-full p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A7668]">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-semibold leading-tight text-[#252724]">{stat.value}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-[#252724]/8 bg-white px-5 py-20 sm:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center"
        >
          <motion.div variants={fadeUp}>
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E7EDE6] text-[#53665A]">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8A7668]">
              The Freedom Innerwellbeing Approach
            </p>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="max-w-4xl font-serif text-3xl leading-tight text-[#252724] md:text-5xl"
          >
            "For Every Surface-Level Behavior, There Is A{" "}
            <span className="italic text-[#8A7668]">Deep-Rooted Reason.</span> We Do Not Just Cope.
            We Heal From The Root."
          </motion.h2>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8A7668]">
              What Clients Usually Carry
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              The Invisible Battles
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-8 text-[#55616F]">
              You may look composed on the outside and still feel exhausted by overthinking,
              emotional pressure, fear of judgment, and patterns that seem to return no matter how
              much you understand them intellectually.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Button asChild variant="ghost" size="md" className="px-0">
                <Link to="/about">
                  Read Omkar's Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-4"
          >
            {painPoints.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="grid gap-5 p-6 transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(60,73,64,0.12)] sm:grid-cols-[auto_1fr] sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#E7EDE6] text-[#53665A]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-[#252724]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#55616F]">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#25322C] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D9E2D8]">
                Clinical Expertise
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                An Eclectic Approach To Healing
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="max-w-2xl text-base leading-8 text-white/74">
              Omkar draws from multiple therapeutic and awareness-based modalities to understand the
              actual root of what is happening instead of staying only at symptom level.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
          >
            <motion.div variants={fadeUp} className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.18)]">
              <img
                src={siteConfig.image.servicesPortrait}
                alt="Omkar Pawar portrait for therapeutic support"
                className="aspect-[4/3] w-full rounded-md object-cover object-[center_18%] opacity-95"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-3 p-4">
                {claritySteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/10 text-xs font-bold text-[#D9E2D8]">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-6 text-white/74">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="h-full border-white/10 bg-white/[0.06] p-6 text-white shadow-none md:p-8">
                <div className="mb-6 flex flex-wrap gap-2">
                  {modalities.map((modality) => (
                    <span
                      key={modality.title}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D9E2D8]"
                    >
                      {modality.title}
                    </span>
                  ))}
                </div>

                <Accordion type="single" defaultValue="modality-0" collapsible>
                  {modalities.map((modality, index) => (
                    <AccordionItem key={modality.title} value={`modality-${index}`} className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-[#D9E2D8]">
                        <span className="flex items-center gap-4">
                          <span className="font-serif text-2xl text-[#D9E2D8]">0{index + 1}</span>
                          {modality.title}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-white/74">
                        {modality.desc}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button type="button" variant="inverted" size="lg" onClick={() => openLeadWizard()}>
                    {wizardContent.triggerLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="border border-white/12 text-white hover:bg-white/10">
                    <Link to="/services">Explore Support</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8A7668]">
              Quick Clarity Check
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
              Get Direction Without Guessing The Right Program First.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-8 text-[#55616F]">
              This guided enquiry keeps the first step simple: name what is happening, choose the
              kind of support that feels comfortable, and let Omkar respond personally.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-3"
          >
            {claritySteps.map((step, index) => (
              <motion.div key={step} variants={fadeUp}>
                <Card className="flex items-start gap-4 p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E7EDE6] text-sm font-bold text-[#53665A]">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold leading-7 text-[#252724]">{step}</p>
                </Card>
              </motion.div>
            ))}
            <motion.div variants={fadeUp} className="mt-3 flex flex-col gap-3 sm:flex-row">
              <Button type="button" onClick={() => openLeadWizard()} size="lg">
                {wizardContent.triggerLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a
                  href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Message On WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8A7668]">
              Prefer Writing Before A Call?
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Send A Grounded Enquiry And Let The Right Next Step Become Clear.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-[#55616F]">
              Use the form below if you want to explain what you are currently navigating in your own
              words. Your message is captured properly and routed for follow-up.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              <InquiryForm sourceCta="home-inline-form" />
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-28"
          >
            <Card className="overflow-hidden p-3">
              <img
                src={siteConfig.image.homeFormAside}
                alt="Omkar Pawar in a reflective outdoor portrait"
                className="aspect-[4/3] w-full rounded-md object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-3 p-4">
                {[
                  { icon: <Clock3 className="h-4 w-4" />, label: "Discovery-call requests" },
                  { icon: <ShieldCheck className="h-4 w-4" />, label: "Private anxiety and healing enquiries" },
                  { icon: <CheckCircle2 className="h-4 w-4" />, label: "Program fit checks" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm font-semibold text-[#55616F]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E7EDE6] text-[#53665A]">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </Card>
          </motion.aside>
        </div>
      </section>

      <section className="px-5 py-20 text-center sm:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#E7EDE6] text-[#53665A]">
            <Leaf className="h-5 w-5" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl leading-tight text-[#252724] md:text-6xl">
            Ready To Stop Surviving And Start{" "}
            <span className="italic text-[#8A7668]">Living?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#55616F]">
            Start with the quick clarity check, send an enquiry, or message directly on WhatsApp and
            take the first honest step toward steadier emotional wellbeing.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" onClick={() => openLeadWizard()} size="lg">
              {wizardContent.triggerLabel}
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Message On WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
