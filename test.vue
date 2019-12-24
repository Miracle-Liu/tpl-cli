<tempalte><el-dialog><el-form><el-form-item><inputtextcustom></inputtextcustom></el-form-item><el-form-item><inputtextcustom></inputtextcustom></el-form-item><el-form-item><inputcustomselect></inputcustomselect></el-form-item><el-form-item><inputdatepickercustom></inputdatepickercustom></el-form-item></el-form></el-dialog></tempalte>
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
  