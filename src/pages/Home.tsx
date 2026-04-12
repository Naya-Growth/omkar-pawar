import { motion } from 'motion/react';
import { ArrowRight, Sparkles, BrainCircuit, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      {/* Hero Section - Editorial & Airy */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 z-10"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-[#8C7A6B]"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold">
                Omkar Pawar • Freedom Innerwellbeing
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[1.05] mb-8">
              Master Your <br />
              <span className="italic text-[#8C7A6B]">Emotions.</span><br />
              Transform Life.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl font-light leading-relaxed max-w-lg text-gray-600 mb-12">
              Helping high-performers break free from anxiety, overthinking, and emotional patterns rooted in the past.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className="bg-[#2A2A2A] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-[#8C7A6B] transition-all duration-300 flex items-center gap-3 group">
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] md:aspect-[4/5] rounded-t-full rounded-b-[3rem] overflow-hidden relative shadow-2xl shadow-[#8C7A6B]/10">
              <img 
                src="https://lh3.googleusercontent.com/aida/ADBb0uiy4Zba779LsLJxKHWtnicw9dRZP2keh2XOFyys2EGKUoFvXzMjr4XHPvv3BN5EbilT0fYnWaUN8t67MIMI5MPMbyxAw9cWvTjBc-K7m_4ZtxWjybc8NX8Jw3b0t0nTrRbiPo-DbYRAoC902Jm0gCCwjcMuUaLpHSwNnroP2ZG9cGwLuDmJRtzlTfx5JgXQRUBitzR2YkJ3yavtKvpeA9stzC8bwuHLdYm8RrVhNWQp00S9eJ4nySdyNbmRWayDvHaI0jJYxuDJ" 
                alt="Omkar Pawar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6]/40 to-transparent mix-blend-overlay"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -left-8 md:-left-16 bottom-12 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[260px] border border-white/20"
            >
              <p className="font-serif italic text-lg text-[#2A2A2A] mb-2 leading-snug">
                "Be gentle with your thoughts and emotions."
              </p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#8C7A6B] font-bold">
                — Omkar Pawar
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Core Philosophy - Minimalist Quote */}
      <section className="py-32 bg-white">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <motion.div variants={fadeUp} className="w-12 h-12 mx-auto bg-[#FAF9F6] rounded-full flex items-center justify-center mb-8">
            <Sparkles className="w-5 h-5 text-[#8C7A6B]" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl leading-tight text-[#2A2A2A] mb-8">
            "For every surface-level behavior, there is a <span className="italic text-[#8C7A6B]">deep-rooted reason.</span> We don't just cope; we heal from the root."
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 font-light tracking-wide uppercase text-xs">
            The Freedom Innerwellbeing Approach
          </motion.p>
        </motion.div>
      </section>

      {/* The Invisible Struggles - Clean List Layout */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5"
          >
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-6">The Invisible Battles</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 font-light leading-relaxed text-lg mb-8">
              You appear successful to the world, but internally you are fighting battles no one sees. The constant pressure to be perfect, the fear of judgment, the unsaid expectations. You are not broken; you are just carrying unhealed patterns.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#8C7A6B] font-bold text-sm uppercase tracking-widest hover:text-[#2A2A2A] transition-colors">
                Read My Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 grid gap-8"
          >
            {[
              {
                title: "Anxiety & Overthinking",
                desc: "Constant mental chatter, self-doubt, and the inability to switch off. We work to break these loops and build emotional control.",
                icon: <BrainCircuit className="w-6 h-6" />
              },
              {
                title: "Inner Child Wounds",
                desc: "Childhood trauma and unresolved past experiences that manifest as emotional triggers, sudden outbursts, and self-sabotage today.",
                icon: <Sparkles className="w-6 h-6" />
              },
              {
                title: "Relationship Patterns",
                desc: "Difficulty connecting deeply, fear of vulnerability, or repeating toxic cycles. We build self-awareness for secure, peaceful relationships.",
                icon: <HeartHandshake className="w-6 h-6" />
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex gap-6 p-8 rounded-3xl bg-white border border-black/5 hover:shadow-lg transition-shadow duration-500">
                <div className="w-14 h-14 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#8C7A6B] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Eclectic Approach Section */}
      <section className="py-32 bg-[#2A2A2A] text-white px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold mb-6 block">
              Clinical Expertise
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-6">An Eclectic Approach to Healing</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 font-light text-lg">
              Every individual is unique. I integrate multiple proven modalities to find the exact root cause of your distress and facilitate profound, lasting change.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "Inner Child Healing",
              "Cognitive Hypnotic Psychotherapy",
              "Neuro-Linguistic Programming (NLP)",
              "Mindfulness-Based CBT"
            ].map((modality, i) => (
              <motion.div key={i} variants={fadeUp} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-3xl font-serif text-[#8C7A6B] mb-6">0{i + 1}</div>
                <h4 className="text-lg font-medium tracking-wide">{modality}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-6xl mb-8 leading-tight text-[#2A2A2A]">
            Ready to stop surviving and start <span className="italic text-[#8C7A6B]">living?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 mb-12 text-lg font-light max-w-xl mx-auto">
            Book a free discovery call to discuss your struggles and see how we can work together to build a peaceful, powerful life.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-[#2A2A2A] text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#8C7A6B] transition-colors">
              Book a Free Discovery Call
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
