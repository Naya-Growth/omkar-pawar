import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LeadWizardProvider } from './components/LeadWizardProvider';
import SeoController from './components/SeoController';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import SuccessStories from './pages/SuccessStories';
import Content from './pages/Content';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Faq from './pages/Faq';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LeadWizardProvider>
        <SeoController />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="stories" element={<SuccessStories />} />
            <Route path="content" element={<Content />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="faq" element={<Faq />} />
          </Route>
        </Routes>
      </LeadWizardProvider>
    </BrowserRouter>
  );
}




