//检测是否包含中文
function hasChinese(str) {
  if (/.*[\u4e00-\u9fa5]+.*/.test(str)) {
    return true
  } else {
    return false
  }
}
//检测是否英文开头，主要处理 label-width="80px" 这种属性
function isEnglishBegin(str) {
  if (/^[A-Za-z]/.test(str)) {
    return true
  } else {
    return false
  }
}


module.exports = {
  hasChinese,
  isEnglishBegin
}