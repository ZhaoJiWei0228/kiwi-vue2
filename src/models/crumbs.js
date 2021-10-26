export default {
  namespace: 'crumbs',
  state: {
    crumbs: []
  },
  mutations: {
    update(state, crumbs) {
      state.crumbs = crumbs;
    },
    push(state, crumb) {
      state.crumbs.push(crumb);
    }
  },
  actions: {
    update({ commit }, crumbs) {
      commit('update', crumbs);
    },
    push({ commit }, crumb) {
      commit('push', crumb);
    }
  }
}
