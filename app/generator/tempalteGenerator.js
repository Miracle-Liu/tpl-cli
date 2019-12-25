const $ = (cheerio = require('cheerio'))
const tagMapping = require('../config/tagMapping.js')
// const he = require('he')
// const escaper = require('true-html-escape')
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
  // let tag = props ? tagName + props : tagName

  let dom = $(`<${tagName}>`)
  setAttr(dom, props)
  if (!children) {
    return dom
  } else {
    children.forEach(childNode => {
      dom.append(tempalteGenerator(childNode))
    })
  }
  //直接不转码返回，写入文件就是原原本本的中文了
  return cheerio.html(dom, {
    decodeEntities: false
  })
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
 * @return  {String}  便签属性拼接字符串
 *
 * 中文字符拼接后，会被转义
 */
/* function tagAttrs(props) {
  if (!props) {
    return
  }
  propsEntries = Object.entries(props)

  let str = ''
  str = propsEntries.reduce((pre, next) => {
    let propName = next[0]
    if (!propName.startsWith('v-')) {
      propName = `:${propName}`
    }
    let propValue = next[1]
    if (hasChinese(propValue)) {
      propValue = `"'${propValue}'"`
    }
    return `${pre} ${propName}=${propValue}`
  }, str)
  return str
}
 */

/**
 * 设置节点的DOM属性
 * @param {Object} props 标签属性
 * @return  {Object}  便签属性k v
 *
 * 中文字符拼接后，会被转义
 */
function tagAttrs(props) {
  if (!props || Object.keys.length === 0) {
    return
  }
  propsEntries = Object.entries(props)

  let propsTemp = Object.create(null)
  propsEntries.forEach(v => {
    let propName = v[0]
    if (!propName.startsWith('v-')) {
      propName = `:${propName}`
    }
    let propValue = v[1]
    if (hasChinese(propValue)) {
      propValue = `\'${propValue}\'`
    }
    propsTemp[propName] = propValue
  })
  return propsTemp
}

function hasChinese(str) {
  if (/.*[\u4e00-\u9fa5]+.*/.test(str)) {
    return true
  } else {
    return false
  }
}

function setAttr(dom, props) {
  for (const name in props) {
    let value = props[name]
    dom.attr(name, value)
  }
}

module.exports = tempalteGenerator