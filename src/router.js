import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
const hostName="Koa test"
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: hostName
      },
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title:hostName+' - about'
      },
      component: () => import( './views/About.vue')
    },
    {
      path: '/help',
      name: 'help',
      meta: {
        title: hostName+' - GET方法'
      },
      component: () => import( './views/help.vue')
    }
  ]
})
