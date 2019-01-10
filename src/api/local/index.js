import api from '../index'
const baseUrl = 'http://localhost:3000/'
export default {
    getData(urlPa,params) {
        return api.get(baseUrl+urlPa, params)
    }
}