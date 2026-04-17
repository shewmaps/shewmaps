import React from 'react';
import { Hike } from '../../data/hikes';
import HikeItem from '../features/HikeItem';

interface Props {
  hikes: Hike[];
  onRead: (readView?: string) => void;
}

const PilgrimagesSection: React.FC<Props> = ({ hikes, onRead }) => (
  <section id="pilgrimages" className="section hikes-section" data-testid="pilgrimagesSection">
    <h2 className="section-title">Pilgrimages</h2>
    <p className="section-description">Brandon Shewmake began thru-hiking with a northbound journey on the Appalachian Trail in 2017. Since then, he has become a Dual Pilgrim, having walked the Camino Portugués and the Kumano Kodo. His writing explores long-distance walking, with a focus on the food encountered along the way. He often returns to the Gulf of Mexico to spend time with family, where his love for food began.</p>
    <div className="hikes-list">
      {hikes.map(hike => (
        <HikeItem
          key={hike.id}
          hike={hike}
          onRead={onRead}
        />
      ))}
    </div>
  </section>
);

export default PilgrimagesSection;
