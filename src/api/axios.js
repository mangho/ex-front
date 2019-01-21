import axios from 'axios'
import browser from '../common/browser'

// 创建 axios 实例
let http = axios.create({
    // headers: {'Content-Type': 'application/json'},
    timeout: 6000
})

// 设置 post、put 默认 Content-Type
http.defaults.headers.post['Content-Type'] = 'application/json'
http.defaults.headers.put['Content-Type'] = 'application/json'

// 添加请求拦截器
http.interceptors.request.use(config => {
    if (config.method === 'post' || config.method === 'put') {
        // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
        config.data = JSON.stringify(config.data)
    } else if (config.method === 'get' && browser.ie) {
        // 给GET 请求后追加时间戳， 解决IE GET 请求缓存问题
        let symbol = config.url.indexOf('?') >= 0 ? '&' : '?'
        config.url += symbol + '_=' + Date.now()
    }
    // 请求发送前进行处理
    return config
}, error => {
    // 请求错误处理
    return Promise.reject(error)
})

// 添加响应拦截器
http.interceptors.response.use(res => {
    let {
        data
    } = res
    return data
}, error => {
    let info = {}

    if (!error.response) {
        info = {
            code: 5000,
            message: 'Network Error'
        }
    } else {
        // 此处整理错误信息格式
        let {
            status,
            statusText,
            data
        } = error.response
        info = {
            code: status,
            data: data,
            msg: statusText
        }
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    info.message = '请求错误'
                    break

                case 401:
                    info.message = '未授权，请登录'
                    break

                case 403:
                    info.message = '拒绝访问'
                    break

                case 404:
                    info.message = `请求地址出错: ${error.response.config.url}`
                    break

                case 408:
                    info.message = '请求超时'
                    break

                case 500:
                    info.message = '服务器内部错误'
                    break

                case 501:
                    info.message = '服务未实现'
                    break

                case 502:
                    info.message = '网关错误'
                    break

                case 503:
                    info.message = '服务不可用'
                    break

                case 504:
                    info.message = '网关超时'
                    break

                case 505:
                    info.message = 'HTTP版本不受支持'
                    break

                default:
            }
        }
    }
    console.log(`${info.message} , code: ${info.code}`);
    return Promise.reject(info)
})

/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function () {
    return http
}