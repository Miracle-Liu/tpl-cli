const inquirer = require('inquirer')
const convert2NodeTree = require('../transformInputInfo')
const config = require('../config/tpl.config.js')
let separator = config.separator

let {
  promptCreator,
  defaultPrompts
} = require('../prompts')


async function askComponentName() {
  let {
    componentName
  } = await inquirer.prompt([defaultPrompts.componentName])

  return componentName
}

async function askComponentSavePath() {
  let {
    componentSavePath
  } = await inquirer.prompt([
    defaultPrompts.componentSavePath
  ])
  return componentSavePath
}

function isMultiTag(tags) {
  return tags.indexOf(separator) !== -1
}

async function askTags() {
  let {
    tags
  } = await inquirer.prompt([defaultPrompts.tags])

  let node = convert2NodeTree(tags)
  let _isMultiTag = isMultiTag(tags)
  if (!_isMultiTag) {
    let {
      needChildTag
    } = await inquirer.prompt([defaultPrompts.needChildTag])
    if (needChildTag) {
      if (askTags.root) {
        askTags.root = false
        node.children = await askTags()
      } else {
        node[0].children = await askTags()
      }
    }
  }
  return node
}
askTags.root = true

async function askChildTags() {
  let {
    childTags
  } = await inquirer.prompt(defaultPrompts.childTags)
  return childTags
}



module.exports = {
  askComponentName,
  askComponentSavePath,
  askTags
}