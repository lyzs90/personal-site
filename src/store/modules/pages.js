import { isEmpty } from 'lodash';

import PageService from '../../services/PageService';
import * as types from '../mutation-types';

// initial state
const state = {
  items: [],
  item: {},
};

// getters
const getters = {
  allPages: state => state.items,
  currentPage: state => state.item,
};

// actions
const actions = {
  getAllPages({ commit }) {
    if (!isEmpty(state.items)) {
      return state.items;
    }

    return PageService.getAll().then(pages => {
      commit(types.FETCH_PAGES, { pages });
    });
  },

  getPage({ commit }, slug) {
    return PageService.get(slug).then(page => {
      commit(types.FETCH_PAGE, { page });
    });
  },
};

// mutations
const mutations = {
  [types.FETCH_PAGES](state, { pages }) {
    state.items = pages;
  },

  [types.FETCH_PAGE](state, { page }) {
    state.item = page;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
