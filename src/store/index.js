import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  mutations: {
    mutateCity (state, city) {
      state.city = city
    }
  }
})