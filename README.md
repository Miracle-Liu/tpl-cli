# tpl-cli

Automated dynamic template generation tools

自动化动态模板生成工具

You can customize your template to include HTML tempalte, subcomponent import declaration, field variable binding, state declaration... by writing the data fields, tag aliases that the form needs.
Not limited to forms,you can do whatever you want by writing your own plugins

你只要写点表单需要的数据字段，标签别名等，就能可自定义地生成你想要的模板，包括 html tempalte, 子组件引入声明，字段变量绑定，state 声明...
不仅限于表单，通过编写你自己的插件，你可以做任何你想做的

### version

0.0.3

### instructions

there is much more things need to be done

#### Configure component aliases and paths

To solve the problems include relative path and custom path aliases
`app\config\tagMapping.js`

```javascript
module.exports = {
  input: {
    tagName: 'InputTextCustom',
    path: '@/compoments/InputTextCustom'
  },
  select: {
    tagName: 'InputCustomSelect',
    path: '@/compoments/InputCustomSelect'
  },
  cascader: {
    tagName: 'InputCascaderCustom',
    path: '@/compoments/InputCascaderCustom'
  },
  date: {
    tagName: 'InputDatePickerCustom',
    path: '@/compoments/InputDatePickerCustom'
  }
}
```

#### Code data templates

`tpl-template\index.js`

```javascript
let { e } = require('dynamic-tpl')
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
```

the nodeTree also can be writed like this:

```javascript
{
  nodeTree: {
     tagName: 'el-dialog',
    children: [
      {
        tagName: 'el-form',
        props: {
          model: 'form',
          'label-width': '80px',
          rules: 'rules' children: [
          {
            tagName: 'el-form-item',
            props: {
              lable: '标题',
              required: true
            },
            children: [
              {
                tagName: 'input',
                props: {
                  lable: '标题',
                  'v-model': 'form.title',
                  required: true
                }
              }
            ]
          },
          {
            tagName: 'el-form-item',
            props: {
              lable: '作者',
              required: true
            },
            children: [
              {
                tagName: 'input',
                props: {
                  lable: '作者',
                  'v-model': 'form.author',
                  placeholder: '填写作者'
                }
              }
            ]
          },
          {
            tagName: 'el-form-item',
            props: {
              prop: '"catalog"'
            },
            children: [
              {
                tagName: 'select',
                props: {
                  lable: '分类',
                  'v-model': 'form.catalog',
                  required: true,
                  placeholder: '选择分类'
                }
              }
            ]
          },
          {
            tagName: 'el-form-item',
            props: {},
            children: [
              {
                tagName: 'date',
                props: {
                  lable: '发布时间',
                  'v-model': 'form.pub_time'
                }
              }
            ]
          }
        ]
      }
    ]
  }
  }
}
```

To distinguish between dynamic and static props,you need to write your propVaule like this: `"'propVaule'"` or `'"propVaule"'`,if propVaule includes chinese or not start with english,such as `80px`, not need quotes

#### plugins

```javascript
let pligins = [`plugin1`, `plugin2`]
App.extend(pligins)

let plugin = function any() {}
App.extend(plugin)
```

`App.extend` make you extend all you want to App.prototype,or overwrite default things,such as

```javascript
let generatorPlugins = {
  componentGenerator,
  fileGenerator,
  contentGenerator,
  tempalteGenerator,
  importStatementGenerator,
  componentsGenerator,
  stateGenerator
}
```

#### build

in dynamic-tpl project test usage

```bash
node test.js
```

you will find a file named test.vue,here is the content of the build file:

```vue
<tempalte>
  <el-dialog>
    <el-form :model="form"
              :label-width="'80px'"
              :rules="rules">
      <el-form-item :lable="'标题'"
                    :required="true">
        <inputtextcustom :lable="'标题'"
                          v-model="form.title"
                          :required="true"></inputtextcustom>
      </el-form-item>
      <el-form-item :lable="'作者'"
                    :required="true">
        <inputtextcustom :lable="'作者'"
                          v-model="form.author"
                          :placeholder="'填写作者'"></inputtextcustom>
      </el-form-item>
      <el-form-item :prop="'catalog'">
        <inputcustomselect :lable="'分类'"
                            v-model="form.catalog"
                            :required="true"
                            :placeholder="'选择分类'"></inputcustomselect>
      </el-form-item>
      <el-form-item>
        <inputdatepickercustom :lable="'发布时间'"
                                v-model="form.pub_time"></inputdatepickercustom>
      </el-form-item>
    </el-form>
  </el-dialog>
</tempalte>
<script>
import InputTextCustom from '@/compoments/InputTextCustom'
import InputCustomSelect from '@/compoments/InputCustomSelect'
import InputDatePickerCustom from '@/compoments/InputDatePickerCustom'

export default {
  name: 'test',
  components: {
    InputTextCustom,
    InputCustomSelect,
    InputDatePickerCustom
  },
  data() {
    return {
      form: {
        title: null,
        author: null,
        catalog: null,
        pub_time: null
      },
      rules: {
        title: [
          {
            required: true,
            message: '请填写标题',
            trigger: ['change', 'blur']
          }
        ],
        author: [
          {
            required: true,
            message: '请填写作者',
            trigger: ['change', 'blur']
          }
        ],
        catalog: [
          {
            required: true,
            message: '请选择分类',
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
.test-container {
}
</style>
```

global usage

```
npm i -g dynamic-tpl
```

cd your project and write tpl-template,whatever location you place, and then apply follow code :

```
d-tpl i [tpl-template file path]
```

if you don not type `[tpl-template file path]`, you must place your `[tpl-template file]` in your project root directory
