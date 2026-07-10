import { motion } from 'motion/react';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const stories = [
  {
    category: 'Anxiety reduction',
    quote: 'I was constantly living in my head, overthinking every small detail at work and home. After the 28-day program, I finally know what peace feels like. I can actually switch off.',
    author: 'S. · Tech executive',
  },
  {
    category: 'Emotional breakthrough',
    quote: 'Post-divorce, I was battling severe self-doubt and anger. The work helped me understand my inner-child wounds and reframe my perspective. I feel capable of building life again.',
    author: 'P. · Entrepreneur',
  },
  {
    category: 'Relationship patterns',
    quote: 'I kept repeating the same cycles in relationships. The sessions helped me understand my attachment wounds. For the first time, I feel more secure and less reactive.',
    author: 'M. · Creative professional',
  },
  {
    category: 'Confidence',
    quote: 'I looked successful on the outside but felt like an imposter inside. The process shifted the way I see myself, and I now lead with much more grounded confidence.',
    author: 'R. · Sales leader',
  },
  {
    category: 'Inner-child work',
    quote: 'I did not realise how much childhood was shaping my adult reactions. Understanding those old needs was one of the most liberating experiences of my life.',
    author: 'A. · Doctor',
  },
  {
    category: 'Emotional regulation',
    quote: 'I used to react to everything. Now I can pause and respond. The emotional agency I have gained has changed both my work and my closest relationships.',
    author: 'K. · Founder',
  },
];

export default function SuccessStories() {
  return (
    <div className="overflow-hidden bg-[#FFF8EF] text-[#18131B]">
      <section className="relative overflow-hidden bg-[#64266F] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14 lg:py-32">
        <div className="absolute -left-60 -top-72 h-[590px] w-[590px] rounded-full border-[96px] border-[#FF6333]" />
        <div className="absolute -bottom-64 -right-44 h-[540px] w-[540px] rounded-full border-[90px] border-[#AEE4DF] opacity-70" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#FFAD93]">Client reflections</span>
          <h1 className="mt-6 text-balance text-6xl font-bold leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-[7.4rem]">
            Change sounds different in
            <span className="display-serif ml-3 block font-medium italic text-[#AEE4DF]">every person’s voice.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/64 md:text-lg">
            Anonymised reflections from people who chose to understand their patterns, practise new responses and build a steadier relationship with themselves.
          </p>
        </motion.div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto grid max-w-[1360px] gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => (
            <motion.blockquote
              key={story.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`flex min-h-[410px] flex-col rounded-[2.2rem] p-7 md:p-9 ${
                index === 1 || index === 4
                  ? 'bg-[#FF6333] text-white'
                  : index === 2
                    ? 'bg-[#AEE4DF] text-[#18131B]'
                    : index === 3
                      ? 'bg-[#64266F] text-white'
                      : 'border border-black/8 bg-white'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <Quote className={`h-8 w-8 ${index === 3 ? 'text-[#AEE4DF]' : index === 1 || index === 4 ? 'text-white/55' : 'text-[#FF6333]'}`} />
                <span className={`rounded-full px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] ${
                  index === 1 || index === 3 || index === 4 ? 'bg-white/12 text-white/72' : 'bg-[#FFF8EF] text-[#7A6D72]'
                }`}>
                  {story.category}
                </span>
              </div>
              <p className="display-serif mt-10 text-2xl font-medium leading-[1.25] md:text-[1.7rem]">“{story.quote}”</p>
              <footer className={`mt-auto border-t pt-6 text-[10px] font-bold uppercase tracking-[0.14em] ${
                index === 1 || index === 3 || index === 4 ? 'border-white/16 text-white/52' : 'border-black/8 text-[#7B6E73]'
              }`}>
                {story.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32 lg:px-14">
        <div className="relative mx-auto overflow-hidden rounded-[2.6rem] bg-[#18131B] px-8 py-16 text-white md:px-14 md:py-20 lg:max-w-[1260px]">
          <div className="absolute -bottom-48 -right-36 h-[390px] w-[390px] rounded-full border-[70px] border-[#FF6333]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF9A7A]">Your story does not need to stay where it is</span>
              <h2 className="mt-5 text-balance text-5xl font-bold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                Start with curiosity,
                <span className="display-serif ml-3 font-medium italic text-[#AEE4DF]">not pressure.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                A clarity call is simply a place to explain what has been difficult and understand whether working together makes sense.
              </p>
            </div>
            <Link to="/contact" className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-[#18131B]">
              Book a clarity call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
