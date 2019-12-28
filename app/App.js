const _ = require('lodash')
let questionsPlugins = Object.values(require('./questions'))
let generatorPlugins = Object.values(require('./generator'))
let loadComponentTemplatePlugns = Object.values(require('./loadComponentTemplate'))




class App {
  constructor(options) {
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

async function run() {
  let state = process.state = {
    componentName: 'test',
    componentSavePath: './',
    importPath: {},
    nodeTree: {},
    childComponents: {}
  }



  let componentTemplate = this.loadComponentTemplate()

  // process.state.componentName = await this.askComponentName()

  // process.state.componentSavePath = await this.askComponentSavePath()

  /**
   * 需要把nodeTree ,   component,  importStatement 所需state分离开，多写点算法罢了(全部基于nodeTree)。但是行云流水，更加干净，整洁，虽多写了几行代码
   */
  // state.nodeTree = await this.askTags()

  Object.assign(state, componentTemplate)





  this.componentGenerator(process.state)
}


App.extend([run, ...questionsPlugins, ...generatorPlugins, ...loadComponentTemplatePlugns])

module.exports = App