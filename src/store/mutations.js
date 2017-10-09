import * as types from './mutation-types';

const mutations = {
  [types.TOGGLE_NAVIGATION](state) {
    window.scrollTo(0, 0);
    state.navigation = !state.navigation;
  },
};

export default {
  mutations,
};
