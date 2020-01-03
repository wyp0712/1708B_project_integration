import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as type from './type'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    bookData: [],
    show: false
  },
  mutations: { // 同步代码
    todoList(state, arr) {
      state.list = arr
    },
    // 控制弹出框
    [type.SHOW_DIALOG](state, flag) {
      state.show = flag;
    },
    [type.INIT_BOOK_DATA](state, data) {
      state.bookData = data; 
    }
  },
  actions: { // 异步代码  提交给mutaions
    initBookData({ commit }, data) {
      commit(type.INIT_BOOK_DATA, data)
    },
    // 弹出框显示隐藏
    showEvent({ commit }, flag) {
      commit(type.SHOW_DIALOG, flag)
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
