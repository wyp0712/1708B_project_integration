import axios from 'axios';
/**
 * @param { axios发起请求 1. 请求  2. 响应 }
 */ 
// 创建实例 axios
const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 2000,
})

instance.interceptors.request.use((config) => {
  console.log(config,' config----------config')
  // token
  config.headers.token = localStorage.getItem('token');
  // 授权验证
  config.headers.auth = 'Basic';
  // 参数处理 post get
  config.method === 'post'
    ?config.data = qs.stringify({...config.data})
    :config.params = {...config.params}

    console.log(config.params, '-----------我是get参数')
  // 数据响应格式：
   config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

  return config;
}, (err) => {
  Promise.reject(err)
})

instance.interceptors.response.use((response) => {
   
  if (response.data.code === 1) {
    return response.data
  } else {
    console.log('error')
  }

}, (error) => {
  // 状态码

})

export default instance;


