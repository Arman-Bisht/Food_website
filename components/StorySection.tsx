import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden scroll-mt-24">
       {/* Background */}
      <div className="absolute inset-0 z-0">
         <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1627931327170-c8340d0246f4?q=80&w=2940&auto=format&fit=crop')", // Old Brick/Stockyards vibe
             filter: "brightness(0.25) sepia(0.3) contrast(1.1)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/80 to-charcoal-900" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-soft-light" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
             >
                <h3 className="text-ember font-bold uppercase tracking-[0.2em] mb-4 text-sm md:text-base">Our Story</h3>
                <h2 className="font-western text-4xl md:text-6xl text-parchment leading-tight">
                    The Legend of <br/>
                    <span className="text-ember">The Exchange</span>
                </h2>
                <div className="h-1 w-32 bg-ember/30 mx-auto mt-8" />
             </motion.div>

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-7 text-lg md:text-xl text-parchment/80 font-body leading-relaxed space-y-6 text-justify"
                >
                    <p>
                        Located in the heart of the <span className="text-parchment font-bold border-b border-ember/30">Historic Livestock Exchange Building</span>, Oklahoma Smoke Grill isn’t just a restaurant—it’s a tribute to the spirit of Stockyards City. Since 1910, these halls have been the meeting ground for the ranchers, cowboys, and cattlemen who built Oklahoma.
                    </p>
                    <p>
                        We carry that tradition forward every day. While the world outside changes, our method remains the same: slow-smoked meats, handcrafted rubs, and the kind of hearty, 'melt-in-your-mouth' BBQ that defines the West. Whether you’re here for our legendary <span className="text-ember font-bold">Tomahawk Steak</span> or a quick Carolina Pork Sandwich before the Monday auction, you’re eating a slice of Oklahoma history.
                    </p>
                    <p className="font-bold text-parchment italic pt-2 border-l-4 border-ember pl-4">
                        "At Oklahoma Smoke Grill, we don't just serve BBQ; we serve the heritage of the Stockyards. Come join the herd."
                    </p>
                </motion.div>

                {/* Badge/Visual */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="lg:col-span-5 flex justify-center lg:justify-end"
                >
                    <div className="relative group cursor-default w-full max-w-sm">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-ember blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                        
                        {/* Ticket/Badge Container */}
                        <div className="relative bg-charcoal-800 border-2 border-ember/20 p-8 rounded-sm text-center transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                             {/* Corner Screws */}
                             <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-charcoal-600 border border-charcoal-500"></div>
                             <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-charcoal-600 border border-charcoal-500"></div>
                             <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-charcoal-600 border border-charcoal-500"></div>
                             <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-charcoal-600 border border-charcoal-500"></div>

                             <div className="border border-parchment/10 p-6 bg-charcoal-900/50 backdrop-blur-sm">
                                <BadgeCheck className="w-16 h-16 text-ember mx-auto mb-6" strokeWidth={1.5} />
                                
                                <h4 className="font-western text-2xl text-parchment mb-2">Auction Days</h4>
                                <div className="h-px w-2/3 bg-ember/30 mx-auto my-4"></div>
                                
                                <div className="flex items-center justify-center gap-2 mb-2">
                                  <Calendar className="w-4 h-4 text-ember" />
                                  <p className="text-parchment/90 font-bold uppercase tracking-widest text-sm">Monday & Tuesday</p>
                                </div>
                                
                                <p className="text-ember text-xs font-bold uppercase tracking-[0.2em] mt-4">The Cattleman’s Choice</p>
                             </div>
                        </div>
                    </div>
                </motion.div>
             </div>
        </div>
      </div>
    </section>
  );
};