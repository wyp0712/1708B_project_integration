/**
 * 
 * @param { get请求方式，参数为params }
 * @param { post请求方式，参数为data }
 * 
 */

import service from './request' // ajax
export const getPageData = params => {
  console.log(params, 'data----api.js')
  // url 请求方式 默认get 参数
  return service({
      url: '/users/test',
      method: 'get',
      params
  })
};

// users/post_test
export const getPostTest = data => {
  // console.log(data, 'data----post测试接口')
  return service({
    url: '/users/post_test',
    method: 'post',
    data
  })
}
