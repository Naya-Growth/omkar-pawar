import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function TopNav() {
  const location = useLocation();
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
          <Menu className="text-[#2A2A2A] w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
