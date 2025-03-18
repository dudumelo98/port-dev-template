
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <nav className="flex space-x-6">
            <Link 
              to="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <a 
              href="#skills" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
