// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'babel-polyfill' // 兼容不支持promise的浏览器

import 'styles/reset.css'
import 'styles/border.css' // 解决多倍屏上面1像素边框的问题
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 等价于rooter: rooter
  store,
  components: { App }, // 等价于App: App,当键值相同时可省略写
  template: '<App/>'
})
