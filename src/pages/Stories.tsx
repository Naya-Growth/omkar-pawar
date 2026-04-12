import { motion } from 'motion/react';
import { Play, MessageSquare, Sparkles, Star } from 'lucide-react';
import Section from '../components/ui/Section';
import ReflectionPod from '../components/ui/ReflectionPod';

export default function Stories() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Section className="bg-surface relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="font-label text-xs md:text-sm uppercase tracking-[0.2em] text-secondary font-bold mb-4 block">Success Stories</span>
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-on-background mb-6">
            Real Transformations,<br />Real Stories
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Witness the evolution of minds through emotional mastery and dedicated inner work.
          </p>
        </motion.div>
      </Section>

      {/* Video Testimonials Section */}
      <Section className="bg-surface-container-low">
        <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Video Reflections</h2>
          <span className="font-label text-xs md:text-sm text-primary font-semibold uppercase tracking-widest">Swipe to view</span>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar">
          {/* Video Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-none w-72 md:w-96 snap-center group relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-surface-container-high shadow-lg"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJUVQbAptUzypw4hw9piHkHhaG589gVXQ11AlvfJt1mg874HKfi0yWSOZgwbd-9e8YC3wbncsLXO26lL_pjxXcWFjsReZCqdojVvPMsludnQRb6gmv0mVwnPtPpWVwoY3v_7JsdGEmHxo-HUACuY9_ACreTWnjsfgGBAgXqjCBDD7qdCEDDWrSk45X21n_CisMh0hl8GW4byC3i8lhEvLQL3Hj8_dBytPXp4X3Gs61YOuH4qRRRXARKY4N7Mhsdcy8lTGLhrifOwmT"
              alt="Sarah M."
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                <Play className="text-white w-8 h-8 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg md:text-xl mb-1">Sarah M.</p>
              <p className="text-white/80 text-sm md:text-base italic">"From chronic anxiety to peace"</p>
            </div>
          </motion.div>

          {/* Video Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex-none w-72 md:w-96 snap-center group relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-surface-container-high shadow-lg"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmE2Meem68dIm2IYwPkLm-jQ3Q9IIfh95kaywla84KFzG1WEshBUkgo1buh-iefdQypIi4JreHOaTsqJdIUnxXD7I2S9BBjRVPzckz9LHys-WorIoSyjm-UKXEuFY9ExJYEw4VhcVbm_42YegydWFf7ZHoIvtTklSlA5EhVuNvOmpEvP9dI8DVVi_K6KLADWAgXdU3CitMRNQsMOiBP-j8iJlHA1G8Iz9EfcuQg8mJKthRBCRbsdVsHJkWi7WFGoDJofTigACuwjdO"
              alt="David K."
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                <Play className="text-white w-8 h-8 fill-current" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-lg md:text-xl mb-1">David K.</p>
              <p className="text-white/80 text-sm md:text-base italic">"Breakthrough in career confidence"</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Quotes & Messages Bento Grid */}
      <Section>
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-10 text-center">Moments of Clarity</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Reflection Pod 1 */}
          <div className="md:col-span-8">
            <ReflectionPod 
              quote="Omkar didn't just give me tools; he helped me find the architect within myself. My anxiety no longer drives the car."
              author="Rohan J."
              role="Private Coaching Client"
              initials="RJ"
            />
          </div>

          {/* Message Screenshot Card */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-6 rounded-[2rem] bg-secondary-container/10 border border-secondary-container/20 space-y-4 shadow-sm flex-grow"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="text-secondary w-5 h-5 fill-current" />
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">WhatsApp</span>
              </div>
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm">
                <p className="text-sm text-on-surface leading-relaxed">"Omkar, just had my first panic-free presentation in 5 years! I can't thank you enough for the grounding techniques."</p>
              </div>
              <p className="text-xs text-on-surface-variant text-right">Today, 10:42 AM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-[2rem] bg-surface-container-highest flex flex-col justify-between flex-grow"
            >
              <div className="flex -space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full border-2 border-surface-container-highest bg-primary-container overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE1B8KaGM2TnkJiprtLTyq2m0yXedgZs7Ku2hf5HqbusucbFYycPwYMUzhNqieAsSZIa5asA6CwYYFkinQv1NbROZHlx48C4NHoXJiA44CHE_Uurzh5YKztp4evZRNkuEGZ_JOAKK_WIhP9BaCdylj05XgFwn1d3-3Mbuo5DMYERtGOT-DLpdxLRLswaTjbEUqGj66fnhfH0lpF1ItTAx2zWaBgveZqpOIVuujtOP3XMiHRBElKXKz4JZFNjPAPNi8s9cdFcCCCGu2" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface-container-highest bg-primary overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc5f-ngjond0zGxPb4UGekR0fsnJkCtsPwofOg9kF9Z76ut5G7d9xClyAuf8x1Xx_jkWruO3sjTLQgTfbrtR81xPu1QqCEGvSRn95x0eZVnKDsWCMHfAz9xSCqbNaX2d1ZEiTlAVOhxqsuaYNlSMwYPP6PibTSSPTJ7m3d1ZEhiQ2UlwDPrlHdzdcO4nM4PO_au7NPeHWgBNWsgyjHmYt7HEIkSv6Grd8FhfNIWkxXSl7nKtU75VnCwQ45tT0muQjRAVXJw3k6tM-R" alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-surface-container-highest bg-secondary flex items-center justify-center text-xs font-bold text-white z-10">
                  +12
                </div>
              </div>
              <div>
                <p className="text-base font-bold text-on-surface">Community Win</p>
                <p className="text-xs text-on-surface-variant mt-1">Join 50+ members transforming their lives.</p>
              </div>
            </motion.div>
          </div>

          {/* Reflection Pod 2 (Asymmetric) */}
          <div className="md:col-span-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-primary text-on-primary flex flex-col justify-between min-h-[280px] shadow-xl"
            >
              <Sparkles className="text-primary-container w-12 h-12 fill-current mb-8" />
              <div className="mt-auto">
                <p className="font-headline text-xl md:text-3xl leading-relaxed opacity-90 italic">
                  "Emotional breakthroughs are messy, but the clarity on the other side is priceless. Omkar is the most empathetic guide I've met."
                </p>
                <div className="mt-10 flex items-center justify-between border-t border-on-primary/20 pt-6">
                  <p className="text-sm md:text-base font-bold tracking-widest uppercase">Ananya S.</p>
                  <div className="flex text-primary-container gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-surface-container-low">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-8 border-8 border-white shadow-xl">
            <img
              src="https://lh3.googleusercontent.com/aida/ADBb0ugQfLGe04DQxWDhZtTzVg-gGzYaCd86-FgFPt-nZGxORilfxSk2UUg_SHleomCciqUDteYMBWTy4SxoAWz2ex_oFI9rEHiL1V7Ll8KvoD3DPGp_u6HWhlJutnu02aVDjMZQNExAibCC6X4x53gF0GEIn05aQYFIf4JgokH1VAWoH5toNy6vl2Jv1R2DF17KnQ12kU8f-hi1G3IJ6oGvu-cyN4AkWwGZAyNfVy85C7q_jalHeuO6IKA0IfzsxVNRTdQaIGfc0xEJp_c"
              alt="Omkar Pawar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-primary font-bold mb-3">Your Guide</span>
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-on-background">Meet Omkar Pawar</h2>
          <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-10">
            With years of experience in emotional intelligence and inner work, I've dedicated my life to helping others navigate their internal landscapes and find lasting peace.
          </p>
          <div className="flex items-center gap-8 justify-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">500+</span>
              <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold mt-1">Lives Impacted</span>
            </div>
            <div className="w-px h-12 bg-outline-variant/50"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-primary">8+</span>
              <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold mt-1">Years Exp.</span>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section className="text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Your Story Begins Here</h2>
        <p className="text-on-surface-variant mb-10 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
          Take the first step towards emotional resilience and a transformed life.
        </p>
        <button className="w-full sm:w-auto py-5 px-12 rounded-full bg-primary text-on-primary font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-95">
          Join the Journey
        </button>
        <p className="mt-6 font-label text-xs uppercase tracking-widest text-secondary font-bold">Limited Slots for Coaching</p>
      </Section>
    </div>
  );
}
