import { Quote, Star } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import StoryCarousel, { type StorySlide } from "../components/StoryCarousel";
import { Button } from "../components/ui/button";
import { Reveal, SectionIntro, SectionShell } from "../components/ui/premium";
import { wizardContent } from "../lib/omkar-content";

export const stories: StorySlide[] = [
  {
    category: "Anxiety Support",
    quote:
      "I spent years overthinking small details and feeling anxious about work. Working with Omkar helped me understand the roots of that pressure and find a calmer daily rhythm.",
    author: "S., Tech Executive",
    rating: 5,
  },
  {
    category: "Emotional Support",
    quote:
      "After a difficult separation, I was carrying a lot of self-doubt. The inner child sessions helped me process those patterns. I feel much more grounded and secure in myself now.",
    author: "P., Entrepreneur",
    rating: 5,
  },
  {
    category: "Relationship Patterns",
    quote:
      "I noticed a pattern of emotional reactivity in my relationships. The sessions helped me trace these back to early attachment triggers. I can now communicate much more calmly with my partner.",
    author: "M., Creative Director",
    rating: 5,
  },
  {
    category: "Anxiety & Confidence",
    quote:
      "On the outside, things looked fine, but internally I struggled with constant self-doubt and imposter feelings. Through NLP and structured sessions, I learned to manage that inner critic and lead my team with steadier confidence.",
    author: "R., VP of Sales",
    rating: 5,
  },
  {
    category: "Inner Child Healing",
    quote:
      "I hadn't connected my current stress response to early childhood expectations. Addressing those roots has made a significant difference in how I handle daily pressure.",
    author: "A., Doctor",
    rating: 5,
  },
  {
    category: "Emotional Regulation",
    quote:
      "I used to feel completely swept away by emotional triggers. The sessions gave me the space to pause, regulate, and choose how to respond rather than just reacting.",
    author: "K., Founder",
    rating: 5,
  },
];

export default function SuccessStories() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <Reveal immediate>
          <SectionIntro
            align="center"
            className="max-w-4xl"
            eyebrow="Client Experiences"
            title={
              <>
                Experiences Of <span className="italic text-[#3D2B1F]">Healing</span> And Understanding
              </>
            }
            body="Real reflections from people who worked with Omkar to understand their anxiety, address childhood patterns, and find a calmer way forward."
            titleClassName="text-5xl md:text-6xl lg:text-7xl"
          />
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-2xl justify-center gap-1 text-[#3D2B1F]" aria-label="Five star client stories">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-current" />
          ))}
        </div>
      </SectionShell>

      <SectionShell tone="white" className="border-y border-[#1A1A1A]/8">
        <Reveal>
          <StoryCarousel stories={stories} />
        </Reveal>
      </SectionShell>

      <SectionShell>
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-[24px] border border-[#1A1A1A]/8 bg-[#1A1A1A] p-8 text-center text-white shadow-[0_24px_90px_rgba(0,0,0,0.2)] md:p-14">
            <Quote className="mx-auto h-10 w-10 text-[#D4AF37]/70" />
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Ready to take a step toward <span className="italic text-[#D4AF37]">steadier wellbeing?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74">
              Start with a quick clarity check to see which support path fits. Your check is private and has no pressure to commit.
            </p>
            <Button type="button" onClick={() => openLeadWizard()} variant="inverted" size="lg" className="mt-8">
              {wizardContent.triggerLabel}
            </Button>
          </div>
        </Reveal>
      </SectionShell>
    </div>
  );
}




