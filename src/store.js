import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let isDark=localStorage.getItem('dark')
export default new Vuex.Store({
  state: {
    dark:JSON.parse(isDark)||false
  },
  mutations: {
    setTheme(state){
        state.dark=!state.dark
        localStorage.setItem('dark', state.dark)
    }
  },
  actions: {

  }
})
