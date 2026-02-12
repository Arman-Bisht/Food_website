import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Flame, Phone } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuCategory {
  title: string;
  items: {
    name: string;
    description: string;
    price: string;
    popular?: boolean;
  }[];
}

const fullMenu: MenuCategory[] = [
  {
    title: "Starters",
    items: [
      { name: "Burnt End Poppers", description: "Jalapeños stuffed with cream cheese and brisket burnt ends, wrapped in bacon.", price: "$12" },
      { name: "Fried Okra Basket", description: "Cornmeal-breaded okra served with spicy ranch.", price: "$8" },
      { name: "Smoked Wings", description: "1lb of wings, dry-rubbed and smoked over hickory.", price: "$14", popular: true },
      { name: "Stockyard Nachos", description: "Tortilla chips, queso, pulled pork, jalapeños, and BBQ drizzle.", price: "$15" }
    ]
  },
  {
    title: "From The Pit",
    items: [
      { name: "The Big Chief Platter", description: "Brisket, ribs, sausage, and pulled pork with two sides and toast.", price: "$32", popular: true },
      { name: "St. Louis Ribs", description: "Half rack of dry-rubbed ribs, glazed with our signature sauce.", price: "$22" },
      { name: "Texas Brisket Plate", description: "Half pound of prime brisket, sliced thick. Lean or moist.", price: "$24" },
      { name: "Smoked Half Chicken", description: "Brined for 24 hours and smoked until tender.", price: "$18" }
    ]
  },
  {
    title: "Sandwiches",
    items: [
      { name: "Carolina Pork", description: "Pulled pork, coleslaw, and mustard sauce on brioche.", price: "$14" },
      { name: "The Outlaw", description: "Chopped brisket, hot link sausage, and onion rings.", price: "$16", popular: true },
      { name: "Smoked Turkey Club", description: "Turkey breast, bacon, lettuce, tomato, mayo on Texas toast.", price: "$15" }
    ]
  },
  {
    title: "Fixin's (Sides)",
    items: [
      { name: "Pit Beans", description: "Slow-cooked with brisket trimmings.", price: "$5" },
      { name: "Potato Salad", description: "Mustard-based old fashioned recipe.", price: "$5" },
      { name: "Mac & Cheese", description: "Smoked gouda and cheddar blend.", price: "$6" },
      { name: "Coleslaw", description: "Crisp cabbage with vinegar dressing.", price: "$4" }
    ]
  }
];

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed top-0 left-0 w-full h-screen bg-charcoal-900/90 backdrop-blur-sm z-[9998]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-4 md:inset-10 z-[9999] bg-charcoal-800 border border-white/10 rounded-sm shadow-2xl overflow-hidden flex flex-col max-w-5xl mx-auto"
          >
            {/* Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>

            {/* Header */}
            <div className="relative z-10 p-6 md:p-8 border-b border-white/10 flex justify-between items-center bg-charcoal-900/50">
              <div className="flex items-center gap-3">
                <Flame className="text-ember w-8 h-8" />
                <h2 className="font-western text-3xl md:text-4xl text-parchment">Full Menu</h2>
              </div>
              <button 
                onClick={onClose}
                className="text-parchment/60 hover:text-ember transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X size={32} />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="relative z-10 flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {fullMenu.map((category, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="font-western text-2xl text-ember border-b border-ember/30 pb-2 inline-block pr-8">
                      {category.title}
                    </h3>
                    <div className="space-y-8">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="group">
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="font-western text-xl text-parchment group-hover:text-ember-light transition-colors">
                              {item.name}
                            </h4>
                            <div className="flex-grow mx-3 border-b border-white/10 border-dotted relative top-[-5px] opacity-30"></div>
                            <span className="font-bold font-body text-ember text-lg">{item.price}</span>
                          </div>
                          <div className="flex justify-between items-start">
                             <p className="text-parchment/60 text-sm font-body leading-relaxed max-w-[90%]">
                              {item.description}
                            </p>
                            {item.popular && (
                              <span className="ml-2 text-[10px] font-bold uppercase tracking-widest text-parchment/40 border border-parchment/20 px-1 rounded-sm">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="mt-16 text-center text-parchment/40 text-sm font-body italic border-t border-white/5 pt-8">
                * Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.
                <br />
                Prices subject to change.
              </div>
            </div>
            
            {/* Call to Action Footer inside Modal */}
             <div className="relative z-10 p-4 bg-charcoal-900/80 border-t border-white/5 flex flex-col justify-center items-center md:hidden gap-2">
                <a href="tel:4056737218" className="bg-ember text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest w-full text-center shadow-lg flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call to Order
                </a>
                <p className="text-parchment/40 text-xs italic font-body">Call to check today's availability</p>
             </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};