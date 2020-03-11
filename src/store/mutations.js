export default {
  addToCartMutation (state, payload) {
    state.cart.push(payload)
  },
  payProductsMutation (state) {
    state.cart = []
  },
  setAppComponents (state, payload) {
    state.components = payload
  }
}
