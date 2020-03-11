<template>
  <div>
    <h1>Carrito</h1>
    <CartTable
      :cart="cart"
    >
    </CartTable>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartTable from '../components/CartTable'
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'Cart',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'cart'
    ])
  },
  components: {
    CartTable
  },
  beforeMount () {
    componentsManager.getScript(this)
  }
}
</script>
