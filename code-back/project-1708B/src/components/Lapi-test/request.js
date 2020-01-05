/**
 * @function [axios拦截器] 
 * @param {拦截}
 * 1. 添加响应头信息 （比如授权验证，token）
 * 2. 显示弹出框 提醒用户
 * 
 * @param {响应}
 * 1. 处理响应数据
 * 2. 弹出框消失
 * 
 */

import axios from 'axios';
import '../../plugins/index'
import { Toast } from 'vant'
import store from '../../store/index'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000/', // 项目上线上线之前 - 接口连调路径
  timeout: 2000,
})

instance.interceptors.request.use((config) => {
 // 添加请求头信息 // 弹框提示出现;
  // 发起请求的时候，出现弹出框
  // store.dispatch('showEvent', true)

  // 授权处理
  config.authorization = 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
  // token处理
  config.token = localStorage.getItem('token');
  // 参数处理
  config.method === 'post' ? config.data = qs.stringify({...config.data}) : config.params = {...config.params};

  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

  return config;

}, (err) => {
  Promise.reject(err)
})

instance.interceptors.response.use((response) => {
  // 弹框提示消失; 
  // 当请求返回数据之后，让弹出框消失
  // setTimeout(() => {
  //   store.dispatch('showEvent', false)
  // }, 3000)
  console.log(response.data, '--------------------')

  if (response.data.code === 1) {
    return response.data
  } else {
    // 提示一般性错误信息
    Toast(response.data.msg)
  }
}, (error) => {

  let status = JSON.parse(JSON.stringify(error)).message. substr(-3);
  switch(status) {
    case '404':
     Toast.fail('找不到资源了')
    break;
    case '401':
      Toast.fail('登陆权限错误')
    break;
    case '500':
      Toast.fail('服务器内部错误,请联系网管')
    break;
  }
})

export default instance;
