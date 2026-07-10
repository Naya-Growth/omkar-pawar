import { motion } from 'motion/react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  HeartHandshake,
  Play,
  Quote,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImage =
  'https://lh3.googleusercontent.com/aida/ADBb0uiy4Zba779LsLJxKHWtnicw9dRZP2keh2XOFyys2EGKUoFvXzMjr4XHPvv3BN5EbilT0fYnWaUN8t67MIMI5MPMbyxAw9cWvTjBc-K7m_4ZtxWjybc8NX8Jw3b0t0nTrRbiPo-DbYRAoC902Jm0gCCwjcMuUaLpHSwNnroP2ZG9cGwLuDmJRtzlTfx5JgXQRUBitzR2YkJ3yavtKvpeA9stzC8bwuHLdYm8RrVhNWQp00S9eJ4nySdyNbmRWayDvHaI0jJYxuDJ';

const secondPortrait =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCygHCUcWLO9UuDZR912DUlPN_7amg7Z36UXAOWMiMDs9rZzbrgmDdMg-XOy-Ktlec5hD0PVeT22rls-k_Bkp1r78sQFSjn3DmCVmPiVnu5-7zGGiZjFFeiqnSSGNQBtaX_TKq5NppUbbyieZJdoWRf7TfVojOOzGr4Ro-UtWhwYq91mlrpqf3Hh1Z7QRY2ej-aZm4hbRbBEqMMb_EKPuZ8qgvrh49zUCXRYF3A0SWpnKANQuDDpy6hUMgraYZTTOQPFniw_BcNiECt';

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const struggles = [
  {
    icon: BrainCircuit,
    number: '01',
    title: 'Your mind never clocks out.',
    text: 'You replay conversations, predict problems and stay mentally alert even when nothing is wrong.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'Small triggers create big reactions.',
    text: 'A comment, silence or disappointment can bring up fear, anger or shame that feels much older than the moment.',
  },
  {
    icon: HeartHandshake,
    number: '03',
    title: 'The same patterns keep returning.',
    text: 'You understand what is happening intellectually, but relationships and self-doubt still pull you into familiar cycles.',
  },
];

const programs = [
  {
    number: '01',
    title: '1:1 Emotional Healing',
    subtitle: 'A private, personalised container',
    text: 'For anxiety, emotional overwhelm and recurring patterns that need more than surface-level motivation.',
    tone: 'bg-[#FF6333] text-white',
    button: 'bg-white text-[#18131B]',
  },
  {
    number: '02',
    title: 'Inner Child Healing',
    subtitle: 'Meet the root, not just the reaction',
    text: 'Understand unmet emotional needs, rebuild inner safety and respond to the present without reliving the past.',
    tone: 'bg-[#64266F] text-white',
    button: 'bg-[#FF8B66] text-[#18131B]',
  },
  {
    number: '03',
    title: '28-Day Anxiety Reset',
    subtitle: 'Structure for a noisy nervous system',
    text: 'A focused journey to recognise anxiety loops, practise regulation and build a steadier relationship with your mind.',
    tone: 'bg-[#AEE4DF] text-[#18131B]',
    button: 'bg-[#18131B] text-white',
  },
];

const reflections = [
  {
    quote:
      'I was constantly living in my head. The work helped me understand the loop instead of fighting it, and I finally know what calm can feel like.',
    person: 'S. · Tech professional',
  },
  {
    quote:
      'The biggest shift was realising that my reactions were not random. Once I understood the root, I could choose a different response.',
    person: 'A. · Healthcare professional',
  },
  {
    quote:
      'I looked confident outside but carried constant self-doubt. The sessions helped me build a much more honest and grounded relationship with myself.',
    person: 'R. · Business leader',
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#FFF8EF] text-[#18131B]">
      <section className="relative min-h-[830px] overflow-hidden bg-[#CDC4C2] px-5 pb-16 pt-10 md:px-10 lg:min-h-[calc(100vh-118px)] lg:px-14 lg:pb-12">
        <div className="pointer-events-none absolute -left-[28rem] -top-[18rem] h-[950px] w-[950px] rounded-full border-[150px] border-[#64266F] opacity-95" />
        <div className="pointer-events-none absolute -right-48 -top-[17rem] h-[720px] w-[720px] rounded-full border-[120px] border-[#FF6333]" />
        <div className="pointer-events-none absolute bottom-[-18rem] right-[21%] h-[540px] w-[540px] rounded-full border-[88px] border-[#FFF3E8]/80" />
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-35" />

        <div className="relative z-10 mx-auto grid min-h-[720px] max-w-[1480px] items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-[820px] pt-8 lg:pt-0">
            <motion.div variants={reveal} className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-[#18131B]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3F353B]">
                Psychologist · Emotional wellbeing coach
              </span>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="text-balance text-[3.7rem] font-bold leading-[0.91] tracking-[-0.07em] sm:text-7xl md:text-[6.3rem] xl:text-[7.6rem]"
            >
              Stop fighting your mind.
              <span className="display-serif block font-medium italic text-[#64266F]">Come home to yourself.</span>
            </motion.h1>

            <motion.p variants={reveal} className="mt-8 max-w-2xl text-base leading-7 text-[#4D4348] md:text-xl md:leading-8">
              A grounded, psychology-informed space for people who look capable on the outside but feel anxious, overwhelmed or emotionally stuck within.
            </motion.p>

            <motion.div variants={reveal} className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FF6333] px-7 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#E94D1C] hover:shadow-xl"
              >
                Book a clarity call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#18131B]/20 bg-white/35 px-7 py-4 text-sm font-bold backdrop-blur-sm transition-colors hover:bg-white/70"
              >
                Explore how we work
                <ArrowDown className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={reveal} className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-[#443A40]">
              {['Anxiety & overthinking', 'Inner-child wounds', 'Relationship patterns'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#64266F]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-[610px] self-end lg:mx-0"
          >
            <div className="absolute -left-8 bottom-10 hidden h-[78%] w-[72%] rounded-t-[18rem] bg-[#FF6333] md:block" />
            <div className="relative ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-t-[17rem] bg-[#E9DFDB] soft-shadow">
              <img src={heroImage} alt="Omkar Pawar" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18131B]/28 via-transparent to-transparent" />
            </div>

            <div className="absolute -left-1 bottom-8 max-w-[250px] rounded-[1.6rem] border border-white/30 bg-[#FFF8EF]/92 p-5 shadow-2xl backdrop-blur-xl md:-left-12 md:bottom-14 md:p-6">
              <Quote className="mb-3 h-6 w-6 text-[#FF6333]" />
              <p className="display-serif text-lg font-medium leading-snug md:text-xl">
                “You are not broken. A part of you is asking to be understood.”
              </p>
              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#7C6E73]">Omkar Pawar</p>
            </div>

            <Link
              to="/about"
              className="absolute right-1 top-[15%] flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-[#AEE4DF] text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#18131B] shadow-xl transition-transform hover:rotate-0 md:h-28 md:w-28"
            >
              Meet
              <br />
              Omkar
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white">
        <div className="mx-auto grid max-w-[1480px] divide-y divide-black/8 px-5 md:grid-cols-4 md:divide-x md:divide-y-0 md:px-10 lg:px-14">
          {[
            ['Double Master’s', 'I/O and Clinical Psychology'],
            ['Certified', 'Cognitive Hypnotic Psychotherapy'],
            ['Master Practitioner', 'Neuro-Linguistic Programming'],
            ['Specialised Support', 'Inner Child Healing'],
          ].map(([title, text]) => (
            <div key={title} className="px-0 py-6 md:px-6 lg:px-8">
              <p className="text-sm font-bold text-[#18131B]">{title}</p>
              <p className="mt-1 text-xs leading-5 text-[#786D71]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto grid max-w-[1360px] overflow-hidden rounded-[2.25rem] bg-[#FF8F6B] lg:grid-cols-2 lg:rounded-[3rem]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[480px] overflow-hidden lg:min-h-[680px]"
          >
            <img src={secondPortrait} alt="Omkar Pawar in a counselling space" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18131B]/25 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full bg-[#FFF8EF] px-5 py-3 text-xs font-bold md:bottom-8 md:left-8">
              Omkar Pawar · Freedom Inner Wellbeing
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center px-7 py-14 md:px-14 lg:px-16"
          >
            <Quote className="mb-7 h-10 w-10 text-[#64266F]" />
            <h2 className="text-balance display-serif text-4xl font-medium leading-[1.06] md:text-6xl">
              This work is not about becoming a new person. It is about feeling safe enough to be the person you already are.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-8 text-[#3E3035]">
              Omkar blends psychological understanding, reflective conversation and practical regulation tools to help people move beyond insight and into lived emotional change.
            </p>
            <Link to="/about" className="group mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#18131B] px-6 py-4 text-sm font-bold text-white">
              Read Omkar’s story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#24172A] px-5 py-24 text-white md:px-10 md:py-32 lg:px-14">
        <div className="absolute -right-56 -top-48 h-[520px] w-[520px] rounded-full border-[90px] border-[#64266F] opacity-80" />
        <div className="absolute -bottom-64 -left-52 h-[540px] w-[540px] rounded-full border-[94px] border-[#FF6333] opacity-85" />

        <div className="relative z-10 mx-auto max-w-[1360px]">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="max-w-4xl">
            <motion.span variants={reveal} className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF9A7A]">
              When life looks fine from the outside
            </motion.span>
            <motion.h2 variants={reveal} className="mt-6 text-balance text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[6.2rem]">
              The invisible battle is still
              <span className="display-serif ml-3 font-medium italic text-[#AEE4DF]">real.</span>
            </motion.h2>
            <motion.p variants={reveal} className="mt-7 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              High-functioning does not always mean feeling well. Sometimes it means becoming very good at hiding how hard your inner world has become.
            </motion.p>
          </motion.div>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {struggles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.09] md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-white/35">{item.number}</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#FF8B66]">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-12 text-2xl font-bold tracking-[-0.035em] md:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A3F20]">Ways to work together</span>
              <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                Support built around the
                <span className="display-serif ml-3 font-medium italic text-[#64266F]">root.</span>
              </h2>
            </div>
            <p className="max-w-xl justify-self-end text-base leading-8 text-[#6D6267] md:text-lg">
              No two emotional histories are identical. The right path begins with understanding what your mind and nervous system are trying to protect.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`flex min-h-[510px] flex-col rounded-[2.4rem] p-7 md:p-9 ${program.tone}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] opacity-55">{program.number}</span>
                  <span className="h-3 w-3 rounded-full bg-current opacity-35" />
                </div>
                <div className="mt-auto">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] opacity-65">{program.subtitle}</p>
                  <h3 className="text-balance text-4xl font-bold leading-[1] tracking-[-0.05em] md:text-5xl">{program.title}</h3>
                  <p className="mt-5 text-sm leading-7 opacity-72">{program.text}</p>
                  <Link
                    to="/services"
                    className={`group mt-8 inline-flex items-center gap-3 rounded-full px-5 py-3.5 text-xs font-bold ${program.button}`}
                  >
                    See the pathway
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#DDF4F1] px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto grid max-w-[1360px] gap-16 lg:grid-cols-[.82fr_1.18fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#087F79]">The process</span>
            <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Less fixing.
              <span className="display-serif block font-medium italic text-[#64266F]">More understanding.</span>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#4D5F5C]">
              The journey is collaborative, practical and paced around emotional safety—not performance.
            </p>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#18131B] px-6 py-4 text-sm font-bold text-white">
              Start with a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4">
            {[
              ['01', 'Map what is happening', 'We slow the noise down and understand the patterns, triggers and needs underneath the symptoms.'],
              ['02', 'Work with the root', 'Sessions combine reflection with practical techniques selected around your history, personality and current capacity.'],
              ['03', 'Practise a new response', 'You learn to recognise the moment of activation and create enough inner space to choose differently.'],
              ['04', 'Integrate beyond sessions', 'The goal is not dependence on a coach. It is greater self-awareness, self-trust and emotional agency.'],
            ].map(([number, title, text], index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="grid gap-6 rounded-[1.8rem] border border-[#0D4D48]/10 bg-white/75 p-7 backdrop-blur-sm md:grid-cols-[80px_1fr] md:p-9"
              >
                <span className="display-serif text-4xl italic text-[#FF6333]">{number}</span>
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.035em]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#596A67]">{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A3F20]">Client reflections</span>
              <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                Change, in their
                <span className="display-serif ml-3 font-medium italic text-[#64266F]">own words.</span>
              </h2>
            </div>
            <Link to="/stories" className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-[#64266F]">
              Read more stories
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {reflections.map((item, index) => (
              <motion.blockquote
                key={item.person}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`flex min-h-[360px] flex-col rounded-[2rem] p-7 md:p-9 ${
                  index === 1 ? 'bg-[#64266F] text-white' : 'border border-black/8 bg-white text-[#18131B]'
                }`}
              >
                <Quote className={`h-8 w-8 ${index === 1 ? 'text-[#FF8B66]' : 'text-[#FF6333]'}`} />
                <p className="display-serif mt-10 text-2xl font-medium leading-[1.25]">“{item.quote}”</p>
                <footer className={`mt-auto pt-8 text-xs font-bold uppercase tracking-[0.12em] ${index === 1 ? 'text-white/50' : 'text-[#7A6E73]'}`}>
                  {item.person}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-14">
        <div className="mx-auto overflow-hidden rounded-[2.5rem] bg-[#FF6333] px-7 py-14 text-white md:px-14 md:py-16 lg:max-w-[1360px] lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">Free insights for the work between sessions</span>
              <h2 className="mt-5 text-balance text-4xl font-bold leading-[1] tracking-[-0.05em] md:text-6xl">
                Learn why your mind does what it does—and what to try next.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
                Explore practical articles and videos on anxiety, emotional triggers, inner-child work and mindful regulation.
              </p>
            </div>
            <Link
              to="/content"
              className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#18131B] p-2 pl-6 text-sm font-bold text-white"
            >
              Explore insights
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#18131B]">
                <Play className="h-4 w-4 fill-current" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
