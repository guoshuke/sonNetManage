<template>
    <div>
        <!-- 输入框 -->
        <i-form :model="formItem" :label-width="100" label-position="right" id="form">
            <Row type="flex">
                <i-col span="6" order="1" id="input1">
                    <Form-item label="AS号">
                        <i-input :value.sync="formItem.input" placeholder="输入文字" size="small"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="6" order="2">
                     <Form-item label="省份">
                        <i-input :value.sync="formItem.input" placeholder="输入文字" size="small"></i-input>
                    </Form-item>
                </i-col>
                <i-col span="6" order="3" id="select">
                    <Form-item label="使用状态">
                        <i-select :model.sync="formItem.select" value="beijing" size="small">
                            <i-option value="beijing" >占用</i-option>
                            <i-option value="shanghai">上海市</i-option>
                            <i-option value="shenzhen">深圳市</i-option>
                        </i-select>
                    </Form-item>
                </i-col>
                <i-col span="6" order="4" id="search">
                    <Button type="primary" icon="ios-search" size="small" id="btn1">查询</Button>
                    <Button  icon="ios-refresh" size="small">重置</Button>
                </i-col>
            </Row>
        </i-form>
        <!-- 中部按钮 -->
        <Row>
            <Col span="18">
               <Button type="primary" class="btn"><Icon type="ios-list-box-outline"  @click="showAdd" />新增</Button>
               <Button type="primary" class="btn"><Icon type="ios-create-outline" />修改</Button>
               <Button type="primary" class="btn"><Icon type="ios-trash-outline"/>删除</Button>
            </Col>
            <Col span="6">
                <Button type="primary" class="btn2"> <Icon type="ios-open-outline" />导出</Button>
            </Col>
        </Row>
        <!-- 表格区 -->
        <Table width="100%" border :columns="columns2" :data="data3" id="table"></Table>
        <!-- 底部分页 -->
         <Page :total="100" show-elevator show-total show-sizer  :page-size-opts='[15,30,45,60]' :page-size='15' id="page" />
         <!-- 新增弹出框 -->
         <Modal
            v-model="modal1"
            title="新增"
            @on-ok="ok"
            @on-cancel="cancel">
            <p>Content of dialog</p>
            <p>Content of dialog</p>
            <p>Content of dialog</p>
        </Modal>
    </div>
</template>
<script>
    export default {
         data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
                columns2: [
                    {
                        title: '序',
                        key: 'name',
                        width: 50,
                        fixed: 'left',
                        minWidth:36
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
                        width: 100
                    },
                    {
                        title: '省份',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: '城市数目',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'AS数量',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: '用途描述',
                        key: 'describe',
                        width: 100
                    },
                    {
                        title: '是否公有',
                        key: 'zip',
                        width: 100
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
                modal1: false
            }
        },
        methods:{
            showAdd() {
               this.modal1 = true
            },
            ok() {

            },
            cancel() {

            }
        }
    }
</script>
<style scoped>
 #form{
     font-size:12px;
 }
    #select{
    margin-left: 5%;

    }
  #input1 {
     margin-left: -5%;
  }
  #search{
      margin-top: 5px;
  }
  #btn1{
      margin-left: 49%;
      margin-right: 5%;
      text-align: center;
  }
  .btn{
      margin-right: 1%;
      font-size: 14px;
  }
  .btn2{
      margin-left: 72%;
       font-size: 14px;
  }
 #table{
     margin-top:20px;
 }
 #page{
     margin: 20px;
     float: right;
 }

</style>
