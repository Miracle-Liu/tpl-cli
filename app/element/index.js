/**
 * Element virdual-dom 对象定义
 * @param {String} tagName
 * @param {Object} props
 * @param {Array<Element|String>}
 */
function Element(tagName, props, children) {
  this.tagName = tagName
  this.props = props ? props : {}
  if (children) {
    if (!Array.isArray(children)) {
      children = [children]
    }
  } else {
    children = []
  }
  this.children = children
  if (props.key) {
    this.key = props.key
  }

  var count = 0

  children.forEach(function(child, i) {
    if (child instanceof Element) {
      count += child.count
    } else {
      children[i] = '' + child
    }
    count++
  })
  this.count = count
}

function createElement(tagName, props, children) {
  return new Element(tagName, props, children)
}

const e = createElement

/**
 * render 将virdual-dom 对象渲染为实际 DOM 元素...预留，将来使用
 */
Element.prototype.render = function() {
  var el = document.createElement(this.tagName)
  var props = this.props
  for (var propName in props) {
    var propValue = props[propName]
    el.setAttribute(propName, propValue)
  }

  var children = this.children || []
  children.forEach(function(child) {
    var childEl =
      child instanceof Element ? child.render() : document.createTextNode(child)
    el.appendChild(childEl)
  })
  return el
}

module.exports = {
  Element,
  createElement,
  e
}
