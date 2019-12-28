const tagMapping = require('../config/tagMapping.js')
/**
 * 
 * @param {Object} nodeTree 
 */
function importStatementGenerator(nodeTree) {
  let importPath = Object.create(null)
  setImportPath(nodeTree)

  function setImportPath(nodeTree) {
    let {
      tagName,
      children
    } = nodeTree
    if (tagMapping[tagName] && !importPath[tagMapping[tagName].tagName]) {
      importPath[tagMapping[tagName].tagName] = tagMapping[tagName].path
    }
    if (children && children.length !== 0) {
      children.forEach(child => {
        setImportPath(child)
      })
    }
  }

  let kvs = Object.entries(importPath)
  let importStatement = ''
  kvs.forEach(kv => {
    let tagName = kv[0]
    let path = kv[1]
    importStatement += `import ${tagName} from "${path}" \n`
  })

  return importStatement
}




module.exports = importStatementGenerator