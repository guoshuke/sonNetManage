<template>
    <div class="box">
        <!-- 输入框 -->
        <i-form :model="formItem"  label-position="left" id="form">
            <Row type="flex">
                <i-col span="6" order="1" id="input1">
                    <Form-item label="AS号">
                        <i-input :value.sync="formItem.input" v-model="formItem.ASnumber" placeholder="输入文字" class="pinput" ></i-input>
                    </Form-item>
                </i-col>
                <i-col span="6" order="2">
                     <Form-item label="省份">
                        <i-input :value.sync="formItem.input" v-model="formItem.province" placeholder="输入文字" class="pinput" ></i-input>
                    </Form-item>
                </i-col>
                <i-col span="6" order="3" class="select">
                    <Form-item label="使用状态">
                        <i-select :model.sync="formItem.select" v-model="formItem.status" class="pinput" >
                            <i-option :value="item.value" v-for="item in formItem.statusList" :key="item.value">{{item.label}}</i-option>
                        </i-select>
                    </Form-item>
                </i-col>
                <i-col span="6" order="4" id="search">
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
                <Button type="primary" class="btn"  @click="modal1 = true" ><img src="../assets/icon/icon_add.svg" alt="">新增</Button>
                <Button type="primary" class="btn"><img src="../assets/icon/icon_edit.svg" alt="">修改</Button>
                <Button type="primary" class="btn"><img src="../assets/icon/icon_delete.svg" alt="">删除</Button>
            </Col>
            <Col span="6" class="btn2">
                <Button type="primary" > <Icon type="ios-open-outline" />导出</Button>
            </Col>
        </Row>
        <!-- 表格区 -->
        <Table width="100%" border :columns="columns2" :data="data3" class="table"></Table>
        <!-- 底部分页 -->
         <Page :total="100" show-elevator show-total show-sizer :page-size-opts='[15,30,45,60]' :page-size='15' id="page" />
         <!-- 新增弹出框 -->
        <Modal v-model="modal1" width="750">
            <p slot="header" style="color:#fff;">
                <span>新增</span>
                <span>Delete confirmation</span>
            </p>
            <div style="text-align:center">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" label-position="right">
                    <div class="formBar">
                        <FormItem label="Name" prop="name">
                            <Input v-model="formValidate.name" placeholder="Enter your name" />
                        </FormItem>
                        <FormItem label="Name" prop="name" class="rBtn">
                            <Input v-model="formValidate.name" placeholder="Enter your name" class="minput" />
                        </FormItem>
                    </div>
                </Form>
            </div>
            <div slot="footer" class="fbtn">
                <Button type="primary">提交</Button>
                <Button type="primary">退出</Button>
            </div>
        </Modal>
    </div>
</template>
<script>
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
                            value:"不占用",
                            label:'不占用'
                        }
                    ],
                    status:''

                },
                columns2: [
                    {
                        title: '序',
                        key: 'name',
                        width: 60,
                        fixed: 'left',
                        size:12
                    },
                    {
                        type: 'selection',
                        key: 'age',
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
                data3: [
                    {
                        name: 1,
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 1,
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }

                ],
                modal1: false,
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{

       },
       mounted () {
           this.formItem.status = this.formItem.statusList[0].value
       }
    }
</script>
<style lang="less" scoped>
.box{
    height: 100%;
    overflow: hidden;
    .pinput{
        width:200px;
        height:28px;
        background:rgba(255,255,255,1);
        border-radius:3px;
        border:1px solid rgba(215,221,229,1);
        margin-left:10px;
    }

    .modal1{
        height: 298px;
    }
    .ivu-modal-header{
        width:750px;
        height:50px;
        background:rgba(66,133,244,1);
        border-radius:0px 0px 4px 4px;
    }

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
                    margin-left:0;
                }
             .pbtn{
                width:62px;
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
 .table{
     margin-top:20px;
     font-size: 12px;
 }
 #page{
     margin: 20px;
     float: right;
 }
 .fbtn{
     text-align: center;
 }
 .formBar{
     display: flex;
     .rBtn{
        margin-right: 10px;
     }
 }

</style>
