<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <h4>Componentes</h4>
      <b-form-group v-for="(component, index) in localComponents" v-bind:key="component.index">
        <div v-if="component.type==='component'">
          <div class="text-left">
            <p><span class="font-weight-bold">Nombre:</span> {{ component.name }}</p>
            <p><span class="font-weight-bold">Tipo:</span> {{ component.type }}</p>
            <b-form-radio v-model="component.place" value="header">Posicionar en Header</b-form-radio>
            <b-form-radio v-model="component.place" value="event">Accionar con click</b-form-radio>
          </div>
          <b-input
            placeholder="Ingrese su código aquí"
            v-model="localComponents[index].script"
          ></b-input>
        </div>
      </b-form-group>
      <h4>Páginas</h4>
      <b-form-group v-for="(page, index) in localComponents" v-bind:key="page.index">
        <div v-if="page.type==='page'">
          <div class="text-left">
            <p><span class="font-weight-bold">Nombre:</span> {{ page.name }}</p>
            <p><span class="font-weight-bold">Tipo:</span> {{ page.type }}</p>
            <b-form-radio v-model="page.place" value="header">Posicionar en Header</b-form-radio>
            <b-form-radio v-model="page.place" value="event">Accionar con click</b-form-radio>
          </div>
          <b-input
            placeholder="Ingrese su código aquí"
            v-model="localComponents[index].script"
          ></b-input>
        </div>
      </b-form-group>
      <b-button type="submit" variant="primary">Guardar</b-button>
    </b-form>
    <b-button @click="getScript">Cargar script</b-button>
    <b-button @click="buyThing">Comprar</b-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import componentsManager from '../utilities/componentsManager'

export default {
  name: 'Components',
  data () {
    return {
      localComponents: [],
      script: undefined
    }
  },
  methods: {
    insertScriptInDOM (script) {
      var scriptElement = document.createElement('script')
      var inlineCode = document.createTextNode(script)
      scriptElement.appendChild(inlineCode)
      document.body.insertAdjacentElement('afterbegin', scriptElement)
    },
    insertScriptInFunction (script) {
      /* eslint-disable-next-line */
      var newFunction = Function('', script)
      return newFunction
    },
    getComponents (file, type) {
      var result = []
      if (this.components.length > 0 && this.components !== undefined) {
        return this.components
      } else {
        file.keys().forEach(key => {
          key = key.slice(2, -4)
          result.push({
            name: key,
            type,
            script: '',
            place: ''
          })
        })
      }

      return result
    },
    ...mapActions([
      'setAppComponents',
      'getLocalScript'
    ]),
    onSubmit () {
      this.setAppComponents(this.localComponents)
      //  NEED to override a file
    },
    getScript () {
      componentsManager.getScript(this)
    },
    buyThing () {
      if (this.script !== undefined && this.script.lenght > 0) {
        var newFunction = this.insertScriptInFunction(this.script)
        newFunction()
      }
    }
  },
  mounted () {
    this.localComponents = this.getComponents(require.context('../components/', true, /\.vue*$/), 'component')
    this.localComponents = this.localComponents.concat(this.getComponents(require.context('../views/', true, /\.vue*$/), 'page'))
  },
  computed: {
    ...mapState([
      'components'
    ])
  }
}
</script>
