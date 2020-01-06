
const state = {
  showPop: false,
  topTabIndex: 0,
  bottomTabIndex: 0
}

const getters = {
  getTotal() {
    return 1;
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

export default {
  namespaced: true, // 命名空间
  state,
  getters,
  mutations,
  actions
}