export default {
  getUsersData(state) {
    let count = state.list.reduce((acc, item) => {
      return acc + item.msgCount
    }, 0)

    return {
      list: state.list,
      msgCount: count
    }
  }
}