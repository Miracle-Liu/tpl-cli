const _ = require('lodash')
// let questionsPlugins = Object.values(require('./questions'))
let generatorPlugins = Object.values(require('./generator'))
let loadConfigPlugns = Object.values(require('./loadConfig'))
let init = require('./init')
let run = require('./run')

class App {
  constructor(options) {
    this.init(options)
    this.run()
  }
  static extend(plugins) {
    if (_.isArray(plugins)) {
      plugins.forEach(plugin => {
        injectPlugin(plugin)
      })
    } else {
      injectPlugin(plugin)
    }
  }
}

function injectPlugin(plugin) {
  if (_.isFunction(plugin)) {
    App.prototype[plugin.name] = plugin
  } else {
    App.prototype[plugin] = plugin
  }
}

App.extend([init, run, ...generatorPlugins, ...loadConfigPlugns])

module.exports = App
