<template>
  <div id="app">
    <NavBar></NavBar>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import NavBar from './components/NavBar'
import { mapActions } from 'vuex'

export default {
  components: {
    NavBar
  },
  beforeMount () {
    this.loadComponents()
  },
  methods: {
    ...mapActions([
      'loadComponents'
    ])
  }
}
</script>
