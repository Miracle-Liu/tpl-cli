const chalk = require('chalk')
const fs = require('fs')
const config = require('../config/tpl.config.js')

let fileSuffixes = config.fileSuffixes

/**
 *
 * @param {String} componentName  组件名
 * @param {String} componentSavePath 组件保存路径
 * @param {String} content  组件内容
 */
function fileGenerator(componentName, componentSavePath, content) {
  const writerStream = fs.createWriteStream(
    `${componentSavePath}/${componentName}.${fileSuffixes}`
  )

  writerStream.write(content, 'UTF-8')
  writerStream.end()

  writerStream.on('finish', () => {
    console.log(chalk.green('组件创建成功'))

  })
  writerStream.on('error', error => {
    console.log(chalk.red('组件创建失败', error))
  })
}
module.exports = fileGenerator