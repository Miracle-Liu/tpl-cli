const _ = require('lodash')
let {
  askComponentName,
  askComponentSavePath,
  askTags
} = require('./questions')

let {
  componentGenerator,
} = require('./generator')



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

  // process.state.componentName = await this.askComponentName()

  // process.state.componentSavePath = await this.askComponentSavePath()
  state.nodeTree = await this.askTags()

  console.log(process.state.nodeTree)



  // this.componentGenerator({
  //   componentName,
  //   componentSavePath,
  //   nodeTree
  // })
  this.componentGenerator(process.state)
}


App.extend([run, askComponentName, askComponentSavePath, askTags, componentGenerator])

module.exports = App