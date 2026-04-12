import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function TopNav() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/stories', label: 'Stories' },
    { path: '/content', label: 'Content' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#FAF9F6]/90 backdrop-blur-md sticky top-0 z-50 w-full border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold font-serif text-[#2A2A2A]">Omkar Pawar</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`text-[11px] uppercase tracking-[0.15em] font-bold transition-colors hover:text-[#8C7A6B] ${location.pathname === item.path ? 'text-[#8C7A6B] border-b-2 border-[#8C7A6B] pb-1' : 'text-gray-500'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="/contact" className="bg-[#2A2A2A] text-white px-7 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#8C7A6B] transition-colors">
            Book a Call
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="text-[#2A2A2A] w-10 h-10 rounded-full border border-black/5 bg-white/80 flex items-center justify-center"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="md:hidden border-t border-black/5 bg-[#FAF9F6] px-6 pb-6">
          <div className="flex flex-col gap-2 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] transition-colors ${
                  location.pathname === item.path
                    ? 'bg-[#8C7A6B]/10 text-[#8C7A6B]'
                    : 'text-gray-500 hover:bg-white hover:text-[#2A2A2A]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
