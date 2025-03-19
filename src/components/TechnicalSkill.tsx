
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechnicalSkillProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

const TechnicalSkill: React.FC<TechnicalSkillProps> = ({ 
  name, 
  icon,
  className
}) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="text-[#64ffda]">{icon}</span>
      <span className="text-[#ccd6f6]">{name}</span>
    </div>
  );
};

export default TechnicalSkill;
