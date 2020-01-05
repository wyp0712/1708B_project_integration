const state = {
  showPop: false,
  topTabIndex: 0,
  bottomTabIndex: 0
}

const actions = {
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
}


const mutations = {
  showPopEvent(state, status) {
    state.showPop = status;
  },
  topTabEvent(state, index) {
    state.topTabIndex = index;
  },
  bottomTabEvent(state, index) {
    state.bottomTabIndex = index;
  }
}

const getters = {

}


export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}