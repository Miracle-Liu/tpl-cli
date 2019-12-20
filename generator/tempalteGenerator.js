const $ = cheerio = require('cheerio')

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
    children
  } = nodeTree
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
module.exports = tempalteGenerator