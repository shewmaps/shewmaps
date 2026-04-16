import React from 'react';
import '../ui/ui.css';
import BuyButton from '../ui/BuyButton';
import ReadButton from '../ui/ReadButton';
import { Hike } from '../../data/hikes';

interface Props {
  hike: Hike;
  onRead: (readView?: string) => void;
}

const HikeItem: React.FC<Props> = ({ hike, onRead }) => {
  return (
    <div className="hike-item" style={{ borderLeftColor: hike.color }} data-testid={`hikeItem-${hike.id}`}>
      <div className="hike-header">
        <h3 className="hike-name">{hike.name}</h3>
        {(hike.readView || hike.bookUrl || hike.buyPlaceholder) && (
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            {hike.readView && <ReadButton onClick={() => onRead(hike.readView)} data-testid={`hikeItem-${hike.id}-readButton`} />}
            {hike.bookUrl || hike.buyPlaceholder ? (
              <BuyButton href={hike.bookUrl} placeholder={!!hike.buyPlaceholder} data-testid={`hikeItem-${hike.id}-buyButton`}>{hike.buyLabel || 'Buy'}</BuyButton>
            ) : null}
          </div>
        )}
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
