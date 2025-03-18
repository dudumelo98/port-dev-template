
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SmoothImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "video" | "wide" | number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt,
  className = "",
  aspectRatio = "square",
  objectFit = "cover"
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Reset state when src changes
  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);
  
  // Calculate aspect ratio
  const getAspectStyle = () => {
    if (typeof aspectRatio === "number") {
      return { paddingTop: `${(1 / aspectRatio) * 100}%` };
    }
    
    switch (aspectRatio) {
      case "square":
        return { paddingTop: "100%" };
      case "portrait":
        return { paddingTop: "125%" };
      case "video":
        return { paddingTop: "56.25%" }; // 16:9
      case "wide":
        return { paddingTop: "42.85%" }; // 21:9
      default:
        return { paddingTop: "100%" };
    }
  };
  
  return (
    <div 
      className={cn("relative overflow-hidden bg-muted", className)}
      style={getAspectStyle()}
    >
      {/* Loading shimmer */}
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-muted">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
          <span className="text-muted-foreground">Failed to load image</span>
        </div>
      )}
      
      {/* Image */}
      <img 
        src={src}
        alt={alt}
        className={cn(
          "absolute inset-0 w-full h-full transition-opacity duration-500",
          objectFit === "cover" && "object-cover",
          objectFit === "contain" && "object-contain",
          objectFit === "fill" && "object-fill",
          objectFit === "none" && "object-none",
          objectFit === "scale-down" && "object-scale-down",
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default SmoothImage;
