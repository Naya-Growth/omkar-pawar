import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Brain, GraduationCap, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const portrait =
  'https://lh3.googleusercontent.com/aida/ADBb0uiy4Zba779LsLJxKHWtnicw9dRZP2keh2XOFyys2EGKUoFvXzMjr4XHPvv3BN5EbilT0fYnWaUN8t67MIMI5MPMbyxAw9cWvTjBc-K7m_4ZtxWjybc8NX8Jw3b0t0nTrRbiPo-DbYRAoC902Jm0gCCwjcMuUaLpHSwNnroP2ZG9cGwLuDmJRtzlTfx5JgXQRUBitzR2YkJ3yavtKvpeA9stzC8bwuHLdYm8RrVhNWQp00S9eJ4nySdyNbmRWayDvHaI0jJYxuDJ';

const chapters = [
  {
    number: '01',
    label: 'The burden of perfection',
    title: 'I learned how to look capable before I learned how to feel at peace.',
    paragraphs: [
      'I was born in a small village called Whatambare in Solapur, Maharashtra. From the outside, my childhood looked good. Internally, I was highly vulnerable—absorbing the unsaid pressures of family and society.',
      'I lived in my own head, consumed by the need to be perfect. Everything had to be the best. I worked for results, feared judgment and chased extraordinary goals not only from passion, but from a need to appear flawless.',
    ],
  },
  {
    number: '02',
    label: 'The collapse and the calling',
    title: 'Failure interrupted the plan—and made room for the work that mattered.',
    paragraphs: [
      'My breaking point came after failing competitive exams. With a background in Mechanical Engineering and work in a small-scale industry, I still felt lost, dissatisfied and unsure where I belonged.',
      'Since childhood, I had been reading Swami Vivekananda, especially Rajyoga. I understood the importance of working with one’s own mind. The question became simple: if my intention was to serve people, why not choose the field that genuinely called me?',
    ],
  },
  {
    number: '03',
    label: 'The transformation',
    title: 'Psychology became more than a qualification. It became a way home.',
    paragraphs: [
      'Transitioning from engineering into psychology was not easy. I battled fears of starting late, not being good enough and whether I could truly help another person.',
      'I studied, offered pro-bono sessions, worked with suicide survivors and spent time in hospitals. Again and again, I saw that surface behaviour carries a deeper emotional logic. Understanding that logic can change a life.',
    ],
  },
];

const credentials = [
  { icon: Brain, title: 'Double Master’s', text: 'I/O Psychology and Clinical Psychology' },
  { icon: BadgeCheck, title: 'Cognitive Hypnotherapist', text: 'Diploma in Cognitive Hypnotic Psychotherapy' },
  { icon: GraduationCap, title: 'NLP Master Practitioner', text: 'Advanced Neuro-Linguistic Programming training' },
  { icon: Sparkles, title: 'Inner Child Healing', text: 'Specialised practitioner-led emotional work' },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-[#FFF8EF] text-[#18131B]">
      <section className="relative overflow-hidden bg-[#AEE4DF] px-5 py-16 md:px-10 md:py-24 lg:px-14 lg:py-28">
        <div className="absolute -left-64 -top-72 h-[620px] w-[620px] rounded-full border-[105px] border-[#64266F] opacity-95" />
        <div className="absolute -bottom-72 -right-44 h-[570px] w-[570px] rounded-full border-[92px] border-[#FF6333]" />

        <div className="relative z-10 mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#087F79]">The person behind the practice</span>
            <h1 className="mt-6 text-balance text-6xl font-bold leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-[7rem]">
              From chasing perfection to
              <span className="display-serif ml-3 block font-medium italic text-[#64266F]">facilitating peace.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#405B58] md:text-lg">
              My work was born from a personal question: why can someone understand everything intellectually and still feel trapped by the same emotional pattern?
            </p>
            <Link to="/contact" className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#18131B] px-6 py-4 text-sm font-bold text-white">
              Begin a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            <div className="absolute -left-6 bottom-6 h-[82%] w-[84%] rounded-[2.6rem] bg-[#FF6333]" />
            <div className="relative ml-auto aspect-[4/5] w-[90%] overflow-hidden rounded-[2.6rem] soft-shadow">
              <img src={portrait} alt="Omkar Pawar" className="h-full w-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-8 left-0 max-w-[270px] rounded-[1.7rem] bg-[#FFF8EF] p-6 card-shadow">
              <Quote className="mb-3 h-6 w-6 text-[#FF6333]" />
              <p className="display-serif text-xl font-medium leading-snug">The work became personal long before it became professional.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto grid max-w-[1260px] gap-14 lg:grid-cols-[.62fr_1.38fr]">
          <div className="lg:sticky lg:top-36 lg:self-start">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9A3F20]">My journey</span>
            <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Three chapters.
              <span className="display-serif block font-medium italic text-[#64266F]">One calling.</span>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-8 text-[#6D6267]">
              Not a polished origin story. A real movement from pressure, confusion and self-doubt toward a more grounded way of living and helping.
            </p>
          </div>

          <div className="grid gap-6">
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className={`rounded-[2.2rem] p-7 md:p-10 ${index === 1 ? 'bg-[#64266F] text-white' : 'border border-black/8 bg-white'}`}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <span className={`display-serif text-5xl italic ${index === 1 ? 'text-[#FF8B66]' : 'text-[#FF6333]'}`}>{chapter.number}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${index === 1 ? 'text-white/45' : 'text-[#8B7E83]'}`}>{chapter.label}</span>
                </div>
                <h3 className="mt-8 text-balance text-3xl font-bold leading-[1.08] tracking-[-0.045em] md:text-5xl">{chapter.title}</h3>
                <div className={`mt-7 grid gap-5 text-sm leading-7 md:grid-cols-2 ${index === 1 ? 'text-white/64' : 'text-[#6B6065]'}`}>
                  {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FF6333] px-5 py-24 text-white md:px-10 md:py-32 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <Quote className="mx-auto h-12 w-12 text-white/40" />
          <h2 className="text-balance display-serif mt-8 text-4xl font-medium leading-[1.06] md:text-7xl">
            “Every behaviour carries an intention. My job is to help you understand what it is protecting—and build a kinder way forward.”
          </h2>
          <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">Omkar Pawar</p>
        </motion.div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto max-w-[1360px]">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#087F79]">Professional foundation</span>
            <h2 className="mt-5 text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
              Human warmth,
              <span className="display-serif ml-3 font-medium italic text-[#64266F]">serious study.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <motion.article
                  key={credential.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`min-h-[310px] rounded-[2rem] p-7 ${index === 0 ? 'bg-[#AEE4DF]' : index === 1 ? 'bg-[#64266F] text-white' : 'border border-black/8 bg-white'}`}
                >
                  <span className={`flex h-13 w-13 items-center justify-center rounded-full ${index === 1 ? 'bg-white/12 text-[#FF8B66]' : 'bg-[#FFF8EF] text-[#FF6333]'}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-20 text-2xl font-bold tracking-[-0.035em]">{credential.title}</h3>
                  <p className={`mt-3 text-sm leading-6 ${index === 1 ? 'text-white/58' : 'text-[#6C6166]'}`}>{credential.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
