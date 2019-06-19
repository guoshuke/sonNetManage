<template>
    <form class="search" action="#">
        <Row type="flex" justify="center" align="middle" :gutter="64">
            <Col span="21" style="position: relative;">
                <Row>
                    <Col span="8" v-for="item in inputList" class="i-inputs">
                        {{item.lable}}
                        <Input class="i-input" v-model="item.value" :placeholder="item.placeholder" v-if="item.type=='input'"/>
                        <Select class="i-input" v-model="item.value" v-if="item.type=='select'">
                            <Option v-for="i in item.options" :value="i.value" :key="i.value">{{ i.label }}</Option>
                        </Select>
                    </Col>
                </Row>
                <div class="divider"></div>
            </Col>
            <Col span="3" class="searchBar">
                <Button type="primary" icon="ios-search" size="small" class="searchButton" >查询</Button>
                <Button icon="ios-refresh" size="small" class="searchButton">重置</Button>
            </Col>
        </Row>
    </form>
</template>
<script>
    export default {
        data(){
            return{
                inputList:[{
                    lable:'子网名称',
                    type:'input',
                    placeholder:'输入文字',
                    value:''
                },{
                    lable:'上一级子网名称',
                    type:'input',
                    placeholder:'输入文字',
                    value:''
                },{
                    lable:'业务类型',
                    type:'select',
                    options:[{value:0,label:'未选择'}],
                    value:0
                },{
                    lable:'使用状态',
                    type:'select',
                    options:[{value:0,label:'未选择'}],
                    value:0
                },{
                    lable:'管理状态',
                    type:'select',
                    options:[{value:0,label:'未选择'}],
                    value:0
                },{
                    lable:'所属省份',
                    type:'select',
                    options:[{value:0,label:'未选择'}],
                    value:0
                },{
                    lable:'所属城市',
                    type:'select',
                    options:[{value:0,label:'未选择'}],
                    value:0
                }]
            }
        }
    }
</script>
<style lang="less" scoped>
    .search{
        font-size: 12px;
        .divider{
            width:1px;
            height:114px;
            background:rgba(244,244,244,1);
            position: absolute;
            right: 0;top:7px;
        }
        .i-inputs{
            text-align: right;
            margin: 7px 0;
            .i-input{
                width: 200px;
                margin-left: 10px;
                text-align: left;
            }
        }
        .searchBar{
            display: flex;
            flex-direction: column;
            .searchButton{
                padding: 6px 0;
                &:first-child{
                    margin-bottom: 8px;
                }
            }
        }
    }
</style>