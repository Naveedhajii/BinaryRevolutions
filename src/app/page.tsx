'use client';

import { useEffect } from 'react';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TeamSection from '@/components/sections/TeamSection';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('wowjs').then(({ WOW }) => {
        const wow = new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative z-0 min-h-screen bg-white dark:bg-dark">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <PortfolioSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}