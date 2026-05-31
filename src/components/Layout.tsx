import { Outlet } from 'react-router-dom';
import TopNav from './layout/TopNav';
import BottomNav from './layout/BottomNav';
import Footer from './layout/Footer';
import WhatsAppFab from './layout/WhatsAppFab';
import ScrollProgress from './ScrollProgress';

export default function Layout() {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col">
      <ScrollProgress />
      <TopNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <WhatsAppFab />
    </div>
  );
}

