import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import fnc from './modules/functions'
import '@/styles/main.scss'
Vue.config.productionTip = false
Vue.protoType.$fnc=fnc;
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.title)) {
        window.document.title = to.meta.title;
    }
    next()
  })
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
