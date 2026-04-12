import { Link } from 'react-router-dom';
import { buildWhatsAppUrl, siteConfig } from '../../lib/site-config';

export default function Footer() {
  return (
    <footer className="w-full mt-20">
      {/* Top CTA Section */}
      <div className="bg-[#60523f] text-white py-24 px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 max-w-3xl mx-auto leading-tight">
          Your sanctuary for growth awaits.
        </h2>
        <p className="text-white/80 mb-10 max-w-xl mx-auto text-sm md:text-base font-light">
          Limited coaching slots available for the upcoming quarter. Secure your introductory session today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="bg-white text-[#60523f] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
            Book Your Consultation
          </Link>
          <a href={buildWhatsAppUrl('Hi Omkar, I would like to connect with you on WhatsApp.')} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors">
            Message on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Links Section */}
      <div className="bg-[#d4c5b0] text-[#60523f] py-16 px-6 text-center pb-32 md:pb-16">
        <h3 className="font-serif text-xl italic mb-8">Freedom Innerwellbeing</h3>
        <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-[0.15em] font-bold mb-8 opacity-80">
          <Link to="/privacy-policy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
          <Link to="/faq" className="hover:opacity-100 transition-opacity">FAQ</Link>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        </div>
        <p className="text-[9px] uppercase tracking-widest opacity-60">
          © {new Date().getFullYear()} Omkar Pawar | Freedom Innerwellbeing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
