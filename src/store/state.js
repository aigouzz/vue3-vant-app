
export default {
  cartCount: 0,
  isLogin: !!localStorage.getItem('nickName'),
  nickName: localStorage.getItem('nickName'),
  loginName: localStorage.getItem('loginName')
}
