import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Legacy route /:slug/books/journal — redirect to the new URL format.
const BookPageRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  if (slug) {
    return <Navigate to={`/${slug}/read/walking-to-dinner`} replace />;
  }
  return <Navigate to="/" replace />;
};

export default BookPageRoute;
