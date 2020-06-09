export default ({ store, app: { $axios } }) => {
  if (!store.state.auth.token) {
    $axios.setToken(false)
    return
  }
  $axios.setToken(store.state.auth.token)
}
