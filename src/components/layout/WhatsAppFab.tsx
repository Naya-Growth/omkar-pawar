import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhatsAppFab() {
  return (
    <Link
      to="/contact"
      className="group fixed bottom-28 right-5 z-40 hidden items-center gap-3 rounded-full bg-[#FF6333] p-2 pr-5 text-white shadow-[0_18px_45px_rgba(255,99,51,.32)] transition-all hover:-translate-y-1 hover:bg-[#E94D1C] md:flex"
      aria-label="Contact Omkar"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/16">
        <MessageCircle className="h-5 w-5" />
      </span>
      <span className="text-xs font-bold">Talk to Omkar</span>
    </Link>
  );
}
