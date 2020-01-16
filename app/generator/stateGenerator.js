let {
  hasChinese,
  isEnglishBegin
} = require('../utils/index.js')
const _ = require('lodash')

/**
 *  state
 * @param {Object} nodeTree 
 */

function stateGenerator(nodeTree) {
  let state = Object.create(null)
  let setFormRulesFlag = false
  let rulesObjectPointer = null
  setState(nodeTree)

  function setState(nodeTree) {
    let {
      tagName,
      props,
      children
    } = nodeTree
    //FormRules 从上层开始
    setFormRules(nodeTree)

    //BindVariables 递归从底层开始，找到非对象绑定，在往上找，找到form.XXX ，就知道form是对象类型了，可能还需要标签映射绑定的是字符串（不需要加入到state）或者数组类型
    if (children && children.length !== 0) {
      children.forEach(child => {
        setState(child)
      })
    }
    setBindVariables(nodeTree)
  }

  function setBindVariables(nodeTree) {
    let {
      tagName,
      props,
      children
    } = nodeTree
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

  function setFormRules(nodeTree) {
    let {
      tagName,
      props,
      children
    } = nodeTree
    if (!props || Object.keys(props).length === 0) {
      return
    }
    if (tagName === 'el-form' && props.rules) {
      setFormRulesFlag = true
      rulesObjectPointer = state[props.rules] = {}
    }

    if (!setFormRulesFlag) {
      return
    }

    if (tagName === 'el-form-item') {

      if (children && children[0] && children[0].props) {
        let formEelement = children[0]
        let {
          lable,
          required,
          placeholder,
        } = formEelement.props
        if (!required && !props.required) {
          return
        }

        let rules = {
          required: true,
          message: '请',
          trigger: ['change', 'blur']
        }
        if (placeholder) {
          rules.message += placeholder
        } else if (lable) {
          rules.message += ('填写' + lable)
        } else if (prop.lable) {
          rules.message += ('填写' + prop.lable)
        }
        let vmodelValue = formEelement.props['v-model']

        let stateKeys = vmodelValue.split('.').slice(1)
        let len = stateKeys.length
        let i = 0
        stateKeys.reduce((f, s) => {
          i++
          if (f[s]) {
            return f[s]
          }
          if (len === i) {
            return f[s] = [rules]
          } else {
            return f[s] = {}
          }
        }, rulesObjectPointer)
      }
    }
  }

  return state
}




module.exports = stateGenerator