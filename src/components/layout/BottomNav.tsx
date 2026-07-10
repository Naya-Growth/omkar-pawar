import { BookOpen, HeartHandshake, Home, MessageCircle, UserRound } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/about', icon: UserRound, label: 'Story' },
  { path: '/services', icon: HeartHandshake, label: 'Work' },
  { path: '/content', icon: BookOpen, label: 'Insights' },
  { path: '/contact', icon: MessageCircle, label: 'Contact' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-black/10 bg-[#FFF8EF]/96 px-2 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-16px_40px_rgba(25,16,24,.10)] backdrop-blur-2xl md:hidden">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex min-w-[58px] flex-col items-center justify-center rounded-2xl px-2 py-2 text-[9px] font-bold uppercase tracking-[0.08em] transition-all active:scale-95 ${
              isActive ? 'bg-[#64266F] text-white' : 'text-[#776B70]'
            }`}
          >
            <Icon className="mb-1 h-4 w-4" strokeWidth={isActive ? 2.5 : 2} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
