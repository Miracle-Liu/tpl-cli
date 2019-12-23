/**
 * 引用组件隐射表
 * 映射名，路径
 * 引用组件相同，但路径不会相同，用路径做唯一索引
 */


module.exports = {
  input: {
    tagName: 'InputTextCustom',
    path: "@/compoments/InputTextCustom"
  },
  select: {
    tagName: 'InputCustomSelect',
    path: "@/compoments/InputCustomSelect"
  },
  cascader: {
    tagName: 'InputCascaderCustom',
    path: "@/compoments/InputCascaderCustom"
  },
  date: {
    tagName: 'InputDatePickerCustom',
    path: "@/compoments/InputDatePickerCustom",

  }
}