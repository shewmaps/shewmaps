import React from 'react';
import { Testimonial } from './hikes';
import ShikokuContent from '../locations/shikoku-pilgrimage/assets/posts/walking-to-dinner.mdx';
import AppalachianContent from '../locations/appalachian-trail/assets/posts/walking-to-dinner.mdx';
import KumanoContent from '../locations/kumano-kodo-nakahechi/assets/posts/walking-to-dinner.mdx';
import CaminoContent from '../locations/camino-portugues/assets/posts/walking-to-dinner.mdx';
import EireContent from '../locations/eire/assets/posts/a-week-in-strandhill.mdx';

export interface Acknowledgement {
  role: string;
  name: string;
  url: string;
}

export interface Post {
  /** Matches a hike slug or any standalone location string, e.g. 'eire' */
  location: string;
  /** URL-safe slug for this specific post, e.g. 'walking-to-dinner' */
  slug: string;
  /** Display title */
  title: string;
  /** Display publication date */
  publishedDate?: string;
  /** MDX component to render as post body */
  Content: React.ComponentType<{ components?: Record<string, React.ComponentType<any>> }>;
  /** Present = book post with Amazon buy button; absent = blog post */
  buyUrl?: string;
  acknowledgements?: Acknowledgement[];
  testimonials?: Testimonial[];
}

export function getPost(location: string, slug: string): Post | undefined {
  return posts.find(p => p.location === location && p.slug === slug);
}

export function getAdjacentPosts(location: string, slug: string): { prev: Post | undefined; next: Post | undefined } {
  const toMs = (p: Post) => (p.publishedDate ? new Date(p.publishedDate).getTime() : Infinity);
  const sorted = [...posts].sort((a, b) => toMs(a) - toMs(b)); // oldest → newest, undated last
  const idx = sorted.findIndex(p => p.location === location && p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: sorted[idx - 1], // older
    next: sorted[idx + 1], // newer
  };
}

// ---------------------------------------------------------------------------
// Posts registry
// ---------------------------------------------------------------------------

export const posts: Post[] = [
  // Books
  {
    location: 'shikoku-pilgrimage',
    slug: 'walking-to-dinner',
    title: 'Walking to Dinner on the Shikoku Pilgrimage',
    publishedDate: 'April 22, 2026',
    Content: ShikokuContent,
    buyUrl: 'https://www.amazon.com/dp/B0GX2TGNZ1',
    acknowledgements: [
      {
        role: 'Editor',
        name: 'Jennifer Kepler',
        url: 'https://cypressediting.com/',
      },
      {
        role: 'Cover Design',
        name: 'Andrew Yong',
        url: 'https://www.jonadrew.com/',
      },
    ],
  },
  {
    location: 'appalachian-trail',
    slug: 'walking-to-dinner',
    title: 'Walking to Dinner on the Appalachian Trail',
    publishedDate: 'Jan 3, 2018',
    Content: AppalachianContent,
    buyUrl: 'https://www.amazon.com/dp/B0GXCM3GW1',
    acknowledgements: [
      {
        role: 'Editor',
        name: 'Jennifer Kepler',
        url: 'https://cypressediting.com/',
      },
      {
        role: 'Cover Design',
        name: 'Andrew Yong',
        url: 'https://www.jonadrew.com/',
      },
    ],
    testimonials: [
      {
        text: 'A refreshing and entertaining take on the AT hike.',
        author: 'Jonathan',
        date: 'May 2021',
        project: 'Walking to Dinner on the Appalachian Trail',
      },
      {
        text: 'There are several books out there about the AT but this one is such a unique perspective! Sméagol captures the beauty of everything from the places and the people to the food and the "must sees." I would suggest this book to anyone who is looking to hike the trail or even those that have hiked to recollect and remember just how incredible this adventure is!',
        author: 'Jennifer',
        date: 'Jan 2018',
        project: 'Walking to Dinner on the Appalachian Trail',
      },
    ],
  },

  // Blog posts
  {
    location: 'kumano-kodo',
    slug: 'walking-to-dinner',
    title: 'Walking to Dinner on the Kumano Kodo',
    publishedDate: 'April 25, 2026',
    Content: KumanoContent,
  },
  {
    location: 'camino-portugues',
    slug: 'walking-to-dinner',
    title: 'Walking to Dinner on the Camino Portugués',
    publishedDate: 'April 24, 2026',
    Content: CaminoContent,
  },
  {
    location: 'eire',
    slug: 'a-week-in-strandhill',
    title: 'A Week in Strandhill',
    Content: EireContent,
  },
];
