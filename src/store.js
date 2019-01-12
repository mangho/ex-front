import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activePage:'',
    count: 0
  },
  mutations: {
    setactivePage(state,payload){
      state.activePage=payload.activePage
    },
    increment(state) {
      state.count++
    }
  },
  actions: {

  }
})