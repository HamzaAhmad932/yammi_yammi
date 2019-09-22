import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import JQuery from 'jquery'
import '@/inc_bundle.scss'
global.$ = global.jQuery = JQuery

require('./inc_bundle.js')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')