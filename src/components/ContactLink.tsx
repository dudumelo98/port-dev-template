
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ 
  href, 
  icon, 
  label,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "glass-card inline-flex items-center gap-3 px-5 py-4 group relative overflow-hidden",
        "transition-all duration-300 hover:shadow-lg", 
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
    >
      <span 
        className={cn(
          "text-accent transition-all duration-500 ease-out transform",
          isHovered ? "rotate-[360deg] scale-110" : "rotate-0"
        )}
      >
        {icon}
      </span>
      
      <span className="font-medium">{label}</span>
      
      {/* Shine effect */}
      <span
        className={cn(
          "absolute inset-0 w-full h-full",
          "transition-opacity duration-1000",
          isHovered ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 0.6s ease-out"
        }}
      />
    </a>
  );
};

export default ContactLink;
