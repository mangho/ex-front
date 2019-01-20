import api from '../index'
const baseUrl = 'http://localhost:8091'
export default {
    getUserCartData(params) {
        return api.get(baseUrl + "/api/cart", params)
    },
    getNews(params) {
        return api.get(baseUrl + "/api/news", params)
    },
    getUserFinance(params) {
        return api.get(baseUrl + "/api/finance", params)
    },
    /**
     * @param {string} id - user id.
     */
    getUserInfo(params) {
        return api.get(baseUrl + "/api/userinfo", params)
    },
    postUserInfo(params) {
        return api.post(baseUrl + "/api/userinfo", params)
    },
}