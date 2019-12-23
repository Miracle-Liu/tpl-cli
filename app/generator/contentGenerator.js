/**
 * 
 * @param {Object} options 
 */
function contentGenerator(options) {
  return vueTempalteGenerator(options)
}




//可配置 ，放config.js，或者放tempalteGeneratorConfi.js
function vueTempalteGenerator(options) {
  let {
    tempalte,
    importStatement,
    style,
    components
  } = options

  tempalte = `<tempalte>${tempalte}</tempalte>`
  let script =
    `
  <script>
    ${importStatement}
    export default {
      components:${components}
    }
  </script>
  `
  let styleSheet =
    `
  <style lang="scss">
    ${style}
  </style>
  `

  return tempalte + script + styleSheet

}



function reactTempalteGenerator() {

}


module.exports = contentGenerator