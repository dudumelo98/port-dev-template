
import React, { useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  description, 
  icon, 
  tags,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Limit rotation angle
    const maxRotation = 8;
    const rotateX = (y / (rect.height / 2)) * -maxRotation;
    const rotateY = (x / (rect.width / 2)) * maxRotation;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  return (
    <div
      ref={cardRef}
      className={`p-6 overflow-hidden rounded-lg rotate-3d transition-all duration-300 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10">
        <div 
          className={`mb-4 text-[#64ffda] transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
        >
          {icon}
        </div>
        
        <h3 
          className="heading-sm mb-2 text-white"
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(15px)' }}
        >
          {title}
        </h3>
        
        <p 
          className="text-[#ccd6f6]/80 mb-6"
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(10px)' }}
        >
          {description}
        </p>
        
        <div 
          className="flex flex-wrap gap-2"
          style={{ transformStyle: 'preserve-3d', transform: 'translateZ(15px)' }}
        >
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className={`transition-all duration-300 border-[#64ffda]/30 text-[#64ffda] ${isHovered ? 'bg-[#64ffda]/10' : ''}`}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      {/* Card glow effect */}
      <div 
        className={`absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          boxShadow: `0 0 40px 2px rgba(100, 255, 218, 0.15), 
                     inset 0 0 40px 2px rgba(100, 255, 218, 0.05)`,
        }}
      />
    </div>
  );
};

export default SkillCard;
