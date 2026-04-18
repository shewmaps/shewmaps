import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getHikeBySlug } from '../../data/hikes';
import BookPage from './BookPage';
import Footer from '../sections/Footer';

// Background images — only hikes with bookSummary have book pages
import shikokuBg from '../../assets/shikoku no text.jpg';
import atBg from '../../assets/at no text.jpg';

const bgMap: Record<string, string> = {
  'shikoku-pilgrimage': shikokuBg,
  'appalachian-trail': atBg,
};

const BookPageRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const hike = slug ? getHikeBySlug(slug) : undefined;

  if (!hike || !hike.bookSummary) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <BookPage
        bg={bgMap[hike.slug] || ''}
        title={hike.bookTitle || hike.name}
        summary={hike.bookSummary}
        buyUrl={hike.bookUrl}
        testimonials={hike.testimonials}
      />
      <Footer />
    </>
  );
};

export default BookPageRoute;
