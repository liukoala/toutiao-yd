import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storage'

Vue.use(Vuex)
const USER_KEY = 'toutiao-user'
export default new Vuex.Store({
  state: {
    user: getItem(USER_KEY) // 当前登录用户的登录状态(token等数据)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 把数据放到本地存储
      setItem(USER_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
