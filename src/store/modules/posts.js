import { isEmpty } from 'lodash';

import PostService from '../../services/PostService';
import * as types from '../mutation-types';

// initial state
const state = {
  items: [],
  item: {},
};

// getters
const getters = {
  allPosts: state => state.items,
  currentPost: state => state.item,
  limitedPosts: state => state.items.slice(0, 5),
};

// actions
const actions = {
  getAllPosts({ commit }) {
    if (!isEmpty(state.items)) {
      return state.items;
    }

    return PostService.getAll().then(posts => {
      commit(types.FETCH_POSTS, { posts });
    });
  },

  getPost({ commit }, slug) {
    return PostService.get(slug).then(post => {
      commit(types.FETCH_POST, { post });
    });
  },
};

// mutations
const mutations = {
  [types.FETCH_POSTS](state, { posts }) {
    state.items = posts;
  },

  [types.FETCH_POST](state, { post }) {
    state.item = post;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
