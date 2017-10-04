import { filter } from 'lodash';

const data = [
  {
    id: 1,
    slug: 'about-me',
    title: 'About Me',
    content: '',
    image: {
      source_url: '',
    },
  },
  {
    id: 2,
    slug: 'contact-me',
    title: 'Contact Me',
    content: '',
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
