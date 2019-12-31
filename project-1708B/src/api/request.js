/**
 * axios 所有的请求都集中到一起。 
 * 请求
 * 响应
 * 状态码的封装是为了给用户进行提示
 */

import axios from 'axios'
import qs from 'qs';
import '../plugins/index'

import { Toast } from 'vant';

// 创建一个axios的实例 
const instance = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});


// 拦截器 拦截后端响应给前端的数据
instance.interceptors.request.use((config) => {
    return config;
})

instance.interceptors.response.use(function (response) {
    // Do something with response data
    console.log(response, 'response')
    return response;
  }, function (error) {
    Toast('404错误')
      // 错误 404 状态码封装区域 401 502 500
    // Do something with response error
    return Promise.reject(error);
  });
export default instance;
