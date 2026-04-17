import React from 'react';
import { DUAL_PILGRIM_URL } from '../../data/hikes';

const AboutSection: React.FC = () => (
  <section id="about" className="section about-section" data-testid="aboutSection">
    <h2 className="section-title">About</h2>
    <p className="section-description">
      Brandon Shewmake began thru-hiking with a northbound journey on the Appalachian Trail in 2017. Since then, he has become a{' '}
      <a href={DUAL_PILGRIM_URL} target="_blank" rel="noopener noreferrer" data-testid="aboutSection-dualPilgrimLink">
        Dual Pilgrim
      </a>
      , having walked the Camino Portugués and the Kumano Kodo. His writing explores long-distance walking, with a focus on the food encountered along the way. He often returns to the Gulf of Mexico to spend time with family, where his love for food began.
    </p>
  </section>
);

export default AboutSection;
