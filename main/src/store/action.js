import Vue from 'vue'
import { GET_USERINFO, GET_USERID, GET_PAYTIP } from './mutation-types.js'

export default {
  async getUserInfo({ commit, state }) {
    if (state.userInfo == null) {
      state.userInfo = Vue.ls.get('userInfo')
    }
    commit(GET_USERINFO, state.userInfo)
  },
  async setPayTip({ commit, state }, status) {
    commit(GET_PAYTIP, status)
  }
}
