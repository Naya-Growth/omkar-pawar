import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, PlayCircle, Video } from 'lucide-react';

const insights = [
  {
    category: 'Anxiety',
    title: 'The Hidden Cost of High-Functioning Anxiety',
    summary: 'Why appearing calm, productive and reliable can hide a nervous system that never truly rests.',
    type: 'Article',
    icon: BookOpen,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCygHCUcWLO9UuDZR912DUlPN_7amg7Z36UXAOWMiMDs9rZzbrgmDdMg-XOy-Ktlec5hD0PVeT22rls-k_Bkp1r78sQFSjn3DmCVmPiVnu5-7zGGiZjFFeiqnSSGNQBtaX_TKq5NppUbbyieZJdoWRf7TfVojOOzGr4Ro-UtWhwYq91mlrpqf3Hh1Z7QRY2ej-aZm4hbRbBEqMMb_EKPuZ8qgvrh49zUCXRYF3A0SWpnKANQuDDpy6hUMgraYZTTOQPFniw_BcNiECt',
  },
  {
    category: 'Emotional Mastery',
    title: 'Why You Cannot “Think” Your Way Out of a Trigger',
    summary: 'The difference between intellectually understanding a pattern and feeling safe enough to respond differently.',
    type: 'Video',
    icon: Video,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnfo8XkwiAPjHU-VDOALiBrpaqMJU1BKLcpOFGTT5P1chYDZyHMtn5PyX7Pn83zARuYXnlb3dNC7cKkCSNHOiPlc9qaMckhmYVoVWQHKSXmIpvUb9XBqr82PzNEjWSbQlRmqEuwP34KQBXGbZlgatJjq0w0c9njnc0gt74MDQRbR6IPw8wLsPRrh46vOp692ZUxG2I533ths5-ilUOPcQ9t1mtFEiRtB1QcTjeMayIWSivN7mPiWgyjGW1EyUdBOMYAB65uLMoIZMD',
  },
  {
    category: 'Inner Child Healing',
    title: 'Re-parenting and the Relationships You Build as an Adult',
    summary: 'How earlier emotional learning can shape closeness, conflict, reassurance and the fear of being left.',
    type: 'Article',
    icon: BookOpen,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJUVQbAptUzypw4hw9piHkHhaG589gVXQ11AlvfJt1mg874HKfi0yWSOZgwbd-9e8YC3wbncsLXO26lL_pjxXcWFjsReZCqdojVvPMsludnQRb6gmv0mVwnPtPpWVwoY3v_7JsdGEmHxo-HUACuY9_ACreTWnjsfgGBAgXqjCBDD7qdCEDDWrSk45X21n_CisMh0hl8GW4byC3i8lhEvLQL3Hj8_dBytPXp4X3Gs61YOuH4qRRRXARKY4N7Mhsdcy8lTGLhrifOwmT',
  },
  {
    category: 'Mindfulness',
    title: 'A Five-Minute Somatic Reset for Overwhelm',
    summary: 'A short grounding sequence for moments when your body is activated and your thoughts are accelerating.',
    type: 'Practice',
    icon: PlayCircle,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmE2Meem68dIm2IYwPkLm-jQ3Q9IIfh95kaywla84KFzG1WEshBUkgo1buh-iefdQypIi4JreHOaTsqJdIUnxXD7I2S9BBjRVPzckz9LHys-WorIoSyjm-UKXEuFY9ExJYEw4VhcVbm_42YegydWFf7ZHoIvtTklSlA5EhVuNvOmpEvP9dI8DVVi_K6KLADWAgXdU3CitMRNQsMOiBP-j8iJlHA1G8Iz9EfcuQg8mJKthRBCRbsdVsHJkWi7WFGoDJofTigACuwjdO',
  },
];

const filters = ['All', 'Anxiety', 'Emotional Mastery', 'Inner Child Healing', 'Mindfulness'];

export default function Content() {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleInsights = useMemo(
    () => (activeFilter === 'All' ? insights : insights.filter((item) => item.category === activeFilter)),
    [activeFilter],
  );

  return (
    <div className="overflow-hidden bg-[#FFF8EF] text-[#18131B]">
      <section className="relative overflow-hidden bg-[#FF6333] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14 lg:py-32">
        <div className="absolute -left-60 -top-64 h-[540px] w-[540px] rounded-full border-[92px] border-[#64266F] opacity-90" />
        <div className="absolute -bottom-64 -right-40 h-[520px] w-[520px] rounded-full border-[88px] border-[#FFF8EF] opacity-80" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/68">The Freedom library</span>
          <h1 className="mt-6 text-balance text-6xl font-bold leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-[7.4rem]">
            Understand your mind without turning yourself into a
            <span className="display-serif ml-3 block font-medium italic text-[#24172A]">problem to solve.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Practical articles, videos and guided exercises on anxiety, emotional triggers, inner-child work and self-regulation.
          </p>
        </motion.div>
      </section>

      <section className="px-5 py-10 md:px-10 lg:px-14">
        <div className="no-scrollbar mx-auto flex max-w-[1360px] gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                activeFilter === filter ? 'bg-[#64266F] text-white' : 'border border-black/10 bg-white text-[#6F6368] hover:border-[#FF6333] hover:text-[#FF6333]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 pt-8 md:px-10 md:pb-32 lg:px-14">
        <div className="mx-auto grid max-w-[1360px] gap-6 md:grid-cols-2">
          {visibleInsights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className={`group overflow-hidden rounded-[2.3rem] border border-black/8 bg-white ${index === 0 && activeFilter === 'All' ? 'md:col-span-2 md:grid md:grid-cols-[1.1fr_.9fr]' : ''}`}
              >
                <div className={`relative overflow-hidden bg-[#E8DDDA] ${index === 0 && activeFilter === 'All' ? 'min-h-[420px]' : 'aspect-[16/10]'}`}>
                  <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18131B]/45 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#FFF8EF]/92 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#18131B] backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5" />
                    {item.type}
                  </span>
                </div>

                <div className="flex min-h-[310px] flex-col p-7 md:p-9">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#FF6333]">{item.category}</span>
                  <h2 className={`mt-5 text-balance font-bold leading-[1.04] tracking-[-0.045em] ${index === 0 && activeFilter === 'All' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>{item.title}</h2>
                  <p className="mt-5 text-sm leading-7 text-[#6C6166]">{item.summary}</p>
                  <button type="button" className="group/button mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-[#64266F]">
                    Open insight
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#AEE4DF] px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1260px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-4xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087F79]">A useful place to start</span>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-[1] tracking-[-0.05em] md:text-6xl">Notice the pattern before trying to overpower it.</h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4B625F] md:text-base">Read slowly. Take what is useful. These resources support reflection but do not replace individual mental-health care or emergency support.</p>
          </div>
          <a href="https://instagram.com/lifecoachomkar" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#18131B] px-6 py-4 text-sm font-bold text-white">
            Follow daily insights
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
