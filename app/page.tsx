'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import RecentProjects from '@/components/RecentProjects';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />. 
      <Services />
      <Experience />
      <RecentProjects />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
