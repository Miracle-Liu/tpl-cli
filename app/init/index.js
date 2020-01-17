const _ = require('lodash')
const defaultConfig = require('../config')
module.exports = function init(options = {}) {
  _.merge(options, defaultConfig)
  let { templateConfigPath } = options
  this.templateConfigPath = templateConfigPath
}
