import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userInfo: null, // 用户信息
  userId: null, // 用户id
  quickEntrance: [], // 快捷入口
  infiniteCategoryMenu: [],
  asideMenu: [],
  unReadMsgNum: 0,
  unReadInquiryNewsNum: 0,
  language: 'en',
  env: '',
  affix: {},
  payTip: false,
  apiHost: '',
  indexHost: '', // 商品前台host,
  mallmemberHost: '', // 成品会员中心host
  memberHost: '', // 大宗会员中心host
  thirdmemberHost: '' // 三方会员中心
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
