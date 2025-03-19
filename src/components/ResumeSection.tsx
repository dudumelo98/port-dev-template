
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ResumeSectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children,
  className
}) => {
  return (
    <section id={id} className={cn("py-20 relative", className)}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <p className="text-[#64ffda] uppercase tracking-wider text-sm font-medium mb-3">{title}</p>
          {subtitle && <h2 className="heading-lg mb-6">{subtitle}</h2>}
          {!subtitle && <h2 className="heading-lg mb-6">{title}</h2>}
        </motion.div>
        
        {children}
      </div>
    </section>
  );
};

export default ResumeSection;
