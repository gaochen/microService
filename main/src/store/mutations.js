import {
  GET_USERINFO,
  GET_USERID,
  RECORD_USERINFO,
  GET_QUICKENTRANCE,
  GET_MENU,
  DELELE_USERINFO,
  GET_PAYTIP,
  SET_API_HOST,
  SET_INDEX_HOST,
  SET_MALLMEMBER_HOST,
  SET_MEMBER_HOST,
  SET_THIRDMEMBER_HOST
} from './mutation-types.js'

export default {
  // 获取用户信息存入vuex
  [GET_USERINFO] (state, info) {
    // if (state.userInfo && (state.userInfo.userName !== info.userName)) {
    //     return;
    // };
    if (info) {
      state.userInfo = { ...info }
    } else {
      state.userInfo = null
    }
  },
  // 清除用户信息
  [DELELE_USERINFO] (state) {
    state.userInfo = null
  },
  // 获取userId
  [GET_USERID] (state, info) {
    if (state.userId && state.userId !== info.userId) {
      return
    }
    console.log(info)
    if (info.userId) {
      state.userId = { ...info }
    } else {
      state.userId = null
    }
  },
  [GET_QUICKENTRANCE] (state, info) {
    if (state.data && state.data.length === 0) {
      return
    }

    state.quickEntrance = info
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    // setStore('user_id', info.user_id)
  },
  // 更新侧边菜单
  [GET_MENU] (state, info) {
    state.asideMenu = info
  },
  // 获取缴费提示状态
  [GET_PAYTIP] (state, info) {
    state.payTip = info
  },
  [SET_API_HOST] (state, info) {
    state.apiHost = info
  },
  [SET_INDEX_HOST] (state, info) {
    state.indexHost = info
  },
  [SET_MALLMEMBER_HOST] (state, info) {
    state.mallmemberHost = info
  },
  [SET_MEMBER_HOST] (state, info) {
    state.memberHost = info
  },
  [SET_THIRDMEMBER_HOST] (state, info) {
    state.thirdmemberHost = info
  }
}
