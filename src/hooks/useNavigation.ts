import { useState, useEffect, useCallback } from 'react';

export type ViewType = 'main' | 'shikoku' | 'at';

export function useNavigation() {
  const [currentView, setCurrentView] = useState<ViewType>('main');

  useEffect(() => {
    document.title = 'Brandon Shewmake — Pilgrimages & Food';
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [currentView]);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const navigateToSection = useCallback((id: string) => {
    if (currentView !== 'main') {
      setCurrentView('main');
      setTimeout(() => scrollToSection(id), 80);
    } else {
      scrollToSection(id);
    }
  }, [currentView, scrollToSection]);

  return { currentView, setCurrentView, scrollToSection, navigateToSection };
}
