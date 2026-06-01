import { motion } from "motion/react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Globe2,
  HeartHandshake,
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
import { MetricCard } from "../components/ui/premium";
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

const approachPrinciples = [
  {
    step: "01",
    title: "Surface-Level Behavior",
    desc: "Anxiety, overwhelm, and repeated reactions are treated as signals, not final labels.",
    icon: <BrainCircuit className="h-5 w-5" />,
  },
  {
    step: "02",
    title: "Deep-Rooted Reason",
    desc: "The work looks for the pattern beneath the symptom so the same loop does not keep returning.",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    step: "03",
    title: "Heal From The Root",
    desc: "The next step becomes steadier emotional awareness, regulation, and practical follow-through.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
];

const heroStatIcons = [Clock3, HeartHandshake, Globe2, CheckCircle2];

export default function Home() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FBF4E6] text-[#1A1A1A]">
      <section className="relative isolate overflow-hidden bg-[#FBF4E6] px-5 py-10 sm:px-8 lg:min-h-[calc(100svh-82px)] lg:px-14 lg:py-14 xl:px-20 2xl:px-24">
        <img
          src={siteConfig.image.homeHeroHorizontal}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 z-0 hidden h-full w-[56%] object-cover object-center lg:block"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 z-0 hidden bg-[linear-gradient(90deg,#FBF4E6_0%,#FBF4E6_41%,rgba(251,244,230,0.9)_56%,rgba(251,244,230,0.25)_74%,rgba(251,244,230,0.04)_100%)] lg:block" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_82%_22%,rgba(235,200,91,0.28),transparent_36%),linear-gradient(135deg,#FFF9EF_0%,#F8ECD9_52%,#F2DFC3_100%)] lg:hidden" />
        <img
          src={siteConfig.image.heroPortrait}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-[-22%] z-0 h-[54%] w-[86%] object-cover object-[center_16%] opacity-[0.16] sm:hidden"
          loading="eager"
          decoding="async"
        />
        <div className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-9 lg:min-h-[calc(100svh-194px)] lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] xl:grid-cols-[minmax(0,0.69fr)_minmax(0,0.31fr)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="min-w-0"
          >
            <motion.div variants={fadeUp} className="hidden flex-wrap items-center gap-2.5 sm:flex">
              <span className="rounded-full bg-[#EBC85B] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#2A210B] shadow-[0_10px_24px_rgba(235,200,91,0.22)]">
                Emotional Mastery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#1A1A1A]/8 bg-white/82 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6F5438]">
                <MapPin className="h-3.5 w-3.5" />
                {siteConfig.locationLabel}
              </span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex max-w-full flex-wrap items-center gap-2 sm:hidden"
            >
              <span className="rounded-full bg-[#EBC85B] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#2A210B] shadow-[0_10px_24px_rgba(235,200,91,0.2)]">
                Emotional Mastery
              </span>
              <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-[#1A1A1A]/8 bg-white/86 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#6F5438] shadow-sm">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Pune · Online
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 max-w-[760px] font-serif text-[2.8rem] font-bold leading-[0.95] text-[#1A1A1A] sm:text-[3.85rem] lg:mt-9 lg:text-[3.85rem] xl:max-w-[980px] xl:text-[4.45rem] 2xl:text-[5.05rem]"
            >
              <span className="block lg:hidden">
                <span className="block">Master Your</span>
                <span className="block">Emotions.</span>
                <span className="block text-[#8C6A44]">Transform</span>
                <span className="block text-[#8C6A44]">Your Life.</span>
              </span>
              <span className="hidden lg:block">
                <span className="block">Master Your Emotions.</span>
                <span className="block text-[#8C6A44]">Transform Your Life.</span>
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-6 overflow-hidden rounded-lg border border-[#1A1A1A]/8 bg-white/78 p-2 shadow-[0_18px_55px_rgba(140,106,68,0.18)] lg:hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#F2E4CE]">
                <img
                  src={siteConfig.image.homeHeroHorizontal}
                  alt="Omkar Pawar near a calm lakeside"
                  className="h-full w-full object-cover object-[62%_center]"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-2xl text-base leading-8 text-[#4E463B] md:text-lg"
            >
              Omkar Pawar helps people heal anxiety, regulate emotional overwhelm, and understand
              the root patterns that keep repeating beneath high-functioning outer lives.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button type="button" onClick={() => openLeadWizard()} size="lg" className="sm:w-auto">
                {wizardContent.triggerLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="secondary" size="lg" className="sm:w-auto">
                <Link to="/contact">Book A Clarity Session</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 grid max-w-2xl gap-2 sm:grid-cols-3">
              {[
                { label: "Anxiety & Overthinking", icon: <BrainCircuit className="h-4 w-4" /> },
                { label: "Emotional Overwhelm", icon: <HeartHandshake className="h-4 w-4" /> },
                { label: "Inner Child Healing", icon: <Sparkles className="h-4 w-4" /> },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-lg border border-[#1A1A1A]/8 bg-white/76 px-3 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_28px_rgba(140,106,68,0.16)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#F2E4CE] text-[#8C6A44]">
                    {item.icon}
                  </span>
                  <span className="text-xs font-bold leading-5 text-[#1A1A1A]">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <div className="ml-auto h-[min(62vh,560px)] min-h-[430px] w-full" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto mt-9 grid max-w-[1400px] gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroStats.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <MetricCard label={stat.label} value={stat.value} icon={heroStatIcons[index]} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-[#1A1A1A]/8 bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start"
        >
          <motion.div variants={fadeUp}>
            <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#F2E4CE] text-[#8C6A44] shadow-[0_14px_34px_rgba(140,106,68,0.12)]">
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#8C6A44]">
              The Freedom Innerwellbeing Approach
            </p>
            <h2 className="mt-4 max-w-md font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
              The symptom is not the whole story.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[#4E463B]">
              The work moves beneath coping and into the reason a pattern keeps repeating, so the
              next step feels clearer and more grounded.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
              "For Every Surface-Level Behavior, There Is A{" "}
              <span className="italic text-[#8C6A44]">Deep-Rooted Reason.</span> We Do Not Just Cope.
              We Heal From The Root."
            </h2>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {approachPrinciples.map((item) => (
                <div
                  key={item.step}
                  className="group rounded-lg border border-[#1A1A1A]/8 bg-[#FBF4E6] p-5 shadow-[0_14px_38px_rgba(88,62,34,0.07)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF9EF] hover:shadow-[0_20px_55px_rgba(140,106,68,0.14)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-3xl font-semibold text-[#8C6A44]">{item.step}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-[#8C6A44] shadow-sm">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#4E463B]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8C6A44]">
              What Clients Usually Carry
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The Invisible Battles
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-8 text-[#4E463B]">
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
                <Card className="grid gap-5 p-6 transition-shadow duration-300 hover:shadow-[0_18px_50px_rgba(140,106,68,0.14)] sm:grid-cols-[auto_1fr] sm:p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F2E4CE] text-[#8C6A44]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight text-[#1A1A1A]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#4E463B]">{item.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#2A2A2A] px-5 py-20 text-white sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#EFD95E]">
                Clinical Expertise
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
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
                src={siteConfig.image.clinicalExpertise}
                alt="Omkar Pawar portrait for therapeutic support"
                className="aspect-[4/3] w-full rounded-md object-cover object-center opacity-95"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-3 p-4">
                {claritySteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#EBC85B]/14 text-xs font-bold text-[#EFD95E]">
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
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#EFD95E]"
                    >
                      {modality.title}
                    </span>
                  ))}
                </div>

                <Accordion type="single" defaultValue="modality-0" collapsible>
                  {modalities.map((modality, index) => (
                    <AccordionItem key={modality.title} value={`modality-${index}`} className="border-white/10">
                      <AccordionTrigger className="text-white hover:text-[#EFD95E]">
                        <span className="flex items-center gap-4">
                          <span className="font-serif text-2xl font-semibold text-[#EFD95E]">0{index + 1}</span>
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
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8C6A44]">
              Quick Clarity Check
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Get Direction Without Guessing The Right Program First.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-8 text-[#4E463B]">
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
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F2E4CE] text-sm font-bold text-[#8C6A44]">
                    {index + 1}
                  </div>
                  <p className="text-sm font-semibold leading-7 text-[#1A1A1A]">{step}</p>
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
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8C6A44]">
              Prefer Writing Before A Call?
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Send A Grounded Enquiry And Let The Right Next Step Become Clear.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-[#4E463B]">
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
                className="aspect-[4/5] w-full rounded-md object-cover object-[center_22%]"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-3 p-4">
                {[
                  { icon: <Clock3 className="h-4 w-4" />, label: "Discovery-call requests" },
                  { icon: <ShieldCheck className="h-4 w-4" />, label: "Private anxiety and healing enquiries" },
                  { icon: <CheckCircle2 className="h-4 w-4" />, label: "Program fit checks" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm font-semibold text-[#4E463B]">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F2E4CE] text-[#8C6A44]">
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
          <motion.div variants={fadeUp} className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F2E4CE] text-[#8C6A44]">
            <Leaf className="h-5 w-5" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-6xl">
            Ready To Stop Surviving And Start{" "}
            <span className="italic text-[#8C6A44]">Living?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#4E463B]">
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
