import React from 'react';
import { motion } from 'framer-motion';
import { SpecialItem } from '../types';

const specials: SpecialItem[] = [
  {
    id: '1',
    day: 'Today\'s Highlight',
    title: 'The Stockyard Stack',
    description: 'Double-smoked brisket layered with spicy sausage and onion strings on brioche.',
    price: '$18',
  },
  {
    id: '2',
    day: 'Limited Time',
    title: 'Burnt End Chili',
    description: 'A hearty bowl of our signature chili loaded with hickory-smoked burnt ends and cheddar.',
    price: '$14',
  },
  {
    id: '3',
    day: 'Chef\'s Choice',
    title: 'Smoked Prime Rib',
    description: '16oz cut, smoked for 6 hours, served with horseradish cream and loaded potato.',
    price: '$34',
  }
];

export const SpecialsSection: React.FC = () => {
  return (
    <section id="specials" className="py-24 bg-charcoal-800 relative scroll-mt-20">
       {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-western text-4xl md:text-5xl text-ember mb-4">Daily Specials</h2>
          <div className="h-1 w-24 bg-parchment/20 mx-auto" />
          <p className="mt-4 text-parchment/80 font-body max-w-2xl mx-auto">
            Limited availability. Get them while they last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <motion.div
              key={special.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative bg-charcoal-700 border border-charcoal-600 p-8 hover:border-ember/50 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
              <div className="absolute top-0 right-0 bg-ember text-white text-xs font-bold px-3 py-1 uppercase tracking-wider transform translate-x-2 -translate-y-2 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform">
                {special.day}
              </div>
              <h3 className="font-western text-2xl text-parchment mb-3 group-hover:text-ember transition-colors">
                {special.title}
              </h3>
              <p className="font-body text-parchment/90 mb-6 leading-relaxed">
                {special.description}
              </p>
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="font-western text-2xl text-ember">{special.price}</span>
                <span className="text-xs uppercase tracking-widest text-parchment/60">Until Sold Out</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};