<template>
    <div>
        <div class="buttonBar" >
            <Button type="primary"  @click="reset"><img src="../assets/icon/icon_add.svg" alt="">还原</Button>
            <Button type="primary"  @click="openModal"><img src="../assets/icon/icon_edit.svg" alt="">彻底删除</Button>
            <Button type="primary" class="fr" @click="exportData"><img src="../assets/icon/export.svg" alt="" >导出</Button>
        </div>
        <Table :columns="columns" :data="data" size="small" ref="table" class="sonNetTable" border height="500" :loading="loading"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div class="fr">
                <Page :total="100" :current="1" @on-change="changePage" show-total show-elevator show-sizer></Page>
            </div>
        </div>
    </div>
</template>
<script>
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
        data(){
            return{
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
                loading:true

            }
        },
        mounted(){
            const self = this
            setTimeout(()=>{
                self.data = initData()
                self.loading = false
            },100)
        },
        methods:{
            reset(){
                this.$Modal.success({
                    title: "还原成功",
                    content: ''
                });
            },
            openModal(m){
                console.log(m);
                this.modalTitle=m
                this.$Modal.confirm({
                    title: '确认彻底删除吗',
                    content: '',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            exportData(){
                this.$Modal.success({
                    title: "导出成功",
                    content: ''
                });
            }
        },
        components:{

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
            min-width: 88px;
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