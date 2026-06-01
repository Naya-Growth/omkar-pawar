import { motion } from 'motion/react';

import { useLeadWizard } from '../components/LeadWizardProvider';
import StoryCarousel, { type StorySlide } from '../components/StoryCarousel';
import { Button } from '../components/ui/button';
import { wizardContent } from '../lib/omkar-content';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function SuccessStories() {
  const { openLeadWizard } = useLeadWizard();
  const stories: StorySlide[] = [
    {
      category: "Anxiety Reduction",
      quote: "I was constantly living in my head, overthinking every small detail at work and home. After the 28-day program, I finally know what peace feels like. I can actually switch off.",
      author: "S., Tech Executive",
      rating: 5
    },
    {
      category: "Emotional Breakthrough",
      quote: "Post-divorce, I was battling severe self-doubt and anger. Omkar helped me heal my inner child and reframe my entire perspective. I am now happily married again and living a life I didn't think was possible.",
      author: "P., Entrepreneur",
      rating: 5
    },
    {
      category: "Relationship Improvement",
      quote: "I kept repeating the same toxic cycles in my relationships. The 1:1 sessions helped me understand my attachment wounds. For the first time, I feel secure in my relationship.",
      author: "M., Creative Director",
      rating: 5
    },
    {
      category: "Anxiety & Confidence",
      quote: "I looked successful on the outside but felt like an imposter inside. Omkar's eclectic approach using NLP and hypnotherapy completely shifted my self-image. I lead my team with genuine confidence now.",
      author: "R., VP of Sales",
      rating: 5
    },
    {
      category: "Inner Child Healing",
      quote: "I didn't realize how much my childhood was dictating my adult reactions. Healing those deep-rooted wounds was the most liberating experience of my life.",
      author: "A., Doctor",
      rating: 5
    },
    {
      category: "Emotional Stability",
      quote: "I used to react to everything. Now, I respond. The emotional agency I've gained through this work is priceless. Highly recommend Omkar to anyone feeling stuck.",
      author: "K., Founder",
      rating: 5
    }
  ];

  return (
    <div className="overflow-x-hidden bg-[#FBF4E6] text-[#2A2A2A]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-10 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#8C6A44] font-bold mb-4 block">
            Client Transformations
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Stories Of <span className="italic text-[#8C6A44]">Healing</span> <br />And Mastery
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-gray-600">
            Real experiences from high-performers who chose to break free from their invisible battles and reclaim their peace.
          </motion.p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-6 md:px-12 max-w-[1400px] mx-auto">
        <StoryCarousel stories={stories} />
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto bg-[#2A2A2A] text-white p-16 md:p-24 rounded-lg"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Ready To Write Your Own <span className="italic text-[#8C6A44]">Success Story?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 mb-12 text-lg font-light max-w-xl mx-auto">
            Take the first step towards emotional freedom. Start with a clarity session to see if we're a fit.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button
              type="button"
              onClick={() => openLeadWizard()}
              variant="inverted"
              size="lg"
            >
              {wizardContent.triggerLabel}
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
