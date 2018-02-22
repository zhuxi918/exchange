import Vue from 'vue'
import Router from 'vue-router'
import exMain from '@/components/ex-main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: exMain
    }
  ]
})
