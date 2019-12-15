import { getData } from '../api'

export default {
  getUserList(context) {
    getData('http://localhost:9000/api/userList').then((res) => {
      context.commit('SET_USER_LIST', res.data)
    })
  }
}