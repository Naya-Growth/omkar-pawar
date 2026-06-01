import { Quote, Star } from "lucide-react";

import { useLeadWizard } from "../components/LeadWizardProvider";
import StoryCarousel, { type StorySlide } from "../components/StoryCarousel";
import { Button } from "../components/ui/button";
import { Reveal, SectionIntro, SectionShell } from "../components/ui/premium";
import { wizardContent } from "../lib/omkar-content";

const stories: StorySlide[] = [
  {
    category: "Anxiety Reduction",
    quote:
      "I was constantly living in my head, overthinking every small detail at work and home. After the 28-day program, I finally know what peace feels like. I can actually switch off.",
    author: "S., Tech Executive",
    rating: 5,
  },
  {
    category: "Emotional Breakthrough",
    quote:
      "Post-divorce, I was battling severe self-doubt and anger. Omkar helped me heal my inner child and reframe my entire perspective. I am now happily married again and living a life I didn't think was possible.",
    author: "P., Entrepreneur",
    rating: 5,
  },
  {
    category: "Relationship Improvement",
    quote:
      "I kept repeating the same toxic cycles in my relationships. The 1:1 sessions helped me understand my attachment wounds. For the first time, I feel secure in my relationship.",
    author: "M., Creative Director",
    rating: 5,
  },
  {
    category: "Anxiety & Confidence",
    quote:
      "I looked successful on the outside but felt like an imposter inside. Omkar's eclectic approach using NLP and hypnotherapy completely shifted my self-image. I lead my team with genuine confidence now.",
    author: "R., VP of Sales",
    rating: 5,
  },
  {
    category: "Inner Child Healing",
    quote:
      "I didn't realize how much my childhood was dictating my adult reactions. Healing those deep-rooted wounds was the most liberating experience of my life.",
    author: "A., Doctor",
    rating: 5,
  },
  {
    category: "Emotional Stability",
    quote:
      "I used to react to everything. Now, I respond. The emotional agency I've gained through this work is priceless. Highly recommend Omkar to anyone feeling stuck.",
    author: "K., Founder",
    rating: 5,
  },
];

export default function SuccessStories() {
  const { openLeadWizard } = useLeadWizard();

  return (
    <div className="overflow-x-hidden bg-[#FBF4E6] text-[#1A1A1A]">
      <SectionShell className="bg-hero-gradient pt-12 lg:pt-16">
        <Reveal immediate>
          <SectionIntro
            align="center"
            className="max-w-4xl"
            eyebrow="Client Transformations"
            title={
              <>
                Stories Of <span className="italic text-[#8C6A44]">Healing</span> And Mastery
              </>
            }
            body="Real experiences from high-performers who chose to break free from invisible battles and reclaim steadier emotional ground."
            titleClassName="text-5xl md:text-6xl lg:text-7xl"
          />
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-2xl justify-center gap-1 text-[#8C6A44]" aria-label="Five star client stories">
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
          <div className="mx-auto max-w-4xl rounded-lg border border-[#1A1A1A]/8 bg-[#252423] p-8 text-center text-white shadow-[0_24px_90px_rgba(0,0,0,0.2)] md:p-14">
            <Quote className="mx-auto h-10 w-10 text-[#EFD95E]/70" />
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Ready To Write Your Own <span className="italic text-[#EFD95E]">Success Story?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/74">
              Take the first step toward emotional freedom. Start with the quick clarity check to see
              which support path fits.
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
