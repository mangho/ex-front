import api from '../index'
const baseUrl = 'http://localhost:8091/'
export default {
    getUserCartData(params) {
        return api.get(baseUrl.concat("/api/cart"), params)
    },
    getUserInfo(params) {
        return api.get(baseUrl.concat("/api/news"), params)
    },
    getUserFinance(params) {
        return api.get(baseUrl.concat("/api/finance"), params)
    },
    getUserInfo(params) {
        return api.get(baseUrl.concat("/api/userinfo"), params)
    },
    postUserInfo(params) {
        return api.post(baseUrl.concat("/api/userinfo"), params)
    },
}