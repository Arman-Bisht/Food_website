import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <h1 className="font-western text-4xl md:text-6xl text-ember tracking-widest uppercase">
            Oklahoma
          </h1>
          <h2 className="font-western text-2xl md:text-4xl text-parchment/80 mt-2 tracking-wide">
            Smoke Grill
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
          className="h-1 bg-ember mx-auto rounded-full max-w-[200px]"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-4 text-parchment/60 font-body italic"
        >
          Firing up the smokers...
        </motion.p>
      </div>
    </div>
  );
};