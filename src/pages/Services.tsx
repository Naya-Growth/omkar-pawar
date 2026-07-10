import { motion } from 'motion/react';
import { ArrowRight, Check, HeartHandshake, Sparkles, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const portrait =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCygHCUcWLO9UuDZR912DUlPN_7amg7Z36UXAOWMiMDs9rZzbrgmDdMg-XOy-Ktlec5hD0PVeT22rls-k_Bkp1r78sQFSjn3DmCVmPiVnu5-7zGGiZjFFeiqnSSGNQBtaX_TKq5NppUbbyieZJdoWRf7TfVojOOzGr4Ro-UtWhwYq91mlrpqf3Hh1Z7QRY2ej-aZm4hbRbBEqMMb_EKPuZ8qgvrh49zUCXRYF3A0SWpnKANQuDDpy6hUMgraYZTTOQPFniw_BcNiECt';

const pathways = [
  {
    icon: HeartHandshake,
    number: '01',
    name: '1:1 Emotional Healing',
    tagline: 'Private support for complex inner patterns',
    description:
      'A personalised space to understand anxiety, emotional overwhelm and recurring reactions without reducing your experience to a generic checklist.',
    fit: ['You appear functional but feel exhausted within', 'You want depth, continuity and individual attention', 'You are ready to practise between conversations'],
    tone: 'bg-[#FF6333] text-white',
    button: 'bg-white text-[#18131B]',
  },
  {
    icon: Sparkles,
    number: '02',
    name: 'Inner Child Healing',
    tagline: 'Work with the emotional age beneath the trigger',
    description:
      'A focused pathway for unresolved childhood experiences, shame, fear of rejection and patterns that feel disproportionate to the present moment.',
    fit: ['You understand the pattern but still repeat it', 'Old memories or unmet needs keep surfacing', 'Relationships activate fear, anger or withdrawal'],
    tone: 'bg-[#64266F] text-white',
    button: 'bg-[#FF8B66] text-[#18131B]',
  },
  {
    icon: Waves,
    number: '03',
    name: '28-Day Anxiety Reset',
    tagline: 'A structured month of observation and regulation',
    description:
      'A guided short-format journey to recognise anxiety loops, create stabilising routines and build a more workable response to mental and physical activation.',
    fit: ['Your mind remains busy even during rest', 'You need structure and practical repetition', 'You want a clear starting point before deeper work'],
    tone: 'bg-[#AEE4DF] text-[#18131B]',
    button: 'bg-[#18131B] text-white',
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden bg-[#FFF8EF] text-[#18131B]">
      <section className="relative overflow-hidden bg-[#CDC4C2] px-5 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="absolute -left-72 -top-80 h-[660px] w-[660px] rounded-full border-[110px] border-[#FF6333]" />
        <div className="absolute -bottom-64 -right-48 h-[540px] w-[540px] rounded-full border-[92px] border-[#64266F]" />

        <div className="relative z-10 mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#5A4D52]">Work with Omkar</span>
            <h1 className="mt-6 text-balance text-6xl font-bold leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-[7rem]">
              Healing support that does not stop at
              <span className="display-serif ml-3 block font-medium italic text-[#64266F]">“think positive.”</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#4F454A] md:text-lg">
              Each pathway is designed to help you understand the emotional logic underneath anxiety, triggers and relationship patterns—then practise a response that feels safer and more intentional.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF6333] px-7 py-4 text-sm font-bold text-white">
                Book a clarity call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/35 px-7 py-4 text-xs font-bold text-[#4D4247] backdrop-blur-sm">
                Online · Private · Application-led
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-[580px]"
          >
            <div className="absolute -right-7 top-9 h-[86%] w-[85%] rounded-t-[16rem] bg-[#AEE4DF]" />
            <div className="relative aspect-[4/5] w-[90%] overflow-hidden rounded-t-[16rem] rounded-b-[2.4rem] soft-shadow">
              <img src={portrait} alt="Omkar Pawar" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 right-0 rounded-[1.5rem] bg-[#18131B] px-6 py-5 text-white shadow-xl">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">First step</p>
              <p className="mt-2 max-w-[220px] text-sm font-semibold leading-6">A clarity call to understand fit—not a pressure-filled sales call.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A3F20]">Choose by need, not by trend</span>
              <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                Three pathways.
                <span className="display-serif block font-medium italic text-[#64266F]">One deeper intention.</span>
              </h2>
            </div>
            <p className="max-w-xl justify-self-end text-base leading-8 text-[#6D6267] md:text-lg">
              The right support depends on the pattern, its history and your current capacity. The clarity call helps determine whether one of these pathways is appropriate.
            </p>
          </div>

          <div className="mt-14 grid gap-6">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;
              return (
                <motion.article
                  key={pathway.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  className={`grid overflow-hidden rounded-[2.5rem] ${pathway.tone} lg:grid-cols-[.82fr_1.18fr]`}
                >
                  <div className="flex min-h-[390px] flex-col border-b border-current/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-bold tracking-[0.2em] opacity-45">{pathway.number}</span>
                      <span className="flex h-13 w-13 items-center justify-center rounded-full bg-current/10">
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>
                    <div className="mt-auto">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-58">{pathway.tagline}</p>
                      <h3 className="mt-5 text-balance text-4xl font-bold leading-[1] tracking-[-0.05em] md:text-6xl">{pathway.name}</h3>
                      <p className="mt-6 max-w-xl text-sm leading-7 opacity-72">{pathway.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-52">This may fit when</p>
                    <div className="mt-6 grid gap-4">
                      {pathway.fit.map((item) => (
                        <div key={item} className="flex items-start gap-3 rounded-2xl bg-current/[0.08] p-4">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-current/10">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <p className="text-sm font-medium leading-6 opacity-78">{item}</p>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className={`group mt-8 inline-flex w-fit items-center gap-3 rounded-full px-6 py-4 text-sm font-bold ${pathway.button}`}>
                      Discuss this pathway
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#24172A] px-5 py-24 text-white md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto grid max-w-[1260px] gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF9A7A]">What the process feels like</span>
            <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Clear enough to follow.
              <span className="display-serif block font-medium italic text-[#AEE4DF]">Human enough to adapt.</span>
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              ['01', 'Clarity', 'Name what is happening, what tends to trigger it and what you have already tried.'],
              ['02', 'Context', 'Understand the earlier learning, unmet need or protective strategy underneath the present reaction.'],
              ['03', 'Practice', 'Use appropriate reflective and regulation tools in a way that is realistic for your daily life.'],
              ['04', 'Integration', 'Notice the pattern sooner, respond with more choice and reduce dependence on external reassurance.'],
            ].map(([number, title, description], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="grid gap-5 rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-7 md:grid-cols-[72px_1fr] md:p-8"
              >
                <span className="display-serif text-4xl italic text-[#FF8B66]">{number}</span>
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto grid max-w-[1260px] overflow-hidden rounded-[2.5rem] bg-[#AEE4DF] lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-8 md:p-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#087F79]">Still unsure which pathway fits?</span>
            <h2 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1] tracking-[-0.05em] md:text-6xl">
              You do not need to diagnose yourself before asking for support.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#4D625F] md:text-base">Share what you are experiencing. The next step can be decided together, without urgency or pressure.</p>
          </div>
          <div className="p-8 pt-0 md:p-14 lg:pt-14">
            <Link to="/contact" className="group inline-flex items-center gap-4 rounded-full bg-[#18131B] p-2 pl-6 text-sm font-bold text-white">
              Book a clarity call
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6333]">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
