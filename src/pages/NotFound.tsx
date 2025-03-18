
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass-card px-12 py-16 max-w-lg text-center animate-fade-in">
        <h1 className="heading-lg mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="glass-card inline-flex items-center gap-2 px-6 py-3 bg-accent text-white hover:bg-accent/90 transition-all duration-300"
        >
          <HomeIcon size={18} />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
