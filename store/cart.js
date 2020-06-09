export const state = () => {
  return {
    cart: []
  }
}

export const mutations = {
  setCart(state, cart) {
    state.cart = cart
  },

  addToCart(state, cart) {
    state.cart = [...state.cart, cart]
  },

  removeFromCart(state, itemId) {
    state.cart = state.cart.filter((item) => item.produto.id !== itemId)
  }
}

export const getters = {
  get(state) {
    return state.cart
  },
  getLength(state) {
    return state.cart.length
  }
}
