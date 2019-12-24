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
              "v-mode": "title",
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
              "v-mode": "author",
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
              "v-mode": "catalog",
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
              "v-mode": "pub_time",
            }
          }]
        },
      ]
    }]
  }
}