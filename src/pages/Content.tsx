import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Instagram, Linkedin, PlayCircle, Video, Youtube } from "lucide-react";

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
import { cn } from "../lib/utils";

const insights = [
  {
    category: "Anxiety",
    title: "The Hidden Cost Of High-Functioning Anxiety",
    type: "Article",
    icon: BookOpen,
  },
  {
    category: "Emotional Mastery",
    title: "Why You Cannot Think Your Way Out Of A Trigger",
    type: "Video",
    icon: Video,
  },
  {
    category: "Inner Child Healing",
    title: "Re-Parenting: The Key To Adult Relationships",
    type: "Article",
    icon: BookOpen,
  },
  {
    category: "Mindfulness",
    title: "A 5-Minute Somatic Reset For Overwhelm",
    type: "Reel",
    icon: PlayCircle,
  },
];

const filters = ["All", "Anxiety", "Emotional Mastery", "Inner Child Healing", "Mindfulness"];

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
  const [activeFilter, setActiveFilter] = useState("All");
  const { openLeadWizard } = useLeadWizard();

  const filteredInsights = useMemo(() => {
    if (activeFilter === "All") {
      return insights;
    }

    return insights.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <Reveal immediate>
          <SectionIntro
            align="center"
            className="max-w-4xl"
            eyebrow="Content Library"
            title={
              <>
                Insights For Your <span className="italic text-[#3D2B1F]">Emotional Growth</span>
              </>
            }
            body="Articles, videos, and practices designed to help you understand your mind, regulate your nervous system, and reconnect with emotional steadiness."
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
                actionLabel="Open"
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
                eyebrow="Browse Topics"
                title="Choose The Theme That Feels Closest."
                body="The content stays image-light on purpose here. The focus is on readable topics, clear categories, and direct routes into Omkar's active channels."
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] transition-all",
                      activeFilter === filter
                        ? "bg-[#3D2B1F] text-white shadow-[0_14px_32px_rgba(61,43,31,0.22)]"
                        : "border border-[#3D2B1F]/8 bg-white text-[#1A1A1A] hover:border-[#3D2B1F]/35 hover:text-[#3D2B1F]",
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {filteredInsights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.05}>
                    <PremiumCard className="group h-full p-7">
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#FAF6F0] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#3D2B1F]">
                          <Icon className="h-4 w-4" />
                          {item.type}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#3D2B1F]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <Eyebrow>{item.category}</Eyebrow>
                      <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#1A1A1A] transition-colors group-hover:text-[#3D2B1F]">
                        {item.title}
                      </h3>
                      <p className="mt-5 text-sm leading-7 text-[#1A1A1A]">
                        Use this as a starting point, then continue on Omkar's active social channels
                        for the full reflection or practice.
                      </p>
                    </PremiumCard>
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




