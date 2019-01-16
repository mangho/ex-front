import api from '../index'
const baseUrl = 'http://localhost:8091/'
export default {
    getCartData(params) {
        return api.post(baseUrl.concat("/api/cart"), params)
    },
    getUserInfo(params) {
        return api.post(baseUrl.concat("/api/user"), params)
    },
    getUserFinance(params) {
        return api.post(baseUrl.concat("/api/finance"), params)
    },
    getUserInfo(params) {
        return api.post(baseUrl.concat("/api/userinfo"), params)
    },
}