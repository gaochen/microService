import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  name: '这是子项目的store'
}

export default new Vuex.Store({
  state
})
