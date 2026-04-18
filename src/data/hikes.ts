export type Testimonial = {
  text: string;
  author: string;
  date: string;
  project: string;
};

export interface MapConfig {
  center: [number, number];
  zoom: number;
  minZoom: number;
  maxZoom: number;
  maxBounds: [[number, number], [number, number]];
}

export interface Hike {
  id: string;
  slug: string;
  name: string;
  bookTitle: string;
  dates: string;
  season: string;
  kilometers?: number;
  miles?: number;
  bookUrl?: string;
  color: string;
  testimonials?: Testimonial[];
  bookSummary?: string;
  buyPlaceholder?: boolean;
  buyLabel?: string;
  mapConfig: MapConfig;
}

export const DUAL_PILGRIM_URL = 'https://dual-pilgrim.spiritual-pilgrimages.com/brandon-shewmake';

export const shikokuSummary = `The gentle strike of a temple bell reverberates around a hillside and through an old forest, reaching your ears. Cedars glow golden green as the sun crests the horizon, and dew drips down fiddleheads onto undisturbed earth. You balance your pace, considering the temples and towns en route to your next accommodation.

A stone statue, cracked and overtaken by moss, sits tucked in a notch along the hillside. Coins of aluminum and copper rest below the statue, clinking when you toss your own into the pile with a prayer. An insect buzzes behind you, through the calm air that envelops the pilgrimage path. Your stomach rumbles, and then a question crosses your mind:

What will I have to eat today?

From Ryōzenji Temple to Ōkuboji Temple, you’ve daydreamed of bamboo-themed dishes in Tokushima Prefecture, flame-seared bonito fish in Kochi Prefecture, sea bream over rice in Ehime Prefecture, and hearty udon noodles in Kagawa Prefecture. What dishes will you discover within the pages of this Shikoku Pilgrimage journal?`;

export const atSummary = `With your eyes closed, you hear the soft chirp of a bird from the shadowed forest surrounding your tent. As your breathing pulls cold air into the empty spaces of your sleeping bag, you bury your head and curl into a ball for warmth. Outside, more birds join the crescendoing soundscape with their own melodies.

A white-throated sparrow whistles a single long note, followed by a flurry of higher-pitched notes, a melancholic tune that echoes among the conifers as a gentle breeze rustles your tent. By now, the air has warmed a little, so you peek outside to observe how dawn caresses the silhouetted mountains. Your stomach rumbles, and then a question crosses your mind:

What will I have to eat today?

From Springer Mountain, Georgia, to Mount Katahdin, Maine, you’ve daydreamed of Southern breakfasts in Blue Ridge towns, blackberry milkshakes in Shenandoah National Park, delis in the mid-Atlantic states, and wild blueberries in New England. What recipes will you discover within the pages of this Appalachian Trail journal?`;

export const hikes: Hike[] = [
  {
    id: 'kumano-kodo',
    slug: 'kumano-kodo',
    name: 'Kumano Kodo',
    bookTitle: '',
    dates: 'Apr 2026',
    season: 'Spring',
    kilometers: 68,
    color: '#E87A90',
    mapConfig: {
      center: [33.84, 135.77],
      zoom: 11,
      minZoom: 10,
      maxZoom: 15,
      maxBounds: [[33.4, 135.0], [34.4, 136.5]]
    }
  },
  {
    id: 'camino-portugues',
    slug: 'camino-portugues',
    name: 'Camino Portugués',
    bookTitle: '',
    dates: 'Nov 2025',
    season: 'Autumn',
    kilometers: 102,
    color: '#F8811C',
    mapConfig: {
      center: [42.0, -4.0],
      zoom: 6,
      minZoom: 5,
      maxZoom: 15,
      maxBounds: [[36.0, -12.0], [48.0, 5.0]]
    }
  },
  {
    id: 'shikoku-pilgrimage',
    slug: 'shikoku-pilgrimage',
    name: 'Shikoku Pilgrimage',
    bookTitle: 'Walking to Dinner on the Shikoku Pilgrimage',
    dates: 'Apr–May 2024',
    season: 'Spring',
    kilometers: 1200,
    bookUrl: 'https://www.amazon.com/dp/B0GX2TGNZ1',
    color: '#E87A90',
    bookSummary: shikokuSummary,
    mapConfig: {
      center: [33.75, 133.5],
      zoom: 9,
      minZoom: 8,
      maxZoom: 15,
      maxBounds: [[32.5, 132.0], [35.0, 135.0]]
    }
  },
  {
    id: 'appalachian-trail',
    slug: 'appalachian-trail',
    name: 'Appalachian Trail',
    bookTitle: 'Walking to Dinner on the Appalachian Trail',
    dates: 'Mar–Aug 2017',
    season: 'Spring–Summer',
    miles: 2190,
    bookUrl: 'https://www.amazon.com/dp/B0GXCM3GW1',
    color: '#98D983',
    bookSummary: atSummary,
    mapConfig: {
      center: [37.5, -79.5],
      zoom: 6,
      minZoom: 5,
      maxZoom: 15,
      maxBounds: [[24.0, -90.0], [48.0, -65.0]]
    },
    testimonials: [
      {
        text: 'A refreshing and entertaining take on the AT hike.',
        author: 'Jonathan',
        date: 'May 2021',
        project: 'Walking to Dinner on the Appalachian Trail'
      },
      {
        text: 'There are several books out there about the AT but this one is such a unique perspective! Sméagol captures the beauty of everything from the places and the people to the food and the "must sees." I would suggest this book to anyone who is looking to hike the trail or even those that have hiked to recollect and remember just how incredible this adventure is!',
        author: 'Jennifer',
        date: 'Jan 2018',
        project: 'Walking to Dinner on the Appalachian Trail'
      }
    ]
  }
];

export function getHikeBySlug(slug: string): Hike | undefined {
  return hikes.find(h => h.slug === slug);
}
