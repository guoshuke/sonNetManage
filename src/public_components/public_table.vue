<template>
    <div>
        <div class="buttonBar">
            <Button type="primary"><img src="../assets/icon/icon_add.svg" alt="">新增</Button>
            <Button type="primary"><img src="../assets/icon/icon_edit.svg" alt="">修改</Button>
            <Button type="primary"><img src="../assets/icon/icon_delete.svg" alt="">删除</Button>
            <Button type="primary">拆分子网</Button>
            <Button type="primary">合并子网</Button>
            <Button type="primary">规划</Button>
            <Button type="primary">取消规划</Button>
            <Button type="primary" class="fr">导出</Button>
        </div>
        <Table :columns="columns" :data="data" size="small" ref="table" class="sonNetTable"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>
<script>
    function initData() {
        var data = []
        var n = 15;
        for(let i = 0; i < n ; i++ ){
            let tempObj={
                "name": i+1,
                "fav": Math.floor(Math.random()*10000),
                "show": Math.floor(Math.random()*1000),
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
        data () {
            return {
                columns: [
                    {
                        "title": "序号",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
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
                        "title": "Weak",
                        "key": "weak",
                        "width": 150,
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
                        "title": "7, retained",
                        "key": "day7",
                        "width": 150,
                    },
                    {
                        "title": "30, retained",
                        "key": "day30",
                        "width": 150,

                    },
                    {
                        "title": "The next day left",
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
                data: initData()
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            },
            changePage(){}
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
                /* 第一个图标尺寸和另外两个不同  需要单独设置*/
            }
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
