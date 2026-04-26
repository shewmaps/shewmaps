import React from 'react';
import { Hike } from '../../data/hikes';
import HikeItem from '../features/HikeItem';
import fishImg from '../../assets/images/fish.png';

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
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={fishImg.src} alt="" className="section-emblem" aria-hidden="true" />
  </section>
);

export default PilgrimagesSection;
