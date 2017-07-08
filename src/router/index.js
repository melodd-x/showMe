import Vue from 'vue'
import Router from 'vue-router'
import xkIndex from '@/components/xkIndex'
import xkExplain from '@/components/xkExplain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xkIndex',
      component: xkIndex
  },
  {
    path: '/explain',
    name: 'xkExplain',
    component: xkExplain
  }
  ]
})
