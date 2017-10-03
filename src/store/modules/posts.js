import PostService from '../../services/PostService';
import * as types from '../mutation-types';

// initial state
const state = {
  items: [],
};

// getters
const getters = {
  allPosts: state => state.items,
};

// actions
const actions = {
  getAllPosts({ commit }) {
    PostService.getAll().then(posts => {
      commit(types.FETCH_POSTS, { posts });
    });
  },
};

// mutations
const mutations = {
  [types.FETCH_POSTS](state, { posts }) {
    state.items = posts;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
