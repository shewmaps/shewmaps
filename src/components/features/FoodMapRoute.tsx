import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getHikeBySlug } from '../../data/hikes';
import FoodMap from './FoodMap';
import Footer from '../sections/Footer';

const FoodMapRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const hike = slug ? getHikeBySlug(slug) : undefined;

  if (!hike) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <FoodMap
        title={hike.name}
        mapConfig={hike.mapConfig}
      />
      <Footer />
    </>
  );
};

export default FoodMapRoute;
