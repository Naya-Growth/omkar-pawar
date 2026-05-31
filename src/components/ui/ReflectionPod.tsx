import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function ReflectionPod({ quote, author, role, initials }: { quote: string, author: string, role?: string, initials?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-surface p-8 md:p-16 rounded-lg relative overflow-hidden text-center border border-outline-variant/15 max-w-5xl mx-auto shadow-xl"
    >
      <Quote className="text-primary/40 w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-10 mx-auto fill-current relative z-10" />
      <p className="font-headline text-2xl md:text-4xl italic leading-relaxed text-on-surface mb-8 md:mb-12 relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center justify-center gap-4 relative z-10">
        {initials && <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-fixed flex items-center justify-center font-bold text-primary text-sm md:text-base shrink-0">{initials}</div>}
        <div className="text-left">
          <cite className="font-label text-sm md:text-base uppercase tracking-[0.2em] text-secondary font-bold not-italic block">{author}</cite>
          {role && <span className="text-xs md:text-sm text-on-surface-variant mt-1 block">{role}</span>}
        </div>
      </div>
    </motion.div>
  );
}
