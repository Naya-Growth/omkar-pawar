import { Link } from "react-router-dom";
import { ArrowRight, Baby, BrainCircuit, CalendarDays, Compass, MessageCircle, Sparkles } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { Button } from "../components/ui/button";
import {
  Eyebrow,
  FeatureCard,
  MediaFrame,
  Reveal,
  SectionIntro,
  SectionShell,
  StepCard,
} from "../components/ui/premium";
import { wizardContent } from "../lib/omkar-content";
import { buildWhatsAppUrl, siteConfig } from "../lib/site-config";

const supportPaths = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Quick Clarity Call",
    body: "A short, grounded conversation when you need direction before choosing a deeper support path.",
    detail: "Best when you want to talk once and understand the right next step.",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "1:1 Emotional Healing & Anxiety Reset",
    body: "A personalized online support container for anxiety, emotional overwhelm, confidence, and repeated response patterns.",
    detail: "Best when you want steady personal support and a deeper look at what is repeating.",
  },
  {
    icon: <Baby className="h-6 w-6" />,
    title: "Inner Child Healing Sessions",
    body: "Focused work for old experiences that still shape present triggers, reactions, self-image, and relationships.",
    detail: "Best when past patterns are still affecting your present life.",
  },
  {
    icon: <CalendarDays className="h-6 w-6" />,
    title: "28 Days Anxiety Transformation",
    body: "A structured, time-bound program to break anxiety loops, reduce overwhelm, and build a steadier internal rhythm.",
    detail: "Best when you need step-by-step transformation with clear follow-through.",
  },
];

const processSteps = [
  {
    title: "Guided Enquiry",
    body: "Start with the quick clarity check or send a direct enquiry so the right context is captured properly.",
  },
  {
    title: "Clarity Session",
    body: "A clarity conversation helps map what you are carrying, what keeps repeating, and what support fits.",
  },
  {
    title: "Intentional Support",
    body: "If it is the right fit, the next phase becomes a structured healing container with steady follow-through.",
  },
];

export default function Services() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(360px,0.78fr)] lg:gap-16">
          <Reveal immediate className="max-w-3xl">
            <Eyebrow>Work With Omkar</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              Transformation <span className="italic text-[#3D2B1F]">Pathways</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#1A1A1A] md:text-lg">
              Choose support based on what you are carrying right now. The first step is designed to
              be clear, private, and human before any deeper commitment is discussed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button type="button" onClick={() => openLeadWizard()} size="lg" className="w-full sm:w-auto">
                <span className="hidden sm:inline">Start With The {wizardContent.triggerLabel}</span>
                <span className="sm:hidden">{wizardContent.triggerLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <a
                  href={buildWhatsAppUrl("Hi Omkar, I would like to know which program is right for me.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask On WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal immediate delay={0.08}>
            <MediaFrame
              src={siteConfig.image.servicesPortrait}
              alt="Omkar Pawar portrait for services page"
              aspect="aspect-[4/5]"
              imageClassName="object-[center_16%]"
              priority
              caption={
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Online Worldwide", "Clarity First", "1:1 Support", "Root-Level Work"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#FAF6F0] px-4 py-2 text-center text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#3D2B1F]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              }
            />
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell tone="white" className="border-y border-[#1A1A1A]/8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <Reveal>
            <SectionIntro
              eyebrow="Support Menu"
              title={
                <>
                  Pick The First Door, Not The Whole Future.
                </>
              }
              body="Each path starts with context, consent, and fit. Pricing and format are discussed privately after the need is clear."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[24px] border border-[#1A1A1A]/8 bg-[#FAF6F0] p-5 md:p-6">
              <p className="quote-text font-serif text-2xl font-semibold leading-snug text-[#1A1A1A]">
                "The right support should reduce confusion from the first interaction, not add more
                pressure."
              </p>
              <p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#3D2B1F]">
                Freedom Innerwellbeing
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {supportPaths.map((path, index) => (
            <Reveal key={path.title} delay={index * 0.04}>
              <FeatureCard
                icon={path.icon}
                kicker={path.detail}
                title={path.title}
                body={path.body}
                actionLabel="Check Fit"
                onAction={() => openLeadWizard()}
                className="min-h-[330px]"
              />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="charcoal">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <MediaFrame
              src={siteConfig.image.healingHorizontal}
              alt="Omkar Pawar standing outdoors"
              aspect="aspect-[5/4]"
              imageClassName="object-center"
              className="border-white/10 bg-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.24)]"
            />
          </Reveal>

          <div>
            <Reveal>
              <SectionIntro
                inverse
                eyebrow="The Process"
                title={
                  <>
                    A Calm Path From Unclear Emotion To Clear Next Step.
                  </>
                }
                body="The process is intentionally simple so you do not need to self-diagnose or choose the perfect program before speaking."
              />
            </Reveal>
            <div className="mt-8 grid gap-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <StepCard index={index + 1} title={step.title} body={step.body} inverse />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <div className="rounded-[24px] border border-[#1A1A1A]/8 bg-white/80 p-6 text-center shadow-[0_22px_70px_rgba(140,106,68,0.12)] md:p-12">
            <Sparkles className="mx-auto h-9 w-9 text-[#3D2B1F]" />
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Not Sure Which Path Fits?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#1A1A1A]">
              Start with the quick clarity check. It captures what is bothering you and lets Omkar
              respond with the right next step.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button type="button" onClick={() => openLeadWizard()} size="lg">
                {wizardContent.triggerLabel}
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Send An Enquiry</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </SectionShell>
    </div>
  );
}




