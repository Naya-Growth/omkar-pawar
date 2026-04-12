import { motion } from 'motion/react';
import { Brain, BadgeCheck, GraduationCap, Baby, Zap, Quote } from 'lucide-react';

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

export default function About() {
  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold mb-6 block">
            The Origin Story
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-12">
            From Chasing Perfection <br />to <span className="italic text-[#8C7A6B]">Facilitating Peace.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-[#8C7A6B]/10"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0uiy4Zba779LsLJxKHWtnicw9dRZP2keh2XOFyys2EGKUoFvXzMjr4XHPvv3BN5EbilT0fYnWaUN8t67MIMI5MPMbyxAw9cWvTjBc-K7m_4ZtxWjybc8NX8Jw3b0t0nTrRbiPo-DbYRAoC902Jm0gCCwjcMuUaLpHSwNnroP2ZG9cGwLuDmJRtzlTfx5JgXQRUBitzR2YkJ3yavtKvpeA9stzC8bwuHLdYm8RrVhNWQp00S9eJ4nySdyNbmRWayDvHaI0jJYxuDJ"
              alt="Omkar Pawar"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* The Story Sections */}
      <section className="py-20 px-6 md:px-12 max-w-3xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-20"
        >
          {/* Chapter 1 */}
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-3xl text-[#8C7A6B] mb-6">01. The Burden of Perfection</h3>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                I was born in a small village called Whatambare in Solapur, Maharashtra. From the outside, my childhood looked good. My parents were busy, and there was no overt pressure from them. But internally, I was highly vulnerable—absorbing the unsaid pressures of family and society.
              </p>
              <p>
                I lived entirely in my own head, consumed by the need to be perfect. Everything I did had to be the best. This led to a life lived under constant pressure—working purely for results, fearing judgment, and setting extraordinary goals not out of passion, but for the sake of appearing flawless.
              </p>
            </div>
          </motion.div>

          {/* Chapter 2 */}
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-3xl text-[#8C7A6B] mb-6">02. The Collapse & The Calling</h3>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                My breaking point came when I failed my competitive exams. I had a background in Mechanical Engineering, working in a small-scale industry, but I felt completely lost and unsatisfied. I was struggling to settle down and find my place in the world.
              </p>
              <p>
                Since I was 12, I had been reading books by Swami Vivekananda, particularly <em>Rajyoga</em>. I knew the importance of working on one's own mind. When I failed those exams, I realized my true intention was to serve society. Why not choose a field that actually interested me? That's when psychology entered my life.
              </p>
            </div>
          </motion.div>

          {/* Chapter 3 */}
          <motion.div variants={fadeUp}>
            <h3 className="font-serif text-3xl text-[#8C7A6B] mb-6">03. The Transformation</h3>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                I enrolled in a Master's program. It wasn't easy—transitioning from Mechanical Engineering to getting a recognized degree in Psychology was a struggle. I battled fears of starting late and not being "good enough" to help others.
              </p>
              <p>
                But I poured myself into the work. I did pro-bono sessions, worked with suicide survivors, and visited hospitals. I realized that for every surface-level behavior, there is a deep-rooted reason. Today, seeing a client transform—like a recent client who came to me post-divorce, battling severe self-doubt and anger, and is now living happily—is what makes this entire journey worth it.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-[#8C7A6B] text-white px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <Quote className="w-12 h-12 text-white/30" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl leading-tight mb-8">
            "Every behavior has a positive intention. My job is to help you understand the root of that intention, and allow you to heal and grow."
          </motion.h2>
        </motion.div>
      </section>

      {/* Credentials Bento Grid */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold mb-4 block">
            Expertise
          </motion.span>
          <motion.h3 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-[#2A2A2A]">
            Professional Foundation
          </motion.h3>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Registered Psychologist",
              desc: "Double Master's in I/O Psychology & Clinical Psychology"
            },
            {
              icon: <BadgeCheck className="w-8 h-8" />,
              title: "Cognitive Hypnotherapist",
              desc: "Diploma in Cognitive Hypnotic Psychotherapy"
            },
            {
              icon: <GraduationCap className="w-8 h-8" />,
              title: "NLP Master Coach",
              desc: "Neuro-Linguistic Programming Master Practitioner"
            },
            {
              icon: <Baby className="w-8 h-8" />,
              title: "Inner Child Healer",
              desc: "Certified Inner Child Healing Practitioner"
            }
          ].map((cred, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-xl transition-shadow duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#8C7A6B] mb-6">
                {cred.icon}
              </div>
              <h4 className="font-bold text-[#2A2A2A] text-lg mb-3">{cred.title}</h4>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{cred.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
