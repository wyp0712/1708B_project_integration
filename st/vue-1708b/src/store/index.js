import Vue from 'vue'
import Vuex from 'vuex'
import tab from './modules/tab'
import cart from './modules/cart'
Vue.use(Vuex)

const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}

/**
 * 
 * @param { 组件内部使用：maph函数 [] 形式 }
 * 
 */

/**
 * 
 * state:  数据仓库
 * getters:  计算属性
 * mutations: 提交同步代码
 * actions:   提交异步代码
 * modules:   模块化注册的地方
 * plugins:   插件注册的地方
 * 
 */

export default new Vuex.Store({
  modules: {
    tab,
    cart
  },
  plugins: [myPlugin]
})
