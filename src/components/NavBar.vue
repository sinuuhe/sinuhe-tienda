<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Productos</router-link> |
    <router-link to="/cart">Carrito ({{ cart.length }} ítems)</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapState([
      'cart'
    ])
  }
}
</script>
