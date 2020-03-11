<template>
  <div>
    <b-container>
      <b-row class="text-center">
        <b-col cols="4" v-for="(product, index) in products" v-bind:key="index">
          <Card
            :product="product"
          >
          </Card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '../components/Card'
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'Products',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'products'
    ])
  },
  components: {
    Card
  },
  beforeMount () {
    componentsManager.getScript(this)
  }
}
</script>
