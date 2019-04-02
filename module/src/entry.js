/** 入口文件 **/
// import App from '@/pages/index.vue' // 路由器根实例
import storeModules from '@/store/index'

const APP_NAME = 'university'

console.log('entry.js')

const three = r =>
  require.ensure([], () => r(require('@/components/three')), 'three')
const four = r =>
  require.ensure([], () => r(require('@/components/four')), 'four')

let routerModules = [
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
  // {
  //   path: '/university',
  //   name: 'university',
  //   component: import('@/pages/index')
  //   redirect: '/university/home',
  //   children: [
  //     {
  //       path: 'home',
  //       component: supplierIndex,
  //       name: 'supplierIndex'
  //     },
  //     {
  //       path: 'myStudy',
  //       component: myStudy,
  //       name: 'myStudy'
  //     },
  //     {
  //       path: 'course',
  //       component: course,
  //       name: 'course'
  //     }
  //   ]
  // }
]

window.bapp &&
  window.bapp.util.registerApp(APP_NAME, { storeModules, routerModules })

console.log(window.bapp)
