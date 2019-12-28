/**
 * 创建文件内容
 * @param {Object} info 
 */
function contentGenerator(info) {
  /**
   * 这里是需要读取config 判断其是需要什么类型文件，使用不同Tempalte，可扩展
   */

  return vueTempalteGenerator.call(this, info)
}




//可配置 ，放config.js，或者放tempalteGeneratorConfi.js
function vueTempalteGenerator(info) {
  let {
    componentName,
    nodeTree,
  } = info


  let tempalte = this.tempalteGenerator(nodeTree)

  let importStatement = this.importStatementGenerator(nodeTree)

  let components = this.componentsGenerator(nodeTree)

  components = Object.values(components).join(',')

  let state = this.stateGenerator(nodeTree)

  state = JSON.stringify(state)



  tempalte = `<tempalte>${tempalte}</tempalte>`

  let script = `
  <script>
  ${importStatement}
  export default {
    name:'${componentName}',
    components:{
      ${components}
    }, 
    data() {
      return ${state}
    }
  }
  </script>
  `

  let styleSheet = `
  <style lang="scss">
    .${componentName}-container{

    }
  </style>
  `

  return tempalte + script + styleSheet

}



function reactTempalteGenerator() {

}


module.exports = contentGenerator