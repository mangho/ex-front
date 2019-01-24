import 'babel-polyfill'
import Vue from 'vue'
import api from './api/install'
import App from './app.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faWeixin,faFacebookF,faGooglePlusG,faWeibo} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './plugins/vuetify.js'
import "@/assets/style.css"
import "@/api/api"
library.add(faWeixin,faFacebookF,faGooglePlusG,faWeibo,fas)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})
Vue.use(api)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
