import React from 'react';
import { Link } from 'react-router-dom';
import '../ui/ui.css';
import { Hike } from '../../data/hikes';

interface Props {
  hike: Hike;
}

const HikeItem: React.FC<Props> = ({ hike }) => {
  const hasBook = !!hike.bookSummary;

  return (
    <div className="hike-item" style={{ borderLeftColor: hike.color }} data-testid={`hikeItem-${hike.id}`}>
      <div className="hike-header">
        <h3 className="hike-name">{hike.name}</h3>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {hasBook && (
            <Link to={`/${hike.slug}/books`} className="ui-button ui-button--ghost" data-testid={`hikeItem-${hike.id}-readButton`}>
              Read
            </Link>
          )}
          <Link to={`/${hike.slug}/maps/food`} className="ui-button ui-button--ghost" data-testid={`hikeItem-${hike.id}-mapButton`}>
            Food Map
          </Link>
        </div>
      </div>
      <div className="hike-meta">
        {hike.kilometers && <span><strong>{hike.kilometers.toLocaleString()}</strong> kilometers</span>}
        {hike.miles && <span><strong>{hike.miles.toLocaleString()}</strong> miles</span>}
        <span>{hike.dates}</span>
        <span>{hike.season}</span>
      </div>
    </div>
  );
};

export default HikeItem;
