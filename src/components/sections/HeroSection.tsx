import React from 'react';
import blueberriesImg from '../../assets/images/blueberries.png';

interface Props {
  onExplore: () => void;
}

const HeroSection: React.FC<Props> = ({ onExplore }) => (
  <section id="home" className="section hero" data-testid="heroSection">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={blueberriesImg.src} alt="" className="hero-emblem" aria-hidden="true" />
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
