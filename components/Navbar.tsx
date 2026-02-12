import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMenu }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '#menu') {
      e.preventDefault();
      onOpenMenu();
      setMobileMenuOpen(false);
    } else if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    } else {
      // Allow default behavior for external links
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Specials', href: '#specials' },
    { name: 'Location', href: 'https://www.google.com/maps/dir/?api=1&destination=Oklahoma+Smoke+Grill+Stockyards+City', external: true },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${
        scrolled 
          ? 'bg-charcoal-900/95 backdrop-blur-sm md:backdrop-blur-md shadow-lg py-3 border-b border-ember/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-ember/10 p-2 rounded-full border border-ember/20 group-hover:bg-ember/20 transition-colors">
            <Flame className="text-ember w-6 h-6 md:w-8 md:h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-western text-xl md:text-2xl text-parchment tracking-wider leading-none group-hover:text-ember transition-colors">
              OKC Smoke
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              onClick={(e) => handleNavClick(link.href, e)}
              className="font-body font-bold text-parchment/80 hover:text-ember transition-colors uppercase tracking-widest text-sm relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-ember after:transition-all hover:after:w-full cursor-pointer"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+14056737218" 
            className="px-6 py-2 bg-ember hover:bg-ember-light text-white font-bold rounded-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-ember/20 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call to Order
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-parchment hover:text-ember transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={isMobile ? { opacity: 0 } : { opacity: 0, x: '100%' }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={isMobile ? { opacity: 0 } : { opacity: 0, x: '100%' }}
            transition={isMobile 
              ? { duration: 0.2, ease: 'easeOut' }
              : { type: "spring", damping: 25, stiffness: 200 }
            }
            className="fixed top-0 left-0 w-full h-screen bg-charcoal-900 z-[9999] flex flex-col items-center justify-center md:hidden"
            style={isMobile ? { willChange: 'opacity' } : { willChange: 'transform, opacity' }}
          >
            <button 
              className="absolute top-6 right-6 text-parchment/50 hover:text-ember transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="font-western text-2xl text-parchment hover:text-ember transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px w-24 bg-ember/30 my-4" />
              <p className="text-parchment/60 font-body text-center px-8">
                Located in the Historic Livestock Exchange
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};