import { getData } from '../api'

export default {
  getChat(context, params) {
    getData(`http://localhost:9000/api/chats/${params.id}`).then((res) => {
      context.commit('SET_CHAT', res.data)
    })
  }
}