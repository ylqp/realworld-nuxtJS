
/**
 * 请求包装
 */

import axios from 'axios'
// 创建请求对象
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
    // baseURL: 'http://realworld.api.fed.lagounews.com'
})
// 通过插件机制获取到上下文对象（query、params、req、res、app、store...） 
// 插件导出函数必须坐位default 成员
export default ({store}) => {
    
    // 响应拦截器
    request.interceptors.request.use(function (config) {
        // Do something before request is sent
        // 请求就会经过这里
        const { user } = store.state

        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }

        // 返回 config 请求配置对象
        return config
    }, function (error) {
        // 如果请求失败(此时请求还没有发出去)就会进入这里
        // Do something with request error
        return Promise.reject(error)
    })
}
    
