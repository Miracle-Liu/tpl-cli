const tagMapping = require('../config/tagMapping.js')
/**
 *  引用组件 
 * @param {Object} nodeTree 
 */

function componentsGenerator(nodeTree) {
  let components = Object.create(null)
  setComponents(nodeTree)

  function setComponents(nodeTree) {
    let {
      tagName,
      children
    } = nodeTree
    if (tagMapping[tagName] && !components[tagMapping[tagName].tagName]) {
      components[tagMapping[tagName].tagName] = tagMapping[tagName].tagName
    }
    if (children && children.length !== 0) {
      children.forEach(child => {
        setComponents(child)
      })
    }
  }

  return components
}



module.exports = componentsGenerator