const { resolve } = require('path')
const App = require('../app/App.js')

function init(templateConfigPath) {
  if (!templateConfigPath) {
    templateConfigPath = 'tpl-template'
  } else {
    templateConfigPath = resolve(process.cwd(), templateConfigPath)
  }
  new App({ templateConfigPath })
}

module.exports = init
