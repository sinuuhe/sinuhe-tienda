<template>
  <b-button href="#" variant="primary" @click="addToCart">Agregar al carrito</b-button>
</template>

<script>
import { mapActions } from 'vuex'
import messages from '../utilities/messages'
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'AddToCartButton',
  props: {
    product: Object
  },
  methods: {
    addToCart () {
      componentsManager.getScript(this)
      this.addToCartAction(this.product)
        .then((result) => {
          if (result) {
            this.$bvModal.msgBoxOk(messages.addToCart.message, {
              title: messages.addToCart.title
            })
          } else {
            this.$bvModal.msgBoxOk(messages.productAlreadyInCart.message, {
              title: messages.productAlreadyInCart.title
            })
          }
        })
    },
    ...mapActions([
      'addToCartAction'
    ])
  }
}
</script>
