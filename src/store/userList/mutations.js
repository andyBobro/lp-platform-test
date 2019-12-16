export default {
  SET_USER_LIST(state, payload) {
    state.list = payload
    document.dispatchEvent(new Event('userLoader:hide'))
  }
}