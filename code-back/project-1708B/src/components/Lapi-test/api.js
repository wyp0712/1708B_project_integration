/**
 * 
 * @param { get请求方式，参数为params }
 * @param { post请求方式，参数为data }
 * 
 */

import service from './request' // ajax

export const getTab1 = ({url, method, params}) => {
  console.log(params, 'params')
  return service({
    url: '/api/task/list',
    method: 'get',
    params
  })
}

export const getUserInfo = data => {
  return service({
    url: '/api/user/info',
    method: 'get',
    data
  })
}

export const getLoginMsg = data => {
  return service({
    url: '/api/login',
    method: 'post',
    data
  })
}

export const getTestData = params => {
  return service({
      url: '/api/get-test',
      method: 'get',
      params
  })
};



// users/post_test
export const getPostTest = data => {
  console.log(data, 'data')
  return service({
    url: '/users/post_test',
    method: 'post',
    data
  })
}
