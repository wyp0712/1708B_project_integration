import ajax from './request';
/**
 * @param { get: params }
 * @param { post: data }
 * 
 * @param { 登陆 params: username password  }
 * 
 */

 // 登陆
export const getLogin = (data) => {
  return ajax({
    url: '/api/login',
    method: 'post',
    data
  })
} 

// 注册
export const getRegister = (data) => {
  return ajax({
    url: '/api/register',
    method: 'post',
    data
  })
} 

// 查
export const getBlogList = () => {
  return ajax({
    url: '/api/blog/blog_list',
    method: 'get',
  })
} 

// 增
export const getInsertBlog = (data) => {
  return ajax({
    url: '/api/blog/insert',
    method: 'post',
    data
  })
} 

// 改
export const getUpdateBlog = (data) => {
  return ajax({
    url: '/api/blog/update_list',
    method: 'post',
    data
  })
}

// 删
export const getDeteleBlog = (params) => {
  return ajax({
    url: '/api/blog/delete_item',
    method: 'get',
    params
  })
}

// 
export const getDetailItem = (params) => {

  return ajax({
    url: '/api/blog/detail',
    method: 'get',
    params
  })
} 



