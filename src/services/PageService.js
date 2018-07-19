import { filter } from 'lodash';

const data = [
  {
    id: 1,
    slug: 'about-me',
    title: 'About Me',
    content:
      '<span class="accent f1 lh-5 pa1 pt0 pr3 fl">I</span> am a technology enthusiast with a passion for learning. My professional interests range from data science to web development to design. My current focus is on software engineering, but my overall goal is to gain an intimate understanding of the full development lifecycle for data-driven web applications.<div class="pt2 pb2"></div><p>Outside of work, I am a huge foodie who enjoys being the kitchen no less than being at the dining table.</p>',
    image: {
      source_url: '',
    },
  },
  {
    id: 2,
    slug: 'experience',
    title: 'Work Experience',
    content:
      '<ul class="pa3 pl4"><li class="pa2">Freelance Developer @ <a href="https://trypencil.com/">Pencil</a>, March 2018 - Present</li><li class="pa2">Software Engineer @ <a href="https://www.smove.sg/">smove</a>, May 2017 - July 2018</li><li class="pa2">BI & Data Analyst @ <a href="http://www.agd.gov.sg/">AGD</a>, Feb 2016 - May 2017</li><li class="pa2">Data Analyst @ <a href="https://www.caas.gov.sg/">CAAS</a>, Jul 2014 - Feb 2016</li></ul><div class="pt2 pb2"></div><p class="pl3">You can find my detailed resume <a href="https://standardresume.co/shemleong">here</a></p>',
    image: {
      source_url: '',
    },
  },
  {
    id: 3,
    slug: 'contact-me',
    title: 'Contact Me',
    content:
      '<p class="pa2 mb4">Need help building something? Drop me a message:</p><a href="https://github.com/lyzs90"><i class="fa fa-4x fa-github ma3 dim" aria-hidden="true"></i></a><a href="https://www.linkedin.com/in/lyzs90/"><i class="fa fa-4x fa-linkedin-square ma3 dim" aria-hidden="true"></i></a>',
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
