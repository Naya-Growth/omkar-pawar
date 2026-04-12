import { motion } from 'motion/react';
import { Leaf, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export default function Services() {
  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-xl"
          >
            <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold mb-6 block">
              Elevate Your Being
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Work With Me
            </motion.h1>
            <motion.div variants={fadeUp} className="w-16 h-[1px] bg-[#8C7A6B] mb-6"></motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-4xl italic text-[#8C7A6B] mb-8">
              Transformation Pathways
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 text-lg mb-10 font-light leading-relaxed max-w-md">
              A curated selection of premium emotional mastery programs designed to move you from a state of reactive survival to conscious, peaceful creation.
            </motion.p>
            <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-widest text-[#2A2A2A] bg-white px-6 py-3 rounded-full inline-block border border-black/5 shadow-sm">
              Pricing discussed privately upon application
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#8C7A6B]/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCygHCUcWLO9UuDZR912DUlPN_7amg7Z36UXAOWMiMDs9rZzbrgmDdMg-XOy-Ktlec5hD0PVeT22rls-k_Bkp1r78sQFSjn3DmCVmPiVnu5-7zGGiZjFFeiqnSSGNQBtaX_TKq5NppUbbyieZJdoWRf7TfVojOOzGr4Ro-UtWhwYq91mlrpqf3Hh1Z7QRY2ej-aZm4hbRbBEqMMb_EKPuZ8qgvrh49zUCXRYF3A0SWpnKANQuDDpy6hUMgraYZTTOQPFniw_BcNiECt" 
                alt="Omkar Pawar" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* 1:1 Emotional Healing */}
          <motion.div variants={fadeUp} className="bg-white p-12 rounded-[3rem] shadow-sm border border-black/5 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-[#FAF9F6] to-transparent rounded-bl-full opacity-50 transition-transform group-hover:scale-110 duration-700"></div>
            
            <div className="relative z-10 flex-grow">
              <div className="w-14 h-14 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#8C7A6B] mb-8">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mb-6">1:1 Emotional Healing & Anxiety Reset Program</h3>
              <p className="text-gray-500 font-light leading-relaxed mb-8">
                A highly personalized, deep-dive container for high-performers struggling with anxiety and emotional overwhelm. We combine somatic therapy, cognitive reframing, and energetic alignment to reset your nervous system.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                  <div className="w-5 h-5 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#8C7A6B] shrink-0 mt-0.5">✓</div>
                  <span><strong className="text-[#2A2A2A] font-medium">Format:</strong> 1:1 Online (Google Meet)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600 font-light">
                  <div className="w-5 h-5 rounded-full bg-[#FAF9F6] flex items-center justify-center text-[#8C7A6B] shrink-0 mt-0.5">✓</div>
                  <span><strong className="text-[#2A2A2A] font-medium">Outcome:</strong> Deep emotional stability, significantly reduced anxiety, and profound inner clarity.</span>
                </li>
              </ul>
            </div>
            <div className="relative z-10 mt-auto">
              <Link to="/contact" className="bg-[#2A2A2A] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-[#8C7A6B] transition-colors inline-flex items-center gap-2">
                Apply to Join <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            {/* Inner Child Healing */}
            <motion.div variants={fadeUp} className="bg-[#8C7A6B] p-12 rounded-[3rem] shadow-sm text-white flex-grow relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-8">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl mb-4">Inner Child Healing Sessions</h3>
                <p className="text-white/80 font-light leading-relaxed mb-8">
                  Intensive healing sessions designed to resolve past emotional wounds. Reconnect with your core essence, heal the traumas that keep you playing small, and break self-sabotaging patterns.
                </p>
                <Link to="/contact" className="bg-white text-[#2A2A2A] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Apply to Join <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* 28 Days Anxiety */}
            <motion.div variants={fadeUp} className="bg-[#2A2A2A] p-12 rounded-[3rem] shadow-sm text-white flex-grow relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white mb-8">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl mb-4">28 Days Anxiety Transformation</h3>
                <p className="text-white/80 font-light leading-relaxed mb-8">
                  A structured, intensive coaching program to break severe anxiety loops and build lasting emotional control. Learn to regulate your nervous system and reclaim your peace of mind in less than a month.
                </p>
                <Link to="/contact" className="bg-white text-[#2A2A2A] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-[#8C7A6B] hover:text-white transition-colors inline-flex items-center gap-2">
                  Apply to Join <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold mb-4 block">
            The Process
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-6">
            How it <span className="italic text-[#8C7A6B]">Works</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-500 font-light max-w-xl mx-auto text-lg">
            Our methodology is rooted in the intersection of ancient wisdom and modern neuroscience.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
        >
          {[
            {
              step: "1",
              title: "Deep Discovery",
              desc: "We begin with a 45-minute alignment call to map your emotional landscape and identify the core blocks holding you back."
            },
            {
              step: "2",
              title: "Curated Journey",
              desc: "Based on your blueprint, we enter a container of intensive healing, utilizing somatic practices and reframing techniques."
            },
            {
              step: "3",
              title: "Integrated Mastery",
              desc: "You emerge with a personalized toolkit of practices to maintain your resonance and lead from a state of wholeness."
            }
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-[#8C7A6B] font-serif text-2xl mb-8">
                {item.step}
              </div>
              <h4 className="font-serif text-2xl mb-4">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
