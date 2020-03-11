<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="5">
          <b-img :src="products[productId].imgUrl" fluid></b-img>
        </b-col>
        <b-col cols="7">
          <h3 class="text-left">{{ products[productId].name }}</h3>
          <h4 class="text-primary font-weight-bold text-left" >${{ products[productId].price }}</h4>
          <p class="text-justify">{{ products[productId].longDescription }}</p>

          <b-container>
          <b-row>
            <b-col cols="6">
              <router-link :to="`/products`">Volver</router-link>
            </b-col>
            <b-col cols="6">
              <AddToCartButton
                :product="products[productId]"
              ></AddToCartButton>
            </b-col>
          </b-row>
        </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AddToCartButton from '../components/AddToCartButton'
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'ProductInfo',
  data () {
    return {
      productId: this.$route.params.id
    }
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  components: {
    AddToCartButton
  },
  beforeMount () {
    componentsManager.getScript(this)
  }
}
</script>
