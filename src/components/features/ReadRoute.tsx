import React from 'react';
import { getPost, getAdjacentPosts } from '../../data/posts';
import BookPage from './BookPage';
import BlogPost from './BlogPost';
import Footer from '../sections/Footer';
import PostNav from '../ui/PostNav';
import { StaticImageData } from 'next/image';

import shikokuBg from '../../locations/shikoku-pilgrimage/assets/images/hero.jpg';
import atBg from '../../locations/appalachian-trail/assets/images/hero.jpg';

const bgMap: Record<string, string | StaticImageData> = {
  'shikoku-pilgrimage': shikokuBg,
  'appalachian-trail': atBg,
};

const mdxComponents = {
  // eslint-disable-next-line @next/next/no-img-element
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} className="polaroid-photo" loading="lazy" alt={props.alt ?? ''} />
  ),
};

interface Props {
  location: string;
  postSlug: string;
}

const ReadRoute: React.FC<Props> = ({ location, postSlug }) => {
  const post = getPost(location, postSlug);
  const { prev, next } = getAdjacentPosts(location, postSlug);

  if (!post) return null;

  const mappedBg = bgMap[post.location];
  const bg = typeof mappedBg === 'string' ? mappedBg : mappedBg?.src || '';
  const isBook = !!post.buyUrl;
  const Content = post.Content;

  return (
    <>
      {isBook ? (
        <BookPage
          bg={bg}
          title={post.title}
          publishedDate={post.publishedDate}
          buyUrl={post.buyUrl}
          acknowledgements={post.acknowledgements}
          testimonials={post.testimonials}
        >
          <Content components={mdxComponents} />
        </BookPage>
      ) : (
        <BlogPost post={post}>
          <Content components={mdxComponents} />
        </BlogPost>
      )}
      <PostNav prev={prev} next={next} />
      <Footer />
    </>
  );
};

export default ReadRoute;
