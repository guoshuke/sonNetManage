<!--报表业务-->
<template>
    <div>
        <div class="typetitle">
            <p>{{titlename}}</p>
            <div>
                总需要导入 <span>1658888</span> ，已导入 <span>0</span>,待导入 <span>1658888</span> 双击列表行可查看导入进度详情
            </div>
        </div>
        <div class="exportBut">
            <Button type="primary" ><img src="../assets/icon/export.svg" alt="">导出</Button>
        </div>
        <Table :columns="columns" :data="tabledata" size="small" ref="table"   height="500" :loading="loading"></Table>
        <div style="margin: 10px;overflow: hidden">
            <div class="fr">
                <Page :total="100" :current="1" @on-change="changePage" show-total show-elevator show-sizer></Page>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ReportManagement",
        props:{
            pageName: {
                type: String
            }
        },
        data() {
            return {
                titlename:'',
                loading:false,
                columns:[],
                tabledata:[],
            }
        },
        created(){
            this.getData(this.pageName)
        },
        methods:{
            getData(name){
                if (name==='导入进度表'){
                    this.titlename='导入进度'
                    console.log(121)
                }else if(name==='业务类型统计表'){
                    this.titlename='各业务类型使用统计'
                    console.log(121111)
                }
            },
            changePage(){

            }
        }
    }
</script>

<style lang="less" scoped>
.typetitle{
    p{
        border-left: 4px solid #4285F4;
        padding-left: 3px;
    }
    div{
        padding: 20px;
        margin-top: 10px;
        border:1px solid rgba(239,243,247,1);
        span{
            color: #4285F4;
        }
       span:last-child{
           color: #FF6057;
       }
    }
}
.exportBut{
    text-align: right;
    margin: 20px 0px;
    /deep/ .ivu-btn {
        width: 88px;
        margin-right: 10px;
        font-size: 14px;

        img {
            vertical-align: middle;
            width: 20px;
            height: 20px;
            margin-right: 3px;
        }
    }
}
</style>
