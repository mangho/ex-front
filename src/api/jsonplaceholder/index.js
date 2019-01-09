import api from '../index'
import urls from './urls'

export default {
    getPosts(params) {
        return api.get(urls.posts, params)
    },
    getPosts1(params){
        return api.get(urls.posts1, params)
    },
    getPhotos(params) {
        return api.get(urls.photos, params)
    },
    getPhotos1(params){
        return api.get(urls.photos1, params)
    }
}