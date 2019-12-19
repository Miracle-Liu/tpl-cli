/**
 * 
 * @param {String} type 
 * @param {String} name 
 * @param {String} message 
 * @return {Object} prompt
 */
function promptCreator(type, name, message) {
  return {
    type,
    name,
    message
  }
}

module.exports = {
  promptCreator,
  defaultPrompts: {
    componentName: promptCreator('input', 'componentName', '组件名'),
    componentSavePath: promptCreator('input', 'componentSavePath', '存放路径'),
    tags: promptCreator('input', 'tags', '所需标签，空格分隔'),
    childTags: promptCreator('input', 'childTags', '所需子标签，空格分隔'),
  }
}