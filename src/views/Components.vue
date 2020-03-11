<template>
  <div>
    <b-form @submit.prevent="onSubmit" v-if="components.length > 0">
      <h4>Componentes</h4>
      <b-form-group v-for="(component, index) in components" v-bind:key="component.index">
        <div v-if="component.type==='component'">
          <b-jumbotron>
            <div class="text-left">
              <p><span class="font-weight-bold">Nombre:</span> {{ component.name }}</p>
              <p><span class="font-weight-bold">Tipo:</span> {{ component.type }}</p>
              <b-form-radio v-model="component.place" value="header">Posicionar en Header</b-form-radio>
              <b-form-radio v-model="component.place" value="event">Accionar con click</b-form-radio>
            </div>
            <b-input
              placeholder="Ingrese su código aquí"
              v-model="components[index].script"
            ></b-input>
          </b-jumbotron>
        </div>
      </b-form-group>
      <h4>Páginas</h4>
      <b-form-group v-for="(page, index) in components" v-bind:key="page.index">
        <div v-if="page.type==='page'">
          <b-jumbotron>
            <div class="text-left">
              <p><span class="font-weight-bold">Nombre:</span> {{ page.name }}</p>
              <p><span class="font-weight-bold">Tipo:</span> {{ page.type }}</p>
              <b-form-radio v-model="page.place" value="header">Posicionar en Header</b-form-radio>
              <b-form-radio v-model="page.place" value="event">Accionar con click</b-form-radio>
            </div>
            <b-input
              placeholder="Ingrese su código aquí"
              v-model="components[index].script"
            ></b-input>
          </b-jumbotron>
        </div>
      </b-form-group>
      <b-button type="submit" variant="primary">Guardar</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import messages from '../utilities/messages'

export default {
  name: 'Components',
  data () {
    return {
      localComponents: [],
      script: undefined,
      showForm: true
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
    getLocalComponents (file, type) {
      var result = []
      file.keys().forEach(key => {
        key = key.slice(2, -4)
        result.push({
          name: key,
          type,
          script: '',
          place: ''
        })
      })

      return result
    },
    ...mapActions([
      'setAppComponents',
      'getLocalScript'
    ]),
    onSubmit () {
      this.setAppComponents(this.components)
      this.$bvModal.msgBoxOk(messages.infoSaved.message, {})
    }
  },
  mounted () {
    this.localComponents = []
    this.localComponents = this.getLocalComponents(require.context('../components/', true, /\.vue*$/), 'component')
    this.localComponents = this.localComponents.concat(this.getLocalComponents(require.context('../views/', true, /\.vue*$/), 'page'))

    if (this.localComponents.length === this.components.length) {
      this.localComponents = this.components
    } else {
      this.localComponents.forEach((component) => {
        var result = this.components.find((search) => {
          return search.name === component.name
        })

        if (result === undefined) {
          this.components.push(component)
        }
      })
    }
  },
  computed: {
    ...mapState([
      'components'
    ])
  }
}
</script>
