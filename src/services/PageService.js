import { filter } from 'lodash';

const data = [
  {
    id: 1,
    slug: 'about-me',
    title: 'About Me',
    content:
      '<span class="accent f1 lh-5 pa1 pt0 pr3 fl">I</span> am a data analytics professional with a passion for learning. My interests range from data science to web development to design. Outside of work, I am a huge foodie who enjoys being the kitchen no less than being at the dining table.',
    image: {
      source_url: '',
    },
  },
  {
    id: 2,
    slug: 'experience',
    title: 'Work Experience',
    content:
      '<ul><li class="pa2">Software Engineer @ <a href="https://www.smove.sg/">smove</a>, May 2017 - Present</li><li class="pa2">Assistant Director (Data Analytics) @ <a href="http://www.agd.gov.sg/">AGD</a>, Feb 2016 - May 2017</li><li class="pa2">Data Analyst @ <a href="https://www.caas.gov.sg/">CAAS</a>, Jul 2014 - Feb 2016</li></ul>',
    image: {
      source_url: '',
    },
  },
  {
    id: 3,
    slug: 'contact-me',
    title: 'Contact Me',
    content:
      '<a href="https://github.com/lyzs90"><i class="fa fa-4x fa-github ma3 dim" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/lyzs90/"><i class="fa fa-4x fa-linkedin-square ma3 dim" aria-hidden="true"></i></a>',
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
