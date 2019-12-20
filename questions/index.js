const inquirer = require('inquirer')
let {
  promptCreator,
  defaultPrompts
} = require('../prompts')


let separator = ' '
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

async function askTags() {
  let {
    tags
  } = await inquirer.prompt([defaultPrompts.tags])

  let node = convert2Node(tags)
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


function convert2Node(tags) {
  tags = tags.split(separator)
  if (convert2Node.root) {
    convert2Node.root = false
    return tags.map(tag => {
      return {
        tagName: tag
      }
    })[0]
  } else {
    return tags.map(tag => {
      return {
        tagName: tag
      }
    })
  }
}
convert2Node.root = true

function isMultiTag(tags) {
  return tags.indexOf(separator) !== -1
}



module.exports = {
  askComponentName,
  askComponentSavePath,
  askTags
}