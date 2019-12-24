/**
 *  引用组件 
 * @param {Object} nodeTree 
 */

function stateGenerator(nodeTree) {
  let state = {}
  setState(nodeTree)

  function setState(nodeTree) {
    let {
      children
    } = nodeTree
    if (children && children.length !== 0) {
      children.forEach(child => {
        setState(child)
      })
    }
  }

  return state
}



module.exports = stateGenerator