import Vue from 'vue';
import Vuex from 'vuex';

import globalState from './state';
import globalMutations from './mutations';
// import * as actions from "./actions";
// import * as getters from "./getters";
import posts from './modules/posts';
import pages from './modules/pages';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  ...globalState,
  ...globalMutations,
  // actions,
  // getters,
  modules: {
    posts,
    pages,
  },
  strict: debug,
});
