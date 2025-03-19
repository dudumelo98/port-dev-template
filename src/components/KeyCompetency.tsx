
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface KeyCompetencyProps {
  title: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}

const KeyCompetency: React.FC<KeyCompetencyProps> = ({ 
  title, 
  icon,
  index,
  className 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "bg-[#0a192f]/80 p-4 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all",
        "flex items-center gap-3",
        className
      )}
    >
      <div className="bg-[#64ffda]/10 p-2 rounded-full text-[#64ffda]">
        {icon}
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 size={16} className="text-[#64ffda]" />
        <span className="text-[#ccd6f6]">{title}</span>
      </div>
    </motion.div>
  );
};

export default KeyCompetency;
