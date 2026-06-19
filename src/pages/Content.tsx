import { ArrowRight, Instagram, Linkedin, PlayCircle, Video, Youtube } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import { Button } from "../components/ui/button";
import {
  Eyebrow,
  FeatureCard,
  PremiumCard,
  Reveal,
  SectionIntro,
  SectionShell,
} from "../components/ui/premium";
import { wizardContent } from "../lib/omkar-content";
import { siteConfig } from "../lib/site-config";

const themes = [
  {
    category: "Anxiety & Overthinking",
    title: "Practical guidance for managing mental loops, overthinking, and nervous system regulation.",
    channel: "Instagram",
    href: siteConfig.instagramUrl,
    icon: PlayCircle,
  },
  {
    category: "Childhood Trauma & Inner Child",
    title: "Deep-root reflections on tracing adult stress responses to childhood expectations and triggers.",
    channel: "LinkedIn",
    href: siteConfig.linkedinUrl,
    icon: Linkedin,
  },
  {
    category: "Emotional Regulation",
    title: "Somatic practices and psychological concepts to help you shift from reactive to calm responses.",
    channel: "YouTube",
    href: siteConfig.youtubeUrl,
    icon: Youtube,
  },
  {
    category: "Mindfulness & Somatic Resets",
    title: "Quick, actionable check-ins and reels to ground your body and clear your mind during high stress.",
    channel: "Instagram",
    href: siteConfig.instagramUrl,
    icon: Video,
  },
];

const socialChannels = [
  {
    label: "Instagram",
    href: siteConfig.instagramUrl,
    icon: <Instagram className="h-4 w-4" />,
    body: "Short reflections, reels, and practical emotional-awareness prompts.",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedinUrl,
    icon: <Linkedin className="h-4 w-4" />,
    body: "Longer professional reflections on emotional mastery and inner work.",
  },
  {
    label: "YouTube",
    href: siteConfig.youtubeUrl,
    icon: <Youtube className="h-4 w-4" />,
    body: "Video-based insights for anxiety, emotional regulation, and healing patterns.",
  },
];

export default function Content() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <Reveal immediate>
          <SectionIntro
            align="center"
            className="max-w-4xl"
            eyebrow="Follow Omkar's Content"
            title={
              <>
                Follow Omkar's <span className="italic text-[#3D2B1F]">Content</span>
              </>
            }
            body="Read regular insights, reflections, and video guides on anxiety, childhood trauma, and emotional regulation directly on Omkar's active channels."
            titleClassName="text-5xl md:text-6xl lg:text-7xl"
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {socialChannels.map((channel, index) => (
            <Reveal key={channel.label} immediate delay={index * 0.05}>
              <FeatureCard
                icon={channel.icon}
                title={channel.label}
                body={channel.body}
                href={channel.href}
                actionLabel="Open Channel"
                className="min-h-[260px] rounded-[32px] shadow-[0_20px_50px_rgba(61,43,31,0.05)]"
              />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="white" className="border-y border-[#3D2B1F]/5">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionIntro
                eyebrow="What Omkar Shares"
                title="Choose The Theme That Feels Closest."
                body="The content stays image-light on purpose here. The focus is on readable topics, clear categories, and direct routes into Omkar's active channels."
              />
            </div>
          </Reveal>

          <div>
            <div className="grid gap-5 md:grid-cols-2">
              {themes.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.category} delay={index * 0.05}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group h-full"
                    >
                      <PremiumCard className="group h-full p-7 transition-all duration-300 hover:shadow-[0_22px_70px_rgba(140,106,68,0.14)] hover:-translate-y-1">
                        <div className="mb-8 flex items-start justify-between gap-4">
                          <span className="inline-flex items-center gap-2 rounded-full bg-[#FAF6F0] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#3D2B1F]">
                            <Icon className="h-4 w-4" />
                            {item.channel}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#3D2B1F]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl font-semibold leading-tight text-[#1A1A1A] transition-colors group-hover:text-[#3D2B1F]">
                          {item.category}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-gray-600">
                          {item.title}
                        </p>
                        <div className="mt-8 border-t border-[#1A1A1A]/8 pt-5 flex items-center justify-between text-xs font-extrabold uppercase tracking-[0.14em] text-[#3D2B1F]">
                          <span>Explore on {item.channel}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </PremiumCard>
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <div className="rounded-[24px] border border-[#1A1A1A]/8 bg-[#1A1A1A] p-6 text-center text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-12">
            <h3 className="mx-auto max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Need Help Finding The Right Support Path?
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74">
              If the content resonates but you want clarity on what to do next, the quick clarity
              check is the fastest way to start without guessing.
            </p>
            <Button type="button" onClick={() => openLeadWizard()} className="mt-8" variant="inverted" size="lg">
              {wizardContent.triggerLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </SectionShell>
    </div>
  );
}




