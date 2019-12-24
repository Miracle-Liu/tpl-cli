const config = require('../config/tpl.config.js')
const tagMapping = require('../config/tagMapping.js')
const Tag = require('../tag/index')



let separator = config.separator

function convert2NodeTree(tags) {
  tags = tags.split(separator)
  if (convert2NodeTree.root) {
    convert2NodeTree.root = false
    return tags.map(tag => {
      return nodeWapper(tag)
    })[0]
  } else {
    return tags.map(tag => {
      return nodeWapper(tag)
    })
  }
}
convert2NodeTree.root = true


function nodeWapper(tagName) {
  let node = null
  if (tagMapping[tagName]) {
    node = new Tag(tagMapping[tagName])
  } else {
    node = {
      tagName
    }
  }
  return node
}

module.exports = convert2NodeTree