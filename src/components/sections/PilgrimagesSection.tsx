import React from 'react';
import { Hike } from '../../data/hikes';
import HikeItem from '../features/HikeItem';

interface Props {
  hikes: Hike[];
}

const PilgrimagesSection: React.FC<Props> = ({ hikes }) => (
  <section id="pilgrimages" className="section hikes-section" data-testid="pilgrimagesSection">
    <h2 className="section-title">Pilgrimages</h2>
    <div className="hikes-list">
      {hikes.map(hike => (
        <HikeItem key={hike.id} hike={hike} />
      ))}
    </div>
  </section>
);

export default PilgrimagesSection;
