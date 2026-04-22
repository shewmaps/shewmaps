import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import './components/ui/ui.css';
import { hikes } from './data/hikes';
import HeroSection from './components/sections/HeroSection';
import PilgrimagesSection from './components/sections/PilgrimagesSection';
import AboutSection from './components/sections/AboutSection';
import Footer from './components/sections/Footer';
import BookPageRoute from './components/features/BookPageRoute';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const gtag = (window as any).gtag;
    if (typeof gtag !== 'function') {
      return;
    }

    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.hash || `${location.pathname}${location.search}`,
    });
  }, [location.pathname, location.search, location.hash]);

  return null;
}

const HomePage: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <HeroSection onExplore={() => scrollToSection('pilgrimages')} />
      <PilgrimagesSection hikes={hikes} />
      <AboutSection />
      <Footer />
    </main>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    document.title = 'Food Pilgrimages by Brandon Shewmake';
  }, []);

  return (
    <div className="app">
      <ScrollToTop />
      <AnalyticsTracker />
      <header className="header">
        <nav className="nav">
          <Link to="/" className="logo" data-testid="nav-logo">
            shewmaps
          </Link>
          <div className="nav-links">
            <Link to="/#pilgrimages" data-testid="nav-pilgrimagesLink">
              Pilgrimages
            </Link>
            <Link to="/#about" data-testid="nav-aboutLink">
              About
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug/books/journal" element={<BookPageRoute />} />
      </Routes>
    </div>
  );
};

export default App;
