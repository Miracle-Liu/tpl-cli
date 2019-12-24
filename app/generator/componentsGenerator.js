const tagMapping = require('../config/tagMapping.js')
/**
 *  引用组件 
 * @param {Object} nodeTree {tagName:"div",children:[{tagName:"div",children:[{tagName:input}]}]}
 */

function componentsGenerator(nodeTree) {
  let components = {}
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

  return JSON.stringify(components)
}



module.exports = componentsGenerator