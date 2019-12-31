import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import plugins from './plugins/index'
import './plugins/index'

Vue.config.productionTip = false

// Vue.prototype.$token = 'hdhdhd'

// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   config.headers.authorization = 'test';
//   config.timeout = '3000'
//   config.token = 'jdjdjdj'
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
