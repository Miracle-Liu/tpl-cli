module.exports = function run() {
  // let state = process.state = {
  //   componentName: 'test',
  //   componentSavePath: './',
  //   importPath: {},
  //   nodeTree: {},
  //   childComponents: {}
  // }

  // process.state.componentName = await this.askComponentName()

  // process.state.componentSavePath = await this.askComponentSavePath()

  /**
   * 需要把nodeTree ,   component,  importStatement 所需state分离开，多写点算法罢了(全部基于nodeTree)。但是行云流水，更加干净，整洁，虽多写了几行代码
   */
  // state.nodeTree = await this.askTags()
  let templateInfo = this.loadConfig(this.templateConfigPath)

  // Object.assign(state, componentTemplate)

  this.componentGenerator(templateInfo)
}
