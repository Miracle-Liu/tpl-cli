/**
 * 处理import 引用 模块
 */

class ImportStatementService {
  constructor() {
    this._importPath = {}
  }
  setImportPath(tagMapping) {
    let _importPath = this._importPath
    let {
      tagName,
      path
    } = tagMapping
    if (!_importPath[tagName]) {
      _importPath[tagName] = path
    }
  }
  getImportPath() {
    return ImportStatementService._importPath
  }
  importStatementGenerator() {
    let _importPath = this._importPath
    let kvs = Object.entries(_importPath)
    let importStatement = ''
    kvs.forEach(kv => {
      let tagName = kv[0]
      let path = kv[1]
      importStatement += `import ${tagName} from "${path}"`
    })

    return importStatement
  }

  static getInstance() {
    let instance = ImportStatementService.instance
    if (!instance) {
      instance = new ImportStatementService()
    }
    return instance
  }
}
ImportStatementService.instance = null


module.exports = ImportStatementService.getInstance()