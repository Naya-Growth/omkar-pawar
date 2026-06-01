import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "./ui/button";
import { Card } from "./ui/card";

export type StorySlide = {
  category: string;
  quote: string;
  author: string;
  rating: number;
};

export default function StoryCarousel({ stories }: { stories: StorySlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true },
    [Autoplay({ delay: 5200, stopOnInteraction: true })],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    const updateSelected = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    updateSelected();
    emblaApi.on("select", updateSelected);

    return () => {
      emblaApi.off("select", updateSelected);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y gap-4">
          {stories.map((story, index) => (
            <motion.div
              key={`${story.author}-${story.category}`}
              className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_58%] lg:flex-[0_0_36%]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.06, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="flex h-full min-h-[360px] flex-col p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[#FFF7EA] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C6A44]">
                    {story.category}
                  </span>
                  <div className="flex gap-1" aria-label={`${story.rating} star story`}>
                    {[...Array(story.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-4 w-4 fill-[#8C6A44] text-[#8C6A44]"
                      />
                    ))}
                  </div>
                </div>

                <Quote className="mb-5 h-8 w-8 text-[#8C6A44]/30" />
                <p className="flex-1 font-serif text-2xl font-semibold italic leading-snug text-[#1A1A1A]">
                  "{story.quote}"
                </p>
                <p className="mt-8 border-t border-[#1A1A1A]/8 pt-5 text-sm font-bold text-[#1A1A1A]">
                  {story.author}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2">
          {stories.map((story, index) => (
            <button
              key={story.author}
              type="button"
              className={`h-1.5 rounded-full transition-all ${
                selectedIndex === index ? "w-9 bg-[#8C6A44]" : "w-3 bg-[#1A1A1A]/18"
              }`}
              aria-label={`Go to story ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button type="button" variant="secondary" size="icon" onClick={scrollPrev} aria-label="Previous story">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button type="button" variant="secondary" size="icon" onClick={scrollNext} aria-label="Next story">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
