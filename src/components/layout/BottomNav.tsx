import { Link, useLocation } from 'react-router-dom';
import { Home, Leaf, User, Sparkles, BookOpen, MessageCircle } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/services', icon: Leaf, label: 'Services' },
    { path: '/stories', icon: Sparkles, label: 'Stories' },
    { path: '/contact', icon: MessageCircle, label: 'Contact' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#FBF4E6]/95 backdrop-blur-2xl z-50 rounded-t-[2rem] border-t border-black/5 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 ${
              isActive
                ? 'bg-[#8C6A44]/10 text-[#8C6A44] rounded-full px-4 py-1'
                : 'text-gray-400 hover:text-[#8C6A44]'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? '' : 'mb-1'}`} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[9px] uppercase tracking-widest font-bold mt-1">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
