<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>Bienvenido a la tinda de Sinuhé</h3>
    <p>Puedes navagar desde los menús de arriba</p>
  </div>
</template>

<script>
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'Home',
  beforeMount () {
    componentsManager.getScript(this)
  }
}
</script>
