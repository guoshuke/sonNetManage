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
                    <Radio label="集客已启动"></Radio>
                    <Radio label="非集客已启动"></Radio>
                </Radio-group>
            </div>
            <div width="100%">
                <div class="lbutton">
                    <span style="font-size:12px;margin-right:24px">上传文件</span>
                    <input type="text" class="fileInput">
                    <Button class="btns">选择</Button>
                    <Button type="primary" class="priBtn" @click="showResult">下一步</Button>
                </div>
                <div class="rbutton">
                    <Button class="btns">规划模板</Button>
                    <Button class="btns">分配未启用模板</Button>
                    <Button class="btns">集客一起用模板</Button>
                    <Button class="btns">非集客一起用模板</Button>
                    <Button class="btns">小红书</Button>
                </div>
            </div>
        </Card>
    <!-- 底部信息 -->
         <div style="margin-top:20px; overflow:hidden" v-if="isShowResult">
            <!-- 头部 -->
            <span class="footer" style="margin-left:10px">数据检验报告</span>
            <Button class="btns" style="float:right;margin-right:0" @click="deleteForm">清空</Button>
            <!-- 文件下载 -->
            <Card style="width:100%;margin-top:13px;height:86px">
                <p style="color:rgba(66,133,244,1);font-size:14px; margin-bottom:8px;cursor: pointer;">点击下载结果文件</p>
                <p>共识别出{{tNumber}}行数据需要导入/其中{{fNumber}}行数据未通过校验/{{sNumber}}行数据导入成功/</p>
            </Card>
            <!-- 异常数据分析 -->
            <div style="margin-top:10px">
                <span >异常数据列表</span>
                <!-- 异常数据展示 -->
                 <Table style="margin-top:10px" border :columns="unusualColumns" :data="unusualData" class="unusualTable"></Table>
            </div>
            <!-- 重复数据列表 -->
            <div style="margin-top:10px">
                <span>重复数据列表</span>
                <Table border ref="selection" style="margin-top:10px" :columns="repeatColumns" :data="repeatData">
                    <template slot-scope="{ row }" slot="name">
                        <strong>{{ row.name }}</strong>
                    </template>
                    <template slot-scope="{ row, index }" slot="action">
                        <span style="color:rgba(66, 133, 244, 1);cursor: pointer">覆盖</span>
                    </template>
                </Table>
                <!-- 分页 -->
                <div style="width:100%;margin-top:10px">
                    <div class="repeatpage">
                        <Page :total="50" :current="1" show-elevator show-total show-sizer :page-size-opts='[10,15,20,25]' :page-size='15' />
                    </div>
                    <div class="repeatpage">
                        <Button type="primary" style="margin-right:10px">选中覆盖</Button>
                        <Button type="primary">全部覆盖</Button>
                    </div>
                </div>
            </div>
        </div>
    <!-- 取消弹出框 -->
    <Modal
        v-model="showModal"
        title="清除"
        @on-ok="ok"
        @on-cancel="cancel"
        class-name="primaryModal"
        >
        <div style="height:80px;line-height:80px; text-align:center">
            <Icon type="ios-information-circle" style="color:#F5A623"></Icon>
            <span>确定要清空导入结果？</span>
        </div>
    </Modal>

  </div>
</template>

<script>

import PublicModal  from '../public_components/publicModal.vue'
export default {
  data () {
    return {
        width:'30%',
        showModal:false,
        importType:'',
        // 显示结果
        isShowResult: false,
        tNumber:6,
        fNumber:0,
        sNumber:0,
    //   异常数据
        unusualColumns: [

            {
                title: '错误行数',
                key: 'name',
                align:'center',
                width:150
            },
            {
                title: '网段名称',
                key: 'age',
                width:150
            },
            {
                title: '异常信息',
                key: 'address',
                align:'center',

            },
            {
                title: '',
                key: 'address',
                align:'center',
            }
        ],
        unusualData: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04'
            }
        ],
        //  重复数据
        repeatColumns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '错误行数',
                        width:150,
                        key: 'name',
                        align: 'center'
                    },
                    {
                        title: '网段名称',
                        width:150,
                        key: 'age'
                    },
                    {
                        title: '异常信息',
                        key: 'address',
                        width:300,
                        align: 'center'
                    },
                    {
                        title: '操作',
                        slot: 'action',

                    }
                ],
        repeatData: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
                date: '2016-10-03'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
                date: '2016-10-01'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
                date: '2016-10-02'
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
                date: '2016-10-04'
            }
        ]
    }
  },
  components: {
      PublicModal
  },

  methods: {
    showResult() {
        this.isShowResult = true
    },
    deleteForm() {
        this.showModal = true
    },
    ok () {
        this.isShowResult = false
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
.lbutton{
    width: 45%;
    display: inline-block;
}
.rbutton{
    width: 55%;
    display: inline-block;
}
.btns{
  height:28px;
  background:rgba(255,255,255,1);
  border-radius:3px;
  border:1px solid rgba(66,133,244,1);
  line-height: 19px;
  margin-right: 1%;
  color:rgba(66,133,244,1);
}
.priBtn{
  height:28px;
  border-radius:3px;
  line-height: 19px;
  margin-right: 18px;

}
.fileInput{
  width:50%;
  height:28px;
  background:rgba(255,255,255,1);
  border-radius:4px;
  border:1px solid rgba(229,229,229,1);
  margin-right: 8px;
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
.unusualTable{
    width: 100%;
}
.repeatpage{
    width:50%;
    float:left;
}
.ivu-modal-header{

}
</style>
