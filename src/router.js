import Vue from 'vue'
import routerData from '@/router/routerData'
import Router from 'vue-router'

const siteTitle = "兴之所至"
Vue.use(Router)

export default new Router({
    // mode: 'history',/* 使用history模式就不能自定义输出路径publicPath  */
    routes:routerData.map(item=>{
        return {
            path: item.path,
            name: item.name,
            meta: {
                title: `${item.meta.title} - ${siteTitle}`
            },
            component: item.component,
        }
    }),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})