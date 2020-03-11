<template>
  <b-card
    :title="product.name"
    :img-src="product.imgUrl"
    img-alt="Image"
    :sub-title="'$' + product.price"
    img-top
    style="max-width: 20rem;"
    class="mb-2"
  >
  <b-card-text>
    {{ product.description }}
  </b-card-text>

  <b-container>
    <b-row>
      <b-col cols="4">
        <router-link :to="`/products/${product.id}`">Ver más</router-link>
      </b-col>
      <b-col cols="8">
        <AddToCartButton
          :product="product"
        ></AddToCartButton>
      </b-col>
    </b-row>
  </b-container>
  </b-card>
</template>

<script>
import AddToCartButton from './AddToCartButton'

export default {
  name: 'Card',
  props: {
    product: Object
  },
  components: {
    AddToCartButton
  }
}
</script>
