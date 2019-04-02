import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const three = r =>
  require.ensure([], () => r(require('@/components/three')), 'three')
const four = r =>
  require.ensure([], () => r(require('@/components/four')), 'four')

export default new Router({
  base: '/',
  mode: 'hash',
  routes: [
    {
      path: '/university/three',
      name: 'three',
      component: three
    },
    {
      path: '/university/four',
      name: 'four',
      component: four
    }
  ]
})
