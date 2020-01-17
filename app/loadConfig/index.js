const { resolve } = require('path')
function loadConfig(configPath) {
  return require(resolve(process.cwd(), configPath))
}

module.exports = {
  loadConfig
}
