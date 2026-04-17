export type Testimonial = {
  text: string;
  author: string;
  date: string;
  project: string;
};

export interface Hike {
  id: string;
  name: string;
  bookTitle: string;
  dates: string;
  season: string;
  kilometers?: number;
  miles?: number;
  bookUrl?: string;
  color: string;
  testimonials?: Testimonial[];
  readView?: string;
  buyPlaceholder?: boolean;
  buyLabel?: string;
}

export const shikokuSummary = `A temple bell strikes, its echo moving across the hillside and into an old forest. Cedars take on a deep green as the sun clears the ridge, and dew falls from fiddleheads onto the earth. You set a steady pace, thinking of temples and the towns where you'll rest for the night.

A stone statue, cracked and moss-clad, sits in a notch on the slope. Coins gather below; you add yours with a short prayer. An insect buzzes behind you through an air that holds the path in a hush. Your stomach tightens, and you wonder:

What will I eat today?

From Ryōzenji to Ōkuboji, you imagine bamboo dishes in Tokushima, flame-seared bonito in Kochi, sea bream in Ehime, and udon in Kagawa. What dishes will appear within the pages of this Shikoku Pilgrimage journal?`;

export const atSummary = `You hear a bird call from the stand of pines outside your tent. Cold air fills the sleeping bag; you draw your collar and curl for warmth. Outside, birds add their voices to morning; a white-throated sparrow gives a long note, then quick trills that move through the trees.

A breeze lifts the tent; dawn finds the mountain silhouettes. Your stomach tightens, and you think:

What will I eat today?

From Springer Mountain to Mount Katahdin, you think of Southern breakfasts in Blue Ridge towns, blackberry milkshakes in Shenandoah, delis along the mid-Atlantic, and wild blueberries in New England. What recipes will this Appalachian Trail journal record?`;

export const hikes: Hike[] = [
  {
    id: 'kumano-kodo',
    name: 'Kumano Kodo',
    bookTitle: '',
    dates: 'Apr 2026',
    season: 'Spring',
    kilometers: 68,
    color: '#E87A90',
    bookUrl: 'https://dual-pilgrim.spiritual-pilgrimages.com/brandon-shewmake',
    buyLabel: 'Dual Pilgrim'
  },
  {
    id: 'camino-portugues',
    name: 'Camino Portugués',
    bookTitle: '',
    dates: 'Nov 2025',
    season: 'Autumn',
    kilometers: 102,
    color: '#F8811C',
    bookUrl: 'https://dual-pilgrim.spiritual-pilgrimages.com/brandon-shewmake',
    buyLabel: 'Dual Pilgrim'
  },
  {
    id: 'shikoku-pilgrimage',
    name: 'Shikoku Pilgrimage',
    bookTitle: 'Walking to Dinner on the Shikoku Pilgrimage',
    dates: 'Apr–May 2024',
    season: 'Spring',
    kilometers: 1200,
    bookUrl: 'https://www.amazon.com/dp/B0GX2TGNZ1',
    color: '#E87A90',
    readView: 'shikoku'
  },
  {
    id: 'appalachian-trail',
    name: 'Appalachian Trail',
    bookTitle: 'Walking to Dinner on the Appalachian Trail',
    dates: 'Mar–Aug 2017',
    season: 'Spring–Summer',
    miles: 2190,
    bookUrl: 'https://www.amazon.com/dp/B0GXCM3GW1',
    color: '#98D983',
    readView: 'at',
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
