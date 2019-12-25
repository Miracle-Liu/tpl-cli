<tempalte><el-dialog><el-form :model="form" :label-width="'80px'"><el-form-item :lable="'标题'" :required="true"><inputtextcustom :lable="'标题'" v-mode="form.title" :required="true"></inputtextcustom></el-form-item><el-form-item :lable="'作者'" :required="true"><inputtextcustom :lable="'作者'" v-mode="form.author"></inputtextcustom></el-form-item><el-form-item :prop="catalog"><inputcustomselect :lable="'分类'" v-mode="form.catalog" :required="true"></inputcustomselect></el-form-item><el-form-item><inputdatepickercustom :lable="'发布时间'" v-mode="form.pub_time"></inputdatepickercustom></el-form-item></el-form></el-dialog></tempalte>
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
      return {"form":{"title":null,"author":null,"catalog":null,"pub_time":null},"catalog":null}
    }
  }
  </script>
  
  <style lang="scss">
    .test-container{

    }
  </style>
  