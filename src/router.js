import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home.vue'
const hostName = "兴之所至"
Vue.use(Router)

export default new Router({
    // mode: 'history',/* 使用history模式就不能自定义输出路径publicPath  */
    routes: [{
        path: '/',
        name: 'home',
        meta: {
            title: hostName
        },
        component: Home,
    },
    {
        path: '*',
        name: '404',
        meta: {
            title: '404 - ' + hostName
        },
        component: () => import('@/views/404.vue')
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: 'about - ' + hostName
        },
        component: () => import('@/views/about.vue')
    },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})