let fileGenerator = require('./fileGenerator')
let tempalteGenerator = require('./tempalteGenerator')
let importStatementGenerator = require('./importStatementGenerator')
let contentGenerator = require('./contentGenerator')
let componentsGenerator = require('./componentsGenerator')


/**
 * 组件生成器
 * @param {Object} info
 */
function componentGenerator(info) {
  let {
    componentName,
    componentSavePath,
    nodeTree,
    importPath,
    childComponents
  } = info
  let tempalte = this.tempalteGenerator(nodeTree)

  let importStatement = this.importStatementGenerator(nodeTree)

  let components = this.componentsGenerator(nodeTree)


  let content = this.contentGenerator({
    tempalte,
    importStatement,
    components,
  })

  this.fileGenerator(componentName, componentSavePath, content)

}


module.exports = {
  componentGenerator,
  tempalteGenerator,
  importStatementGenerator,
  componentsGenerator,
  contentGenerator,
  fileGenerator
}