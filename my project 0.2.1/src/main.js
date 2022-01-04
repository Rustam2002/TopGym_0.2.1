import Vue from 'vue'
import store from '@/store/index'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
require('bootstrap')

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
