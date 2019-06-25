<template>
    <div class="layout">
        <Sider hide-trigger class="leftBar" v-if="title!='批量修改'" >
            <Menu theme="light" :active-name="name" width="auto" style="display:flex; flex: 1;flex-direction: column;" @on-select="changeSelect">
                <MenuItem :name="index" v-for="(item,index) in netList">
                    <span>{{item.name||'新增子网段'}}</span>
                    <img src="../assets/icon/icon_delete_copy.svg" alt="" @click.stop="deleteItem(index)" v-if="title=='新增'">
                </MenuItem>
            </Menu>
            <div class="addNewNet" @click="addItem" v-if="title=='新增'">
                <Icon type="md-add" />
                <span>新增子网段 </span>
            </div>
        </Sider>
        <Divider type="vertical" style="margin: 0 1px" v-if="title!='批量修改'"/>
        <div class="rightBar">
            <Content>
                <form class="search" action="#" v-for="(tempItem,listIndex) in netList" v-if="listIndex==name">
                    <Row style="margin-top: 8px" v-if="title!='批量修改'">
                        <Col span="12"  class="i-inputs">
                            {{BusinessType.lable}}
                            <span class="must">{{BusinessType.must?'*':' '}}</span>
                            <Select class="i-input" v-model="BusinessType.value" size="small" :disabled="title!='新增'">
                                <Option v-for="i in BusinessType.options" :value="i" :key="i">{{ i }}</Option>
                            </Select>
                        </Col>
                    </Row>
                    <Divider style="margin: 24px 20px 20px 20px" v-if="title!='批量修改'"/>
                    <Row>
                        <Col span="12" v-for="(item,index) in tempItem.inputList" class="i-inputs" v-if="item.lable!='网段名称'||item.lable!='单位所属行业分类'  || title!='批量修改'">
                            {{item.lable}}
                            <span class="must">{{item.must?'*':' '}}</span>
                            <Input class="i-input"  v-model="tempItem.name"  size="small" v-if="index == 0"/>
                            <Input class="i-input"  v-model="item.value" :placeholder="item.placeholder" size="small"
                                   v-if="item.type=='input' && index != 0"/>
                            <Select class="i-input" v-model="item.value" v-if="item.type=='select'" size="small">
                                <Option v-for="i in item.options" :value="i" :key="i">{{ i }}</Option>
                            </Select>
                            <DatePicker v-if="item.type=='date'" type="date" placeholder="Select date" class="i-input" size="small"></DatePicker>
                        </Col>
                    </Row>
                </form>
            </Content>
        </div>
    </div>
</template>
<script>
    export default {
        props:['title'],
        data() {
            return {
                name:0,//默认显示的名字
                BusinessType:{
                    lable: '业务类型',
                    must:true,
                    type: 'select',
                    value: '非集客任务',
                    options:['非集客任务']
                },
                netList:[{
                    name:'1',
                    inputList: [
                    {
                        lable: '网段名称',
                        must:true,
                        type: 'input',
                        placeholder: '',
                        value: '1'
                    }, {
                        lable: '单位名称/具体业务信息',
                        must:true,
                        type: 'input',
                        placeholder: '单位名称',
                        value: ''
                    },{
                        lable: '单位所属分类',
                        type: 'select',
                        value: '其他',
                        options:['其他']
                    }, {
                        lable: '经营许可证编号',
                        must:false,
                        type: 'input',
                        placeholder: '输入文字',
                        value: ''
                    }, {
                        lable: '单位性质',
                        type: 'select',
                        value: '企业',
                        options:['企业']
                    }, {
                        lable: '所属省份',
                        type: 'select',
                        value: '未选择',
                        options:[]
                    }, {
                        lable: '所属地市',
                        type: 'select',
                        value: '未选择',
                        options:[]
                    }, {
                        lable: '所属区县',
                        type: 'select',
                        value: '未选择',
                        options:[]
                    }, {
                        lable: '单位行政级别',
                        type: 'select',
                        value: '无行政级别',
                        options:['无行政级别']
                    }, {
                        lable: '单位所属行业分类',
                        type: 'select',
                        value: '信息传输、计算机服务和软件业',
                        options:['信息传输、计算机服务和软件业']
                    }, {
                        lable: '单位详细地址',
                        must:false,
                        type: 'input',
                        placeholder: '请输入详细地址',
                        value: '江苏省苏州市XX路128号',
                    }, {
                        lable: '联系人姓名(客户侧)',
                        must:false,
                        type: 'input',
                        placeholder: '请输入联系人姓名',
                        value: '李四',
                    }, {
                        lable: '联系人电话(客户侧)',
                        must:false,
                        type: 'input',
                        placeholder: '请输入联系人电话',
                        value: '18888888888',
                    }, {
                        lable: '联系人邮箱(客户侧)',
                        must:false,
                        type: 'input',
                        placeholder: '请输入联系人邮箱',
                        value: '3011000@qq.com',
                    }, {
                        lable: '网关物理位置',
                        must:false,
                        type: 'input',
                        placeholder: '请输入文字',
                        value: '',
                    }, {
                        lable: '使用方式',
                        type: 'select',
                        value: '未知',
                        options:['未知']
                    }, {
                        lable: '分配使用时间',
                        type: 'date',
                        value: '2019-06-11'
                    },{
                        lable: '网关IP地址',
                        must:false,
                        type: 'input',
                        placeholder: '请输入文字',
                        value: '',
                    }, {
                        lable: '业务类型',
                        must:true,
                        type: 'select',
                        value: '自有业务',
                        options:['自有业务']
                    }, {
                        lable: '使用状态',
                        must:true,
                        type: 'select',
                        value: '预占',
                        options:['预占']
                    }, {
                        lable: '管理状态',
                        must:true,
                        type: 'select',
                        value: '一级规划',
                        options:['一级规划']
                    }, {
                        lable: '机房',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '设备名称',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: 'Loopback地址',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '接入端口信息',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '负责部门(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '综合部',
                    }, {
                        lable: '负责人姓名(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '张三',
                    }, {
                        lable: '负责人电话(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入电话号',
                        value: '18888888888',
                    }, {
                        lable: '负责人邮箱(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '3092000@qq.ocm',
                    }, {
                        lable: '备注',
                        must:false,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '用途说明',
                        must:false,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '工单号',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }

                ]}
                ],


                inputList: [
                    {
                        lable: '网段名称',
                        must:true,
                        type: 'input',
                        placeholder: '',
                        value: ''
                    }, {
                        lable: '单位名称/具体业务信息',
                        must:true,
                        type: 'input',
                        placeholder: '单位名称',
                        value: ''
                    },{
                        lable: '单位所属分类',
                        type: 'select',
                        value: '其他',
                        options:['其他']
                    }, {
                        lable: '经营许可证编号',
                        must:false,
                        type: 'input',
                        placeholder: '输入文字',
                        value: ''
                    }, {
                        lable: '单位性质',
                        type: 'select',
                        value: '企业',
                        options:['企业']
                    }, {
                        lable: '所属省份',
                        type: 'select',
                        value: '未选择',
                        options:[]
                    }, {
                        lable: '所属地市',
                        type: 'select',
                        value: '未选择',
                        options:[]
                    }, {
                        lable: '所属区县',
                        type: 'select',
                        value: '未选择',
                        options:[]
                    }, {
                        lable: '单位行政级别',
                        type: 'select',
                        value: '无行政级别',
                        options:['无行政级别']
                    }, {
                        lable: '单位所属行业分类',
                        type: 'select',
                        value: '信息传输、计算机服务和软件业',
                        options:['信息传输、计算机服务和软件业']
                    }, {
                        lable: '单位详细地址',
                        must:false,
                        type: 'input',
                        placeholder: '请输入详细地址',
                        value: '江苏省苏州市XX路128号',
                    }, {
                        lable: '联系人姓名(客户侧)',
                        must:false,
                        type: 'input',
                        placeholder: '请输入联系人姓名',
                        value: '李四',
                    }, {
                        lable: '联系人电话(客户侧)',
                        must:false,
                        type: 'input',
                        placeholder: '请输入联系人电话',
                        value: '18888888888',
                    }, {
                        lable: '联系人邮箱(客户侧)',
                        must:false,
                        type: 'input',
                        placeholder: '请输入联系人邮箱',
                        value: '3011000@qq.com',
                    }, {
                        lable: '网关物理位置',
                        must:false,
                        type: 'input',
                        placeholder: '请输入文字',
                        value: '',
                    }, {
                        lable: '使用方式',
                        type: 'select',
                        value: '未知',
                        options:['未知']
                    }, {
                        lable: '分配使用时间',
                        type: 'date',
                        value: '2019-06-11'
                    },{
                        lable: '网关IP地址',
                        must:false,
                        type: 'input',
                        placeholder: '请输入文字',
                        value: '',
                    }, {
                        lable: '业务类型',
                        must:true,
                        type: 'select',
                        value: '自有业务',
                        options:['自有业务']
                    }, {
                        lable: '使用状态',
                        must:true,
                        type: 'select',
                        value: '预占',
                        options:['预占']
                    }, {
                        lable: '管理状态',
                        must:true,
                        type: 'select',
                        value: '一级规划',
                        options:['一级规划']
                    }, {
                        lable: '机房',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '设备名称',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: 'Loopback地址',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '接入端口信息',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '负责部门(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '综合部',
                    }, {
                        lable: '负责人姓名(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '张三',
                    }, {
                        lable: '负责人电话(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入电话号',
                        value: '18888888888',
                    }, {
                        lable: '负责人邮箱(移动侧)',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '3092000@qq.ocm',
                    }, {
                        lable: '备注',
                        must:false,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '用途说明',
                        must:false,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }, {
                        lable: '工单号',
                        must:true,
                        type: 'input',
                        placeholder: '输入文字',
                        value: '',
                    }

                ]
            }
        },
        methods:{
            deleteItem(index){
                //最少有一个
                if(this.netList.length<2){
                    return
                }
                //删除的是当前项
                if(this.name==index){
                    //不是是第一项
                    if(index!=0){
                        this.name = index-1;
                    }else {
                        this.name=0
                    }
                }
                this.netList.splice(index,1)
            },
            addItem(){
                console.log(22);
                this.netList.push({name:'',inputList: this.inputList})
                const self = this
                setTimeout(()=>{
                    self.name = self.netList.length-1
                })
            },
            changeSelect(name){
                console.log(name);

                this.name = name
            }
        }
    }
</script>
<style lang="less" scoped>
    .layout {
        display: flex;
        border: none;
       .leftBar {
            background-color: #fff;
            display: flex;
            flex-direction: column;
           /deep/ .ivu-layout-sider-children{
               display: flex;
               flex-direction: column;
               flex: 1;
           }
           /deep/ ul{
               display: flex;
               span{
                   flex: 1;
                   color: #4285F4;
                   font-size: 12px;
               }
               li{
                   display: flex;
                   &::after{
                       width: 1px!important;
                       background-color: #dcdee2!important;
                   }
               }
               &::after{
                   width: 0;
               }
           }
           .addNewNet{
               text-align: center;
               width:166px;
               height:38px;
               line-height: 38px;
               background:rgba(227,237,254,1);
               border-radius:4px;
               border:1px solid rgba(66,133,244,0.3);
               padding: 0px 24px;
               color: #4285F4;
               cursor: pointer;
               margin-bottom:10px;
               i{
                   color: #4285F4;
                   font-size: 12px;
                   &::before{
                       vertical-align: middle;
                       line-height: 38px;
                   }
                   margin-right: 8px;
               }
           }
        }
        .rightBar {
            flex: 1;
            background-color: #fff;
        }
        .search {
            font-size: 12px;
            padding: 0 ;
            .divider {
                width: 1px;
                height: 114px;
                background: rgba(244, 244, 244, 1);
                position: absolute;
                right: 0;
                top: 7px;
            }
            .i-inputs {
                text-align: right;
                margin: 7px 0;
                .i-input {
                    width: 200px;
                    margin-left: 10px;
                    text-align: left;
                }
            }
            /deep/ .ivu-input-small,/deep/ .ivu-select-small.ivu-select-single .ivu-select-selection{
                height: 28px;
            }
            /deep/ .ivu-select-selected-value{
                height: 26px!important;
                line-height: 26px!important;
            }
            .searchBar {
                display: flex;
                flex-direction: column;
                align-items: center;
                .searchButton {
                    width: 60px;
                    /deep/ span {
                        margin-left: 0;
                    }
                    padding: 3px 0;
                    &:first-child {
                        margin-bottom: 8px;
                    }
                }
            }
            .must{
                vertical-align: middle;
                margin-left:3px;
            }
            .ivu-divider-horizontal{
                
            }
        }
    }
</style>