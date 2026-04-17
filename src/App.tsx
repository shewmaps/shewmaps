import React from 'react';
import shikokuBg from './assets/shikoku no text.jpg';
import atBg from './assets/at no text.jpg';
import './components/ui/ui.css';
import { hikes, shikokuSummary, atSummary } from './data/hikes';
import { useNavigation, ViewType } from './hooks/useNavigation';
import HeroSection from './components/sections/HeroSection';
import PilgrimagesSection from './components/sections/PilgrimagesSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import BookPage from './components/features/BookPage';

const App: React.FC = () => {
  const { currentView, setCurrentView, scrollToSection, navigateToSection } = useNavigation();

  const shikoku = hikes.find(h => h.id === 'shikoku-pilgrimage')!;
  const at = hikes.find(h => h.id === 'appalachian-trail')!;

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#home" className="logo" onClick={() => navigateToSection('home')} data-testid="nav-logo">
            shewmaps
          </a>
          <div className="nav-links">
            <a href="#pilgrimages" onClick={() => navigateToSection('pilgrimages')} data-testid="nav-pilgrimagesLink">
              Pilgrimages
            </a>
            <a href="#contact" onClick={() => navigateToSection('contact')} data-testid="nav-contactLink">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {currentView === 'main' ? (
        <main>
          <HeroSection onExplore={() => scrollToSection('pilgrimages')} />
          <PilgrimagesSection
            hikes={hikes}
            onRead={(readView) => setCurrentView((readView || 'main') as ViewType)}
          />
          <ContactSection />
          <Footer />
        </main>
      ) : currentView === 'shikoku' ? (
        <BookPage
          bg={shikokuBg}
          title={shikoku.bookTitle || 'Shikoku Pilgrimage'}
          summary={shikokuSummary}
          onBack={() => setCurrentView('main')}
          buyUrl={shikoku.bookUrl}
          testimonials={shikoku.testimonials}
        />
      ) : (
        <BookPage
          bg={atBg}
          title={at.bookTitle || 'Appalachian Trail Journal'}
          summary={atSummary}
          onBack={() => setCurrentView('main')}
          buyUrl={at.bookUrl}
          testimonials={at.testimonials}
        />
      )}
    </div>
  );
};

export default App;
