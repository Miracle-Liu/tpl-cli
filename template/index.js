module.exports = {
  componentName: "test",
  componentSavePath: "./",
  nodeTree: {
    tagName: 'el-dialog',
    children: [{
      tagName: "el-form",
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
              value: "title",
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
              value: "author",
            }
          }]
        },
        {
          tagName: "el-form-item",
          props: {
            prop: "catalog"
          },
          children: [{
            tagName: "select",
            props: {
              lable: '分类',
              value: "catalog",
              required: true
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
              value: "pub_time",
            }
          }]
        },
      ]
    }]
  }
}