<tempalte><el-dialog><el-form :model="form" :label-width="'80px'" :rules="rules"><el-form-item :lable="'标题'" :required="true"><inputtextcustom :lable="'标题'" v-model="form.title" :required="true"></inputtextcustom></el-form-item><el-form-item :lable="'作者'" :required="true"><inputtextcustom :lable="'作者'" v-model="form.author" :placeholder="'填写作者'"></inputtextcustom></el-form-item><el-form-item :prop="'catalog'"><inputcustomselect :lable="'分类'" v-model="form.catalog" :required="true" :placeholder="'选择分类'"></inputcustomselect></el-form-item><el-form-item><inputdatepickercustom :lable="'发布时间'" v-model="form.pub_time"></inputdatepickercustom></el-form-item></el-form></el-dialog></tempalte>
  <script>
  import InputTextCustom from "@/compoments/InputTextCustom" 
import InputCustomSelect from "@/compoments/InputCustomSelect" 
import InputDatePickerCustom from "@/compoments/InputDatePickerCustom" 

  export default {
    name:'test',
    components:{
      InputTextCustom,InputCustomSelect,InputDatePickerCustom
    }, 
    data() {
      return {"rules":{"title":[{"required":true,"message":"请填写标题","trigger":["change","blur"]}],"author":[{"required":true,"message":"请填写作者","trigger":["change","blur"]}],"catalog":[{"required":true,"message":"请选择分类","trigger":["change","blur"]}]},"form":{"title":null,"author":null,"catalog":null,"pub_time":null}}
    }
  }
  </script>
  
  <style lang="scss">
    .test-container{

    }
  </style>
  