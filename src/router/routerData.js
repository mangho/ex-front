import Home from '@/views/home.vue'
export default [{
    path: '/',
    name: 'home',
    meta: {
        title: '首页'
    },
    component:Home,
},{
    path: '*',
    name: '404',
    meta: {
        title: `404`
    },
    component:  () => import('@/views/404.vue')
},
{
    path: '/profolio',
    name: 'profolio',
    meta: {
        title: `作品集`
    },
    component:  () => import('@/views/profolio.vue')
},
{
    path: '/profolio-detail/:id',
    name: 'profolio-detail',
    meta: {
        title: ''
    },
    component:  () => import('@/views/profolio-detail.vue')
},
{
    path: '/blog',
    name: 'blog',
    meta: {
        title: `文章`
    },
    component:  () => import('@/views/blog.vue')
},
{
    path: '/blog-detail',
    name: 'blog-detail',
    meta: {
        title: `文章`
    },
    component:  () => import('@/views/blog-detail.vue')
},
{
    path: '/about',
    name: 'about',
    meta: {
        title: `关于`
    },
    component:  () => import('@/views/about.vue')
},]