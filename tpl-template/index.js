module.exports = {
  componentName: "test",
  componentSavePath: "./",
  nodeTree: {
    tagName: 'el-dialog',
    children: [{
      tagName: "el-form",
      props: {
        model: 'form',
        'label-width': "80px",
        rules: "rules"
      },
      children: [{
          tagName: "el-form-item",
          props: {
            lable: '标题',
            required: true
          },
          children: [{
            tagName: "input",
            props: {
              lable: '标题',
              "v-model": "form.title",
              required: true
            }
          }]
        },
        {
          tagName: "el-form-item",
          props: {
            lable: '作者',
            required: true
          },
          children: [{
            tagName: "input",
            props: {
              lable: '作者',
              "v-model": "form.author",
              placeholder: "填写作者"
            }
          }]
        },
        {
          tagName: "el-form-item",
          props: {
            prop: '"catalog"'
          },
          children: [{
            tagName: "select",
            props: {
              lable: '分类',
              "v-model": "form.catalog",
              required: true,
              placeholder: "选择分类"
            }
          }]
        },
        {
          tagName: "el-form-item",
          props: {},
          children: [{
            tagName: "date",
            props: {
              lable: '发布时间',
              "v-model": "form.pub_time",
            }
          }]
        },
      ]
    }]
  }
}