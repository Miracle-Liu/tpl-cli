<tempalte><el-dialog><el-form><el-form-item lable="&#x6807;&#x9898;" required="true"><inputtextcustom lable="&#x6807;&#x9898;" v-mode="title" required="true"></inputtextcustom></el-form-item><el-form-item lable="&#x4F5C;&#x8005;" required="true"><inputtextcustom lable="&#x4F5C;&#x8005;" v-mode="author"></inputtextcustom></el-form-item><el-form-item prop="catalog"><inputcustomselect lable="&#x5206;&#x7C7B;" v-mode="catalog" required="true"></inputcustomselect></el-form-item><el-form-item><inputdatepickercustom lable="&#x53D1;&#x5E03;&#x65F6;&#x95F4;" v-mode="pub_time"></inputdatepickercustom></el-form-item></el-form></el-dialog></tempalte>
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
  