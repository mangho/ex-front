import api from '../api'
const baseUrl = 'http://localhost:8091';

export default {
    getNews:params=> {
        let ins = params ? '?'+params : '';
        return api.get(baseUrl + "/v1/news" + ins)
    },
    createNews:params=> {
        return api.post(baseUrl + "/v1/news" ,params)
    },
    updateNews:params=>{
        return api.put(baseUrl + "/v1/news/"+params.id, params)
    },
    deleteNews:params=>{
        return api.delete(baseUrl + "/v1/news/"+params.id)
    },
    getUsers:params=> {
        let ins = params ? '?'+params : '';
        return api.get(baseUrl + "/v1/users" + ins)
    },
    createUsers:params=>{
        return api.post(baseUrl + "/v1/userinfo/"+ params.id)
    },
    updateUsers:params=>{
        return api.put(baseUrl + "/v1/userinfo/"+params.id)
    }
}