import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getPost } from '../../data/posts';
import BookPage from './BookPage';
import BlogPost from './BlogPost';
import Footer from '../sections/Footer';

import shikokuBg from '../../locations/shikoku-pilgrimage/assets/images/hero.jpg';
import atBg from '../../locations/appalachian-trail/assets/images/hero.jpg';

const bgMap: Record<string, string> = {
  'shikoku-pilgrimage': shikokuBg,
  'appalachian-trail': atBg,
};

const ReadRoute: React.FC = () => {
  const { location, postSlug } = useParams<{ location: string; postSlug: string }>();
  const post = location && postSlug ? getPost(location, postSlug) : undefined;
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!post) {
      setContent('');
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);

    fetch(post.contentPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Unable to load content: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        if (!cancelled) {
          setContent(text.trim());
        }
      })
      .catch(() => {
        if (!cancelled) {
          setContent('Content coming soon.');
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const bg = bgMap[post.location] || '';
  const isBook = !!post.buyUrl;
  const renderedContent = isLoading ? 'Loading content...' : content;

  return (
    <>
      {isBook ? (
        <BookPage
          bg={bg}
          title={post.title}
          publishedDate={post.publishedDate}
          summary={renderedContent}
          buyUrl={post.buyUrl}
          acknowledgements={post.acknowledgements}
          testimonials={post.testimonials}
        />
      ) : (
        <BlogPost post={post} content={renderedContent} />
      )}
      <Footer />
    </>
  );
};

export default ReadRoute;
