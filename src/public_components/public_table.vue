<template>
    <div>
        <div class="buttonBar" v-if="name=='网段管理'">
            <Button type="primary" @click="openModal('新增')"><img src="../assets/icon/icon_add.svg" alt="">新增</Button>
            <Button type="primary" @click="openModal('修改')"><img src="../assets/icon/icon_edit.svg" alt="">修改</Button>
            <Button type="primary" @click="delelteData('删除')"><img src="../assets/icon/icon_delete.svg" alt="">删除</Button>
            <Button type="primary">拆分子网</Button>
            <Button type="primary">合并子网</Button>
            <Dropdown style="margin-left: 20px;">
                <a href="javascript:void(0)">
                    更多操作
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <!--<DropdownItem>规划</DropdownItem>-->
                    <!--<DropdownItem>取消规划</DropdownItem>-->
                    <DropdownItem @click="openModal('批量选择')">批量选择</DropdownItem>
                    <DropdownItem @click="openModal('批量修改')">批量修改</DropdownItem>
                    <DropdownItem divided @click="openModal('回收站')">回收站</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Button type="primary" class="fr" @click="openModal('导出')"><img src="../assets/icon/export.svg" alt="" >导出</Button>
        </div>
        <div class="buttonBar" v-if="name=='IP地址管理'">
            <Button type="primary" v-show="false" @click="openModal('新增')"><img src="../assets/icon/icon_add.svg" alt="">新增</Button>
            <Button type="primary" @click="openModal('修改')"><img src="../assets/icon/icon_edit.svg" alt="">修改</Button>
            <Button type="primary" class="fr" @click="openModal('导出')"><img src="../assets/icon/export.svg" alt="" >导出</Button>
        </div>
        <Table :columns="columns" :data="data" size="small" ref="table" class="sonNetTable" border height="500" :loading="loading"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div class="fr">
                <Page :total="100" :current="1" @on-change="changePage" show-total show-elevator show-sizer></Page>
            </div>
        </div>
        <publicModal :width="modalTitle=='导出'||modalTitle=='批量选择'?'50%':modalTitle=='批量修改'?'60%':'80%'" :title="modalTitle" :isShow.sync="showModal" :toSubmit="toSubmit">
            <AddOrEditSonNet :title="modalTitle" v-if="modalTitle=='新增'|| modalTitle=='修改'||modalTitle=='批量修改'"></AddOrEditSonNet>
            <exportTable v-if="modalTitle=='导出'"></exportTable>
            <batchSelect v-if="modalTitle=='批量选择'"></batchSelect>
            <recycle v-if="modalTitle=='回收站'"></recycle>
        </publicModal>
    </div>
</template>
<script>
    import pModal from "./publicModal.vue"
    import AddOrEditSonNet from  "../components/AddOrEditSonNet.vue"
    import exportTable  from "../components/exportTable.vue"
    import batchSelect from '../components/batchSelect.vue'
    import recycle  from '../components/recycle.vue'
    function initData() {
        var data = []
        var n = 55;
        for(let i = 0; i < n ; i++ ){
            let tempObj={
                "name": i+1,
                "fav": Math.floor(Math.random()*1000),
                "show": Math.floor(Math.random()*10000),
                "weak": Math.floor(Math.random()*10000),
                "signin": Math.floor(Math.random()*100000),
                "click": Math.floor(Math.random()*10000),
                "active": Math.floor(Math.random()*1000),
                "day7": Math.floor(Math.random()*100000),
                "day30": Math.floor(Math.random()*10000),
                "tomorrow": Math.floor(Math.random()*1000),
                "day": Math.floor(Math.random()*100000),
                "week": Math.floor(Math.random()*10000),
                "month": Math.floor(Math.random()*1000)
            }
            data.push(tempObj)
        }
        return data
    }

    export default {
        props:['name'],
        data () {
            return {
                columns: [
                    {
                        "title": "序号",
                        "key": "name",
                        "fixed": "left",
                        "width": 100
                    },

                    {
                        "title": "Weak",
                        "key": "weak",
                        "type":"selection",
                        "width": 100,
                    },
                    {
                        "title": "Show",
                        "key": "show",
                        "width": 150,
                        filters: [
                            {
                                label: 'Greater than 4000',
                                value: 1
                            },
                            {
                                label: 'Less than 4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "Signin",
                        "key": "signin",
                        "width": 150,
                    },
                    {
                        "title": "Click",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Active",
                        "key": "active",
                        "width": 150,
                    },
                    {
                        "title": "seven",
                        "key": "day7",
                        "width": 150,
                    },
                    {
                        "title": "thirty",
                        "key": "day30",
                        "width": 150,

                    },
                    {
                        "title": "The next",
                        "key": "tomorrow",
                        "width": 150,
                    },
                    {
                        "title": "Day Active",
                        "key": "day",
                        "width": 150,
                    },
                    {
                        "title": "Week Active",
                        "key": "week",
                        "width": 150,
                    },
                    {
                        "title": "Month Active",
                        "key": "month",
                        "width": 150,
                    }
                ],
                data: [],
                loading:true,
                showModal:false,
                modalTitle:'回收站'

            }
        },
        components:{
            publicModal:pModal,
            AddOrEditSonNet,
            exportTable,
            batchSelect,
            recycle
        },
        mounted(){
            const self = this
            setTimeout(()=>{
                self.data = initData()
                self.loading = false
            },3000)
        },
        methods: {
            changePage(){},
            openModal(m){
                console.log(m);
                this.modalTitle=m
                this.showModal = true
                console.log(this.showModal);
            },
            toSubmit(){
                console.log(2);
                console.log(this.showModal);
            },
            delelteData(){
                this.$Modal.confirm({
                    title: '删除',
                    content: '<p>确认删除吗</p>',
                    onOk: () => {
                        this.$Message.info('取消');
                    },
                    onCancel: () => {
                        this.$Message.info('确定');
                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    .fr{
        float: right !important;
    }
    .buttonBar{
        margin-bottom:20px;
        /deep/ .ivu-btn{
            width: 88px;
            margin-right: 10px;
            font-size: 14px;
            img{
                vertical-align: text-top;
                width: 20px;
                height: 20px;
                margin-right: 3px;
            }
            /* 第一个图标尺寸和另外两个不同  需要单独设置*/
            &:first-child img{
                width: 14px;
                height: 14px;
                margin-right: 4px;
                vertical-align: middle;
            }
        }
    }
    .sonNetTable{
        /deep/.ivu-table-small td{
            height: 36px;
        }
    }
</style>
