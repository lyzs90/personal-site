import { filter } from 'lodash';

const data = [
  {
    id: 1,
    slug: 'vuewp',
    title: 'vuewp',
    content:
      'An elegant, responsive SPA powered by VueJS and the Wordpress REST v2 API.',
    image: {
      source_url: '',
    },
  },
  {
    id: 2,
    slug: 'E-8T',
    title: 'E-8T',
    content:
      'A food recommendation chatbot for Facebook Messenger. Powered by Node and the Microsoft Bot Framework.',
    image: {
      source_url: '',
    },
  },
  {
    id: 3,
    slug: 'booking-data-viz',
    title: 'Booking Data Visualization',
    content:
      "A React/Redux-based dashboard to track fleet utilization based on a week's worth of car bookings data.",
    image: {
      source_url: '',
    },
  },
  {
    id: 4,
    slug: 'ecommerce',
    title: 'e-commerce',
    content:
      'An Angular/Sails e-commerce app based off the Angular Phone Catalog tutorial.',
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
