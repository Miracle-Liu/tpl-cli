function loadComponentTemplate() {
  let dirname = process.cwd()
  let componentTemplatePath = `${dirname}/tpl-template`
  return require(componentTemplatePath)
}

module.exports = {
  loadComponentTemplate
}