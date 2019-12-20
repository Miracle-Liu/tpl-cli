const chalk = require('chalk')
const fs = require('fs')

/**
 *
 * @param {String} componentName  组件名
 * @param {String} componentSavePath 组件保存路径
 * @param {String} tempalte  组件内容
 */
function fileGenerator(componentName, componentSavePath, tempalte) {
  const writerStream = fs.createWriteStream(
    `${componentSavePath}/${componentName}.vue`
  )

  writerStream.write(tempalte, 'UTF-8')
  writerStream.end()

  writerStream.on('finish', () => {
    console.log(chalk.green('组件创建成功'))

  })
  writerStream.on('error', error => {
    console.log(chalk.red('组件创建失败', error))
  })
}
module.exports = fileGenerator