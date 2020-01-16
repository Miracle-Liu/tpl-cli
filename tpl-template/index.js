let { e } = require('../index.js')
module.exports = {
  componentName: 'test',
  componentSavePath: './',
  nodeTree: e(
    'el-dialog',
    {},
    e('el-form', { model: 'form', 'label-width': '80px', rules: 'rules' }, [
      e(
        'el-form-item',
        {
          lable: '标题',
          required: true
        },
        e('input', {
          lable: '标题',
          'v-model': 'form.title',
          required: true
        })
      ),
      e(
        'el-form-item',
        {
          lable: '作者',
          required: true
        },
        e('input', {
          lable: '作者',
          'v-model': 'form.author',
          placeholder: '填写作者'
        })
      ),
      e(
        'el-form-item',
        {
          prop: '"catalog"'
        },
        e('select', {
          lable: '分类',
          'v-model': 'form.catalog',
          required: true,
          placeholder: '选择分类'
        })
      ),
      e(
        'el-form-item',
        '',
        e('date', {
          lable: '发布时间',
          'v-model': 'form.pub_time'
        })
      )
    ])
  )
}
