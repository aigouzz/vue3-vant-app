export default {
  addCart (state, payload) {
    state.cartCount = payload.count
  },
  setLogin(state, payload) {
    state.isLogin = payload
  },
  setNickName(state, payload) {
    state.nickName = payload.nickName
    state.loginName = payload.loginName
    localStorage.setItem('nickName', payload.nickName)
    localStorage.setItem('loginName', payload.loginName)
  }
}
