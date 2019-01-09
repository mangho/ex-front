import api from '../index'
const baseUrl = 'https://picsum.photos/'
export default {
    getPhotos(urlPa,params) {
        return api.get(baseUrl+urlPa, params)
    }
}