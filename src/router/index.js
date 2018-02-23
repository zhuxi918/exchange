import Vue from 'vue'
import Router from 'vue-router'
import exMain from '@/components/ex-main'
import exCoins from '@/components/ex-coins'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: exMain
    },
    {
      path: '/coins',
      name: 'coins',
      component: exCoins
    }
  ]
})
