import state from './state'

export default {
  addToCartAction ({ commit }, payload) {
    var cart = state.cart
    var result = false
    cart.forEach(product => {
      if (product.id === payload.id) {
        result = true
      }
    })

    if (!result) {
      commit('addToCartMutation', payload)
      return true
    } else {
      return false
    }
  },
  payProductsAction ({ commit }) {
    commit('payProductsMutation')
  },
  setAppComponents ({ commit }, payload) {
    commit('setAppComponents', payload)
  },
  getLocalScript (payload) {
    var appComponents = state.components
    var localComponent = {}
    appComponents.forEach(component => {
      if (component.name === payload) {
        localComponent = component
      }
    })

    return localComponent
  }
}
