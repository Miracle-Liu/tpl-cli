const $ = cheerio = require('cheerio')
const tagMapping = require('../config/tagMapping.js')


/**
 * cheerio  轻便但功能少，编写不太方便
 * jsDom  重些，功能全
 * puppeteer  强大 耗费性能
 */

/**
 * 模板生成器
 * @param {Object} nodeTree {tagName:"div",children:[{tagName:"div",children:[{tagName:input}]}]}
 */
function tempalteGenerator(nodeTree) {
  let {
    tagName,
    props,
    children
  } = nodeTree
  tagName = tagNameMapping(tagName)
  props = tagAttrs(attrs)
  let dom = $(`<${tagName}>`)
  if (!children) {
    return dom
  } else {
    children.forEach(childNode => {
      dom.append(tempalteGenerator(childNode))
    });
  }
  return cheerio.html(dom)
}

function tagNameMapping(tagName) {
  return tagMapping[tagName] ? tagMapping[tagName].tagName : tagName
}

function tagAttrs(attrs) {

}

module.exports = tempalteGenerator