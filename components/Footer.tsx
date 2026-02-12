import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Clock, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-charcoal-900 border-t border-white/5 pt-16 pb-32 md:pb-16 relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-western text-2xl text-parchment">Oklahoma Smoke Grill</h3>
            <p className="text-parchment/70 text-sm leading-relaxed max-w-xs">
              Preserving the tradition of the American West through the art of smoked meats. Located in the heart of the Stockyards.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-parchment/60 hover:text-ember transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-parchment/60 hover:text-ember transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-parchment/60 hover:text-ember transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-ember uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-parchment/80 text-sm">
                <MapPin className="w-5 h-5 text-ember/60 shrink-0" />
                <span>
                  Historic Livestock Exchange<br />
                  2501 Exchange Ave<br />
                  Oklahoma City, OK 73108
                </span>
              </li>
              <li className="flex items-center gap-3 text-parchment/80 text-sm">
                <Phone className="w-5 h-5 text-ember/60 shrink-0" />
                <a href="tel:+14056737218" className="hover:text-ember transition-colors">+1 (405) 673-7218</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-ember uppercase tracking-widest text-sm">Hours</h4>
            <ul className="space-y-2 text-parchment/80 text-sm">
              <li className="flex justify-between max-w-[200px]">
                <span>Mon - Thu</span>
                <span>11am - 9pm</span>
              </li>
              <li className="flex justify-between max-w-[200px] text-parchment font-bold">
                <span>Fri - Sat</span>
                <span>11am - 11pm</span>
              </li>
              <li className="flex justify-between max-w-[200px]">
                <span>Sun</span>
                <span>11am - 8pm</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-bold text-ember uppercase tracking-widest text-sm">Join the Herd</h4>
            <p className="text-parchment/70 text-xs">Get updates on special events and secret menu items.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 px-3 py-2 text-sm text-parchment focus:outline-none focus:border-ember w-full rounded-sm"
              />
              <button className="bg-ember hover:bg-ember-light text-white px-3 py-2 rounded-sm font-bold uppercase text-xs transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-parchment/40 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Oklahoma Smoke Grill. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-parchment/60">Privacy Policy</a>
            <a href="#" className="hover:text-parchment/60">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};