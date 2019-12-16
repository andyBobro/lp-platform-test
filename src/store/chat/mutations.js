export default {
  SET_CHAT(state, payload) {
    state.selected = payload
    document.dispatchEvent(new Event('chatLoader:hide'))
  },
  UPDATE_CHAT(state, payload) {
    state.history.push(payload)
  }
}