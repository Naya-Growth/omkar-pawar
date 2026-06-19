import { ReactNode } from 'react';

export default function Section({ children, className = '', id }: { children: ReactNode, className?: string, id?: string }) {
  return (
    <section id={id} className={`py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}




