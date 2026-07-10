import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Linkedin, Mail, MessageCircle, ShieldCheck } from 'lucide-react';

const contactEmail = 'hello@omkarpawar.com';

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const concern = String(form.get('concern') ?? '').trim();
    const message = String(form.get('message') ?? '').trim();

    const subject = encodeURIComponent(`Clarity call enquiry from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPrimary concern: ${concern}\n\nWhat I am experiencing:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="overflow-hidden bg-[#FFF8EF] text-[#18131B]">
      <section className="relative overflow-hidden bg-[#AEE4DF] px-5 py-20 md:px-10 md:py-28 lg:px-14 lg:py-32">
        <div className="absolute -left-64 -top-72 h-[590px] w-[590px] rounded-full border-[98px] border-[#64266F]" />
        <div className="absolute -bottom-64 -right-40 h-[520px] w-[520px] rounded-full border-[88px] border-[#FF6333]" />
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 mx-auto max-w-5xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#087F79]">Start here</span>
          <h1 className="mt-6 text-balance text-6xl font-bold leading-[0.92] tracking-[-0.065em] md:text-8xl lg:text-[7.2rem]">
            You do not need the perfect words to ask for
            <span className="display-serif ml-3 block font-medium italic text-[#64266F]">support.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[#405D59] md:text-lg">
            Share what has been difficult, what you have tried and what you hope could change. The first conversation is for clarity and fit.
          </p>
        </motion.div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="mx-auto grid max-w-[1360px] gap-8 lg:grid-cols-[.78fr_1.22fr]">
          <div className="grid content-start gap-5">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-[2.2rem] bg-[#FF6333] p-7 text-white md:p-9">
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-white/15"><MessageCircle className="h-6 w-6" /></span>
              <h2 className="mt-16 text-4xl font-bold leading-[1] tracking-[-0.05em]">Book a clarity call</h2>
              <p className="mt-5 text-sm leading-7 text-white/72">A focused introductory conversation to understand what you are facing and whether one of Omkar’s pathways is appropriate.</p>
              <a href={`mailto:${contactEmail}?subject=${encodeURIComponent('Clarity call enquiry')}`} className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#18131B]">
                Request a call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.article>

            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="rounded-[2.2rem] bg-[#64266F] p-7 text-white md:p-9">
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-white/12"><ShieldCheck className="h-6 w-6 text-[#AEE4DF]" /></span>
              <h2 className="mt-12 text-3xl font-bold tracking-[-0.04em]">What to expect</h2>
              <div className="mt-6 grid gap-4 text-sm leading-6 text-white/66">
                <p>• A private online conversation.</p>
                <p>• No pressure to enrol during the call.</p>
                <p>• An honest discussion about fit and next steps.</p>
                <p>• Referral elsewhere when the need falls outside this scope.</p>
              </div>
            </motion.article>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href="https://instagram.com/lifecoachomkar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-black/8 bg-white p-4 text-sm font-bold transition-colors hover:border-[#FF6333] hover:text-[#FF6333]">
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a href="https://www.linkedin.com/in/coach-omkarpawar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl border border-black/8 bg-white p-4 text-sm font-bold transition-colors hover:border-[#64266F] hover:text-[#64266F]">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2.5rem] border border-black/8 bg-white p-7 card-shadow md:p-12"
          >
            <div className="flex flex-col gap-5 border-b border-black/8 pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6333]">Send an enquiry</span>
                <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] md:text-5xl">Tell me what is going on.</h2>
              </div>
              <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#64266F]">
                <Mail className="h-4 w-4" /> {contactEmail}
              </a>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#786C71]">
                  Your name
                  <input name="name" required type="text" autoComplete="name" className="rounded-2xl border border-black/10 bg-[#FFF8EF] px-5 py-4 text-sm font-medium normal-case tracking-normal text-[#18131B] outline-none transition-shadow focus:border-[#64266F] focus:ring-4 focus:ring-[#64266F]/10" placeholder="What should I call you?" />
                </label>
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#786C71]">
                  Email address
                  <input name="email" required type="email" autoComplete="email" className="rounded-2xl border border-black/10 bg-[#FFF8EF] px-5 py-4 text-sm font-medium normal-case tracking-normal text-[#18131B] outline-none transition-shadow focus:border-[#64266F] focus:ring-4 focus:ring-[#64266F]/10" placeholder="you@example.com" />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#786C71]">
                  Phone number
                  <input name="phone" type="tel" autoComplete="tel" className="rounded-2xl border border-black/10 bg-[#FFF8EF] px-5 py-4 text-sm font-medium normal-case tracking-normal text-[#18131B] outline-none transition-shadow focus:border-[#64266F] focus:ring-4 focus:ring-[#64266F]/10" placeholder="Include country code" />
                </label>
                <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#786C71]">
                  Primary concern
                  <select name="concern" className="rounded-2xl border border-black/10 bg-[#FFF8EF] px-5 py-4 text-sm font-medium normal-case tracking-normal text-[#18131B] outline-none transition-shadow focus:border-[#64266F] focus:ring-4 focus:ring-[#64266F]/10" defaultValue="">
                    <option value="" disabled>Select one</option>
                    <option>Anxiety and overthinking</option>
                    <option>Emotional triggers</option>
                    <option>Inner-child wounds</option>
                    <option>Relationship patterns</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#786C71]">
                What would you like support with?
                <textarea name="message" required rows={7} className="resize-none rounded-[1.5rem] border border-black/10 bg-[#FFF8EF] px-5 py-4 text-sm font-medium normal-case leading-7 tracking-normal text-[#18131B] outline-none transition-shadow focus:border-[#64266F] focus:ring-4 focus:ring-[#64266F]/10" placeholder="You can be brief. Share what has been difficult, how long it has been happening and what you hope might change." />
              </label>

              <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
                <p className="max-w-lg text-xs leading-5 text-[#7B7074]">Submitting opens your email application with the enquiry pre-filled. No sensitive information is stored by this website.</p>
                <button type="submit" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#18131B] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#64266F]">
                  Prepare enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#24172A] px-5 py-20 text-white md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1260px] gap-10 md:grid-cols-3">
          {[
            ['Is this emergency support?', 'No. This website and the offered programmes are not a crisis or emergency service. Contact local emergency support when immediate help is required.'],
            ['Are sessions online?', 'The current website describes the work as online, allowing conversations across locations through video calls.'],
            ['Do I need to choose a programme first?', 'No. The clarity call exists to understand the concern and discuss whether any available pathway is suitable.'],
          ].map(([question, answer]) => (
            <article key={question} className="border-t border-white/16 pt-6">
              <h3 className="text-xl font-bold tracking-[-0.025em]">{question}</h3>
              <p className="mt-4 text-sm leading-7 text-white/55">{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
