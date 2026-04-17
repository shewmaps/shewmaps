import React from 'react';

interface Props {
  onExplore: () => void;
}

const HeroSection: React.FC<Props> = ({ onExplore }) => (
  <section id="home" className="section hero" data-testid="heroSection">
    <h1 className="hero-title">Brandon Shewmake</h1>
    <p className="hero-tagline">Thru-hiker &amp; Dual Pilgrim — pilgrimage and food writing</p>
    <p className="hero-mission">I travel slowly by foot, mapping journeys and collecting stories and recipes from the places I pass.</p>
    <button
      className="cta-button"
      onClick={onExplore}
      data-testid="heroSection-ctaButton"
    >
      Explore Pilgrimages
    </button>
  </section>
);

export default HeroSection;
