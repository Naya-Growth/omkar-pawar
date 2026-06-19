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
  GraduationCap,
  Baby,
  Compass,
  HelpCircle,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";

import InquiryForm from "../components/InquiryForm";
import { useLeadWizard } from "../components/LeadWizardProvider";
import StoryCarousel from "../components/StoryCarousel";
import { stories } from "./SuccessStories";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  Reveal,
  SectionIntro,
  SectionShell,
  MetricCard,
  FeatureCard,
} from "../components/ui/premium";
import { heroStats, faqItems } from "../lib/omkar-content";
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

const supportPaths = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Quick Clarity Call",
    body: "A brief, low-pressure conversation to understand what is troubling you, map the right next step, and see if we are a good fit.",
    detail: "15-20 minutes · Online video call · Free",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "1:1 Emotional Healing & Support",
    body: "Personal online sessions to help you understand your overthinking, find calmer responses, and manage daily anxiety.",
    detail: "60 minutes · Online · Flexible scheduling",
  },
  {
    icon: <Baby className="h-6 w-6" />,
    title: "Inner Child & Childhood Trauma Support",
    body: "Gentle exploration of early patterns and expectations that still shape your adult triggers, reactions, and self-doubt.",
    detail: "60 minutes · Online · Focused work",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: "Structured Support Program",
    body: "Consistent weekly check-ins and practical tools designed to help you build steadier emotional regulation and daily habits.",
    detail: "4-week container · Weekly sessions · Structured resources",
  },
];

const homeCredentials = [
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "Psychologist & Practitioner",
    desc: "Double Master's in I/O Psychology & Clinical Psychology",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Cognitive Hypnotherapist",
    desc: "Diploma in Cognitive Hypnotic Psychotherapy",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "NLP Master Coach",
    desc: "Neuro-Linguistic Programming Master Practitioner",
  },
  {
    icon: <Baby className="h-6 w-6" />,
    title: "Inner Child Healer",
    desc: "Certified Inner Child Healing Practitioner",
  },
];

const heroStatIcons = [Clock3, HeartHandshake, Globe2, CheckCircle2];
const directionCtaLabel = "Book a Clarity Call";

export default function Home() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A]">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#FAF6F0] px-5 py-10 sm:px-8 lg:min-h-[calc(100svh-100px)] lg:px-14 lg:py-8 xl:px-20 2xl:px-24">
        <img
          src={siteConfig.image.homeHeroHorizontal}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 z-0 hidden h-full w-[56%] object-cover object-[98%_center] lg:block"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 z-0 hidden bg-[linear-gradient(90deg,#FAF6F0_0%,#FAF6F0_41%,rgba(251,244,230,0.9)_56%,rgba(251,244,230,0.25)_74%,rgba(251,244,230,0.04)_100%)] lg:block" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_82%_22%,rgba(235,200,91,0.28),transparent_36%),linear-gradient(135deg,#FFFFFF_0%,#F8ECD9_52%,#F2DFC3_100%)] lg:hidden" />
        <div className="bg-warm-pattern absolute inset-0 z-0 opacity-[0.18]" aria-hidden="true" />
        <img
          src={siteConfig.image.heroPortrait}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 right-[-22%] z-0 h-[54%] w-[86%] object-cover object-[center_16%] opacity-[0.16] sm:hidden"
          loading="eager"
          decoding="async"
        />
        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-9 lg:min-h-[calc(100svh-174px)] lg:grid-cols-[minmax(0,0.7fr)_minmax(0,0.3fr)] xl:grid-cols-[minmax(0,0.76fr)_minmax(0,0.24fr)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="min-w-0"
          >
            <motion.div variants={fadeUp} className="hidden flex-wrap items-center gap-2.5 sm:flex">
              <span className="rounded-full bg-[#D4AF37] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(212,175,55,0.22)]">
                Emotional Wellbeing
              </span>
              <span className="inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#3D2B1F]/8 bg-white/84 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#3D2B1F] shadow-[0_10px_25px_rgba(61,43,31,0.08)]">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF6F0] text-[#3D2B1F]">
                  <span className="absolute h-4 w-4 rounded-full border border-[#25D366]/60 opacity-75 [animation:ping_1.7s_cubic-bezier(0,0,0.2,1)_infinite]" />
                  <Globe2 className="relative h-3.5 w-3.5" />
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  Pune, Maharashtra
                </span>
                <span className="h-1 w-1 rounded-full bg-[#3D2B1F]/45" />
                <span className="inline-flex items-center gap-1.5 text-[#128C4A]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                  Online Worldwide
                </span>
              </span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex max-w-full flex-wrap items-center gap-2 sm:hidden"
            >
              <span className="rounded-full bg-[#D4AF37] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_10px_24px_rgba(212,175,55,0.2)]">
                Emotional Wellbeing
              </span>
              <span className="inline-flex min-w-0 items-center gap-1.5 rounded-full border border-[#3D2B1F]/8 bg-white/86 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#3D2B1F] shadow-sm">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Pune · Online
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 max-w-[760px] font-serif text-[2.4rem] font-bold leading-[1.05] text-[#1A1A1A] sm:text-[3.2rem] lg:mt-7 lg:max-w-[930px] lg:text-[3.4rem] xl:max-w-[1060px] xl:text-[3.8rem] 2xl:text-[4.2rem]"
            >
              Anxiety and childhood trauma support with Omkar Pawar
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-6 overflow-hidden rounded-[24px] border border-[#1A1A1A]/8 bg-white/78 p-2 shadow-[0_18px_55px_rgba(140,106,68,0.18)] lg:hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#FAF6F0]">
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
              className="mt-5 max-w-2xl text-base leading-8 text-[#1A1A1A] md:text-lg"
            >
              Online sessions to help you understand what is troubling you, feel calmer, and choose the right next step.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                type="button"
                onClick={() => openLeadWizard()}
                size="lg"
                className="min-h-14 font-extrabold tracking-[0.08em] uppercase text-xs rounded-full shadow-[0_14px_34px_rgba(88,62,34,0.11)] px-8"
              >
                Book a Clarity Call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="min-h-14 font-extrabold tracking-[0.08em] uppercase text-xs rounded-full border border-[#3D2B1F]/18 bg-white/92 hover:border-[#3D2B1F]/38 text-[#1A1A1A] px-8"
              >
                <a
                  href={buildWhatsAppUrl("Hi Omkar, I would like to book a clarity call with you.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#128C4A]" />
                  Message on WhatsApp
                </a>
              </Button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-xs font-semibold text-gray-500 tracking-wide flex flex-wrap items-center gap-x-2 gap-y-1"
            >
              <span>7+ years experience</span>
              <span className="text-gray-300">&middot;</span>
              <span>2000+ 1:1 sessions</span>
              <span className="text-gray-300">&middot;</span>
              <span>English, Hindi, Marathi</span>
              <span className="text-gray-300">&middot;</span>
              <span>Online worldwide</span>
            </motion.p>
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
          className="mx-auto mt-12 grid max-w-[1400px] gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {heroStats.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <MetricCard label={stat.label} value={stat.value} icon={heroStatIcons[index]} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. PROBLEMS SECTION */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <motion.p variants={fadeUp} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#3D2B1F]">
              What Clients Usually Carry
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
              The Invisible Battles
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-8 text-[#1A1A1A]">
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

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[24px] border border-[#1A1A1A]/8 bg-white/82 p-3 shadow-[0_22px_70px_rgba(140,106,68,0.12)] backdrop-blur">
              <img
                src={siteConfig.image.servicesPortrait}
                alt="Omkar Pawar standing calmly outdoors"
                className="aspect-[16/7] w-full rounded-md object-cover object-[center_38%]"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="rounded-[24px] border border-[#1A1A1A]/8 bg-white/82 p-3 shadow-[0_22px_70px_rgba(140,106,68,0.12)] backdrop-blur">
              <Accordion type="single" defaultValue="pain-0" collapsible>
                {painPoints.map((item, index) => (
                  <div key={item.title}>
                    <AccordionItem
                      value={`pain-${index}`}
                      className="rounded-md border-b-0 data-[state=open]:bg-[#FAF6F0]"
                    >
                      <AccordionTrigger className="px-4 py-5 hover:text-[#1A1A1A] md:px-5">
                        <span className="flex items-center gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[24px] bg-[#FAF6F0] text-[#3D2B1F] shadow-sm">
                            {item.icon}
                          </span>
                          <span>
                            <span className="block font-serif text-2xl font-semibold leading-tight text-[#1A1A1A]">
                              {item.title}
                            </span>
                            <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#3D2B1F]">
                              Pattern 0{index + 1}
                            </span>
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 text-base leading-8 md:px-5">
                        {item.desc}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS SECTION */}
      <section className="border-y border-[#1A1A1A]/8 bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20 2xl:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-start"
        >
          <motion.div variants={fadeUp} className="order-2">
            <div className="relative overflow-hidden rounded-[24px] border border-[#1A1A1A]/8 bg-[#FAF6F0] p-3 shadow-[0_22px_70px_rgba(140,106,68,0.14)]">
              <img
                src={siteConfig.image.healingHorizontal}
                alt="Omkar Pawar in a grounded outdoor setting"
                className="aspect-[5/4] w-full rounded-md object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-md border border-white/60 bg-[#FFFFFF]/92 p-4 shadow-[0_16px_40px_rgba(42,42,42,0.14)] backdrop-blur">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#3D2B1F]">
                  Surface To Root
                </p>
                <div className="mt-3 flex items-center gap-3">
                  {["Signal", "Pattern", "Healing"].map((item, index) => (
                    <div key={item} className="flex min-w-0 flex-1 items-center gap-2">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#FAF6F0] font-serif text-sm font-semibold text-[#3D2B1F]">
                        {index + 1}
                      </span>
                      <span className="truncate text-xs font-extrabold text-[#1A1A1A]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="order-1">
            <p className="mb-4 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#3D2B1F]">
              The Freedom Innerwellbeing Approach
            </p>
            <h2 className="max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
              "For Every Surface-Level Behavior, There Is A{" "}
              <span className="italic text-[#3D2B1F]">Deep-Rooted Reason.</span> We Do Not Just Cope.
              We Heal From The Root."
            </h2>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {approachPrinciples.map((item) => (
                <div
                  key={item.step}
                  className="group rounded-[24px] border border-[#1A1A1A]/8 bg-[#FAF6F0] p-5 shadow-[0_14px_38px_rgba(88,62,34,0.07)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFFFFF] hover:shadow-[0_20px_55px_rgba(140,106,68,0.14)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-serif text-3xl font-semibold text-[#3D2B1F]">{item.step}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-[#3D2B1F] shadow-sm">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#1A1A1A]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#1A1A1A]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. SUPPORT OPTIONS SECTION */}
      <SectionShell tone="white" className="border-b border-[#1A1A1A]/8">
        <Reveal>
          <SectionIntro
            align="center"
            eyebrow="Session Paths"
            title="Support Options"
            body="Choose support based on what you are carrying right now. The first step is designed to be clear and private."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-[1200px] mx-auto">
          {supportPaths.map((path, index) => (
            <Reveal key={path.title} delay={index * 0.05}>
              <FeatureCard
                icon={path.icon}
                kicker={path.detail}
                title={path.title}
                body={path.body}
                actionLabel="Check Fit"
                onAction={() => openLeadWizard()}
                className="min-h-[280px]"
              />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      {/* 5. ABOUT/CREDENTIALS SECTION */}
      <SectionShell className="border-b border-[#1A1A1A]/8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start max-w-[1400px] mx-auto">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                eyebrow="The Practitioner"
                title="About Omkar Pawar"
                body="An eclectic approach combining clinical training, psychology, and childhood trauma insights to facilitate steady mental and emotional wellbeing."
              />
              <div className="mt-8">
                <Button asChild variant="ghost" size="md" className="px-0">
                  <Link to="/about">
                    View Training & Full Story
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-8 grid gap-4 p-5 rounded-[24px] border border-[#1A1A1A]/8 bg-white/78">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#1A1A1A]">
                  <Globe2 className="h-5 w-5 text-[#3D2B1F]" />
                  Languages: English · Hindi · Marathi
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-[#1A1A1A]">
                  <MapPin className="h-5 w-5 text-[#3D2B1F]" />
                  Pune, Maharashtra &middot; Online Worldwide
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {homeCredentials.map((cred, index) => (
                <Reveal key={cred.title} delay={index * 0.04}>
                  <Card className="p-6 h-full flex flex-col justify-between border-[#1A1A1A]/8 shadow-sm">
                    <div>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[24px] bg-[#FAF6F0] text-[#3D2B1F] mb-4 shadow-sm">
                        {cred.icon}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-[#1A1A1A]">{cred.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{cred.desc}</p>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
            <div className="overflow-hidden rounded-[24px] border border-[#1A1A1A]/8 bg-white p-3 shadow-md">
              <img
                src={siteConfig.image.homeFormAside}
                alt="Omkar Pawar reflective portrait"
                className="aspect-[16/9] w-full rounded-md object-cover object-[center_22%]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </SectionShell>

      {/* 6. CLIENT EXPERIENCES SECTION */}
      <SectionShell tone="white" className="border-b border-[#1A1A1A]/8">
        <Reveal>
          <SectionIntro
            align="center"
            eyebrow="Client Experiences"
            title="Experiences Of Healing And Understanding"
            body="Read reflections from people who chose to address childhood patterns and find a calmer way forward."
          />
        </Reveal>
        <div className="mt-10 max-w-[1200px] mx-auto">
          <StoryCarousel stories={stories} />
        </div>
      </SectionShell>

      {/* 7. FAQ SECTION */}
      <SectionShell className="border-b border-[#1A1A1A]/8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start max-w-[1400px] mx-auto">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[24px] bg-[#FAF6F0] text-[#3D2B1F] shadow-sm mb-6">
                <HelpCircle className="h-6 w-6" />
              </span>
              <SectionIntro
                eyebrow="FAQ"
                title="Frequently Asked Questions"
                body="Clear answers for people considering a clarity session, online support, or childhood trauma work."
                titleClassName="text-4xl md:text-5xl"
              />
              <div className="mt-8">
                <Button asChild variant="ghost" size="md" className="px-0">
                  <Link to="/faq">
                    View All FAQs
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Accordion
              type="single"
              defaultValue={faqItems[0].question}
              collapsible
              className="rounded-[24px] border border-[#1A1A1A]/8 bg-white/92 px-5 shadow-[0_22px_70px_rgba(140,106,68,0.13)] md:px-7"
            >
              {faqItems.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger className="font-serif text-xl md:text-2xl text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </SectionShell>

      {/* 8. FINAL CTA SECTION */}
      <section className="px-5 py-20 text-center sm:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#3D2B1F]/12 bg-white shadow-[0_18px_45px_rgba(140,106,68,0.13)]"
          >
            <span className="absolute inset-2 rounded-full border border-[#D4AF37]/50" />
            <span className="absolute h-10 w-10 rounded-full bg-[#FAF6F0]" />
            <Leaf className="relative h-5 w-5 text-[#3D2B1F]" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl font-semibold leading-tight text-[#1A1A1A] md:text-5xl">
            Ready To Stop Surviving And Start{" "}
            <span className="italic text-[#3D2B1F]">Living?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#1A1A1A]">
            Start with a clarity call, send an enquiry, or message directly on WhatsApp and
            take the first honest step toward steadier emotional wellbeing.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" onClick={() => openLeadWizard()} size="lg">
              Book a Clarity Call
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href={buildWhatsAppUrl("Hi Omkar, I would like to book a clarity call with you.")}
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
