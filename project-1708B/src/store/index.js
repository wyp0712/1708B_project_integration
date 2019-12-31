import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as type from './type'
console.log(type, 'type')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    bookData: []
  },
  mutations: { // 同步代码
    todoList(state, arr) {
      state.list = arr
    },
    [type.INIT_BOOK_DATA](state, data) {
      state.bookData = data; 
    }
  },
  actions: { // 异步代码  提交给mutaions
    initBookData({ commit }, data) {
      console.log(data, 'data')
      commit(type.INIT_BOOK_DATA, data)
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
