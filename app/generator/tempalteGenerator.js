const $ = cheerio = require('cheerio')
const tagMapping = require('../config/tagMapping.js')


/**
 * cheerio  轻便但功能少，编写不太方便
 * jsDom  重些，功能全
 * puppeteer  强大 耗费性能
 */

/**
 * 模板生成器
 * @param {Object} nodeTree 
 */
function tempalteGenerator(nodeTree) {
  let {
    tagName,
    props,
    children
  } = nodeTree
  tagName = tagNameMapping(tagName)
  props = tagAttrs(props)
  let tag = props ? tagName + props : tagName
  let dom = $(`<${tag}>`)
  if (!children) {
    return dom
  } else {
    children.forEach(childNode => {
      dom.append(tempalteGenerator(childNode))
    });
  }
  return cheerio.html(dom)
}

/**
 * 
 * @param {String} tagName 
 */
function tagNameMapping(tagName) {
  return tagMapping[tagName] ? tagMapping[tagName].tagName : tagName
}

/**
 * 设置节点的DOM属性
 * @param {Object} props 标签属性
 */
function tagAttrs(props) {
  if (!props) {
    return
  }
  propsEntries = Object.entries(props)

  let str = ''
  str = propsEntries.reduce((pre, next) => {
    let propName = next[0]
    let propValue = next[1]
    return pre + ' ' + propName + "=" + propValue
  }, str)
  return str
}

module.exports = tempalteGenerator