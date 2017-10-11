import { filter } from 'lodash';

const data = [
  {
    id: 1,
    slug: 'about-me',
    title: 'About Me',
    content:
      'am a data analytics professional with a passion for learning. My interests range from data science to web development to design. Outside of work, I am a huge foodie who enjoys being the kitchen no less than being at the dining table.',
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
