import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: { // 同步代码
    todoList(state, arr) {
      state.list = arr
    }
  },
  actions: { // 异步代码  提交给mutaions
    todoList({commit}) {
      axios.get('/mock/data.json').then(res => {
        commit('todoList', res.data.movie)
      })
    }
  },
  getters: {
    getTotalCount(state) {
      return state.list.reduce((n, item) => {
        return n + item.count
      }, 0)
    }
  },
  modules: {
  }
})
