//对axios进行二次封装
import axios from "axios";

const requests = axios.create({

    // 配置对象
    // 基础路径，发请求的时候,路径当中会出现api
    baseURL: "/api",
    // 请求超时时间
    timeout:5000,

})

// 请求拦截器：再发送请求之前，请求拦截器可以检测到，可以在发送请求之前做一些事情
requests.interceptors.request.use(config => {

   
    
    // config:配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})

// 响应拦截器
requests.interceptors.response.use(res => {
    
    return res.data;

}, err => {
    
    // return Promise.reject(new Error(err))
    return Promise.reject(new Error('failed'))
});

export default requests;