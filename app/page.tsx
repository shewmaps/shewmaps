'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { hikes } from '../src/data/hikes';
import HeroSection from '../src/components/sections/HeroSection';
import PilgrimagesSection from '../src/components/sections/PilgrimagesSection';
import AboutSection from '../src/components/sections/AboutSection';
import Footer from '../src/components/sections/Footer';

export default function HomePage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      requestAnimationFrame(() => scrollToSection(section));
    }
  }, [searchParams]);

  useEffect(() => {
    const gtag = (window as any).gtag;
    if (typeof gtag !== 'function') {
      return;
    }

    const search = searchParams.toString();
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: search ? `${pathname}?${search}` : pathname,
    });
  }, [pathname, searchParams]);

  return (
    <main>
      <HeroSection onExplore={() => scrollToSection('pilgrimages')} />
      <PilgrimagesSection hikes={hikes} />
      <AboutSection />
      <Footer />
    </main>
  );
}
