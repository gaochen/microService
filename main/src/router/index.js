import Vue from 'vue'
import Router from 'vue-router'
import handle from '@/utils/handle'

Vue.use(Router)

const one = r => require.ensure([], () => r(require('@/components/one')), 'one')
const two = r => require.ensure([], () => r(require('@/components/two')), 'two')
const notFound = r =>
  require.ensure([], () => r(require('@/components/notFound')), 'notFound')

export default new Router({
  base: '/',
  mode: 'hash',
  routes: [
    {
      path: '*',
      // component: notFound
      async beforeEnter(to, from, next) {
        // next('/notFound')
        // 业务线拦截
        let isService = await handle(to, from, next)

        // 非业务线页面，走默认处理
        if (!isService) {
          next('/notFound')
        }
      }
    },
    {
      path: '/notFound',
      name: 'notFound',
      component: notFound
    },
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/one',
      name: 'one',
      component: one
    },
    {
      path: '/two',
      name: 'two',
      component: two
    }
  ]
})
