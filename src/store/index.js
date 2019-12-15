import Vue from 'vue'
import Vuex from 'vuex'
import login from './login/index'
import userList from './userList/index'
import chat from './chat/index'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    userList,
    chat
  }
})
