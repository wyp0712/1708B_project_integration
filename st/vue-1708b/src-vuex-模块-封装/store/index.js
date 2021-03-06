import Vue from 'vue'
import Vuex from 'vuex'
import tab from './modules/tab'
Vue.use(Vuex)

const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}

export default new Vuex.Store({
  modules: {
    tab
  },
  plugins: [myPlugin]
})
