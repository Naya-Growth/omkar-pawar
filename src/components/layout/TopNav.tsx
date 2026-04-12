import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MessageCircle, X } from "lucide-react";

import { BrandLockup } from "../BrandMark";
import ShareWebsiteButton from "../ShareWebsiteButton";
import { useLeadWizard } from "../LeadWizardProvider";
import { buildWhatsAppUrl } from "../../lib/site-config";

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
    <nav className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#FAF9F6]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-4 md:px-12">
        <Link to="/" className="min-w-0 shrink" aria-label="Go to Omkar Pawar home">
          <BrandLockup compact className="min-w-0" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`border-b-2 pb-1 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors ${
                  active
                    ? "border-[#8C7A6B] text-[#8C7A6B]"
                    : "border-transparent text-gray-500 hover:text-[#2A2A2A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ShareWebsiteButton
            className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#2A2A2A] transition-colors hover:border-[#8C7A6B]/30 hover:text-[#8C7A6B]"
            label="Share"
          />
          <button
            type="button"
            onClick={() => openLeadWizard()}
            className="inline-flex items-center gap-2 rounded-full bg-[#2A2A2A] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#8C7A6B]"
          >
            Guided fit check
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => openLeadWizard()}
            className="inline-flex h-11 items-center rounded-full bg-[#2A2A2A] px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
          >
            Start
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
        <div className="border-t border-black/5 bg-[#FAF9F6] px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                  location.pathname === item.path
                    ? "bg-[#8C7A6B]/10 text-[#8C7A6B]"
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
              className="inline-flex items-center justify-center rounded-full bg-[#2A2A2A] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Open guided fit check
            </button>
            <ShareWebsiteButton
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/5 bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#2A2A2A]"
              label="Share website"
            />
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
