import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";

import { BrandLockup } from "../BrandMark";
import { useLeadWizard } from "../LeadWizardProvider";
import { buildWhatsAppUrl, siteConfig } from "../../lib/site-config";

export default function TopNav() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openLeadWizard } = useLeadWizard();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/stories", label: "Stories" },
    { path: "/content", label: "Content" },
    { path: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#FFF9EF]/92 shadow-[0_10px_35px_rgba(88,62,34,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-3 md:px-12">
        <Link to="/" className="min-w-0 shrink" aria-label="Go to Omkar Pawar home">
          <BrandLockup compact className="min-w-0" />
        </Link>

        <div className="hidden items-center gap-6 rounded-full border border-[#1A1A1A]/6 bg-white/58 px-5 py-2 shadow-sm md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`border-b-2 pb-1 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                  active
                    ? "border-[#8C6A44] text-[#8C6A44]"
                    : "border-transparent text-gray-500 hover:text-[#2A2A2A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <motion.div
            whileHover={{ rotateY: 4, y: -1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="flex overflow-hidden rounded-full border border-[#1A1A1A]/8 bg-white/88 shadow-[0_14px_38px_rgba(88,62,34,0.1)]"
          >
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 min-w-[132px] items-center justify-center gap-2 border-r border-[#1A1A1A]/6 px-3"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_110%,#FEDA75_0%,#FA7E1E_28%,#D62976_54%,#962FBF_76%,#4F5BD5_100%)] text-white">
                <Instagram className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D62976]">
                Instagram
              </span>
            </a>
            <a
              href={buildWhatsAppUrl("Hi Omkar, I would like to connect with you on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 min-w-[124px] items-center justify-center gap-2 px-3"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-white">
                <MessageCircle className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#128C4A]">
                WhatsApp
              </span>
            </a>
          </motion.div>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-[#8C6A44] px-5 text-xs font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_14px_32px_rgba(140,106,68,0.23)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#765636]"
          >
            Book Session
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => openLeadWizard()}
            className="hidden h-11 items-center rounded-full bg-[#8C6A44] px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:inline-flex md:hidden"
          >
            Direction
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/5 bg-white/90 text-[#2A2A2A]"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-black/5 bg-[#FFF9EF] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#EBC85B]/22 text-[#8C6A44]"
                    : "text-gray-500 hover:bg-white hover:text-[#2A2A2A]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 grid gap-3">
            <button
              type="button"
              onClick={() => {
                closeMenu();
                openLeadWizard();
              }}
              className="inline-flex items-center justify-center rounded-full bg-[#8C6A44] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Find My Next Step
            </button>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/5 bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#2A2A2A]"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
            <a
              href={buildWhatsAppUrl("Hi Omkar, I would like to know more about working with you.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#128C7E]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
