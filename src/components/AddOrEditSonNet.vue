<template>
    <div class="layout">
        <Sider hide-trigger class="leftBar">左侧列表</Sider>
        <Divider type="vertical" style="margin: 0 1px"/>
        <div class="rightBar">
            <Content>
                <form class="search" action="#">

                    <Row>
                        <Col span="12" v-for="item in inputList" class="i-inputs">
                            {{item.lable}}
                            <span class="must">{{item.must?'*':' '}}</span>
                            <Input class="i-input" v-model="item.value" :placeholder="item.placeholder" size="small"
                                   v-if="item.type=='input'"/>
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
        data() {
            return {
                BusinessType:{
                    lable: '业务类型',
                    must:true,
                    type: 'select',
                    value: '非集客任务',
                    options:['非集客任务']
                },
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
        }
    }
</script>
<style lang="less" scoped>
    .layout {
        display: flex;
        border: none;
       .leftBar {
            background-color: #fff;
            width: 200px;
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
        }
    }
</style>