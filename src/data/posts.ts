import { Testimonial } from './hikes';
import shikokuWalkingToDinnerMd from '../locations/shikoku-pilgrimage/assets/posts/walking-to-dinner.md';
import appalachianWalkingToDinnerMd from '../locations/appalachian-trail/assets/posts/walking-to-dinner.md';
import kumanoWalkingToDinnerMd from '../locations/kumano-kodo-nakahechi/assets/posts/walking-to-dinner.md';
import caminoWalkingToDinnerMd from '../locations/camino-portugues/assets/posts/walking-to-dinner.md';
import eireStrandhillMd from '../locations/eire/assets/posts/a-week-in-strandhill.md';

export interface Post {
  /** Matches a hike slug or any standalone location string, e.g. 'eire' */
  location: string;
  /** URL-safe slug for this specific post, e.g. 'walking-to-dinner' */
  slug: string;
  /** Display title */
  title: string;
  /** Display publication date */
  publishedDate?: string;
  /** Built asset URL pointing to the markdown body */
  contentPath: string;
  /** Present = book post with Amazon buy button; absent = blog post */
  buyUrl?: string;
  testimonials?: Testimonial[];
}

export function getPost(location: string, slug: string): Post | undefined {
  return posts.find(p => p.location === location && p.slug === slug);
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
    contentPath: shikokuWalkingToDinnerMd,
    buyUrl: 'https://www.amazon.com/dp/B0GX2TGNZ1',
  },
  {
    location: 'appalachian-trail',
    slug: 'walking-to-dinner',
    title: 'Walking to Dinner on the Appalachian Trail',
    publishedDate: 'Jan 3, 2018',
    contentPath: appalachianWalkingToDinnerMd,
    buyUrl: 'https://www.amazon.com/dp/B0GXCM3GW1',
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
    contentPath: kumanoWalkingToDinnerMd,
  },
  {
    location: 'camino-portugues',
    slug: 'walking-to-dinner',
    title: 'Walking to Dinner on the Camino Portugués',
    publishedDate: 'April 24, 2026',
    contentPath: caminoWalkingToDinnerMd,
  },
  {
    location: 'eire',
    slug: 'a-week-in-strandhill',
    title: 'A Week in Strandhill',
    contentPath: eireStrandhillMd,
  },
];
