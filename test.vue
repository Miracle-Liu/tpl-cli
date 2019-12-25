<tempalte><el-dialog><el-form><el-form-item :lable="'标题'" :required="true"><inputtextcustom :lable="'标题'" v-mode="title" :required="true"></inputtextcustom></el-form-item><el-form-item :lable="'作者'" :required="true"><inputtextcustom :lable="'作者'" v-mode="author"></inputtextcustom></el-form-item><el-form-item :prop="catalog"><inputcustomselect :lable="'分类'" v-mode="catalog" :required="true"></inputcustomselect></el-form-item><el-form-item><inputdatepickercustom :lable="'发布时间'" v-mode="pub_time"></inputdatepickercustom></el-form-item></el-form></el-dialog></tempalte>
  <script>
  import InputTextCustom from "@/compoments/InputTextCustom" 
import InputCustomSelect from "@/compoments/InputCustomSelect" 
import InputDatePickerCustom from "@/compoments/InputDatePickerCustom" 

  export default {
    name:'test',
    components:{
      InputTextCustom,InputCustomSelect,InputDatePickerCustom
    }, 
  }
  </script>
  
  <style lang="scss">
    .test-container{

    }
  </style>
  