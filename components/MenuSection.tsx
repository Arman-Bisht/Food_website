import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../types';
import { Star } from 'lucide-react';

const sandwiches: MenuItem[] = [
  {
    id: 's1',
    name: 'Carolina Pork Sandwich',
    description: "Pit-master's favorite slow-smoked pulled pork on a buttered bun, topped with homemade slaw, pickled onions, and BBQ mustard sauce.",
    price: 16.90,
    popular: true,
  },
  {
    id: 's2',
    name: 'Turkey Club',
    description: "Smoked turkey, bacon, lettuce, tomato, and mayo on Texas toast.",
    price: 15.60,
  },
  {
    id: 's3',
    name: 'Tomahawk Steak',
    description: "Thick-cut, slow-smoked, and described by locals as the crown jewel of the Stockyards.",
    price: "Market Price",
    featured: true,
  }
];

const sides: MenuItem[] = [
  { id: 'sd1', name: 'BBQ Beans', description: 'With smoked meat and caramelized onions.', price: 5.20 },
  { id: 'sd2', name: 'Fried Okra', description: 'Golden crispy southern classic.', price: 5.20 },
  { id: 'sd3', name: 'Mac & Cheese', description: 'Creamy three-cheese blend.', price: 5.20 },
  { id: 'sd4', name: 'Jalapeño Pasta Salad', description: 'Chilled with a kick.', price: 5.20 },
];

const drinks: MenuItem[] = [
  { id: 'd1', name: 'Fresh Sweet Tea', description: 'Brewed daily.', price: 4.50 },
  { id: 'd2', name: 'Lemonade', description: 'Hand-squeezed.', price: 4.50 },
  { id: 'd3', name: 'Soda', description: 'Assorted flavors.', price: 4.50 },
];

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-charcoal-900 relative overflow-hidden scroll-mt-24">
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="font-western text-4xl md:text-6xl text-parchment mb-2">
              From the <span className="text-ember">Pit</span>
            </h2>
            <p className="text-parchment/80 text-lg font-body max-w-md">
              Wood-fired classics and signature plates.
            </p>
          </div>
          <a href="#" className="text-ember hover:text-ember-light uppercase tracking-widest text-sm font-bold border-b border-ember pb-1 transition-colors">
            Download Full Menu
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          
          {/* Column 1: Sandwiches & Signatures */}
          <div>
            <h3 className="font-western text-3xl text-ember mb-8 flex items-center gap-4">
              Signature Sandwiches
              <div className="h-px bg-ember/30 flex-grow"></div>
            </h3>
            
            <div className="space-y-12">
              {sandwiches.map((item, i) => (
                <MenuItemCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>

          {/* Column 2: Sides & Drinks */}
          <div className="space-y-16">
            
            {/* Sides */}
            <div>
              <div className="flex justify-between items-baseline mb-8">
                <h3 className="font-western text-3xl text-ember">Sides</h3>
                <span className="text-parchment/80 font-body italic">$5.20 each</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {sides.map((item) => (
                  <div key={item.id} className="border-l-2 border-white/10 pl-4 py-1">
                    <h4 className="font-western text-xl text-parchment">{item.name}</h4>
                    <p className="text-sm text-parchment/80 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div>
              <div className="flex justify-between items-baseline mb-8">
                <h3 className="font-western text-3xl text-ember">Drinks</h3>
                <span className="text-parchment/80 font-body italic">$4.50 each</span>
              </div>
              <div className="bg-white/[0.02] p-6 border border-white/5 rounded-sm">
                <ul className="space-y-4">
                  {drinks.map((item) => (
                    <li key={item.id} className="flex justify-between items-center border-b border-dashed border-white/10 pb-2 last:border-0 last:pb-0">
                      <span className="font-western text-lg text-parchment">{item.name}</span>
                      <span className="text-xs text-parchment/70 uppercase tracking-wider">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const MenuItemCard: React.FC<{ item: MenuItem; index: number }> = ({ item, index }) => {
  const isFeatured = item.featured;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative group ${isFeatured ? 'p-6 bg-ember/5 border border-ember/30 rounded-sm' : ''}`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ember text-charcoal-900 px-3 py-1 text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg z-10">
          <Star size={12} fill="currentColor" /> Featured <Star size={12} fill="currentColor" />
        </div>
      )}

      <div className="flex justify-between items-baseline mb-2">
        <h4 className={`font-western text-2xl ${isFeatured ? 'text-ember scale-105 origin-left' : 'text-parchment group-hover:text-ember'} transition-colors duration-300`}>
          {item.name}
        </h4>
        <div className="flex-grow mx-4 border-b border-white/10 border-dotted relative top-[-4px] opacity-30"></div>
        <span className={`font-bold font-body text-xl ${isFeatured ? 'text-ember' : 'text-parchment/90'}`}>
          {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
        </span>
      </div>
      
      <p className="text-parchment/85 font-body leading-relaxed max-w-[90%]">
        {item.description}
      </p>

      {item.popular && !isFeatured && (
        <span className="inline-block mt-3 text-xs font-bold text-ember uppercase tracking-wider border border-ember/20 px-2 py-1 rounded-sm">
          Pit-Master Favorite
        </span>
      )}
    </motion.div>
  );
};