export default {
  SET_CHAT(state, payload) {
    console.log(state, payload);

    state.selected = payload
  },
  UPDATE_CHAT(state, payload) {
    state.history.push(payload)
  }
}