import React from 'react';

interface Props {
  onExplore: () => void;
}

const HeroSection: React.FC<Props> = ({ onExplore }) => (
  <section id="home" className="section hero" data-testid="heroSection">
    <h1 className="hero-title">Food Pilgrimages</h1>
    <p className="hero-tagline">by Brandon Shewmake, a Dual Pilgrim and thru-hiker</p>
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
