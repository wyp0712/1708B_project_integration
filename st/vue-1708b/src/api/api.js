import ajax from './request';

/**
 * @param { get: params }
 * @param { post: data }
 */

 // 图片上传接口

export const uploadImg = (data) => {
  // upload_img
  return ajax({
    url: '/api/upload_img',
    method: 'post',
    data
  })
}

// 表单提交接口
export const postFormData = (data) => {
  return ajax({
    url: '/api/post_submit',
    method: 'post',
    data
  })
} 

// post接口测试
export const testPostList = (data) => {
  return ajax({
    url: '/api/post_test',
    method: 'post',
    data
  })
}

// get接口测试
export const getLogin = (params) => {
  return ajax({
    url: '/api/login',
    method: 'get',
    params
  })
}

export const getUserList = (params) => {
  return ajax({
    url: '/api/task/list',
    method: 'get',
    params
  })
}



