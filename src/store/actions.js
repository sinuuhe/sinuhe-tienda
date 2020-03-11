import state from './state'
import httpUtilities from '../utilities/httpUtilities'
import axios from 'axios'

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
    axios
      .post(httpUtilities.componentsUrl, payload)
      .then(response => {
        commit('setAppComponents', payload)
      })
      .catch(function (error) {
        console.log(error)
      })
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
  },
  loadComponents ({ commit }) {
    axios
      .get(httpUtilities.componentsUrl)
      .then(response => {
        commit('setAppComponents', response.data.components)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
