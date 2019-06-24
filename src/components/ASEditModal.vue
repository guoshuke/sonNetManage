<!--  -->
<template>
  <div>
      <!-- 编辑的弹出框 -->
        <Modal v-model="modal2" width="750" class="addModal">
            <p slot="header" style="color:#fff;">
                <span>修改</span>
            </p>
            <div style="text-align:center" class="middleInput">
                <Form ref="formValidate" :model="formData" :rules="ruleValidate" :label-width="80" label-position="right">
                    <div class="formBar">
                        <Form-item  label="省份" prop="province">
                            <Select v-model="formData.province" class="minput">
                                <Option :value="item.value" v-for="item in formData.provinceList" :key="item.value">{{item.label}}</Option>
                            </Select>
                        </Form-item>
                        <FormItem label="城市数目" prop="PrNumber" class="rBtn">
                            <Input v-model="formData.PrNumber" placeholder="输入文字" class="minput" />
                        </FormItem>
                    </div>
                    <div class="formBar">
                        <Form-item  label="AS数量" prop="ASNumber">
                          <Input v-model="formData.ASNumber" class="minput" />
                        </Form-item>
                        <FormItem label="AS名称" prop="ASName" class="rBtn">
                          <Input v-model="formData.ASName" placeholder="输入文字" class="minput" />
                        </FormItem>
                    </div>
                    <div class="formBar">
                        <Form-item  label="用途描述" prop="useDescription" >
                          <Input v-model="formData.useDescription" class="minput" placeholder="输入文字" />
                        </Form-item>
                        <Form-item  label="是否公有" prop="isPublic" class="rBtn">
                            <Select v-model="formData.isPublic" class="minput">
                              <Option :value="item.value" v-for="item in formData.isPublicList" :key="item.value">{{item.label}}</Option>
                            </Select>
                        </Form-item>
                    </div>
                    <div class="formBar">
                        <Form-item  label="备注" prop="">
                          <Input v-model="formData.remark" class="minput" placeholder="输入文字" />
                        </Form-item>
                    </div>
                </Form>
            </div>
            <div slot="footer" class="fbtn">
              <Button @click="handleEsc" class="fpbtn">取消</Button>
              <Button type="primary" class="fpbtn">提交</Button>
            </div>
        </Modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
          modal2: false,
          formData: {
              province:'',
              provinceList:[
                {
                  label:'河南',
                  value:'河南'
                },
                {
                  label:'山西',
                  value:'山西'
                }
              ],
              PrNumber: '',
              ASNumber: 2,
              ASName:'',
              useDescription:'',
              isPublic:'',
              isPublicList:[
                {label:'是',value:'是'},
                {label:'否',value:'否'}
              ],
               remark:''
          },
          ruleValidate: {
              province: [
                  { required: true, trigger: 'blur' }
              ],
              PrNumber: [
                  { required: true, message: '请输入城市数目', trigger: 'blur' },
              ],
              ASNumber: [
                  { required: true, message: '请输入AS数量', trigger: 'blur' },
              ],
              ASName: [
                  { required: true, message: '请输入AS名称', trigger: 'blur' },
              ],
             useDescription: [
                  { required: true, message: '请输入您的用途描述', trigger: 'blur' },
              ],
             isPublic: [
                  { required: true, message: '请选择', trigger: 'blur' },
              ],
          }
      }
    },
  methods: {
    // 取消按钮
    handleEsc() {
      this.modal2 = false
    }
  },
  mounted () {

    this.formData.province = this.formData.provinceList[0].value
    this.formData.isPublic = this.formData.isPublicList[0].value
  }
}

</script>
<style lang='less' scoped>
    //  新增弹出框样式
.addModal{
    width: 750px;
    height: 298px;
    /deep/.ivu-modal-header {
    width:750px;
    height:50px;
    background:rgba(66,133,244,1);
    border-radius:0px 0px 4px 4px;
  }
  /deep/.ivu-modal-close .ivu-icon-ios-close{
        color:#fff;
    }
  /deep/.ivu-modal-body{
    margin-top:18px;
    padding:  0 28px 0 77px;
    box-sizing: border-box;
    }
     .middleInput{
      height: 200px;
      /deep/.ivu-form-item {
        margin-bottom: 18px;
      }
    }
}
.minput{
  width: 200px;
  text-align: left;
}
 .fbtn{
    text-align: center;


 }
 .formBar{
    display: flex;

}
.rBtn{
    margin-left: 90px;

}
</style>
