/**
 * 组件生成器
 * @param {Object} info
 */
function componentGenerator(info) {
  let {
    componentName,
    componentSavePath,
  } = info

  let content = this.contentGenerator(info)

  this.fileGenerator(componentName, componentSavePath, content)

}


module.exports = componentGenerator