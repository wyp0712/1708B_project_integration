import axios from 'axios';
import qs from "qs";
import '../plugins/index'
import { Toast } from 'vant'


/****** 创建axios实例 ******/
const service = axios.create({
    // baseURL: process.env.BASE_URL,  // api的base_url  代理
    timeout: 5000  // 请求超时时间
});

/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
    app.$vux.loading.show({
        text: '数据加载中……'
    });

    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return config;
}, error => {  //请求错误处理
    app.$vux.toast.show({
        type: 'warn',
        text: error
    });
    Promise.reject(error)
});


/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(response => {  //成功请求到数据

    app.$vux.loading.hide();

        if (response.data.result === 'TRUE') {
            return response.data;
        } else {
            app.$vux.toast.show({  //常规错误处理
                type: 'warn',
                text: response.data.data.msg
            });
        }
    },
    error => {  //响应错误处理

        let text = '';
        // text = JSON.parse(JSON.stringify(error)).response.status === 404
        //     ? '404'
        //     : '网络异常，请重试';

        // text =  JSON.parse(JSON.stringify(error)).response.status === 401
        //     ? '401'
        //     : ''

        // text =  JSON.parse(JSON.stringify(error)).response.status === 402
        // ? '401'
        // : ''


        return Promise.reject(error)
    }
);


export default service; // axioss