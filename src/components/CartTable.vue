<template>
  <div>
    <p v-if="formatedCart.length === 1">No tienes artículos en el carrito</p>
    <div v-if="formatedCart.length > 1">
      <b-table striped hover :items="formatedCart"></b-table>
      <BuyButton
        :v-bind:formatedCart.sync="formatedCart"
      ></BuyButton>
    </div>
  </div>
</template>

<script>
import BuyButton from './BuyButton'

export default {
  name: 'CardTable',
  props: {
    cart: Array
  },
  data () {
    return {
      formatedCart: []
    }
  },
  methods: {
    formatCart (cart) {
      var total = 0
      var formatedCart = []
      formatedCart = cart.map((product) => {
        total += product.price
        return {
          producto: product.name,
          precio: '$' + product.price,
          opciones: ''
        }
      })

      formatedCart.push({
        producto: 'Total',
        precio: '$' + total,
        opciones: ''
      })

      this.formatedCart = formatedCart
    }
  },
  mounted () {
    this.formatCart(this.cart)
  },
  components: {
    BuyButton
  }
}
</script>
