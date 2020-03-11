import actions from '../store/actions'

//  iterate
function runScript (component) {
  var componentScript = component.script.slice(8, -9)
  insertScriptInDOM(componentScript)
}

function insertScriptInDOM (script) {
  var scriptElement = document.createElement('script')
  var inlineCode = document.createTextNode(script)
  scriptElement.appendChild(inlineCode)
  document.body.insertAdjacentElement('afterbegin', scriptElement)
}

function insertFunctionInDOM (script) {
  /* eslint-disable-next-line */
  var newFunction = Function('', script)
  return newFunction
}

function triggerAction (component) {
  if (component.script !== undefined) {
    var componentScript = component.script.slice(8, -9)
    var newFunction = insertFunctionInDOM(componentScript)
    newFunction()
  }
}

export default {
  getScript (component) {
    var response = actions.getLocalScript(component.$options.name)
    if (response.place === 'header' && response.script.length > 5) {
      runScript(response)
    } else {
      triggerAction(response)
    }
  },
  loadComponents () {
    actions.loadComponents()
  }
}
