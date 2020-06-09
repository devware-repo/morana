export const actions = {
  nuxtServerInit({ commit }, { app }) {
    const token = app.$cookies.get('accessToken')
    if (!token) {
      commit('auth/setToken', null)
      app.$axios.setToken(false)
    }
    commit('auth/setToken', token)
    app.$axios.setToken(token)
  }
}
