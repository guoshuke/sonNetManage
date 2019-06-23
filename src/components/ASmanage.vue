<template>
    <div class="box">
        <!-- 输入框 -->
        <i-form :model="formItem"  label-position="left" id="form">
            <Row type="flex">
                <i-col span="7" order="1" id="input1">
                    <Form-item label="AS号">
                        <i-input :value.sync="formItem.input" v-model="formItem.ASnumber" placeholder="输入文字" class="pinput" ></i-input>
                    </Form-item>
                </i-col>
                <i-col span="7" order="2">
                     <Form-item label="省份">
                        <i-input :value.sync="formItem.input" v-model="formItem.province" placeholder="输入文字" class="pinput" ></i-input>
                    </Form-item>
                </i-col>
                <i-col span="7" order="3" class="select">
                    <Form-item label="使用状态">
                        <i-select :model.sync="formItem.select" v-model="formItem.status" class="pinput" >
                            <i-option :value="item.value" v-for="item in formItem.statusList" :key="item.value">{{item.label}}</i-option>
                        </i-select>
                    </Form-item>
                </i-col>
                <i-col span="3" order="4" id="search">
                    <div class="searchBar">
                        <Button type="primary" icon="ios-search" size="small" class="btn1 pbtn">查询</Button>
                        <Button  icon="ios-refresh" size="small" class="pbtn">重置</Button>
                    </div>
                </i-col>
            </Row>
        </i-form>
          <Divider />
        <!-- 中部按钮 -->
        <Row>
            <Col span="18">
                <Button type="primary" class="btn"  @click="showAddModal" ><img src="../assets/icon/icon_add.svg" alt="">新增</Button>
                <Button type="primary" class="btn" @click="showEditModal" ><img src="../assets/icon/icon_edit.svg" alt="">修改</Button>
                <Button type="primary" class="btn"><img src="../assets/icon/icon_delete.svg" alt="">删除</Button>
            </Col>
            <Col span="6" class="btn2">
                <Button type="primary" > <Icon type="ios-open-outline" />导出</Button>
            </Col>
        </Row>
        <!-- 表格区 -->
          <Table :columns="columns" border :data="data" size="small" ref="table" class="table1" height="500"></Table>
        <!-- 底部分页 -->
         <Page :total="100" show-elevator show-total show-sizer :page-size-opts='[15,30,45,60]' :page-size='15' id="page" />
        <!-- As新增模态框 -->
        <ASAddModal ref="AsAddForm"></ASAddModal>
        <!-- AS编辑模态框 -->
        <ASEditModal ref='AsEditForm'></ASEditModal>
    </div>
</template>
<script>
import ASAddModal from './ASAddModal.vue'
import ASEditModal from './ASEditModal.vue'
// 初始化表格数据
function initData () {
    var data = []
    for (var i = 0; i < 15; i++) {
       let temp = {
            "name": i+1,
            "select": Math.random().toFixed(1),
            "province": Math.random().toFixed(1),
            "city": Math.random().toFixed(1),
            "address": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "describe": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1),
            "zip": Math.random().toFixed(1)
       }
       data.push(temp)
    }
    return data
}
    export default {
         data () {
            return {
                formItem: {
                    Asnumber:0,
                    province:'',
                    statusList:[
                        {
                            value:"占用",
                            label:'占用'
                        },
                        {
                            value:"预占",
                            label:'预占'
                        }
                    ],
                    status:''

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
                        title: 'AS名称',
                        key: 'province',
                        width: 150
                    },
                    {
                        title: '省份',
                        key: 'city',
                        width: 150
                    },
                    {
                        title: '城市数目',
                        key: 'address',
                        width: 250
                    },
                    {
                        title: 'AS数量',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '用途描述',
                        key: 'describe',
                        width: 200
                    },
                    {
                        title: '是否公有',
                        key: 'zip',
                        width: 200
                    },
                    {
                        title: '备注',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '备注',
                        key: 'zip',
                    }
                ],
                data: initData(),

        }
    },
        methods: {
            // 显示增加弹出框
            showAddModal() {
                this.$refs.AsAddForm.modal1 = true
            },
            //显示编辑模态框
            showEditModal() {
                  this.$refs.AsEditForm.modal2 = true
            }

       },
       mounted () {
           this.formItem.status = this.formItem.statusList[0].value
       },
       components:{
           ASAddModal,
           ASEditModal
       }
    }
</script>
<style lang="less" scoped>
.pinput{
    width:200px;
 }
 #form{
     font-size:12px;
 }
  #search{
      margin-top: 2px;
      font-size:12px;
      text-align: right;
      float: left;
        /* margin: 0 auto; */
        .searchBar{
            display: inline-block;
            button:first-child{
                margin-right: 10px;
            }
            button:last-child{
                background: #fff;
                color: rgba(66,133,244,1);
            }
             /deep/ span{
                    margin-left:-5px;
                }
             .pbtn{
                width:60px;
                background:rgba(66,133,244,1);
                border-radius:4px;
                border:1px solid rgba(66,133,244,1);
                font-size: 12px;
                padding: 4px 0;
            }
        }
    }
  #btn1{
      margin-right: 20px;
  }
    .btn{
      width: 88px;
      margin-right: 10px;
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
  .btn2{
        text-align: right;
       font-size: 14px;
  }
 .table1{
     margin-top:20px;
     font-size: 12px;
      /deep/.ivu-table-small td{
            height: 36px;

        }

 }
 #page{
     margin: 20px;
     float: right;
 }



</style>
