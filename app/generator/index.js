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
  let tempalte = tempalteGenerator(nodeTree)

  let importStatement = importStatementGenerator(importPath)

  let components = componentsGenerator(childComponents)


  let content = contentGenerator({
    tempalte,
    importStatement,
    components,
  })

  fileGenerator(componentName, componentSavePath, content)

}


module.exports = {
  componentGenerator
}