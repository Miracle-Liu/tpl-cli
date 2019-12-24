module.exports = {
  componentName: "test",
  componentSavePath: "./",
  nodeTree: {
    tagName: 'div',
    children: [{
        tagName: "input",
        lable: '标题',
        value: "title",
        required: true
      },
      {
        tagName: "input",
        lable: '作者',
        value: "author",
      },
      {
        tagName: "select",
        lable: '分类',
        value: "catalog",
        required: true
      },
      {
        tagName: "data",
        lable: '发布时间',
        value: "pub_time",
      }
    ]
  }
}