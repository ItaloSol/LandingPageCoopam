'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ValuesSection from '@/components/sections/ValuesSection';
import CouncilSection from '@/components/sections/CouncilSection';
import ServicesSection from '@/components/sections/ServicesSection';
import NewsSection from '@/components/sections/NewsSection';
import ContactSection from '@/components/sections/ContactSection';
import CorporateSection from '@/components/sections/CorporateSection';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CorporateSection />
      {/* <AboutSection /> */}
      <CouncilSection />
      <ValuesSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
