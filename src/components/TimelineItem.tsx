
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  isLast?: boolean;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  isLast = false,
  index
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div 
      ref={itemRef} 
      className={cn(
        "relative grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-6",
        isVisible ? "opacity-100" : "opacity-0",
        "transition-opacity duration-700 ease-out"
      )}
      style={{ 
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Date */}
      <div className="text-right">
        <span className="caption text-muted-foreground">{date}</span>
      </div>
      
      {/* Content */}
      <div className="relative pb-10">
        {/* Timeline line */}
        {!isLast && (
          <div className="absolute top-3 left-[-20px] md:left-[-35px] w-[1px] h-full bg-border" />
        )}
        
        {/* Timeline dot */}
        <div className={cn(
          "absolute top-[10px] left-[-24px] md:left-[-39px] h-[9px] w-[9px] rounded-full",
          "border-2 border-accent bg-background",
          isVisible && "animate-pulse"
        )} />
        
        {/* Content */}
        <div className={cn(
          "glass-card p-6 transform",
          isVisible ? "translate-x-0" : "translate-x-10",
          "transition-transform duration-700 ease-out",
        )}
          style={{ 
            transitionDelay: `${(index * 200) + 200}ms`,
            boxShadow: isVisible 
              ? "0 0 0 1px rgba(100, 150, 220, 0.3), 0 4px 20px -2px rgba(100, 150, 220, 0.1)" 
              : "none"
          }}
        >
          <h3 className="heading-sm mb-1">{title}</h3>
          <h4 className="text-lg font-medium text-accent mb-3">{company}</h4>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
