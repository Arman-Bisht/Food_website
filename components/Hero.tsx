import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowDown, Phone } from 'lucide-react';

interface HeroProps {
  onOpenMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like fixed position */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: "url('/unnamed.webp')",
            filter: "brightness(0.5) contrast(1.1)" 
          }}
        />
        <div className="absolute inset-0 bg-charcoal-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="inline-flex items-center gap-2 bg-charcoal-800/80 backdrop-blur-sm px-4 py-2 rounded-full border border-ember/30 mb-6"
        >
          <MapPin className="w-4 h-4 text-ember" />
          <span className="text-parchment/90 text-xs md:text-sm font-bold tracking-wider uppercase">
            Historic Livestock Exchange Building
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="font-western text-5xl md:text-7xl lg:text-9xl text-parchment mb-4 drop-shadow-2xl leading-none"
        >
          Oklahoma
          <br />
          <span className="text-ember text-4xl md:text-6xl lg:text-8xl">Smoke Grill</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="font-body text-lg md:text-2xl text-parchment/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Authentic BBQ in the heart of the Historic Stockyards City.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 3 }}
           className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <button 
              onClick={onOpenMenu}
              className="px-8 py-4 bg-transparent border-2 border-parchment/30 hover:border-ember text-parchment hover:text-ember font-bold text-lg rounded-sm uppercase tracking-widest transition-all hover:scale-105 backdrop-blur-sm"
            >
              View Menu
            </button>
            <a 
              href="tel:4056737218"
              className="px-8 py-4 bg-ember hover:bg-ember-light text-white font-bold text-lg rounded-sm uppercase tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(204,85,0,0.4)] flex items-center justify-center gap-2 min-w-[200px]"
            >
              <Phone className="w-5 h-5" />
              Call to Order
            </a>
          </div>
          <p className="text-parchment/60 text-sm italic font-body animate-pulse">
            Call to check today's availability
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-8 h-8 text-parchment/30" />
      </motion.div>
    </section>
  );
};