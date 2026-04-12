import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

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
  const stories = [
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
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold mb-6 block">
            Client Transformations
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            Stories of <span className="italic text-[#8C7A6B]">Healing</span> <br />and Mastery
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-gray-600">
            Real experiences from high-performers who chose to break free from their invisible battles and reclaim their peace.
          </motion.p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-black/5 hover:shadow-xl transition-shadow duration-500 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7A6B] font-bold bg-[#FAF9F6] px-3 py-1 rounded-full">
                  {story.category}
                </span>
                <div className="flex gap-1">
                  {[...Array(story.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#8C7A6B] text-[#8C7A6B]" />
                  ))}
                </div>
              </div>
              <div className="mb-8 flex-grow">
                <Quote className="w-8 h-8 text-[#8C7A6B]/20 mb-4" />
                <p className="text-gray-600 font-light leading-relaxed text-lg italic">
                  "{story.quote}"
                </p>
              </div>
              <div className="pt-6 border-t border-black/5">
                <p className="font-bold text-[#2A2A2A]">{story.author}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto bg-[#2A2A2A] text-white p-16 md:p-24 rounded-[3rem]"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Ready to write your own <span className="italic text-[#8C7A6B]">success story?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 mb-12 text-lg font-light max-w-xl mx-auto">
            Take the first step towards emotional freedom. Book a discovery call to see if we're a fit.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a href="/contact" className="bg-white text-[#2A2A2A] px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#8C7A6B] hover:text-white transition-colors inline-block">
              Apply to Join
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
