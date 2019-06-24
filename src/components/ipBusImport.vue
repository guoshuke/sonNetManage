<!-- ip业务导入 -->
<template>
    <div>
     <!-- 顶部 -->
        <span class="top">上传文件</span>
    <!-- 中间卡片 -->
        <Card style="width:100%;margin-top:13px;height:113px">
            <div style="margin-bottom:20px">
                <span style="font-size:12px;margin-right:24px">导入类型</span>
                <Radio-group v-model="imporType">
                <Radio label="二级规划"></Radio>
                <Radio label="三级规划"></Radio>
                <Radio label="分配未启用"></Radio>
                <Radio label="集客已启动"></Radio>
                <Radio label="非集客已启动"></Radio>
                </Radio-group>
            </div>
            <div>
                <span style="font-size:12px;margin-right:24px">上传文件</span>
                <input type="text" class="fileInput">
                <Button class="btns">选择</Button>
                <Button type="primary" class="priBtn" @click="showResult">下一步</Button>
                <Button class="btns">规划模板</Button>
                <Button class="btns">分配未启用模板</Button>
                <Button class="btns">集客一起用模板</Button>
                <Button class="btns">非集客一起用模板</Button>
                <Button class="btns">小红书</Button>
            </div>
        </Card>
    <!-- 底部信息 -->
         <div style="margin-top:20px" v-if="isShow">
            <!-- 头部 -->
            <span class="footer" style="margin-left:10px">数据检验报告</span>
            <Button class="btns" style="float:right">清空</Button>
            <!-- 文件下载 -->
            <Card style="width:100%;margin-top:13px;height:86px">
                <p style="color:rgba(66,133,244,1);font-size:14px; margin-bottom:8px">点击下载结果文件</p>
                <p>共识别出6行数据需要导入/其中6行数据未通过校验/0行数据导入成功/</p>
            </Card>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      importType:'',
      // 显示结果
      isShow: false
    }
  },

  methods: {
    showResult() {
      this.isShow = true
    }
  }
}

</script>
<style lang='less' scoped>
.top{
  margin-left: 10px;
}
.top::after{
  content:"";
  width: 4px;
  height: 10px;
  display: block;
  height:10px;
  background:rgba(66,133,244,1);
  border-radius:2px;
  position: absolute;
  top:29px;
}
.ivu-radio-wrapper{
  margin-right: 16px;
}
.btns{
  height:28px;
  background:rgba(255,255,255,1);
  border-radius:3px;
  border:1px solid rgba(66,133,244,1);
  line-height: 19px;
  margin-right: 10px;
  color:rgba(66,133,244,1);
}
.priBtn{
    height:28px;
  border-radius:3px;
  line-height: 19px;
  margin-right: 30px;

}
.fileInput{
  width:300px;
  height:28px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(229,229,229,1);
  margin-right: 5px;
  margin-top: 3px;
}
.footer::after{
  content:"";
  width: 4px;
  height: 10px;
  display: block;
  height:10px;
  background:rgba(66,133,244,1);
  border-radius:2px;
  position: absolute;
  top:194px;
}
</style>
