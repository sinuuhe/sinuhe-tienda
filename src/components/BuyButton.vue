<template>
  <b-button href="#" variant="success" @click="pay">Pagar</b-button>
</template>

<script>
import { mapActions } from 'vuex'
import messages from '../utilities/messages'
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'BuyButton',
  props: {
    formatedCart: Array
  },
  methods: {
    pay () {
      componentsManager.getScript(this)
      this.payProductsAction()
        .then((result) => {
          this.$bvModal.msgBoxOk(messages.succesfulPayment.message, {
            title: messages.succesfulPayment.title
          })
            .then(response => {
              this.$emit('formatedCart', [])
              this.$router.push('/thank-you-page')
            })
        })
    },
    ...mapActions([
      'payProductsAction'
    ])
  }
}
</script>
