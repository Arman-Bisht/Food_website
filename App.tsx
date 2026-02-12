import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { MenuSection } from './components/MenuSection';
import { SpecialsSection } from './components/SpecialsSection';
import { StorySection } from './components/StorySection';
import { Footer } from './components/Footer';
import { StickyMobileFooter } from './components/StickyMobileFooter';
import { TextureOverlay } from './components/TextureOverlay';
import { LoadingScreen } from './components/LoadingScreen';
import { MenuModal } from './components/MenuModal';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate initial loading for effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen relative font-body bg-charcoal-900 text-parchment selection:bg-ember selection:text-white overflow-x-hidden">
      <TextureOverlay />
      
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar onOpenMenu={openMenu} />
          <main className="relative z-10">
            <Hero onOpenMenu={openMenu} />
            <StorySection />
            <SpecialsSection />
            <MenuSection />
          </main>
          <Footer />
          <StickyMobileFooter />
          <MenuModal isOpen={isMenuOpen} onClose={closeMenu} />
        </>
      )}
    </div>
  );
};

export default App;