import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home' // @表示src目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
