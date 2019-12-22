let fileGenerator = require('./fileGenerator')
let tempalteGenerator = require('./tempalteGenerator')
let importStatementService = require('../importStatement/index')
let contentGenerator = require('./contentGenerator')


/**
 * 组件生成器
 * @param {Object} info
 */
function componentGenerator(info) {
  let {
    componentName,
    componentSavePath,
    nodeTree
  } = info
  let tempalte = tempalteGenerator(nodeTree)

  let importStatement = importStatementService.importStatementGenerator()

  let components = tempalteGenerator()

  let content = contentGenerator({
    tempalte,
    importStatement,
    components
  })
  console.log(content)

  fileGenerator(componentName, componentSavePath, content)

}


module.exports = {
  componentGenerator
}