let fileGenerator = require('./fileGenerator')
let tempalteGenerator = require('./tempalteGenerator')

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

  fileGenerator(componentName, componentSavePath, tempalte)
}


module.exports = {
  componentGenerator
}