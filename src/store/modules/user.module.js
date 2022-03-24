const state = {
  user_data: {},
};

const actions = {
  setUser({ commit }, payload) {
    commit("setUser", payload);
  },
};

const mutations = {
  setUser(state, payload) {
    state.user_data = payload;
  },
};

export const user = {
  namespaced: true,
  state,
  mutations,
  actions,
};
