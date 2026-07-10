import { useState } from 'react';
import { ArrowUpRight, Instagram, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/about', label: 'My Story' },
  { path: '/services', label: 'Work With Me' },
  { path: '/stories', label: 'Client Stories' },
  { path: '/content', label: 'Insights' },
];

export default function TopNav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden border-b border-white/10 bg-[#18131B] px-6 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 md:block">
        Freedom Inner Wellbeing · Online sessions across India and worldwide
      </div>

      <nav className="sticky top-0 z-50 w-full border-b border-black/8 bg-[#FFF8EF]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-4 md:px-10 lg:px-14">
          <Link to="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#64266F] text-sm font-bold text-white transition-transform duration-300 group-hover:rotate-6">
              OP
            </span>
            <span className="min-w-0 leading-none">
              <strong className="block truncate text-lg font-bold tracking-[-0.04em] text-[#18131B] md:text-xl">
                Omkar Pawar
              </strong>
              <span className="mt-1 block truncate text-[9px] font-bold uppercase tracking-[0.18em] text-[#7A6A65]">
                Freedom Inner Wellbeing
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                    active ? 'text-[#64266F]' : 'text-[#3D3439] hover:text-[#FF6333]'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-[#FF6333] transition-transform duration-300 ${
                      active ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://instagram.com/lifecoachomkar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Omkar Pawar on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-[#18131B] transition-colors hover:border-[#64266F] hover:bg-[#64266F] hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#FF6333] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#E94D1C] hover:shadow-lg"
            >
              Book a clarity call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#18131B] text-white md:hidden"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-black/8 bg-[#FFF8EF] px-5 pb-7 pt-4 md:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-black/8 bg-white px-5 py-4 text-sm font-bold text-[#18131B]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-between rounded-2xl bg-[#FF6333] px-5 py-4 text-sm font-bold text-white"
              >
                Book a clarity call
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
