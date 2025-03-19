
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Contact', path: '/#contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing paths
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5",
        isScrolled ? "glass" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo - removed the text "Portfolio" */}
        <Link 
          to="/" 
          className="text-xl font-semibold tracking-tight"
          aria-label="Home"
        >
          {/* Intentionally left empty to remove "Portfolio" text */}
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent link-hover",
                location.pathname === item.path && "text-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden",
          "transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="w-3/4 ml-auto h-full glass flex flex-col p-6">
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <XIcon size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-accent",
                  location.pathname === item.path && "text-accent"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
