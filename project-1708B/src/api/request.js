/**
 * axios 所有的请求都集中到一起。 
 * 请求
 * 响应
 * 状态码的封装是为了给用户进行提示
 */

import axios from 'axios'
import qs from 'qs';
import '../plugins/index'
import store from '../store/index'

import { Toast } from 'vant';

// 创建一个axios的实例 
const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});


// 拦截器 拦截后端响应给前端的数据
instance.interceptors.request.use((config) => {
    // app.$vux.loading.show({
    //     text: '数据加载中……'
    // });
    store.commit('showEvent', true)
    console.log(config, 'config')

    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return config;
}, error => {  //请求错误处理
  // app.$vux.toast.show({
  //     type: 'warn',
  //     text: error
  // });
  Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
    // Do something with response data
    setTimeout(() => {
      store.commit('showEvent', false)
    }, 3000)
    if (response.data.errCode === 0) {
      return response.data;
    } else {
      Toast.fail(response.data.msg);
    }
    return response.data;
  }, function (error) {
    // 错误 404 状态码封装区域 404 500
    // Do something with response error
    console.log(error, 'error')
    // const status = JSON.parse(JSON.stringify(error)).message.substr(-3);
    switch(status) {
      case '404':
        Toast.fail('你的资源找不到了');
      break;
      case '500':
        Toast.fail('服务器内部错误，请联系管理员');
      break;
      default:
        Toast.fail('请求失败');
    }
    return Promise.reject(error);
  });
export default instance;
