import Vue from 'vue'
import Router from 'vue-router'
// 该写法一次将js代码全部加载，当项目比较小时可以考虑，当项目比较大时，使用下面的异步加载js效果，每页根据需求加载
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home') // @表示src目录
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    },
    {
      path: '/order/new',
      name: 'Order',
      component: () => import('@/pages/order/Order')
    }
  ],
  // 对于所有路由导航，简单地让页面滚动到顶部。
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
