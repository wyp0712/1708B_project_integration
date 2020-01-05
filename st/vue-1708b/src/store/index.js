import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showPop: false,
    topTabIndex: 0,
    bottomTabIndex: 0
  },
  getters: {

  },
  mutations: {
    showPopEvent(state, status) {
      state.showPop = status;
    },
    topTabEvent(state, index) {
      state.topTabIndex = index;
    },
    bottomTabEvent(state, index) {
      state.bottomTabIndex = index;
    }
  },
  actions: {
    updateShowPopStatus({ commit }, status) {
      commit('showPopEvent', status)
    },
    updateTopTabIndex({
      commit
    }, index) {
      commit('topTabEvent', index)
    },
    updateBottomTabIndex({
      commit
    }, index) {
      commit('bottomTabEvent', index)
    }
  },
  modules: {
  },
})
