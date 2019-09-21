import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free-solid'
import '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-free-brands'

import App from './App.vue'
import router from './router'
import store from './store'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
