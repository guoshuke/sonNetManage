<template>
    <div>
<!--  输入框-->
        <Form ref="formValidate" :model="formData"
              label-position="right" :label-width="130">
            <Row type="flex" justify="center"  align="middle" class="code-row-bg" :gutter="120">
                <Col span="21">
                    <Row type="flex" >
                        <Col span="8" v-for="(item, index) in formList" :key="index">
                            <FormItem :label="item.label" :prop="item.label" v-if="item.type=='input'" >
                                <Input v-model="formData[item.key]" :placeholder="item.placeholder" class="inputs"></Input>
                            </FormItem>
                            <FormItem :label="item.label" :prop="item.label" v-if="item.type=='select'">
                                <Select v-model="item.value" class="inputs">
                                    <Option  v-for="(i, index) in item.option" :key="index" :value="i.type">{{i.label}}</Option>
                                </Select>
                            </FormItem>
                        </Col>
                        <div class="drive"></div>
                    </Row>
                </Col>
                <Col span="3" class="searchBar">
                        <Button type="primary" icon="ios-search" size="small" class="btn1 pbtn">查询</Button>
                        <Button  icon="ios-refresh" size="small" class="pbtn">重置</Button>
                </Col>
            </Row>
        </Form>
        <div class="line"></div>
<!--        按钮区-->
        <div>
            <Row>
                <Col span="18">
                    <Button type="primary" class="btn" ><img src="../assets/icon/icon_add.svg" alt="">新增</Button>
                    <Button type="primary" class="btn" ><img src="../assets/icon/icon_edit.svg" alt="">查看详情</Button>
                    <Button type="primary" class="btn" ><img src="../assets/icon/icon_edit.svg" alt="">修改</Button>
                    <Button type="primary" class="btn"><img src="../assets/icon/icon_delete.svg" alt="">删除</Button>
                </Col>
                <Col span="6" class="btn2">
                    <Button type="success" class="rbtn"><img src="../assets/icon/export.svg" alt="">导入</Button>
                    <Button type="primary" class="rbtn"><img src="../assets/icon/export.svg" alt="">导出</Button>
                </Col>
            </Row>
        </div>
        <!-- 表格区 -->
        <Table :columns="columns" border :data="data" size="small" ref="table" class="table1" height="500"></Table>

<!--         底部分页-->
            <div style="margin-top:20px; overflow:hidden">
                <div class="page">
                    <Page :total="100" :current="1" show-elevator show-total show-sizer :page-size-opts='[15,30,45,60]' :page-size='15' id="page" />
                </div>
            </div>
    </div>


</template>
<script>
    function initData () {
      let data = []
      for (let i = 0; i < 15; i ++) {
        data.push({
          "name": i+1,
          "select": Math.random().toFixed(1),
          "apnName": Math.random().toFixed(1),
          "apnType": Math.random().toFixed(1),
          "isValid": Math.random().toFixed(1),
          "apnId": Math.random().toFixed(1),
          "isSpescial": Math.random().toFixed(1),
          "zip": Math.random().toFixed(1),
          "zip": Math.random().toFixed(1),
          "zip": Math.random().toFixed(1),
          "zip": Math.random().toFixed(1)
        })
      }
      return data
    }
  export default {
    data () {
      return {
        ruleValidate:[],
        formList:[
          {
            label: 'APN名称',
            type: 'input',
            placeholder: '请输入',
            key: 'apnName',
            value: ''
          },
          {
            label: 'APN类型   ',
            type: 'select',
            placeholder: '请输入',
            key: 'apnType',
            option: [{type: 0, label: '全网'}],
            value: 0
          },
          {
            label: '业务类型',
            type: 'select',
            placeholder: '请输入',
            key: 'busType',
            option:[{type: 0, label:'物联网专线-CMNET模式'}],
            value: 0
          },
          {
            label: '通用申请工单编号'
            type: 'input',
            placeholder: '请输入',
            key: 'gongdanNum',
            value: ''
          }

        ],
        formData: {
          apnName: '',
          gongdanNum: '',
          apnType: null,
          busType: null

        },
        columns: [
          {
            title: '序',
            key: 'name',
            width: 60,
            fixed: 'left',

          },
          {
            type: 'selection',
            key: 'select',
            width: 70,
            align: 'center'

          },
          {
            title: 'APN名称',
            key: 'apnName',

          },
          {
            title: 'APN类型',
            key: 'apnType',

          },
          {
            title: '是否有效',
            key: 'isValid',

          },
          {
            title: 'VPN ID',
            key: 'apnId',

          },
          {
            title: '是否NB专用APN',
            key: 'isSpescial',

          },
          {
            title: '接入方式',
            key: 'zip',

          },
          {
            title: 'GGSN/PGW信息',
            key: 'zip',

          },
          {
            title: '防火墙名称/CE名称',
            key: 'zip',

          },
          {
            title: '是否有容灾',
            key: 'zip',

          },

        ],
        data: initData()
      }
    }
  }
</script>
<style lang="less" scoped>

    /deep/.inputs{
        width: 80%;
    }
    .drive{
        width: 1px;
        height: 80px;
        background: #ccc;
        position: absolute;
        right: 0;
        top: -2%;
    }
    .searchBar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: -30px;
       .pbtn{
           width: 64px;
           height: 30px;
           margin-left: -30px;
       }
        .pbtn:nth-child(1){
            margin-bottom: 10px;
        }
    }
    .line{
        width: 100%;
        height: 1px;
        background: #ccc;
        margin: 12px 0 30px 0;
    }
    .btn{
        width: 88px;
        margin-right: 20px;
        font-size: 14px;
        img{
            vertical-align: text-top;
            width: 20px;
            height: 20px;
        }
        &:first-child img{
            width: 14px;
            height: 14px;
            margin-right: 4px;
            vertical-align: middle;
        }
    }
    .btn:nth-child(2){
        width:110px;
    }
    .rbtn{
        margin-right: 20px;
        img{
            vertical-align: text-top;
            width: 20px;
            height: 20px;
        }
    }
    .btn2{
        text-align: right;
        font-size: 14px;
    }
   .table1{
       margin-top: 20px;
   }
    .page{

        float: right;
    }


</style>
