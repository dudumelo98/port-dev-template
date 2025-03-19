
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AchievementProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
}

const Achievement: React.FC<AchievementProps> = ({ 
  title, 
  description, 
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
        "bg-[#0a192f] p-6 rounded-lg border border-[#64ffda]/20 hover:border-[#64ffda]/40 transition-all",
        "hover:shadow-[0_0_20px_rgba(100,255,218,0.1)]",
        className
      )}
    >
      <div className="flex justify-center mb-4 text-[#64ffda]">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-center mb-3">{title}</h3>
      <p className="text-sm text-center text-[#ccd6f6]/80">{description}</p>
    </motion.div>
  );
};

export default Achievement;
