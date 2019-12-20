'use strict'

let {
  askComponentName,
  askComponentSavePath,
  askTags
} = require('./questions')

let {
  componentGenerator,
} = require('./generator')


async function init() {
  // let componentName = await askComponentName()

  // let componentSavePath = await askComponentSavePath()
  let nodeTree = await askTags()


  // componentGenerator({
  //   componentName,
  //   componentSavePath,
  //   nodeTree
  // })
  componentGenerator({
    componentName: 'test',
    componentSavePath: './',
    nodeTree
  })
}

init()