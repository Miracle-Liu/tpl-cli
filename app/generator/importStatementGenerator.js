/**
 * 
 * @param {Object} importPath  {tagName:path}
 */
function importStatementGenerator(importPath) {
  let kvs = Object.entries(importPath)
  let importStatement = ''
  kvs.forEach(kv => {
    let tagName = kv[0]
    let path = kv[1]
    importStatement += `import ${tagName} from "${path}"`
  })

  return importStatement
}

module.exports = importStatementGenerator