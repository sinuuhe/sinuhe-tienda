import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from '../views/Products.vue'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import ProductInfo from '../views/ProductInfo.vue'
import ThankYouPage from '../views/ThankYouPage.vue'
import Components from '../views/Components.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/products/:id',
    name: 'ProductInfo',
    component: ProductInfo
  },
  {
    path: '/thank-you-page',
    name: 'ThankYouPage',
    component: ThankYouPage
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
