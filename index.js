'use strict'


class App {
  constructor() {
    /** 
     * 注入各项服务，插件
     * ImportStatementService  filegenerator.....
     */
  }
}

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