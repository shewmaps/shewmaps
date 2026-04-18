import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngBoundsExpression } from 'leaflet';
import { MapConfig } from '../../data/hikes';

interface Props {
  title: string;
  mapConfig: MapConfig;
}

const FoodMap: React.FC<Props> = ({ title, mapConfig }) => {
  return (
    <section className="map-section" data-testid="foodMap">
      <div className="map-header">
        <h1>{title} — Food Map</h1>
      </div>
      <div className="map-container">
        <MapContainer
          center={mapConfig.center}
          zoom={mapConfig.zoom}
          minZoom={mapConfig.minZoom}
          maxZoom={mapConfig.maxZoom}
          maxBounds={mapConfig.maxBounds as LatLngBoundsExpression}
          maxBoundsViscosity={1.0}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </section>
  );
};

export default FoodMap;
