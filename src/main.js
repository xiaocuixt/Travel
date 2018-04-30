// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css' // 解决多倍屏上面1像素边框的问题
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 等价于rooter: rooter
  components: { App }, // 等价于App: App,当键值相同时可省略写
  template: '<App/>'
})
