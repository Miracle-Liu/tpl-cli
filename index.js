const program = require('commander')
const inquirer = require('inquirer')
const _ = require('lodash')
const chalk = require('chalk')
const fs = require('fs')

let prompts = require('./prompts')



/**
 * 模板生成器
 * @param {Array} nodeTree 
 */
function tempalteGenerator(nodeTree) {
  tagsArr = tagsStr.split(' ')
  let tempalte = ''
  tagsArr.reduce((a, b) => {
    tempalte = a + `<${b}></${b}>`
    return tempalte

  }, tempalte)
  console.log(tempalte);

  return tempalte
}


async function askComponentName() {
  let {
    componentName
  } = await inquirer.prompt(prompts.componentName)
  return componentName
}

function askComponentSavePath() {
  let {
    componentSavePath
  } = await inquirer.prompt(prompts.componentSavePath)
  return componentSavePath
}

function askTags() {
  let {
    tags
  } = await inquirer.prompt(prompts.tags)
  let _isMultiTag = isMultiTag(tags)
  if (_isMultiTag) {

  } else {

  }

  return tags
}

function askChildTags() {
  let {
    childTags
  } = await inquirer.prompt(prompts.childTags)
  return childTags
}

function isMultiTag(tags) {
  return tags.indexOf(' ') !== -1;
}

/**
 * 
 * @param {String} componentName  组件名
 * @param {String} componentSavePath 组件保存路径
 * @param {String} tempalte  组件内容
 */
function fileGenerator(componentName, componentSavePath, tempalte) {
  const writerStream = fs.createWriteStream(`${componentSavePath}/${componentName}.vue`)

  writerStream.write(tempalte, 'UTF-8')
  writerStream.end()

  writerStream.on('finish', () => {
    console.log('创建成功');
  })
  writerStream.on('error', (error) => {
    console.log('创建失败', error);
  })
}

/**
 * 组件生成器
 * @param {Object} info 
 */
function componentGenerator(info) {
  let {
    componentName,
    componentSavePath,
    nodeTree
  } = info
  let tempalte = tempalteGenerator(nodeTree)

  fileGenerator(componentName, componentSavePath, tempalte)
}

async function init() {
  let componentName = await askComponentName()
  let componentSavePath = await askComponentSavePath()
  let nodeTree = await askTags()

  componentGenerator({
    componentName,
    componentSavePath,
    nodeTree
  })
}

init()

/* inquirer.prompt(prompts).then((answers) => {
  let {
    componentName,
    componentSavePath,
    tags
  } = answers


  //一次输入多个标签 input radio 
  let _isMultiTag = isMultiTag(tags)

  if (!_isMultiTag) {

    inquirer.prompt({
      type: 'confirm',
      name: 'needChildTag',
      message: '需要子标签么？'
    }).then((answers) => {
      let = {
        needChildTag
      } = answers
      if (needChildTag) {
        inquirer.prompt({
          type: 'input',
          name: 'childTags',
          message: '输入子标签'
        }).then((answers) => {
          let {
            childTags
          } = answers
          console.log('====childTags=====', childTags);
        })
      }

    })
  }
})
 */






























/* 
program
  .command('module')
  .alias('m')
  .description('创建新的模块')
  .option('--name [moduleName]')
  .option('--sass', '启用sass')
  .option('--less', '启用less')
  .action(option => {
    var config = _.assign({
        moduleName: null,
        description: '',
        sass: false,
        less: false
      },
      option
    )
    var promps = []

    if (config.moduleName !== 'string') {
      promps.push({
        type: 'input',
        name: 'moduleName',
        message: '请输入模块名称',
        validate: function (input) {
          if (!input) {
            return '不能为空'
          }
          return true
        }
      })
    }

    if (config.description !== 'string') {
      promps.push({
        type: 'input',
        name: 'moduleDescription',
        message: '请输入模块描述'
      })
    }

    if (config.sass === false && config.less === false) {
      promps.push({
        type: 'list',
        name: 'cssPretreatment',
        message: '想用什么css预处理器呢',
        choices: [{
            name: 'Sass/Compass',
            value: 'sass'
          },
          {
            name: 'Less',
            value: 'less'
          }
        ]
      })
    }

    inquirer.prompt(promps).then(function (answers) {
      console.log(answers)
    })
  })
  .on('--help', function () {
    console.log('  Examples:')
    console.log('')
    console.log('$ app module moduleName')
    console.log('$ app m moduleName')
  })

program.parse(process.argv) */