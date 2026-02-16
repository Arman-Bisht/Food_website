import React, { useState, useEffect } from 'react';
import { Phone, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const StickyMobileFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-charcoal-900 border-t border-ember/30 shadow-[0_-5px_20px_rgba(0,0,0,0.5)] p-3 pb-safe"
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <a 
                href="tel:+14056737218"
                className="flex-1 bg-ember text-white py-3 rounded-sm font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 active:bg-ember-dark shadow-lg"
              >
                <Phone size={18} />
                Call to Order
              </a>
              <a 
                href="#menu"
                className="flex-shrink-0 bg-charcoal-800 text-parchment border border-white/10 py-3 px-4 rounded-sm flex items-center justify-center active:bg-charcoal-700"
              >
                <UtensilsCrossed size={18} />
              </a>
            </div>
            <p className="text-center text-parchment/50 text-[10px] italic font-body">
              Call to check today's availability
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};