import { ArrowRight, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#18131B] text-white">
      <section className="relative border-b border-white/10 px-6 py-24 md:px-12 md:py-32">
        <div className="absolute -left-32 -top-44 h-[420px] w-[420px] rounded-full border-[74px] border-[#64266F] opacity-70" />
        <div className="absolute -bottom-48 -right-32 h-[430px] w-[430px] rounded-full border-[82px] border-[#FF6333] opacity-90" />

        <div className="relative z-10 mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF9A7A]">
              Begin with one honest conversation
            </span>
            <h2 className="text-balance text-5xl font-bold leading-[0.98] tracking-[-0.06em] md:text-7xl lg:text-[6.5rem]">
              You do not have to keep
              <span className="display-serif ml-3 font-medium italic text-[#FF8B66]">carrying it alone.</span>
            </h2>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#18131B] transition-transform hover:-translate-y-1"
          >
            Book a clarity call
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6333] text-white">
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <section className="px-6 pb-32 pt-14 md:px-12 md:pb-14">
        <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6333] text-sm font-bold">OP</span>
              <span>
                <strong className="block text-xl tracking-[-0.04em]">Omkar Pawar</strong>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Freedom Inner Wellbeing
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              Psychology-informed emotional wellbeing support for anxiety, overthinking, inner-child wounds and recurring relationship patterns.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Explore</p>
              <div className="grid gap-3 text-sm font-medium text-white/75">
                <Link to="/about" className="hover:text-white">My Story</Link>
                <Link to="/services" className="hover:text-white">Work With Me</Link>
                <Link to="/stories" className="hover:text-white">Client Stories</Link>
                <Link to="/content" className="hover:text-white">Insights</Link>
              </div>
            </div>
            <div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">Connect</p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/lifecoachomkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[#FF6333] hover:bg-[#FF6333] hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/coach-omkarpawar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/75 transition-colors hover:border-[#FF6333] hover:bg-[#FF6333] hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-[1320px] flex-col gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.12em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Omkar Pawar. All rights reserved.</p>
          <p className="max-w-2xl normal-case tracking-normal text-white/32">
            This website is not an emergency or crisis-support service. Seek immediate local help when urgent mental-health support is required.
          </p>
        </div>
      </section>
    </footer>
  );
}
