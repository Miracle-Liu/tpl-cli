let {
  hasChinese,
  isEnglishBegin
} = require('../utils/index.js')
const _ = require('lodash')

/**
 *  引用组件 
 * @param {Object} nodeTree 
 */

function stateGenerator(nodeTree) {
  let state = Object.create(null)
  setState(nodeTree)

  function setState(nodeTree) {
    let {
      props,
      children
    } = nodeTree
    //递归从底层开始，找到非对象绑定，在往上找，找到form.XXX ，就知道form是对象类型了，可能还需要标签映射绑定的是字符串（不需要加入到state）或者数组类型
    if (children && children.length !== 0) {
      children.forEach(child => {
        setState(child)
      })
    }

    if (!props || Object.keys(props).length === 0) {
      return
    }

    propsEntries = Object.entries(props)

    propsEntries.forEach(v => {
      let propValue = v[1]
      if (!hasChinese(propValue) && isEnglishBegin(propValue) && !_.isBoolean(propValue)) {
        let stateKeys = propValue.split('.')
        let len = stateKeys.length
        let i = 0

        stateKeys.reduce((f, s) => {
          i++
          if (f[s]) {
            return f[s]
          }
          if (len === i) {
            return f[s] = null
          } else {
            return f[s] = {}
          }
        }, state)
      }
    })

  }
  return state
}



module.exports = stateGenerator