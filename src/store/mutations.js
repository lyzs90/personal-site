import * as types from './mutation-types';

const mutations = {
  [types.TOGGLE_NAVIGATION](state) {
    state.navigation = !state.navigation;
  },
};

export default {
  mutations,
};
