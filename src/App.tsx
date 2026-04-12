import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import SuccessStories from './pages/SuccessStories';
import Content from './pages/Content';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="stories" element={<SuccessStories />} />
          <Route path="content" element={<Content />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      
      {/* Global Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-24 md:bottom-8 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-white text-[#2A2A2A] text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with Omkar
        </span>
      </a>
    </BrowserRouter>
  );
}
