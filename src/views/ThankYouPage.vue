<template>
  <div class="home">
    <img alt="Vue logo" src="https://i.picsum.photos/id/237/300/300.jpg">
    <h3>Muchas gracias por tu compra!</h3>
    <router-link :to="`/`">Ir a inicio</router-link>  |  <router-link :to="`/products`">Ir a Productos</router-link>
  </div>
</template>

<script>
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'ThankYouPage',
  beforeMount () {
    componentsManager.getScript(this)
  }
}
</script>
