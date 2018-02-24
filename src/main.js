// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import exInput from '@/components/ex-input'
import axios from 'axios'
// import $ from 'jquery'

Vue.config.productionTip = false
Vue.component('ex-input', exInput)
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
