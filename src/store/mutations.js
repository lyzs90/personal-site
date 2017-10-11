import { Power2, TimelineLite } from 'gsap';

import * as types from './mutation-types';

const mutations = {
  [types.OPEN_NAVIGATION](state) {
    window.scrollTo(0, 0);
    state.navigation = true;

    const t1 = new TimelineLite();

    t1.to('#top-bar', 0.5, {
      x: -30,
      y: 0,
      rotation: -115,
      ease: Power2.easeOut,
    });

    t1.to(
      '#middle-bar',
      0.5,
      { x: -80, opacity: 0, ease: Power2.easeOut },
      '-=0.5',
    );

    t1.to('#middle-bar', 0, { x: 160, ease: Power2.easeOut });

    t1.to('#top-bar', 0.5, {
      x: 0,
      y: 9,
      rotation: -135,
      ease: Power2.easeOut,
    });

    t1.to(
      '#bottom-bar',
      0.5,
      { y: 30, opacity: 0, ease: Power2.easeOut },
      '-=1',
    );

    t1.to(
      '#middle-bar',
      0.5,
      {
        x: 0,
        y: 0,
        opacity: 1,
        rotation: 135,
        ease: Power2.easeOut,
      },
      '-=0.5',
    );
  },

  [types.CLOSE_NAVIGATION](state) {
    window.scrollTo(0, 0);
    state.navigation = false;

    const t2 = new TimelineLite();

    t2.to('#top-bar', 0.5, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      ease: Power2.easeOut,
    });

    t2.to(
      '#middle-bar',
      0.5,
      { x: 0, y: 0, rotation: 0, opacity: 1, ease: Power2.easeOut },
      '-=0.5',
    );

    t2.to(
      '#bottom-bar',
      0.5,
      { x: 0, y: 0, opacity: 1, rotation: 0, ease: Power2.easeOut },
      '-=0.5',
    );
  },
};

export default {
  mutations,
};
