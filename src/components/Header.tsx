
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Training", href: "#training" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-lg' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-gradient"
          >
            Deep Baro
          </motion.div>

          {isMobile ? (
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          ) : (
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium hover:text-accent transition-colors animated-underline"
                >
                  {item.label}
                </a>
              ))}
              <div className="ml-4 flex items-center space-x-2">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:de3p.me@gmail.com">
                  <Button variant="ghost" size="icon" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </motion.nav>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 py-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-lg"
          >
            <nav className="flex flex-col space-y-2 px-4">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="py-2 text-sm font-medium hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex justify-start space-x-4 border-t border-gray-200 dark:border-gray-700">
                <a href="https://github.com/mrdeeeeep" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7311336550540161024/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:de3p.me@gmail.com">
                  <Button variant="ghost" size="icon" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
