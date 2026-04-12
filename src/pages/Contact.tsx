import { motion } from 'motion/react';
import { Mail, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';
import { buildWhatsAppUrl, siteConfig } from '../lib/site-config';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Contact() {
  return (
    <div className="overflow-x-hidden bg-[#FAF9F6] text-[#2A2A2A]">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <motion.span variants={fadeUp} className="text-[10px] uppercase tracking-[0.3em] text-[#8C7A6B] font-bold mb-6 block">
            Connect
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            Start Your <span className="italic text-[#8C7A6B]">Healing Journey</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-gray-600">
            Whether you're ready to apply for a program or just have a question, I'm here to help you take the next step.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Direct Contact Info - Emphasizing WhatsApp */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* WhatsApp Card (Primary) */}
            <motion.div variants={fadeUp} className="bg-[#25D366] p-10 md:p-12 rounded-[3rem] text-white shadow-lg shadow-[#25D366]/20 relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-bl from-white/20 to-transparent rounded-bl-full opacity-50 transition-transform group-hover:scale-110 duration-700"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-white mb-8">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl mb-4">Chat on WhatsApp</h3>
                <p className="text-white/90 font-light mb-8 text-lg">
                  Have a quick question before applying? Send me a direct message on WhatsApp for the fastest response.
                </p>
                <a href={buildWhatsAppUrl('Hi Omkar, I would like to know more about working with you.')} target="_blank" rel="noopener noreferrer" className="bg-white text-[#128C7E] px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                  Message Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Book Session Card */}
            <motion.div variants={fadeUp} className="bg-[#2A2A2A] p-10 md:p-12 rounded-[3rem] text-white shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-4">Apply to Join</h3>
                <p className="text-white/80 font-light mb-8">
                  Ready to dive in? Schedule your free 45-minute discovery call to see if we're a fit for a 1:1 container.
                </p>
                <a href={buildWhatsAppUrl('Hi Omkar, I would like to request a discovery call.')} target="_blank" rel="noopener noreferrer" className="bg-[#8C7A6B] text-white px-8 py-4 rounded-full text-sm font-bold tracking-wide hover:bg-[#7A6A5B] transition-colors inline-flex items-center gap-2">
                  Request a Call <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#8C7A6B] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-1">Email</p>
                  <p className="text-[#2A2A2A] font-medium">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center text-[#8C7A6B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C7A6B] mb-1">Location</p>
                  <p className="text-[#2A2A2A] font-medium">Global (Online via Meet)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[3rem] shadow-sm border border-black/5"
          >
            <h3 className="font-serif text-3xl text-[#2A2A2A] mb-8">Send an Inquiry</h3>
            <InquiryForm />
          </motion.div>

        </div>
      </section>
    </div>
  );
}
