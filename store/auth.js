export const state = () => {
  return {
    token: null
  }
}
export const mutations = {
  setToken(state, token) {
    state.token = token
  }
}
