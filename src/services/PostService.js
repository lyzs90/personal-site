import { filter } from 'lodash';

const data = [
  {
    id: 1,
    slug: 'vuewp',
    title: 'vuewp',
    content:
      'A Wordpress Theme / SPA hybrid powered by VueJS and the Wordpress REST v2 API.',
    image: {
      source_url:
        'https://github.com/lyzs90/vuewp/raw/master/wp-content/themes/vuewp/screenshot.png',
    },
  },
  {
    id: 2,
    slug: 'E-8T',
    title: 'E-8T',
    content:
      'A food recommendation chatbot for Facebook Messenger. Powered by Node and the Microsoft Bot Framework.',
    image: {
      source_url: 'https://s22.postimg.cc/wn0a30kox/e8t.png',
    },
  },
  {
    id: 3,
    slug: 'booking-data-viz',
    title: 'Booking Data Visualization',
    content:
      "A React/Redux-based dashboard to track fleet utilization based on a week's worth of car bookings data.",
    image: {
      source_url: 'https://s24.postimg.org/mjkdv4sad/smove.png',
    },
  },
  {
    id: 4,
    slug: 'ecommerce',
    title: 'e-commerce',
    content:
      'An Angular/Sails e-commerce app based off the Angular Phone Catalog tutorial.',
    image: {
      source_url: 'https://gifyu.com/images/ezgif.com-video-to-gif549d2.gif',
    },
  },
  {
    id: 5,
    slug: 'pomodoro',
    title: 'react-pomodoro',
    content: 'A React/Redux implementation of the Pomodoro timer.',
    image: {
      source_url: 'https://s1.postimg.org/98wwov31xr/screenshot.png',
    },
  },
  {
    id: 6,
    slug: 'this',
    title: 'this',
    content: "You're looking at it ¯_(ツ)_/¯",
    image: {
      source_url: '',
    },
  },
];

export default {
  get(slug) {
    return new Promise(resolve => {
      const [item] = filter(data, d => d.slug === slug);
      resolve(item);
    });
  },

  getAll() {
    return new Promise(resolve => {
      resolve(data);
    });
  },
};
